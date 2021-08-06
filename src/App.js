import React, { useState, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Mement from './components/Mement';

function App() {
  //
  const [mements, setMements] = useState([
    {
      text: 'Coins',
      disabled: false,
      editMode: true
    },
    {
      text: 'World War II Stamps',
      disabled: true,
      editMode: false
    },
    {
      text: 'Faberge Eggs',
      disabled: true,
      editMode: false
    },
  ]);
  //
  const newMementText = useRef('');
  //
  function addNew() {
    const newMements = [...mements, { text: '', disabled: false, editMode: true }];
    console.log(newMements);
    setMements(newMements);
  }
  //
  function saveMement(index, message) {
    let allMements = [...mements];
    // Check for existing mements from initial array
    if (allMements[index].text !== "") {
      message = allMements[index].text;
    }
    //
    if (message.length > 1) {
      allMements[index].text = message;
    } else if (message === '') {
      alert('Please add some text to save collection');
      return;
    }
    //
    allMements[index].disabled = true;
    //
    setMements(allMements);
    console.log(allMements, newMementText.current);
  }
  //
  function editMement(index) {
    let allMements = [...mements];
    allMements[index].disabled = false;
    allMements[index].editMode = true;
    //
    setMements(allMements);
    console.log("Edit mode called", allMements);
  }
  //
  function removeMement(index) {
    const allMements = [...mements];
    console.log(index, allMements.splice(index, 1));
    allMements.splice(index, 1);
    setMements(allMements);
  }
  //
  console.log('re-render');
  return (
    <div className="App">
      <Header />
      <div className="App-main flex flex-col my-8">
        <div className="m-auto w-2/4 p-8 relative collections-container">
          <div className="lg:text-xl md:text-md sm:text-sm text-white memento-purple-bg xl:w-3/12 lg:w-4/12 md:w-4/12 sm:w-5/12 text-center p-2 rounded absolute -top-6 left-8">
            My Collections
          </div>
          {mements.map((mement, index) => {
            return (
              <Mement
                key={index}
                index={index}
                text={mement.text}
                disabled={mement.disabled}
                remove={() => removeMement(index)}
                save={(indexB, message) => saveMement(indexB, message)}
                edit={() => editMement(index)}
              />
            );
          })}
          <button onClick={addNew} className="memento-purple m-4">
            + Add New Collection
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
