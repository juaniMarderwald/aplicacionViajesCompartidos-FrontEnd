import { useEffect, useReducer } from "react";

const useLocalStorage = (itemName, initialValue) => {
  const [state, dispatch] = useReducer(reducer, initialState(initialValue));

  const { item, error } = state;

  const onSuccess = (parsedItem) =>
    dispatch({
      type: actionTypes.item,
      payload: { value: parsedItem },
    });

  const onError = (error) =>
    dispatch({
      type: actionTypes.error,
      payload: error.message,
    });

  const saveNewItem = (itemName, itemValue) => {
    try {
      let parsedItem = JSON.stringify(itemValue);
      localStorage.setItem(itemName, parsedItem);
      onSuccess(parsedItem);
    } catch (error) {
      onError(error);
    }
  };

  useEffect(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
      if (localStorageItem !== null) {
        const parsedItem = JSON.parse(localStorageItem);
        onSuccess(parsedItem);
      }
    } catch (error) {
      onError(error);
    }
  }, [itemName]);

  return {
    item,
    error,
    saveNewItem,
  };
};

// Reducer
const initialState = (initialValue) => ({
  item: initialValue,
  error: false,
  errorMessage: "",
  isSynchronized: false,
});

const actionTypes = {
  item: "ITEM",
  error: "ERROR",
};

const reducerObject = (state, action) => ({
  [actionTypes.item]: {
    item: action.payload.value,
    error: false,
    errorMessage: "",
  },
  [actionTypes.error]: {
    ...state,
    error: true,
    errorMessage: action.payload,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action)[action.type] || state;
};

export { useLocalStorage };
