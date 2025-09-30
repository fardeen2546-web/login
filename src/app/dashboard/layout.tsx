// import "../globals.css";
// import { Montserrat } from "next/font/google";
// import Topbar from "./components/ui/TopBar";
// import Sidebar from "./components/ui/Sidebar";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   variable: "--font-montserrat",
// });

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${montserrat.variable} antialiased`}>
//         <div className="flex h-screen w-screen overflow-hidden">
//           {/* Topbar + Sidebar wrapper */}
//           <div className="flex flex-col flex-1 min-w-0">
//             <Topbar />
//             <div className="flex flex-1 min-h-0">
//               <Sidebar />
//               <main className="flex-1 bg-gray-100 p-3 sm:p-4 md:p-6 overflow-auto min-w-0">
//                 {children}
//               </main>
//             </div>
//           </div>
//         </div>
//       </body>
//     </html>
//   );
// }

import "../globals.css";
import { Montserrat } from "next/font/google";
import Topbar from "./components/ui/TopBar";
import Sidebar from "./components/ui/Sidebar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${montserrat.variable} antialiased flex h-screen w-screen overflow-hidden`}>
      {/* Topbar + Sidebar wrapper */}
      <div className="flex flex-col flex-1 min-w-0">
        <Topbar />
        <div className="flex flex-1 min-h-0">
          <Sidebar />
          <main className="flex-1 bg-gray-100 p-3 sm:p-4 md:p-6 overflow-auto min-w-0">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}


