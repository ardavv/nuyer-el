import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";
import { Link } from "react-router-dom"

function Newyear() {
  const [newYearMessage, setNewYearMessage] = useState([
    "Hai",
    "Happy New Year 2024"
  ]);

  const particleInit = async (engine) => {
    await loadFireworksPreset(engine);
  };

  function timeLeft() {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const remainingTime = newYearDate - nowDate;

    return remainingTime;
  }

  const [isContentVisible, setContentVisibility] = useState(false);

  return (
    <>
      {isContentVisible && (
        <Particles
          init={particleInit}
          options={{
            preset: "fireworks",
          }}
        />
      )}

      <div className={`flex flex-col justify-center items-center min-h-screen gap-4 ${isContentVisible ? '' : 'hidden'}`}>
        <span className="text-white text-sm font-bold px-4 z-50">
          <Typewriter
            words={newYearMessage}
            loop={false}
            cursorStyle={"🐽"}
            cursor
            typeSpeed={40}
            deleteSpeed={1}
          />
        </span>
        <div className="z-50 text-white font-bold text-2xl">
          <Countdown
            date={Date.now() + timeLeft()}
            onComplete={() => setNewYearMessage([
              "Happy New Year El", "ga kerasa yaa udah ganti tahun aja semenjak kita kenal. Thank you El udah temenin aku nutup tahun ini dengan rasa super bahagia, kamu salah satu alasan kenapa aku ga pernah menyesal dan bahkan bersyukur bisa masuk UPN, entah kalaupun aku gamasuk UPN aku yakin aku akan tetap ketemu kamu, gimanapun itu caranya.", "SENENG BISA SAYANG SAMA KAMU", "I'm So Grateful❤️"
            ])}
          />
        </div>
        {isContentVisible && (
          <div className=" flex gap-4">
            <button
              onClick={() => {
                setContentVisibility(false);
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded opacity-95"
            >
              KLIK DISINI BUAT HIDE
            </button>
            <Link to="/foto">
              <button
                onClick={() => {
                  setContentVisibility(false);
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded opacity-95"
              >
                KLIK DISINI BUAT NEXT PAGE
              </button>
            </Link>
          </div>
        )}
      </div>
      {!isContentVisible && (
        <div>
          <button
            onClick={() => {
              setContentVisibility(true);
            }}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50"
          >
            KLIK DISINI BUAT TAMPILIN
          </button>
        </div>
      )}
    </>
  );
}

export default Newyear;
