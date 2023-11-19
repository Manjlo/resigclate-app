import React, { useState } from "react";
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
import DraggableMarker from "../atoms/DraggableMarker";
import { OpenStreetMapProvider } from "leaflet-geosearch";

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
  const [address, setAddress] = useState("");

  const updatePosition = ({ lat, lng }) => {
    const provider = new OpenStreetMapProvider();
    provider.search({ query: `${lat},${lng}` }).then((results) => {
      const thisAddress = results[0]?.label || "";
      setAddress(thisAddress);
    });
  };

  const handleSubmit = () => {
    updatePosition(address);
  };

  return (
    <>
      {!selectPoint && (
        <div
          className={
            "absolute w-[300px] lg:w-[400px] top-8 ml-6 left-1/3 h-auto bg-white rounded-md shadow-lg text-sm z-[1000]"
          }
        >
          <SearchItem
            type={"search"}
            text={"Buscar centros de reciclaje"}
            SvgComponent={UserSvg}
          />
        </div>
      )}
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
              "grid grid-rows-2 gap-2 sm:w-10 sm:h-24 bg-white shadow-md rounded-md relative top-[44px]"
            }
          >
            <LocationMarker />
            <LayerSwitcher baseLayers={baseLayers} />
          </MyCustomControl>
        </MyCustomControl>
        {selectPoint && (
          <DraggableMarker
            setPosition={(position) => updatePosition(position)}
            setAddress={setAddress}
          />
        )}
      </MapContainer>
      {!selectPoint && (
        <div
          className={
            "h-[70px] w-[70px] absolute top-4 left-12 rounded-full shadow-sm z-[10000]"
          }
        >
          <img src={Logo} alt="Logo" />
        </div>
      )}
      {!selectPoint && (
        <div className={"w-auto absolute left-1/3 top-[77vh] z-[1000]"}>
          <SvgToDiv SvgComponent={iconBarSvg} />
          <ItemsBar
            handleSelectPoint={handleSelectPoint}
            perfilurl={usuarioUrl}
            usuario={usuario}
          />
        </div>
      )}
      {selectPoint && (
        <div
          className={
            "bg-white absolute shadow-2xl rounded-lg w-[350px] h-auto top-6 left-6 z-[10000]"
          }
        >
          <CreatePointForm
            newAddress={address}
            setNewAddress={setAddress}
            handleSubmit={handleSubmit}
            handleSelectPoint={handleSelectPoint}
          />
        </div>
      )}
    </>
  );
};

export default MyMap;
