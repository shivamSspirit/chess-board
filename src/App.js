import React,{useState} from 'react';
import './App.css';
import Main from './components/main/Main';

function App() {
  const [themes, setThemes] = useState("light")

    const toggleTheme = () => {
        setThemes((theme) => theme === "light" ? "dark" : "light")
    }

  return (
    <div className="App">
      <Main theme={themes} toggleTheme={toggleTheme}  />
    </div>
  );
}

export default App;
