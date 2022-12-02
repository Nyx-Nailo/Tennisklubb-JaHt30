import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout.js';
import { Home, OmklInfo, Bastu, BastuInfo, Banor, BanorInfo } from './pages/Content';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='/omkl-info' element={<OmklInfo />} />
                        <Route path='/bastu' element={<Bastu />} />
                        <Route path='/bastu-info' element={<BastuInfo />} />
                        <Route path='/banor' element={<Banor />} />
                        <Route path='/banor-info' element={<BanorInfo />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
  );
}

export default App;
