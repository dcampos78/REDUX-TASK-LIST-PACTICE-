import {createStore} from "redux";//es una funcion qeu solo sirve para crear el almacen y poer conectar a cualquier componente el almacen// Se creara tantos archivos store como sean necesartios ej storeProduct, etc...//


const addAction = {type: "ADD"}//DEFINIR LA FUNCION DE INCREMENTO Y EL TIPO DE ACCION

const deleteAction = {type: "DELETE"}

const modifyAction = {type: "MODIFY"}

const taskReducer = (state = {tasks: []}, action/*como parametros llevara el contador inicial o y la accion a realizar. Cada Store solo tendra una funcion reduce. EXiste las acciones de tipo type y payload*/)=>{
    switch (action.type) {
        case "ADD":
            return {tasks : [...state.tasks, 
                {id: Date.now(), text: action.payload, completed: false }],};//creara un objeto con una propiedad count con el valor original +1//aqui se pone lo que se realiza.  //el break indica que si se cumple lo primero haras la accion y paras la ejecucion// 
            break;
            //En el caso que se ponga return sobra el break, porque ya no va a seguir buscando el progama mas codigo//
          
        case "DELETE":
            return {count: state.count-1}
        default:// significa lo que hara por defecto si no se cumple las acciones indicadas, se suele poner el estado original
           return state;
    }
};//se define aqui que accion se a a ejecutar y devolver un valor. Contara las posibilidades y nos devolvera una. estara basada en la accion que use el usuario// Se pondran cada accion que se vaya a reazalir

const storeTasks = createStore(taskReducer);//se crea una constante con el valor del store creado y se exportael store//

export default storeTasks;



