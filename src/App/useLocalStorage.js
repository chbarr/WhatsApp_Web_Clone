import React from 'react';

function useLocalStorge(itemName, initialValue) {
    const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));
    const {
        item,
        loading,
        error
    } = state;
    console.log('state', state);

    //Action creators
    const onError = (error) => {
        dispatch({ type: actionTypes.error, payload: error });
    }

    const onSuccess = (parsedItem) => {
        //console.log('on success!!: ' + JSON.stringify(parsedItem));
        dispatch({ type: actionTypes.success, payload: parsedItem });
    }

    React.useEffect(
        () => {
            setTimeout(
                () => {
                    try {
                        const localStorageItem = localStorage.getItem(itemName);
                        let parsedItem = localStorageItem ? JSON.parse(localStorageItem) : initialValue;
                        console.log('parsedItem: ' + JSON.parse(localStorageItem))
                        onSuccess(parsedItem);
                    } catch (error) {
                        console.log('on errorr' + error)
                        onError(error);
                    }
                }, 700
            )
        }, []
    );

    return {
        item,
        loading,
        error
    };
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

export { useLocalStorge }