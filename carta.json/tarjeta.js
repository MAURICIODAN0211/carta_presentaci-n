fetch("persona.json")
  .then((respuesta) => {
    if (!respuesta.ok) {
      throw new Error("No se pudo cargar carta.json");
    }

    return respuesta.json();
  })
  .then((datos) => {
    document.getElementById("logo").src = datos.logo;
    document.getElementById("empresa").textContent = datos.empresa;
    document.getElementById("departamento").textContent =
      datos.departamento;
    document.getElementById("empleado").textContent = datos.empleado;
    document.getElementById("mensaje").textContent = datos.mensaje;
    document.getElementById("firma").textContent = datos.firma;
    document.getElementById("remitente").textContent = datos.remitente;
    document.getElementById("cargo").textContent = datos.cargo;

    document.getElementById("pie").textContent =
      `${datos.direccion} | ${datos.telefono} | ` +
      `${datos.correoEmpresa} | ${datos.sitioWeb}`;
  })
  .catch((error) => {
    console.error(error);
    document.getElementById("mensaje").textContent =
      "No se pudieron cargar los datos. Revisa los nombres de los archivos.";
  });