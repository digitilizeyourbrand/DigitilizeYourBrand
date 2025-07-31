import React from 'react';

const Clients = () => {
    const clientLogos = [
        // Add client logo URLs or paths here
        '/assets/client1.png',
        '/assets/client2.png',
        '/assets/client3.png',
        '/assets/client4.png',
    ];

    return (
        <section className="py-10">
            <h2 className="text-2xl font-bold text-center mb-6">Our Clients</h2>
            <div className="flex flex-wrap justify-center">
                {clientLogos.map((logo, index) => (
                    <div key={index} className="m-4">
                        <img src={logo} alt={`Client ${index + 1}`} className="h-16" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Clients;