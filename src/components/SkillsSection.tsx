"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { AnimatedSkill, AnimatedTitle } from "@/components/ui/animated-section";
import { motion, AnimatePresence } from "framer-motion";
import { WavesBackground } from "./ui/animated-background";
import { Search, X, Filter, SlidersHorizontal, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n-context";

// Define the skill interface for TypeScript
type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

interface Skill {
  name: string;
  description: string;
  icon: string;
  level: SkillLevel;
  tags: string[];
}

// Adding skill levels and tags to the existing skills data
const skillCategories = [
    {
      id: "programming",
      label: "Languages & Framework",
      skills: [
        {
          name: "Java",
          description: "Enterprise Application Development",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
          level: "expert" as SkillLevel,
          tags: ["backend", "enterprise", "microservices"]
        },
        {
          name: "Go",
          description: "Concurrent Systems & Infrastructure",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
          level: "advanced" as SkillLevel,
          tags: ["backend", "infrastructure"]
        },
        {
          name: "Python",
          description: "Scripting, Automation, and API Development",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
          level: "advanced" as SkillLevel,
          tags: ["scripting", "backend", "automation"]
        },
        {
          name: "JavaScript",
          description: "Frontend & Web Development",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
          level: "advanced" as SkillLevel,
          tags: ["frontend", "web"]
        },
        {
          name: "TypeScript",
          description: "Typed Frontend Development",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
          level: "advanced" as SkillLevel,
          tags: ["frontend", "web"]
        },
        {
          name: "SQL",
          description: "Relational Database Queries & Design",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
          level: "expert" as SkillLevel,
          tags: ["database", "data"]
        },
           {
              name: "Spring Boot",
              description: "Microservices & Enterprise Backend Framework",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg",
              level: "expert" as SkillLevel,
              tags: ["backend", "web", "microservices"]
            },
            {
              name: "Angular",
              description: "Component-Based Frontend Framework",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
              level: "advanced" as SkillLevel,
              tags: ["frontend", "spa"]
            },
            {
              name: "React",
              description: "Modern Frontend Library for UI",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
              level: "advanced" as SkillLevel,
              tags: ["frontend", "spa"]
            },
            {
              name: "Django",
              description: "Backend python library for MVP",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-original.svg",
              level: "advanced" as SkillLevel,
              tags: ["frontend", "spa"]
            },
            {
              name: "Flask",
              description: "Fast API builds library",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
              level: "advanced" as SkillLevel,
              tags: ["frontend", "spa"]
            }
      ]
    },
    {
      id: "data",
      label: "Data",
      skills: [
        {
          name: "PostgreSQL",
          description: "Advanced SQL Database",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
          level: "expert" as SkillLevel,
          tags: ["sql", "database"]
        },
        {
          name: "MySQL",
          description: "Relational Database Management",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
          level: "advanced" as SkillLevel,
          tags: ["sql", "database"]
        },
        {
          name: "MongoDB",
          description: "NoSQL Database for Unstructured Data",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
          level: "advanced" as SkillLevel,
          tags: ["nosql", "database"]
        },
        {
          name: "REST API",
          description: "Service-Oriented & Microservice Design",
          icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
          level: "expert" as SkillLevel,
          tags: ["api", "soa", "microservices"]
        }
      ]
    },
    {
      id: "devops",
      label: "DevOps & Infra",
      skills: [
        {
          name: "Terraform",
          description: "Infrastructure as Code (IaC)",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
          level: "expert" as SkillLevel,
          tags: ["iac", "infrastructure"]
        },
        {
          name: "Ansible",
          description: "Automation & Configuration Management",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg",
          level: "advanced" as SkillLevel,
          tags: ["automation", "devops"]
        },
        {
          name: "Jenkins",
          description: "Continuous Integration/Deployment (CI/CD)",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
          level: "expert" as SkillLevel,
          tags: ["cicd", "automation"]
        },
        {
          name: "GitHub Actions",
          description: "Workflow Automation & CI/CD",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
          level: "advanced" as SkillLevel,
          tags: ["cicd", "automation"]
        },
        {
          name: "Kubernetes",
          description: "Container Orchestration & Scaling",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
          level: "advanced" as SkillLevel,
          tags: ["containers", "orchestration"]
        },
        {
          name: "Docker",
          description: "Containerization Platform",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
          level: "expert" as SkillLevel,
          tags: ["containers", "deployment"]
        },
        {
          name: "Helm",
          description: "Kubernetes Package Management",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/helm/helm-original.svg",
          level: "advanced" as SkillLevel,
          tags: ["kubernetes", "infrastructure"]
        },
        {
          name: "AWS EC2",
          description: "Compute Services",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg",
          level: "advanced" as SkillLevel,
          tags: ["compute", "cloud"]
        },
        {
          name: "AWS S3",
          description: "Object Storage Service",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg",
          level: "advanced" as SkillLevel,
          tags: ["storage", "cloud"]
        },
        {
          name: "AWS SQS",
          description: "Simple Queue Service",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg",
          level: "advanced" as SkillLevel,
          tags: ["messaging", "cloud"]
        }
      ]
    },
    {
      id: "messaging",
      label: "Messaging",
      skills: [
        {
          name: "Kafka",
          description: "Distributed Event Streaming Platform",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg",
          level: "advanced" as SkillLevel,
          tags: ["streaming", "messaging"]
        },
        {
          name: "RabbitMQ",
          description: "Message Broker for Asynchronous Systems",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg",
          level: "advanced" as SkillLevel,
          tags: ["messaging", "integration"]
        },
        {
          name: "IBM MQ",
          description: "Enterprise Messaging Middleware",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ibm/ibm-original.svg",
          level: "advanced" as SkillLevel,
          tags: ["integration", "enterprise"]
        }
      ]
    }
  ];


export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("languages");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSkills, setFilteredSkills] = useState<{[key: string]: Skill[]}>({});
  const [activeFilters, setActiveFilters] = useState<{
    levels: string[];
    tags: string[];
  }>({
    levels: [],
    tags: []
  });
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const { t } = useLanguage();

  // Get all unique tags across all skills
  const allTags = Array.from(
    new Set(
      skillCategories.flatMap(category =>
        category.skills.flatMap(skill => skill.tags || [])
      )
    )
  );

  // Get all unique skill levels
  const skillLevels: SkillLevel[] = ["beginner", "intermediate", "advanced", "expert"];

  // Filter skills based on search query and active filters
  useEffect(() => {
    const newFilteredSkills: {[key: string]: Skill[]} = {};

    skillCategories.forEach(category => {
      const filtered = category.skills.filter(skill => {
        const matchesSearch =
          !searchQuery ||
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (skill.tags && skill.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));

        const matchesLevel =
          activeFilters.levels.length === 0 ||
          (skill.level && activeFilters.levels.includes(skill.level));

        const matchesTags =
          activeFilters.tags.length === 0 ||
          (skill.tags && activeFilters.tags.some(tag => skill.tags?.includes(tag)));

        return matchesSearch && matchesLevel && matchesTags;
      });

      if (filtered.length > 0) {
        newFilteredSkills[category.id] = filtered;
      }
    });

    setFilteredSkills(newFilteredSkills);

      // Check if the current selected category has skills
    if (!newFilteredSkills[selectedCategory]?.length) {
      // If no skills, select "programming" category
      setSelectedCategory("programming");
  }
  }, [searchQuery, activeFilters, selectedCategory]);

  // Toggle filter for tags and levels
  const toggleFilter = (type: 'levels' | 'tags', value: string) => {
    setActiveFilters(prev => {
      const currentFilters = prev[type];
      const isActive = currentFilters.includes(value);

      return {
        ...prev,
        [type]: isActive
          ? currentFilters.filter(item => item !== value)
          : [...currentFilters, value]
      };
    });
  };

  // Clear all filters
  const clearFilters = () => {
    setActiveFilters({ levels: [], tags: [] });
    setSearchQuery("");
  };

  // Count active filters
  const activeFilterCount = activeFilters.levels.length + activeFilters.tags.length + (searchQuery ? 1 : 0);

  // Check if there are any filtered skills for the current category
  const hasFilteredSkills = Object.keys(filteredSkills).length > 0;
  const currentCategoryHasSkills = selectedCategory in filteredSkills && filteredSkills[selectedCategory]?.length > 0;

  return (
    <WavesBackground intensity="subtle" speed="slow">
      <section id="skills" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedTitle className="text-center">
            <h2 className="section-title">{t('skills.title', 'Skills & Technologies')}</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('skills.subtitle', 'Tools and technologies I use to build modern, responsive, and user-friendly applications')}
            </p>
          </AnimatedTitle>

          {/* Search and filter bar */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-3 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full md:w-auto md:flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder={t('common.search', 'Search skills, technologies...')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <motion.div className="relative">
              <motion.button
                onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-muted/50 hover:bg-muted border border-border rounded-full transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter className="h-4 w-4" />
                {t('common.filter', 'Filter')}
                {activeFilterCount > 0 && (
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs">
                    {activeFilterCount}
                  </span>
                )}
              </motion.button>

              {/* Filter dropdown */}
              <AnimatePresence>
                {isFilterMenuOpen && (
                  <motion.div
                    className="absolute right-0 mt-2 p-4 bg-card border border-border rounded-lg shadow-lg z-10 w-64"
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-sm flex items-center gap-1">
                        <SlidersHorizontal className="h-3.5 w-3.5" />
                        {t('common.filter', 'Filters')}
                      </h3>
                      {activeFilterCount > 0 && (
                        <button
                          onClick={clearFilters}
                          className="text-xs text-primary hover:underline"
                        >
                          {t('common.clearAll', 'Clear all')}
                        </button>
                      )}
                    </div>

                    {/* Skill level filters */}
                    <div className="mb-4">
                      <h4 className="text-xs font-medium mb-2 text-muted-foreground">Skill Level</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillLevels.map(level => (
                          <button
                            key={level}
                            onClick={() => toggleFilter('levels', level)}
                            className={`text-xs px-2 py-1 rounded-full border transition-colors ${
                              activeFilters.levels.includes(level)
                                ? 'bg-primary text-primary-foreground border-primary'
                                : 'bg-muted/50 text-muted-foreground border-border hover:bg-muted'
                            }`}
                          >
                            {level.charAt(0).toUpperCase() + level.slice(1)}
                            {activeFilters.levels.includes(level) && (
                              <CheckCircle2 className="h-3 w-3 ml-1 inline" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Tags filters */}
                    <div>
                      <h4 className="text-xs font-medium mb-2 text-muted-foreground">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {allTags.map(tag => (
                          <button
                            key={tag}
                            onClick={() => toggleFilter('tags', tag)}
                            className={`text-xs px-2 py-1 rounded-full border transition-colors ${
                              activeFilters.tags.includes(tag)
                                ? 'bg-primary text-primary-foreground border-primary'
                                : 'bg-muted/50 text-muted-foreground border-border hover:bg-muted'
                            }`}
                          >
                            {tag}
                            {activeFilters.tags.includes(tag) && (
                              <CheckCircle2 className="h-3 w-3 ml-1 inline" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Clear filters button */}
            {activeFilterCount > 0 && (
              <motion.button
                onClick={clearFilters}
                className="text-sm text-muted-foreground hover:text-foreground border border-border rounded-full px-3 py-1 flex items-center gap-1"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="h-3.5 w-3.5" />
                {t('common.clearAll', 'Clear all')}
              </motion.button>
            )}
          </motion.div>

          {/* Display message when no skills match the filters */}
          {!hasFilteredSkills && (
            <motion.div
              className="text-center py-12 border border-dashed border-border rounded-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-muted-foreground">No skills match your current filters.</p>
              <button
                onClick={clearFilters}
                className="text-primary hover:underline mt-2"
              >
                {t('common.clearAll', 'Clear all filters')}
              </button>
            </motion.div>
          )}

          {/* Skill Categories Tabs */}
          {hasFilteredSkills && (
            <Tabs
              value={selectedCategory}
              onValueChange={setSelectedCategory}
              className="w-full max-w-4xl mx-auto"
            >
              <TabsList className="flex bg-card p-1 mb-8">
                {Object.keys(filteredSkills).map((categoryId) => {
                  const category = skillCategories.find(c => c.id === categoryId);
                  return (
                      <div className="flex-auto">
                        <TabsTrigger
                          key={categoryId}
                          value={categoryId}
                          className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary relative"
                        >
                          {category?.label}
                          <span className="absolute -top-1 -right-1 text-xs bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center">
                            {filteredSkills[categoryId].length}
                          </span>
                        </TabsTrigger>
                    </div>
                  );
                })}
              </TabsList>

              {/* Show message when current category has no skills */}
              {/* {!currentCategoryHasSkills && (
                <motion.div
                  className="text-center py-8 border border-dashed border-border rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-muted-foreground">
                    No skills in this category match your filters.
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Try selecting a different category or adjusting your filters.
                  </p>
                </motion.div>
              )} */}
              

              {/* Skills display */}
              {Object.entries(filteredSkills).map(([categoryId, skills]) => (
                <TabsContent key={categoryId} value={categoryId} className="mt-4">
                  <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AnimatePresence>
                      {skills.map((skill, index) => (
                        <AnimatedSkill
                          key={skill.name}
                          className="flex flex-col items-center text-center space-y-3 relative"
                          delay={0.1 * index}
                        >
                          {/* Skill level indicator */}
                          {skill.level && (
                            <div className="absolute -top-1 -right-1 text-xs px-2 py-0.5 rounded-full bg-primary/80 text-primary-foreground capitalize">
                              {skill.level}
                            </div>
                          )}

                          <motion.div
                            className="skill-icon w-16 h-16 flex items-center justify-center"
                            whileHover={{
                              scale: 1.1,
                              rotate: 5,
                              transition: { duration: 0.2 }
                            }}
                          >
                            <Image
                              src={skill.icon}
                              alt={skill.name}
                              width={48}
                              height={48}
                              className="object-contain"
                            />
                          </motion.div>
                          <div>
                            <h3 className="font-medium">{skill.name}</h3>
                            <p className="text-xs text-muted-foreground mt-1">{skill.description}</p>

                            {/* Skill tags */}
                            {skill.tags && skill.tags.length > 0 && (
                              <div className="flex flex-wrap justify-center gap-1 mt-2">
                                {skill.tags.map(tag => (
                                  <span
                                    key={tag}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleFilter('tags', tag);
                                    }}
                                    className={`text-[10px] px-1.5 py-0.5 rounded-full cursor-pointer transition-colors ${
                                      activeFilters.tags.includes(tag)
                                        ? 'bg-primary/80 text-primary-foreground'
                                        : 'bg-muted/70 text-muted-foreground hover:bg-muted/90'
                                    }`}
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </AnimatedSkill>
                      ))}
                    </AnimatePresence>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          )}

          {/* Search and filter stats */}
          {activeFilterCount > 0 && hasFilteredSkills && (
            <motion.p
              className="text-center text-sm text-muted-foreground mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Showing {Object.values(filteredSkills).flat().length} of {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)} skills
            </motion.p>
          )}
        </div>
      </section>
    </WavesBackground>
  );
}
