import React, { useState } from 'react'

function CheckBox() {

  const [count, setCount] = useState(0)
  const [title, setTitle] = useState("Click me！")
  const [color, setColor] = useState('')

  return (
    <div>
      <h2>{count}</h2>
      <p className={color} onClick={() => {
        setCount(count + 1);
        setTitle("クリックされたああ");
        color === "blue" ? setColor('red') : setColor('blue')
      }}> {title}
      </p>
      {/* <input type="radio" onClick={() => setCount(count + 1)}/> */}
    </div>
  )
}

export default CheckBox

