import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Product from './component/Product';
import { Route, Routes } from 'react-router-dom';
import Jewelery from './component/Jewelery';
import Mensclothing from './component/Mensclothing';
import Womensclothing from './component/Womensclothing';
import Electronics from './component/Electronics';
import Productdetails from './component/Productdetails';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Product /> */}
      {/* <Jewelery/> */}

      <Routes>
        <Route path='/' element={<Product />}>
          <Route path='jewelery' element={<Jewelery />} />
          <Route path='menscloths' element={<Mensclothing />} />
          <Route path='womenscloths' element={<Womensclothing />} />
          <Route path='electronics' element={<Electronics />} />
        </Route>
        <Route path='productdetails/:id' element={<Productdetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
