import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header'
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from './componentes/Equipo/Equipo';
import Footer from './componentes/Footer/Footer';
//console.log(header);

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuidv4(),
    equipo: "Devops",
    foto: "https://github.com/SantiagoHiD.png",
    nombre: "Santiago",
    puesto: "Front End",
    fav: false
  },
  {
    id: uuidv4(),
    equipo: "Front End",
    foto: "https://github.com/SantiagoHiD.png",
    nombre: "Santiago",
    puesto: "Back End",
    fav: false
  },
  {
    id: uuidv4(),
    equipo: "Programación",
    foto: "https://github.com/SantiagoHiD.png",
    nombre: "Santiago",
    puesto: "Full Stack",
    fav: true
  },
  {
    id: uuidv4(),
    equipo: "UX y Diseño",
    foto: "https://github.com/SantiagoHiD.png",
    nombre: "Santiago",
    puesto: "Front End",
    fav: false
  },
  {
    id: uuidv4(),
    equipo: "Programación",
    foto: "https://github.com/SantiagoHiD.png",
    nombre: "Santiago",
    puesto: "Front End",
    fav: false
  },
  {
    id: uuidv4(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/SantiagoHiD.png",
    nombre: "Santiago",
    puesto: "Full Stack",
    fav: false
  }
  ]);

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuidv4(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuidv4(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuidv4(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuidv4(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])

  //Ternario --> condicion ?(si esto es verdadero) seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log('Nuevo colaborador', colaborador);
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador]);
  }

  //Eliminar colaborador

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => {
      return colaborador.id !== id
    })
    actualizarColaboradores(nuevosColaboradores);
  }

  //Actualizar color de equipos

  const actualizarColor = (color, id) => {
      console.log("Actualizar color: ",color,id);
      const equiposActualizados = equipos.map((equipo) => {
        if(equipo.id === id){
          equipo.colorPrimario = color;
        }
        return equipo
      })
      actualizarEquipos(equiposActualizados);
  }


  //Crear equipo 
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo,id: uuidv4}])
  }


  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  //Lista de equipos usada anteriormente
  /*
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ]
  */

  return (
    <div>
      <Header />
      {/* mostrarFormulario === true ? <Formulario/> : <div></div> */}
      {mostrarFormulario === true && <Formulario
        equipos={equipos.map((equipo) => { return equipo.titulo })}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
      />}

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipos,index) => {
          return <Equipo
            datos={equipos}
            key={index}
            colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipos.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor = {actualizarColor}
            like = {like}
            >
          </Equipo>
        })
      }
      <Footer></Footer>
    </div>
  );
}

export default App;
