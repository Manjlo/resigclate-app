import MarkerPoint from "../atoms/MarkerPoint.jsx";
import JsonLayers from "../atoms/JsonLayers.jsx";
import LocationMarker from "../atoms/LocationMarker";
import LayerSwitcher from "../molecules/LayerSwitcher";
import MyCustomControl from "../molecules/CustomControl.jsx";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import Routing from "../atoms/Routing.jsx";

function Map({
  zoomControl,
  baseLayers,
  zoom,
  center,
  coorOne,
  coorTwo,
  scrollWheelZoom,
  routeView,
  setCoorTwo,
  handleClick,
  recyclingPoints,
  handleSelectRecyPoint,
  selectPoint,
  setInputValue,
  selectRecyPoint,
  setNewAddress
}) {
  return (
    <MapContainer
      className="sm:rounded-md"
      center={center}
      zoom={zoom}
      scrollWheelZoom={scrollWheelZoom}
      zoomControl={zoomControl}
    >
      {coorOne && coorTwo && routeView && <Routing coorOne={coorOne} coorTwo={coorTwo} />}
      <TileLayer attribution={baseLayers[0].attribution} url={baseLayers[0].url} />
      <JsonLayers
        setCoorTwo={setCoorTwo}
        handleSelectRecyPoint={handleSelectRecyPoint}
        data={recyclingPoints}
        handleClick={handleClick}
      />
      <MyCustomControl className="sm:grid sm:grid-rows-2 gap-2 sm:w-10 w-10 h-10 sm:h-24 bg-white shadow-md rounded-lg relative sm:top-[44px] top-[15vh] flex items-center justify-center right-3.5 sm:right-0">
        <LocationMarker setInputValue={setInputValue} />
        <LayerSwitcher baseLayers={baseLayers} />
      </MyCustomControl>
      {selectPoint && !selectRecyPoint && <MarkerPoint setAddress={setNewAddress} />}
    </MapContainer>
  );
}

export default Map;
