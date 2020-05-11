import React from 'react'

function Button(props) {
  let color = "red";
  const changeColor = () => {
    color = "blue";
  }
  console.log(color);

  return (
    <div>
      <button onClick={changeColor}>button</button>
      <h1 className={color}>カラーテスト</h1>
      <h1>Hello, {props.name}</h1>
    </div>
  )
}


export default Button

