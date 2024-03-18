import { useState } from "react";
import { baseURL, courseraLogo } from "../constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function SignIn() {
    const navigate=useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSumbit = async () => {
        try {
            const responseData = await axios.post(`${baseURL}/user/signin`,{},
                {
                    headers:{email, password,"Content-Type": "application/json"}
                });
            
            const token=responseData.data.token;
            
            window.localStorage.setItem("Token",token);
            window.location.href="/courses";

        } catch(err) {
            console.error({msg:"error"},err);
        }
    }

    return (
        <div className="h-screen flex  justify-center items-center">

            <div className="w-full block h-fit max-w-md px-20 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
                <div className="flex justify-center">
                    <img className="w-[128px] content-center " src={courseraLogo} alt="" />
                </div>
                <br />
                <h5 className="text-xl font-medium text-center text-gray-900">Sign in to our platform</h5>
                <br />
                <div className="relative h-10 w-full min-w-[200px]">
                    <input placeholder="Email" type="email"
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-1 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" required onChange={(e) => setEmail(e.target.value)} />
                    <label
                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Email
                    </label>
                </div>

                <br />
                <div className="relative h-10 w-full min-w-[200px]">
                    <input placeholder="Password" type="password"
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-1 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" required onChange={(e) => setPassword(e.target.value)} />
                    <label
                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Password
                    </label>
                </div>
                <br />
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={handleSumbit}>Login to your account</button>
                <div className="text-sm font-medium text-gray-500">
                    Not registered? <a onClick={()=>{navigate("/signup")}} className="text-blue-700 hover:underline ">Create account</a>
                </div>

            </div>

        </div>



    )
}