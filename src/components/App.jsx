import '../css/App.css';
import Logo from './Logo';
import Progress from './Progress';
import Contents from './Contents';

function App() {
  let numOfProgressBar = 4;
  let array=[];
  for(let i=0;i<numOfProgressBar;i++){
    array[i]=<Progress key={`key${i}`} index={i} len={numOfProgressBar}/>
  }
  return (
    <div className="App">
      <Logo/>
      <div className='progress-container'>
        {array}
      </div>
      <Contents last={numOfProgressBar} />
    </div>
  );
}

export default App;
