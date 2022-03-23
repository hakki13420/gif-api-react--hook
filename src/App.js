import {useState} from 'react'
import './App.css';
import Header from './components/Header';
import ListGif from './components/ListGif';


function App() {  
 const [search, setSearch]=useState('panda') 
  return (
    <div className="App">
      <Header setSearch={setSearch}/>      
      <ListGif search={search}/>    
    </div>
  );
}

export default App;
