import React, { createContext, useState, useEffect } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrecio = productos.reduce((acc, curr) => {
      const precioNumerico = parseFloat(curr.precio);
      return acc + precioNumerico;
    }, 0);
  
    const totalFormateado = totalPrecio.toFixed(2);
  
    setTotal(totalFormateado);
  }, [productos]);
  
  
  
  
  


  const setProductoGlobal = (value) => {
    setProductos([...productos, value]);
  };

  return (
    <MyContext.Provider value={{ productos, total, setTotal, setProductoGlobal }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
