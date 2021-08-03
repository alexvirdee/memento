import './App.css';
import Header from './components/Header';
import Icon from './components/Icon';

function App() {
  //
  function addNew() {
    alert('Add new collection');
  }
  //
  return (
    <div className="App">
      <Header />
      <div className="App-main flex flex-col my-8">
        <div className="m-auto w-2/5 border border-gray-200 p-8 relative">
          <div className="text-2xl text-white memento-purple-bg w-3/12 text-center p-2 rounded absolute -top-6 left-10">
            My Collections
          </div>
          <div className="flex flex-row">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-1"
              type="text"
              placeholder="Coins"
            ></input>
            <Icon className="m-2" icon="trashcan" size={20} color="#504CCF" />
            <Icon className="m-2" icon="pencil" size={20} color="#504CCF" />
          </div>
          <div className="flex flex-row">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-1"
              type="text"
              placeholder="World War II Stamps"
            ></input>
            <Icon className="m-2" icon="trashcan" size={20} color="#504CCF" />
            <Icon className="m-2" icon="pencil" size={20} color="#504CCF" />
          </div>
          <div className="flex flex-row">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-1"
              type="text"
              placeholder="Faberge Eggs"
            ></input>
            <Icon className="m-2" icon="trashcan" size={20} color="#504CCF" />
            <Icon className="m-2" icon="pencil" size={20} color="#504CCF" />
          </div>
          <button onClick={addNew} className="memento-purple m-4">
            + Add New Collection
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
