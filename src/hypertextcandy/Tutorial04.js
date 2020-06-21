import React, { useState } from 'react';

const options = [
  { value: 'js', label: 'JavaScript' },
  { value: 'py', label: 'Python' },
  { value: 'rb', label: 'Ruby' },
  { value: '', label: 'その他' },
];

function Tutorial04() {
  const [lang, setLang] = useState(options[0].label);
  const [elseLang, setElseLang] = useState();

  const getAnswer = (e) => {
    setLang(e.target.value);
    /* ??? */
    // その他が選択されている場合は、自由記入欄の入力値を返す
    // それ以外の場合は、options 配列の該当する要素の label を返す
  };

  const getValue = (e) => {
    setElseLang(e.target.value);
  };

  return (
    <>
      <h3>好きなプログラミング言語を教えてください。</h3>
      <label>
        <input
          type="radio"
          value={options[0].label}
          checked={lang === options[0].label}
          onClick={getAnswer}
        />
        {options[0].label}
      </label>
      <label>
        <input
          type="radio"
          value={options[1].label}
          checked={lang === options[1].label}
          onClick={getAnswer}
        />
        {options[1].label}
      </label>
      <label>
        <input
          type="radio"
          value={options[2].label}
          checked={lang === options[2].label}
          onClick={getAnswer}
        />
        {options[2].label}
      </label>
      <label>
        <input
          type="radio"
          value={options[3].label}
          checked={lang === options[3].label}
          onClick={getAnswer}
        />
        {options[3].label}
      </label>
      {lang === 'その他' ? (
        <div>
          <label>自由記入:</label>
          <input type="text" onChange={getValue} />
        </div>
      ) : (
        ''
      )}
      <hr />
      {lang === 'その他' ? <h3>回答: {elseLang}</h3> : <h3>回答: {lang}</h3>}
    </>
  );
}

export default Tutorial04;

// const root = document.getElementById('root');
// ReactDOM.render(<App />, root);
