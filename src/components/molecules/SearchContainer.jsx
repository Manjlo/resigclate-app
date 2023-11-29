import SearchItem from "../atoms/SearchItem";
import { ReactComponent as UserSvg } from "../../assets/svg/searchsvg.svg";

function SearchContainer({ selectPoint, selectRecyPoint }) {
  return (
    <>
      {!selectPoint && !selectRecyPoint && (
        <div className="absolute w-5/6 sm:w-[300px] lg:w-[400px] top-12 sm:top-8 ml-6 sm:left-1/3 left-2 h-auto bg-white  rounded-lg sm:rounded-md shadow-xl text-sm z-[1000] p-2 sm:p-0">
          <SearchItem
            type={"search"}
            text={"Buscar centros de reciclaje"}
            SvgComponent={UserSvg}
            w={"sm:w-[88%] h-auto"}
          />
        </div>
      )}
    </>
  );
}

export default SearchContainer;
