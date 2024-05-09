import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom'

export default function Comunicate() {

    return (
        <>
         <div className="container mt-5">
        <div className="border rounded p-4">
          <h2 className="mb-4">Envíe su mensaje</h2>
          <form action="https://formsubmit.co/todoarteeee@gmail.com" method="POST">
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" className="form-control" name="name" id="nombre" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" className="form-control" name="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="asunto">Asunto</label>
              <input type="text" className="form-control" name="subject" id="asunto" required />
            </div>
            <div className="form-group">
              <label htmlFor="comentarios">Comentarios</label>
              <textarea className="form-control" name="comments" id="comentarios" cols="15" rows="5" required></textarea>
            </div>
            <div>
            <label>Una vez enviado tu mensaje, te redirigiramos a la página de incio</label>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
            

            <input type="hidden" name="_next" value='http://localhost:5173/TodoArteOnline/'/>
            <input type="hidden" name="_captcha" value="false"/>
          </form>
        </div>
      </div>
        </>
    )
}
