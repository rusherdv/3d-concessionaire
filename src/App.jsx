import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {NextUIProvider} from "@nextui-org/react";
import Car from './pages/car';
import Home from './pages/home';


function App() {
  return (
    <NextUIProvider>
      <Router>
        <Switch>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/car/:id' element={<Car/>}/>
        </Switch>
      </Router>
    </NextUIProvider>
  );
}

export default App;
