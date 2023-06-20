import React, { useState , useContext } from 'react'

// 사용자 정보를 관리하는 Context

//사용자 정보 수정 컴포넌트 
const UserInform = () => {
    const { user, updateUser } = useContext(UserContext);
    const [password, setPassword] = useState(user.user_pw);
    const [nickname, setNickname] = useState(user.user_nick);
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleNicknameChange = (e) => {
      setNickname(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // 서버로 변경된 비밀번호와 닉네임을 전송하는 로직 작성
      updateUser({ user_pw: password, user_nick: nickname });
    };
  
  return (
      <div>
          <form onSubmit={handleSubmit}>
              <label>
                  Password:
                  <input type="password" value={password} onChange={handlePasswordChange} />
              </label>
              <label>
                  Nickname:
                  <input type="text" value={nickname} onChange={handleNicknameChange} />
              </label>
              <button type="submit">Save</button>
          </form>
      </div>
  )
}

export default UserInform