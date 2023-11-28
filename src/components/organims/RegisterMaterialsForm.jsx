import { ReactComponent as Back } from "../../assets/svg/backIcon.svg";
import WeigthDiv from "../atoms/WeigthDiv";
import { ReactComponent as Iron } from "../../assets/svg/iron.svg";
import { ReactComponent as Plastic } from "../../assets/svg/plastic.svg";
import { ReactComponent as Glass } from "../../assets/svg/glass.svg";
import { ReactComponent as Circuit } from "../../assets/svg/circuit.svg";
import { ReactComponent as Paper } from "../../assets/svg/paper.svg";
import { ReactComponent as Carton } from "../../assets/svg/carton.svg";
import { ReactComponent as Maleta } from "../../assets/svg/container.svg";

function RegisterMaterialsForm({ isOpenModal, handleIsOpenModal }) {
  return isOpenModal === true ? (
    <article className="bg-white flex flex-col absolute shadow-2xl rounded-lg w-[400px] h-[92vh] lg:left-[30vw] top-0 z-[1000]">
      <span onClick={handleIsOpenModal} className="m-2 mt-6 mx-4">
        <Back className="cursor-pointer" />
      </span>
      <aside className="text-lg p-4 text-center px-12">
        <h1>Registra la cantidad y el tipo de material que deseas reciclar</h1>
      </aside>
      <aside className="text-sm p-4 px-10 space-y-4">
        <h4>Ingresa la cantidad</h4>
        <div className="flex p-1 px-4">
          <div>
            <input
              type="text"
              placeholder="Escribe la cantidad"
              className="text-xs outline-none text-center border border-[#0074b7] rounded-md p-2"
            />
          </div>
          <div className="gap-2 grid grid-cols-3 h-auto w-full">
            <WeigthDiv text={"g"} />
            <WeigthDiv text={"Kg"} />
            <WeigthDiv text={"Tn"} />
          </div>
        </div>
      </aside>
      <div className="text-sm p-2 px-10">
        <h4>Ingresa en el maletin los materiales reciclados</h4>
        <div className="grid grid-cols-3 place-items-center gap-4 p-6">
          <span className="cursor-pointer p-2 rounded-md shadow-md">
            <Glass />
          </span>
          <span className="cursor-pointer p-2 rounded-md shadow-md">
            <Plastic />
          </span>
          <span className="cursor-pointer p-2 rounded-md shadow-md">
            <Iron />
          </span>
          <span className="cursor-pointer p-2 rounded-md shadow-md">
            <Circuit />
          </span>
          <span className="cursor-pointer p-2 rounded-md shadow-md">
            <Paper />
          </span>
          <span className="cursor-pointer p-2 rounded-md shadow-md">
            <Carton />
          </span>
        </div>
        <div className="flex items-center justify-center p-4 shadow-md rounded-lg">
          <Maleta />
        </div>
      </div>
    </article>
  ) : null;
}

export default RegisterMaterialsForm;
