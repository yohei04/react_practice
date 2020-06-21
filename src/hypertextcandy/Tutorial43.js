import React from 'react';

const random = (max) => {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
};

function Guess({ judge }) {
  const [val, setVal] = React.useState('');
  const handleNum = (e) => {
    setVal(+ e.target.value);
  };
  return (
    <>
      <input type="text" value={val} onChange={handleNum} />
      <button onClick={() => judge(val)}>予想する</button>
    </>
  );
}

export function NumberGuessing() {
  const max = 10;
  const initialCount = 5;
  const [answer, setAnswer] = React.useState(random(max));
  const [count, setCount] = React.useState(initialCount);
  const [message, setMessage] = React.useState('');

  const judge = (num) => {
    if (count === 0) return;
    console.log(num)
    console.log(answer);

    setCount(count - 1);

    if (num === answer) {
      setMessage('正解です！');
    } else if (count === 1) {
      setMessage('残念でした！ 正解は' + answer);
    } else if (num > answer) {
      setMessage('もっと小さいです');
    } else if (num < answer) {
      setMessage('もっと大きいです');
    }
  };

  const replay = () => {
    setAnswer(random(max));
    setCount(initialCount);
    setMessage('');
  };

  return (
    <>
      <Guess judge={judge} />
      <h4>{message}</h4>
      <h4>あと{count}回</h4>
      {count === 0 && <button onClick={replay}>はじめから</button>}
    </>
  );
}
