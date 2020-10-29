import React, { useState } from 'react';
import {
  SectionHeader,
  ImageLogo,
  InputSearch,
  ButtonSearch,
  HeaderContent,
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
            <div className="col-12">
              <HeaderContent>
                <ImageLogo>
                  <img src={Logo} alt="Logo Mercado Livre" />
                </ImageLogo>

                <FormSearch onSubmit={handleSubmit}>
                  <InputSearch
                    onChange={(event) => setValue(event.target.value)}
                    value={value}
                    placeholder="Buscar produtos, marcas e muito mais…"
                  />
                  <ButtonSearch type="submit">
                    <div>
                      <img src={Search}></img>
                    </div>
                  </ButtonSearch>
                </FormSearch>
              </HeaderContent>
            </div>
          </div>
        </div>
      </SectionHeader>
    </>
  );
};

export default Header;
