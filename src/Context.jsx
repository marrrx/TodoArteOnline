import React, { createContext, useState, useEffect } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [productosDeseos, setProductosDeseos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [search, setSearch] = useState('');


  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrecio = productos.reduce((acc, curr) => {
      const precioNumerico = parseFloat(curr.precio);
      return acc + precioNumerico;
    }, 0);

    const totalFormateado = totalPrecio.toFixed(2);

    setTotal(totalFormateado);
  }, [productos]);




  const setSearchGlobal = (value) => {
    setSearch(value);
  }



  const setProductoGlobal = (value) => {
    setProductos([...productos, value]);
  };
  const setProductoDeseosGlobal = (value) => {
    setProductosDeseos([...productosDeseos, value]);
  };



  return (
    <MyContext.Provider value={{ productos, setProductos, total, setTotal, setProductoGlobal, productosDeseos, setProductosDeseos, setProductoDeseosGlobal, categorias, setCategorias, search, setSearchGlobal }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
