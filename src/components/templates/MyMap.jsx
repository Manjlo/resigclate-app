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
import MarkerPoint from "../atoms/MarkerPoint.jsx";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { recyclingPoints } from "../../assets/json/recyclingPoints.js";
import JsonLayers from "../atoms/JsonLayers.jsx";
import PointForm from "../organims/PointForm.jsx";

const usuario = "javier";

const MyMap = ({
  center,
  zoom,
  scrollWheelZoom,
  baseLayers,
  zoomControl,
  selectPoint,
  handleSelectPoint,
  handleSelectRecyPoint,
  selectRecyPoint,
  recyPointSelected,
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
        <TileLayer
          attribution={baseLayers[0].attribution}
          url={baseLayers[0].url}
        />
        <JsonLayers
          handleSelectRecyPoint={handleSelectRecyPoint}
          data={recyclingPoints}
        />
        <MyCustomControl
          className={
            "grid grid-rows-2 gap-2 sm:w-10 sm:h-24 bg-white shadow-md rounded-md relative top-[44px]"
          }
        >
          <LocationMarker />
          <LayerSwitcher baseLayers={baseLayers} />
        </MyCustomControl>
        {selectPoint && !selectRecyPoint && (
          <MarkerPoint setAddress={setAddress} />
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
        <div className={"w-auto absolute left-1/3 bottom-12 z-[1000]"}>
          <SvgToDiv SvgComponent={iconBarSvg} styleDiv={"top-14 relative"} />
          <ItemsBar
            handleSelectPoint={handleSelectPoint}
            perfilurl={usuarioUrl}
            usuario={usuario}
            styleMissing={
              "grid grid-cols-5 h-auto relative items-center justify-center"
            }
          />
        </div>
      )}
      {selectPoint && !selectRecyPoint && (
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
      {selectRecyPoint && (
        <div className="bg-white absolute shadow-2xl rounded-lg w-auto h-auto top-0 sm:top-7 left-0 sm:left-28 z-[1000]">
          <PointForm
            data={recyclingPoints}
            recyPointSelected={recyPointSelected}
          />
        </div>
      )}
      {selectRecyPoint && (
        <ItemsBar
          styleMissing={
            "w-[80px] sm:h-[98vh] rounded-l-md absolute shadow-2xl top-1.5 2xl:top-[9.4px] bg-white z-[1000] flex flex-col justify-start items-center space-y-4 pt-16 shadow-[inset_0_2px_24px_rgba(0,0,0,0.45)] hidden sm:block"
          }
          setStyleIconButton={"hidden"}
          imgStyleMissing={"absolute top-[84vh] ml-5"}
        />
      )}
    </>
  );
};

export default MyMap;
