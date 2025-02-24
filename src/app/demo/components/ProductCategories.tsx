export const ProductCategories = () => {
  const categories = ["Clothing", "Home & Garden", "Electronics"];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Product Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <a
              key={index}
              href="https://www.google.com"
              className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              // style={{ outline: "none" }}
            >
              <h3 className="text-xl font-semibold mb-2">{category}</h3>
              <p className="text-gray-600">
                Explore our {category.toLowerCase()} collection
              </p>
              {category === "Electronics" && (
                <div className="text-right">
                  <a
                    href="https://www.bing.com"
                    tabIndex={-1}
                    className="hover:underline"
                  >
                    Special Conditions
                  </a>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
