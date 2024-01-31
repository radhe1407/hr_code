import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import EmployeeDashboard from "./Component/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Component/dashboard/AdminDashboard";
import LogIn from "./Component/auth/LogIn";
import Employee from "./Component/employee/Employee";
import DailyReport from "./Component/attandance/DailyReport";
import BreakTime from "./Component/attandance/BreakTime";
import Holiday from "./Component/attandance/Holiday";
import LeaveReport from "./Component/leave/LeaveReport";
import About from "./Component/About";
import DailyWork from "./Component/task/DailyWork";
import AssignTask from "./Component/task/AssignTask";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/employee-dashboard"
            element={<Home Component={EmployeeDashboard} />}
          />
          <Route
            path="/admin-dashboard"
            element={<Home Component={AdminDashboard} />}
          />
           <Route
            path="/employee"
            element={<Home Component={Employee} />}
          />
           <Route
            path="/daily-report"
            element={<Home Component={DailyReport} />}
          />
           <Route
            path="/break-time"
            element={<Home Component={BreakTime} />}
          />
           <Route
            path="/holiday"
            element={<Home Component={Holiday} />}
          />
           <Route
            path="/leave-report"
            element={<Home Component={LeaveReport} />}
          />
           <Route
            path="/About"
            element={<Home Component={About} />}
          />
          <Route
            path="/daily-work"
            element={<Home Component={DailyWork} />}
          />
          <Route
            path="/assign-task"
            element={<Home Component={AssignTask} />}
          />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
