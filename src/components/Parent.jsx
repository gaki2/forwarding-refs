import { ConstTypeChild } from "./ConstTypeChild";
import FunctionTypeChild from "./FunctionTypeChild";
import { useRef, useState, useEffect } from "react";

export default function Parent() {
  const constref = useRef();
  const functionref = useRef();
  const [toggle, setToggle] = useState([false]);
  const onClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (toggle) {
      constref.current.style = "width:300px; height:300px; background:red;";
      functionref.current.style = "width:300px; height:300px; background:red;";
    } else {
      constref.current.style = "width:300px; height:300px; background:blue;";
      functionref.current.style = "width:300px; height:300px; background:blue;";
    }
  }, [toggle]);

  return (
    <>
      <FunctionTypeChild onClick={onClick} ref={constref}></FunctionTypeChild>
      <ConstTypeChild onClick={onClick} ref={functionref}></ConstTypeChild>
    </>
  );
}
