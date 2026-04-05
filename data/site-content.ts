import { FaqItem } from "@/components/sections/faq-accordion";
import { Testimonial } from "@/components/cards/testimonial-card";

export const testimonials: Testimonial[] = [
  {
    name: "Emily R.",
    country: "United Kingdom",
    text: "Everything felt seamless from airport pickup to our safari lodge. Sri Lanka exceeded every expectation, and the itinerary was perfectly paced."
  },
  {
    name: "Daniel & Sofia",
    country: "Germany",
    text: "We booked the honeymoon package and loved every detail. Beautiful villas, excellent guides, and incredible food throughout the trip."
  },
  {
    name: "Mina K.",
    country: "Australia",
    text: "Our family had beach time, culture, and wildlife in one week without feeling rushed. Professional team and truly local expertise."
  }
];

export const faqs: FaqItem[] = [
  {
    q: "When is the best time to visit Sri Lanka?",
    a: "Sri Lanka is a year-round destination. South and west coasts are best from November to April, while the east coast is ideal from May to September."
  },
  {
    q: "Do you arrange visas and airport transfers?",
    a: "Yes. We provide clear ETA visa guidance, pre-arrival support, and private airport transfers for all packages."
  },
  {
    q: "Can I customize every part of the itinerary?",
    a: "Absolutely. Each journey is tailored to your interests, travel dates, and preferred comfort level."
  },
  {
    q: "Is Sri Lanka suitable for family travel?",
    a: "Yes. We design family-friendly itineraries with safe transport, flexible pacing, and activities for different age groups."
  }
];

export const trustIndicators = [
  { title: "Local Experts", description: "Island-based specialists with first-hand destination knowledge." },
  { title: "Custom Tours", description: "Every itinerary is built from scratch around your travel style." },
  { title: "24/7 Support", description: "Always-on assistance from planning to your return flight." }
];
