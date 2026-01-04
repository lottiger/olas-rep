'use client';
import React, { useState } from 'react';

const ContactForm = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		registrationNumber: '',
		message: '',
	});

	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
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
		if (!formData.registrationNumber.trim()) {
			newErrors.registrationNumber =
				'Registreringsnummer är obligatoriskt';
		}
		if (!formData.message.trim()) {
			newErrors.message = 'Meddelande är obligatoriskt';
		}

		return newErrors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newErrors = validateForm();

		if (Object.keys(newErrors).length === 0) {
			// Här kan du skicka formuläret
			console.log('Formulär skickat:', formData);
			setSubmitted(true);
			setFormData({
				firstName: '',
				lastName: '',
				email: '',
				phone: '',
				registrationNumber: '',
				message: '',
			});
			setTimeout(() => setSubmitted(false), 5000);
		} else {
			setErrors(newErrors);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="max-w-2xl mx-auto p-6 bg-white rounded-lg border border-gray-200"
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
						className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
							errors.firstName
								? 'border-red-500 focus:ring-red-500'
								: 'border-gray-300 focus:ring-blue-500'
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
						className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
							errors.lastName
								? 'border-red-500 focus:ring-red-500'
								: 'border-gray-300 focus:ring-blue-500'
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
						className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
							errors.email
								? 'border-red-500 focus:ring-red-500'
								: 'border-gray-300 focus:ring-blue-500'
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
						className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
							errors.phone
								? 'border-red-500 focus:ring-red-500'
								: 'border-gray-300 focus:ring-blue-500'
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
					className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
						errors.registrationNumber
							? 'border-red-500 focus:ring-red-500'
							: 'border-gray-300 focus:ring-blue-500'
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
					className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 resize-none ${
						errors.message
							? 'border-red-500 focus:ring-red-500'
							: 'border-gray-300 focus:ring-blue-500'
					}`}
				></textarea>
				{errors.message && (
					<span className="text-red-500 text-sm mt-1">
						{errors.message}
					</span>
				)}
			</div>

			<button
				type="submit"
				className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
			>
				Skicka meddelande
			</button>
		</form>
	);
};

export default ContactForm;
