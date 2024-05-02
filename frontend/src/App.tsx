import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Home } from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      {/* <div> */}
        <Routes>
          <Route path='/cart' element={<Cart />} />
          <Route path='/' element={<Home />} />
        </Routes>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
