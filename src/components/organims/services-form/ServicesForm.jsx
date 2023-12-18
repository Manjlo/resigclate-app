import { ReactComponent as Back } from "../../../assets/svg/backIcon.svg";

function ServicesForm({ user, handleFormView, formView }) {
  return (
    <>
      <div className={`blur-container ${formView ? "blur" : ""}`}></div>
      <div className="z-[1010] w-[750px] h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl items-center justify-center flex flex-col shadow-xl p-4">
        <span className="mt-2 mx-4 pt-2">
          <Back onClick={handleFormView} className="cursor-pointer" />
        </span>
        <aside className="text-lg m-4 items-center justify-center flex flex-col">
          <h1>{`HOLA ${user}`}</h1>
          <h2>¿Como podemos ayudarte?</h2>
        </aside>
        <form className="m-6 mx-12" action="/submit_form">
          <aside className="flex flex-col">
            <label htmlFor="fname">Nombre: </label>
            <input
              className="rounded-md border border-[#0074B7] outline-none p-1 px-2"
              type="text"
              name="fname"
              id="fname"
            />
            <label htmlFor="fname">Correo electronico: </label>
            <input
              className="rounded-md border border-[#0074B7] outline-none p-1 px-2"
              type="text"
              name="email"
              id="email"
            />
            <label htmlFor="fname">Numero de telefono: </label>
            <input
              className="rounded-md border border-[#0074B7] outline-none p-1 px-2"
              type="text"
              name="phone"
              id="phone"
            />
            <label htmlFor="fname">Tipo de consulta: </label>
            <select name="query-type" id="query-type">
              <option value="general">Preguntas generales</option>
              <option value="technical">Problemas tecnicos</option>
              <option value="seggestions">Sugerencias de mejora</option>
            </select>
          </aside>
          <aside className="flex flex-col items-center">
            <label htmlFor="details">Detalles: </label>
            <textarea
              className="w-[600px] rounded-lg border outline-none p-4 border-[#0074B7] text-xs"
              id="details"
              name="details"
              placeholder="Escribenos tus sugerencias, dudas o quejas. En Resigcla tu opinion es importante....."
            />
          </aside>
          <input
            className="bg-[#228b22] p-2 m-4 rounded-md text-white text-lg"
            type="submit"
            value="Enviar"
          />
        </form>

        <p className=" text-justify mx-16 text-sm pb-4 text-[#228B22]">
          Nota: La información proporcionada será utilizada de acuerdo con la política de privacidad
          de nuestra aplicación
        </p>
      </div>
    </>
  );
}

export default ServicesForm;
