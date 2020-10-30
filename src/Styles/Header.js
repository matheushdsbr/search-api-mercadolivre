import styled from 'styled-components';

export const SectionHeader = styled.header`
  background-color: #fff159;
  padding: 10px;
`;

export const LogoContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 45px;
`;

export const ImageLogo = styled.a`
  cursor: pointer;

  img {
    width: 100%;
  }
`;

export const FormSearch = styled.form`
  width: 100%;
  height: 40px;
  position: relative;
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  padding: 10px 50px 10px 10px;
  border-radius: 2px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);

  :focus {
    outline: none;
  }
`;

export const ButtonSearch = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  border: none;
  padding: 0 10px;

  :before {
    content: '';
    background: #eeeeee;
    position: absolute;
    right: 40px;
    top: 6px;
    height: 72%;
    width: 1px;
  }

  :focus {
    outline: 0;
  }

  div {
  }

  img {
    opacity: 0.5;
    width: 20px;
  }
`;
