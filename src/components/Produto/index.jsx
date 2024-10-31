import "./style.css"

function Produto({titulo, descricao, foto }) {
    return (
        <div className="produto">
            
            <h1>{ titulo }</h1>
            <p>{ descricao }</p>
        </div>
    )
}

export default Produto;

