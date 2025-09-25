"use client";

import Image from "next/image";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RiMailSendLine } from "react-icons/ri";

interface ForgetPasswordFormProps {
  onBack: () => void;
}

export default function ForgetPasswordForm({ onBack }: ForgetPasswordFormProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset password requested for:", email);
  };

  return (
    <div className="w-full">
      {/* Logo */}
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
        Reset your password
      </h2>
      <p className="text-xs sm:text-sm md:text-base font-medium text-[#6E6F72] mb-5 sm:mb-6">
        Enter your email address and we’ll send you reset instructions.
      </p>

      {/* Form */}
      <form
        className="space-y-4 sm:space-y-5 max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl w-full"
        onSubmit={handleSubmit}
      >
        {/* Email */}
        <div className="relative bg-white">
          <RiMailSendLine className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
          <Input
            id="reset-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. johndoe@email.com"
            className="h-14 sm:h-16 md:h-20 w-full pl-10 pr-4 pt-5 sm:pt-6 md:pt-7 rounded-md border border-[#D9D9D9] text-sm sm:text-base md:text-lg text-[#434343] focus:border-[#599400] focus:ring-2 focus:ring-[#599400]"
          />
          <Label
            htmlFor="reset-email"
            className="absolute left-10 top-1.5 font-semibold text-md text-[#6E6F72]"
          >
            Email Address
          </Label>
        </div>

        {/* Reset button */}
        <Button
          type="submit"
          className="w-full h-10 sm:h-12 md:h-14 rounded-md bg-[#599400] hover:bg-[#4d8500] text-white text-sm sm:text-base shadow"
        >
          Send Reset Link →
        </Button>
      </form>

      {/* Back to Login */}
      <div className="mt-6">
        <button
          type="button"
          onClick={onBack}
          className="text-xs sm:text-sm text-[#599400] hover:underline"
        >
          ← Back to Login
        </button>
      </div>
    </div>
  );
}
