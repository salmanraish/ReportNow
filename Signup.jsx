import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    userType: 'citizen',
    password: '',
    confirmPassword: '',
    governmentId: '', // Add Government ID
    locationConsent: false,
    reportConsent: false,
    terms: false,
    recaptchaValue: '', // Store reCAPTCHA value here
  });

  const [formStatus, setFormStatus] = useState(''); // To track submission status (success, error, loading, passwordMismatch, weakPassword)
  const [formVisible, setFormVisible] = useState(true); // Track form visibility

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleCaptchaChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      recaptchaValue: value, // Set reCAPTCHA response
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if reCAPTCHA is verified
    if (!formData.recaptchaValue) {
      setFormStatus('error'); // Set error status if CAPTCHA is not verified
      return;
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setFormStatus('passwordMismatch');
      return;
    }

    // Check password strength
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      setFormStatus('weakPassword');
      return;
    }

    // Show loading animation before submitting
    setFormStatus('loading');

    // Simulate API call or form submission
    setTimeout(() => {
      setFormStatus('success'); // Simulate successful submission
      setFormVisible(false); // Hide the form after successful submission
    }, 2000); // 2-second delay for the animation to show
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6 mt-20 mb-10">
      {formStatus === 'loading' ? (
        <div className="flex justify-center items-center">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-solid border-indigo-600 border-t-transparent rounded-full" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : formVisible ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number (if applicable)"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              required
              value={formData.dob}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="userType" className="block text-sm font-medium text-gray-700">User Type</label>
            <select
              id="userType"
              name="userType"
              required
              value={formData.userType}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="citizen">Citizen</option>
              <option value="investigator">Investigator</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* New Field: Government ID */}
          <div>
            <label htmlFor="governmentId" className="block text-sm font-medium text-gray-700">Government ID</label>
            <input
              type="text"
              id="governmentId"
              name="governmentId"
              required
              value={formData.governmentId}
              onChange={handleChange}
              placeholder="Enter your Government ID"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter a secure password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Consent Checkboxes */}
          <div>
            <label htmlFor="locationConsent" className="inline-flex items-center">
              <input
                type="checkbox"
                id="locationConsent"
                name="locationConsent"
                checked={formData.locationConsent}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">Yes, I consent to the use of my location data for report context</span>
            </label>
          </div>

          <div>
            <label htmlFor="reportConsent" className="inline-flex items-center">
              <input
                type="checkbox"
                id="reportConsent"
                name="reportConsent"
                required
                checked={formData.reportConsent}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">I agree to the fake report detection process and investigation by authorities</span>
            </label>
          </div>

          <div>
            <label htmlFor="terms" className="inline-flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                required
                checked={formData.terms}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">I agree to the <a href="/terms" className="text-indigo-600">Terms and Conditions</a> and <a href="/privacy-policy" className="text-indigo-600">Privacy Policy</a>.</span>
            </label>
          </div>

          {/* Google reCAPTCHA Widget */}
          <div>
            <ReCAPTCHA
              sitekey="6LcCxMsqAAAAAOywQShX1Qgl0L3ezYQcnmGF6WUN" // Replace with your Google reCAPTCHA site key
              onChange={handleCaptchaChange}
            />
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700">Sign Up</button>
          </div>
        </form>
      ) : null}

      {/* Display status message */}
      {formStatus === 'success' && (
        <div className="mt-4 text-green-600 bg-green-100 p-4 rounded-md shadow-md">
          <p>Sign up successful! Please check your email to verify your account.</p>
        </div>
      )}
      {formStatus === 'error' && (
        <div className="mt-4 text-red-600 bg-red-100 p-4 rounded-md shadow-md">
          <p>Please verify you are not a robot!</p>
        </div>
      )}
      {formStatus === 'passwordMismatch' && (
        <div className="mt-4 text-red-600 bg-red-100 p-4 rounded-md shadow-md">
          <p>Your passwords do not match. Please try again.</p>
        </div>
      )}
      {formStatus === 'weakPassword' && (
        <div className="mt-4 text-red-600 bg-red-100 p-4 rounded-md shadow-md">
          <p>Your password is too weak. It must contain at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character.</p>
        </div>
      )}
    </div>
  );
};

export default SignupForm;
