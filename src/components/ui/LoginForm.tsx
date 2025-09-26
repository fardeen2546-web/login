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

interface Props {
  onForgot: () => void;
}

export default function LoginForm({ onForgot }: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

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

  useEffect(() => {
    if (email && errors.email) {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
    if (password && errors.password) {
      setErrors((prev) => ({ ...prev, password: undefined }));
    }
  }, [email, password]);

  return (
    <>
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
            onClick={onForgot}
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
    </>
  );
}
