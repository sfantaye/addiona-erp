import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Zap, Cpu } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-addiona-maroon-dark text-white"
    >
      {/* Abstract background elements - VERY CREATIVE PART */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-addiona-maroon rounded-full filter blur-2xl animate-pulse-glow animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-700 rounded-full filter blur-3xl animate-float animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 border-4 border-addiona-maroon-light rounded-lg transform rotate-45 animate-spin-slow opacity-50"></div>
        <div className="absolute top-10 right-20 w-32 h-32 border-2 border-gray-500 rounded-full opacity-30 animate-float"></div>
         {/* Pseudo data streams */}
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-addiona-maroon-light/30 animate-ping"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 300 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 5 + 5}s`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `translateY(100vh) rotate(${Math.random() * 10}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center py-24">
        <div data-aos="fade-up">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-addiona)] via-[var(--color-addiona)] to-[var(--color-addiona)]">
            Orchestrate Your Success.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-addiona-gray-300 mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Unify your processes, empower your teams, and unlock exponential growth with our revolutionary ERP solution.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6" data-aos="fade-up" data-aos-delay="400">
          <Button
            size="lg"
            className="bg-addiona-maroon hover:bg-addiona-maroon-dark text-white px-10 py-6 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            className="text-white bg-[var(--color-addiona)] hover:bg-[var(--color-addiona)] hover:text-white px-10 py-6 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Watch Demo
          </Button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="600">
            <div className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl">
                <Zap className="h-10 w-10 text-addiona-maroon mb-3" />
                <h3 className="text-lg font-semibold text-white">Lightning Fast</h3>
                <p className="text-sm text-addiona-gray-300 text-center">Instant insights, rapid deployment.</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl">
                <BarChart3 className="h-10 w-10 text-addiona-maroon mb-3" />
                <h3 className="text-lg font-semibold text-white">Data Driven</h3>
                <p className="text-sm text-addiona-gray-300 text-center">Actionable intelligence at your fingertips.</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl">
                <Cpu className="h-10 w-10 text-addiona-maroon mb-3" />
                <h3 className="text-lg font-semibold text-white">AI Powered</h3>
                <p className="text-sm text-addiona-gray-300 text-center">Automate and optimize with intelligence.</p>
            </div>
        </div>
      </div>
       {/* Subtle scroll down indicator */}
       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 hidden md:block" data-aos="fade-up" data-aos-delay="800">
        <div className="w-6 h-10 border-2 border-addiona-gray-300 rounded-full flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-addiona-gray-300 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

