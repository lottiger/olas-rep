'use client';
import React, { useState } from 'react';
import PrivacyPolicyModal from './PrivacyPolicyModal';

const ContactForm = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		registrationNumber: '',
		message: '',
		agreed: false,
	});

	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));
		if (errors[name]) {
			setErrors((prev) => ({ ...prev, [name]: '' }));
		}
	};

	const validateForm = () => {
		const newErrors = {};

		if (!formData.firstName.trim()) {
			newErrors.firstName = 'Förnamn är obligatoriskt';
		}
		if (!formData.lastName.trim()) {
			newErrors.lastName = 'Efternamn är obligatoriskt';
		}
		if (!formData.email.trim()) {
			newErrors.email = 'Email är obligatoriskt';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = 'Ange en giltig email';
		}
		if (!formData.phone.trim()) {
			newErrors.phone = 'Telefonnummer är obligatoriskt';
		}
		if (!formData.message.trim()) {
			newErrors.message = 'Meddelande är obligatoriskt';
		}

		return newErrors;
	};

	const handleSubmit = (e) => {
		const newErrors = validateForm();

		if (Object.keys(newErrors).length > 0) {
			e.preventDefault();
			setErrors(newErrors);
		} else {
			// Visa framgångsmeddelande
			setSubmitted(true);
			// Nollställ formuläret EFTER en kort fördröjning så Formspree hinner läsa värdena
			setTimeout(() => {
				setFormData({
					firstName: '',
					lastName: '',
					email: '',
					phone: '',
					registrationNumber: '',
					message: '',
					agreed: false,
				});
				setTimeout(() => setSubmitted(false), 3000);
			}, 500);
		}
	};

	return (
		<form
			action="https://formspree.io/f/mgovddqz"
			method="POST"
			onSubmit={handleSubmit}
			className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg py-10"
		>
			{submitted && (
				<div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded">
					Tack för ditt meddelande! Vi återkommer snart.
				</div>
			)}

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
				<div>
					<label className="block text-sm font-medium mb-1">
						Förnamn
					</label>
					<input
						type="text"
						name="firstName"
						value={formData.firstName}
						onChange={handleChange}
						className={`w-full px-4 py-2 border bg-white rounded-lg focus:outline-none focus:ring-2 ${
							errors.firstName
								? 'border-red-500 focus:ring-red-500'
								: 'border-none focus:ring-blue-500'
						}`}
					/>
					{errors.firstName && (
						<span className="text-red-500 text-sm mt-1">
							{errors.firstName}
						</span>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium mb-1">
						Efternamn
					</label>
					<input
						type="text"
						name="lastName"
						value={formData.lastName}
						onChange={handleChange}
						className={`w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 ${
							errors.lastName
								? 'border-red-500 focus:ring-red-500'
								: 'border-none focus:ring-blue-500'
						}`}
					/>
					{errors.lastName && (
						<span className="text-red-500 text-sm mt-1">
							{errors.lastName}
						</span>
					)}
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
				<div>
					<label className="block text-sm font-medium mb-1">
						Email
					</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className={`w-full px-4 py-2 border bg-white rounded-lg focus:outline-none focus:ring-2 ${
							errors.email
								? 'border-red-500 focus:ring-red-500'
								: 'border-none focus:ring-blue-500'
						}`}
					/>
					{errors.email && (
						<span className="text-red-500 text-sm mt-1">
							{errors.email}
						</span>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium mb-1">
						Telefonnummer
					</label>
					<input
						type="tel"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						className={`w-full px-4 py-2 border bg-white rounded-lg focus:outline-none focus:ring-2 ${
							errors.phone
								? 'border-red-500 focus:ring-red-500'
								: 'border-none focus:ring-blue-500'
						}`}
					/>
					{errors.phone && (
						<span className="text-red-500 text-sm mt-1">
							{errors.phone}
						</span>
					)}
				</div>
			</div>

			<div className="mb-4">
				<label className="block text-sm font-medium mb-1">
					Registreringsnummer
				</label>
				<input
					type="text"
					name="registrationNumber"
					value={formData.registrationNumber}
					onChange={handleChange}
					className={`w-full px-4 py-2 border bg-white rounded-lg focus:outline-none focus:ring-2 ${
						errors.registrationNumber
							? 'border-red-500 focus:ring-red-500'
							: 'border-none focus:ring-blue-500'
					}`}
				/>
				{errors.registrationNumber && (
					<span className="text-red-500 text-sm mt-1">
						{errors.registrationNumber}
					</span>
				)}
			</div>

			<div className="mb-4">
				<label className="block text-sm font-medium mb-1">
					Meddelande
				</label>
				<textarea
					name="message"
					value={formData.message}
					onChange={handleChange}
					rows="5"
					className={`w-full px-4 py-2 border bg-white rounded-lg focus:outline-none focus:ring-2 resize-none ${
						errors.message
							? 'border-red-500 focus:ring-red-500'
							: 'border-none focus:ring-blue-500'
					}`}
				></textarea>
				{errors.message && (
					<span className="text-red-500 text-sm mt-1">
						{errors.message}
					</span>
				)}
				<label className="flex gap-2 text-sm items-start">
					<input
						type="checkbox"
						name="agreed"
						value="Ja, jag godkänner behandling av personuppgifter"
						checked={formData.agreed}
						onChange={handleChange}
						required
						className="mt-1 w-5 h-5"
					/>
					<span className="mt-1">
						Jag godkänner att mina uppgifter behandlas enligt{' '}
						<PrivacyPolicyModal />
					</span>
				</label>
			</div>

			<button
				type="submit"
				className="w-full inline-block py-2 font-medium bg-purple-300 text-black rounded-lg hover:bg-purple-200 transition"
			>
				Skicka meddelande
			</button>
		</form>
	);
};

export default ContactForm;
