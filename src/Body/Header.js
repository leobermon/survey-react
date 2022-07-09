
import '../styles/Header.css';
import logo from '../assets/logoTest.png';

function Header() {

    return (
        <div className="Header">

            <nav className="navbar" id='contenedor'>
                <a className="navbar-brand" >
                    <img src={logo} width="40" height="40" className="d-inline-block align-top" alt="" />
                    <label id="titlePage" > Respondiendo  </label>

                </a>

                <form className="d-flex">

                    <button type="button" className="space btn btn-outline-dark">FAQ</button>
                    <button type="button" className="space btn btn-outline-dark">About</button>

                    <button type="button" className="space btn btn-dark">
                        Iniciar Sesion
                    </button>

                </form>


            </nav>
        </div>
    );
}

export default Header;


