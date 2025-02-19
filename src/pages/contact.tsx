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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
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
      email:
        formData.email && /\S+@\S+\.\S+/.test(formData.email)
          ? ''
          : 'Valid email is required.',
      message: formData.message ? '' : 'Message is required.',
    };

    setErrors(newErrors);

    // If no errors, send the form data to the backend
    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      setLoading(true); // Start loading when form is submitted
      try {
        const response = await fetch('/api/submit_form', {
          // Update to use Next.js API route
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
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-6 text-center text-4xl">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400"
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-lg font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-lg font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400"
            rows={4}
          />
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message}</p>
          )}
        </div>

        <div className="text-center">
          {loading ? (
            <div className="spinner-container">
              <span className="spinner"></span> {/* Spinner component */}
            </div>
          ) : (
            <button
              type="submit"
              className="rounded-md bg-primary-500 px-4 py-2 text-white hover:bg-primary-400"
              disabled={loading} // Disable button while loading
            >
              Submit
            </button>
          )}
        </div>
        {status && <p className="mt-4 text-center">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
