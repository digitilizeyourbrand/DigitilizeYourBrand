import React from 'react';

export const Blog = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Blog</h1>
            <p className="mb-4">Welcome to our blog! Here you will find the latest updates, articles, and insights.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Example Blog Post */}
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-xl font-semibold">Blog Post Title</h2>
                    <p className="text-gray-700">A brief description of the blog post goes here. This is a summary of the content.</p>
                    <a href="#" className="text-blue-500 hover:underline">Read more</a>
                </div>
                {/* Repeat for more blog posts */}
            </div>
        </div>
    );
};

export default Blog;