import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchUser } from "./api/user";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import ChangePassword from "./pages/auth/ChangePassword";
import Forgot from "./pages/auth/Forgot";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Verify from "./pages/auth/Verify";
import VerifyForgot from "./pages/auth/VerifyForgot";
import CallibrationBilling from "./pages/dashboard/Billing";
import Calibration from "./pages/dashboard/Calibration";
import Certification from "./pages/dashboard/Certification";
import DemandNote from "./pages/dashboard/DemandNote";
import Help from "./pages/dashboard/Help";
import Request from "./pages/dashboard/Requests";
import Satisfaction from "./pages/dashboard/Satisfaction";
import Settings from "./pages/dashboard/Settings";
import Transactions from "./pages/dashboard/Transactions";
import Home from "./pages/Home";
import { authStore } from "./store/authStore";
import { userStore } from "./store/userStore";
import { Triangle } from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    setLoading(true);
    const { error, message, data } = await fetchUser();
    setLoading(false);

    if (error) {
      toast.error(message);
      if (data === null) {
        authStore.updateToken(null);
        authStore.updateUuid(null);
        authStore.updateLogin(false);
        userStore.updateUser(null);
      }
      return;
    }
    userStore.updateUser(data);
  };

  useEffect(() => {
    if (authStore.authDetails.token) getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authStore.authDetails.token]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo={"/"}>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo={"/"}>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/verify"
          element={
            <PublicRoute redirectTo={"/"}>
              <Verify />
            </PublicRoute>
          }
        />
        <Route
          path="/verify-forgot"
          element={
            <PublicRoute redirectTo={"/"}>
              <VerifyForgot />
            </PublicRoute>
          }
        />
        <Route
          path="/forgot"
          element={
            <PublicRoute redirectTo={"/"}>
              <Forgot />
            </PublicRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <PublicRoute redirectTo={"/"}>
              <ChangePassword />
            </PublicRoute>
          }
        />
        <Route
          path="/request"
          element={
            <PublicRoute redirectTo={"/"}>
              <Request />
            </PublicRoute>
          }
        />
        <Route
          path="/transactions"
          element={
            <PublicRoute redirectTo={"/"}>
              <Transactions />
            </PublicRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PublicRoute redirectTo={"/"}>
              <Settings />
            </PublicRoute>
          }
        />
        <Route
          path="/help"
          element={
            <PublicRoute redirectTo={"/"}>
              <Help />
            </PublicRoute>
          }
        />
        <Route
          path="/request/demand-note"
          element={
            <PublicRoute redirectTo={"/"}>
              <DemandNote />
            </PublicRoute>
          }
        />
        <Route
          path="/request/callibration-billing"
          element={
            <PublicRoute redirectTo={"/"}>
              <CallibrationBilling />
            </PublicRoute>
          }
        />
        <Route
          path="/request/calibration"
          element={
            <PublicRoute redirectTo={"/"}>
              <Calibration />
            </PublicRoute>
          }
        />
        <Route
          path="/request/certificate"
          element={
            <PublicRoute redirectTo={"/"}>
              <Certification />
            </PublicRoute>
          }
        />
        <Route
          path="/request/satisfaction/:id"
          element={
            <PublicRoute redirectTo={"/"}>
              <Satisfaction />
            </PublicRoute>
          }
        />
      </Routes>
      <ToastContainer />
      {loading && (
        <div
          className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white`}
        >
          <Triangle
            height="80"
            width="100%"
            color="#158A37"
            ariaLabel="loading"
          />
        </div>
      )}
    </>
  );
}

export default App;
