import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    state: "",
    ackNumber: "",
    screenshot: null,
    feedback: "",
    phoneNumber: "",
    otp: "",
  });
  const [captchaValue, setCaptchaValue] = useState(null);
  const [errors, setErrors] = useState({});

  const states = ["Delhi", "Maharashtra", "Uttar Pradesh", "Tamil Nadu", "Karnataka"];

  const validateForm = () => {
    let newErrors = {};
    if (!formData.state) newErrors.state = "Please select a state.";
    if (!formData.feedback) newErrors.feedback = "Feedback is required.";
    if (!formData.phoneNumber.match(/^[0-9]{10}$/)) newErrors.phoneNumber = "Enter a valid 10-digit number.";
    if (!formData.otp.match(/^[0-9]{6}$/)) newErrors.otp = "Enter a valid 6-digit OTP.";
    if (!captchaValue) newErrors.captcha = "Please complete the CAPTCHA.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB");
      return;
    }
    setFormData({ ...formData, screenshot: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log("Form Submitted", formData);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:mt-15 md:mt-20">
      {/* Responsive Flexbox Layout */}
      <div className="flex flex-col md:flex-row gap-10 bg-white shadow-md rounded-lg p-6">
        
        {/* Feedback Content */}
        <div className="feedback_content w-full md:w-1/2 text-justify">
          <p>
            Thank You for Visiting ReportNow. We appreciate your participation in strengthening cybersecurity 
            and contributing to a safer digital environment. Your feedback is invaluable in helping us enhance 
            your experience on our platform.
          </p>
          <p className="mt-2">
            If you are facing any issues with registration, login, or any other aspect of the website, please 
            reach out to us through this form. Our team is committed to assisting you and resolving any challenges 
            you may have encountered.
          </p>
          <p className="mt-2">
            Didn't find your suggestions reflected on the platform? Feel free to get in touch with us. We strive 
            to address your concerns at the earliest because your participation matters to us.
          </p>
          <p className="mt-2">
            For more information, visit our{" "}
            <a className="text-blue-600 font-semibold" href="/">FAQs</a> page.
          </p>
        </div>

        {/* Feedback Form */}
        <div className="feedback w-full md:w-1/2">
          <div className="bg-blue-800 text-white font-semibold p-2 text-start">FEEDBACK</div>
          <h2 className="text-xl font-semibold mt-4">Crime Reporting Feedback</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            
            {/* State and Acknowledgement Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">State*</label>
                <select 
                  name="state" 
                  value={formData.state} 
                  onChange={handleChange} 
                  className="w-full p-2 border rounded"
                >
                  <option value="" disabled>Select State</option>
                  {states.map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                  ))}
                </select>
                {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium">Acknowledgement Number (If Any)</label>
                <input 
                  type="text" 
                  name="ackNumber" 
                  value={formData.ackNumber} 
                  onChange={handleChange} 
                  className="w-full p-2 border rounded" 
                  placeholder="Enter reference number" 
                />
              </div>
            </div>

            {/* Screenshot and Feedback */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Upload Error Screenshot (Max: 5MB)</label>
                <input 
                  type="file" 
                  name="screenshot" 
                  accept="image/*" 
                  onChange={handleFileChange} 
                  className="w-full p-2 border rounded" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Feedback*</label>
                <textarea 
                  name="feedback" 
                  value={formData.feedback} 
                  onChange={handleChange} 
                  className="w-full p-2 border rounded" 
                  maxLength={500} 
                  placeholder="Write your feedback here..."
                />
                {errors.feedback && <p className="text-red-500 text-sm">{errors.feedback}</p>}
              </div>
            </div>

            {/* Mobile Number and OTP */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Mobile Number*</label>
                <input 
                  type="tel" 
                  name="phoneNumber" 
                  value={formData.phoneNumber} 
                  onChange={handleChange} 
                  className="w-full p-2 border rounded" 
                  placeholder="Enter mobile number" 
                  pattern="[0-9]{10}" 
                  maxLength={10} 
                  required 
                />
                {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium">OTP Verification*</label>
                <input 
                  type="text" 
                  name="otp" 
                  value={formData.otp} 
                  onChange={handleChange} 
                  className="w-full p-2 border rounded" 
                  placeholder="Enter OTP" 
                  pattern="[0-9]{6}" 
                  maxLength={6} 
                  required 
                />
                {errors.otp && <p className="text-red-500 text-sm">{errors.otp}</p>}
              </div>
            </div>

            {/* Captcha Verification */}
            <div>
              <label className="block text-sm font-medium">Captcha Verification*</label>
              <ReCAPTCHA sitekey="6LcCxMsqAAAAAOywQShX1Qgl0L3ezYQcnmGF6WUN" onChange={setCaptchaValue} />
              {errors.captcha && <p className="text-red-500 text-sm">{errors.captcha}</p>}
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Submit Feedback
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
