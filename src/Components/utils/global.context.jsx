import { createContext, useContext, useState, useEffect } from "react";

export const initialState = {theme: "", data:[]}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [doctors, setDoctors] = useState([])

  const url = "https://jsonplaceholder.typicode.com/users"
  
useEffect(() =>{
  fetch(url)
  .then(res => res.json())
  .then(data => setDoctors(data))
},[])

// console.log(doctors);
  return (
    <ContextGlobal.Provider value={{doctors, setDoctors}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal)
