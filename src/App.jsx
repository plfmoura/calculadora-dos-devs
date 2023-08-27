import { useState } from 'react'
import './App.css'
import CustomButton from './components/CustomButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='App-container'>
      <section className="calculator-display">
        <span className='calculator-result'>{count}</span>
      </section>
      <section className="calculator-pad">
        <div className="button-align">
          <CustomButton value={"AC"} variant={'primary-btn'}/>
          <CustomButton value={"><"} variant={'primary-btn'}/>
          <CustomButton value={"%"} variant={'primary-btn'}/>
          <CustomButton value={"/"} variant={'secondary-btn'}/>
        </div>
        <div className="button-align">
          <CustomButton value={7} variant={'default-btn'}/>
          <CustomButton value={8} variant={'default-btn'}/>
          <CustomButton value={9} variant={'default-btn'}/>
          <CustomButton value={"x"} variant={'secondary-btn'}/>
        </div>
        <div className="button-align">
          <CustomButton value={4} variant={'default-btn'}/>
          <CustomButton value={5} variant={'default-btn'}/>
          <CustomButton value={6} variant={'default-btn'}/>
          <CustomButton value={"-"} variant={'secondary-btn'}/>
        </div>
        <div className="button-align">
          <CustomButton value={1} variant={'default-btn'}/>
          <CustomButton value={2} variant={'default-btn'}/>
          <CustomButton value={3} variant={'default-btn'}/>
          <CustomButton value={"+"} variant={'secondary-btn'}/>
        </div>
        <div className="button-align">
          <CustomButton useId={true} value={0} variant={'default-btn'}/>
          <CustomButton value={"."} variant={'default-btn'}/>
          <CustomButton value={"="} variant={'secondary-btn'}/>
        </div>

      </section>
    </main>
  )
}

export default App
