export const reducer = (state,action) =>{
    switch(action.type){
        case "GET_PRODUCTOS":
            return {...state, lista:action.payload};
        case "GET_CATEGORIAS":
            return {...state, listaCategorias:action.payload};
        case "GET_PRODUCTOS_ALEATORIOS":
            return {...state, listaProductosAleatorios:action.payload};
        case "ADD_FECHA_INICIAL":
            return {...state, fechaInicial: action.payload};
        case "ADD_FECHA_FINAL":
            return {...state, fechaFinal: action.payload};
        case "MOSTRAR_BUSQUEDA":
            return {...state, mostrarBusqueda: action.payload};
        case "REMOVE_FECHA_INICIAL":
            return {...state, fechaInicial: action.payload};
        case "REMOVE_FECHA_FINAL":
            return {...state, fechaFinal: action.payload};
        case "GET_PRODUCTOS_SOLO_DESCRIPCION":
            return {...state, listaProductosSoloDescripcion:action.payload};
        case "VALOR_INPUT":
            return{...state, palabraDescripcion:action.payload}
        case "GET_PRODUCTOS_SOLO_FECHAS":
            return {...state, listaProductosSoloFechas:action.payload}// Sobrescribe los valores con los datos del payload
        case "GET_PRODUCTOS_DESCRIPCION_FECHAS":
            return {...state, listaProductosDescripcionFechas:action.payload};
        case "TIPO_BUSQUEDA":
            return {...state, tipo_Busqueda:action.payload};
        case "INPUT_BUSQUEDA":
            return {...state, busqueda:action.payload};
        }       
}