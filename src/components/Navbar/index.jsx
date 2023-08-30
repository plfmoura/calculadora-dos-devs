import './styles.css';
import DarkMode from '../DarkMode';
import DropDown from './DropDown';
import { Groups, Calculate, Tune } from '@mui/icons-material';

export default function Navbar() {
  return (
    <nav className='navigation-container'>
      <div className='nav-dropdown-align'>
        <DropDown icon={<Calculate sx={{ fontSize: 40, pointerEvents: 'none' }} />} />
        <DropDown icon={<Groups sx={{ fontSize: 40, pointerEvents: 'none' }} />} />
        <DropDown icon={<Tune sx={{ fontSize: 40, pointerEvents: 'none' }} />} />
      </div>
      <DarkMode />
    </nav>
  );
}
