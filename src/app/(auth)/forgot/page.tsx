"use client";

import { motion } from "framer-motion";
import  ForgotPasswordForm  from "@/components/ui/ForgetPassword";
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function ForgotPage() {
    const router = useRouter();
  return (
    <motion.div
      key="forgot"
      initial={{ x: 40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -40, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <ForgotPasswordForm onBack={() => router.push("/login")}/>
    </motion.div>
  );
}
