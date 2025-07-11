import Button from "./Button";

const Control = ({ count, setcount }) => {
  return (
    <div className="w-[75%] m-auto flex flex-row justify-around">
      <Button type="increment" count={count} setcount={setcount} />
      <Button type="decrement" count={count} setcount={setcount} />
      <Button type="reset" count={count} setcount={setcount} />
    </div>
  );
};

export default Control;
