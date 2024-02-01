import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthGuard from "./AuthGuard";
import AuthLayout from "../view/layouts/AuthLayout";
import Login from "../view/pages/Login";
import Register from "../view/pages/Register";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route path="/" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
