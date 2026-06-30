import React from "react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                LG
              </div>
              <span className="text-xl font-bold text-foreground">
                Learn and Grab
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A career launchpad guiding you towards real growth and non-IT placements.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Programs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Success</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/placements" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Placements
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-muted-foreground cursor-not-allowed">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground cursor-not-allowed">
                  Terms of Service
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Learn and Grab. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Empowering Careers, Elevating Lives.
          </p>
        </div>
      </div>
    </footer>
  );
}
