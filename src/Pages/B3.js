import img from '/Users/jeanykwim/im1002-web/src/Images/B3_circuit.png'
import { useState } from 'react'
import Button from '/Users/jeanykwim/im1002-web/src/components/Button.js'
import React from 'react'
const ranValue = Math.floor(Math.random() * 30);
    

const B3 = () => {
    const [answer, setAnswer] = useState('')
    const UpperTolerance='1.05'
    const LowerTolerance='0.95'

    const tasks = [
        [{ "No.": "1", "R1": "1", "R2": "1", "L": "470", "C": "470", "answer": "50", "check (Y/N)": "" }, { "No.": "2", "R1": "1", "R2": "1.5", "L": "470", "C": "470", "answer": "50", "check (Y/N)": "" }, { "No.": "3", "R1": "1", "R2": "2", "L": "470", "C": "470", "answer": "50", "check (Y/N)": "" }, { "No.": "4", "R1": "1", "R2": "2.2", "L": "470", "C": "470", "answer": "50", "check (Y/N)": "" }, { "No.": "5", "R1": "1", "R2": "2.7", "L": "470", "C": "470", "answer": "50", "check (Y/N)": "" }, { "No.": "6", "R1": "1", "R2": "3.3", "L": "470", "C": "470", "answer": "50", "check (Y/N)": "" }, { "No.": "7", "R1": "1", "R2": "3.9", "L": "470", "C": "470", "answer": "50", "check (Y/N)": "" }, { "No.": "8", "R1": "1", "R2": "4.7", "L": "470", "C": "470", "answer": "50", "check (Y/N)": "" }, { "No.": "9", "R1": "1", "R2": "5.6", "L": "470", "C": "470", "answer": "50", "check (Y/N)": "" }, { "No.": "10", "R1": "1.5", "R2": "1", "L": "470", "C": "470", "answer": "50", "check (Y/N)": "" }, { "No.": "11", "R1": "1.5", "R2": "1.5", "L": "470", "C": "470", "answer": "50", "check (Y/N)": "" }, { "No.": "12", "R1": "1.5", "R2": "2", "L": "470", "C": "470", "answer": "50", "check (Y/N)": "" }, { "No.": "13", "R1": "1.5", "R2": "2.2", "L": "470", "C": "470", "answer": "50", "check (Y/N)": "" }, { "No.": "14", "R1": "1.5", "R2": "2.7", "L": "470", "C": "470", "answer": "50", "check (Y/N)": "" }, { "No.": "15", "R1": "1.5", "R2": "3.3", "L": "470", "C": "470", "answer": "50", "check (Y/N)": "" }, { "No.": "16", "R1": "1.5", "R2": "3.9", "L": "470", "C": "470", "answer": "50", "check (Y/N)": "" }, { "No.": "17", "R1": "1.5", "R2": "4.7", "L": "470", "C": "470", "answer": "50", "check (Y/N)": "" }, { "No.": "18", "R1": "1.5", "R2": "5.6", "L": "470", "C": "470", "answer": "50", "check (Y/N)": "" }, { "No.": "19", "R1": "1.5", "R2": "1", "L": "560", "C": "470", "answer": "50", "check (Y/N)": "" }, { "No.": "20", "R1": "1.5", "R2": "1.5", "L": "560", "C": "470", "answer": "50", "check (Y/N)": "" }, { "No.": "21", "R1": "1.5", "R2": "2", "L": "560", "C": "470", "answer": "50", "check (Y/N)": "" }, { "No.": "22", "R1": "1.5", "R2": "2.2", "L": "560", "C": "470", "answer": "50", "check (Y/N)": "" }, { "No.": "23", "R1": "1.5", "R2": "2.7", "L": "560", "C": "470", "answer": "50", "check (Y/N)": "" }, { "No.": "24", "R1": "1.5", "R2": "3.3", "L": "560", "C": "470", "answer": "50", "check (Y/N)": "" }, { "No.": "25", "R1": "1.5", "R2": "3.9", "L": "560", "C": "470", "answer": "50", "check (Y/N)": "" }, { "No.": "26", "R1": "1.5", "R2": "4.7", "L": "560", "C": "470", "answer": "50", "check (Y/N)": "" }, { "No.": "27", "R1": "1.5", "R2": "5.6", "L": "560", "C": "470", "answer": "50", "check (Y/N)": "" }, { "No.": "28", "R1": "1", "R2": "1", "L": "470", "C": "560", "answer": "50", "check (Y/N)": "" }, { "No.": "29", "R1": "1", "R2": "1.5", "L": "470", "C": "560", "answer": "50", "check (Y/N)": "" }, { "No.": "30", "R1": "1", "R2": "2", "L": "470", "C": "560", "answer": "50", "check (Y/N)": "" }, { "No.": "31", "R1": "1", "R2": "2.2", "L": "470", "C": "560", "answer": "50", "check (Y/N)": "" }, { "No.": "32", "R1": "1", "R2": "2.7", "L": "470", "C": "560", "answer": "50", "check (Y/N)": "" }, { "No.": "33", "R1": "1", "R2": "3.3", "L": "470", "C": "560", "answer": "50", "check (Y/N)": "" }, { "No.": "34", "R1": "1", "R2": "3.9", "L": "470", "C": "560", "answer": "50", "check (Y/N)": "" }, { "No.": "35", "R1": "1", "R2": "4.7", "L": "470", "C": "560", "answer": "50", "check (Y/N)": "" }, { "No.": "36", "R1": "1", "R2": "5.6", "L": "470", "C": "560", "answer": "50", "check (Y/N)": "" }, { "No.": "" }]
    ];

    
   
    const rightAnswer = tasks.map((task) =>
    (task[ranValue].answer
    ))
    const onSubmit = (e) => {
        e.preventDefault()

        if (!answer) {
            alert('please enter  a value')
            return
        }

             if(answer <= rightAnswer * UpperTolerance && answer >= rightAnswer * LowerTolerance ){
                alert('correct')
             }else{
                alert('wrong')
             }
                    
    }

    return (
        <div>
            <div>
                <img src={img}
                    alt="" />

            </div>
            <div>
            {tasks.map((task) => (
                <h3>R1={task[ranValue].R1} kΩ </h3>
            ))}
            {tasks.map((task) => (
                <h3>R2={task[ranValue].R2}kΩ </h3>
            ))}
            {tasks.map((task) => (
                <h3>L={task[ranValue].L} μH </h3>
            ))}
            {tasks.map((task) => (
                <h3>C={task[ranValue].C} μF  </h3>
            ))}
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

            <div>
                
            </div>  


        </div>


    )
}

export default B3
