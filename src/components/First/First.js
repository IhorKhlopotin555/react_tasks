import React, {useState} from 'react';

const First = () => {
    const [A, setA] = useState([])
    const [B, setB] = useState([])
    const [C, setC] = useState([])
    const handlerA = (a) => {
        let char = a.target.value
        if(char){
            console.log(setA);
        }else{
            console.log(A);
        }
    }
    const handlerB = (b) => {
        let char = b.target.value
        if(char){
            console.log(setB);
        }else{
            console.log(B);
        }
    }
    const handlerC = (c) => {
        let char = c.target.value
        if(char){
            console.log(setC);
        }else{
            console.log(C);
        }
    }
    const Equation =() => {
let a = 5
        let b = 6
        let c = 9
            let D = Math.pow(b, 2) - 4 * a * c
            if (D < 0) {
                return 'false'
            } else {
                let x = (-b + Math.sqrt(D) / 2 * a)
                console.log(x);
                let y = (-b - Math.sqrt(D) / 2 * a)
                console.log(y)
            }
        }

    return (
        <div>
            <div><label>Put your a:<input type="number" onChange={handlerA}/></label></div>
            <div><label>Put your b:<input type="number" onChange={handlerB}/></label></div>
            <div><label>Put your c:<input type="number" onChange={handlerC}/></label></div>
            <button onClick={()=>Equation()}>Equation solution:</button>
        </div>
    );
};

export default First;