import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Ticker from "@/components/Ticker";
import { ArrowRight, BookOpen, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-24 pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Your Career Launchpad
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-foreground"
            >
              Transform your potential into a <span className="text-primary">thriving career</span>.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl"
            >
              Master in-demand IT technologies and soft skills. We guide you beyond the classroom to secure high-impact roles in top companies outside the IT sector.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button size="lg" className="rounded-full px-8 text-base h-14" asChild>
                <Link href="/programs">
                  Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-base h-14" asChild>
                <Link href="/placements">View Placements</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="space-y-2 py-4">
              <h3 className="text-5xl font-bold text-primary">5,000+</h3>
              <p className="text-muted-foreground font-medium text-lg">Students Trained</p>
            </div>
            <div className="space-y-2 py-4">
              <h3 className="text-5xl font-bold text-primary">150+</h3>
              <p className="text-muted-foreground font-medium text-lg">Companies Hiring</p>
            </div>
            <div className="space-y-2 py-4">
              <h3 className="text-5xl font-bold text-primary">92%</h3>
              <p className="text-muted-foreground font-medium text-lg">Placement Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Holistic Training Approach</h2>
              <p className="text-lg text-muted-foreground">
                We combine rigorous technical education with essential soft skills training to make you the ideal candidate for any industry.
              </p>
            </div>
            <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/10" asChild>
              <Link href="/programs">All Programs <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-14 w-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">IT Technologies</h3>
              <p className="text-muted-foreground mb-6">
                Master Data Analytics, Web Development, Cloud Computing, and Cybersecurity.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-14 w-14 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Soft Skills</h3>
              <p className="text-muted-foreground mb-6">
                Develop leadership, communication, and interview skills that set you apart.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-14 w-14 bg-accent-foreground/10 text-accent-foreground rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Non-IT Placements</h3>
              <p className="text-muted-foreground mb-6">
                Apply your tech skills in high-growth roles across Finance, HR, and Operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 md:px-6 mb-8 text-center">
          <h2 className="text-2xl font-bold text-foreground">Trusted by Industry Leaders</h2>
        </div>
        <Ticker />
      </section>
    </div>
  );
}
