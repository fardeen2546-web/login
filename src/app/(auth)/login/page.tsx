"use client";

import { motion } from "framer-motion";
import  LoginForm  from "@/components/ui/LoginForm";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
      const router = useRouter();
  return (
    <motion.div
      key="login"
      initial={{ x: 40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -40, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <LoginForm onForgot={() => router.push("/forgot")} />
    </motion.div>
  );
}
