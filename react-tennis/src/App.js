import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout.js';
import { Home, Omkl, Bastu } from './content/Content';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='/omkl' element={<Omkl />} />
                        <Route path='/bastu' element={<Bastu />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
  );
}

export default App;
