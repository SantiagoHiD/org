import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo/Campo"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"

const Formulario = (props) => {

    //Colaborador
    const [nombre,actualizarNombre] = useState("");
    const [puesto,actualizarPuesto] = useState("");
    const [foto,actualizarFoto] = useState("");
    const [equipo,actualizarEquipo] = useState("");

    //Equipo
    const [titulo,actualizarTitulo] = useState("");
    const [color,actualizarColor] = useState("");



    const {registrarColaborador, crearEquipo} = props;


    const manejarEnvio = (event) => {
        event.preventDefault();
        console.log("Manejar el envio");
        let datosEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        props.registrarColaborador(datosEnviar);
        //registrarColaborador(datosEnviar);
    }

    const manejarNuevoEquipo= (event) => {
        //prevenDefault() hace euqe el navegador no mante por defecto la info por URL
        event.preventDefault();
        crearEquipo({titulo: titulo,colorPrimario: color});

    }

    return <section className="formulario">
       <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <Campo 
                titulo="Foto" 
                placeholder="Ingresar foto" 
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones 
                valor={equipo} 
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
       </form>
       <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresar titulo" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            />
            <Campo 
                titulo="Color" 
                placeholder="Ingresar el color en Hex" 
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton>
                Registrar equipo
            </Boton>
        </form>
    </section>
}

export default Formulario