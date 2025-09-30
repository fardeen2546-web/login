// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import ForgotPasswordForm from "@/components/ui/ForgetPassword";
// import LoginForm from "@/components/ui/LoginForm"; 
// import ImageSlider from "@/components/ui/ImageSlider"; 

// export default function LoginPage() {
//   const [mode, setMode] = useState<"login" | "forgot">("login");
//   const [api, setApi] = useState<any>(null);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const sliderImages = ["/BG.webp", "/BG2.webp", "/BG3.webp"];
//   useEffect(() => {
//     if (!api) return;
//     setCurrentSlide(api.selectedScrollSnap());
//     api.on("select", () => setCurrentSlide(api.selectedScrollSnap()));
//   }, [api]);

//   return (
//     <div className="min-h-screen w-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
//       <ImageSlider
//         sliderImages={sliderImages}
//       />
//       {/* Right: Login + Forgot Password */}
//       <div className="relative flex flex-col justify-center px-5 sm:px-10 md:px-16 lg:px-20 py-8 sm:py-10 md:py-12">
//         <AnimatePresence mode="wait">
//           {mode === "login" ? (
//             <motion.div
//               key="login"
//               initial={{ x: 40, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               exit={{ x: -40, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="w-full"
//             >
//               <LoginForm onForgot={() => setMode("forgot")} />
//             </motion.div>
//           ) : (
//             <motion.div
//               key="forgot"
//               initial={{ x: 40, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               exit={{ x: -40, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="w-full"
//             >
//               <ForgotPasswordForm onBack={() => setMode("login")} />
//             </motion.div>
//           )}
//         </AnimatePresence>

//          {/* clinician login  */}
//         <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 -ml-4 sm:-ml-6">
//           <a
//             href="https://acplus.com/"
//             className="text-xs sm:text-sm text-[#599400] hover:underline flex items-center gap-2"
//           >
//             ← Back to Clinician Login
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/login");
}


