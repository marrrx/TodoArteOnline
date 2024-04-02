import React from 'react'

import { Outlet } from 'react-router-dom'



export default function Contacto() {
    return (
        <>

<form>
<div>
<label for="user"> Usuario: </label>
<input type="text" id="user" required/>
</div>
// crear login
<div>
<label for="password"> Contraseña: </label>
<input type="password" id="password" required/>
</div>
<button type="submit"> Login </button>
</form>

        </>
    )
}
