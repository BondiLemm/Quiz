import { Result } from "./components/Result";
import { Start } from "./components/Start";
import {Route, Routes} from "react-router-dom"
import Veter from "./components/veter";
import Paket from "./components/paket";
import './index.css';
import Medved from "./components/medved";

function App() {
  
  return (
    <Routes >
      <Route path="/" element={<Start/>}/>
      <Route path="/paket" element={<Paket/>}/>
      <Route path="/veter" element={<Veter/>}/>
      <Route path="/question" element={<Paket/>}/>
      <Route path="/question" element={<Paket/>}/>
      <Route path="/medved" element={<Medved/>}/>
      {/* <Route path="/result" element={<Result/>}/> */}
    </Routes>
  );}
  
export default App;
