"use client";

import { useState } from "react";

import { Hero } from "./components/Hero";
import { ProductCategories } from "./components/ProductCategories";
import { BlogTiles } from "./components/BlogTiles";
import { NewsletterForm } from "./components/NewsletterForm";
import { NewsletterSuccessDialog } from "./components/NewsletterSuccessDialog";
import { Footer } from "./components/Footer";
import { SustainabilityPromo } from "./components/SustainabilityPromo";

/**
 * todo: add
 * - carousel
 * - buttons with no feedback when you click them
 * - items with incorrect tab order
 * - update the colors. They get washed out atm
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
