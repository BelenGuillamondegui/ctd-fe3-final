import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";



function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/contacto" element={<Contact/>}/>
              <Route path='/dentista/:id' element={<Detail />}/> 
              <Route path= "/favs" element={<Favs/>} />
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
