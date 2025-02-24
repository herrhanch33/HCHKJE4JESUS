import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Guestbook = () => {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [editId, setEditId] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchEntries = async () => {
      const querySnapshot = await getDocs(collection(db, "guestbook"));
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setEntries(data);
    };
    fetchEntries();
  }, []);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user && user.uid === "YOUR_ADMIN_UID") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    });
  }, []);

  const handleAddOrUpdateEntry = async () => {
    if (!name || !message) {
      alert("이름과 메시지를 입력해주세요.");
      return;
    }

    if (editId && isAdmin) {
      await updateDoc(doc(db, "guestbook", editId), { name, message });
      setEditId(null);
    } else if (!editId) {
      await addDoc(collection(db, "guestbook"), { name, message });
    }

    alert("메시지가 저장되었습니다!");
    setName("");
    setMessage("");
  };

  const handleEdit = (id) => {
    if (!isAdmin) return;
    const entry = entries.find((entry) => entry.id === id);
    setName(entry.name);
    setMessage(entry.message);
    setEditId(id);
  };

  const deleteEntry = async (id) => {
    if (!isAdmin) return;
    await deleteDoc(doc(db, "guestbook", id));
    setEntries(entries.filter(entry => entry.id !== id));
  };

  return (
    <div className="guestbook">
      <h1>📖 방명록</h1>
      {entries.map((entry) => (
        <li key={entry.id}>
          <strong>{entry.name}</strong>
          <p>{entry.message}</p>
          {isAdmin && (
            <>
              <button className="edit-btn" onClick={() => handleEdit(entry.id)}>✏️ 수정</button>
              <button className="delete-btn" onClick={() => deleteEntry(entry.id)}>🗑️ 삭제</button>
            </>
          )}
        </li>
      ))}
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름" />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="메시지" />
      <button onClick={handleAddOrUpdateEntry}>{editId ? "수정 완료" : "추가하기"}</button>
    </div>
  );
};

export default Guestbook;
