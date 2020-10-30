import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  SectionHeader,
  ImageLogo,
  InputSearch,
  ButtonSearch,
  LogoContent,
  FormSearch,
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
      <SectionHeader>
        <div className="container">
          <div className="row">
            <div className="col-2">
              <LogoContent>
                <ImageLogo>
                  <img src={Logo} alt="Logo Mercado Livre" />
                </ImageLogo>
              </LogoContent>
            </div>

            <div className="col-10">
              <FormSearch onSubmit={handleSubmit}>
                <InputSearch
                  onChange={(event) => setValue(event.target.value)}
                  value={value}
                  placeholder="Buscar produtos, marcas e muito mais…"
                />
                <ButtonSearch type="submit">
                  <img src={Search}></img>
                </ButtonSearch>
              </FormSearch>
            </div>
          </div>
        </div>
      </SectionHeader>

      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeStyle={{ color: 'red' }} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="ListProduct" activeStyle={{ color: 'red' }}>
                Products List
              </NavLink>
            </li>
            <li>
              <NavLink to="Product" activeStyle={{ color: 'red' }}>
                Product
              </NavLink>
            </li>
            <li>
              <NavLink to="Error404" activeStyle={{ color: 'red' }}>
                404
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
