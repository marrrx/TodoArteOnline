import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Preguntas() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: '¿Cuál es el tiempo de entrega?',
      answer: 'El tiempo de entrega depende de tu ubicación.',
      isOpen: false
    },
    {
      id: 2,
      question: '¿Con qué material están pintados los cuadros?',
      answer: 'Los cuadros están pintados con pintura acrílica.',
      isOpen: false
    },
    {
      id: 3,
      question: '¿Cuál es su medida?',
      answer: 'Las medidas se especifican en la descripción de cada producto.',
      isOpen: false
    },
    {
      id: 4,
      question: '¿Cuál es el precio?',
      answer: 'Los precios están especificados en la descripción de cada producto.',
      isOpen: false
    },
    {
      id: 5,
      question: '¿Cuentan con entrega a domicilio?',
      answer: 'Sí, los cuadros se entregan hasta la puerta de tu casa.',
      isOpen: false
    },
    {
      id: 6,
      question: '¿Son auténticos?',
      answer: 'Sí, cada uno de los cuadros es auténtico y cuenta con un sello de autenticidad.',
      isOpen: false
    },
    {
      id: 7,
      question: '¿Cuáles son sus cuidados?',
      answer: 'Se recomienda mantenerlos en zonas no húmedas, sin exposición directa al sol, no mojar y limpiar solo con un plumero.',
      isOpen: false
    }
  ]);

  const toggleQuestion = (id) => {
    setQuestions(
      questions.map(question =>
        question.id === id ? { ...question, isOpen: !question.isOpen } : question
      )
    );
  };

  return (
    <div className="container text-center">
        <div className="rounded p-4" style={{ backgroundColor: '#f0f0f0' }}>
        <h1 className="mt-5">Preguntas Frecuentes</h1>
        <p className="lead">Bienvenido a la sección de preguntas frecuentes. Esperamos que encuentres respuestas a tus dudas.</p>
        {questions.map(question => (
          <div className="rounded bg-white p-3 mb-3" key={question.id}>
            <div className="question-summary" onClick={() => toggleQuestion(question.id)}>
              {question.question}
            </div>
            {question.isOpen && (
              <div className="answer">
                {question.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}



