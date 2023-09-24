import React from 'react'
import { useState, useEffect } from 'react';


function useLocalStorage(itemName, initialValue) {

    const initialState = {
        item: initialValue,
        loading: true,
        error: false
    }

    const [state, dispatch] = React.useReducer(reducer, initialState);

    const {
        item,
        loading,
        error
    } = state;

    //Action creators
    const onError = (error) => {
        dispatch({ type: actionTypes.error, payload: error });
    }

    const onSuccess = (parsedItem) => {
        dispatch({ type: actionTypes.success, payload: parsedItem });
    }

    useEffect(() => {
        const fetchDataFromLocalStorage = () => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                if (localStorageItem) {
                    const parsedItem = JSON.parse(localStorageItem);
                    onSuccess(parsedItem);
                }
            } catch (error) {
                onError(error);
            }
        };
        
        if (loading) {
            const timer = setTimeout(() => {
                console.log("buscando datos del localStorage");
                fetchDataFromLocalStorage();
            }, 700);
            return () => clearTimeout(timer); // Limpia el temporizador en la desinstalación del componente
        }

    }, [loading]);

    return { item, loading, error };
}

const initialState = ({ initialValue }) => ({
    item: initialValue,
    loading: true,
    error: false
});

const actionTypes = {
    success: 'SUCCESS',
    error: 'ERROR'
}

const reducerObject = (state, payload) => ({
    [actionTypes.success]: {
        ...state,
        item: payload,
        loading: false
    },
    [actionTypes.error]: {
        ...state,
        loading: false,
        error: true
    }
})

const reducer = (state, action) => reducerObject(state, action.payload)[action.type];

export { useLocalStorage }
