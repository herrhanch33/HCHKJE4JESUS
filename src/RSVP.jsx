import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const RSVP = () => {
  const [rsvpList, setRsvpList] = useState([]);
  const [rsvpName, setRsvpName] = useState("");
  const [phone, setPhone] = useState("");
  const [attendance, setAttendance] = useState("");

  useEffect(() => {
    const fetchRSVPs = async () => {
      const querySnapshot = await getDocs(collection(db, "rsvp"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRsvpList(data);
    };
    fetchRSVPs();
  }, []);

  const handleRSVP = async () => {
    if (!rsvpName || !phone || !attendance) {
      alert("이름, 전화번호, 참석 여부를 입력해주세요.");
      return;
    }

    await addDoc(collection(db, "rsvp"), {
      rsvpName,
      phone,
      attendance,
      timestamp: new Date().toLocaleString(),
    });

    alert("참석 여부가 제출되었습니다!");
    setRsvpName("");
    setPhone("");
    setAttendance("");
  };

  return (
    <section className="rsvp-container">
      <h1>참석여부</h1>
      <div className="rsvp-form">
        <input
          type="text"
          value={rsvpName}
          onChange={(e) => setRsvpName(e.target.value)}
          placeholder="이름"
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="전화번호"
        />
        <select
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
        >
          <option value="">참석 여부 선택</option>
          <option value="참석">참석</option>
          <option value="불참">불참</option>
        </select>
        <button onClick={handleRSVP}>제출</button>
      </div>
    </section>
  );
};

export default RSVP;
