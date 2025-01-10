import React from "react";
import { ContainedButton } from "../components/Button";
import LandingPage from "../layout/LandingPage";
import { useNavigate } from "react-router-dom"
import { authStore } from "../store/authStore";

const Home = () => {
  const navigate = useNavigate()
  
  return (
    <LandingPage>
      <div
        className="w-full min-h-[90vh] py-20 bg-no-repeat bg-center bg-cover flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0, 0.8), rgba(0,0,0, 0.8)), url(${require("../assets/images/hero.jpeg")})`,
        }}
      >
        <div className="container mx-auto h-full px-1 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-full w-full flex items-center">
            <div className="w-full">
              <h2 className="text-5xl text-white font-poppins">
                Calibrate better with The National Metrology Institute (NMI)
              </h2>
              <p className="py-6 font-poppins text-lg text-white">
                Get your best and accurate calibrations with the National
                Metrology Institute (NMI) of the Standards Organisation of
                Nigeria (SON)
              </p>
                <ContainedButton
                  text={"Request Calibration"}
                  className="text-lg"
                  onClick={() => {
                    if(authStore.authDetails.isLoggedIn)return navigate("/request/calibration")
                    else navigate("/login")
                  }}
                />
            </div>
          </div>
          <div className="h-full hidden md:flex justify-center flex-col w-full ">
            <img
              src={require("../assets/images/left-img.png")}
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className="md:px-20 py-10 w-full bg-milk" id="services">
        <div className="mx-auto container px-3">
          <h2 className="text-center text-3xl text-black font-poppins font-bold pt-6 pb-3">
            Our Services
          </h2>
          <p className="text-center text-md text-black font-poppins pt-1 pb-10">
            We render calibration services to Nigerians, Industries and
            Government Organisations. We offer calibrations services in the
            following fields:
          </p>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full rounded-md overflow-hidden bg-services">
              <img
                src={require("../assets/images/service-one.jpeg")}
                alt=""
                className="w-full h-[180px] object-cover"
              />
              <div className="py-4 px-4">
                <h2 className="font-bold font-poppins text-center text-black text-2xl">
                  Mass Lab
                </h2>
                <p className="py-4 text-center font-poppins text-md">
                  Some of the intruments under the mass lab are Scales,
                  balances, mass pieces and weighbridge
                </p>
              </div>
            </div>
            <div className="w-full rounded-md overflow-hidden bg-services">
              <img
                src={require("../assets/images/service-three.jpeg")}
                alt=""
                className="w-full h-[180px] object-cover"
              />
              <div className="py-4 px-4">
                <h2 className="font-bold font-poppins text-center text-black text-2xl">
                  Pressure Lab
                </h2>
                <p className="py-4 text-center font-poppins text-md">
                  Some of the intruments under the pressure lab are Pressure
                  Gauges, Pressure Switch, Pressure Meter, Pressure Transducer
                  and Pressure Transmitters.
                </p>
              </div>
            </div>
            <div className="w-full rounded-md overflow-hidden bg-services">
              <img
                src={require("../assets/images/service-two.jpeg")}
                alt=""
                className="w-full h-[180px] object-cover"
              />
              <div className="py-4 px-4">
                <h2 className="font-bold font-poppins text-center text-black text-2xl">
                  Temperature Lab
                </h2>
                <p className="py-4 text-center font-poppins text-md">
                  Our services include calibration of Baths, Thermometers, Ovens, Incubators Scientific refrigerators and Freezers etc.
                </p>
              </div>
            </div>
            <div className="w-full rounded-md overflow-hidden bg-services">
              <img
                src={require("../assets/images/service-four.jpeg")}
                alt=""
                className="w-full h-[180px] object-cover"
              />
              <div className="py-4 px-4">
                <h2 className="font-bold font-poppins text-center text-black text-2xl">
                  Length and Dimensions Lab
                </h2>
                <p className="py-4 text-center font-poppins text-md">
                  our services include the calibration of Calipers, Micrometers and dial gauges;
                  Gauge blocks step gauges and 
                  Ring gauges;
                  Tape measures, Measuring wheels and others.
                </p>
              </div>
            </div>
            <div className="w-full rounded-md overflow-hidden bg-services">
              <img
                src={require("../assets/images/service-five.jpg")}
                alt=""
                className="w-full h-[180px] object-cover"
              />
              <div className="py-4 px-4">
                <h2 className="font-bold font-poppins text-center text-black text-2xl">
                  Others...
                </h2>
                <p className="py-4 text-center font-poppins text-md">
                  Other Laboratories includes Flow and Big Volume, Electrical, Metrology In Chemistry, Acoustic Force and Torque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="about"
        className="w-full py-10 px-1 md:px-20  bg-no-repeat bg-center bg-cover flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0, 0.8), rgba(0,0,0, 0.8)), url(${require("../assets/images/hero.jpeg")})`,
        }}
      >
        <div className="container mx-auto h-full px-3 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="h-full hidden md:flex justify-center items-center flex-col w-full ">
            <img
              src={require("../assets/images/about-left.png")}
              alt=""
              className="h-full w-full object-contain"
            />
          </div>

          <div className="h-full w-full flex items-center">
            <div>
              <h2 className="text-3xl text-white font-poppins">About Us</h2>
              <p className="pt-6 font-poppins text-md text-white">
                The National Metrology Institute (NMI) which is a directorate of
                the Standards Organisation of Nigeria (SON) held its ground
                breaking ceremony on 12th May, 2015 in Enugu state of Nigeria.
                The NMI is a component of the National Quality Infrastructure
                (NQI), is the custodian of the national primary measurement
                standards provides traceability of measurements to all
                sectors of the national economy in Nigeria. 
                <br />
                <br />
                The National Metrology Institute ensures the accuracy, reliability,
                credibility and traceability to the International System of
                Units, of all measurements undertaken in industry and other
                sectors and areas like; consumer protection in trade and
                commerce; quality control of agricultural, mining and industrial
                products; safety control in industry against accidents caused by
                explosions, radiation; health protection against damage caused
                by incorrect measurement; environmental quality; navigation,
                aviation, telecommunication, time signals; science, research and
                development.
                <br />
                <br /> To learn more about us, kindly visit{" "}
                <a
                  href="https://www.son.gov.ng/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary"
                >
                  www.son.gov.ng
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 w-full bg-white container mx-auto px-1 md:px-20">
        <div className="w-full rounded-md py-7 px-3 bg-services">
          <h2 className="text-center text-3xl text-black font-poppins font-bold pb-3">
            Contact Us
          </h2>
          <p className="text-center font-poppins pb-2">
            Reach out to NMI, Enugu through here:
          </p>
          <p className="text-center font-poppins pb-2">
            Email:{" "}
            <a href="mailto:nmienugu@son.gov.ng" className="text-primary">
              nmienugu@son.gov.ng
            </a>{" "}
            |{" "}
            <a href="mailto:nmienugu@gmail.com" className="text-primary">
              nmienugu@gmail.com
            </a>
          </p>
          <p className="text-center font-poppins">
            Tel:{" "}
            <a href="tel:08037135071" className="text-primary">
              08037135071
            </a>{" "}
            |{" "}
            <a href="tel:08059703017" className="text-primary">
              08059703017
            </a>{" "}
            |{" "}
            <a href="tel:08068536647" className="text-primary">
              08068536647
            </a>
          </p>
        </div>
      </div>
    </LandingPage>
  );
};

export default Home;
