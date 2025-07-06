import React, { useState } from 'react';
import { Calendar, Sofa, Flame, Sparkles, Star, ChevronDown, Axe } from 'lucide-react';

// --- Helper Components ---

type ButtonProps = {
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
};

const Button = ({ children, primary = false, className = '' }: ButtonProps) => (
  <button
    className={`px-6 py-3 rounded-lg font-semibold transition duration-300 ease-in-out shadow-md ${
      primary
        ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-orange-600/50'
        : 'bg-gray-700 text-gray-100 hover:bg-gray-600'
    } ${className}`}
  >
    {children}
  </button>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-gray-100 mb-12">
    {children}
  </h2>
);

// --- Sections ---

// 1. Hero Section
const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 overflow-hidden pt-16">
      {/* Simulated Fireplace Background Glow */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
            // Using a gradient to simulate a cozy fire glow instead of an actual image/video
            background: 'radial-gradient(circle at 50% 80%, rgba(251, 146, 60, 0.3) 0%, rgba(20, 20, 20, 0.9) 70%)',
        }}
      />
       <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-lg h-48">
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-orange-500/30 to-transparent animate-pulse"></div>
        <Flame className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-orange-500 w-16 h-16 opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-white leading-tight mb-6">
          A Perfect Fire. Every Time.
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Book a certified LogBuddy to expertly build a beautiful, long-lasting fire in your home's fireplace.
        </p>
        <Button primary className="text-lg px-10 py-4 transform hover:scale-105 transition-transform">
          Book Your Fire
        </Button>
        <p className="mt-4 text-sm text-amber-400">
            LogBuddy: The Warmth You Want. The Work You Don't.
        </p>
      </div>
    </section>
  );
};

// 2. How It Works Section
const HowItWorks = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Schedule Your Spark",
      description: "Choose a date and time that works for you. Select your preferred fire experience.",
    },
    {
      icon: Axe, // Using Axe for a thematic touch (wood chopping/arrival)
      title: "A LogBuddy Arrives",
      description: "Your certified LogBuddy arrives with premium, locally-sourced firewood and all the necessary tools.",
    },
    {
      icon: Sofa,
      title: "Relax and Enjoy",
      description: "We handle everything from setup to a spotless cleanup. All you have to do is enjoy the glow.",
    },
  ];

  return (
    <section className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>How LogBuddy Works</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-gray-700 p-6 rounded-full shadow-lg mb-6 border-2 border-orange-500/50">
                <step.icon className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 3. Pricing Section (Fire Experiences)

type PricingCardProps = {
    title: string;
    price: number;
    duration: string;
    description: string;
    features: string[];
    popular?: boolean;
};

const PricingCard = ({ title, price, duration, description, features, popular = false }: PricingCardProps) => (
  <div className={`rounded-xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 ${popular ? 'bg-gray-700 border-4 border-orange-500' : 'bg-gray-800 border border-gray-600'}`}>
    {popular && (
      <div className="bg-orange-600 text-white text-center py-2 font-semibold">
        Most Popular
      </div>
    )}
    <div className="p-8">
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-4xl font-extrabold text-amber-400 mb-2">${price}</p>
      <p className="text-sm text-gray-400 mb-6">{duration}</p>
      <p className="text-gray-300 mb-8">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center text-gray-300">
            <Sparkles className="w-4 h-4 text-amber-500 mr-3" />
            {feature}
          </li>
        ))}
      </ul>
      <Button primary={popular} className="w-full">Book Now</Button>
    </div>
  </div>
);

const FireExperiences = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Our Fire Experiences</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="The Quick Spark"
            price={75}
            duration="~1 Hour Fire"
            description="Perfect for a quick dose of cozy after a long day."
            features={["Standard Hardwood Mix", "Expert Setup", "Basic Cleanup"]}
          />
          <PricingCard
            title="The Evening Glow"
            price={125}
            duration="~3 Hour Fire"
            description="Ideal for movie nights, dinner parties, or entertaining guests."
            features={["Premium Oak or Birch", "Slow-Burning Technique", "Full Hearth Cleanup"]}
            popular={true}
          />
          <PricingCard
            title="The Hearth Connoisseur"
            price={195}
            duration="4+ Hour Fire"
            description="The ultimate experience for true fire lovers."
            features={["Choice of Aromatic Wood (Apple/Cherry)", "Complimentary S'mores Kit", "Fire Management Lesson", "Immaculate Cleanup"]}
          />
        </div>
      </div>
    </section>
  );
};

// 4. Meet the LogBuddies Section

type LogBuddyProfileProps = {
    name: string;
    title: string;
    bio: string;
    imagePlaceholderColor: string; // Tailwind color class
};

const LogBuddyProfile = ({ name, title, bio, imagePlaceholderColor }: LogBuddyProfileProps) => (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg transition duration-300 hover:shadow-orange-500/30">
      <div className="flex items-center mb-6">
        {/* Placeholder for image - simulating a flannel pattern */}
        <div className="w-20 h-20 rounded-full overflow-hidden mr-6 border-4 border-gray-700">
            <div className={`w-full h-full ${imagePlaceholderColor}`}>
                {/* Simulating flannel texture with repeating gradient */}
                <div className='w-full h-full opacity-70' style={{
                    backgroundImage: `repeating-linear-gradient(45deg, rgba(0,0,0,0.5) 0px, rgba(0,0,0,0.5) 5px, transparent 5px, transparent 10px), repeating-linear-gradient(-45deg, rgba(0,0,0,0.5) 0px, rgba(0,0,0,0.5) 5px, transparent 5px, transparent 10px)`
                }}></div>
            </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-sm text-amber-500 italic">{title}</p>
        </div>
      </div>
      <p className="text-gray-400 italic">"{bio}"</p>
    </div>
  );

const MeetTheBuddies = () => {
  return (
    <section className="py-24 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Meet the LogBuddies</SectionTitle>
        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            We take fire seriously (so you don't have to). Our LogBuddies are certified, insured, and passionate about pyrotechnics (the cozy kind).
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <LogBuddyProfile
            name="Brendan"
            title="The Hearth Whisperer"
            bio="With a degree in 'Applied Thermodynamics' from the University of Life, Brendan specializes in the 'top-down' burn method. He believes every fire tells a story."
            imagePlaceholderColor="bg-red-700"
          />
           <LogBuddyProfile
            name="Chloe"
            title="The Kindling Queen"
            bio="Chloe knows that the secret to a great fire is the foundation. She can get a roaring fire going faster than you can say 'hygge'. Also, she makes amazing s'mores."
            imagePlaceholderColor="bg-blue-700"
          />
           <LogBuddyProfile
            name="Mitch"
            title="The Ash Assassin"
            bio="Mitch's passion isn't just the fire; it's the aftermath. He guarantees your hearth will be cleaner than when he arrived. He once vacuumed a single speck of soot from 50 yards away."
            imagePlaceholderColor="bg-green-700"
          />
        </div>
      </div>
    </section>
  );
};

// 5. Testimonials Section

type TestimonialCardProps = {
    quote: string;
    author: string;
    location: string;
};

const TestimonialCard = ({ quote, author, location }: TestimonialCardProps) => (
    <div className="bg-gray-700 p-8 rounded-lg shadow-md flex flex-col h-full">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400 mr-1" />
        ))}
      </div>
      <p className="text-lg italic text-gray-200 mb-6 flex-grow">"{quote}"</p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-600 rounded-full mr-4 border-2 border-dashed border-gray-500"/>
        <div>
            <p className="font-semibold text-white">{author}</p>
            <p className="text-sm text-gray-400">{location}</p>
        </div>
      </div>
    </div>
  );

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>What Our Clients Are Saying</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="I used to think my fireplace was just a decorative hole in the wall. LogBuddy changed everything. 10/10."
            author="Sarah K."
            location="West Village"
          />
          <TestimonialCard
            quote="The cleanup was immaculate. My hearth has never looked better. Worth every penny for the 'Evening Glow' package."
            author="David L."
            location="The Suburbs"
          />
           <TestimonialCard
            quote="We booked LogBuddy for our anniversary. It was the most romantic evening we've had in years. No smoke, no mess, just pure cozy vibes."
            author="The Millers"
            location="Downtown Loft"
          />
        </div>
      </div>
    </section>
  );
};

// 6. FAQ Section
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        className="flex justify-between items-center w-full py-6 text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white group-hover:text-amber-400 transition-colors">{question}</span>
        <ChevronDown className={`w-5 h-5 text-orange-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-6 pr-10">
          <p className="text-gray-400">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "Is it safe?",
      answer: "Absolutely. All LogBuddies are insured, rigorously trained in fire safety protocols, and certified. We inspect your chimney flue before starting any fire.",
    },
    {
      question: "Do I need to provide anything?",
      answer: "Nope! We bring the premium, seasoned wood, the kindling, the matches, and the magic. You just need a functional fireplace.",
    },
    {
      question: "What about the mess?",
      answer: "We guarantee a no-mess experience. Our LogBuddies use drop cloths and specialized ash vacuums. We leave your hearth cleaner than we found it.",
    },
    {
        question: "What kind of wood do you use?",
        answer: "We only use sustainably sourced, locally harvested hardwoods that have been seasoned for at least 12 months. This ensures a clean, long-lasting burn.",
    },
    {
        question: "Can I request a specific LogBuddy?",
        answer: "You sure can! If you loved your experience with Brendan, Chloe, or Mitch, you can request them in the booking notes. We'll do our best to accommodate.",
    },
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer/CTA
const FooterCTA = () => (
    <section className="bg-gray-800 py-20 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Ready for the Perfect Evening?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
                Stop staring at that cold, empty fireplace. Let LogBuddy bring the warmth.
            </p>
            <Button primary className="text-lg px-10 py-4 transform hover:scale-105 transition-transform">
                Book Your Fire Now
            </Button>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-2xl font-bold text-white mb-4 md:mb-0">
                <Flame className="w-8 h-8 text-orange-500 mr-3" />
                LogBuddy
            </div>
            <p className="text-gray-500 text-sm text-center md:text-left">
                &copy; {new Date().getFullYear()} LogBuddy Inc. The Warmth You Want. The Work You Don't.
            </p>
            <div className='flex space-x-6 mt-4 md:mt-0'>
                <a href="#" className='text-gray-400 hover:text-orange-500 transition'>Privacy</a>
                <a href="#" className='text-gray-400 hover:text-orange-500 transition'>Terms</a>
                <a href="#" className='text-gray-400 hover:text-orange-500 transition'>Become a Buddy</a>
            </div>
        </div>
    </footer>
);


// Main Component
const LogBuddyLandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 font-sans antialiased overflow-x-hidden">
      <header className="absolute top-0 left-0 w-full z-10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div className="flex items-center text-2xl font-bold text-white">
            <Flame className="w-8 h-8 text-orange-500 mr-3" />
            LogBuddy
          </div>
          <div className='flex items-center space-x-6'>
            <a href="#" className='text-gray-300 hover:text-white transition hidden md:block'>Services</a>
            <a href="#" className='text-gray-300 hover:text-white transition hidden md:block'>About</a>
            <Button primary>Book Now</Button>
          </div>
        </nav>
      </header>

      <main>
        <HeroSection />
        <HowItWorks />
        <FireExperiences />
        <MeetTheBuddies />
        <Testimonials />
        <FAQSection />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
};

export default LogBuddyLandingPage;