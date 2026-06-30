import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <section className="pt-24 pb-16 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
            >
              Our Story
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              Learn and Grab was founded on a simple belief: education should lead to employment. We bridge the gap between academic learning and industry expectations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-2">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold text-foreground">Empowering individuals with actionable skills.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are dedicated to providing high-quality, practical training in IT technologies and soft skills. Our mission is to equip our students with the tools they need to secure meaningful roles in top companies, particularly focusing on non-IT sectors where technology skills are highly valued.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1 text-sm font-medium text-secondary mb-2">
                Our Vision
              </div>
              <h2 className="text-3xl font-bold text-foreground">A world where talent meets opportunity.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a future where every motivated individual has access to the guidance and education necessary to launch a successful career. By focusing on holistic development, we aim to be the premier career launchpad globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">What Makes Us Different</h2>
            <p className="text-lg text-muted-foreground">
              We don't just teach code. We build professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-background rounded-2xl border border-border space-y-4">
              <div className="text-4xl font-black text-primary/20 mb-4">01</div>
              <h3 className="text-xl font-bold text-foreground">Non-IT Sector Focus</h3>
              <p className="text-muted-foreground">
                While others focus solely on tech companies, we identify lucrative opportunities in Finance, Healthcare, Retail, and Operations where tech skills give you a massive competitive advantage.
              </p>
            </div>

            <div className="p-8 bg-background rounded-2xl border border-border space-y-4">
              <div className="text-4xl font-black text-primary/20 mb-4">02</div>
              <h3 className="text-xl font-bold text-foreground">Integrated Soft Skills</h3>
              <p className="text-muted-foreground">
                Technical knowledge alone isn't enough. Our curriculum treats communication, leadership, and emotional intelligence as core subjects, not optional add-ons.
              </p>
            </div>

            <div className="p-8 bg-background rounded-2xl border border-border space-y-4">
              <div className="text-4xl font-black text-primary/20 mb-4">03</div>
              <h3 className="text-xl font-bold text-foreground">Mentorship Driven</h3>
              <p className="text-muted-foreground">
                Our approach is warm and supportive. We act as mentors who genuinely care about your success, guiding you through interview prep and resume building until you are placed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
