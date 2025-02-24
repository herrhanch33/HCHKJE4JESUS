import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const RSVP = () => {
  const [rsvpList, setRsvpList] = useState([]);
  const [rsvpName, setRsvpName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetchRSVPs = async () => {
      const querySnapshot = await getDocs(collection(db, "rsvp"));
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setRsvpList(data);
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
      timestamp: new Date().toISOString(),
    });

    alert("RSVP가 제출되었습니다!");
    setRsvpName("");
    setPhone("");
    setLocation("");
  };

  return (
    <div>
      <h1>RSVP</h1>
      <input type="text" value={rsvpName} onChange={(e) => setRsvpName(e.target.value)} placeholder="이름" />
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="전화번호" />
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="출발 지역" />
      <button onClick={handleRSVP}>참석 등록</button>
    </div>
  );
};

export default RSVP;
