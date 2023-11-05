import { MapWithLayersControl } from "./MapWithLayersControl"
import baseLayers from "../../assets/json/baseLayers.json"
import "leaflet/dist/leaflet.css"


const center = [3.4299852020536488, -76.54119092622952];

function TemplateGeo(){
    return(
        <MapWithLayersControl center={center} zoom={16} scrollWheelZoom={true} baseLayers={baseLayers} />
    )
}

export { TemplateGeo }