import Image from 'next/image'; // Assuming you have a conceptual image
import { Check, Users, Target, Brain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white text-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-sm font-semibold text-addiona-maroon tracking-widest uppercase mb-2">About Addiona</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold mb-6">
              Pioneering the <span className="text-addiona-maroon">Future</span> of Enterprise Solutions
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Addiona, we're not just ERP providers; we are architects of business transformation.
              Our mission is to empower organizations with intelligent, integrated, and intuitive solutions
              that drive efficiency, foster innovation, and unlock sustainable growth.
            </p>
            <div className="space-y-5 mb-8">
              <div className="flex items-start" data-aos="fade-up" data-aos-delay="100">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-addiona-maroon/10 text-addiona-maroon flex items-center justify-center mr-4">
                  <Target size={20} />
                </div>
                <div>
                    <h4 className="font-semibold text-xl text-black">Our Vision</h4>
                    <p className="text-gray-600">To be the catalyst for a new era of business agility and operational excellence globally.</p>
                </div>
              </div>
              <div className="flex items-start" data-aos="fade-up" data-aos-delay="200">
                 <div className="flex-shrink-0 h-8 w-8 rounded-full bg-addiona-maroon/10 text-addiona-maroon flex items-center justify-center mr-4">
                  <Brain size={20} />
                </div>
                <div>
                    <h4 className="font-semibold text-xl text-black">Our Approach</h4>
                    <p className="text-gray-600">We combine cutting-edge technology with deep industry expertise and a client-centric focus.</p>
                </div>
              </div>
              <div className="flex items-start" data-aos="fade-up" data-aos-delay="300">
                 <div className="flex-shrink-0 h-8 w-8 rounded-full bg-addiona-maroon/10 text-addiona-maroon flex items-center justify-center mr-4">
                  <Users size={20} />
                </div>
                <div>
                    <h4 className="font-semibold text-xl text-black">Our Team</h4>
                    <p className="text-gray-600">A passionate group of innovators, engineers, and strategists dedicated to your success.</p>
                </div>
              </div>
            </div>
            <a
              href="#contact" // Link to contact or footer
              className="inline-block bg-addiona-maroon text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-addiona-maroon-dark hover:shadow-lg transition-all transform hover:scale-105"
            >
              Learn More About Us
            </a>
          </div>

          <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl" data-aos="fade-left" data-aos-delay="200">
            {/* Creative placeholder - replace with a real, high-quality, abstract or team image */}
            <div className="absolute inset-0 bg-gradient-to-br from-addiona-maroon via-addiona-maroon-dark to-black opacity-80 z-10"></div>
            <div className="absolute inset-0 z-0">
                {/* Placeholder for an Image component if you have one */}
                {/* <Image src="/path/to/your/conceptual-team-image.jpg" alt="Addiona Team Concept" layout="fill" objectFit="cover" /> */}
                 <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <Users className="w-32 h-32 text-gray-500 opacity-50" />
                 </div>
            </div>
            <div className="absolute z-20 bottom-8 left-8 text-white">
                <h4 className="text-3xl font-bold">Innovate. Integrate. Inspire.</h4>
                <p className="text-addiona-gray-300 mt-2">The Addiona Difference.</p>
            </div>
             {/* Abstract geometric shape overlay */}
            <svg className="absolute inset-0 z-10 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,0 100,0 50,100" fill="white" />
              <polygon points="0,100 100,100 100,50" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
