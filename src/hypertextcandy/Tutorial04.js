import React, { useState } from 'react';

const options = [
  { value: 'js', label: 'JavaScript' },
  { value: 'py', label: 'Python' },
  { value: 'rb', label: 'Ruby' },
  { value: '', label: 'その他' },
];

function Tutorial04() {
  const [val, setVal] = useState('js');
  const [text, setText] = useState();

  const handleRadioChange = (e) => setVal(e.target.value);
  const handleTextChange = (e) => setText(e.target.value);

  const getAnswer = () => {
    return val === '' ? text : options.find((o) => o.value === val).label;
  };

  return (
    <>
      <h3>好きなプログラミング言語を教えてください。</h3>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            value={option.value}
            onChange={handleRadioChange}
            checked={val === option.value}
          />
          {option.label}
        </label>
      ))}
      {val === '' && (
        <div>
          <label>自由記入：</label>
          <input type="text" value={text} onChange={handleTextChange} />
        </div>
      )}
      <hr />
      <h3>回答: {getAnswer()}</h3>
    </>
  );
}

export default Tutorial04;
