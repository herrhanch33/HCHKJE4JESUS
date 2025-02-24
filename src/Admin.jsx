import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const AdminPanel = () => {
  const [rsvpList, setRsvpList] = useState([]);
  const [guestbookEntries, setGuestbookEntries] = useState([]);
  const [adminPassword, setAdminPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      fetchRSVP();
      fetchGuestbook();
    }
  }, [isAuthenticated]);

  const fetchRSVP = async () => {
    const querySnapshot = await getDocs(collection(db, "rsvp"));
    setRsvpList(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  const fetchGuestbook = async () => {
    const querySnapshot = await getDocs(collection(db, "guestbook"));
    setGuestbookEntries(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  const handleLogin = async () => {
    const querySnapshot = await getDocs(collection(db, "admin"));
    const adminData = querySnapshot.docs[0]?.data(); // Fetch stored admin password
  
    if (adminData?.password === adminPassword) {
      setIsAuthenticated(true);
    } else {
      alert("잘못된 비밀번호입니다!");
    }
  };

  return (
    <div className="admin-panel">
      {!isAuthenticated ? (
        <div>
          <h2>🔑 관리자 로그인</h2>
          <input type="password" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} placeholder="관리자 비밀번호 입력" />
          <button onClick={handleLogin}>로그인</button>
        </div>
      ) : (
        <div>
          <h2>🎟️ RSVP 목록</h2>
          <ul>
            {rsvpList.map((entry) => (
              <li key={entry.id}>
                {entry.rsvpName} ({entry.phone}, {entry.location}) - {entry.timestamp}
              </li>
            ))}
          </ul>

          <h2>📖 방명록 목록</h2>
          <ul>
            {guestbookEntries.map((entry) => (
              <li key={entry.id}>
                {entry.name}: {entry.message} - {entry.timestamp}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;