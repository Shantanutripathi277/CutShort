import { Link } from "react-router-dom";
import solo from "../images/solo.png";
import teamcolor from "../images/teamcolored.png";
import Edenlogo from "../images/EdenLogo.png";
import ProgressBarCustom from "./ProgressBarCustom";

function Plan() {
  return (

    <div  className="display-flex justify-content-center align-items-center bg-white-200 max-w-md">
    
      <img
        src={Edenlogo}
        alt="EdenLogo"
        height={100}
        width={100}
        className="logo"
      />

        <ProgressBarCustom percent="70"></ProgressBarCustom>

      <p className="font-bold text-2xl text-center px-8 mb-4">
        How are you planning to use Eden?
      </p>
      <p className="text-gray-500 text-center px-8">
        We'll streamline your setup experience accordingly.
      </p>
      <div className="wid px-8 pt-6 pb-8 mb-4">
        <div className="bor m-5 rounded-md w-2/5 inline-block border-2 p-5">
          <img className="sol" src={solo} alt="solo" height={47} width={47} />
          <p className="text-black-700 text-left font-bold">For Myself</p>
          <p className="text-gray-500 text-center">
            Write better.Think more clearly.Stay organized{" "}
          </p>
        </div>
        <div className="bor m-5 px-6 rounded-md w-2/5 inline-block border-2 p-5">
          <img className="sol" src={teamcolor} alt="teamcolor" />
          <p className="text-black-700 text-left font-bold">With my team</p>
          <p className="text-gray-500 text-center">
            Wikis,docs, tasks & projects, all in one place{" "}
          </p>
        </div>
      </div>
      <Link to="/LaunchEden">
        <button
          className="Colbutton w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Create Workspace
        </button>
      </Link>
    </div>
  );
}
export default Plan;
