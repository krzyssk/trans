import React from 'react';
import './App.css';
import EssayForm from './Xcc';
import ButtonMain from './buttonmain';
import NumberList from './pierwszy';



const App: React.FC = () => {



  return (


    <div className="App">
      <NumberList></NumberList>
      <EssayForm></EssayForm>
      <ButtonMain ></ButtonMain>


    </div>
  );
}

export default App;


