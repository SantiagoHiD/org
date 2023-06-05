import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - hooks
    //hook - useState
    //useState()
    //const [nombreVariable, funcionQueActualiza] = useState(ValorInicial)
    //const [nombre,actualizarNombre] = useState("Harland")
    console.log(props);

    // const [mostrar,actualizarMostrarA] = useState(true);

    // const manejarClick = () => {
    
    //     console.log("Mostrar/Ocultar elmento",!mostrar);
    //     actualizarMostrarA(!mostrar);
        
    // }

    return <section className="orgSection" >
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg