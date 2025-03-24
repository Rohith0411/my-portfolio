import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // Prevent page reload

        emailjs.sendForm(
            "service_v9ne1oo",   // Replace with EmailJS Service ID
            "template_aaf1tfy",  // Replace with EmailJS Template ID
            form.current,
            "Xqh5m1WDbTpbMrzFc"    // Replace with your Public Key
        )
        .then((result) => {
            alert("Message sent successfully!"); // Success message
            form.current.reset(); // Reset form fields
        })
        .catch((error) => {
            alert("Failed to send message. Try again!"); // Error message
            console.error(error);
        });
    };

    return (
        <section id="contact" className="flex flex-col items-center bg-secondary text-white py-10 px-5">
            <h1 className="text-2xl font-bold border-b-4 mb-5 inline-block">Contact Me</h1>

            <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg bg-white text-black p-6 rounded-lg shadow-lg">
                {/* Name Field */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Enter your name" 
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        required 
                    />
                </div>

                {/* Email Field */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter your email" 
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        required 
                    />
                </div>

                {/* Message Field */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Message</label>
                    <textarea 
                        rows="4" 
                        name="message" 
                        placeholder="Your message..." 
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                    type="submit" 
                    className="w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-80 transition duration-300"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
}
