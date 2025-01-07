
import ContactUsImage from "../assets/contact.png";

const ContactUs = () => {
  return (
    <div className="px-4 lg:px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center my-10">
      {/* Left Column: Contact Form */}
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-blue-600 mb-10">Contact Us</h1>
        <p className="text-lg">
          Have questions or need assistance? Our team is here to help. Fill out the form below, and we will get back to you as soon as possible.
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-semibold">Your Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold">Your Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold">Your Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right Column: Contact Image */}
      <div className="hidden md:block">
        <img
          src={ContactUsImage}
          alt="Contact Us"
          className="w-full h-[500px] object-contain rounded-lg shadow-lg mx-auto"
        />
      </div>
    </div>
  );
};

export default ContactUs;
