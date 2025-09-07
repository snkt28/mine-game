import {create} from "zustand";


const data = create((set)=>({
    money:100.00,
    mine:0,
    gameState: "inactive",
    minearray: [],
    gemclick:0,
    lost : false,
    payout: false,
    multiplex:1.00,
    bet:0.00,
    setbet:(val)=>set(()=>({bet:val})),
    setmultiplex:(val)=>set(()=>({multiplex:val})),
    setgemclick: (val) => set(()=>({gemclick:val})),
    addmultiplex: (val)=>set((preval)=>({multiplex:preval.multiplex*val})),
    setlost:(val)=>set(()=>({lost:val})),
    setpayout:(val)=>set(()=>({payout:val})),
    setminearr: (val) => set(()=>({minearr:val})), 
    setGameState: (val) =>set(()=>({gameState:val})),
    setMine: (val) =>set(() => ({mine: val})),
    addMoney: (val) =>set((prevval) => ({money: prevval.money + val})),
    subMoney: (val) =>set((prevval) => ({money: prevval.money - val})),
}))

export default data;




