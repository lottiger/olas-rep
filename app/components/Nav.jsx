import React from 'react';
import MobileMenu from './MobileMenu';

const Nav = () => {
	return (
		<header className="sticky top-0 z-50 w-full bg-white shadow-md px-4 md:px-8 lg:px-16">
			<div className="relative flex justify-between items-center py-4">
				<a href="#" className="font-black hover:opacity-70 transition">
					Olas Rep
				</a>

				{/* Desktop nav */}
				<nav className="hidden md:block">
					<ul className="flex gap-6">
						<li>
							<a href="#services" className="hover:underline">
								Tjänster
							</a>
						</li>
						<li>
							<a href="#contact" className="hover:underline">
								Kontakt
							</a>
						</li>
						<li>
							<a href="#gallery" className="hover:underline">
								Galleri
							</a>
						</li>
					</ul>
				</nav>

				{/* Mobile menu */}
				<MobileMenu />
			</div>
		</header>
	);
};

export default Nav;
