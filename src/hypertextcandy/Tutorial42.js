import React from 'react';

function Password({ value, onChange }) {
  const [isSecret, setIsSecret] = React.useState(true);

  const handleTextChange = () => {
    setIsSecret(!isSecret);
  };

  console.log(value);

  return (
    <>
      <input type={isSecret ? "Password" : ''} value={value} onChange={onChange} />
      <button onClick={handleTextChange}>{isSecret ? '見る' : '隠す'}</button>
    </>
  );
}

export const Tutorial42 = () => {
  const [val, setVal] = React.useState('');

  const handleChange = (e) => setVal(e.target.value);

  return (
    <>
      <p>パスワード</p>
      <Password value={val} onChange={handleChange} setVal={setVal} />
      <p>{val.length}文字</p>
    </>
  );
};
