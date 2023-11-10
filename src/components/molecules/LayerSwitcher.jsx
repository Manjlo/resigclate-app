import React from 'react';
import { LayersControl, TileLayer } from 'react-leaflet';

const LayerSwitcher = ({ baseLayers }) => {
  return (
    <div className=' relative'>
      <LayersControl>
        {baseLayers.map((layer, i) => (
          <LayersControl.BaseLayer key={i} name={layer.alias}>
            <TileLayer attribution={layer.attribution} url={layer.url} />
          </LayersControl.BaseLayer>
        ))}
      </LayersControl>
    </div>
  );
};

export { LayerSwitcher };

