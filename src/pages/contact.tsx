import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false); // Added loading state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Reset status and errors when the user changes the form
    setStatus('');
    setErrors({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    const newErrors: Errors = {
      name: formData.name ? '' : 'Name is required.',
      email: formData.email && /\S+@\S+\.\S+/.test(formData.email) ? '' : 'Valid email is required.',
      message: formData.message ? '' : 'Message is required.',
    };

    setErrors(newErrors);

    // If no errors, send the form data to the backend
    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      setLoading(true); // Start loading when form is submitted
      try {
        const response = await fetch('/api/submit_form', { // Update to use Next.js API route
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus('Form submitted successfully!');
          setFormData({ name: '', email: '', message: '' }); // Reset form data
        } else {
          setStatus('Error submitting form. Please try again.');
        }
      } catch (error) {
        setStatus('Error submitting form. Please try again.');
      } finally {
        setLoading(false); // Stop loading after request is finished
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl text-center mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none"         
             />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-lg font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none"         
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-lg font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none"         
            rows={4}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        <div className="text-center">
          {loading ? (
            <div className="spinner-container">
              <span className="spinner"></span> {/* Spinner component */}
            </div>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-400"
              disabled={loading} // Disable button while loading
            >
              Submit
            </button>
          )}
        </div>
        {status && <p className="text-center mt-4">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
