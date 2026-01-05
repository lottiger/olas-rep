// MobileMenu.jsx
'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const MobileMenu = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button
				className="md:hidden flex justify-center items-center w-10 h-10"
				onClick={() => setOpen((prev) => !prev)}
				aria-label={open ? 'Stäng meny' : 'Öppna meny'}
			>
				{open ? (
					<X className="w-7 h-7" />
				) : (
					<Menu className="w-7 h-7" />
				)}
			</button>

			{open && (
				<nav className="absolute top-full right-0 -mx-4 w-48 bg-white shadow-md md:hidden z-50">
					<ul className="flex flex-col gap-4 p-4">
						<li>
							<a href="#services" onClick={() => setOpen(false)}>
								Tjänster
							</a>
						</li>

						<li>
							<a href="#contact" onClick={() => setOpen(false)}>
								Kontakt
							</a>
						</li>
						<li>
							<a href="#gallery" onClick={() => setOpen(false)}>
								Galleri
							</a>
						</li>
					</ul>
				</nav>
			)}
		</>
	);
};

export default MobileMenu;
