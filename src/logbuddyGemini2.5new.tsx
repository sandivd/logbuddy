import { useState, type FC, type ReactNode } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Calendar, UserCheck, GlassWater, Flame, ChevronDown, X } from 'lucide-react';

// Color Palette:
// Background: bg-stone-50
// Main Text: text-stone-800
// Muted Text: text-stone-600
// Accent/CTA: bg-orange-600, hover:bg-orange-700
// Card Background: bg-white
// Borders: border-stone-200

// Helper Components for structure and clarity

interface SectionProps {
  children: ReactNode;
  className?: string;
}

const Section: FC<SectionProps> = ({ children, className = '' }) => (
  <section className={`w-full py-16 md:py-24 px-4 md:px-8 ${className}`}>
    <div className="max-w-6xl mx-auto">{children}</div>
  </section>
);

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 ${className}`}>
    {children}
  </div>
);

// Main Page Sections

const HeroSection = ({ onBookNowClick }: { onBookNowClick: () => void }) => (
  <div className="relative text-white bg-stone-900">
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 z-10"></div>
    <div 
      className="absolute inset-0 bg-cover bg-center opacity-40"
      style={{backgroundImage: "url('https://images.unsplash.com/photo-1571508601933-0939b9539a49?q=80&w=2070&auto=format&fit=crop')"}}
    ></div>
    <div className="relative z-20 max-w-6xl mx-auto flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg">A Perfect Fire. Every Time.</h1>
      <p className="mt-6 max-w-2xl text-lg md:text-xl text-stone-200 drop-shadow-md">
        Book a certified LogBuddy to expertly build a beautiful, long-lasting fire in your home's fireplace.
      </p>
      <button 
        onClick={onBookNowClick}
        className="mt-10 px-8 py-4 bg-orange-600 text-white font-bold text-lg rounded-full shadow-xl hover:bg-orange-700 transition-all duration-300 transform hover:scale-110"
      >
        Book Your Fire
      </button>
      <p className="mt-4 text-sm text-stone-400">LogBuddy: The Warmth You Want. The Work You Don't.</p>
    </div>
  </div>
);

const HowItWorksSection = () => (
  <Section className="bg-stone-50">
    <div className="text-center">
      <h2 className="text-4xl font-bold text-stone-800">How It Works</h2>
      <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">It's never been easier to enjoy the comfort of a real fire.</p>
    </div>
    <div className="mt-16 grid md:grid-cols-3 gap-12 text-center">
      <div className="flex flex-col items-center">
        <div className="bg-orange-100 text-orange-600 rounded-full p-6 mb-6">
          <Calendar size={40} />
        </div>
        <h3 className="text-2xl font-semibold text-stone-800">1. Schedule Your Spark</h3>
        <p className="mt-2 text-stone-600">Choose a date and time that works for you. Select your preferred fire experience.</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-orange-100 text-orange-600 rounded-full p-6 mb-6">
          <UserCheck size={40} />
        </div>
        <h3 className="text-2xl font-semibold text-stone-800">2. A LogBuddy Arrives</h3>
        <p className="mt-2 text-stone-600">Your certified LogBuddy arrives with premium, locally-sourced firewood and all the necessary tools.</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-orange-100 text-orange-600 rounded-full p-6 mb-6">
          <GlassWater size={40} />
        </div>
        <h3 className="text-2xl font-semibold text-stone-800">3. Relax and Enjoy</h3>
        <p className="mt-2 text-stone-600">We handle everything from setup to a spotless cleanup. All you have to do is enjoy the glow.</p>
      </div>
    </div>
  </Section>
);

const ExperiencesSection = ({ onBookNowClick }: { onBookNowClick: () => void }) => (
  <Section className="bg-white">
    <div className="text-center">
      <h2 className="text-4xl font-bold text-stone-800">Our Fire Experiences</h2>
      <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">We're not just selling fire; we're selling an experience. Choose the one that's right for you.</p>
    </div>
    <div className="mt-16 grid md:grid-cols-3 gap-8">
      <Card>
        <div className="p-8">
          <h3 className="text-2xl font-bold text-stone-800">The Quick Spark</h3>
          <p className="text-4xl font-extrabold text-orange-600 my-4">$75</p>
          <p className="text-stone-600 h-24">A classic one-hour fire. Perfect for a quick dose of cozy. Includes standard hardwood.</p>
          <button onClick={onBookNowClick} className="mt-6 w-full py-3 bg-stone-800 text-white font-semibold rounded-lg hover:bg-stone-900 transition-colors">Select Spark</button>
        </div>
      </Card>
      <Card className="border-4 border-orange-500 relative scale-105">
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">MOST POPULAR</div>
        <div className="p-8">
          <h3 className="text-2xl font-bold text-stone-800">The Evening Glow</h3>
          <p className="text-4xl font-extrabold text-orange-600 my-4">$125</p>
          <p className="text-stone-600 h-24">A 3-hour, slow-burning fire. Ideal for movie nights or entertaining guests. Includes premium oak or birch.</p>
          <button onClick={onBookNowClick} className="mt-6 w-full py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors">Select Glow</button>
        </div>
      </Card>
      <Card>
        <div className="p-8">
          <h3 className="text-2xl font-bold text-stone-800">The Hearth Connoisseur</h3>
          <p className="text-4xl font-extrabold text-orange-600 my-4">$195</p>
          <p className="text-stone-600 h-24">The ultimate experience. A 4+ hour fire with your choice of aromatic wood, complimentary s'mores kit, and a lesson in fire management.</p>
          <button onClick={onBookNowClick} className="mt-6 w-full py-3 bg-stone-800 text-white font-semibold rounded-lg hover:bg-stone-900 transition-colors">Select Connoisseur</button>
        </div>
      </Card>
    </div>
  </Section>
);

const LogBuddiesSection = () => (
  <Section className="bg-stone-50">
    <div className="text-center">
      <h2 className="text-4xl font-bold text-stone-800">Meet the LogBuddies</h2>
      <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">Our certified professionals are passionate about the perfect flame.</p>
    </div>
    <div className="mt-16 grid md:grid-cols-3 gap-8">
      <div className="text-center flex flex-col items-center">
        <div className="bg-stone-200 border-2 border-dashed rounded-full w-32 h-32 mb-4" />
        <h3 className="text-xl font-bold text-stone-800">Brendan, the Hearth Whisperer</h3>
        <p className="mt-2 text-stone-600">With a degree in 'Applied Thermodynamics' from the University of Life, Brendan believes that every fire tells a story. He specializes in the 'top-down' burn method.</p>
      </div>
      <div className="text-center flex flex-col items-center">
        <div className="bg-stone-200 border-2 border-dashed rounded-full w-32 h-32 mb-4" />
        <h3 className="text-xl font-bold text-stone-800">Chloe, the Flame Artist</h3>
        <p className="mt-2 text-stone-600">Chloe sees every fireplace as a blank canvas. Her expertise is in creating fires that not only warm the room but also create the perfect ambiance for any occasion.</p>
      </div>
      <div className="text-center flex flex-col items-center">
        <div className="bg-stone-200 border-2 border-dashed rounded-full w-32 h-32 mb-4" />
        <h3 className="text-xl font-bold text-stone-800">Marcus, the Kindling King</h3>
        <p className="mt-2 text-stone-600">Marcus can get a fire started in any condition, guaranteed. His secret is his proprietary blend of all-natural kindling and an unwavering positive attitude.</p>
      </div>
    </div>
  </Section>
);

const TestimonialsSection = () => (
  <Section className="bg-white">
    <div className="text-center">
      <h2 className="text-4xl font-bold text-stone-800">Don't Just Take Our Word For It</h2>
    </div>
    <div className="mt-16 grid md:grid-cols-2 gap-8">
      <Card className="!shadow-md">
        <div className="p-8">
          <p className="text-stone-600 italic">"I used to think my fireplace was just a decorative hole in the wall. LogBuddy changed everything. 10/10."</p>
          <p className="mt-4 font-bold text-stone-800">- Sarah K., West Village</p>
        </div>
      </Card>
      <Card className="!shadow-md">
        <div className="p-8">
          <p className="text-stone-600 italic">"The cleanup was immaculate. My hearth has never looked better. Worth every penny."</p>
          <p className="mt-4 font-bold text-stone-800">- David L., The Suburbs</p>
        </div>
      </Card>
    </div>
  </Section>
);

const FAQ_DATA = [
  {
    question: "Is it safe?",
    answer: "Absolutely. All LogBuddies are insured and rigorously trained in fire safety, chimney assessment, and proper ventilation techniques to ensure a safe and enjoyable experience."
  },
  {
    question: "Do I need to provide anything?",
    answer: "Nope! We bring the wood, the kindling, the matches, and the magic. All you need is a functional, well-maintained fireplace and chimney."
  },
  {
    question: "What about the mess?",
    answer: "We guarantee a no-mess experience. Our LogBuddies use protective coverings and perform a thorough cleanup after the fire has been extinguished, leaving your hearth spotless."
  },
  {
    question: "Can I book a LogBuddy for an outdoor fire pit?",
    answer: "Currently, our services are tailored for indoor wood-burning fireplaces. We are exploring options for outdoor fire pits and hope to offer this service in the future!"
  }
];

const FaqItem = ({ faq, isOpen, onToggle }: { faq: { question: string; answer: string }, isOpen: boolean, onToggle: () => void }) => (
  <div className="border-b border-stone-200 py-4">
    <button onClick={onToggle} className="w-full flex justify-between items-center text-left">
      <span className="text-lg font-semibold text-stone-800">{faq.question}</span>
      <ChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
      <p className="text-stone-600">{faq.answer}</p>
    </div>
  </div>
);

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="bg-stone-50">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-stone-800">Frequently Asked Questions</h2>
      </div>
      <div className="mt-12 max-w-3xl mx-auto">
        {FAQ_DATA.map((faq, index) => (
          <FaqItem key={index} faq={faq} isOpen={openIndex === index} onToggle={() => handleToggle(index)} />
        ))}
      </div>
    </Section>
  );
};

const Footer = () => (
  <footer className="bg-stone-800 text-stone-300 py-8">
    <div className="max-w-6xl mx-auto text-center">
      <Flame className="mx-auto mb-4 text-orange-500" size={32} />
      <p className="font-bold text-lg text-white">LogBuddy</p>
      <p className="text-sm mt-2">The Warmth You Want. The Work You Don't.</p>
      <p className="text-xs mt-4 text-stone-400">&copy; {new Date().getFullYear()} LogBuddy Inc. All Rights Reserved. (A Fictional Company)</p>
    </div>
  </footer>
);

const BookingModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-stone-400 hover:text-stone-800">
          <X size={24} />
        </button>
        <div className="mx-auto bg-green-100 text-green-600 rounded-full h-16 w-16 flex items-center justify-center mb-6">
          <Flame size={32} />
        </div>
        <h2 className="text-2xl font-bold text-stone-800">Booking Confirmed!</h2>
        <p className="text-stone-600 mt-4">Just kidding! This is a fictional website inspired by Modern Family. But if we were real, a LogBuddy would be on their way!</p>
        <button onClick={onClose} className="mt-8 w-full py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors">
          Stay Cozy
        </button>
      </div>
    </div>
  );
};

const LogBuddyPage: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookNowClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>LogBuddy | A Perfect Fire. Every Time.</title>
        <meta name="description" content="LogBuddy is the premium, on-demand service that brings the timeless comfort of a real wood-burning fire into your home, without any of the hassle." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white">
        <HeroSection onBookNowClick={handleBookNowClick} />
        <HowItWorksSection />
        <ExperiencesSection onBookNowClick={handleBookNowClick} />
        <LogBuddiesSection />
        <TestimonialsSection />
        <FaqSection />
        <Footer />
        <BookingModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </main>
    </>
  );
};

export default LogBuddyPage;
