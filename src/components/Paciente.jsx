const Paciente = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow px-5 py-10 rounded-md">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">Oscar</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">fkdsl@jdskl.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta:{" "}
        <span className="font-normal normal-case">10 Diciembre</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas:{" "}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore rerum
          natus dolorem reiciendis necessitatibus minima similique accusantium
          ea dolorum sunt, libero aut, perspiciatis sequi, porro doloremque
          corrupti. Nam, incidunt inventore.
        </span>
      </p>
    </div>
  );
};

export default Paciente;
