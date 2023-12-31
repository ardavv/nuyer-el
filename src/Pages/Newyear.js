

import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks"
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";


function Newyear() {
  const [newYearMessage, setNewYearMessage] = useState([
    "Hai",
    "Happy New Year 2024"
  ]);

  function refreshPage() {
    window.location.reload();
  }

  const particleInit = async (engine) => {
    await loadFireworksPreset(engine);
  };

  function timeLeft() {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime()
    const nowDate = new Date().getTime()
    const remainingTime = newYearDate - nowDate

    return remainingTime
  }

  return (
    <>
      <Particles
        init={particleInit}
        options={{
          preset: "fireworks",
        }}
      />

      <div className=" flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-sm font-bold px-4 z-50">
          <Typewriter
            words={newYearMessage}
            loop={false}
            cursorStyle={"🐽"}
            cursor
            deleteSpeed={10}
          />
        </span>
        <div className="z-50 text-white font-bold text-2xl">
          <Countdown date={Date.now() + timeLeft()} onComplete={() => setNewYearMessage([
            "Selamat Tahun Baru El ga kerasa yaa ganti tahun aja, padahal kita baru kenal, entah aku ngerasa aku suka kamu sejak lama hehe. Terima kasih el udah temenin aku nutup tahun ini dengan rasa super bahagia, kamu salah satu alasan kenapa aku ga pernah menyesal dan bahkan bersyukur bisa masuk UPN, entah kalaupun aku gamasuk UPN aku yakin aku bakal tetep ketemu kamu, gimanapun itu caranya. SENENG BISA SAYANG SAMA KAMU❤️"
          ])} />
        </div>
        <div>
 
          <button onClick={ refreshPage } className='bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50'>
              KLIK DISINI BUAT REFRESH KALO NGELAG
            </button>
   
        </div>
      </div>

    </>
  );
}

export default Newyear;
