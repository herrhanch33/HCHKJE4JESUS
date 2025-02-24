import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const RSVP = () => {
  const [rsvpName, setRsvpName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchRSVPs = async () => {
      const querySnapshot = await getDocs(collection(db, "rsvp"));
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    };
    fetchRSVPs();
  }, []);

  const handleRSVP = async () => {
    if (!rsvpName || !phone || !location) {
      alert("모든 정보를 입력해주세요.");
      return;
    }

    await addDoc(collection(db, "rsvp"), {
      rsvpName,
      phone,
      location,
      timestamp: new Date().toLocaleString(),
    });

    alert("RSVP가 제출되었습니다!");
    setSubmitted(true);
  };

  return (
    <div className="rsvp-container">
      <h1>🎟️ RSVP</h1>
      {!submitted ? (
        <div className="rsvp-form">
          <input type="text" value={rsvpName} onChange={(e) => setRsvpName(e.target.value)} placeholder="이름" />
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="전화번호" />
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="출발 지역" />
          <button onClick={handleRSVP}>참석 등록</button>
        </div>
      ) : (
        <p className="rsvp-thank-you">🎉 감사합니다! RSVP가 완료되었습니다.</p>
      )}
    </div>
  );
};

export default RSVP;
