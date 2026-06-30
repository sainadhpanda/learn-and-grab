import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Shield, Cloud, Megaphone, MessageSquare, Award, FileText, Target, Clock, CheckCircle } from "lucide-react";

const TECH_PROGRAMS = [
  {
    title: "Web Development",
    icon: <Code className="h-6 w-6" />,
    duration: "12 Weeks",
    outcomes: ["Full-stack capabilities", "Modern JS frameworks", "API integration"],
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Data Analytics",
    icon: <Database className="h-6 w-6" />,
    duration: "10 Weeks",
    outcomes: ["SQL mastery", "Data visualization", "Business intelligence"],
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    title: "Cybersecurity",
    icon: <Shield className="h-6 w-6" />,
    duration: "14 Weeks",
    outcomes: ["Threat modeling", "Network security", "Risk assessment"],
    color: "text-rose-500",
    bg: "bg-rose-500/10"
  },
  {
    title: "Cloud Computing",
    icon: <Cloud className="h-6 w-6" />,
    duration: "12 Weeks",
    outcomes: ["AWS / Azure fundamentals", "Infrastructure scaling", "Deployment"],
    color: "text-sky-500",
    bg: "bg-sky-500/10"
  },
  {
    title: "Digital Marketing",
    icon: <Megaphone className="h-6 w-6" />,
    duration: "8 Weeks",
    outcomes: ["SEO/SEM strategies", "Campaign management", "Growth metrics"],
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  }
];

const SOFT_SKILLS = [
  {
    title: "Professional Communication",
    icon: <MessageSquare className="h-6 w-6" />,
    duration: "4 Weeks",
    outcomes: ["Clear articulation", "Email etiquette", "Persuasive speaking"],
    color: "text-indigo-500",
    bg: "bg-indigo-500/10"
  },
  {
    title: "Leadership & Management",
    icon: <Award className="h-6 w-6" />,
    duration: "6 Weeks",
    outcomes: ["Team building", "Conflict resolution", "Strategic thinking"],
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    title: "Resume Building",
    icon: <FileText className="h-6 w-6" />,
    duration: "2 Weeks",
    outcomes: ["ATS optimization", "Impact phrasing", "Portfolio creation"],
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    title: "Interview Preparation",
    icon: <Target className="h-6 w-6" />,
    duration: "4 Weeks",
    outcomes: ["Mock interviews", "Behavioral questions", "Salary negotiation"],
    color: "text-teal-500",
    bg: "bg-teal-500/10"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Programs() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <section className="pt-24 pb-16 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
          >
            Training Programs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Comprehensive curriculum designed to build both technical mastery and the interpersonal skills required to thrive in any corporate environment.
          </motion.p>
        </div>
      </section>

      {/* Tech Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground">IT Technologies</h2>
            <p className="text-muted-foreground mt-2">Hard skills that make you indispensable across industries.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {TECH_PROGRAMS.map((program) => (
              <motion.div key={program.title} variants={cardVariants} className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-150 transition-transform duration-500 pointer-events-none">
                  {program.icon}
                </div>
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 ${program.bg} ${program.color}`}>
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{program.title}</h3>
                
                <div className="flex items-center text-sm text-muted-foreground mb-6 bg-muted/50 w-fit px-3 py-1.5 rounded-full">
                  <Clock className="w-4 h-4 mr-2" />
                  {program.duration}
                </div>
                
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-foreground">Key Outcomes:</p>
                  <ul className="space-y-2">
                    {program.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-primary/70 shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground">Soft Skills Mastery</h2>
            <p className="text-muted-foreground mt-2">The crucial differentiator that turns a candidate into a hire.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {SOFT_SKILLS.map((program) => (
              <motion.div key={program.title} variants={cardVariants} className="bg-background border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 ${program.bg} ${program.color}`}>
                  {program.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4">{program.title}</h3>
                
                <div className="flex items-center text-sm text-muted-foreground mb-6 bg-muted/50 w-fit px-3 py-1.5 rounded-full">
                  <Clock className="w-4 h-4 mr-2" />
                  {program.duration}
                </div>
                
                <ul className="space-y-2">
                  {program.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-secondary/70 shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
