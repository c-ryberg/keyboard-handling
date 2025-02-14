const Hero = () => {
  return (
    <section className="relative h-96">
      <a href="https://www.google.com" className="block w-full h-full">
        <img src="/placeholder.svg?height=384&width=1024" alt="Hero image" className="w-full h-full object-cover" />
      </a>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Welcome to Our Store</h1>
      </div>
    </section>
  )
}

export default Hero

