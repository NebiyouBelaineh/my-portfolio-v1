'use client';

import React, { useState } from 'react';

const ContactModal: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [successAlert, setSuccessAlert] = useState(false);
    const [failureAlert, setFailureAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false); // state for button disable

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setIsSubmitting(true); // Disable the button

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            setLoading(false);

            if (data.success) {
                setSuccessAlert(true);
                setTimeout(() => setSuccessAlert(false), 3000);
                setTimeout(() => closeModal(), 3000); // Close the modal after 3 seconds
            } else {
                setFailureAlert(true);
                setTimeout(() => setFailureAlert(false), 3000);
                setTimeout(() => closeModal(), 3000); // Close the modal after 3 seconds
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setLoading(false);
            setFailureAlert(true);
            setTimeout(() => setFailureAlert(false), 3000);
            setTimeout(() => closeModal(), 3000); // Close the modal after 3 seconds
        } finally {
            setFormData({ name: '', email: '', message: '' });
            setIsSubmitting(false);
        }
    };

    const openModal = () => {
        const modal: HTMLDialogElement = document.getElementById('my_modal_3') as HTMLDialogElement;
        modal.showModal();
    };

    const closeModal = () => {
        const modal: HTMLDialogElement = document.getElementById('my_modal_3') as HTMLDialogElement;
        modal.close();
    };

    return (
        <>
            <button
                onClick={openModal}
                className="inline-block mb-4 px-8 py-3 bg-accent text-accent-content text-lg font-semibold rounded-md shadow-md hover:scale-105 transition-colors"
            >
                Contact Me
            </button>

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog" className={isSubmitting? "opacity-50 cursor-not-allowed pointer-events-none" : ""} onSubmit={handleSubmit}>
                        <button
                            type="button"
                            id="form-submit-btn"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 rounded-full hover:bg-neutral hover:scale-105"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                        <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                className="textarea textarea-bordered w-full"
                                rows={4}
                            ></textarea>
                        </div>
                        <div className="modal-action">
                            <button 
                                type="submit" 
                                className={`btn btn-primary ${isSubmitting ? 'btn-disabled' : ''}`} // Add disabled class if submitting
                                disabled={isSubmitting} // Disable the button if submitting
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
                <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center mt-4 '>
                    {loading && <span className="loading loading-spinner loading-lg"></span>}
                    {successAlert && (
                        <div role="alert" className="alert alert-success z-10 w-[300px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 shrink-0 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>Your message has been sent successfully!</span>
                        </div>
                    )}
                    {failureAlert && (
                        <div role="alert" className="alert alert-error z-10 w-[300px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 shrink-0 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>Failed to send your message. Please try again.</span>
                        </div>
                    )}
                </div>
            </dialog>
        </>
    );
};

export default ContactModal;
