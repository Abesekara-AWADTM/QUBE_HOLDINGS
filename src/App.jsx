import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth,} from "@/layouts";
import Master from "./layouts/master";
import ToolBox from "./layouts/toolbox";
import  Hazard from "./layouts/hazard";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/master/*" element={<Master />} />
      <Route path="/toolbox/*" element={<ToolBox />} />
      <Route path="/hazard/*" element={<Hazard />} />
      {/* <Route path="*" element={<Navigate to="/dashboard/home" replace />} /> */}
      <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
      <Route path="/" element={<Navigate to="/auth/sign-in" replace />} />
      <Route path="/dashboard" element={<Navigate to="/dashboard/home" replace />} />
      <Route path="/master" element={<Navigate to="/master/division-management" replace />} />
    </Routes>
  );
}

export default App;




