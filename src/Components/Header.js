import React, { useState } from 'react';
import {
  SectionHeader,
  ImageLogo,
  InputSearch,
  ButtonSearch,
  ImageSearch,
} from '../Styles/Header';
import Logo from '../Assets/Image/logo.png';
import Search from '../Assets/Image/Search.png';

const Header = () => {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
  };

  return (
    <>
      <SectionHeader className="container-fluid">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-2">
                <ImageLogo src={Logo}></ImageLogo>
              </div>

              <div className="col-10">
                <form onSubmit={handleSubmit}>
                  <InputSearch
                    onChange={(event) => setValue(event.target.value)}
                    value={value}
                    placeholder="Buscar produtos, marcas e muito mais…"
                  />
                  <ButtonSearch type="submit">
                    <ImageSearch src={Search}></ImageSearch>
                  </ButtonSearch>
                </form>
              </div>
            </div>
          </div>
        </div>
      </SectionHeader>
    </>
  );
};

export default Header;
