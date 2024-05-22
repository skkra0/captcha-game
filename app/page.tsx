import Image from "next/image";
import logo from "/public/logo.png";
import loading from "/public/loading.gif";
export default function Home() {
  return (
    <>
    <div className="main h-screen flex flex-row justify-center items-center">
      <div className="border-slate-300 bg-slate-50  text-slate-700 border-2 rounded-sm w-72 pt-1 flex gap-1 items-center">
      <input 
      className="appearance-none w-8 h-8 border-slate-400 border-2 rounded-sm mr-1 ml-3 mb-2 mt-2" id="captcha" type="checkbox"/>
      <label htmlFor="captcha" className="mr-1 ml-3 mb-2 mt-2">Are you a robot?</label>
      <Image
      width={40}
      height={40}
      src={loading}
      alt="loading..."
      />
      <Image 
      width={60}
      height={60}
      src={logo} 
      alt="ReCaptcha logo"
      className="ml-auto"
      />
      </div>
    </div>
    </>
  );
}
