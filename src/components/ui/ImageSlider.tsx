// "use client";

// import Image from "next/image";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import Fade from "embla-carousel-fade";
// import Autoplay from "embla-carousel-autoplay";

// interface Props {
//   api: any;
//   setApi: (val: any) => void;
//   currentSlide: number;
//   sliderImages: string[];
// }

// export default function ImageSlider({
//   api,
//   setApi,
//   currentSlide,
//   sliderImages,
// }: Props) {
//   const slideTexts = [
//     {
//       title: "Seamless & Secure Access to Your Therapy EMR",
//       desc: "Effortless login with multi-factor authentication, ensuring secure access to patient therapy evaluations anytime.",
//     },
//     {
//       title: "Track Patient Progress Effortlessly",
//       desc: "Visualize therapy sessions and monitor progress with intuitive dashboards designed for clinicians.",
//     },
//     {
//       title: "Collaborate Securely With Your Team",
//       desc: "Share treatment plans and updates instantly with team members while maintaining HIPAA-compliant security.",
//     },
//   ];

//   return (
//     <div className="relative hidden lg:flex flex-col justify-between rounded-4xl shadow-lg overflow-hidden m-4">
//       <Carousel
//         setApi={setApi}
//         plugins={[Autoplay({ delay: 4000, stopOnInteraction: false }), Fade()]}
//         opts={{ loop: true }}
//         className="w-full h-full"
//       >
//         <CarouselContent>
//           {sliderImages.map((src, index) => {
//             const { title, desc } = slideTexts[index] || slideTexts[0];
//             return (
//               <CarouselItem
//                 key={index}
//                 className="relative w-full h-[calc(100vh-2rem)]"
//               >
//                 <Image
//                   src={src || "/placeholder.svg"}
//                   alt={`Slide ${index + 1}`}
//                   fill
//                   className="object-cover"
//                   priority={index === 0}
//                 />
//                 <div className="absolute bottom-28 left-12 text-white max-w-lg z-10">
//                   <h3 className="text-3xl font-extrabold leading-snug">
//                     {title}
//                   </h3>
//                   <p className="mt-4 text-lg font-medium leading-relaxed">
//                     {desc}
//                   </p>
//                 </div>
//               </CarouselItem>
//             );
//           })}
//         </CarouselContent>
//       </Carousel>

//       {/* Pagination dots */}
//       <div className="absolute bottom-20 left-12 flex gap-2 z-20">
//         {sliderImages.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => api?.scrollTo(index)}
//             className={`h-3 rounded-full transition ${
//               currentSlide === index ? "w-6 bg-white" : "w-3 bg-white/50"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  sliderImages: string[];
}

export default function ImageSlider({ sliderImages }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);

  const slideTexts = [
    {
      title: "Seamless & Secure Access to Your Therapy EMR",
      desc: "Effortless login with multi-factor authentication, ensuring secure access to patient therapy evaluations anytime.",
    },
    {
      title: "Track Patient Progress Effortlessly",
      desc: "Visualize therapy sessions and monitor progress with intuitive dashboards designed for clinicians.",
    },
    {
      title: "Collaborate Securely With Your Team",
      desc: "Share treatment plans and updates instantly with team members while maintaining HIPAA-compliant security.",
    },
  ];

  // Auto switch every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentSlide + 1) % sliderImages.length;
      setPrevSlide(currentSlide); // keep old one alive
      setCurrentSlide(next);

      // remove old slide after animation
      setTimeout(() => setPrevSlide(null), 1000);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide, sliderImages.length]);

  return (
    <div className="relative hidden lg:flex flex-col justify-between rounded-4xl shadow-lg overflow-hidden m-4">
      <div className="relative w-full h-[calc(100vh-2rem)]">
        {/* New image (always sharp) */}
        <Image
          key={currentSlide}
          src={sliderImages[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          fill
          priority
          className="object-cover"
        />

        {/* Old image on top, blurring out */}
        {prevSlide !== null && (
          <Image
            key={prevSlide}
            src={sliderImages[prevSlide]}
            alt={`Slide ${prevSlide + 1}`}
            fill
            priority
            className="object-cover animate-blurOut"
          />
        )}
        {/* Overlay text */}
        <div className="absolute bottom-28 left-12 text-white max-w-lg z-30 transition-opacity duration-700 ease-in-out">
          <h3 className="text-3xl font-extrabold leading-snug">
            {slideTexts[currentSlide]?.title}
          </h3>
          <p className="mt-4 text-lg font-medium leading-relaxed">
            {slideTexts[currentSlide]?.desc}
          </p>
        </div>
      </div>
      {/* Pagination dots */}
      <div className="absolute bottom-20 left-12 flex gap-2 z-40">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setPrevSlide(currentSlide);
              setCurrentSlide(index);
              setTimeout(() => setPrevSlide(null), 1000);
            }}
            className={`h-3 rounded-full transition ${
              currentSlide === index ? "w-6 bg-white" : "w-3 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}












