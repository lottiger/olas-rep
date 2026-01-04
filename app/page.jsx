import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactSection from './components/ContactSection';

const Page = () => {
	return (
		<>
			<Nav />

			<main className="px-4 md:px-8 lg:px-16">
				<Hero />
				<Services />
				<ContactSection />
			</main>

			<footer />
		</>
	);
};

export default Page;
