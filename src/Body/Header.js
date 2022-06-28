
import './Header.css';
import logo from '../assets/logoTest.png';

function Header() {

    return (
        <div className="Header">

            <nav class="navbar" id='contenedor'>
                <a class="navbar-brand" >
                    <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="" />
                    <label id="titlePage" > Respondiendo  </label>

                </a>

                <form class="d-flex">

                    <button type="button" class="space btn btn-outline-dark">FAQ</button>
                    <button type="button" class="space btn btn-outline-dark">About</button>

                    <button type="button" class="space btn btn-dark">
                        Iniciar Sesion
                    </button>

                </form>


            </nav>
        </div>
    );
}

export default Header;


