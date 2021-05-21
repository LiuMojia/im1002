
const Instruction = () => {
    return (
        <div>
            <h4>
                In part A, we are dealing with DC signals (voltage and current) which do not vary with time. In many applications, we need to apply transient signals (ie toggle a switch which connect a DC voltage source to the circuit).
                In the measurement of signals that changes with time, we need to use the timed measurement mode (“ADC.read_timed(ADC burst sample points, ADC frequency)”) of the ADC (Analogue to Digital Converter) in the STM32F4VE board. Furthermore, we need to control when to start (known as Trigger) the timed measurement. Once started, the ADC will measure/sample the signal at a set frequency (ADC frequency) for a fixed time duration (ADC burst sample points).


            </h4>
        </div>
    )
}

export default Instruction
