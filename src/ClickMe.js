import React, { useState } from 'react'

function ClickMe() {
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
    </div>
  )
}

export default ClickMe

