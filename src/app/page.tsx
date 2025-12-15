"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardThirteen from '@/components/sections/feature/FeatureCardThirteen';
import MetricCardSix from '@/components/sections/metrics/MetricCardSix';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardSeven from '@/components/sections/testimonial/TestimonialCardSeven';
import SocialProofThree from '@/components/sections/socialProof/SocialProofThree';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactText from '@/components/sections/contact/ContactText';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Briefcase, DollarSign, Github, Handshake, HelpCircle, Linkedin, MessageSquare, Star, TrendingUp, Twitter, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="largeSizeMediumTitles"
      background="noise"
      cardStyle="glass-outline"
      primaryButtonStyle="outline"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Get Started", href: "contact" }}
          brandName="TechFlow"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          tag="Innovation Meets Execution"
          title="Build the Future with Smart Technology Solutions"
          description="Empower your business with cutting-edge software development, cloud infrastructure, and AI-driven innovations designed for the modern era."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765798261211-y3cuynsv.jpg"
          imageAlt="Modern software dashboard"
          buttons={[
            { text: "Start Your Project", href: "contact" },
            { text: "Explore Our Services", href: "services" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="About TechFlow"
          description="We are a forward-thinking IT startup dedicated to transforming businesses through technology. With a passion for innovation and deep technical expertise, we deliver solutions that drive growth, efficiency, and competitive advantage. Our team combines strategic thinking with hands-on development to turn ambitious ideas into reality."
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardThirteen
          title="Our Core Services"
          description="Comprehensive technology solutions tailored to your business needs"
          tag="Services"
          tagIcon={Zap}
          features={[
            {
              id: "01",
              title: "Cloud Infrastructure",
              description: "Scalable, secure cloud solutions built on AWS, Azure, and Google Cloud. Optimize costs while ensuring reliability and performance for your applications."
            },
            {
              id: "02",
              title: "AI & Machine Learning",
              description: "Leverage artificial intelligence to automate processes, gain predictive insights, and create intelligent products that adapt to user behavior."
            },
            {
              id: "03",
              title: "Custom Software Development",
              description: "Bespoke applications designed for your unique challenges. From web platforms to mobile apps, we build scalable solutions using modern technologies."
            },
            {
              id: "04",
              title: "Cybersecurity & DevOps",
              description: "Protect your digital assets with enterprise-grade security. Implement CI/CD pipelines and infrastructure automation for faster, safer deployments."
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardSix
          title="Our Impact"
          description="Proven results that speak for themselves"
          tag="Metrics"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "150+",
              tag: "Projects",
              tagIcon: Briefcase,
              title: "Successfully Delivered Projects"
            },
            {
              id: "2",
              value: "98%",
              tag: "Satisfaction",
              tagIcon: Star,
              title: "Client Satisfaction Rate"
            },
            {
              id: "3",
              value: "45",
              tag: "Team",
              tagIcon: Users,
              title: "Expert Engineers & Designers"
            },
            {
              id: "4",
              value: "$50M+",
              tag: "Impact",
              tagIcon: DollarSign,
              title: "Client Value Generated"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Our Leadership Team"
          description="Meet the visionary leaders driving innovation and excellence"
          tag="Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Alex Chen",
              role: "Founder & CEO",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765798270762-151d3c72.jpg",
              imageAlt: "Alex Chen",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            },
            {
              id: "2",
              name: "Sarah Mitchell",
              role: "CTO & Head of Engineering",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765798271831-xhhqwzow.jpg",
              imageAlt: "Sarah Mitchell",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Github, url: "https://github.com" }
              ]
            },
            {
              id: "3",
              name: "Marcus Johnson",
              role: "VP of Strategy",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765798273194-ay7y6epu.jpg",
              imageAlt: "Marcus Johnson",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "4",
              name: "Lisa Wang",
              role: "Head of Product",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765798274205-238ci4xn.jpg",
              imageAlt: "Lisa Wang",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSeven
          title="What Our Clients Say"
          description="Real feedback from companies we've partnered with"
          tag="Testimonials"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              companyName: "FinTech Solutions Inc.",
              companyLogo: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765798279946-c0cfb76n.jpg",
              companyLogoAlt: "FinTech Solutions logo",
              quote: "TechFlow transformed our payment infrastructure. Their AI-powered fraud detection reduced our losses by 60% in the first quarter. Truly exceptional team.",
              author: "James Rodriguez, CTO"
            },
            {
              id: "2",
              companyName: "E-Commerce Global",
              companyLogo: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765798281126-dm8kjrd3.jpg",
              companyLogoAlt: "E-Commerce Global logo",
              quote: "From initial consultation to production deployment, TechFlow handled everything with professionalism and expertise. Our platform now handles 10x the traffic seamlessly.",
              author: "Emma Thompson, VP Operations"
            },
            {
              id: "3",
              companyName: "HealthTech Innovations",
              companyLogo: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765798282328-8m8g3363.jpg",
              companyLogoAlt: "HealthTech Innovations logo",
              quote: "Their machine learning solution helped us predict patient outcomes with 95% accuracy. A game-changer for our clinical operations and patient care.",
              author: "Dr. Priya Patel, Medical Director"
            },
            {
              id: "4",
              companyName: "Enterprise Systems Corp.",
              companyLogo: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765798284286-bimdo9hw.jpg",
              companyLogoAlt: "Enterprise Systems Corp logo",
              quote: "The team at TechFlow rebuilt our legacy systems without a single day of downtime. Remarkable execution and technical excellence throughout the project.",
              author: "Robert Williams, SVP Technology"
            },
            {
              id: "5",
              companyName: "Digital Media Labs",
              companyLogo: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765798285633-jw2i9xeo.jpg",
              companyLogoAlt: "Digital Media Labs logo",
              quote: "Beyond coding, TechFlow understood our business strategy. They delivered a mobile app that increased user engagement by 300%. Highly recommended.",
              author: "Sofia Martinez, Founder"
            },
            {
              id: "6",
              companyName: "Cloud Services Pro",
              companyLogo: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765798287448-2l69k1n1.jpg",
              companyLogoAlt: "Cloud Services Pro logo",
              quote: "Their DevOps expertise helped us achieve zero-downtime deployments. The CI/CD pipeline they built is still our gold standard. Exceptional partners.",
              author: "Michael Chen, Engineering Lead"
            }
          ]}
          variant="card"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofThree
          title="Trusted by Industry Leaders"
          description="Partnering with the world's most innovative companies"
          tag="Partners"
          tagIcon={Handshake}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765798279946-c0cfb76n.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765798281126-dm8kjrd3.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765798282328-8m8g3363.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765798284286-bimdo9hw.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765798285633-jw2i9xeo.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765798287448-2l69k1n1.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765798289078-h5p8oulw.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765798290813-qpn88bdh.jpg"
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          speed={40}
          topMarqueeDirection="left"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about working with us"
          tag="Help"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What technologies do you specialize in?",
              content: "We specialize in modern cloud platforms (AWS, Azure, GCP), AI/ML frameworks, full-stack web development, mobile app development, and enterprise DevOps solutions. Our team stays current with the latest industry standards and best practices."
            },
            {
              id: "2",
              title: "How do you handle project management?",
              content: "We use Agile methodologies with regular sprints, transparent communication, and collaborative planning. You'll have dedicated project managers and weekly syncs to ensure alignment and quick resolution of any challenges."
            },
            {
              id: "3",
              title: "What is your typical engagement model?",
              content: "We offer flexible engagement models: fixed-price projects for well-defined scopes, time & materials for evolving requirements, and retainer partnerships for ongoing support. We customize the model to fit your business needs."
            },
            {
              id: "4",
              title: "How do you ensure code quality?",
              content: "We implement comprehensive testing strategies (unit, integration, end-to-end), code reviews, continuous integration pipelines, and security audits. Our standards meet or exceed industry best practices for production systems."
            },
            {
              id: "5",
              title: "What about post-launch support?",
              content: "We provide comprehensive post-launch support including monitoring, bug fixes, performance optimization, and feature enhancements. We offer various SLA levels based on your critical system requirements."
            },
            {
              id: "6",
              title: "How long does a typical project take?",
              content: "Timeline depends on complexity and scope. A simple web application might take 2-3 months, while enterprise platforms can span 6-12 months. During initial consultation, we provide detailed timelines and milestones."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765798292736-bf1urhg4.jpg"
          imageAlt="Customer support team"
          mediaPosition="left"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to transform your business with innovative technology? Let's discuss your vision and create something remarkable together."
          animationType="entrance-slide"
          buttons={[
            { text: "Schedule a Call", href: "#" },
            { text: "Send a Message", href: "#" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765798294189-8wzpd94x.jpg"
          imageAlt="Technology and innovation background"
          columns={[
            {
              title: "Product",
              items: [
                { label: "Services", href: "services" },
                { label: "Pricing", href: "pricing" },
                { label: "About", href: "about" },
                { label: "Team", href: "team" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "Blog", href: "blog" },
                { label: "Careers", href: "careers" },
                { label: "Contact", href: "contact" },
                { label: "Partners", href: "partners" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Documentation", href: "docs" },
                { label: "Support", href: "support" },
                { label: "FAQ", href: "faq" },
                { label: "Community", href: "community" }
              ]
            }
          ]}
          logoText="TechFlow"
          copyrightText="© 2025 TechFlow. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
