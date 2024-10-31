import Produto from "../Produto";

//Componente Container
function ListaProdutos(props) {
    const produtos = [
        {
        titulo: "Monitor Gamer",
        descricao: "24 polegadas",
      },
        {
        titulo: "Cadeira Gamer",
        descricao: "Thunder X3 Preta",
      },
        {
        titulo: "Mouse Gamer",
        descricao: "Reddragon",
      },
      ]
    return(
        <div>
        <div className="lista-produtos">

        {
          produtos.map((produto) => <Produto titulo = {produto.titulo} descricao = {produto.descricao} />)
        
        }

        
      { /*  
      <Produto 
        titulo = "Monitor Gamer"
        descricao = "LG - 27 Polegadas"
      />
      <Produto 
        titulo = "Cadeira Gamer"
        descricao = "Thunder X3"
      />
      <Produto 
        titulo = "Mesa Gamer"
        descricao = "Mesa Thunder"
      /> */}
      </div>
      { props.children }
      </div>
    )
}

export default ListaProdutos;