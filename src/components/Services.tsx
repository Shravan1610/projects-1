import React from 'react';
import { MessageSquare, Phone, Cog } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServiceCard = ({ icon: Icon, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="service-card"
    >
      <Icon className="w-12 h-12 text-neon-blue mb-4" />
      <h3 className="text-xl font-inter font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-inter font-bold text-center mb-12 gradient-text">
          Our AI Solutions
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={MessageSquare}
            title="AI Chatbots"
            description="Intelligent conversational agents that handle customer inquiries 24/7, improving response times and satisfaction."
          />
          <ServiceCard
            icon={Phone}
            title="AI Phone Callers"
            description="Advanced voice AI that manages outbound calls, appointments, and follow-ups with natural conversation."
          />
          <ServiceCard
            icon={Cog}
            title="Business Automation"
            description="End-to-end process automation that streamlines workflows and reduces manual tasks."
          />
        </div>
      </div>
    </section>
  );
};