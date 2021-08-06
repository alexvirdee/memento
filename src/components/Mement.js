import React, { useState } from 'react';
import Modal from './Modal';
import Icon from './Icon';


const Mement = (props) => {
  //
  const [value, setValue] = useState('');
  //
  const [showModal, setShowModal] = useState(false);
  //
  function handleInput(e) {
    e.preventDefault();
    let valueText = e.target.value;
    //
    setValue(valueText);
  }
  //
  return (
    <div className="flex flex-row">
      <input
        className="border-b border-gray-300 focus:shadow-none rounded w-full py-2 px-3 text-gray-600 leading-tight mb-4 focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-600"
        type="text"
        onChange={handleInput}
        disabled={props.disabled}
        placeholder={props.text !== "" ? props.text : value}
        value={value}
      ></input>
      <button onClick={() => setShowModal(true)}>
        <Icon className="m-2" icon="trash-2" size={20} color="#504CCF" />
      </button>
      {props.disabled === true ? (
        <button onClick={props.edit}>
          <Icon className="m-2" icon="edit-2" size={20} color="#504CCF" />
        </button>
      ) : (
        <button onClick={() => props.save(props.index, value)}>
          <Icon
            className="m-2"
            icon="check-circle"
            size={20}
            color="#504CCF"
          />
        </button>
      )}
      {showModal ? (
        <Modal text={props.text} cancel={() => setShowModal(false)} delete={props.remove} />
      ) :
        null
      }
    </div>
  );
};

export default Mement;
