import Edenlogo from '../images/EdenLogo.png';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import ProgressBarCustom from './ProgressBarCustom';

function Home() {
  const { register,handleSubmit } = useForm();
  const [data, setData] = useState("");
    return (
        <div  className="display-flex justify-content-center align-items-center bg-white-200 max-w-md">
        <span className="Head " >
        <img src={Edenlogo} align='' alt="EdenLogo" height = {100} width = {100 } className='logo' />
      
        {/* <ol id="progressbar">
                        <li class="active" id="account" placeholder='1'><strong></strong></li>
                        <li id="personal"><strong></strong></li>
                        <li id="payment"><strong></strong></li>
                        <li id="confirm"><strong></strong></li>
        </ol> */}
        <ProgressBarCustom percent="0"></ProgressBarCustom>
        <p className="font-bold text-2xl">
        Welcome! First things first.....
        </p>
        <p className='text-gray-500 text-center'> 
        You can always change them later
        </p>
    </span>
      <form className="bg-white rounded pt-6 pb-8 mb-4" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <div className="mb-8">
      <label className=" block text-gray-700 text-sm font-bold mb-2" >
        Full Name
      </label>
      <input className=" w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 " id="username" type="text" placeholder="Steve Jobs" maxLength={20} />
      </div>
      <div className="mb-8">
      <label className=" block text-gray-700 text-sm font-bold mb-2">
        Display Name
      </label>
      <input className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700" id="Display Name" type="text" placeholder="Steve" maxLength={20} />
      </div>
        <Link to ="/WorkspaceName">
        <button className="Colbutton w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Create Workspace
      </button>
        </Link>  
      </form>
      </div>
    )
}
export default Home;