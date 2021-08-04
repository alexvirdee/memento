import React, { useState } from 'react';
import Icon from './Icon';

const Mement = (props) => {
  //
  const [value, setValue] = useState('');
  //
  return (
    <div className="flex flex-row">
      <input
        className="border-b border-gray-300 focus:shadow-none rounded w-full py-2 px-3 text-gray-600 leading-tight mb-4 focus:outline-none focus:ring focus:border-blue-300"
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled={props.disabled}
        value={props.text || value}
      ></input>
      <button onClick={props.remove}>
        <Icon className="m-2" icon="trashcan" size={20} color="#504CCF" />
      </button>
      {props.disabled === true ? (
        <button onClick={() => props.edit(props.index, value)}>
          <Icon className="m-2" icon="pencil" size={20} color="#504CCF" />
        </button>
      ) : (
        <button onClick={() => props.save(props.index, value)}>
          <Icon
            className="m-2"
            icon="checkbox-checked"
            size={20}
            color="#504CCF"
          />
        </button>
      )}
    </div>
  );
};

export default Mement;
