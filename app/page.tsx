import Image from "next/image";
import logo from "/public/logo.png";
export default function Home() {
  return (
    <>
    <div className="main">
      <div className="border-slate-300 border-2 rounded-md w-60 h-12 flex gap-2 justify-between">
      <label htmlFor="captcha">
        <input 
      className="appearance-none w-8 h-8 border-slate-400 border-2 rounded-sm mr-2" id="captcha" type="checkbox"/>
      Are you a robot?
      </label>
      
      <Image 
      width={20}
      height={20}
      src={logo} 
      alt="ReCaptcha logo"/>
      </div>
    </div>
    </>
  );
}
