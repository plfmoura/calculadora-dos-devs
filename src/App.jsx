import { useState } from 'react'
import './App.css'
import CustomButton from './components/CustomButton'

function App() {
  const [firstTerm, setFirsTerm] = useState(null);
  const [operator, setOperator] = useState(null);
  const [count, setCount] = useState("0");
  const [temp, setTemp] = useState([]);

  const handleClick = (value) => {
    setTemp([temp + value])
    if (count === "0") {
      setCount(value)
    } else {
      setCount(count + value);
    }

    if (firstTerm === null) {
      setFirsTerm(value)
    } else if (firstTerm !== null && operator === null) {
      setFirsTerm(firstTerm + value)
    }
  };

  const onRequestValue = () => {
    let result;
    if (firstTerm !== null && operator !== null && count !== null) {
      switch (operator) {
        case "+":
          result = Number(firstTerm) + Number(count);
          setTemp([`${temp}=${result}`]);
          setCount(result);
          break;
        case "-":
          result = Number(firstTerm) - Number(count);
          setTemp([`${temp}=${result}`]);
          setCount(result);
          break;
        case "x":
          result = Number(firstTerm) * Number(count);
          setTemp([`${temp}=${result}`]);
          setCount(result);
          break;
        default:
          result = Number(firstTerm) / Number(count);
          setTemp([`${temp}=${result}`]);
          setCount(result);
          break;
      }
    }
  };

  const handleOperation = (operator) => {
    setTemp([temp + operator])
    if (firstTerm !== null) {
      setOperator(operator);
      setCount("0");
    }
  };

  const handleCleanDisplay = () => {
    setCount("0");
    setTemp([])
    setFirsTerm(null);
    setOperator(null);
  };

  return (
    <main className='App'>
      <header>
        <h1>CALCULADORA DOS DEVS</h1>
      </header>
      <article className='app-container'>
        <section className="calculator-display">
          <span className='calculator-temporary'>{temp.length == 0 ? "-" : temp}</span> 
          <span className='calculator-result'>{count}</span>
        </section>
        <section className="calculator-pad">
          <div className="button-align">
            <CustomButton onPress={() => handleCleanDisplay()} value={"AC"} variant={'primary-btn'} />
            <CustomButton onPress={() => console.log('><')} value={"><"} variant={'primary-btn'} />
            <CustomButton onPress={() => handleClick('%')} value={"%"} variant={'primary-btn'} />
            <CustomButton onPress={() => handleOperation('/')} value={"/"} variant={'secondary-btn'} />
          </div>
          <div className="button-align">
            <CustomButton onPress={() => handleClick("7")} value={7} variant={'default-btn'} />
            <CustomButton onPress={() => handleClick("8")} value={8} variant={'default-btn'} />
            <CustomButton onPress={() => handleClick("9")} value={9} variant={'default-btn'} />
            <CustomButton onPress={() => handleOperation('x')} value={"x"} variant={'secondary-btn'} />
          </div>
          <div className="button-align">
            <CustomButton onPress={() => handleClick("4")} value={4} variant={'default-btn'} />
            <CustomButton onPress={() => handleClick("5")} value={5} variant={'default-btn'} />
            <CustomButton onPress={() => handleClick("6")} value={6} variant={'default-btn'} />
            <CustomButton onPress={() => handleOperation('-')} value={"-"} variant={'secondary-btn'} />
          </div>
          <div className="button-align">
            <CustomButton onPress={() => handleClick("1")} value={1} variant={'default-btn'} />
            <CustomButton onPress={() => handleClick("2")} value={2} variant={'default-btn'} />
            <CustomButton onPress={() => handleClick("3")} value={3} variant={'default-btn'} />
            <CustomButton onPress={() => handleOperation('+')} value={"+"} variant={'secondary-btn'} />
          </div>
          <div className="button-align">
            <CustomButton useId={true} onPress={() => handleClick("0")} value={0} variant={'default-btn'} />
            <CustomButton onPress={() => handleClick('.')} value={"."} variant={'default-btn'} />
            <CustomButton onPress={() => onRequestValue()} value={"="} variant={'secondary-btn'} />
          </div>
        </section>
      </article>
      <footer className='footer-align'>
        <p>Feita pelos Devs do Club dos Devs</p>
        <a href='https://github.com/smksouza' target='blank'>Samuel Souza</a>
        <a href='https://github.com/cfias'>Cleidson Fias</a>
        <a href='https://github.com/devmartins03'>Maykon Martins</a>
        <a href='https://github.com/plfmoura'>Pedro Moura</a>
        <p>Agosto 2023</p>
      </footer>
    </main>

  )
}

export default App
