import React, { useState, useEffect } from "react";

const Guestbook = () => {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem("guestbookEntries")) || [];
    setEntries(storedEntries);
  }, []);

  const handleAddEntry = () => {
    if (!name || !message) {
      alert("이름과 메시지를 입력해주세요.");
      return;
    }

    const newEntry = {
      id: Date.now(),
      name,
      message,
      timestamp: new Date().toLocaleString(),
    };

    const updatedEntries = [...entries, newEntry];
    setEntries(updatedEntries);
    localStorage.setItem("guestbookEntries", JSON.stringify(updatedEntries));

    setName("");
    setMessage("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>방명록</h1>
      {entries.length === 0 ? (
        <p style={{ textAlign: "center" }}>아직 작성된 방명록이 없습니다.</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {entries.map((entry) => (
            <li key={entry.id} style={{ marginBottom: "10px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
              <strong>{entry.name}</strong> <small>({entry.timestamp})</small>
              <p>{entry.message}</p>
            </li>
          ))}
        </ul>
      )}
      <div style={{ marginTop: '20px'}}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름" style={{ padding: "10px", width: "100%", border: "1px solid #ccc", borderRadius: "5px" }} />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="메시지" style={{ padding: "10px", width: "100%", height: "100px", border: "1px solid #ccc", borderRadius: "5px", resize: "none" }} />
      </div>
      <button onClick={handleAddEntry} style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", marginTop: '20px' }}>추가하기</button>
    </div>
  );
};

const RSVP = () => {
  const [rsvpList, setRsvpList] = useState([]);
  const [rsvpName, setRsvpName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const storedRsvp = JSON.parse(localStorage.getItem("rsvpList")) || [];
    setRsvpList(storedRsvp);
  }, []);

  const handleRSVP = () => {
    if (!rsvpName || !phone || !location) {
      alert("모든 정보를 입력해주세요.");
      return;
    }

    const newRSVP = {
      id: Date.now(),
      rsvpName,
      phone,
      location,
      timestamp: new Date().toLocaleString(),
    };

    const updatedRsvpList = [...rsvpList, newRSVP];
    setRsvpList(updatedRsvpList);
    localStorage.setItem("rsvpList", JSON.stringify(updatedRsvpList));

    setRsvpName("");
    setPhone("");
    setLocation("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>RSVP</h1>
      <input type="text" value={rsvpName} onChange={(e) => setRsvpName(e.target.value)} placeholder="이름" style={{ padding: "10px", width: "100%", border: "1px solid #ccc", borderRadius: "5px" }} />
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="전화번호" style={{ padding: "10px", width: "100%", border: "1px solid #ccc", borderRadius: "5px", marginTop: "10px" }} />
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="출발 지역" style={{ padding: "10px", width: "100%", border: "1px solid #ccc", borderRadius: "5px", marginTop: "10px" }} />
      <button onClick={handleRSVP} style={{ padding: "10px 20px", backgroundColor: "#008CBA", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", marginTop: '20px' }}>참석 등록</button>
    </div>
  );
};

const BackgroundMusic = () => {
  return (
    <audio autoPlay loop>
      <source src="background-music.mp3" type="audio/mpeg" />
    </audio>
  );
};

export { Guestbook, RSVP, BackgroundMusic };
