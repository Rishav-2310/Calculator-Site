import React, {useState} from 'react'
const Calculator= ()=>{
    const [data, setData]= useState("");
    const getValue= (Event)=>{
        console.log(Event.target.value);
        setData(data.concat(Event.target.value))
    }
    const result= ()=>{
        setData(eval(data))
    }
    const clear= ()=>{
        let clearNum= '';
        setData(clearNum)
    }
    return(
        <>
        <div className="boxOfTheCalc">
                <div className="display">
                    <input placeholder='0' value={data}/>
                </div>
            <div className="all-keys">
                <div className="keys-box">
                    <button onClick={getValue} className="keys" value= '1'>1</button>
                    <button onClick={getValue} className="keys" value= '2'>2</button>
                    <button onClick={getValue} className="keys" value= '3'>3</button>
                    <button onClick={clear} className="keys">Clear</button>
                </div>
                <div className="keys-box">
                    <button onClick={getValue} className="keys" value= '4'>4</button>
                    <button onClick={getValue} className="keys" value= '5'>5</button>
                    <button onClick={getValue} className="keys" value= '6'>6</button>
                    <button onClick={getValue} className="keys" value="+">+</button>
                </div>
                <div className="keys-box">
                    <button onClick={getValue} className="keys" value= '7'>7</button>
                    <button onClick={getValue} className="keys" value= '8'>8</button>
                    <button onClick={getValue} className="keys" value= '9'>9</button>
                    <button onClick={getValue} className="keys" value="-">-</button>
                </div>
                <div className="keys-box">
                    <button onClick={result} className="keys">Result</button>
                    <button onClick={getValue} className="keys" value= '0'>0</button>
                    <button onClick={getValue} className="keys" value="/">/</button>
                    <button onClick={getValue} className="keys" value="*">*</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Calculator