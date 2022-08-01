import { Link } from "react-router-dom";
import Edenlogo from "../images/EdenLogo.png";
import tick from "../images/tick.png";
import ProgressBarCustom from "./ProgressBarCustom";

function LaunchEden() {
  return (
    <div className="display-flex justify-content-center align-items-center bg-white-200 max-w-md">

    <div className="px-8 pt-6 pb-8 mb-4">
      <img
        src={Edenlogo}
        alt="EdenLogo"
        height={100}
        width={100}
        className="logo"
      />
  
        <ProgressBarCustom percent="100"></ProgressBarCustom>
    
      <p className="font-bold text-2xl text-center">
        <img src={tick} alt="tick" height={150} width={150} className="tick" />
        Congratulations,Eren!
      </p>
      <p className="text-gray-500  px-8 pt-6 pb-8 mb-4">
        You have completed onboarding, you can start using the Eden!
      </p>
      <a
        href="https://www.linkedin.com/in/shantanu-tripathi277/"
        className="Colbuttonlst w-4/5 text-white text-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Launch Eden
      </a>
    </div>
    </div>
  );
}
export default LaunchEden;
