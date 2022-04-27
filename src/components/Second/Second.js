import React from 'react';

const Second = () => {
    const Square = (e) => {
        let char = e.target.value
        if (char) {
            const pi = 3.14
            let S = pi * char * 2
            console.log(S);
            document.write(S)
        } else {
            document.write('Enter number')
        }
    }
    return (
        <div>
            <div><label>Enter radius<input type="number" onChange={Square}/></label></div>
        </div>
    );
};

export default Second;