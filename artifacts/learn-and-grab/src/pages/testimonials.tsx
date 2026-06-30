import React from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";
import { Star } from "lucide-react";

// Enriching the shared testimonials data with before/after journey data for this specific page
const FULL_TESTIMONIALS = TESTIMONIALS.map((t) => ({
  ...t,
  journey: {
    before: t.company === "Markatlas" ? "Lost, lacking communication skills" :
            t.company === "HCL" ? "Unsure how to pivot to marketing" :
            t.company === "Deloitte" ? "Non-IT background, intimidated by tech" :
            t.company === "Capgemini" ? "Basic college degree, no practical cloud knowledge" :
            t.company === "Amazon" ? "Struggling with interviews and presentation" :
            "Nervous, failing technical interviews",
    after: t.company === "Markatlas" ? "Confident communicator, secure role" :
           t.company === "HCL" ? "Digital Marketing executive in an enterprise" :
           t.company === "Deloitte" ? "Business Analyst blending tech and strategy" :
           t.company === "Capgemini" ? "Certified Cloud Professional with multiple offers" :
           t.company === "Amazon" ? "Operations Manager leading a team" :
           "Aced the bank's digital division assessment"
  }
}));

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

export default function Testimonials() {
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
            Student Stories
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Don't just take our word for it. Read the journeys of our alumni who transformed their careers with Learn and Grab.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-8"
          >
            {FULL_TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={i} 
                variants={cardVariants}
                className="bg-card border border-border p-8 rounded-2xl shadow-sm flex flex-col h-full relative overflow-hidden"
              >
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0"></div>
                
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center font-bold text-primary-foreground text-xl">
                      {t.initials}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{t.name}</h3>
                      <p className="text-sm font-medium text-primary">Placed at {t.company}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star 
                        key={idx} 
                        className={`h-4 w-4 ${idx < t.rating ? "text-yellow-400 fill-yellow-400" : "text-muted"}`} 
                      />
                    ))}
                  </div>
                </div>

                <blockquote className="text-lg text-muted-foreground italic leading-relaxed mb-8 flex-1 relative z-10">
                  "{t.text}"
                </blockquote>

                <div className="bg-muted/30 rounded-xl p-5 border border-border/50 relative z-10">
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Career Journey</h4>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <span className="text-xs font-bold text-muted-foreground w-12 pt-0.5">BEFORE</span>
                      <span className="text-sm text-foreground">{t.journey.before}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-xs font-bold text-primary w-12 pt-0.5">AFTER</span>
                      <span className="text-sm font-medium text-foreground">{t.journey.after}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
