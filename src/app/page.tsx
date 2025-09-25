"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { RiMailSendLine } from "react-icons/ri";
import { TbLockPassword } from "react-icons/tb";
import Fade from "embla-carousel-fade";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  // Carousel state
  const [api, setApi] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = ["/Slider_bg.png", "/Slider_bg2.png", "/Slider_bg3.png"];

  // validate form
  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", { email, password });
    }
  };

  // live validation (error disappears while typing)
  useEffect(() => {
    if (email && errors.email) {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
    if (password && errors.password) {
      setErrors((prev) => ({ ...prev, password: undefined }));
    }
  }, [email, password]);

  // listen for carousel changes
  useEffect(() => {
    if (!api) return;

    setCurrentSlide(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="min-h-screen w-screen bg-gray-100 grid grid-cols-1 md:grid-cols-[1000px_1fr] overflow-hidden">
      {/* Left: Image slider */}
      <div className="relative hidden md:flex flex-col justify-between rounded-4xl shadow-lg overflow-hidden m-4">
        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({ delay: 4000, stopOnInteraction: false }),
            Fade(),
          ]}
          opts={{ loop: true }}
          className="w-full h-full"
        >
          <CarouselContent>
            {sliderImages.map((src, index) => (
              <CarouselItem
                key={index}
                className="relative w-full h-[calc(100vh-2rem)]"
              >
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Text inside image */}
                <div className="absolute bottom-28 left-12 text-white max-w-lg z-10">
                  <h3 className="text-3xl font-extrabold leading-snug">
                    Seamless & Secure Access to Your Therapy EMR
                  </h3>
                  <p className="mt-4 text-lg font-medium leading-relaxed">
                    Effortless login with multi-factor authentication, ensuring
                    secure access to patient therapy evaluations anytime.
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Pagination dots */}
        <div className="absolute bottom-6 left-12 flex gap-2 z-20">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

{/* Right: Login form */}
<div className="relative flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-24 py-10 sm:py-14 md:py-16">
  {/* Logo */}
  <div className="mt-[-60px] sm:mt-[-70px] md:mt-[-80px]">
    <Image
      src="/acplus-logo.png"
      alt="logo"
      width={200}
      height={60}
      className="w-40 sm:w-48 md:w-52 lg:w-56 h-auto"
    />
  </div>

  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#434343] mb-2 mt-6 sm:mt-8">
    Login to continue
  </h2>
  <p className="text-sm sm:text-base md:text-lg font-medium text-[#6E6F72] mb-6 sm:mb-8">
    Please login with your credentials
  </p>

  {/* Form */}
  <form className="space-y-5 sm:space-y-6 max-w-sm sm:max-w-md md:max-w-lg w-full" onSubmit={handleSubmit}>
    {/* Email */}
    <div className="relative bg-white">
      <RiMailSendLine className="absolute left-4 top-3 w-4 sm:w-5 h-4 sm:h-5 text-gray-500" />
      <Input
        id="email"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (errors.email) {
            setErrors((prev) => ({ ...prev, email: undefined }));
          }
        }}
        placeholder="e.g. johndoe@email.com"
        className={`h-16 sm:h-20 md:h-24 w-full pl-12 pr-4 pt-6 sm:pt-7 md:pt-8 rounded-md border ${
          errors.email ? "border-red-500" : "border-[#D9D9D9]"
        } text-sm sm:text-base md:text-lg text-[#434343] focus:border-[#599400] focus:ring-2 focus:ring-[#599400]`}
      />
      <Label
        htmlFor="email"
        className="absolute left-12 top-2 font-semibold text-xs sm:text-sm text-[#6E6F72]"
      >
        Email Address
      </Label>
    </div>

    {/* Password */}
    <div className="relative bg-white">
      <TbLockPassword className="absolute left-4 top-3 w-4 sm:w-5 h-4 sm:h-5 text-gray-500" />
      <Input
        id="password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          if (errors.password) {
            setErrors((prev) => ({ ...prev, password: undefined }));
          }
        }}
        placeholder="Enter your password"
        className={`h-16 sm:h-20 md:h-24 w-full pl-12 pr-12 pt-6 sm:pt-7 md:pt-8 rounded-md border ${
          errors.password ? "border-red-500" : "border-[#D9D9D9]"
        } text-sm sm:text-base md:text-lg text-[#434343] focus:border-[#599400] focus:ring-2 focus:ring-[#599400]`}
      />
      <Label
        htmlFor="password"
        className="absolute left-12 top-2 font-semibold text-xs sm:text-sm text-[#6E6F72]"
      >
        Password
      </Label>
      <button
        type="button"
        onClick={() => setShowPassword((s) => !s)}
        className="absolute right-4 top-1/2 -translate-y-1/2"
      >
        {showPassword ? (
          <EyeOff className="w-5 sm:w-6 h-5 sm:h-6 text-[#599400]" />
        ) : (
          <Eye className="w-5 sm:w-6 h-5 sm:h-6 text-[#599400]" />
        )}
      </button>
    </div>

    {/* remember + forget */}
    <div className="flex items-center justify-between">
      <label
        htmlFor="remember"
        className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
      >
        <Switch
          id="remember"
          className="data-[state=checked]:bg-[#599400]"
        />
        <span className="text-xs sm:text-sm md:text-base text-[#6E6F72]">
          Remember Me
        </span>
      </label>
      <a href="#" className="text-xs sm:text-sm md:text-base text-[#599400] hover:underline">
        Forget Password?
      </a>
    </div>

    {/* Login button */}
    <Button
      type="submit"
      className="w-full h-12 sm:h-14 md:h-16 rounded-md bg-[#599400] hover:bg-[#4d8500] text-white text-sm sm:text-base md:text-lg shadow"
    >
      Login →
    </Button>
  </form>

  {/* Fixed back link */}
  <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 -ml-4 sm:-ml-6">
    <a
      href="#"
      className="text-xs sm:text-sm md:text-base text-[#599400] hover:underline flex items-center gap-2"
    >
      ← Back to Clinician Login
    </a>
  </div>
</div>


    </div>
  );
}











