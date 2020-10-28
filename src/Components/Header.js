import React from 'react';
import { SectionHeader } from '../Styles/Header';

const Header = () => {
  return (
    <>
      <SectionHeader className="container-fluid">
        <div className="row">
          <div className="col-3">
            <h1>LOGO</h1>
          </div>

          <div className="col-3">
            <input placeholder="" />
          </div>

          <div className="col-2">
            <h1>Menu</h1>
          </div>

          <div className="col-3">
            <h1>LOJA</h1>
          </div>
        </div>
      </SectionHeader>
    </>
  );
};

export default Header;
