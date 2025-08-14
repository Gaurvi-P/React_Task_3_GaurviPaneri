import { useNavigate } from "react-router-dom";
import {useAuthStore} from "../store/auth";
import { useState } from "react";
import user from '../assets/user.png'
import styled from 'styled-components';

function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

 
   const handleLogin = (e) => {
    e.preventDefault();
    if (name.trim()) {
      login(name);
      navigate("/dashboard");
    }
  };


  return (
    // <div style={{ padding: "20px" }}>
    //   <h2>Login</h2>
    //   <input
    //     type="text"
    //     placeholder="Enter name"
    //     value={name}
    //     onChange={(e) => setName(e.target.value)}
    //   />
    //   <button onClick={handleLogin} style={{ marginLeft: "10px" }}>
    //     Login
    //   </button>
    // </div>

    <Wrapper>
          <div className='user-container'>
            <div classname='header-container'>
              <h4 className='greeting'>Hello User</h4>
              <span className='userspan'>Explore more by connecting with us!</span>
            </div>
            <hr />
            <form onSubmit={handleLogin}>
              <img className='user-img' src={user} alt='user-img' />
              <div className="form-container">
                <input type='text' className='username' 
         placeholder="Enter name"
         value={name}
         onChange={(e) => setName(e.target.value)}/>
          <input type='password' className='password' 
         placeholder="Enter password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}/>
                <button type='submit'>Get Started</button>
              </div>
            </form>
            <div>
              <hr />
              
            </div>
    
          </div>
        </Wrapper>
  );
}
const Wrapper = styled.section`
display: flex;
justify-content: center;
align-items: center;
height:100vh;
  

  .user-container {
    box-shadow: 2px 2px 2px 2px #dfdfdf;
    display: flex;           
    flex-direction: column;  
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 320px;            
    background: white;
    border-radius: 8px;
    transform: translateX(100px);
  }

  .header-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .greeting {
    font-size: 20px;
    text-align: center;
    margin: 0;
  }

  .userspan {
    font-size: 13px;
    text-align: center;
    padding: 1rem 0;
    color: blue;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .user-img {
    margin-top: 0.5rem;
    padding: 0.4rem;
    width: 9rem;
    height: 9rem;
    text-align: center;
    border: 1px solid white;
    box-shadow: 1px 1px 1px 1px #dfdfdf;
    border-radius: 50%;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem 0;
    width: 100%;
  }

  input.username,
  input.password {
    padding: 0.5rem;
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 0.7rem;
    font-size: 1.1rem;
    background-color: #0366d6;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #024ea2;
  }

  hr {
    margin-top: 1.2rem;
    border: none;
    border-top: 1px solid #000;
    width: 100%;
  }

  .user-para {
    text-align: center;
  }

  .linkspan {
    font-weight: bold;
  }`;

export default Login;
