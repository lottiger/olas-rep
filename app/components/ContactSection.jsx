'use client';
import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), { ssr: false });

const ContactSection = () => {
	return (
		<section
			id="contact"
			className="space-y-12 max-w-[1480px] mx-auto px-4 md:px-8 lg:px-16"
		>
			<h2 className="text-3xl md:text-6xl font-black mb-8 md:mb-18 text-center">
				Kontakta oss
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<ContactInfo />
				<Map />
			</div>
			<div className="bg-gray-100 ">
				<ContactForm />
			</div>
		</section>
	);
};

export default ContactSection;
