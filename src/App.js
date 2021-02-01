import React, {useState} from 'react';

import './App.css';
import Homepage from './Pages/homepage';
import Sidemenu from './Components/Sidemenu/Sidemenu'
import Burger from './Components/Burger/Burger';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <Sidemenu open={open} setOpen={setOpen}/>
      <Burger setOpen={setOpen}/>
      <Homepage />
    </div>
  );
}

export default App;
