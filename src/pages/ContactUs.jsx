import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! 🚀 We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />

      <main className="bg-zinc-950 text-white min-h-screen">
        {/* HEADER */}
        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-zinc-400">
            Have questions, ideas, or feedback? We’d love to hear from you.
          </p>
        </section>

        {/* FORM */}
        <section className="max-w-3xl mx-auto px-6 pb-20">
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-6"
          >
            <div>
              <label className="block text-sm mb-2 text-zinc-400">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-700 focus:outline-none focus:border-red-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-zinc-400">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-700 focus:outline-none focus:border-red-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-zinc-400">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-700 focus:outline-none focus:border-red-500"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-red-800 py-3 rounded-lg font-bold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* EXTRA INFO */}
        <section className="border-t border-zinc-900">
          <div className="max-w-4xl mx-auto px-6 py-16 text-center">
            <p className="text-zinc-400">
              📧 Email: support@CodiAI.com  
              <br />
              🌍 Location:Siphal,Kathmandu
              <br />
              Phone: +977-9847289095 <br/>
              ⏱️ Response time: Within 24 hours
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
