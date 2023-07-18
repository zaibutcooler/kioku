import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      className="min-h-screen md:pt-12 lg:pt-14 pb-12 md:pb-0"
      id="projectFeatures">
      <div className="w-full flex justify-center">
        <div className="container w-[800px] px-2">
          <h1 className="lg:text-4xl text-2xl font-black mb-2">Contact Me</h1>
          <p className="text-gray-500 leading-relaxed font-semibold mb-5 text-sm md:text-base">
            Have any questions or feedback? I'd love to hear from you. Reach out
            to me using one of the methods below. I am a software engineer who
            loves making everyone's lives easier. Thanks for exploring!
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
        <div className="flex items-center mb-4">
          <FaEnvelope className="mr-2" />
          <p>Email: contact@example.com</p>
        </div>
        <div className="flex items-center">
          <FaPhoneAlt className="mr-2" />
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2 mt-8">Office Location</h2>
        <p>123 Example Street, City, Country</p>
      </div>
    </section>
  );
};

export default ContactSection;
