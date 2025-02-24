import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";

const Guestbook = () => {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchEntries = async () => {
      const querySnapshot = await getDocs(collection(db, "guestbook"));
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setEntries(data);
    };
    fetchEntries();
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
      await addDoc(collection(db, "guestbook"), { name, message });
    }

    alert("메시지가 저장되었습니다!");
    setName("");
    setMessage("");
  };

  const deleteEntry = async (id) => {
    await deleteDoc(doc(db, "guestbook", id));
  };

  return (
    <div>
      <h1>방명록</h1>
      {entries.map((entry) => (
        <div key={entry.id}>
          <strong>{entry.name}</strong>: {entry.message}
          <button onClick={() => setEditId(entry.id)}>수정</button>
          <button onClick={() => deleteEntry(entry.id)}>삭제</button>
        </div>
      ))}
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름" />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="메시지" />
      <button onClick={handleAddOrUpdateEntry}>{editId ? "수정 완료" : "추가하기"}</button>
    </div>
  );
};

export default Guestbook;
