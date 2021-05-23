//check the state of the component, be it value or boolean 
//import Home from './Home'
import B1 from './Pages/B1'
import B2 from './Pages/B2'
import B3 from './Pages/B3'
import Header from './components/Header'
import Button from './components/Button'
import Instruction from './components/Instruction'
import Images from './Images/image'
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
//import copyright from './components/copyright'


class App extends Component {
  render() {
    return (


      <div className='container'>
        <Header></Header>
        <Instruction></Instruction>
        <Images></Images>

        <div className='container'>
          <center >
            <header><h1>EXPERIMENT</h1></header>
          </center>

          <div >

            <Router>
              <Switch>
                <Route exact path="/Pages/B1" component={B1} />
                <Route exact path="/Pages/B2" component={B2} />
                <Route exact path="/Pages/B3" component={B3} />
                {/* <Redirect to="/Home" /> */}


              </Switch>

            </Router>
          </div>

        </div>
          <Router>
            <div>
              <Link to="/Pages/B1">
                <Button
                  color='blue'
                  text='B1'
                />
              </Link>
              <Link to="/Pages/B2">
                <Button
                  color='blue'
                  text='B2'
                />
              </Link>
              <Link to="/Pages/B3">
                <Button
                  color='blue'
                  text='B3'
                />
              </Link>
            </div>
          </Router>


      </div>


    );

  }
}

export default App;


// const routes = (
//   <BrowserRouter>
//     <div>
//       <Route path="/" component={B1} />
//     </div>
//   </BrowserRouter>
// )

