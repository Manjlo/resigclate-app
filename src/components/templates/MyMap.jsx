import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import LayerSwitcher from "../molecules/LayerSwitcher";
import MyCustomControl from "../organims/CustomControl";
import SearchItem from "../molecules/SearchItem";
import Logo from "../../assets/icons/logo.png";
import { ReactComponent as UserSvg } from "../../assets/svg/searchsvg.svg";
import { ReactComponent as iconBarSvg } from "../../assets/svg/iconBars.svg";
import LocationMarker from "../atoms/LocationMarker";
import ItemsBar from "../molecules/ItemsBar";
import usuarioUrl from "../../assets/icons/perfil.png";
import SvgToDiv from "../atoms/SvgToDiv";
import CreatePointForm from "../organims/CreatePointForm";

const usuario = "javier";

const MyMap = ({
  center,
  zoom,
  scrollWheelZoom,
  baseLayers,
  zoomControl,
  selectPoint,
  handleSelectPoint,
}) => {
  return (
    <MapContainer
      className="sm:rounded-md"
      center={center}
      zoom={zoom}
      scrollWheelZoom={scrollWheelZoom}
      zoomControl={zoomControl}
    >
      <MyCustomControl>
        <TileLayer
          attribution={baseLayers[0].attribution}
          url={baseLayers[0].url}
        />
        {!selectPoint && (
          <MyCustomControl
            className={
              "h-[70px] w-[70px] right-[88vw] xl:right-[90vw] relative rounded-full shadow-sm"
            }
          >
            <img src={Logo} alt="Logo" />
          </MyCustomControl>
        )}
        <MyCustomControl
          className={
            "w-[300px] lg:w-[400px] right-[33vw] 2xl:right-[40vw] top-[-60px] h-auto bg-white relative rounded-md shadow-lg text-md"
          }
        >
          <SearchItem
            type={"search"}
            text={"Buscar centros de reciclaje"}
            SvgComponent={UserSvg}
          />
        </MyCustomControl>
        <MyCustomControl className="grid grid-rows-2 gap-2 sm:w-10 sm:h-24 bg-white shadow-md rounded-md relative top-[44px]">
          <LocationMarker />
        </MyCustomControl>
        <LayerSwitcher baseLayers={baseLayers} />
        {!selectPoint && (
          <MyCustomControl
            className={
              "w-auto h-0 bg-red-200 absolute z-20 right-[29vw] 2xl:right-[37vw] top-[25vh] 2xl:top-[50vh]"
            }
          >
            <SvgToDiv SvgComponent={iconBarSvg} />
            <ItemsBar
              handleSelectPoint={handleSelectPoint}
              perfilurl={usuarioUrl}
              usuario={usuario}
            />
          </MyCustomControl>
        )}
        {selectPoint && (
          <MyCustomControl
            className={
              "bg-white shadow-xl rounded-lg w-[350px] h-[40vh] top-[-34vh] right-[68vw]"
            }
          >
            <CreatePointForm />
          </MyCustomControl>
        )}
      </MyCustomControl>
    </MapContainer>
  );
};

export default MyMap;
