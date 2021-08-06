import React from 'react';
import Icon from './Icon';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="main-header flex py-4 pb-8 justify-around sm:z-20 sm:sticky sm:top-0 sm:bg-gray-200 md:bg-transparent md:static">
        <div className="flex flex-row">
        <img
          alt="memento-logo"
          src={logo}
          className="w-28 h-20"
        />
      <div className="text-5xl px-0 pt-3">
        Memento
      </div>
      </div>
      <button className="flex flex-row header-btn bg-white px-4 py-0 rounded items-center h-12">
        <Icon icon="user" size={20} color="#504CCF" />
        <div className="mr-4">&nbsp;</div>
        <Icon icon="settings" size={20} color="#504CCF" />
      </button>
    </div>
  );
};

export default Header;
