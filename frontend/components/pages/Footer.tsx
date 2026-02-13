// import Link  from "next/link"
// import { Phone, Mail, MapPin } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-primary text-primary-foreground">
//       <div className="container mx-auto px-6 lg:px-12 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {/* Brand */}
//           <div>
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
//                 <span className="text-accent-foreground font-heading font-bold text-lg">L</span>
//               </div>
//               <div>
//                 <span className="font-heading font-bold text-xl">Leaf Advocates</span>
//                 <span className="block text-xs tracking-widest uppercase text-primary-foreground/60">LLC</span>
//               </div>
//             </div>
//             <p className="text-primary-foreground/70 text-sm leading-relaxed">
//               Trusted legal counsel for individuals and businesses. Committed to justice, integrity, and client success.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
//             <ul className="space-y-3">
//               {[
//                 { label: "About Us", href: "/about" },
//                 { label: "Our Team", href: "/team" },
//                 { label: "Practice Areas", href: "/practice-areas" },
//                 { label: "Insights", href: "/insights" },
//                 { label: "FAQs", href: "/faqs" },
//               ].map((link) => (
//                 <li key={link.href}>
//                   <Link href={link.href} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Practice Areas */}
//           <div>
//             <h4 className="font-heading font-semibold text-lg mb-4">Practice Areas</h4>
//             <ul className="space-y-3">
//               {["Corporate Law", "Litigation", "Family Law", "Real Estate", "Criminal Defense"].map((area) => (
//                 <li key={area}>
//                   <Link href="/practice-areas" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
//                     {area}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
//                 <span className="text-sm text-primary-foreground/70">
//                   123 Justice Avenue, Suite 400<br />Nairobi, Kenya
//                 </span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Phone className="w-4 h-4 text-accent shrink-0" />
//                 <a href="tel:+254700000000" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
//                   +254 700 000 000
//                 </a>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Mail className="w-4 h-4 text-accent shrink-0" />
//                 <a href="mailto:info@leafadvocates.com" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
//                   info@leafadvocates.com
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-sm text-primary-foreground/50">
//             © {new Date().getFullYear()} Leaf Advocates LLC. All rights reserved.
//           </p>
//           <div className="flex gap-6">
//             <Link href="/privacy-policy" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
//               Privacy Policy
//             </Link>
//             <Link href="/disclaimer" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
//               Disclaimer
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <div className="bg-white text-primary-foreground">
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-center py-2">
        🎉 Early Access: Sign up now for exclusive features and updates! 🚀
      </div>
    </div>
  );
};

export default Footer;
