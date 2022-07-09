import '../styles/App.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import gify from '../assets/charts3.gif';


const questions = [
  'Auto o Moto ?',
  'Cafe o Té ?',
  'Paga efectivo o tarjeta?',
  'Perros o Gatos ?'
]


function App() {

  const { text } = useTypewriter({
    words: questions,
    loop: 10,
    cursor: true,
    cursorStyle: '_',
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  })

  return (
    <div className="App">
      <header className="App-header">

        <div className='container'>

          <div className='row' >
            <div className='col-8' >

              <h1 id='mainTitle'>
                Conoce la respuesta <br />a miles de   <strong data-before="work">encuestas</strong>.
              </h1>

              <div className='row'>
                <span>  <label id='RandomQuestion' className='text-center'>Prefieres</label>
                  <label id="soloQuestion" >{text}</label>
                </span>
              </div>

              <div className="align-bottom input-group mb-3">
                <input type="text" className="form-control" placeholder="Que quieres saber ? " aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">Buscar</button>
                </div>
              </div>

              <br/>




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
