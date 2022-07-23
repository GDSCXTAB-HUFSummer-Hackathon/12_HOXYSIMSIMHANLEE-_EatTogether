import react from ''
import school from '../images/hufs_img.jpg'
import logo from '../images/hufs_logo2.jpg'

function Login() {

  return(
    <div className = "login_container">
      <div class="center">
        <h1>로그인</h1>
        <form method="post">
          <div class="txt_field">
            <input type="text" required />
            <span></span>
            <label>Student Number</label>
          </div>
          <div class="txt_field">
            <input type="password" required />
            <span></span>
            <label>Password</label>
          </div>
          <div class="pass">Forgot Password?</div>
          <input type="submit" value="Login" />
          <div class="signup_link">Not a member? <a href="#">Signup</a></div>
        </form>
      </div>
    </div>
  )
}

export default Login;