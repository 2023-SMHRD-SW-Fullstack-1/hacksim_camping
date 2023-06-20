import React from 'react'

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        user_email: 'aa@kakao.com',
        user_pw: 'aa',
        user_nick: '쑥잎',
      });
    
      const updateUser = (newUserInfo) => {
        // 서버로 요청하여 사용자 정보 업데이트하는 로직 작성
        setUser({ ...user, ...newUserInfo });
      };
  return (
    <div>
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
    </div>
  )
}

export default UserProvider