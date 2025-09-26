"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { RiMailSendLine } from "react-icons/ri";
import { TbLockPassword, TbPasswordFingerprint } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

import ForgotPasswordForm from "@/components/ui/ForgetPassword";
import Fade from "embla-carousel-fade";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "forgot">("login");

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  // Carousel state
  const [api, setApi] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = ["/BG.webp", "/BG2.webp", "/BG3.webp"];

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
    <div className="min-h-screen w-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      {/* Left: Image slider */}
      <div className="relative hidden lg:flex flex-col justify-between rounded-4xl shadow-lg overflow-hidden m-4">
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
            {sliderImages.map((src, index) => {
              // Text for each slide
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

              const { title, desc } = slideTexts[index] || slideTexts[0]; // fallback

              return (
                <CarouselItem
                  key={index}
                  className="relative w-full h-[calc(100vh-2rem)]"
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  {/* Text inside image */}
                  <div className="absolute bottom-28 left-12 text-white max-w-lg z-10">
                    <h3 className="text-3xl font-extrabold leading-snug">
                      {title}
                    </h3>
                    <p className="mt-4 text-lg font-medium leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        {/* Pagination dots */}
        <div className="absolute bottom-20 left-12 flex gap-2 z-20">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-3 rounded-full transition ${
                currentSlide === index ? "w-6 bg-white" : "w-3 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right: Login form */}
      {/* RIGHT: Login + Forgot Password */}
      {/* RIGHT: Login + Forget Password */}
      <div className="relative flex flex-col justify-center px-5 sm:px-10 md:px-16 lg:px-20 py-8 sm:py-10 md:py-12">
        <AnimatePresence mode="wait">
          {mode === "login" ? (
            <motion.div
              key="login"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {/* ✅ Your login form code (unchanged) */}
              <div className="mt-[-50px] sm:mt-[-60px] md:mt-[-70px]">
                <Image
                  src="/acplus-logo.png"
                  alt="logo"
                  width={180}
                  height={54}
                  className="w-36 sm:w-44 md:w-48 lg:w-52 h-auto"
                />
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#434343] mb-2 mt-5 sm:mt-6">
                Login to continue
              </h2>
              <p className="text-xs sm:text-sm md:text-base font-medium text-[#6E6F72] mb-5 sm:mb-6">
                Please login with your credentials
              </p>

              <form
                className="space-y-4 sm:space-y-5 max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl w-full"
                onSubmit={handleSubmit}
              >
                {/* Email */}
                <div className="relative bg-white">
                  <RiMailSendLine className="absolute left-3 top-2.5 w-5 sm:w-5.5 h-5 sm:h-5.5 text-gray-500" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (e.target.value.trim() !== "" && errors.email) {
                        setErrors((prev) => ({ ...prev, email: undefined }));
                      }
                    }}
                    placeholder="e.g. johndoe@email.com"
                    className={`h-14 sm:h-16 md:h-20 w-full pl-10 pr-4 pt-5 sm:pt-6 md:pt-7 rounded-md border ${
                      errors.email ? "border-red-500" : "border-[#D9D9D9]"
                    } text-sm sm:text-base md:text-lg text-[#434343] focus:border-[#599400] focus:ring-2 focus:ring-[#599400]`}
                  />
                  <Label
                    htmlFor="email"
                    className="absolute left-10 top-1.5 font-semibold text-md sm:text-md text-[#6E6F72]"
                  >
                    Email Address
                  </Label>
                  {errors.email && (
                    <p className="mt-2 text-red-500 text-xs sm:text-xs">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Password */}

                <div className="relative bg-white">
                  <TbLockPassword className="absolute left-3 top-2.5 w-5 sm:w-5.5 h-5 sm:h-5.5 text-gray-500" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (e.target.value.trim() !== "" && errors.password) {
                        setErrors((prev) => ({ ...prev, password: undefined }));
                      }
                    }}
                    placeholder="Enter your password"
                    className={`h-14 sm:h-16 md:h-20 w-full pl-10 pr-10 pt-5 sm:pt-6 md:pt-7 rounded-md border ${
                      errors.password ? "border-red-500" : "border-[#D9D9D9]"
                    } text-sm sm:text-base md:text-lg text-[#434343] focus:border-[#599400] focus:ring-2 focus:ring-[#599400]`}
                  />
                  <Label
                    htmlFor="password"
                    className="absolute left-10 top-1.5 font-semibold text-md sm:text-md text-[#6E6F72]"
                  >
                    Password
                  </Label>
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 sm:w-5 h-5 sm:h-5 text-[#599400]" />
                    ) : (
                      <Eye className="w-5 sm:w-5 h-5 sm:h-5 text-[#599400]" />
                    )}
                  </button>
                  {errors.password && (
                    <p className="mt-2 text-red-500 text-xs sm:text-xs">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* remember + forget */}
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="remember"
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <Switch
                      id="remember"
                      className="data-[state=checked]:bg-[#599400]"
                    />
                    <span className="text-xs sm:text-sm text-[#6E6F72]">
                      Remember Me
                    </span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setMode("forgot")}
                    className="text-xs sm:text-sm text-[#599400] hover:underline"
                  >
                    Forget Password?
                  </button>
                </div>

                {/* Login button */}
                <Button
                  type="submit"
                  className="w-full h-10 sm:h-12 md:h-14 rounded-md bg-[#599400] hover:bg-[#4d8500] text-white text-sm sm:text-base shadow"
                >
                  Login →
                </Button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="forgot"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <ForgotPasswordForm onBack={() => setMode("login")} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fixed back link (Clinician) */}
        <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 -ml-4 sm:-ml-6">
          <a
            href="#"
            className="text-xs sm:text-sm text-[#599400] hover:underline flex items-center gap-2"
          >
            ← Back to Clinician Login
          </a>
        </div>
      </div>
    </div>
  );
}
