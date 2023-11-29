import React, { useState } from "react";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import LayerSwitcher from "../molecules/LayerSwitcher";
import MyCustomControl from "../molecules/CustomControl.jsx";
import Logo from "../../assets/icons/logo.png";
import { ReactComponent as IconBarSvg } from "../../assets/svg/iconBars.svg";
import { ReactComponent as IconBarMovilSvg } from "../../assets/svg/barMovil.svg";
import LocationMarker from "../atoms/LocationMarker";
import ItemsBar from "../molecules/ItemsBar";
import usuarioUrl from "../../assets/icons/perfil.png";
import CreatePointForm from "../organims/CreatePointForm";
import MarkerPoint from "../atoms/MarkerPoint.jsx";
import { recyclingPoints } from "../../assets/json/recyclingPoints.js";
import JsonLayers from "../atoms/JsonLayers.jsx";
import PointForm from "../organims/PointForm.jsx";
import SearchContainer from "../molecules/SearchContainer.jsx";
import ClickHandler from "../atoms/ClickHandler.jsx";
import Routing from "../atoms/Routing.jsx";

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
  const [inputValue, setInputValue] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [coorOne, setCoorOne] = useState(null);
  const [coorTwo, setCoorTwo] = useState(null);

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

  const geocodeAddress = (lat, lng) => {
    const provider = new OpenStreetMapProvider();
    provider.search({ query: `${lat},${lng}` }).then((results) => {
      const thisAddress = results[0]?.label || "";
      setNewAddress(thisAddress);
    });
  };

  const handleMapClick = (e) => {
    geocodeAddress(e.latlng.lat, e.latlng.lng);
  };

  return (
    <>
      <SearchContainer
        selectPoint={selectPoint}
        selectRecyPoint={selectRecyPoint}
      />
      <MapContainer
        className="sm:rounded-md"
        center={center}
        zoom={zoom}
        scrollWheelZoom={scrollWheelZoom}
        zoomControl={zoomControl}
      >
        {coorOne && coorTwo && <Routing coorOne={coorOne} coorTwo={coorTwo} />}
        <ClickHandler onMapClick={handleMapClick} />
        <TileLayer
          attribution={baseLayers[0].attribution}
          url={baseLayers[0].url}
        />
        <JsonLayers
          handleSelectRecyPoint={handleSelectRecyPoint}
          data={recyclingPoints}
        />
        <MyCustomControl className="sm:grid sm:grid-rows-2 gap-2 sm:w-10 w-10 h-10 sm:h-24 bg-white shadow-md rounded-lg relative sm:top-[44px] top-[15vh] flex items-center justify-center right-3.5 sm:right-0">
          <LocationMarker setInputValue={setInputValue} />
          <LayerSwitcher baseLayers={baseLayers} />
        </MyCustomControl>
        {selectPoint && !selectRecyPoint && (
          <MarkerPoint setAddress={setAddress} />
        )}
      </MapContainer>
      {!selectPoint && !selectRecyPoint && (
        <div className="w-8 h-8 sm:h-[70px] sm:w-[70px] absolute top-[60px] sm:top-4 right-12 sm:left-12 rounded-full shadow-sm z-[10000]">
          <img src={Logo} alt="Logo" />
        </div>
      )}
      {!selectPoint && !selectRecyPoint && (
        <div className="w-auto absolute m-4 mb-4 sm:left-1/3 bottom-4 z-[1000]">
          <span className="top-16 relative sm:hidden opacity-80">
            <IconBarMovilSvg />
          </span>
          <span className="top-14 relative hidden sm:block">
            <IconBarSvg />
          </span>
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
        <div className="pointform-animation bg-white absolute shadow-2xl rounded-none sm:rounded-lg sm:w-[350px] w-full h-auto top-0 sm:top-6 left-0 sm:left-6 z-[10000]">
          <CreatePointForm
            newAddress={address}
            setNewAddress={setAddress}
            handleSubmit={handleSubmit}
            handleSelectPoint={handleSelectPoint}
          />
        </div>
      )}
      {selectRecyPoint && (
        <div className="recypoint-animation bg-white absolute shadow-2xl rounded-none sm:rounded-lg w-auto h-auto top-0 sm:top-7 left-0 sm:left-28 z-[1000]">
          <PointForm
            data={recyclingPoints}
            recyPointSelected={recyPointSelected}
            handleSelectRecyPoint={handleSelectRecyPoint}
            inputValue={inputValue}
            newAddress={newAddress}
            setCoorOne={setCoorOne}
            setCoorTwo={setCoorTwo}
          />
        </div>
      )}
      {selectRecyPoint && (
        <ItemsBar
          perfilurl={usuarioUrl}
          usuario={usuario}
          styleMissing={
            "w-[80px] sm:h-[98vh] rounded-l-md absolute shadow-2xl top-1.5 2xl:top-[9.4px] bg-white z-[1000] flex flex-col justify-start items-center space-y-4 pt-16 shadow-[inset_0_2px_24px_rgba(0,0,0,0.15)] hidden sm:block"
          }
          setStyleIconButton={"hidden"}
          imgStyleMissing={"absolute top-[84vh] ml-0"}
        />
      )}
    </>
  );
};

export default MyMap;
