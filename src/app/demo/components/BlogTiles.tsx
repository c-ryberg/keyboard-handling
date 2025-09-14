"use client";

export const BlogTiles = () => {
  const blogPosts = [
    {
      title: "New Summer Collection",
      excerpt: "Check out our latest arrivals for the summer season.",
    },
    {
      title: "How to Choose the Perfect Gadget",
      excerpt: "A guide to selecting the best electronics for your needs.",
    },
    {
      title: "Home Decor Trends 2023",
      excerpt: "Discover the hottest interior design trends for this year.",
    },
    {
      title: "Sustainable Fashion",
      excerpt: "Learn about eco-friendly clothing options and their impact.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg cursor-pointer"
              onClick={() => (window.location.href = "/demo/link")}
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
