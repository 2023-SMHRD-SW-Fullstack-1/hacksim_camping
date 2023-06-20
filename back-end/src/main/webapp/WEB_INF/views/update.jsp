<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
        <meta charset="UTF-8" />
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<link rel="stylesheet" href="resources/assets/css/main.css" />	
</head>
  <body style="text-align : center;">
     <!-- Wrapper -->
			<div id="wrapper">
				<!-- Menu -->
					<nav id="Update">	
						<ul class="actions vertical">
							<li><h5>회원정보수정</h5></li>
								<form action="member/update" method="post">
									<li>접속한 Email : ${loginMember.email} </li> 
									<!-- <input type="hidden" name="email" value="${loginMember.email}"> -->
									<li><input type="password" name="pw" value="${loginMember.pw }"placeholder="PW를 입력하세요" style="width: 500px; margin: 0 auto;"></li>
									<li><input type="text" name="nick" value="${loginMember.nick }" placeholder="닉네임을 입력하세요" style="width: 500px; margin: 0 auto;"></li>

									<li><input type="submit" value="Update" class="button fit" style="width: 500px; margin: 0 auto;"></li>
								</form>
						</ul>
					</nav>			
			</div>
</body>
</html>