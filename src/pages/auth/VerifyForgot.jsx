import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContainedButton, OutlinedButton } from "../../components/Button";
import AuthLayout from "../../layout/AuthLayout";
import OTPInput from "otp-input-react";
import moment from "moment";
import { validatePassword } from "../../helpers/validation";
import { toast } from "react-toastify";
import { sendOtp, verifyOtp } from "../../api/auth";
import { userStore } from "../../store/userStore";
import { authStore } from "../../store/authStore";

const VerifyForgot = () => {
  const [otp, setOtp] = useState("");
  const [timerCount, setTimerCount] = useState(120);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let interval = setInterval(() => {
      setTimerCount((prevState) => {
        timerCount === 0 && clearInterval(interval);
        return prevState - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timerCount]);

  const send = async () => {
    setLoading(true);
    const { data, error, message } = await sendOtp(JSON.stringify({email: userStore.getUser.email}));
    setLoading(false);
    if (error) {
      toast.error(message);
      return;
    } else {
      console.log(data?.password);
      setTimerCount(120);
    }
  };

  const verify = async () => {
    setLoading(true);
    const { data, error, message } = await verifyOtp(JSON.stringify({
      email: userStore.getUser.email,
      password: otp
    }))
    setLoading(false);
    if (error) {
      toast.error(message);
      return;
    } else {
      authStore.updateResetToken(data?.token);
      navigate("/change-password");
    }
  };

  const validate = () => {
    if (!validatePassword(otp)) {
      toast.error("Must be up to 6 characters");
      return;
    }
    verify();
  };

  return (
    <AuthLayout>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <img
          src={require("../../assets/images/logo.png")}
          alt=""
          className="h-9 object-contain mb-3"
        />
        <h2 className="text-2xl font-roboto my-3 text-slate-800">
          Verify Email
        </h2>
        <p className="text-center text-md text-slate-800 mb-3 font-roboto">
          Please enter the OTP sent to your mail abc@gmail.com
        </p>
        <div className="w-[100%] sm:w-[70%] md:w-[60%]">
          <OTPInput
            value={otp}
            onChange={setOtp}
            autoFocus
            OTPLength={6}
            otpType="number"
            disabled={false}
            secure
            inputStyles={{
              width: "100%",
              height: 50,
              caretColor: "#158A37",
              fontSize: 15,
              borderRadius: 5,
              border: "1px solid #8E8E8E",
            }}
          />
          <p className="text-center text-sm mt-3">
            {timerCount > 0
              ? moment.utc(timerCount * 1000).format("mm:ss")
              : "00:00"}
          </p>
          <ContainedButton
            text={loading ? "Please wait..." : "Verify Email"}
            className="w-full mt-4"
            onClick={validate}
            disabled={loading}
          />
          {timerCount <= 0 && (
            <OutlinedButton
              text={"Request New Code"}
              className="w-full mt-4"
              onClick={send}
              disabled={loading}
            />
          )}
        </div>
      </div>
    </AuthLayout>
  );
};

export default VerifyForgot;
