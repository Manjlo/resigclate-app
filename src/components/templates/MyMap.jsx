import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LayerSwitcher } from "../molecules/LayerSwitcher";
import { MyCustomControl } from "../organims/CustomControl";
import { SearchItem } from "../molecules/SearchItem";
import { ReactComponent as UserSvg } from "../../assets/svg/searchsvg.svg";
import { ReactComponent as iconBarSvg } from "../../assets/svg/iconBars.svg";
import Logo from "../../assets/icons/logo.png";
import { LocationMarker } from "../atoms/LocationMarker";
import { ItemsBar } from "../molecules/ItemsBar";
import usuarioUrl from "../../assets/icons/perfil.png";
import { SvgToDiv } from "../atoms/SvgToDiv";

const usuario = "javier";

const MyMap = ({ center, zoom, scrollWheelZoom, baseLayers, zoomControl }) => {
  return (
    <div className="h-screen w-screen">
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
          <MyCustomControl
            className={
              "h-[70px] w-[70px] right-[88vw] relative rounded-full shadow-sm"
            }
          >
            <img src={Logo} alt="Logo" />
          </MyCustomControl>
          <MyCustomControl
            className={
              "w-[300px] lg:w-[400px] right-[33vw] top-[-60px] h-auto bg-white relative rounded-md shadow-lg text-md"
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
        </MyCustomControl>
      </MapContainer>
      <div className="navbar-controller absolute bottom-9 right-1/3 z-[1000]">
        <SvgToDiv SvgComponent={iconBarSvg} />
        <ItemsBar perfilurl={usuarioUrl} usuario={usuario} />
      </div>
    </div>
  );
};

export { MyMap };
