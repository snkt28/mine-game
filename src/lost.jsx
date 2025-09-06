import './lost.css'
import data from './data'


export default function Lost(){
    let {setlost,lost,setGameState} = data();
    function handleClick(){
        setlost(false);
        setGameState("inactive")
    }
    return (
        <div className={lost?"show":"hide"}>
            <div className="lost">
                <div className='innerLost'>
                    <h2>YOU LOST</h2>
                    <button onClick={handleClick}>PLAN AGAIN</button>
                </div>
            </div>
        </div>
    )
}