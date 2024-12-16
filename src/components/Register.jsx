import { useState } from 'react';
import { registerUser } from '../api/auth';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const SocialLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
`;

const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 1rem;
  border-color: #dcdcdc ;
  border-radius: 50px;
  cursor: pointer;
  margin-bottom: 10px;
  transition: background-color 0.3s ease;
  
  &:hover {
    opacity: 0.9;
  }

  &.google {
    background-color: #fff;
    color: #000;
  }

  &.apple {
    background-color: #fff;
    color: #000;
  }
`;

const Form = styled.form`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 0.9rem;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: #007BFF;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Message = styled.p`
  margin-top: 15px;
  font-size: 0.9rem;
  color: ${props => (props.error ? 'red' : 'green')};
`;

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
    <Container>
      <Title>Xクローンアプリ</Title>
      <SocialLoginContainer>
        <SocialButton className="google">Googleでログイン</SocialButton>
        <SocialButton className="apple">Appleでログイン</SocialButton>
      </SocialLoginContainer>
      <Form onSubmit={handleRegister}>
        <FormGroup>
          <Label>Email:</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="メールアドレスを入力"
          />
        </FormGroup>
        <FormGroup>
          <Label>Password:</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="パスワードを入力"
          />
        </FormGroup>
        <FormGroup>
          <Label>Confirm Password:</Label>
          <Input
            type="password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
            placeholder="確認用パスワードを入力"
          />
        </FormGroup>
        <Button type="submit">登録する</Button>
        {message && <Message error={message.includes('エラー')}>{message}</Message>}
      </Form>
    </Container>
  );
};

export default Register;
