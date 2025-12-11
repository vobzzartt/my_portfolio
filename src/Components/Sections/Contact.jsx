import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      access_key: "ade634b9-94a8-4d55-ba0f-2f99c383a040",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setModalOpen(true);
        setFormData({ name: "", email: "", message: "" });
      } 
    } catch (error) {
      alert("Something went wrong. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-full overflow-x-hidden flex flex-col justify-center items-center px-4" id="contact">
      {/* Heading */}
      <div className="mb-0 flex items-center text-center justify-center">
        <div className="flex items-center justify-center mr-4 mb-3">
          <span className="blinking-circle absolute w-1 h-1"></span>
          <span className="blinking-circle absolute w-2 h-2"></span>
          <span className="blinking-circle absolute w-3 h-3"></span>
        </div>
        <h2 className="text-start md:text-center text-2xl font-bold mb-12 mt-8">
          Wanna Build a Project?
        </h2>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-start mb-6">Reach Out To Me</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-500">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-[#DFC6C5] rounded-lg 
              focus:ring-[#613B26] focus:border-[#613B26] outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-[#DFC6C5] rounded-lg 
              focus:ring-[#613B26] focus:border-[#613B26] outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 w-full p-2 text-sm border border-[#DFC6C5] rounded-lg 
              focus:ring-[#613B26] focus:border-[#613B26] outline-none h-28"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-start">
            <button
              type="submit"
              className="bg-[#613B26] text-white font-normal text-md px-4 py-2 rounded-lg 
              hover:bg-transparent hover:text-[#613B26] hover:border hover:border-[#BB8E5A] transition flex items-center"
              disabled={loading}
            >
              {loading ? (
                <span className="loader border-2 border-t-transparent border-white rounded-full w-4 h-4 mr-2"></span>
              ) : null}
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>

      {/* SUCCESS POPUP MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4 z-50">
          <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-sm animate-fadeIn">
            {/* Success Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-pop">
                <span className="text-white text-4xl">✓</span>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-center mb-2">Message Sent!</h2>
            <p className="text-center text-gray-600 mb-6">
              Your message was delivered successfully. I’ll get back to you shortly.
            </p>

            <button
              onClick={() => setModalOpen(false)}
              className="w-full bg-[#613B26] text-white py-2 rounded-lg 
              hover:bg-transparent hover:text-[#613B26] hover:border hover:border-[#613B26] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes pop {
            0% { transform: scale(0.5); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-pop {
            animation: pop 0.3s ease-out forwards;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.4s ease-out;
          }

          .loader {
            border-top-color: transparent;
            animation: spin 0.8s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}