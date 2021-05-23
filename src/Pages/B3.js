
// import img from 'src/Images/B3_circuit.png'
// //i changed again
// =======
import img from '/Users/jeanykwim/im1002-web/src/Images/B3_circuit.png'

import {useState} from 'react'
import Button from '/Users/jeanykwim/im1002-web/src/components/Button.js'


const B3 = () => {
    const[answer,setAnswer]=useState('')

    const onSubmit=(e)=>{
        e.preventDefault()

        if(!answer){
            alert('please enter  a value')
            return
        }

        setAnswer('answer')
        
        // onAdd({answer}) 

    }
    return (
        <div>
            <div>
                <img src={img}
                    alt="" />
            </div>


            <center>
                <h4>
                Figure B3: inductor capacitor circuit transient response
                </h4>
            </center>
            <h3>
            Wire up the circuit in figure B3 and measure how inductor Vl, and capacitor voltage Vc, varies with time. Determine the time taken for Vl to reach 63% of its final value.  Compare this with the calculated value and discuss possible causes for the difference. Can this circuit be used to step up the voltage beyond 3.3 V? 
            </h3>

            <form className='add-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>Answer</label>
                    <input type='text'
                        placeholder='Nearest 2dp'
                        value={answer}
                        onChange={(e) => setAnswer(e.currentTarget.value)} />
                </div>

                <Button
                  color='royalblue'
                  text='Submit'
                />

            </form>

 
        </div>


    )
}

export default B3
