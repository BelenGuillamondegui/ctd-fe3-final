import { createContext, useContext, useState, useEffect, useReducer } from "react";


export const ContextGlobal = createContext();

export const initialState = {theme: "light", data:[]}

// const reducer =(state, action)=>{
//   switch (action.type) {
//     case 'toggle':
//       return {
//         theme: state.theme === 'light' ? 'dark' : 'light',
//       };
//     default:
//       throw new Error('ocurrió un error');
//   }
// };

// const MyComponent = () => {
//   const { state, dispatch } = useReducer(reducer,initialState);

//   return (
//     <div className={state.theme}>
//       <button onClick={() => dispatch({ type: 'toggle' })}>
//         {state.theme === 'light' ? 'Dark' : 'Light'}
//       </button>
     
//     </div>
//   );
// };




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
