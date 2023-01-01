import React from 'react';
import { Link } from 'react-router-dom';
import dpaket from '../state/paket';

function getRandomArrayElement(arr){
  return arr[Math.floor(Math.random()*arr.length)]
}
let massiv = ['Ты пакет из супермаркета', 'Ты дырявый пакет из мусорки', 'Ты пакет деда', 'Не прикидывайся, ты не пакет'];


function Result() {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>{getRandomArrayElement(massiv)}</h2>
      <Link to="/"><button>Попробовать снова</button></Link>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const percentage = Math.round((step / dpaket.length) * 100);

console.log(percentage);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key = {text}>
            {text}
            </li>
            ))}
      </ul>
    </>
  );
}

function Paket() {
  const [step, setStep] = React.useState(0)
  const question = dpaket[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

  };


  return (
   
    <div className="App">
       {/* <Tit></Tit> */}
      {step != dpaket.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant}/>
        ):(
          <Result/>
          )}
    </div>
  );

  }

export default Paket;