import img from '/Users/jeanykwim/im1002-web/src/Images/B2_circuit.png'
import {useState} from 'react'
<<<<<<< HEAD
import Button from '/Users/jeanykwim/im1002-web/src/components/Button.js'
//new
=======
import Button from './im1002-web/src/components/Button.js'
>>>>>>> 0f6a25f3b88c6414cb7a49c3e1bdee5a2063c4c2



const B2 = () => {
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
        <div >
            <div>
                <img src={img}
                    alt="" />
            </div>


            <center>
                <h4>
                Figure B2: inductor circuit transient response
                </h4>
            </center>
            <h3>
            Wire up the circuit in figure B2 and measure how inductor voltage Vl varies with time. Determine the time taken for Vl to reach 63% of its final value.  Compare this with the calculated value and discuss possible causes for the difference.
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

export default B2
