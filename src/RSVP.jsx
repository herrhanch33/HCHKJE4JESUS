import React, { useState, useEffect } from "react";

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

export default RSVP;
