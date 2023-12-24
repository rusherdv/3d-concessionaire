import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {NextUIProvider} from "@nextui-org/react";
import Car from './pages/car';
import Home from './pages/home';


function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/car/:id' element={<Car/>}/>
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
