import Landing from "./pages/landing";
import { BrowserRouter , Route , Link, Routes  } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/landing" element={ <Landing/>}/>
       <Route path="/" element={ <Landing/>}/>
       <Route path="*" element={ <div>error</div>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
