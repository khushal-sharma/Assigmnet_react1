import './Login.css'
const Login = ({toggle}) => {
  return (
    <div className='page'>
        <div className="Login-wrapper">
      <h1><i>Instagram</i></h1>
      <input type="text" placeholder='Phone number, username, or email'/>
      <input type="password" placeholder='Password'/>
      <button>Sign in</button>
      <h3>Don't have account? <a onClick={toggle}>Sign up</a></h3>
      </div>
    </div>
   
  )
}

export default Login
