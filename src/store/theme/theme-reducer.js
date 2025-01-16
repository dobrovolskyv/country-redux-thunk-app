import { SET_THEME } from "./theme-actions";

//сразу используем деструктуризацию action, чтобы не писать action.type action.payload

export const themeReducer = (state = 'light', {type, payload}) => {
    switch (type) {
        case SET_THEME:
            return payload
    
        default:
            return state;
    }
}