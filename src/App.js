import './style.css';
import Leftinfo from './components/Leftinfo';
import Rightinfo from './components/Rightinfo';

function App() {
  return (
    <div className='theBox'>
      <div className='innerBox'>
        <Leftinfo />
        <Rightinfo />
      </div>
    </div>
  );
}

export default App;
