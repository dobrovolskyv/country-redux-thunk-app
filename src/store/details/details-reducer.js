import { SET_COUNTRY, SET_LOADING, SET_ERROR, SET_NEIGHBORS } from "./details-actions";

const initialState = {
    currentCountry: null,
    status: 'idle',
    error: null,
    neighbors: [],
}

export const detailsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_COUNTRY:
            return {
                ...state,
                status: 'received',
                currentCountry: payload,

            }
        case SET_LOADING:
            return {
                ...state,
                status: 'loading',
                error: null
            }
        case SET_ERROR:
            return {
                ...state,
                status: 'rejected',
                error: payload
            }
        case SET_NEIGHBORS:
            return{
                ...state,
                neighbors: payload
            }
        default:
            return state;
    }
}