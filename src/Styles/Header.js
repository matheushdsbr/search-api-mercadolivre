import styled from 'styled-components';

export const SectionHeader = styled.header`
  background-color: #fff159;
  padding: 10px;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageLogo = styled.a`
  width: 44px;
  margin-right: 10px;
  cursor: pointer;
  img {
    width: 100%;
  }
`;

export const FormSearch = styled.form`
  width: 100%;
  position: relative;
`;

export const InputSearch = styled.input`
  border: none;
  width: 100%;
  padding: 10px 45px 10px 10px;
  border-radius: 2px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  :focus {
    outline: 0;
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

  :focus {
    outline: 0;
  }

  div {
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
  }

  img {
    width: 20px;
    opacity: 0.5;
  }
`;
