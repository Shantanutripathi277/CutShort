import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Edenlogo from "../images/EdenLogo.png";
import ProgressBarCustom from "./ProgressBarCustom";

function WorkspaceName() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <div className="max-w-s display-flex max-w-screen-sm justify-content-center align-items-center bg-white-200">
      <div>
        <img
          src={Edenlogo}
          alt="EdenLogo"
          height={100}
          width={100}
          className="logo"
        />

        <ProgressBarCustom className ='Bar' percent="38"></ProgressBarCustom>

        <p className="font-bold text-2xl">
          Let's set up a home for all your work
        </p>
        <p className="text-gray-500 text-center">
          You can always create another workspace later
        </p>
        <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              WorkspaceName
            </label>
            <input
              className="w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 "
              id="WorkspaceName"
              type="text"
              placeholder="Eden"
              maxLength={20}
            />
          </div>
          <div className="mb-8">
            <label className="max-w-screen-sm block text-gray-700 text-sm font-bold mb-2">
              Workspace URL<span className="text-gray-400">(optional)</span>
            </label>
            <div className="row">
            <div className="inline-block">                           
              <span className="input-group-addon rounded">www.eden.com/</span>
              <input className='shadow appearance-none border rounded  text-gray-700' type="text" name="input" />
            </div>
          </div> 
          </div>
          <Link to="/plan">
            <button
              className="Colbutton w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Create Workspace
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
export default WorkspaceName;
