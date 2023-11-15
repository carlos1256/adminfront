import Dashboard from "./view/dashboard";
import Header from "./view/header";
import Inventory from "./view/inventory";
import Sidebar from "./view/sidebar";
import Calculate from "./view/calculate";
import { Route, Routes } from "react-router-dom";

function App() {
 
  return( 
    <div className="App">
        {
          <Calculate></Calculate>
        /* <Header/>
        <Sidebar/>
        <div className="wrapper_neg">
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/Inventory" element={<Inventory/>}/>
            <Route path="/calculate" element={<Calculate/>}/>
          </Routes>
        </div> */}
    </div>
    )
}
export default App;