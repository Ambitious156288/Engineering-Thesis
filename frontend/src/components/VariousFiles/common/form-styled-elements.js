import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  min-height: 300px;
  background-color: darkgray;
  box-shadow: 0 20px 20px rgb(0, 0, 0, 0.3);
  display: flex;
  margin: 100px auto 0 auto;
  border-radius: 30px;
  padding: 40px 20px 20px 20px;
  flex-direction: column;
  position: relative;
`;

export const Input = styled.input`
  min-width: 50px;
  height: 40px;
  outline: none;
  font-size: 20px;
  border: none;
  border-bottom: 3px solid black;
  background-color: ${props => props.bgColor || 'darkgray'};
  margin-bottom: 20px;
  padding: 2px;
  transition: all 0.4s ease;
  &:hover {
    transform: scale(1.02);
  }
`;

export const Button = styled.button`
  display: inline-block;
  align-self: flex-end;
  padding: 15px;
  cursor: pointer;
  background-color: darkblue;
  color: white;
  outline: none;
  border: none;
  font-size: 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #232386;
  }

  &:active {
    box-shadow: inset 5px 5px 10px black;
  }
`;

export const ErrorMessage = styled.div`
  color: #b30000;
`;
