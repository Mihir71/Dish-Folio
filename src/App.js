import {
   BrowserRouter as Router,
   Routes,
   Route
} from "react-router-dom"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Share_Your_Dish from "./pages/Share_Your_Dish";
import Settings from "./pages/Settings";

function App()  {
  return (
    <Router>
    <div className="navhead"><Navbar/></div>
    <div className="nice">
    
    </div>
    <div className="container main">
    <Routes>
      <Route index path="/Dish-Folio" element={<Home />}  />
      <Route path="/Recipe" element={<Recipes />} />
      <Route path="/Share_Your_Dish" element={<Share_Your_Dish />} />
      <Route path="/Settings" element={<Settings />} />
    </Routes>
    </div>
     
     <Footer />
   
      </Router>
      
     
  );
}

export default App;
