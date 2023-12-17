import React, { useState } from "react";
import Logo from "../../assets/icons/logo.png";
import ItemsBar from "../molecules/ItemsBar.jsx";
import usuarioUrl from "../../assets/icons/perfil.png";
import CreatePointForm from "../organims/CreatePointForm.jsx";
import { recyclingPoints } from "../../assets/json/recyclingPoints.js";
import PointForm from "../organims/PointForm.jsx";
import SearchContainer from "../molecules/SearchContainer.jsx";
import { useAddressOnMap } from "../../custom-hooks/useAddressOnMap.js";
import { ReactComponent as IconBarMovilSvg } from "../../assets/svg/barMovil.svg";
import { ReactComponent as IconBarSvg } from "../../assets/svg/iconBars.svg";
import Map from "../organims/Map.jsx";

const usuario = "javier";

const MapTemplate = ({
  center,
  zoom,
  scrollWheelZoom,
  baseLayers,
  zoomControl,
  selectPoint,
  handleSelectPoint,
  handleSelectRecyPoint,
  selectRecyPoint,
  recyPointSelected
}) => {
  const [inputValue, setInputValue] = useState("");
  const [coorOne, setCoorOne] = useState(null);
  const [coorTwo, setCoorTwo] = useState(null);
  const [routeView, setRouteView] = useState(false);
  const { newAddress, geocodeAddress, setNewAddress } = useAddressOnMap();

  const handleAddress = (coorTwo) => {
    geocodeAddress(coorTwo.latlng.lat, coorTwo.latlng.lng);
  };

  const handleRouteView = () => {
    setRouteView(!routeView);
  };

  return (
    <>
      <SearchContainer selectPoint={selectPoint} selectRecyPoint={selectRecyPoint} />
      <Map
        center={center}
        zoom={zoom}
        scrollWheelZoom={scrollWheelZoom}
        baseLayers={baseLayers}
        zoomControl={zoomControl}
        setInputValue={setInputValue}
        coorOne={coorOne}
        coorTwo={coorTwo}
        handleClick={handleAddress}
        setNewAddress={setNewAddress}
        setCoorTwo={setCoorTwo}
        routeView={routeView}
        recyclingPoints={recyclingPoints}
        handleSelectRecyPoint={handleSelectRecyPoint}
        selectPoint={selectPoint}
        selectRecyPoint={selectRecyPoint}
      />
      {!selectPoint && !selectRecyPoint && (
        <div className="w-8 h-8 sm:h-[70px] sm:w-[70px] absolute top-[60px] sm:top-4 right-12 sm:left-12 rounded-full shadow-sm z-[10000]">
          <img src={Logo} alt="Logo" />
        </div>
      )}
      {!selectPoint && !selectRecyPoint && (
        <div className="w-[100%] md:w-auto absolute mb-4 md:left-1/3 bottom-4 z-[1000]">
          <span className="mx-6 top-[-10px] absolute sm:hidden opacity-80">
            <IconBarMovilSvg />
          </span>
          <span className="top-14 relative hidden sm:block">
            <IconBarSvg />
          </span>
          <ItemsBar
            handleSelectPoint={handleSelectPoint}
            perfilurl={usuarioUrl}
            usuario={usuario}
            styleMissing={"mx-6 grid grid-cols-5 h-auto relative items-center justify-center"}
          />
        </div>
      )}
      {selectPoint && !selectRecyPoint && (
        <CreatePointForm
          newAddress={newAddress}
          setNewAddress={setNewAddress}
          handleSelectPoint={handleSelectPoint}
        />
      )}
      {selectRecyPoint && (
        <PointForm
          data={recyclingPoints}
          recyPointSelected={recyPointSelected}
          handleSelectRecyPoint={handleSelectRecyPoint}
          inputValue={inputValue}
          newAddress={newAddress}
          setCoorOne={setCoorOne}
          setCoorTwo={setCoorTwo}
          handleRouteView={handleRouteView}
        />
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

export default MapTemplate;
