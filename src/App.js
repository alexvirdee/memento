import './App.css';
import Header from './components/Header';
import Mement from './components/Mement';

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
        <div className="m-auto w-2/4 p-8 relative collections-container">
          <div className="text-xl text-white memento-purple-bg w-3/12 text-center p-2 rounded absolute -top-6 left-8">
            My Collections
          </div>
          <Mement text={'Coins'} disabled={true} />
          <Mement text={'World War II Stamps'} disabled={true} />
          <Mement text={'Faberge Eggs'} disabled={true} />
          <button onClick={addNew} className="memento-purple m-4">
            + Add New Collection
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
