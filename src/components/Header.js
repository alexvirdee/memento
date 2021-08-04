import React from 'react';
import Icon from './Icon';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="main-header flex p-8 justify-around">
        <div className="flex flex-row">
        <img
          alt="memento-logo"
          src={logo}
          className="w-16 h-16 border-none"
        />
      <div className="text-5xl">
        Memento
      </div>
      </div>
      <button className="flex flex-row header-btn bg-white px-4 py-0 rounded items-center h-12">
        <Icon icon="user" size={20} color="#504CCF" />
        <div className="mr-4">&nbsp;</div>
        <Icon icon="cog" size={20} color="#504CCF" />
      </button>
    </div>
  );
};

export default Header;
