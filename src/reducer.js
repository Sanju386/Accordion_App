export const reducer = (state,{type,payload})=>{
switch (type) {
    case "EXPAND":
        return {...state, expand: payload}
        break;

    default:
        return state
}
}