import { Card, CardContent } from "@/components/ui/card";
import { Zap } from "lucide-react"; // Or another suitable icon representing Addiona's essence
import { cn } from "@/lib/utils";

interface MottoCardProps {
  /** The company motto. Can be a string or ReactNode for complex formatting like <br/> */
  motto: string | React.ReactNode;
  /** Optional subtitle appearing above the motto */
  subtitle?: string;
  className?: string;
}

const MottoCard: React.FC<MottoCardProps> = ({
  motto,
  subtitle = "Our Guiding Principle", // Default subtitle
  className,
}) => {
  return (
    <div
      className={cn("flex justify-center items-center py-16 md:py-24", className)} // Centering wrapper with padding
      data-aos="zoom-in-up" // Nice entrance animation
      data-aos-duration="1000"
    >
      <Card
        className={cn(
          "relative  rounded-8xlg overflow-hidden", 
          "bg-gradient-to-br from-[var(--color-addiona-900)]/40 via-[var(--color-addiona-500)] to-[var(--color-addiona-900)]/40", // Rich dark background
          "border border-white/10 hover:border-[var(--color-addiona-maroon-light)]/30", // Subtle border, enhances on hover
          "shadow-2xl shadow-black/40 transition-all duration-500", // Deep shadow
          "font-poppins group"
        )}
      >
        {/* Layer 1: Subtle Background Ambience */}
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-soft-light pointer-events-none">
          {/* Soft, large radial glow */}
          <div className="absolute -bottom-1/4 -right-1/4 w-[60%] h-[60%] bg-gradient-radial from-white to-transparent rounded-full filter blur-3xl animate-pulse-slow opacity-60"></div>
           {/* Faint SVG Lines for texture */}
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id='subtleBlur' x='-20%' y='-20%' width='140%' height='140%'>
                    <feGaussianBlur in='SourceGraphic' stdDeviation='1' />
                </filter>
            </defs>
            <line x1="10%" y1="-10%" x2="100%" y2="80%" stroke="var(--color-addiona-maroon)" strokeWidth="0.5" opacity="0.1" filter="url(#subtleBlur)"/>
            <line x1="-10%" y1="50%" x2="110%" y2="60%" stroke="var(--color-addiona-gray-300)" strokeWidth="0.3" opacity="0.05" filter="url(#subtleBlur)"/>
           </svg>
        </div>


        {/* Layer 2: Content */}
        <CardContent className="relative z-10 p-12 md:p-16 lg:p-24 text-center flex flex-col items-center justify-center min-h-[350px] md:min-h-[400px]">

          {/* Optional Icon */}
          <Zap className="w-10 h-10 md:w-12 md:h-12 text-[var(--color-addiona-light)] mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />

          {/* Optional Subtitle */}
          {subtitle && (
             <p className="text-sm md:text-base font-light text-white uppercase tracking-widest mb-4 md:mb-6">
               {subtitle}
             </p>
           )}

          {/* BIG MOTTO TEXT */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight md:leading-snug">
              {/* Apply subtle shadow for depth */}
               <span style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.3)' }}>
                  {motto}
               </span>
          </h2>

        </CardContent>

          {/* Subtle decorative element (e.g., bottom glow line) */}
         <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-addiona-maroon)]/50 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-300 filter blur-[1px]"></div>

      </Card>
    </div>
  );
};

export default MottoCard;

