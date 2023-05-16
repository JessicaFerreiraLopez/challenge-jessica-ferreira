import plusImg from "../../assets/img/mas.png";
import minusImg from "../../assets/img/menos.png";
import arrow from "../../assets/img/Flecha.png";
import Button from "../basics/Button";
const Controllers = () => {
  const buttonsStyles: string = "h-7 px-1	py-1";
  return (
    <div className=" ">
      <div className=" fixed bottom-[5%] right-[10%]	flex h-20	flex-col place-content-between rounded-md bg-white py-1">
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
      <div className=" fixed bottom-[5%] right-[2%] h-20 w-20 rounded-md bg-white">
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
