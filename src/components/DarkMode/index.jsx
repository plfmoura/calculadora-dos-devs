import './styles.css'

export default function DarkMode() {

  return (
    <div className="page-mode" >
        <img className='icons' src="/src/assets/sun.png" alt="light mode" />
        <img className='icons' src="/src/assets/waning-moon.png" alt="dark mode" />
    </div>
  );
}
