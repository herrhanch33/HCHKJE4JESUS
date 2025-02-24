import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc, onSnapshot } from "firebase/firestore";

const Guestbook = () => {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "guestbook"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setEntries(data);
    });
    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const handleAddOrUpdateEntry = async () => {
    if (!name || !message) {
      alert("이름과 메시지를 입력해주세요.");
      return;
    }

    if (editId) {
      await updateDoc(doc(db, "guestbook", editId), { name, message });
      setEditId(null);
    } else {
      await addDoc(collection(db, "guestbook"), { name, message, timestamp: new Date().toLocaleString() });
    }

    alert("메시지가 저장되었습니다!");
    setName("");
    setMessage("");
  };

  const handleEdit = (id) => {
    const entry = entries.find((entry) => entry.id === id);
    setName(entry.name);
    setMessage(entry.message);
    setEditId(id);
  };

  const deleteEntry = async (id) => {
    await deleteDoc(doc(db, "guestbook", id));
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <div className="guestbook">
      <h1>📖 방명록</h1>
      <ul className="guestbook-list">
        {entries.length === 0 ? (
          <p>아직 작성된 방명록이 없습니다.</p>
        ) : (
          entries.map((entry) => (
            <li key={entry.id} className="guestbook-entry">
              <strong>{entry.name}</strong> <small>({entry.timestamp})</small>
              <p>{entry.message}</p>
              <button className="edit-btn" onClick={() => handleEdit(entry.id)}>✏️ 수정</button>
              <button className="delete-btn" onClick={() => deleteEntry(entry.id)}>🗑️ 삭제</button>
            </li>
          ))
        )}
      </ul>

      {/* Input fields */}
      <div className="guestbook-form">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름" />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="메시지" />
        <button onClick={handleAddOrUpdateEntry}>{editId ? "수정 완료" : "추가하기"}</button>
      </div>
    </div>
  );
};

export default Guestbook;
