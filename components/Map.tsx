import {MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker, Circle} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

const icon = L.icon({iconUrl:"/images/icon-red-small.png",
iconSize: [30,30],

});
const icon1 = L.icon({iconUrl:"/images/blue-icon.png",
iconSize: [30,30],

});

const polyline:[number, number][]= [
    [49.27537, -123.08190],
    [49.26762, -123.06958],
    [49.26291, -123.04505],
    [49.26493, -123.03230],
    [49.27053, -123.01433],
    [49.26986, -123.00049],
    [49.26476, -122.98219],
    [49.26426, -122.96448],
    [49.25467, -122.93918],
    [49.25494, -122.91859],
    [49.25039, -122.89777],
    [49.26252, -122.88991],
    [49.27881, -122.84576],
    [49.27813, -122.82817],
    [49.27465, -122.80008],
    [49.28065, -122.79387],
    [49.29055, -122.79162],
]

const polyline1:[number, number][]= [
    [49.28979, -123.11086],
    [49.28560, -123.11959],
    [49.28340, -123.11627],
    [49.27966, -123.10983],
    [49.27369, -123.10013],
    [49.26352, -123.06952],
    [49.25056, -123.05643],
    [49.24495, -123.04719],
    [49.23903, -123.03282],
    [49.22984, -123.01267],
    [49.22813, -123.00352],
    [49.22200, -122.98806],
    [49.21669, -122.96035],
    [49.20303, -122.95097],
    [49.20441, -122.91280],
    [49.20957, -122.90524],
    [49.20912, -122.87310],
    [49.20834, -122.85435],
    [49.19757, -122.85367],
    [49.19155, -122.84543],
]


{/*
const multiPolyline: [number,number][][]= [
    [
        [49.25299, -123.00800],
        [49.25980, -123.03300],
        [49.25299, -123.07400],
    ],
    [
        [49.25299, -123.00800],
        [49.25555, -123.03300],
        [49.25777, -123.07400], 
    ]
]
*/ }


const fillBlueOptions = {color: 'blue'}
const yellowOptions = {color: 'yellow'}
const blueOptions = {color:'blue'}

const center: [number, number] = [49.25299, -123.00600];

const Map = () => {
return(
<MapContainer
    style={{height:"100vh"}}
    center={[49.22813, -123.00352]} zoom={12} scrollWheelZoom={true}
>
       
    <TileLayer 
        attribution='&copy; <a href="https://github.com/anoncoderin/expo-line-leaflet"> By Madhu</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        
    />
    

   
    {/* Millennium Line */}
    
    <Marker position={[49.27537, -123.08190]} icon={icon} >
        <Popup>VCC Clark</Popup>
    </Marker>

    <Marker position={[49.26762, -123.06958]} icon={icon} >
        <Popup>Commercial-Broadway</Popup>
    </Marker>

    <Marker position={[49.26291, -123.04505]} icon={icon} >
        <Popup>Renfrew </Popup>
    </Marker>

    <Marker position={[49.26493, -123.03230]} icon={icon} >
        <Popup>Rupert</Popup>
    </Marker>

    <Marker position={[49.27053, -123.01433]} icon={icon} >
        <Popup>Gilmore </Popup>
    </Marker>

    <Marker position={[49.26986, -123.00049]} icon={icon} >
        <Popup>Brentwood Town Centre </Popup>
    </Marker>

    <Marker position={[49.26476, -122.98219]} icon={icon} >
        <Popup>Holdom</Popup>
    </Marker>

    <Marker position={[49.26426, -122.96448]} icon={icon} >
        <Popup>Sperling-Burnaby lake</Popup>
    </Marker>

    <Marker position={[49.25467, -122.93918]} icon={icon} >
        <Popup>Lake City Way</Popup>
    </Marker>

    <Marker position={[49.25494, -122.91859]} icon={icon} >
        <Popup>Production Way-University </Popup>
    </Marker>

    <Marker position={[49.25039, -122.89777]} icon={icon} >
        <Popup>Lougheed Town Centre</Popup>
    </Marker>

    <Marker position={[49.26252, -122.88991]} icon={icon} >
        <Popup>Burquitlam</Popup>
    </Marker>

    <Marker position={[49.27881, -122.84576]} icon={icon} >
        <Popup>Moody Centre</Popup>
    </Marker>

    <Marker position={[49.27813, -122.82817]} icon={icon} >
        <Popup>Inlet Centre</Popup>
    </Marker>

    <Marker position={[49.27465, -122.80008]} icon={icon} >
        <Popup>Coquitlam Central</Popup>
    </Marker>

    <Marker position={[49.28065, -122.79387]} icon={icon} >
        <Popup>Lincoln</Popup>
    </Marker>

    <Marker position={[49.29055, -122.79162]} icon={icon} >
        <Popup>Lafarge Lake-Douglas</Popup>
    </Marker>

    {/* Expo Line  */}

    <Marker position={[49.28979, -123.11086]} icon={icon1} >
        <Popup>Waterfront</Popup>
    </Marker>

    <Marker position={[49.28560, -123.11959]} icon={icon1} >
        <Popup>Burrard</Popup>
    </Marker>

    <Marker position={[49.28340, -123.11627]} icon={icon1} >
        <Popup>Granville </Popup>
    </Marker>

    <Marker position={[49.27966, -123.10983]} icon={icon1} >
        <Popup>Statdium-Chinatown</Popup>
    </Marker>

    <Marker position={[49.27369, -123.10013]} icon={icon1} >
        <Popup>Main Street- Science World </Popup>
    </Marker>

    <Marker position={[49.26352, -123.06952]} icon={icon1} >
        <Popup>Commercial Broadway</Popup>
    </Marker>

    <Marker position={[49.25056, -123.05643]} icon={icon1} >
        <Popup>Nanaimo</Popup>
    </Marker>

    <Marker position={[49.24495, -123.04719]} icon={icon1} >
        <Popup>29th Ave</Popup>
    </Marker>

    <Marker position={[49.23903, -123.03282]} icon={icon1} >
        <Popup>Joyce-Collingwood</Popup>
    </Marker>

    <Marker position={[49.22984, -123.01267]} icon={icon1} >
        <Popup>Patterson</Popup>
    </Marker>

    <Marker position={[49.22813, -123.00352]} icon={icon1} >
        <Popup>Metrotown</Popup>
    </Marker>

    <Marker position={[49.22200, -122.98806]} icon={icon1} >
        <Popup>Royal Oak</Popup>
    </Marker>

    <Marker position={[49.21669, -122.96035]} icon={icon1} >
        <Popup>Edmonds</Popup>
    </Marker>

    <Marker position={[49.20303, -122.95097]} icon={icon1} >
        <Popup>22nd Street</Popup>
    </Marker>

    <Marker position={[49.20441, -122.91280]} icon={icon1} >
        <Popup>New Westminister</Popup>
    </Marker>

    <Marker position={[49.20957, -122.90524]} icon={icon1} >
        <Popup>Columbia</Popup>
    </Marker>

    <Marker position={[49.20912, -122.87310]} icon={icon1} >
        <Popup>Scott Road</Popup>
    </Marker>

    <Marker position={[49.20834, -122.85435]} icon={icon1} >
        <Popup>Gateway</Popup>
    </Marker>

    <Marker position={[49.19757, -122.85367]} icon={icon1} >
        <Popup>Surrey Central</Popup>
    </Marker>

    <Marker position={[49.19155, -122.84543]} icon={icon1} >
        <Popup>King George</Popup>
    </Marker>






    <Polyline pathOptions={yellowOptions} positions={polyline} weight={5} />
    <Polyline pathOptions={blueOptions} positions={polyline1} weight={5}/>

    {/*
    <Polyline pathOptions={orangeOptions} positions={multiPolyline}/>
   <Circle center={center} pathOptions={fillBlueOptions} radius={200}/>

    <CircleMarker center={[49.25299, -123.01650]} pathOptions={redOptions} radius={20}>
    <Popup>Popup in CircleMaker</Popup>
</CircleMarker> */}
</MapContainer>

)
}

export default Map;