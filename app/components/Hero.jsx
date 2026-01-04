import React from 'react';
import ContactButton from './ContactButton';

const Hero = () => {
	return (
		<div
			className="  -mx-4 md:-mx-8 lg:-mx-16 h:[400px] md:h-[650px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
			style={{
				backgroundImage: "url('/images/workshop/broms.jpg')",
			}}
		>
			<div className="bg-black/50 w-full h-full flex items-center justify-center md:items-start md:justify-start p-4 md:px-8 md:pt-38 md:pl-20 ">
				<div className="text-center md:text-left text-white w-[800px]">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">
						Snabb och pålitlig service för alla fordon och maskiner
					</h1>
					<p className="text-lg md:text-xl">
						Serva, reparera och underhåll med oss! Expertis för
						personbilar, lastbilar och entreprenadmaskiner. Vi
						erbjuder även hydraulikservice, påbyggnadtioner,
						smidesarbeten och markarbeten.
					</p>
					<div className="mt-6">
						<ContactButton />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
