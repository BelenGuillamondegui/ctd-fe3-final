import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [user, setUser] = useState({
   nombre_completo:"",
    email: '',
    
})

const [show, setShow] = useState(false)
const [err, setErr] = useState(false)


const handleSubmit = (event) => {
    event.preventDefault()

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let emailTest = emailRegex.test(user.email)
    if(emailTest && user.nombre_completo.length > 5){ 

     setShow(true)
     setErr(false)
    } else setErr(true)
}

return ( 
<>
    <form onSubmit={handleSubmit}>
        <label>Nombre completo</label>
        <input type="text" onChange={(event) => setUser({...user, nombre_completo: event.target.value})}/>
        <label>Email</label>
        <input type="email" onChange={(event) => setUser({...user, email: event.target.value})}/>
        
        {err && 'Por favor verifique su información nuevamente'}
        <button>Enviar</button>
    </form>
    {
            show
            && 
            <>
                <h4>Gracias! {user.nombre_completo},te contactaremos cuando antes vía mail </h4>
                
            </>
        }


    </>
  )
}
export default Form;
