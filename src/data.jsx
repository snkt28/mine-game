import {create} from "zustand";


const data = create((set)=>({
    money:100.00,
    mine:0,
    gameState: "inactive",
    minearray: [],
    gemclick:0,
    lost : false,
    multiplex:1,
    setgemclick: (val) => set(()=>({gemclick:val})),
    addmultiplex: (val)=>set((preval)=>({multiplex:preval.multiplex*val})),
    setlost:(val)=>set(()=>({lost:val})),
    setminearr: (val) => set(()=>({minearr:val})), 
    setGameState: (val) =>set(()=>({gameState:val})),
    setMine: (val) =>set(() => ({mine: val})),
    addMoney: (val) =>set((prevval) => ({money: prevval.money + val})),
    subMoney: (val) =>set((prevval) => ({money: prevval.money - val})),
    setmultiplex: (val) =>set((prevval)=>{
        for(let i=1;i<val;i++){
            multiplex: prevval.multiplex*(25-mine-i)/25
        }
    })
}))

export default data;




