import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../FireBase';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    email: '',
    pass: '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!values.email || !values.pass) {
      setErrorMsg('Fill all fields!!');
      return;
    }
    setErrorMsg('');
    setSubmitButtonDisabled(true);
    console.log(values);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        console.log(res);
        history.push('/home');
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        if (err.code === 'auth/wrong-password') {
          setErrorMsg('Incorrect password');
        } else {
          // setErrorMsg('An error occurred. Please try again.');
          history.push('/store');
        }
        console.log('Error=', err);
      });
  };

  return (
    <div>
      <div>
        <h2
          style={{
            textAlign: 'center',
            borderBottom: '1px solid black',
            width: 'fit-content',
            margin: 'auto',
          }}
        >
          Login
        </h2>
        <form
          className="container-sm"
          style={{
            marginLeft: '20rem',
            backgroundColor: 'skyblue',
            width: '25rem',
            marginTop: '2rem',
            borderRadius: '5px',
          }}
          onSubmit={handleSubmit}
          disabled={submitButtonDisabled}
        >
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              style={{ width: '23rem' }}
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email here"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }
            ></input>
          </div>

          <div className="col-md-6">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              style={{ width: '23rem' }}
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Enter password here"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, pass: event.target.value }))
              }
            ></input>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginLeft: '9rem', marginTop: '1rem' }}
          >
            Submit
          </button>
        </form>
        <h2 style={{ textAlign: 'center', color: 'red', marginTop: '1rem' }}>{errorMsg}</h2>
      </div>
    </div>
  );
};

export default Login;
