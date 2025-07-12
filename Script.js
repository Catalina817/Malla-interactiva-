const materias = {
  "ICSE": {
    nombre: "Introducción al Conocimiento de la Sociedad y el Estado",
    correlativas: "Ninguna (materia del CBC)"
  },
  "IPC": {
    nombre: "Introducción al Pensamiento Científico",
    correlativas: "Ninguna (materia del CBC)"
  },
  "ICP1": {
    nombre: "Introducción al Conocimiento Proyectual I",
    correlativas: "Ninguna (CBC)"
  },
  "ICP2": {
    nombre: "Introducción al Conocimiento Proyectual II",
    correlativas: "Ninguna (CBC)"
  },
  "Matematica": {
    nombre: "Matemática",
    correlativas: "Ninguna (CBC)"
  },
  "Filosofia": {
    nombre: "Filosofía",
    correlativas: "Ninguna (CBC)"
  },
  "T_Dibujo": {
    nombre: "Taller de Dibujo",
    correlativas: "Ninguna (CBC)"
  },
  "IAC": {
    nombre: "Introducción al Arte Contemporáneo",
    correlativas: "CBC completo"
  },
  "ITC": {
    nombre: "Introducción a la Técnica y la Construcción",
    correlativas: "CBC completo"
  },
  "ITE": {
    nombre: "Instalaciones",
    correlativas: "CBC completo"
  },
  "FAA": {
    nombre: "Física Aplicada a la Arquitectura",
    correlativas: "CBC completo"
  },
  "MAT2": {
    nombre: "Matemática II",
    correlativas: "CBC completo"
  }
};

function mostrarInfo(codigo) {
  const info = materias[codigo];
  const div = document.getElementById('info-materia');
  div.style.display = 'block';
  div.innerHTML = `
    <h3>${info.nombre}</h3>
    <p><strong>Correlativas:</strong> ${info.correlativas}</p>
  `;
}
