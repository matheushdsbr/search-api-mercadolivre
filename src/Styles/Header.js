import styled from 'styled-components';

export const SectionHeader = styled.header`
  background-color: #fff159;
  padding: 10px;
`;

export const LogoContent = styled.div`
  align-items: center;
  display: flex;
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
  height: 40px;
  position: relative;
  width: 100%;
`;

export const InputSearch = styled.input`
  border-radius: 2px;
  border: none;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  height: 100%;
  padding: 10px 50px 10px 10px;
  width: 100%;

  :focus {
    outline: none;
  }
`;

export const ButtonSearch = styled.button`
  background: white;
  border: none;
  bottom: 0;
  padding: 0 10px;
  position: absolute;
  right: 0;
  top: 0;

  :before {
    background: #eeeeee;
    content: '';
    height: 72%;
    position: absolute;
    right: 40px;
    top: 6px;
    width: 1px;
  }

  :focus {
    outline: 0;
  }

  img {
    opacity: 0.5;
    width: 20px;
  }
`;
