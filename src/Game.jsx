import { useState,useEffect } from 'react';
import './Game.css'
import Square from './square';
import data from './data';

export default function Game({updategems}){
    // let [gamestate, setgamestate] = useState("inactive");
    // let minearr = []
    // if(gameState == "active"){
    //     setgamestate("active");
    //     for(let i=1;i<=minecount;i++){
    //         let randomNum = Math.floor(Math.random() * 25) + 1;
    //         if(minearr.includes(randomNum)==false){
    //             minearr.push(randomNum);
    //         }
    //     }
    //     console.log(minearr)
    // }


    let {gameState,mine,lost} = data();
    const [minearr, setMinearr] = useState([]);
    let[gem, setgem]=useState(0);


    useEffect(() => {
    if (gameState === "active") {
      let newMines = [];
      for (let i = 1; i <= mine; i++) {
        let randomNum = Math.floor(Math.random() * 25) + 1;
        if (!newMines.includes(randomNum)) {
          newMines.push(randomNum);
        }
      }
      setgem(0);
      setMinearr(newMines);
    //   console.log(newMines); //this is the bomb array 
    }
  }, [gameState]);

    //to get the gem clicked from square;
    function geminc(val){
        if(val==-1){
            setgem(0);
        }else{
            setgem(gem+val);

        }
        // updategems(gem);
    }

    //useefefect to send gem to parent that is grid
    useEffect(()=>{
        updategems(gem)
    },[gem])

        

    let allSquares = [];
    for(let index=1;index<=25;index++){
        allSquares.push(<Square key = {index} index={index} minearr={minearr} updategem={geminc} />)
    }

    return (
        <div className="outerdiv">
            
            <div className='innerdiv'>
                {allSquares}
            </div>
        </div>
    )
}