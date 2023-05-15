import plusImg from "../../assets/img/mas.png";
import minusImg from "../../assets/img/menos.png";
import arrow from "../../assets/img/Flecha.png";
import Button from "../basics/Button";
const Controllers = () => {
  return (
    <>
      <div>
        <Button
          onClick={() => {
            console.log("Add has been clicked");
          }}
          img={plusImg}
          imgClasses="h-8"
          classes="fixed bottom-[10%]	right-[10%]	"
        />
        <Button
          onClick={() => {
            console.log("Minus has been clicked");
          }}
          img={minusImg}
          imgClasses="h-8"
          classes="fixed bottom-[5%]	right-[10%]	"
        />
      </div>
      <div className="bg-white">
        <Button
          onClick={() => {
            console.log("Up arrow has been clicked");
          }}
          img={arrow}
          imgClasses="h-8"
          classes="fixed bottom-[10%]	right-[5%]	"
        />
        <Button
          onClick={() => {
            console.log("Down  arrow has been clicked");
          }}
          img={arrow}
          imgClasses="h-8 rotate-180"
          classes="fixed bottom-[5%]	right-[5%]	"
        />
        <Button
          onClick={() => {
            console.log("Left arrow has been clicked");
          }}
          img={arrow}
          imgClasses="h-8 -rotate-90"
          classes="fixed bottom-[7.5%]	right-[7%]	"
        />
        <Button
          onClick={() => {
            console.log("Right arrow has been clicked");
          }}
          img={arrow}
          imgClasses="h-8 rotate-90 "
          classes="fixed bottom-[7.5%]	right-[3%]	"
        />
      </div>
    </>
  );
};

export default Controllers;
