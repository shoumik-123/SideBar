import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Fragment} from "react";
import DashboardPage from "./pages/Dashboard-Page";
import CreatePage from "./pages/Create-Page";
import CompletedPage from "./pages/Completed-Page";
import CanceledPage from "./pages/Canceled-Page";
import SideBar from "./components/SideBar";


function App() {
  return (
      <Fragment>
          <BrowserRouter>
              {/*<SideBar>*/}
                  <Routes>
                     <Route exact path="/sidebar" element={<SideBar/>}/>
                     <Route exact path="/" element={<DashboardPage/>}/>
                     <Route exact path="/Create" element={<CreatePage/>}/>
                     <Route exact path="/Completed" element={<CompletedPage/>}/>
                     <Route exact path="/Canceled" element={<CanceledPage/>}/>
                </Routes>
              {/*</SideBar>*/}

          </BrowserRouter>
      </Fragment>
  );
}

export default App;






