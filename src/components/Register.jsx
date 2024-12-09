import  { useState } from 'react';
import { registerUser } from '../api/auth';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser({
        registration: {
          email,
          password,
          password_confirmation: passwordConfirmation,
        },
      });
      setMessage('登録成功！ログインしてください。');
    } catch (err) {
      setMessage(err);
    }
  };

  return (
    <div>
      <h2>新規登録</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
        </div>
        <button type="submit">登録</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Register;
