import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DetailsFillingPage from "./Pages/DetailsFillingPage";
import SelectedIdChecking from "./Components/SelectedIdChecking";
import AboutUsPage from "./Pages/AboutUsPage";
import MyResumesPage from "./Pages/MyResumesPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route exact path="/" element={<HomePage />} />
        
        {/* Details Filling Page */}
        <Route
          exact
          path="/template/filldetails"      
          element={
            <SelectedIdChecking>
              <DetailsFillingPage />
            </SelectedIdChecking>
          }
        />
        
        {/* My Resumes Page */}                                               
        <Route exact path="/myresumes" element={<MyResumesPage />} />          
        
        {/* About Us Page */}
        <Route exact path="/aboutus" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
