import { Clock, House, Mail, Phone, Wrench } from 'lucide-react';
import React from 'react';

const Page = () => {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center px-4 mt-10">
			<div className="w-full max-w-4xl mx-auto text-center">
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
					Olas rep & service
				</h1>

				<p className="mt-4 text-lg sm:text-xl md:text-2xl w-full max-w-3xl mx-auto font-serif">
					Ett litet familjeföretag med stort engagemang och
					erfarenhet. Vi erbjuder tjänster inom reparation, hydraulik,
					smide och entreprenad.
				</p>

				<div className="bg-gray-400 h-0.5 w-full my-10" />

				<div className="flex flex-col md:flex-row w-full max-w-2xl mx-auto justify-center font-serif gap-6 md:gap-10">
					{/* Vänster (50%) */}
					<div className="w-full md:w-1/2 md:mr-10 text-center md:text-left">
						<p>
							Kontakta oss för mer information och bokning via
							e-post eller telefon. Vi löser de flesta problem,
							stort som smått och hjälper gärna till!
						</p>
					</div>

					{/* Höger (50%) */}
					<div className="w-full md:w-1/2 flex flex-col gap-4 items-center md:items-start">
						<div className="flex flex-col items-center md:flex-row md:items-center gap-2">
							<Wrench className="w-6 h-6" />
							<p> Verkstad: 070-220 18 53</p>
						</div>
						<div className="flex flex-col items-center md:flex-row md:items-center gap-2">
							<Phone className="w-6 h-6" />
							<p> Markservice: 070-322 97 10</p>
						</div>

						<div className="flex flex-col items-center md:flex-row md:items-center gap-2">
							<Mail className="w-6 h-6" />
							<p> Epost: olas.rep@gmail.com</p>
						</div>

						<div className="flex flex-col items-center md:flex-row md:items-center gap-2 text-center md:text-left">
							<House className="w-6 h-6" />
							<div>
								<p>Fyrkappen 5</p>
								<p>837 32 Järpen</p>
							</div>
						</div>

						<div className="flex flex-col items-center md:flex-row md:items-center gap-2 mb-10">
							<Clock className="w-6 h-6" />
							<p>Måndag - Fredag: 08:00 - 17:00</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
