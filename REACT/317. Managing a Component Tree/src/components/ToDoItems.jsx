import React from "react";

function TodoItems(props) {
  //   const [isDone, setIsDone] = useState(false);

  //   function handleClick() {
  //     // setIsDone((prevValue) => {
  //     //   return !prevValue;
  //     // });
  //   }

  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.text}
    </li>
  );
}

export default TodoItems;
{
  /* <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li> */
}
