import { forwardRef } from "react";

function FunctionTypeChild(props, ref) {
  const onClick = props.onClick;
  return (
    <button ref={ref} onClick={onClick}>
      FunctionType
    </button>
  );
}

FunctionTypeChild = forwardRef(FunctionTypeChild);
// 리액트 컴포넌트 디버깅 툴로 봤을때 이 코드가
// 없으면 컴포 이름이 forwarding ref 로 뜸
export default FunctionTypeChild;
