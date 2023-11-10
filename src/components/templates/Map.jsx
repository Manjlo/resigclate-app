import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { LayerSwitcher } from '../molecules/LayerSwitcher';
import { MyCustomControl } from '../organims/CustomControl';
import { SearchItem } from '../molecules/SearchItem';
import { ReactComponent as UserSvg } from '../../assets/svg/searchsvg.svg'
import Logo from '../../assets/icons/logo.png'
import { LocationMarker } from '../atoms/LocationMarker';

const Map = ({ center, zoom, scrollWheelZoom, baseLayers, zoomControl }) => {
  return (
    <MapContainer className='sm:rounded-md' center={center} zoom={zoom} scrollWheelZoom={scrollWheelZoom} zoomControl={zoomControl}>
      <TileLayer attribution={baseLayers[0].attribution} url={baseLayers[0].url} />
      <MyCustomControl className='grid grid-rows-2 gap-2 sm:w-10 sm:h-24 bg-white shadow-md rounded-md relative top-[36vh]'>
        <LayerSwitcher baseLayers={baseLayers} />
        <LocationMarker />
      </MyCustomControl>
      <MyCustomControl className={' w-[300px] lg:w-[400px] h-auto bg-white relative top-[-14vh] right-[33vw] rounded-md shadow-lg text-md'}>
        <SearchItem type={'search'} text={'Buscar centros de reciclaje'} SvgComponent={UserSvg} />
      </MyCustomControl>
      <MyCustomControl className={'h-[70px] w-[70px] top-[-24vh] right-[88vw] relative rounded-full'}>
        <img src={Logo} alt="Logo" />
      </MyCustomControl>
    </MapContainer>
  );
};

export { Map };
