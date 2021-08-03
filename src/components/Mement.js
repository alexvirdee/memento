import React from 'react';
import Icon from './Icon';

const Mement = (props) => {
  //
  return (
    <div className="flex flex-row">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-1"
        type="text"
        disabled={props.disabled}
        value={props.text}
      ></input>
      <Icon className="m-2" icon="trashcan" size={20} color="#504CCF" />
      <Icon className="m-2" icon="pencil" size={20} color="#504CCF" />
    </div>
  );
};

export default Mement;
