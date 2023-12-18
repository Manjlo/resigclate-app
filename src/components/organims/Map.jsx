import MarkerPoint from "../atoms/MarkerPoint.jsx";
import JsonLayers from "../atoms/JsonLayers.jsx";
import LocationMarker from "../atoms/LocationMarker";
import LayerSwitcher from "../molecules/LayerSwitcher";
import MyCustomControl from "../molecules/CustomControl.jsx";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import Routing from "../atoms/Routing.jsx";
import { ReactComponent as iconoPersonalizado } from "../../assets/svg/MarkerPointSvg.svg";

function Map({
  zoomControl,
  baseLayers,
  zoom,
  center,
  coorTwo,
  scrollWheelZoom,
  routeView,
  setCoorTwo,
  handleClick,
  recyclingPoints,
  handleSelectRecyPoint,
  selectPoint,
  setInputValue,
  setLatLng,
  selectRecyPoint,
  setNewAddress,
  markers,
  latLng
}) {
  return (
    <MapContainer
      className="sm:rounded-md"
      center={center}
      zoom={zoom}
      scrollWheelZoom={scrollWheelZoom}
      zoomControl={zoomControl}>
      {latLng && coorTwo && routeView && <Routing coorOne={latLng} coorTwo={coorTwo} />}
      <TileLayer attribution={baseLayers[0].attribution} url={baseLayers[0].url} />
      <JsonLayers
        setCoorTwo={setCoorTwo}
        handleSelectRecyPoint={handleSelectRecyPoint}
        data={recyclingPoints}
        handleClick={handleClick}
      />
      <MyCustomControl className="sm:grid sm:grid-rows-2 gap-2 sm:w-10 w-10 h-10 sm:h-24 bg-white shadow-md rounded-lg relative sm:top-[44px] top-[15vh] flex items-center justify-center right-3.5 sm:right-0">
        <LocationMarker setInputValue={setInputValue} setLatLng={setLatLng} />
        <LayerSwitcher baseLayers={baseLayers} />
      </MyCustomControl>
      {selectPoint && !selectRecyPoint && <MarkerPoint setAddress={setNewAddress} />}
      {markers.map((marker, i) => (
        <Marker key={i} position={[marker.lat, marker.lng]} icon={iconoPersonalizado} />
      ))}
    </MapContainer>
  );
}

export default Map;
