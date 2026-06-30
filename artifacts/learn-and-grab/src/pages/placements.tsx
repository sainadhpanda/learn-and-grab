import React from "react";
import { motion } from "framer-motion";
import Ticker from "@/components/Ticker";
import { TESTIMONIALS } from "@/lib/data";
import { Briefcase, Building2, TrendingUp, Landmark, LineChart, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Placements() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <section className="pt-24 pb-16 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
            >
              Non-IT Placements
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              Technology is eating every industry. We help you leverage technical skills to land high-impact roles in finance, HR, operations, and sales at the world's top companies.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Explanation Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">What is a Non-IT Placement?</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  While many students aim solely for tech companies (IT sector), there is a massive, untapped demand for tech-literate professionals in traditional sectors like Finance, Retail, Healthcare, and Operations.
                </p>
                <p>
                  A non-IT placement means using your analytical, developmental, or marketing skills to solve business problems in these domains. You might be a Data Analyst at a major bank, a Product Manager in retail, or a Digital Marketer in healthcare.
                </p>
                <p className="font-medium text-foreground">
                  The advantage? Less competition, faster growth, and the opportunity to be a technical leader in a business-driven environment.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
                <Landmark className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-2">Finance & Banking</h3>
                <p className="text-sm text-muted-foreground">Business Analytics, FinTech Operations, Risk Modeling.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
                <Users className="h-8 w-8 text-secondary mb-4" />
                <h3 className="font-bold text-foreground mb-2">Human Resources</h3>
                <p className="text-sm text-muted-foreground">HR Analytics, Talent Systems, Employer Branding.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
                <Building2 className="h-8 w-8 text-accent-foreground mb-4" />
                <h3 className="font-bold text-foreground mb-2">Operations</h3>
                <p className="text-sm text-muted-foreground">Supply Chain Tech, Process Automation, Cloud Management.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
                <LineChart className="h-8 w-8 text-orange-500 mb-4" />
                <h3 className="font-bold text-foreground mb-2">Sales & Marketing</h3>
                <p className="text-sm text-muted-foreground">Digital Strategy, CRM Management, Growth Hacking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker Banner */}
      <section className="py-12 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-6 mb-8 text-center">
          <h2 className="text-2xl font-bold text-foreground">Where Our Students Get Placed</h2>
        </div>
        <Ticker />
      </section>

      {/* Placement Stats */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold">45%</h3>
              <p className="font-medium text-primary-foreground/80">Finance Placements</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold">25%</h3>
              <p className="font-medium text-primary-foreground/80">Operations Placements</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold">20%</h3>
              <p className="font-medium text-primary-foreground/80">Sales & Marketing</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold">10%</h3>
              <p className="font-medium text-primary-foreground/80">HR & Admin</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Testimonials Snippet */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Success Stories</h2>
              <p className="text-muted-foreground">Real professionals thriving in non-IT sectors.</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/testimonials">Read All Stories</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <div key={i} className="p-6 bg-card border border-border rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{t.name}</h4>
                    <p className="text-xs text-muted-foreground">Placed at <span className="font-semibold text-primary">{t.company}</span></p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic leading-relaxed">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
