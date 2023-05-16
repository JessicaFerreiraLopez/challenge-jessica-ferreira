import plusImg from "../../assets/img/mas.png";
import minusImg from "../../assets/img/menos.png";
import arrow from "../../assets/img/Flecha.png";
import Button from "../general/Button";

const Controllers = () => {
  const buttonsStyles: string = "h-7 px-1	py-1";
  return (
    <div className="relative mt-20 min-h-[550px]			w-full bg-gray-200">
      <div className=" absolute right-[15px] top-[5%] flex w-40	flex-row justify-between rounded">
        <Button
          onClick={() => {
            console.log("Fijar button has been clicked");
          }}
          classes="my-1.5	h-10 text-left p-4 text-slate-500 bg-white"
          text="Fijar"
        />
        <Button
          onClick={() => {
            console.log("Borrar button has been clicked");
          }}
          classes=" my-1.5	h-10 text-left p-4 text-slate-500 bg-white"
          text="Borrar"
        />
      </div>

      <div className=" absolute bottom-[5%] right-[120px]	flex h-20	flex-col place-content-between rounded-md bg-white py-1">
        <Button
          onClick={() => {
            console.log("Add has been clicked");
          }}
          img={plusImg}
          imgClasses={buttonsStyles}
        />
        <Button
          onClick={() => {
            console.log("Minus has been clicked");
          }}
          img={minusImg}
          imgClasses={buttonsStyles}
        />
      </div>

      <div className=" absolute bottom-[5%] right-[15px] h-20 w-20 rounded-md bg-white">
        <Button
          onClick={() => {
            console.log("Up arrow has been clicked");
          }}
          img={arrow}
          imgClasses={buttonsStyles}
          classes="absolute top-[5%] right-[30%]	"
        />
        <Button
          onClick={() => {
            console.log("Down  arrow has been clicked");
          }}
          img={arrow}
          imgClasses={`rotate-180 ${buttonsStyles}`}
          classes="absolute bottom-[5%] right-[30%]	"
        />
        <Button
          onClick={() => {
            console.log("Left arrow has been clicked");
          }}
          img={arrow}
          imgClasses={`-rotate-90 ${buttonsStyles}`}
          classes="absolute bottom-[30%]	left-[5%]	"
        />
        <Button
          onClick={() => {
            console.log("Right arrow has been clicked");
          }}
          img={arrow}
          imgClasses={`rotate-90 ${buttonsStyles}`}
          classes="absolute bottom-[30%]	right-[5%]	"
        />
      </div>
    </div>
  );
};

export default Controllers;
