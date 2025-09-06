import { cloneElement, useEffect, useState } from 'react'
import './sidenav.css'
import data from './data';

export default function Sidenav({gemclicked}){
    let [value, setValue] = useState({bet:0 , mine:3})
    let {money,subMoney,setMine,setGameState,addMoney,gameState,gemclick,multiplex,addmultiplex,mine} = data();
    let [multi, setmulti] = useState(0);

    let onChange=(event)=>{
        setValue((prevval)=>({
            ...prevval,[event.target.name] : event.target.value}))

        // console.log(money)
    }

    // console.log(value.bet)
    let handleSubmit=(event)=>{
        event.preventDefault();
        if(money>=value.bet && value.mine>0 && value.mine<25 && value.bet>0){
            console.log(value);
            setMine(value.mine);
            subMoney(value.bet);
            setGameState("active");
        }else{
            alert("error");
        }
    }

    useEffect(()=>{
        let tempmulti = 1;
        for(let i=0;i<gemclicked;i++){
            tempmulti*=(25 - value.mine - i)/(25-i);
        }
        setmulti(1/tempmulti);
    },[gemclicked])

    //handle payout
    function handlePayout(event){
        event.preventDefault();
        console.log("quit");
        let profit = (value.bet*multi)
        addMoney(profit);
        setGameState("inactive");
        setmulti(1);

    }


    return (
        <div  className="maindiv">
            <form  onSubmit={handleSubmit} >
            <h4>Bet Amount</h4>
            <input type="number" name='bet' placeholder='enter bet amount' value={value.bet} onChange={onChange} readOnly={gameState=="active"?true:false} />
            <h4>Num of Mines</h4>
            <input type="number" placeholder='mines' name='mine' value={value.mine} onChange={onChange} readOnly={gameState=="active"?true:false}/>
            <br />
            <br />  
            <button disabled={gameState=="active"?true:false}>submit</button>
            </form> 

            <form action="" className='resultform' onSubmit={handlePayout}>
            <div className={gameState=="active"?"payout":"payouthide"}>
            
            Mutiplex : {multi.toFixed(3)}
            <br />
            Total Payout : {(value.bet*multi).toFixed(2)}
            <br />
            <button >Payout</button>
            </div>
            </form>
        </div>
    )
}