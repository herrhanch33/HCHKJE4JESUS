import React, { useState } from "react";
import { db, collection, getDocs } from "./firebase";

const AdminPanel = () => {
  const [adminPassword, setAdminPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const querySnapshot = await getDocs(collection(db, "admin"));
    const adminData = querySnapshot.docs[0]?.data();

    if (adminData?.password === adminPassword) {
      setIsAuthenticated(true);
    } else {
      alert("잘못된 비밀번호입니다!");
    }
  };

  return (
    <div className="admin-panel">
      <h2>관리자 로그인</h2>
      <form onSubmit={handleLogin}>
        <input type="password" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} placeholder="비밀번호" />
        <button type="submit">로그인</button>
      </form>
      {isAuthenticated && <p>✅ 관리자 로그인 완료</p>}
    </div>
  );
};

export default AdminPanel;
