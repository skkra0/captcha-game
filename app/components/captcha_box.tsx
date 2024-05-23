import Image from "next/image";
import logo from "/public/logo.png";
import loading from "/public/loading.gif";
import { useState } from "react";
const CaptchaBox = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={`border-slate-300 bg-slate-50 text-slate-700 border-2 rounded-sm w-72 pt-1 flex gap-1 items-center relative ${isActive ? "animate-[down_1s_linear_forwards_1]" : null}`}>
      <input 
      className="appearance-none w-8 h-8 border-slate-400 hover:border-slate-500 border-2 rounded-sm ml-3 mb-2 mt-2 peer checked:border-0" 
      id="captcha" 
      type="checkbox"
      onChange={(event) => {
        if(!isActive) setIsActive(true);
        event.target.disabled = true;
      }}
      />
      <label htmlFor="captcha" className="mr-1 ml-2 mb-2 mt-2">
      Are you a robot?</label>
      <Image
      width={30}
      height={30}
      src={loading}
      alt="Loading..."
      className="absolute left-3 hidden peer-checked:block"
      /> 
      <Image 
      width={60}
      height={60}
      src={logo} 
      alt="ReCaptcha logo"
      className="ml-auto"
      />
      </div>
    )
}

export default CaptchaBox;