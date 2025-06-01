'use client';

export default function ContactPage() {
  return (
      <section className="px-6 py-16 max-w-2xl mx-auto text-black dark:text-white">
        <h1 className="text-4xl font-bold mb-4 text-center">Connect With Us</h1>
        <p className="text-center text-gray-800 dark:text-gray-200">
          Have questions, booking inquiries, or want to collaborate?</p>
          <p className="text-center text-gray-800 dark:text-gray-200">Drop us a message — we’d love to hear from you.
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border bg-white dark:bg-[#202124] border-gray-600 rounded-md text-white"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-gray-800 border bg-white dark:bg-[#202124] border-gray-600 rounded-md text-white"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium">Message</label>
            <textarea
              id="message"
              className="w-full px-4 py-2 bg-gray-800 border bg-white dark:bg-[#202124] border-gray-600 rounded-md text-white"
              rows={5}
              placeholder="What can we help you with?"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 text-center text-gray-400 text-sm">
          Or email us directly at <a href="mailto:info@yourcompany.com" className="underline">Specialdeliverytexas@gmail.com</a>
        </div>
      </section>
  );
}