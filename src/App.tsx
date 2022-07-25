import { Routes, Route } from "react-router-dom";
import EmployeesPage from "./pages/EmployeesPage";
import ProjectsPage from "./pages/ProjectsPage";
import CvsPage from "./pages/CvsPage";
import EntitiesPage from "./pages/EntitiesPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/cvs" element={<CvsPage />} />
        <Route path="/entities" element={<EntitiesPage />} />
      </Routes>
    </div>
  );
}

export default App;
