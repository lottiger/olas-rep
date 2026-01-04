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
							<a href="#verkstad" onClick={() => setOpen(false)}>
								Verkstad
							</a>
						</li>
						<li>
							<a
								href="#markservice"
								onClick={() => setOpen(false)}
							>
								Markservice
							</a>
						</li>
						<li>
							<a href="#hydraulik" onClick={() => setOpen(false)}>
								Hydraulik
							</a>
						</li>
						<li>
							<a href="#smide" onClick={() => setOpen(false)}>
								Smide
							</a>
						</li>
						<li>
							<a href="#kontakt" onClick={() => setOpen(false)}>
								Kontakt
							</a>
						</li>
						<li>
							<a href="#om-oss" onClick={() => setOpen(false)}>
								Om oss
							</a>
						</li>
					</ul>
				</nav>
			)}
		</>
	);
};

export default MobileMenu;
