import { useState } from "react";
import Display from "./Display";
import Control from "./Control";

const Container = () => {
  const [count, setcount] = useState(0);
  return (
    <div className="bg-[#380260] w-70 h-70 m-auto mt-20 rounded-[30px] border-2 border-[#2d2828]">
      <Display count={count} />
      <Control count={count} setcount={setcount} />
    </div>
  );
};

export default Container;
