import goToNext from "function/goToNext";
import { CORRECT, DUMMY } from "game-settings";
import { MainPartsProps } from "type";

const spacing = ["tracking-tighter", "tracking-super-widest"];

const Stage4 = ({ setMainState }: MainPartsProps) => {
  const correctPos = Math.floor(Math.random() * 40);
  return (
    <div className="w-full px-10">
      {[...Array(40)].map((_, i) =>
        i === correctPos ? (
          <span
            key={i}
            className={`text-lg sm:text-xl w-full cursor-pointer ${
              spacing[Math.floor(Math.random() * 2)]
            }`}
            onClick={() => {
              goToNext({ setMainState, state: "STAGE5" });
            }}
          >
            {CORRECT}
          </span>
        ) : (
          <span
            key={i}
            className={`text-lg sm:text-xl w-full cursor-pointer ${
              spacing[Math.floor(Math.random() * 2)]
            }`}
            onClick={() => {
              goToNext({ setMainState, state: "GAMEOVER" });
            }}
          >
            {DUMMY}
          </span>
        )
      )}
    </div>
  );
};

export default Stage4;
