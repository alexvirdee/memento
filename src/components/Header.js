import React from 'react';
import Icon from './Icon';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="main-header flex p-8 justify-around">
        <div className="flex flex-row">
        <img
          src={logo}
          className="w-16 h-16 border-none"
        />
      <div className="text-5xl">
        Memento
      </div>
      </div>
      <button className="header-btn bg-white py-0 px-2 rounded">
        <Icon icon="user" size={20} color="#504CCF" />
        <nbsp className="mr-4"></nbsp>
        <Icon icon="cog" size={20} color="#504CCF" />
      </button>
    </div>
  );
};

export default Header;
