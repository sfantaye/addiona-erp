import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Zap } from "lucide-react"; // Zap for logo

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: <Facebook size={24} />, href: "https://facebook.com/addiona", label: "Facebook" },
    { icon: <Twitter size={24} />, href: "https://twitter.com/addiona", label: "Twitter" },
    { icon: <Linkedin size={24} />, href: "https://linkedin.com/company/addiona", label: "LinkedIn" },
    { icon: <Instagram size={24} />, href: "https://instagram.com/addiona", label: "Instagram" },
  ];

  const footerNav = [
    { title: "Company", links: [{name: "About Us", href:"#about"}, {name: "Careers", href:"#"}, {name: "Press", href:"#"}] },
    { title: "Product", links: [{name: "Services", href:"#services"}, {name: "Features", href:"#features"}, {name: "Pricing", href:"#"}] },
    { title: "Resources", links: [{name: "Blog", href:"#"}, {name: "Case Studies", href:"#"}, {name: "Documentation", href:"#"}] },
  ];

  return (
    <footer id="footer" className="bg-black text-addiona-gray-300 py-16">
      <div className="container mx-auto px-4">
        {/* Upper Footer with Logo & Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 items-start">
          <div className="col-span-1 md:col-span-2 lg:col-span-1" data-aos="fade-up">
            <Link href="/" className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-addiona-maroon mr-2" />
                <span className="text-3xl font-bold text-white">Addiona</span>
            </Link>
            <p className="text-sm mb-6">
              Transforming businesses with next-generation ERP solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <a key={social.label} href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer"
                   className="text-addiona-gray-300 hover:text-addiona-maroon transition-colors duration-300 transform hover:scale-110">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerNav.map((section, idx) => (
             <div key={section.title} data-aos="fade-up" data-aos-delay={`${(idx + 1) * 100}`}>
                <h5 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">{section.title}</h5>
                <ul className="space-y-2">
                  {section.links.map(link => (
                    <li key={link.name}>
                      <Link href={link.href} className="hover:text-addiona-maroon transition-colors duration-300">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
             </div>
          ))}
        </div>

        {/* Creative Divider */}
        <div className="relative my-8" data-aos="zoom-in">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-700/50"></div>
            </div>
            <div className="relative flex justify-center">
                <span className="bg-black px-4 text-addiona-maroon">
                    <Zap size={20} />
                </span>
            </div>
        </div>

        {/* Lower Footer - Copyright & Legal */}
        <div className="text-center text-sm pt-8" data-aos="fade-up" data-aos-delay="500">
          <p>© {currentYear} Addiona Inc. All rights reserved. Crafted with passion.</p>
          <div className="mt-2">
            <Link href="/privacy-policy" className="hover:text-addiona-maroon transition-colors px-2">Privacy Policy</Link>
            <span className="text-gray-600">|</span>
            <Link href="/terms-of-service" className="hover:text-addiona-maroon transition-colors px-2">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
