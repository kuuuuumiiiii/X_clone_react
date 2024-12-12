import { useState } from 'react';
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
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
      });
      setMessage('登録成功！ログインしてください。');
    } catch (err) {
      if (err.email) {
        setMessage(`エラー: ${err.email.join(', ')}`);
      } else {
        setMessage('登録に失敗しました。');
      }
    }
  };

  return (
    <>
      <h1>Xクローンアプリ</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
          />
        </div>
        <button type="submit">登録する</button>
        {message && <p>{message}</p>}
      </form>
    </>
  );
};

export default Register;
