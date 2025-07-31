import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    feedback: 'This service changed my life! Highly recommend.',
    position: 'CEO, Company A',
  },
  {
    id: 2,
    name: 'Jane Smith',
    feedback: 'Fantastic experience, very professional team.',
    position: 'Marketing Director, Company B',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    feedback: 'I saw great results in a short time. Will use again!',
    position: 'Founder, Company C',
  },
];

export const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
              <h3 className="mt-4 font-semibold">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;