
import { BrowserRouter } from "react-router-dom";
import Discpage from "./pages/DiscriptionPage/Discpage";
import AllRoutes from "./routes/AllRoutes";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AllRoutes/>
      </BrowserRouter>
      {/* <Discpage/> */}
    </div>
  );
}

export default App;
