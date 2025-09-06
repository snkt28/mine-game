import { useState,useEffect } from 'react'
import './squares.css'
import data from './data';


export default function Square({index,minearr,updategem}){
    let [val, setVal] = useState("unclicked");
    let [classN, setclassN] = useState("onebox");
    let {gameState,setlost,lost} = data();
    let [cardopen , setcardopen] = useState(false);
    // if(gameState!="active"){
    //     setValue("unclicked");
    // }

    // let handleClick=()=>{
    //     setValue
    // }
    // if(gameState == "inactive"){
    //     setclassN("onebox");
    // }
    useEffect(function work(){
        if(gameState=="inactive"){
            setclassN("onebox");
        }
    },[gameState])

    

    useEffect(()=>{if(lost){

        if(minearr.includes(index)==true){
                setclassN("onebombSquare");
                 
        }else{
                setclassN("onegemSquare");   
        }
    }},[lost])

    let handleClick= ()=>{
        setVal("clicked"); 
        // console.log(minearr)
        if(val == "clicked" && gameState=="active"){
            if(minearr.includes(index)==true){
                setclassN("onebombSquare");
                console.log("bomb");
                updategem(-1);
                setlost(true); 

                
            }else{
                setclassN("onegemSquare");
                console.log("gem");
                updategem(1);
                setcardopen(true);  

                
            }
        }
    }
    return (
        <div className={classN} role='button' onClick={cardopen?null:handleClick} > 
        </div>
    )
}