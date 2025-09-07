import './Grid.css';
import Game from './Game';
import Sidenav from './sidenav';
import { useState } from 'react';
import data from './data';


export default function Grid(){
    let{money} = data();
    let[gem,setgem] = useState(0);
    function gemClick(val){
        setgem(val);
    }

    return (
        <>
        <div className='Grid'>
            <div className="Topnav"><div className='money'><h2 className='logo'>MINE GAME</h2><h3><i className="fa-solid fa-sack-dollar"></i>Balance is : {money.toFixed(2)}</h3></div>            </div>
            <div className="Game" ><Game updategems={gemClick} /></div>
            <div className="Sidenav" ><Sidenav gemclicked={gem}/></div>
        </div>
        </>
    )
}