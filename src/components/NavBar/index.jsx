import "./style.css"    

import Header from "../Header"

function NavBar ({ tituloHeader }) {
    return (
    <div className="Navbar">
        <h1>Setup 4 Devs</h1>

        <nav>
            <ul>
                <li><a href="https://google.com">Home</a></li>
                <li><a href="https://google.com">Produtos</a></li>
                <li><a href="https://google.com">Novidades</a></li>
                <li><a href="https://google.com">Login</a></li>
            </ul>
        </nav>
        <Header titulo = {tituloHeader}/>
    </div>
    );
}

export default NavBar;