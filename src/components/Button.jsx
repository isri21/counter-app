const Button = (prop) => {
  const checkType = () => {
    if (prop.type == "increment") {
      return "+";
    } else if (prop.type == "decrement") {
      return "-";
    } else {
      return "C";
    }
  };
  return (
    <button
      className="bg-[#01034a] font-bold text-xl text-[#545353] p-2 hover:bg-[#11111e] rounded-full w-15 h-15 border-1 border-[#380303]"
      onClick={() => {
        if (prop.type == "increment") {
          prop.setcount(prop.count + 1);
        } else if (prop.type == "decrement") {
          prop.setcount(prop.count - 1);
        } else {
          prop.setcount(0);
        }
      }}
    >
      {checkType()}
    </button>
  );
};

export default Button;
