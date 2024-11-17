export const reducer = (state,action) =>{
    switch(action.type){
        case "GET_PRODUCTOS":
            return {...state, lista:action.payload};
        case "GET_CATEGORIAS":
            return {...state, listaCategorias:action.payload};
        case "GET_PRODUCTOS_ALEATORIOS":
            return {...state, listaProductosAleatorios:action.payload};
        }
}