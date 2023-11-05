import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { LayerSwitcher } from '../molecules/LayerSwitcher';
import { MyCustomControl } from '../organims/CustomControl';

const MapWithLayersControl = ({ center, zoom, scrollWheelZoom, baseLayers }) => {
  return (
    <MapContainer className='sm:rounded-md' center={center} zoom={zoom} scrollWheelZoom={scrollWheelZoom}>
        <TileLayer attribution={baseLayers[0].attribution} url={baseLayers[0].url} />
        <MyCustomControl className='grid grid-rows-3 gap-2 sm:w-10 sm:h-24 bg-white shadow-md rounded-md relative top-[36vh]'>
        </MyCustomControl>
        <LayerSwitcher baseLayers={baseLayers} />
    </MapContainer>
  );
};

export { MapWithLayersControl };
