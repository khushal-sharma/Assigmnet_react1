import './SignUp.css'
const SignUp = ({toggle1}) => {
  return (
    <div>
      
       <div className='page'>
        <div className="Login-wrapper">
        <h1><i>Instagram</i></h1>
        <input type="text" placeholder='Mobile Number or Email'/>
        <input type="password" placeholder='Full Name'/>
        <input type="text" placeholder='Phone number, username, or email'/>
        <input type="password" placeholder='Password'/>
        <button>Sign up</button>
        <h3>have an account? <a onClick={toggle1}>Log in</a></h3>
        </div>
      </div>
    </div>
  )
}

export default SignUp
