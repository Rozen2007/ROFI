import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Home from './Home';
import Main from './Main'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/main" element={<Main/>}/>
            <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    )
}

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/app" element={<Main />} />
//         </Routes>
//       </div>
//     </Router>
//   )
// }


