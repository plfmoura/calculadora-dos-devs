import { useEffect, useState } from 'react'
import './App.css'
import CustomButton from './components/CustomButton'
import { checkIMC } from './utils/checkIMC';

export default function App() {
  const [firstTerm, setFirsTerm] = useState(null);
  const [operator, setOperator] = useState(null);
  const [count, setCount] = useState("0");
  const [temp, setTemp] = useState([]);
  const [imc, setImc] = useState(false);
  const [imcFeedback, setImcFeedback] = useState("-");

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
    if (imc === true) {
      let weight = Number(firstTerm);
      let height = Number(count) * Number(count)
      result = weight / height;
      setTemp([`${temp} = ${result.toFixed(2)}`]);
      setImcFeedback(checkIMC(Number(result.toFixed(2))));
      setCount(result.toFixed(2));
    } else {
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
            setCount(result.toFixed());
            break;
          default:
            result = Number(firstTerm) / Number(count);
            setTemp([`${temp}=${result}`]);
            setCount(result);
            break;
        }
      }
    }
  };

  const handleOperation = (operator) => {
    setTemp([temp + operator])
    if (firstTerm !== null) {
      setOperator(operator);
      setCount("0");
    }
    if (operator === 'IMC') {
      setImc(true);
    }
  };

  const handleCleanDisplay = () => {
    setCount("0");
    setTemp([])
    setFirsTerm(null);
    setOperator(null);
    setImc(false);
    setImcFeedback("-");
  };

  const [active, setActive] = useState(false);

  return (
    <main className='App'>
      <header>
        <h1>CALCULADORA DOS DEVS</h1>
      </header>
      <article className='app-container'>
        <section className="calculator-display">
          <span style={{ opacity: temp.length == 0 ? 0 : 1 }} className='calculator-temporary'>{temp.length == 0 ? "-" : temp}</span>
          <span style={{ opacity: imcFeedback === "-" ? 0 : 1 }} className='calculator-imc-feedback'>{imcFeedback.toUpperCase()}</span>
          <span className='calculator-result'>{count}</span>
        </section>
        <section className="calculator-pad">
          <div className="button-align">
            <CustomButton sx={styles.erase_btn} onPress={() => handleCleanDisplay()} value={"AC"} variant={'primary-btn'} />
            <CustomButton sx={styles.imc_btn} onPress={() => handleOperation('IMC')} value={"IMC"} variant={'primary-btn'} />
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
        <button className='footer-btn' onClick={() => setActive(!active)}>Feita pelos Devs do Club dos Devs</button>
        <div className={active ? 'name-container active' : 'name-container'}>
          <a href='https://github.com/smksouza' target='blank'>Samuel Souza</a>
          <a href='https://github.com/cfias'>Cleidson Fias</a>
          <a href='https://github.com/devmartins03'>Maykon Martins</a>
          <a href='https://github.com/plfmoura'>Pedro Moura</a>
          <a href='https://github.com/plfmoura'>Gabriel Santos</a>
        </div>
        <p>Agosto 2023</p>
      </footer>
    </main>
  )
}

const styles = {
  imc_btn: {
    fontSize: 20
  },
  erase_btn: {
    backgroundColor: '#ff4402',
    color: '#fff'
  }
}