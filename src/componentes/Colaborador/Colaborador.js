import './Colaborador.css'
import {AiOutlineUserDelete,AiOutlineHeart,AiFillHeart} from "react-icons/ai"

const Colaborador = (props) => {

    const {nombre,puesto,foto,equipo,id,fav} = props.datos;
    const { eliminarColaborador,like } = props;

    //cindicion ? Mostrarverdadero : Mostrarfalso

    return <div className='colaborador'>
        <AiOutlineUserDelete className='eliminar' onClick={() => eliminarColaborador(id)}></AiOutlineUserDelete>
        <div className='encabezado' style={{backgroundColor: props.colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className='info'>
            {//<h4>{props.datos.nombre}</h4>
            }
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color='red' onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/>}
        </div>
    </div>
}

export default Colaborador