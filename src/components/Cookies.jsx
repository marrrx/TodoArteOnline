import React, { useEffect, useRef, useState } from 'react';
import { Modal } from 'bootstrap'; 

const Cookies = () => {
    const [modalInstance, setModalInstance] = useState(null);
    const modalRef = useRef(null);

    useEffect(() => {
        const modalElement = modalRef.current;
        const modal = new Modal(modalElement, {
            backdrop: 'static', 
            keyboard: false    
        });

        setModalInstance(modal);

        modal.show();

        return () => {
            modal.hide(); 
            modal.dispose(); 
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleCloseModal = () => {
        if (modalInstance) {
            modalInstance.hide(); 
            document.body.style.overflow = 'auto';
        }
    };

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref={modalRef}>
        <div className="modal-dialog  modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">TodoArte</h5>
              <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Este aviso de privacidad describe cómo TodoArte recopila, utiliza y protege la información personal que pueda recopilar a través de este sitio web.</p>
              <p>Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Te recomendamos que revises periódicamente esta página para asegurarte de estar familiarizado con cualquier cambio.</p>
              <p>Si tienes alguna pregunta sobre esta política de privacidad, contáctanos a <a href="mailto:todoarte@gmail.com">todoarte@gmail.com</a>.</p>
            </div>
            <div className="modal-footer">
              <a href="https://policies.google.com/privacy?hl=es-419" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Más información
              </a>
              <button type="button" className="btn btn-primary" onClick={handleCloseModal}>Aceptar</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cookies;
