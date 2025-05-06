import { useCallback } from "react";
import Header from "@/components/lady-dance/Header";
import HeroBanner from "@/components/lady-dance/HeroBanner";
import Features from "@/components/lady-dance/Features";
import TeacherSection from "@/components/lady-dance/TeacherSection";
import AboutDance from "@/components/lady-dance/AboutDance";
import CallToAction from "@/components/lady-dance/CallToAction";
import Footer from "@/components/lady-dance/Footer";

const Index = () => {
  const handleCall = useCallback(() => {
    window.location.href = "tel:+79299046364";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-ladydance-pink/5">
      <Header handleCall={handleCall} />
      <HeroBanner handleCall={handleCall} />
      <Features />
      <TeacherSection handleCall={handleCall} />
      <AboutDance handleCall={handleCall} />
      <CallToAction handleCall={handleCall} />
      <Footer />
    </div>
  );
};

export default Index;