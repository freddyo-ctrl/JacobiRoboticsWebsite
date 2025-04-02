import React from "react";
import Navbar from "./Navbar";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold leading-tight">
            Have a project in <br />
            <span className="text-4xl font-bold">mind! Book a demo.</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Got a project? Drop me a line if you want to work together on
            something exciting. Or do you need our help? Feel free to contact
            us.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
