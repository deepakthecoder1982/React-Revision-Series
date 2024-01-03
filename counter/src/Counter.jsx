import React from "react";

function Counter() {
  const [value, setValue] = React.useState(0);

  const addValue = () => {
    setValue(prev=>prev +1)
    setValue(prev=>prev +1)
    setValue(prev=>prev +1)
    setValue(prev=>prev +1)
    setValue(prev=>prev +1)
    setValue(value + 1);
    setValue(prev=>prev +1)
};
  const redValue = () => {
    setValue(value - 1);
  };
  return (
    <>
      <h3>Counter:{value}</h3>
      <button onClick={addValue}>Inc</button>
      <button onClick={redValue}>Dec</button>
    </>
  );
}

export default Counter;
