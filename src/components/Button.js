import PropTypes from 'prop-types'
import { BrowserRouter } from "react-router-dom";
//import B1 from '/Users/jeanykwim/im1002-web/src/Pages/B1.js'

const Button = ({ color, text, onClick }) => {


  return(
    <button
    onClick={
        <BrowserRouter></BrowserRouter>
    }
    style={{ backgroundColor: color }}
    className='btn'
    >
    {text}
    </button>
  )
}

    

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    // onCLick: PropTypes.func,
}

export default Button

