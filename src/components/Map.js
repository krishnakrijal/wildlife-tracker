import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';

 const Map = ({eventData,centre,zoom}) => {
     const markers = eventData.map(ev =>{
         if(ev.categories[0].id === 8){
             return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}/>
         }
     })
    return (
        <div className='map'>
            <GoogleMapReact
              bootstrapURLKeys={{key:'AIzaSyCE7GSsijg097A-ocK5rit9b7HTUc2p7ls'}}
              defaultCenter={centre}
              defaultZoom={zoom}>
                  {markers}

            </GoogleMapReact>
            
        </div>
    )
}

Map.defaultProps ={
    centre:{
        lat:27.4698,
        lng:153.0251
    },
    zoom: 6
}

export default Map;

