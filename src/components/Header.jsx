import React from 'react';
import Navbar from './Navbar';
import Banner from './banner';


const Header = ({coin,addCoin}) => {
    return (
        <div>
            <Navbar coin={coin}
            ></Navbar>
           <Banner  addCoin={addCoin}></Banner>
        </div>
    );
};

export default Header;