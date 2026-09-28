fetch("./data/datos.json")
  .then((respuesta) => {
    if (!respuesta.ok) {
      throw new Error(
        `No se pudo cargar datos.json. Código HTTP: ${respuesta.status}`
      );
    }

    return respuesta.json();
  })

  .then((datos) => {

    // Logo
    document.getElementById("logo").src = datos.logo;
    document.getElementById("logo").alt =
      `Logo de ${datos.empresa}`;

    // Datos de la carta
    document.getElementById("empresa").textContent =
      datos.empresa;

    document.getElementById("departamento").textContent =
      datos.departamento;

    document.getElementById("empleado").textContent =
      datos.empleado;

    document.getElementById("mensaje").textContent =
      datos.mensaje;

    // Firma
    document.getElementById("firma").textContent =
      datos.firma;

    document.getElementById("remitente").textContent =
      datos.remitente;

    document.getElementById("cargo").textContent =
      datos.cargo;

    // Pie de página
    document.getElementById("pie").textContent =
      `${datos.direccion} | ${datos.telefono} | ` +
      `${datos.correoEmpresa} | ${datos.sitioWeb}`;
  })

  .catch((error) => {
    console.error(error);

    document.getElementById("mensaje").textContent =
      "No se pudieron cargar los datos. " +
      "Revisa los nombres y las rutas de los archivos.";
  });
