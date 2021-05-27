import img from '/Users/jeanykwim/im1002-web/src/Images/B3_circuit.png'
import { useState } from 'react'
import Button from '/Users/jeanykwim/im1002-web/src/components/Button.js'
import Tasks from '/Users/jeanykwim/im1002-web/src/data.js'
import rightAnswer from '/Users/jeanykwim/im1002-web/src/data.js'
import React from 'react'

const B3 = () => {
    const [answer, setAnswer] = useState('')
    const UpperTolerance='1.05'
    const LowerTolerance='0.95'

    const onSubmit = (e) => {
        e.preventDefault()

        if (!answer) {
            alert('please enter  a value')
            return
        }

        setAnswer('answer')
    }

    return (
        <div>
            <div>
                <img src={img}
                    alt="" />

            </div>
                <Tasks />
            <center>
                <h4>
                    Figure B3: inductor capacitor circuit transient response
                </h4>
            </center>
            <h3>
                {rightAnswer}
                Wire up the circuit in figure B3 and measure how inductor Vl, and capacitor voltage Vc, varies with time. Determine the time taken for Vl to reach 63% of its final value.  Compare this with the calculated value and discuss possible causes for the difference. Can this circuit be used to step up the voltage beyond 3.3 V?
            </h3>
            {/* <div>
                {answer <= rightAnswer * UpperTolerance && answer >= rightAnswer * LowerTolerance ?
                    setAnswer('Correct') :
                    setAnswer('Incorrect')}
                </div>  */}

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
