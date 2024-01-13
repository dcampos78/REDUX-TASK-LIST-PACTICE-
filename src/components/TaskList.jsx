import {connect} from "react-redux";

function TaskList (ADD) {
    return (
        <>
    <h1>Lista de Tareas</h1>;
    <imput></imput>
    <button>Añadir Tarea</button>
    <ul></ul>
    </>
    );
};

const mapState = (state)=>{
    return{
        tasks: state.tasks,
    };
};

const mapDispatch = (dispatch)=>{
    return{
        add : (text)=>dispatch({type: "ADD", payload: text})//indicas el tipo de accion y el valor de esa tarea con el payload
    };
};

export default connect(mapState, mapDispatch)(TaskList);