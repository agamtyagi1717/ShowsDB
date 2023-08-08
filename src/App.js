import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Single from "./pages/Single";

const App=()=> {


  return (
    <Router >
      <Navbar/>
      <div className="container">
        <Routes>
          <Route exact path="/" Component={Homepage}></Route>
          <Route path="/singleshow/:id" Component={Single}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
