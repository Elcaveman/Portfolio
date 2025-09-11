"use client";

import { motion } from "framer-motion";
import { Database, Cloud, BarChart3, Code, Cpu, Lightbulb, CodeXml, Shield } from "lucide-react";
import { useLanguage } from "@/lib/i18n-context";
import { AnimatedTitle } from "@/components/ui/animated-section";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <motion.div
      className="bg-background rounded-xl p-6 shadow-sm border hover:shadow-md transition-all duration-300 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Cpu className="h-10 w-10" />,
      title: t('services.softwareEngineering.title'),
      description: t('services.softwareEngineering.description')
    },
    {
      icon: <Cloud className="h-10 w-10" />,
      title: t('services.devopsAutomation.title'),
      description: t('services.devopsAutomation.description')
    },
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: t('services.monitoring.title'),
      description: t('services.monitoring.description')
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: t('services.security.title'),
      description: t('services.security.description')
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: t('services.APIs.title'),
      description: t('services.APIs.description')
    },
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: t('services.consulting.title'),
      description: t('services.consulting.description')
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedTitle className="text-center">
          <h2 className="section-title">
            {t('services.title', 'My Services')}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('services.subtitle', 'Specialized data and cloud engineering services to help organizations transform their data into valuable insights and operational advantages.')}
          </p>
        </AnimatedTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
