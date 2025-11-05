
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ProductList from './Components/ProductList/ProductList';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route
          path="/"
          element={
    <div >
     <Header></Header>
     <Banner></Banner>
     <Footer></Footer>
    </div>
          }/>
          <Route path="/productlist" element={
            <>
          <Header></Header>
          <ProductList></ProductList>
          </>
          
            
            } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
