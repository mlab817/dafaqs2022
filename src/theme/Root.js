import React, {useState} from 'react';
import {signInWithGoogle, logout, auth, signInAuthWithEmailAndPassword} from './firebase';
import '../css/login.css';
import Loading from './Loading';
import {GoogleOutlined} from "@ant-design/icons";

// Default implementation, that you can customize
export default function Root({children}) {
  const [userAuth, setUserAuth] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const [password, setPassword] = useState('')

  auth.onAuthStateChanged(async function(user) {
    if (user !== null) {
      setUserAuth(user);
    }

    setAuthLoading(false);
  });

  const isAllow = () => {
    return userAuth?.email;
  };

  const onChange = ({ target: { name, value }}) => {
    setPassword(prevState => value)
  }

  const handleLogin = async () => {
    if (!password) {
      alert('Enter PIN code')
      return
    }

    await signInAuthWithEmailAndPassword(password)
  }

  if (authLoading) {
    return (
      <>
        <Loading />
        <div style={{display: 'none'}}>{children}</div>
      </>
    );
  }

  return (
    <React.Fragment>
      {isAllow() ? (
        <>{children}</>
      ) : (
        <div className="login">
          <div className="login__container">
            <input type='password' name='password' className='password_input' placeholder='PIN Code' onChange={onChange} />
            <button className='login__btn login__google' type='primary' onClick={handleLogin}>
              <GoogleOutlined /> Login with Google
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
