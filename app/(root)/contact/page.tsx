import { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { AnimatedSection } from "@/components/common/animated-section";
import { ContactForm } from "@/components/forms/contact-form";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <div className="container py-16 md:py-24 max-w-6xl mx-auto min-h-[calc(100vh-200px)]">
      <AnimatedSection direction="up" className="flex flex-col text-center space-y-4 mb-16">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-tight">Get in Touch</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Ready to elevate your brand with high-impact visuals? Whether you need video editing, motion graphics, or a complete brand identity—let's collaborate to create something extraordinary.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* Contact Form Side */}
        <AnimatedSection delay={0.2} direction="up" className="w-full">
          <div className="bg-card border border-border/50 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <ContactForm />
          </div>
        </AnimatedSection>

        {/* Contact Details Side */}
        <AnimatedSection delay={0.4} direction="up" className="flex flex-col justify-center space-y-10 lg:sticky lg:top-32 h-full py-8">
          <div>
            <h3 className="text-3xl font-heading mb-8">Contact Information</h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="bg-primary/10 p-4 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Email</span>
                  <Link href="mailto:shivam1704gupta@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">
                    shivam1704gupta@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-primary/10 p-4 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Phone</span>
                  <Link href="tel:+919893466291" className="text-lg font-medium hover:text-primary transition-colors">
                    +91 9893466291
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-primary/10 p-4 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Location</span>
                  <span className="text-lg font-medium">
                    India
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50">
            <p className="text-muted-foreground mb-6 text-sm">
              Currently accepting new freelance projects and opportunities. Let's make something amazing.
            </p>
            <Link
              href="mailto:shivam1704gupta@gmail.com"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-12 px-8 w-full sm:w-auto"
            >
              Hire Me
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
