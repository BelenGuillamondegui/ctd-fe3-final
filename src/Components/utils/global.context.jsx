import { createContext, useContext, useState, useEffect, useReducer } from "react";


export const ContextGlobal = createContext();

export const initialState = {theme: "light", data:[]}

export const reducer =(state, action)=>{
  switch (action.type) {
    case 'BTN_TOGGLE':
      return {
          ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
};





export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [doctors, setDoctors] = useState([])
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users"
  
useEffect(() =>{
  fetch(url)
  .then(res => res.json())
  .then(data => setDoctors(data))
},[])

return (
    <ContextGlobal.Provider value={{doctors, setDoctors,state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal)
