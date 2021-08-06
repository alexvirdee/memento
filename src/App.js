import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Mement from './components/Mement';

function App() {
  //
  const [mements, setMements] = useState([
    {
      text: 'Coins',
      disabled: false,
      editMode: true,
    },
    {
      text: 'World War II Stamps',
      disabled: true,
      editMode: false,
    },
    {
      text: 'Faberge Eggs',
      disabled: true,
      editMode: false,
    },
  ]);
  //
  const newMementText = useRef('');
  const hldMement = useRef('');
  //
  //
  // Get localStorage mements
  //
  useEffect(() => {
    //
    function checkforData() {
      const items = JSON.parse(localStorage.getItem('mements'));
      //
      if (items) {
        setMements(items);
      }
    }
    checkforData();
  }, []);
  //
  function addNew() {
    const newMements = [
      ...mements,
      { text: '', disabled: false, editMode: true },
    ];
    console.log(newMements);
    setMements(newMements);
  }
  //
  function saveMement(index, message) {
    let allMements = [...mements];
    //
    // Check mements from initial array
    //
    if (allMements[index].text !== '') {
      message = allMements[index].text;
    } else if (message.length > 1) {
      allMements[index].text = message;
      newMementText.current = message;
      if (newMementText.current > message) {
        hldMement.current = message;
      }
    } else if (message === '') {
      alert('Please add some text to save collection');
      return;
    }
    //

    console.log('Save mements func called.', newMementText.current);
    //
    allMements[index].disabled = true;
    //
    localStorage.setItem('mements', JSON.stringify(allMements));
    allMements[index].text = hldMement.current;
    //
    setMements(allMements);
  }
  //
  function editMement(index) {
    let allMements = [...mements];
    allMements[index].disabled = false;
    allMements[index].editMode = true;
    //
    setMements(allMements);
    console.log('Edit mode called', allMements);
  }
  //
  function removeMement(index) {
    const allMements = [...mements];
    allMements.splice(index, 1);
    localStorage.setItem('mements', JSON.stringify(allMements));
    setMements(allMements);
  }
  //
  console.log('re-render');
  //
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
