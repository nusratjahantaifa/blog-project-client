import { useState, useEffect } from "react";

const slides = [
  {
    title: "Explore Technology",
    desc: "Latest trends in tech world",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Healthy Lifestyle",
    desc: "Tips for better living",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Delicious Food",
    desc: "Taste amazing recipes",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Travel the World",
    desc: "Discover beautiful places",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  // ✅ Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[450px] overflow-hidden rounded-xl">
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-all duration-700 ${
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <img
            src={slide.image}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              {slide.title}
            </h1>
            <p className="mt-2 text-lg">{slide.desc}</p>

            <button className="mt-4 px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">
              Explore Now
            </button>
          </div>
        </div>
      ))}

      {/* Prev Button */}
      <button
        onClick={() =>
          setCurrent((current - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-1 rounded"
      >
        ◀
      </button>

      {/* Next Button */}
      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-1 rounded"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === current ? "bg-white" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;