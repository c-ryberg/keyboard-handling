"use client";

import { useState } from "react";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductCategories } from "./components/ProductCategories";
import { BlogTiles } from "./components/BlogTiles";
import { NewsletterForm } from "./components/NewsletterForm";
import { NewsletterSuccessDialog } from "./components/NewsletterSuccessDialog";
import { Footer } from "./components/Footer";
import { SustainabilityPromo } from "./components/SustainabilityPromo";

import "./a11y-issues-demo.css";

/**
 * add:
 * - carousel
 * - make the header stuff show on hover, not click
 * 
 * - Add to the principles that anything that should NOT get focus, doesn't
 */

export default function AccessibilityIssuesDemo() {
  const [isNewsletterDialogOpen, setIsNewsletterDialogOpen] = useState(false);

  const handleOpenNewsletterDialog = () => {
    setIsNewsletterDialogOpen(true);
  };

  const handleCloseNewsletterDialog = () => {
    setIsNewsletterDialogOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NewsletterSuccessDialog
        showDialog={isNewsletterDialogOpen}
        hideDialog={handleCloseNewsletterDialog}
      />
      <Header />
      <main>
        <Hero />
        <ProductCategories />
        <SustainabilityPromo />
        <BlogTiles />
        <NewsletterForm showDialog={handleOpenNewsletterDialog} />
      </main>
      <Footer />
    </div>
  );
}
