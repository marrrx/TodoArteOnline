import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginAdmin() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        navigate('/dashboard')
      };
  return (
    <div>LoginAdmin
                                <button onClick={handleSubmit} className="btn btn-primary">Iniciar sesión</button>

    </div>
  )
}
