import Image from "next/image";
import heroImage from "../../../../public/tobias-rademacher-NuBvAE6VfSM-unsplash.jpg";

export const Hero = () => {
  return (
    <section className="relative h-96">
      <a href="https://www.google.com" className="block w-full h-full">
        <Image
          src={heroImage}
          alt="Hero image"
          className="w-full h-full object-cover"
          width="1024"
          height="384"
        />
      </a>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Welcome to Our Store</h1>
      </div>
    </section>
  );
};
