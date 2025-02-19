import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface FormData {
  name: string;
  email: string;
  message: string;
  recaptchaToken: string;
}

interface Errors {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<Omit<FormData, 'recaptchaToken'>>({
    name: '',
    email: '',
    message: '',
  });
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setStatus('');
    setErrors({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Errors = {
      name: formData.name ? '' : 'Name is required.',
      email:
        formData.email && /\S+@\S+\.\S+/.test(formData.email)
          ? ''
          : 'Valid email is required.',
      message: formData.message ? '' : 'Message is required.',
    };

    setErrors(newErrors);

    if (!recaptchaToken) {
      setStatus('Please complete the reCAPTCHA verification.');
      return;
    }

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      setLoading(true);
      const requestBody = { ...formData, recaptchaToken };

      try {
        const response = await fetch('/api/submit_form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        });

        if (response.ok) {
          setStatus('Form submitted successfully!');
          setFormData({ name: '', email: '', message: '' });
          setRecaptchaToken(null);
        } else {
          setStatus('Error submitting form. Please try again.');
        }
      } catch (error) {
        setStatus('Error submitting form. Please try again.');
      } finally {
        setLoading(false);
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
          <div className="recaptcha-container">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
              onChange={(token: string | null) => setRecaptchaToken(token)}
            />
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="rounded-md bg-primary-500 px-4 py-2 text-white hover:bg-primary-400"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>

        {status && <p className="mt-4 text-center">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
