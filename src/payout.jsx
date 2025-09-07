import './payout.css'
import data from './data'


export default function Payout(){
    let {setlost,lost,setGameState,payout,setpayout,setMine,multiplex,money,bet} = data();
    function handleClick(){
        setpayout(false);
        setGameState("inactive");
        setMine(3);
        setmulti(1);
    }
    return (
        <div className={payout?"show":"hide"}>
            <div className="lost">
                <div className='innerLost'>
                    <h3>TOTAL PROFIT</h3>
                    <h2 className='profit'>{(bet*multiplex - bet).toFixed(2) }</h2>

                    <button onClick={handleClick}>PLAN AGAIN</button>
                </div>
            </div>
        </div>
    )
}