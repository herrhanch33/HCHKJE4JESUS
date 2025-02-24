import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AdminPanel = () => {
  const [rsvpList, setRsvpList] = useState([]);
  const [guestbookEntries, setGuestbookEntries] = useState([]);
  const [adminPassword, setAdminPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user && user.uid === "YOUR_ADMIN_UID") {
        setIsAuthenticated(true);
        setUser(user);
        fetchRSVP();
        fetchGuestbook();
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    });
  }, []);

  const fetchRSVP = async () => {
    const querySnapshot = await getDocs(collection(db, "rsvp"));
    setRsvpList(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  const fetchGuestbook = async () => {
    const querySnapshot = await getDocs(collection(db, "guestbook"));
    setGuestbookEntries(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  return (
    <div className="admin-panel">
      {isAuthenticated ? (
        <div>
          <h2>📖 방명록 목록</h2>
          <ul>
            {guestbookEntries.map((entry) => (
              <li key={entry.id}>
                {entry.name}: {entry.message}
              </li>
            ))}
          </ul>

          <h2>🎟️ RSVP 목록 (관리자 전용)</h2>
          <ul>
            {rsvpList.map((entry) => (
              <li key={entry.id}>
                {entry.rsvpName} ({entry.phone}, {entry.location}) - {entry.timestamp}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>이 페이지는 관리자만 접근할 수 있습니다.</p>
      )}
    </div>
  );
};

export default AdminPanel;
