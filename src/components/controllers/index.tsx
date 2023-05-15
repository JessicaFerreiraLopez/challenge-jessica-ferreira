import plusImg from "../../assets/img/mas.png";
import minusImg from "../../assets/img/menos.png";
import arrow from "../../assets/img/Flecha.png";
import Button from "../basics/Button";
const Controllers = () => {
  const buttonsStyles: string = "h-7 px-1	py-1";
  return (
    <>
      <div>
        <Button
          onClick={() => {
            console.log("Add has been clicked");
          }}
          img={plusImg}
          imgClasses={buttonsStyles}
          classes="fixed bottom-[11%]	right-[10%]	py-1"
        />
        <Button
          onClick={() => {
            console.log("Minus has been clicked");
          }}
          img={minusImg}
          imgClasses={buttonsStyles}
          classes="fixed bottom-[5%]	right-[10%]	py-1"
        />
      </div>
      <div className="bg-white">
        <Button
          onClick={() => {
            console.log("Up arrow has been clicked");
          }}
          img={arrow}
          imgClasses={buttonsStyles}
          classes="fixed bottom-[12%]	right-[5%]	"
        />
        <Button
          onClick={() => {
            console.log("Down  arrow has been clicked");
          }}
          img={arrow}
          imgClasses={`rotate-180 ${buttonsStyles}`}
          classes="fixed bottom-[5%]	right-[5%]	"
        />
        <Button
          onClick={() => {
            console.log("Left arrow has been clicked");
          }}
          img={arrow}
          imgClasses={`-rotate-90 ${buttonsStyles}`}
          classes="fixed bottom-[8.5%]	right-[7%]	"
        />
        <Button
          onClick={() => {
            console.log("Right arrow has been clicked");
          }}
          img={arrow}
          imgClasses={`rotate-90 ${buttonsStyles}`}
          classes="fixed bottom-[8.5%]	right-[3%]	"
        />
      </div>
    </>
  );
};

export default Controllers;
