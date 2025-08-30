const Pedido = (props) => {
    return (
        <div className="d-flex">
            <div className="d-flex align-items-center">
                <i className={`${props.icone} fa-4x`}></i>
            </div>
            <div className="border flex-grow-1 ms-2 pt-2">
                <h4 className=" text-center">{props.titulo}</h4>
                <p className=" text-center"> {props.descricao}</p>
            </div>
        </div>
    ) 
}

export default Pedido