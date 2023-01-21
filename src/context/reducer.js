import React from "react";
import * as actionTypes from './action'

const initialState = {
    shortUrl: '',
    loading: false,
    requestError: '',
}


const reducer = (state = initialState, action) => {
    const actions = {
        [actionTypes.REQUEST_SUCCESSFUL]: () => ({
            ...state,
            loading: false,
            shortUrl: action.payload,
        }),
        [actionTypes.REQUEST_ERROR]: () => ({
            ...state,
            loading: false,
            requestError: action.textError,
        }),
        [actionTypes.REQUEST_LOADING]: () => ({
            ...state,
            loading: true,
        })
    }
    return actions[action.type]();
}

export const Context = React.createContext();


export const ContextProvider = (props) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <Context.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};