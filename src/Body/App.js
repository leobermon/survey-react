import './App.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import gify from '../assets/charts3.gif';


const questions = [
  'Auto o Moto ?',
  'Cafe o Té ?',
  'Dinero efectivo o Digital ?',
  'Perros o Gatos ?'
]


function App() {

  const { text } = useTypewriter({
    words: questions,
    loop: 10,
    cursor:true,
    cursorStyle: '_',
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  })

  return (
    <div className="App">
      <p className='text-center' id='spanOne'>Mira que opinan las personas de esa pregunta que siemre te haz echo </p>
      <header className="App-header">

        <div className='container'>

          <div className='row' >
            <div className='col-8' >
              <div className='row' id='espacioParaPregunta'>
                <span>  <label id='RandomQuestion' className='text-center'>Tu prefieres</label>
                <label id="soloQuestion" >{text}</label>
                </span>
              </div>


              <div class="align-bottom input-group mb-3">
                <input type="text" class="form-control" placeholder="Que quieres saber ? " aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button">Button</button>
                </div>
              </div>

            </div>
            <div className='col-4'>
              <img src={gify} alt="" />
            </div>



          </div>

          <br /><br />



        </div>



      </header>
    </div>
  );
}

export default App;
