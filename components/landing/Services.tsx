import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Workflow, Layers, DatabaseZap, Users, ShieldCheck, ShoppingCart } from "lucide-react"; // Example icons

const servicesData = [
  {
    icon: <Workflow className="h-12 w-12 text-addiona-maroon group-hover:scale-110 transition-transform" />,
    title: "Process Automation",
    description: "Streamline complex workflows and reduce manual effort across all departments. From P.O. to payment.",
    bgColor: "bg-addiona-maroon/5", // subtle background hint
    borderColor: "border-addiona-maroon/30"
  },
  {
    icon: <Layers className="h-12 w-12 text-addiona-maroon group-hover:scale-110 transition-transform" />,
    title: "Modular Integration",
    description: "Connect disparate systems into a unified platform. Our ERP grows with your business needs.",
    bgColor: "bg-gray-500/5",
    borderColor: "border-gray-500/30"
  },
  {
    icon: <DatabaseZap className="h-12 w-12 text-addiona-maroon group-hover:scale-110 transition-transform" />,
    title: "Real-time Analytics",
    description: "Gain actionable insights with comprehensive dashboards and reporting. Make data-driven decisions.",
    bgColor: "bg-black/5",
    borderColor: "border-black/10"
  },
  {
    icon: <Users className="h-12 w-12 text-addiona-maroon group-hover:scale-110 transition-transform" />,
    title: "CRM & Sales Management",
    description: "Foster customer relationships and manage your sales pipeline effectively, all in one place.",
    bgColor: "bg-addiona-maroon/5",
    borderColor: "border-addiona-maroon/30"
  },
   {
    icon: <ShoppingCart className="h-12 w-12 text-addiona-maroon group-hover:scale-110 transition-transform" />,
    title: "Supply Chain Optimization",
    description: "Manage inventory, procurement, and logistics with precision for maximum efficiency.",
    bgColor: "bg-gray-500/5",
    borderColor: "border-gray-500/30"
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-addiona-maroon group-hover:scale-110 transition-transform" />,
    title: "Security & Compliance",
    description: "Robust security features and compliance tools to protect your data and meet industry standards.",
    bgColor: "bg-black/5",
    borderColor: "border-black/10"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-addiona-light-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-sm font-semibold text-addiona-maroon tracking-widest uppercase">Our Core Services</h2>
          <p className="mt-2 text-4xl lg:text-5xl font-extrabold text-black">
            Transforming Business, One Module at a Time
          </p>
          <div className="mt-4 mx-auto w-24 h-1.5 bg-addiona-maroon rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <Card className={`group h-full flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${service.borderColor} ${service.bgColor} overflow-hidden`}>
                <CardHeader className="items-center text-center p-6">
                   <div className="p-4 bg-white rounded-full shadow-md mb-4 group-hover:bg-addiona-maroon/10 transition-colors">
                     {service.icon}
                   </div>
                  <CardTitle className="text-2xl font-bold text-black group-hover:text-addiona-maroon transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-gray-600 text-center text-md leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
                {/* Creative Accent Line */}
                <div className="h-1 w-0 bg-addiona-maroon group-hover:w-full transition-all duration-500 ease-out mt-auto"></div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
