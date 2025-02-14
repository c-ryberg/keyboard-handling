import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCategories from "./components/ProductCategories";
import BlogTiles from "./components/BlogTiles";
import NewsletterForm from "./components/NewsletterForm";
import Footer from "./components/Footer";
import SustainabilityPromo from "./components/SustainabilityPromo";

import "./a11y-issues-demo.css";

export default function AccessibilityIssuesDemo() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <ProductCategories />
        <SustainabilityPromo />
        <BlogTiles />
        <NewsletterForm />
      </main>
      <Footer />
    </div>
  );
}
