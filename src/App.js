import React, {useState} from 'react';
import NavBar from './components/NavBar'
import InfoPanel from './components/infoPanel'
import FooterNav from './components/FooterNav'

function App() {

  const screenConfig = useState(0);
  return (
    <div className="App">
      <NavBar/>
      <InfoPanel currentScreen={screenConfig[0]}/>
      <FooterNav screenConfig={screenConfig}/>
    </div>
  );
}

export default App;
