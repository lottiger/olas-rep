'use client';
import React, { useState } from 'react';
import { X } from 'lucide-react';

const PrivacyPolicyModal = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{/* Link to open modal */}
			<button
				type="button"
				onClick={() => setIsOpen(true)}
				className="underline hover:underline cursor-pointer"
			>
				integritetspolicyn.
			</button>

			{/* Modal */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
					onClick={() => setIsOpen(false)}
				>
					<div
						className="bg-white max-w-2xl w-full max-h-[80vh] overflow-y-auto relative"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Close button */}
						<button
							onClick={() => setIsOpen(false)}
							className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded"
							aria-label="Stäng"
						>
							<X className="w-6 h-6" />
						</button>

						{/* Modal content */}
						<div className="p-8">
							<h3 className="text-2xl font-bold mb-6">
								Integritetspolicy
							</h3>
							<div className="space-y-4">
								<p>
									Vi på Olas Rep & Bärgning behandlar
									personuppgifter i enlighet med GDPR.
								</p>

								<p>
									De uppgifter du lämnar via vårt
									kontaktformulär används enbart för att
									besvara din förfrågan eller hantera ett
									uppdrag.
								</p>

								<p>
									Vi delar eller säljer aldrig personuppgifter
									till tredje part. Uppgifter kan sparas om
									det krävs för fakturering eller offerering.
								</p>

								<p>
									Du har rätt att begära utdrag, rättelse
									eller radering av dina uppgifter. Kontakta
									oss på olas.rep@gmail.com.
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default PrivacyPolicyModal;
