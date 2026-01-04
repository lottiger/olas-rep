import React from 'react';
import { Clock, House, Mail, Phone, Wrench } from 'lucide-react';

const ContactInfo = () => {
	return (
		<div className="">
			<div className="w-full mb-12 text-center md:text-left">
				<p>
					Kontakta oss för mer information och bokning via e-post,
					formuläret nedan eller telefon. Vi löser de flesta problem,
					stort som smått och hjälper gärna till!
				</p>
			</div>

			{/* Höger (50%) */}
			<div className="w-full space-y-2 flex flex-col gap-4 items-center md:items-start">
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
					<p> Email: olas.rep@gmail.com</p>
				</div>

				<div className="flex flex-col items-center md:flex-row md:items-center gap-2 text-center md:text-left">
					<House className="w-6 h-6" />
					<div>
						<p>Adress: Fyrkappen 5, 837 32 Järpen </p>
					</div>
				</div>

				<div className="flex flex-col items-center text-center md:flex-row md:items-center gap-2 mb-10">
					<Clock className="w-6 h-6" />
					<p>
						Öppet vardagar, besökstid efter överenskommelse med
						verkstad.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ContactInfo;
