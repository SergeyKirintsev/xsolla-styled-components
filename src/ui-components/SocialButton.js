import styled from 'styled-components';

export const SocialButton = styled.button`
  height: 20px;
  width: 20px;

  margin: 10px;
  outline: none;
  border: none;
  border-radius: 50%;

  background-image: url(${(props) => props.img});
  background-color: rgba(255, 255, 255, 0.1);

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;
