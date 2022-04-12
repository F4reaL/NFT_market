import * as React from 'react';
import Navbar from './UIComponents/Navbar.jsx'

const headerStyle = {
  display: 'flex',
  justifyContent:'space-between',
  alignItems:'center',
  position:'relative'
}

const TheHeader = () => {
  return (
    <div className='header' style={headerStyle}>
      <img src='src/assets/img/logo.png' className='logo' style={{width:'50px',height:'50px',paddingLeft:'30px'}}></img>
      <Navbar></Navbar>
      <button style={{width:'200px', fontFamily:'Work Sans', fontWeight:'600',color:'#FFCE4E', boder:'#FFCE4E', marginRight:'30px'}}>Connect Wallet</button>
    </div>
  );
};

export default TheHeader;

