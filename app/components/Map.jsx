'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const MapContainer = dynamic(
	() => import('react-leaflet').then((mod) => mod.MapContainer),
	{ ssr: false },
);
const TileLayer = dynamic(
	() => import('react-leaflet').then((mod) => mod.TileLayer),
	{ ssr: false },
);
const Marker = dynamic(
	() => import('react-leaflet').then((mod) => mod.Marker),
	{ ssr: false },
);
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), {
	ssr: false,
});

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const markerIcon = new L.Icon({
	iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
	iconRetinaUrl:
		'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
	shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
});

export default function Map({
	lat = 63.35802794008351,
	lng = 13.453903166816493,
	zoom = 13,
	title = 'Här finns vi',
	address = 'Fyrkappen 5, 837 32 Järpen',
}) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted)
		return (
			<div className="w-full h-96 bg-gray-100 rounded-lg border border-gray-200"></div>
		);

	return (
		<div className="w-full h-96 rounded-lg border border-gray-200 overflow-hidden">
			<MapContainer
				center={[lat, lng]}
				zoom={zoom}
				scrollWheelZoom={false}
				style={{ height: '100%', width: '100%' }}
			>
				<TileLayer
					attribution="&copy; OpenStreetMap contributors"
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[lat, lng]} icon={markerIcon}>
					<Popup>
						<div className="text-sm">
							<div className="font-semibold">{title}</div>
							<div>{address}</div>
						</div>
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
}
