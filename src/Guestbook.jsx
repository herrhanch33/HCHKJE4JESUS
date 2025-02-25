import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const Guestbook = () => {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchEntries = async () => {
      const querySnapshot = await getDocs(collection(db, "guestbook"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEntries(data);
    };
    fetchEntries();
  }, []);

  const handleAddEntry = async () => {
    if (!name || !message) {
      alert("이름과 메시지를 입력해주세요.");
      return;
    }

    const newEntry = {
      name,
      message,
      timestamp: new Date().toLocaleString(),
    };

    await addDoc(collection(db, "guestbook"), newEntry);
    setEntries([...entries, newEntry]);
    setName("");
    setMessage("");
  };

  return (
    <section className="guestbook-container">
      <h1>방명록</h1>
      <p className="guestbook-intro">
        따뜻한 축하 메시지를 남겨주세요.
      </p>

      {entries.length === 0 ? (
        <p style={{ textAlign: "center", color: "#777" }}>
          아직 작성된 방명록이 없습니다.
        </p>
      ) : (
        <ul className="guestbook-list">
          {entries.map((entry) => (
            <li key={entry.id} className="guestbook-entry">
              <div className="guestbook-header">
                <strong>{entry.name}</strong>
                <span className="timestamp">{entry.timestamp}</span>
              </div>
              <p className="guestbook-message">{entry.message}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="guestbook-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="메시지"
        />
        <button onClick={handleAddEntry}>등록</button>
      </div>
    </section>
  );
};

export default Guestbook;
