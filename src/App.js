
import React,{Component} from 'react';

import {BrowserRouter as Router, Link,Route} from 'react-router-dom';
import Topics from './Task';
import Home from './Home';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <Router>
      <ul>
      <li> <Link to='/' > Home </Link>     </li>
      <li> <Link to='/concepts' > Topics </Link>     </li>
      </ul>

      <Route exact path='/' component={Home} />
      <Route  path='/concepts' component={Topics} />    

      </Router>
    );
  }
}

export default App;



// import React,{Component} from 'react';

// import {BrowserRouter as Router, Link,Route} from 'react-router-dom';
// import Task from './Task';


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  };
//   }
//   render() {
//     return (
//       <Router>
//       <ul>
//       <li> <Link to='/task1' > Task 1 </Link>     </li>
//       <li> <Link to='/task2' >Task 2  </Link>     </li>
//       <li> <Link to='/task3' >Task 3  </Link>     </li>
//       <li> <Link to='/task4' > Task 4 </Link>     </li>
//       <li> <Link to='/task5' > Task 5 </Link>     </li>
//       </ul>

//       <Route path='/:task' component={Task} />    

//       </Router>
//     );
//   }
// }

// export default App;
