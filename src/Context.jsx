import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const setProductoGlobal = (value) => {
    setProductos([...productos, value]);
  };

  return (
    <MyContext.Provider value={{ productos, setProductoGlobal }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };