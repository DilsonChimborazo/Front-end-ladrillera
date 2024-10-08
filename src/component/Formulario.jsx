import React, { useState } from 'react';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    descripcion: '',
    cantidad: '',
    fecha: ''
  });

  const [datosEnviados, setDatosEnviados] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    setDatosEnviados({
      ...formData,
      Total: formData.precio * formData.cantidad 
    });
  };

  return (
    <form onSubmit={enviarDatos}>
      <div className="container shadow-lg p-5 my-5 border border-danger">
        <h1>Agregar Actividad</h1>
        <label htmlFor="nombre" className="form-label text-start d-block"><b>Nombre:</b></label>
        <input className="form-control" type="text" name="nombre" placeholder="Ingrese la actividad" onChange={handleChange} />

        <label htmlFor="precio" className="form-label text-start d-block"><b>Precio:</b></label>
        <input className="form-control" type="number" name="precio" placeholder="Ingrese el precio" onChange={handleChange} />

        <label htmlFor="descripcion" className="form-label text-start d-block"><b>Descripcion:</b></label>
        <textarea className="form-control" name="descripcion" placeholder="Ingrese una descripción" onChange={handleChange}></textarea>

        <label htmlFor="cantidad" className="form-label text-start d-block"><b>Cantidad:</b></label>
        <input className="form-control" type="number" name="cantidad" placeholder="Ingrese la cantidad" onChange={handleChange} />

        <label htmlFor="fecha" className="form-label text-start d-block"><b>Fecha:</b></label>
        <input className="form-control" type="date" name="fecha" onChange={handleChange} />

        <button type="submit" className="btn btn-primary mt-4">Agregar</button>
      </div>

      <div>
        <h1>Datos Enviados:</h1>
        <p>Nombre: {datosEnviados.nombre}</p>
        <p>Precio: {datosEnviados.precio} $</p>
        <p>Descripción: {datosEnviados.descripcion}</p>
        <p>Cantidad: {datosEnviados.cantidad}</p>
        <p>Fecha: {datosEnviados.fecha}</p>
        <p>Total: {datosEnviados.Total} $</p>
      </div>
    </form>
  );
};

export default Formulario;


