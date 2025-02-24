import React, { useState, useEffect } from "react";
import { db, collection, getDocs, addDoc } from "./firebase";

const Guestbook = () => {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchEntries = async () => {
      const querySnapshot = await getDocs(collection(db, "guestbook"));
      setEntries(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchEntries();
  }, []);

  const handleAddEntry = async (e) => {
    e.preventDefault();
    if (!name || !message) {
      alert("이름과 메시지를 입력해주세요.");
      return;
    }

    await addDoc(collection(db, "guestbook"), {
      name,
      message,
      timestamp: new Date().toLocaleString(),
    });

    alert("메시지가 저장되었습니다!");
    setName("");
    setMessage("");
    window.location.reload(); // Refresh to show new entry
  };

  return (
    <div className="guestbook">
      <h1>📖 방명록</h1>
      {/* Display all guestbook entries */}
      <div className="guestbook-entries">
        {entries.length === 0 ? (
          <p>아직 작성된 방명록이 없습니다.</p>
        ) : (
          <ul>
            {entries.map((entry) => (
              <li key={entry.id} className="guestbook-entry">
                <strong>{entry.name}</strong> <small>({entry.timestamp})</small>
                <p>{entry.message}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Guestbook Form */}
      <form onSubmit={handleAddEntry} className="guestbook-form">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름" />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="메시지" />
        <button type="submit">추가하기</button>
      </form>
    </div>
  );
};

export default Guestbook;
