// src/styles/components.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-color: #121212;
  color: #fff;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  background-color: #1e1e1e;
  max-width: 400px;
  padding: 40px;
  border-radius: 8px;
`;

export const Input = styled.input`
  outline: none;
  padding: 16px 20px;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;
  background-color: #2c2c2c;
  border: 1px solid #333;
  color: #fff;

  &:focus {
    border-color: #046ee5;
  }
`;

export const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: #046ee5;
  color: white;
  font-weight: 600;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background-color: #035bb8;
  }
`;

export const LabelError = styled.label`
  font-size: 14px;
  color: #ff4d4d;
`;

export const LabelSignin = styled.label`
  font-size: 16px;
  color: #aaa;
`;

export const Strong = styled.strong`
  cursor: pointer;
  color: #046ee5;

  a {
    text-decoration: none;
    color: inherit;
  }
`;