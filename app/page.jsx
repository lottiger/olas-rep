import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

const Page = () => {
	return (
		<>
			<Nav />

			<main className="px-4 md:px-8 lg:px-16">
				<Hero />
				<Services />
				<ContactSection />
				<Gallery />
				<Footer />
			</main>
		</>
	);
};

export default Page;
