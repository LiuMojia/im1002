// //check the state of the component, be it value or boolean 
// import B1 from './Pages/B1'
// import B2 from './Pages/B2'
// import B3 from './Pages/B3'
// import Button from './components/Button'
// import Instruction from './components/Instruction'
// import Images from './Images/image'
// import { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


// class PartB extends Component {
//   render() {
//     return (
//       <div >
 
//         <div className='container'>
//           <Instruction></Instruction>
//           <Images></Images>

//           <div className='container'>
//             <center >
//               <header><h1>EXPERIMENT</h1></header>
//             </center>

//             <div >

//               <Router>
//                 <Switch>
//                   <Route exact path="/Pages/B1" component={B1} />
//                   <Route exact path="/Pages/B2" component={B2} />
//                   <Route exact path="/Pages/B3" component={B3} />
//                 </Switch>

//               </Router>
//             </div>

//           </div>
//           <Router>
//             <div>
//               <Link to="/Pages/B1">
//                 <Button
//                   color='blue'
//                   text='B1'
//                 />
//               </Link>
//               <Link to="/Pages/B2">
//                 <Button
//                   color='blue'
//                   text='B2'
//                 />
//               </Link>
//               <Link to="/Pages/B3">
//                 <Button
//                   color='blue'
//                   text='B3'
//                 />
//               </Link>
//             </div>
//           </Router>


//         </div>
//       </div>


//     );

//   }
// }

// export default PartB;
