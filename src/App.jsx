import { useState } from 'react';
import './App.css';
import {
  buttonRow1,
  buttonRow2,
  buttonRow3,
  buttonRow4,
  buttonRow5,
  buttonRow6,
  devProfiles,
} from './Data.json';
import CustomButton from './components/CustomButton';
import { checkIMC } from './utils/checkIMC';

export default function App() {
  const [firstTerm, setFirsTerm] = useState(null);
  const [operator, setOperator] = useState(null);
  const [count, setCount] = useState('0');
  const [temp, setTemp] = useState([]);
  const [imc, setImc] = useState(false);
  const [percentage, setPercentage] = useState(false);
  const [imcFeedback, setImcFeedback] = useState('-');
  const [initial, setInitial] = useState(true);

  const handleClick = (value) => {
    setTemp([temp + value]);
    if (count === '0') {
      setCount(value);
    } else {
      setCount(count + value);
    }

    if (firstTerm === null) {
      setFirsTerm(value);
    } else if (firstTerm !== null && operator === null) {
      setFirsTerm(firstTerm + value);
    }
  };

  const onRequestValue = () => {
    if (initial === true) {
      setInitial(false);
    } else {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, [500]);
      return;
    }

    let result;
    if (imc === true) {
      let weight = Number(firstTerm);
      let height = Number(count) * Number(count);
      result = weight / height;
      setTemp([`${temp} = ${result.toFixed(2)}`]);
      setImcFeedback(checkIMC(Number(result.toFixed(2))));
      setCount(result.toFixed(2));
    } else if (percentage === true) {
      let part = Number(firstTerm) * Number(count);
      result = part / 100;
      setTemp([`${temp} = ${result}`]);
      setCount(result);
    } else {
      if (firstTerm !== null && operator !== null && count !== null) {
        switch (operator) {
          case '+':
            result = Number(firstTerm) + Number(count);
            setTemp([`${temp}=${result}`]);
            setCount(result);
            break;
          case '-':
            result = Number(firstTerm) - Number(count);
            setTemp([`${temp}=${result}`]);
            setCount(result);
            break;
          case 'x':
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
    setTemp([temp + operator]);
    if (firstTerm !== null) {
      setOperator(operator);
      setCount('0');
    }
    if (operator === 'IMC') {
      setImc(true);
    }
    if (operator === '%') {
      setPercentage(true);
    }
  };

  const handleCleanDisplay = () => {
    setInitial(true);
    setCount('0');
    setTemp([]);
    setFirsTerm(null);
    setOperator(null);
    setImc(false);
    setPercentage(false);
    setImcFeedback('-');
  };

  const [active, setActive] = useState(false);
  const [alert, setAlert] = useState(false);
  const [options, setOptions] = useState(true);

  return (
    <main className='App'>
      <header>
        <h1>CALCULADORA DOS DEVS</h1>
      </header>
      <button onClick={() => setOptions(!options)}>Mais funcionalidades</button>
      <article
        style={{ height: options ? '38rem' : '33rem' }}
        className='app-container'>
        <section className='calculator-display'>
          <span
            style={{ opacity: temp.length == 0 ? 0 : 1 }}
            className='calculator-temporary'>
            {temp.length == 0 ? '-' : temp}
          </span>
          <span
            style={{ opacity: imcFeedback === '-' ? 0 : 1 }}
            className='calculator-imc-feedback'>
            {imcFeedback.toUpperCase()}
          </span>
          <span className='calculator-result'>{count}</span>
        </section>
        <section className='calculator-pad'>
          
          <div className={options ? 'options-align active-options' : 'options-align'}>
            {buttonRow1.map((button) => (
              <CustomButton
                key={button.value}
                sx={styles.imc_btn}
                variant={button.variant}
                value={button.value}
                onPress={
                  button.value === 'AC'
                    ? () => handleCleanDisplay()
                    : () => handleOperation(button.value)
                }
              />
            ))}
          </div>

          <div className='button-align'>
            {buttonRow2.map((button) => (
              <CustomButton
                key={button.value}
                sx={button.value === 'CE' || button.value === 'C' ? styles.erase_btn : null}
                variant={button.value === 'CE' && alert ? 'erase-btn-active' : button.variant}
                value={button.value}
                onPress={
                  button.value === 'CE'
                    ? () => handleCleanDisplay()
                    : () => handleOperation(button.value)
                }
              />
            ))}
          </div>

          <div className='button-align'>
            {buttonRow3.map((button) => (
              <CustomButton
                key={button.value}
                variant={button.variant}
                value={button.value}
                onPress={
                  button.value === 'x'
                    ? () => handleOperation(button.value)
                    : () => handleClick(button.value)
                }
              />
            ))}
          </div>

          <div className='button-align'>
            {buttonRow4.map((button) => (
              <CustomButton
                key={button.value}
                variant={button.variant}
                value={button.value}
                onPress={
                  button.value === '-'
                    ? () => handleOperation(button.value)
                    : () => handleClick(button.value)
                }
              />
            ))}
          </div>

          <div className='button-align'>
            {buttonRow5.map((button) => (
              <CustomButton
                key={button.value}
                variant={button.variant}
                value={button.value}
                onPress={
                  button.value === '+'
                    ? () => handleOperation(button.value)
                    : () => handleClick(button.value)
                }
              />
            ))}
          </div>

          <div className='button-align'>
            {buttonRow6.map((button) => (
              <CustomButton
                useId={button.value === '0' && true}
                key={button.value}
                variant={button.variant}
                value={button.value}
                onPress={
                  button.value === '=' ? () => onRequestValue() : () => handleClick(button.value)
                }
              />
            ))}
          </div>
        </section>
      </article>
      
      <footer className='footer-align'>
        <button
          className='footer-btn'
          onClick={() => setActive(!active)}>
          Feita pelos Devs do Club dos Devs
        </button>
        <div className={active ? 'name-container active' : 'name-container'}>
          {devProfiles.map((profile) => (
            <a
              key={profile.github}
              href={`https://github.com/${profile.github}`}
              target='blank'>
              {profile.name}
            </a>
          ))}
        </div>
        <p>{new Date().toLocaleDateString('pt-BR')}</p>
      </footer>
    </main>
  );
}

const styles = {
  imc_btn: {
    fontSize: 20,
  },
};
