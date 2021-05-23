// <<<<<<< HEAD
// import img from 'src/Images/B1Circuit.jpg'
// import img1 from 'src/Images/B1Board.jpg'
// import img2 from 'src/Images/B1COM.png'
// import {useState} from 'react'
// import Button from 'src/components/Button.js'

import img from '/Users/jeanykwim/im1002-web/src/Images/B1Circuit.jpg'
import img1 from '/Users/jeanykwim/im1002-web/src/Images/B1Board.jpg'
import img2 from '/Users/jeanykwim/im1002-web/src/Images/B1COM.png'
import {useState} from 'react'
import Button from '/Users/jeanykwim/im1002-web/src/components/Button.js'



const B1 = () => {
    const[answer,setAnswer]=useState('')

    const onSubmit=(e)=>{
        e.preventDefault()

        if(!answer){
            alert('please enter  a value')
            return
        }
        
        //onSubmit({answer}) 
        
        setAnswer('answer')

    }
    return (
        <div >
            <div>
                <img src={img}
                    alt="" />
            </div>

            <div>
                <img src={img1}
                    alt="" />
            </div>

            <center>
                <h4>
                    Figure B1: capacitor circuit and wired up photo
                </h4>
            </center>
            <h3>
                Picture of how it is wired up with Vtrigger connected to pin ‘PD0’ and Vc measured in pin ‘PA0’
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


            <div>
                <img src={img2}
                    alt="" />
            </div>

            <h3>
            The printed output at the COM port is as shown above. As the ADC sampling frequency is 100 Hz, each line is 10 mS. The time taken for Vc to reach 63% of its final value (2.08 V) is around 100mS.
Next change the value of the resistor from 2 kΩ to 1 kΩ and measure Vc versus time. Determine the time taken for Vc to reach 63% of its final value.  Compare this with the calculated value and discuss possible causes for the difference.

            </h3>
        </div>


    )
}

export default B1
