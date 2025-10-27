"use client";

import { useState } from "react";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { AnimatedTitle } from "@/components/ui/animated-section";
import { Building, Briefcase, Users, Calendar, Award, Link, ChevronDown, ChevronUp, Lightbulb, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n-context";

// Project Type
type Project = {
  name: string;
  description: string;
  technologies: string[];
};

export default function ExperienceTimelineSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [expandedProjects, setExpandedProjects] = useState<boolean>(false);
  const { t } = useLanguage();

  // Experience data with translation keys
  const getExperienceData = () => [
  {
    id: 1,
    title: t('experience.transactis.title'),
    company: "Transactis",
    period: "June 2023 - Present",
    description: t('experience.transactis.description'),
    skills: ["Java", "Spring Boot", "Kubernetes", "IBM MQ", "Golang", "RabbitMQ", "Kafka", "ELK"],
    achievements: [
      t('experience.transactis.achievement1'),
      t('experience.transactis.achievement2'),
      t('experience.transactis.achievement3'),
      t('experience.transactis.achievement4'),
      t('experience.transactis.achievement5')
    ],
    projects: [
      {
        name: t('experience.transactis.project1.name'),
        description: t('experience.transactis.project1.description'),
        technologies: ["IBM MQ", "Java 17", "Spring Boot", "Kubernetes", "RabbitMQ"]
      },
      {
        name: t('experience.transactis.project2.name'),
        description: t('experience.transactis.project2.description'),
        technologies: ["S3", "AES Encryption","IBM MQ", "Java 17", "Spring Boot", "Kubernetes" ,"Streaming", "Apache Spark"]
      },
      {
        name: t('experience.transactis.project3.name'),
        description: t('experience.transactis.project3.description'),
        technologies: ["Kafka", "Java 17", "Spring Boot", "Kubernetes", "S3", "IBM MQ"]
      },
    ],
    team: t('experience.transactis.team'),
    location: "Paris, France"
  },
  {
    id: 2,
    title: t('experience.colas.title'),
    company: "ZSoft | Colas",
    period: "September 2022 - June 2023",
    description: t('experience.colas.description'),
    skills: ["Java", "Angular", "Spring Boot", "CRM", "Data Migration", "REST APIs"],
    achievements: [
      t('experience.colas.achievement1'),
      t('experience.colas.achievement2'),
      t('experience.colas.achievement3')
    ],
    projects: [
      {
        name: t('experience.colas.project1.name'),
        description: t('experience.colas.project1.description'),
        technologies: ["Java", "Angular", "CRM"]
      }
    ],
    team: t('experience.colas.team'),
    location: "Paris, France"
  },
  {
    id: 3,
    title: t('experience.datama.title'),
    company: "Datama",
    period: "February 2021 - September 2022",
    description: t('experience.datama.description'),
    skills: ["VueJs","Python3", "Fullstack Development", "Data Analytics", "Web Platform"],
    achievements: [],
    projects: [
      {
        name: t('experience.datama.project1.name'),
        description: t('experience.datama.project1.description'),
        technologies: ["Web Platform", "Data Processing"]
      }
    ],
    team: t('experience.datama.team'),
    location: "Paris, France"
  },
  {
    id: 3,
    title: t('experience.wings.title'),
    company: "Datama",
    period: "February 2021 - September 2022",
    description: t('experience.datama.description'),
    skills: ["VueJs","Python3", "Fullstack Development", "Data Analytics", "Web Platform"],
    achievements: [],
    projects: [
      {
        name: t('experience.datama.project1.name'),
        description: t('experience.datama.project1.description'),
        technologies: ["Web Platform", "Data Processing"]
      }
    ],
    team: t('experience.datama.team'),
    location: "Paris, France"
  }
];

  const experienceData = getExperienceData();

  // Toggle active index
  const toggleActive = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
      setExpandedProjects(false);
    } else {
      setActiveIndex(index);
      setExpandedProjects(false);
    }
  };

  // Toggle expanded projects
  const toggleProjects = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedProjects(!expandedProjects);
  };

  return (
    <section id="experience-timeline" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedTitle className="text-center mb-16">
          <h2 className="section-title">{t('experience.title', 'Professional Journey')}</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            {t('experience.subtitle', 'An interactive timeline showcasing my career progression and key projects')}
          </p>
        </AnimatedTitle>

        <Timeline className="max-w-5xl mx-auto">
          {experienceData.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              year={experience.period}
              title={experience.title}
              subtitle={experience.company}
              side={index % 2 === 0 ? "left" : "right"}
              index={index}
              onClick={() => toggleActive(index)}
              isActive={activeIndex === index}
              icon={<Briefcase className="h-5 w-5 text-primary" />}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-primary/80" />
                  <span className="text-sm text-muted-foreground">{experience.location}</span>
                </div>
                <p className="text-foreground/80">{experience.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {experience.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                          delay: 0.1 + i * 0.05,
                          duration: 0.3,
                          ease: "easeOut"
                        }
                      }}
                      whileHover={{ scale: 1.05, y: -1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Additional content when item is active */}
                {activeIndex === index && (
                  <div className="mt-4 space-y-5 pt-3 border-t border-border">
                    {/* Top Achievements */}
                    <div>
                      <h4 className="font-medium text-sm uppercase tracking-wider text-primary/80 mb-3 flex items-center">
                        <Award className="h-4 w-4 mr-1.5" /> {t('common.keyAchievements', 'Key Achievements')}
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.slice(0, 3).map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                          >
                            <span className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-0.5">
                              ✓
                            </span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Projects Section */}
                    <div>
                      <div
                        className="flex justify-between items-center cursor-pointer mb-3"
                        onClick={toggleProjects}
                      >
                        <h4 className="font-medium text-sm uppercase tracking-wider text-primary/80 flex items-center">
                          <Lightbulb className="h-4 w-4 mr-1.5" /> {t('common.keyProjects', 'Key Projects')}
                        </h4>
                        <button
                          className="text-primary/70 hover:text-primary p-1 rounded-full hover:bg-primary/10 transition-colors"
                        >
                          {expandedProjects ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </button>
                      </div>

                      <AnimatePresence>
                        {(expandedProjects || !expandedProjects) && (
                          <div className="space-y-3">
                            {experience.projects.slice(0, expandedProjects ? undefined : 1).map((project, idx) => (
                              <motion.div
                                key={project.name}
                                className="p-3 rounded-lg bg-primary/5 border border-primary/10"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
                                transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                              >
                                <h5 className="font-medium text-primary flex items-center">
                                  <Link className="h-3.5 w-3.5 mr-1.5" />
                                  {project.name}
                                </h5>
                                <p className="text-sm mt-1 text-foreground/70">
                                  {project.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5 mt-2">
                                  {project.technologies.map(tech => (
                                    <span
                                      key={tech}
                                      className="text-xs px-2 py-0.5 bg-primary/20 rounded-full text-primary/80"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </AnimatePresence>

                      {!expandedProjects && experience.projects.length > 1 && (
                        <motion.button
                          className="text-sm text-primary hover:text-primary/80 hover:underline mt-2 flex items-center"
                          onClick={toggleProjects}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          whileHover={{ x: 2 }}
                        >
                          {t('common.showMore', 'Show')} {experience.projects.length - 1} {experience.projects.length > 2 ? t('common.moreProjects', 'more projects') : t('common.moreProject', 'more project')}
                          <ChevronDown className="h-3 w-3 ml-1" />
                        </motion.button>
                      )}
                    </div>

                    {/* Team Information */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4 text-primary/70" />
                      <span>{experience.team}</span>
                    </div>
                  </div>
                )}
              </div>
            </TimelineItem>
          ))}
        </Timeline>

        <div className="flex justify-center mt-12">
          <motion.p
            className="text-sm text-muted-foreground text-center max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            {t('experience.clickPrompt', 'Click on any milestone to view details about my role, achievements, and key projects.')}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
