const Services = () => {
	const services = [
		{
			title: 'Verkstad',
			description:
				'Service, reparationer och underhåll för alla typer av fordon och maskiner.',
			id: 'verkstad',
		},
		{
			title: 'Hydraulik',
			description:
				'Tillverkning av hydraulslang och specialiserad hydraulikservice för fordon och entreprenadmaskiner.',
			id: 'hydraulik',
		},
		{
			title: 'Markservice',
			description:
				'Grävning, lastning, dränering, tomtplanering, enskilda avlopp och landskapsvård samt andra markarbeten med modern maskinpark.',
			id: 'markservice',
		},
		{
			title: 'Smide',
			description:
				'Skräddarsydda smideslösningar för alla behov, från reparationer till specialbyggen.',
			id: 'smide',
		},
	];

	return (
		<section id="services" className="py-12 md:py-32 px-4 md:px-8 lg:px-16">
			<h2 className="text-3xl md:text-6xl font-black mb-8 md:mb-18 text-center">
				Våra tjänster
			</h2>

			<div className="grid grid-cols-1 text-center md:text-left md:grid-cols-2 lg:grid-cols-4 gap-6">
				{services.map((service) => (
					<div
						key={service.id}
						className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"
					>
						<h3 className="text-xl font-bold mb-3">
							{service.title}
						</h3>
						<p className="">{service.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
