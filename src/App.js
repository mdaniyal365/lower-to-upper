import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [darkMode, setdarkMode] = useState(false)
  return (
      <>
        <Navbar title = "Textutils" aboutText = "About"/>
        <div className="container my-3 "><TextForm heading= "Enter The Text To Analyze"/>
        </div>
      </>
      );
}

export default App;
