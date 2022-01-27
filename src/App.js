import MainPage from './Screens/MainPage'
import { Routes, Route } from 'react-router-dom'
import ProductPage from './components/ProductInfo/ProductPage';
import Header from './components/Header/Header';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='product/:id' element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
