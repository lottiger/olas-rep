import Image from 'next/image';

const images = [
	{ src: '/images/workshop/ChevySS.jpg', alt: 'Bil i verkstaden' },
	{ src: '/images/workshop/verkstad.jpg', alt: 'Verkstaden' },
	{ src: '/images/welding/svetsning.jpg', alt: 'Svetsning' },
	{ src: '/images/workshop/lastbil.jpg', alt: 'Lastbil' },
	{ src: '/images/workshop/motocrossfyrhjuling.jpg', alt: 'Fyrhjuling' },
];

const Gallery = () => {
	return (
		<section
			id="contact"
			className="space-y-12 max-w-[1480px] mx-auto px-4 py-32 md:px-8 lg:px-16"
		>
			<h2 className="text-3xl md:text-6xl font-black text-center">
				Galleri
			</h2>

			<div className="grid gap-2 md:grid-cols-3 md:h-[520px]">
				{/* Stor bild */}
				<div className="relative overflow-hidden aspect-[16/9] md:aspect-auto md:col-span-2 md:h-full">
					<Image
						src={images[0].src}
						alt={images[0].alt}
						fill
						className="object-cover"
						sizes="(min-width: 768px) 66vw, 100vw"
					/>
				</div>

				{/* Små bilder */}
				<div className="grid grid-cols-2 gap-2 md:h-full">
					{images.slice(1).map((img) => (
						<div
							key={img.src}
							className="relative overflow-hidden aspect-square md:aspect-auto md:h-full"
						>
							<Image
								src={img.src}
								alt={img.alt}
								fill
								className="object-cover"
								sizes="(min-width: 768px) 33vw, 50vw"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Gallery;
