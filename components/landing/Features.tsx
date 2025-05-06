import { CheckCircle, SlidersHorizontal, BarChartBig, Cpu, UsersRound, ShieldAlert, Lightbulb } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const featuresList = [
  {
    icon: <SlidersHorizontal className="w-10 h-10 text-addiona-maroon" />,
    title: "Unparalleled Customization",
    description: "Tailor Addiona ERP to your exact business workflows, not the other way around. True flexibility for unique needs.",
    aos: "fade-right",
  },
  {
    icon: <BarChartBig className="w-10 h-10 text-addiona-maroon" />,
    title: "Predictive Analytics & BI",
    description: "Leverage AI-driven insights to forecast trends, optimize resources, and make proactive decisions.",
    aos: "fade-left",
  },
  {
    icon: <Cpu className="w-10 h-10 text-addiona-maroon" />,
    title: "Scalable Cloud Architecture",
    description: "Built on a robust cloud infrastructure that scales effortlessly with your company's growth.",
    aos: "fade-right",
  },
  {
    icon: <UsersRound className="w-10 h-10 text-addiona-maroon" />,
    title: "Collaborative Workspaces",
    description: "Enhance team productivity with shared data, streamlined communication, and project tracking.",
    aos: "fade-left",
  },
  {
    icon: <ShieldAlert className="w-10 h-10 text-addiona-maroon" />,
    title: "Enterprise-Grade Security",
    description: "Multi-layered security protocols, regular audits, and data encryption to keep your assets safe.",
    aos: "fade-right",
  },
   {
    icon: <Lightbulb className="w-10 h-10 text-addiona-maroon" />,
    title: "Intuitive User Experience",
    description: "A clean, modern interface designed for ease of use, reducing training time and boosting adoption.",
    aos: "fade-left",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="zoom-in-down">
          <h2 className="text-sm font-semibold text-addiona-maroon tracking-widest uppercase">Why Choose Addiona?</h2>
          <p className="mt-2 text-4xl lg:text-5xl font-extrabold">
            Features That <span className="text-addiona-maroon-light">Empower</span> Your Enterprise
          </p>
           <div className="mt-4 mx-auto w-24 h-1.5 bg-addiona-maroon rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {featuresList.map((feature, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row items-start md:items-center py-8 md:space-x-8 group" data-aos={feature.aos}>
                <div className="flex-shrink-0 mb-6 md:mb-0 p-4 bg-addiona-maroon/10 rounded-full border-2 border-addiona-maroon group-hover:border-addiona-maroon-light transition-all">
                  {feature.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-addiona-maroon-light transition-colors">{feature.title}</h3>
                  <p className="text-addiona-gray-300 text-lg leading-relaxed">{feature.description}</p>
                </div>
              </div>
              {index < featuresList.length - 1 && <Separator className="my-6 bg-gray-700 group-hover:bg-addiona-maroon/50 transition-colors" />}
            </div>
          ))}
        </div>

        {/* Creative Touch: Connecting dots / circuit lines - pseudo element */}
        <div className="relative mt-16 h-20 max-w-xl mx-auto hidden md:block" data-aos="zoom-in">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-addiona-maroon to-transparent"></div>
            <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-addiona-maroon rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-addiona-maroon-light rounded-full animate-pulse animation-delay-500"></div>
            <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-addiona-maroon rounded-full animate-pulse animation-delay-1000"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;

// Add to tailwind.config.js
// animationDelay: {
//   '500': '500ms',
//   '1000': '1000ms',
//   '2000': '2000ms', // Hero
//   '4000': '4000ms', // Hero
// },
