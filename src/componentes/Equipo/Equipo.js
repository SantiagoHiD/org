import './Equipo.css'
import Colaborador from '../Colaborador/Colaborador';
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    //Destructuracion
    const { colorPrimario, colorSecundario, titulo,id } = props.datos;
    const { colaboradores,eliminarColaborador,actualizarColor,like } = props;

    console.log("Esto",colaboradores.titulo);

    console.log(colaboradores.length > 0);
    //Es como si hicieramos esto:
    //const colorPrimario = props.datos.colorPrimario;
    //const colorSecundario = props.datos.colorSecundario;

    const obj = {
        backgroundColor: hexToRgba(props.datos.colorPrimario, 0.6)
    }

    const estiloTitulo = {
        borderColor: colorPrimario
    }

    return <>
        { colaboradores.length > 0 &&
            <section className='equipo' style={obj}>
                <input
                    type='color'
                    className='input-color'
                    value={colorPrimario}
                    onChange={(evento) => {
                        actualizarColor(evento.target.value,id)
                    }}
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                { 
                    //<h3 style={{borderBottomColor: colorPrimario}}>{titulo}</h3>
                }
                <div className='colaboradores'>
                    {
                        //Con map se debe usar una key (identific
                        //Con map vamos a ir recorriendo el arreglo y generando un compnente
                        colaboradores.map((colaborador, index) => {
                            return <Colaborador datos={colaborador} 
                            key={index} 
                            colorPrimario={colorPrimario}
                            //eliminarColaborador = {props.eliminarColaborador} 
                            eliminarColaborador = {eliminarColaborador}
                            like={like}
                            ></Colaborador>
                        })
                    }
                </div>
            </section>
        }
    </>

}

export default Equipo