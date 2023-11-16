import Logo from "../../assets/icons/logo.png";

function CreatePointForm() {
  return (
    <article className="w-full bg-transparent h-full grid grid-rows-5">
      <div className="flex justify-between m-4 mr-6 ml-6">
        <span>←</span>
        <img className="w-[25px] h-[25px]" src={Logo} alt="Logo" />
      </div>
      <div className="mr-4 ml-4 pr-6 pl-6 shadow-md rounded-md">
        <p>
          Agrega tu punto para que un profesional ejerza el ejercicio de
          reciclaje
        </p>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </article>
  );
}

export default CreatePointForm;
