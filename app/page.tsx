"use client"
import CaptchaBox from './components/captcha_box';

export default function Home() {
  return (
    <>
    <div className="main h-screen flex flex-row justify-center items-center">
      <CaptchaBox/>
    </div>
    </>
  );
}
