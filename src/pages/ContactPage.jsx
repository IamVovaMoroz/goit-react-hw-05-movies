import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// Создаем зависимости. State
const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // получаем значения из localStorage для формы
    const savedName = localStorage.getItem('name');
    const savedEmail = localStorage.getItem('email');
    const savedMessage = localStorage.getItem('message');

    // Установка сохраненных значений в состояния. Записываем в переменные. Благодаря [] зависимости, вызовется 1 раз толко
    if (savedName) {
      setName(savedName);
    }
    if (savedEmail) {
      setEmail(savedEmail);
    }
    if (savedMessage) {
      setMessage(savedMessage);
    }
  }, []);
// если что то меняется, перезаписываем. Проверка здесь
  useEffect(() => {
    // Сохранение значений полей в localStorage 
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);
  }, [name, email, message]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Добавить здесь логику для отправки данных
    console.log('Отправка email:', name, email, message);

    // Сбросить поля формы, после отправки
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Wrapper>
      <Title>Contact Us</Title>
      <Form onSubmit={handleFormSubmit}>
        <FormGroup>
          <Label>Name:</Label>
          <InputContainer>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </InputContainer>
        </FormGroup>
        <FormGroup>
          <Label>Email:</Label>
          <InputContainer>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputContainer>
        </FormGroup>
        <FormGroup>
          <Label>Message:</Label>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></Textarea>
        </FormGroup>
        <Button type="submit">Send</Button>
      </Form>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 38px;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-size: 24px;
  margin-bottom: 5px;
`;

const InputContainer = styled.div`
  display: flex;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease 0s;
  box-shadow: none;
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease 0s;
  box-shadow: none;
  width: 100%;
  height: 150px;
  resize: none
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  background-color: rgba(0, 121, 191, 0.8);
  color: #fff;
  border: none;
  cursor: pointer;
`;

export default ContactPage;
