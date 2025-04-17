import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./components/pages/Auth/Register";
import Login from "./components/pages/Auth/Login";
import Home from "./components/pages/Home";
import Problems from "./components/pages/problems/Problems";
import ProblemPage from "./components/pages/problems/ProblemPage";
import NotFound from "./components/pages/NotFound";
import MyCodePage from "./components/pages/MyCode/MyCodePage";
import Submissions from "./components/pages/Submissions/SubmissionsPage";
import Profile from "./components/pages/Profile";
import { UserProvider } from "./context/UserContext";
import SavedSnippets from "./components/pages/SavedSnippets";

import AdminRoute from "./components/pages/Auth/AdminRoute";
import AdminDashboard from "./components/pages/Admin/AdminDashboard";
import AdminUsers from "./components/pages/Admin/Users/AdminUsers";
import AdminProblems from "./components/pages/Admin/Problems/AdminProblems";
import AdminSubmissions from "./components/pages/Admin/Submissions/AdminSubmissions";
import AdminBlogs from "./components/pages/Admin/Blogs/AdminBlogs";
import CreateProblem from "./components/pages/Admin/Problems/CreateProblem";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/problemset" element={<Problems />} />
          <Route path="/problems/:id" element={<ProblemPage />} />
          <Route path="/compiler" element={<MyCodePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/savedsnippets" element={<SavedSnippets />} />
          {/* Admin-only Route */}
          <Route element={<AdminRoute />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/problems" element={<AdminProblems />} />
            <Route path="/admin/submissions" element={<AdminSubmissions />} />
            <Route path="/admin/blogs" element={<AdminBlogs />} />
            <Route
              path="/admin/problems/newproblem"
              element={<CreateProblem />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
