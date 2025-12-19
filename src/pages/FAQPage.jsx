import React, { useState } from "react";

const faqLinks = {
  tracks: "https://pharmatech.helixconferences.com/pharmaceutical-conference-tracks/",
  abstractSubmission: "https://pharmatech.helixconferences.com/abstractsubmission/",
  schedule: "https://pharmatech.helixconferences.com/pharmaceutical-event-schedule",
  email: "mailto:hello@helixconferences.com",
};


export const faqData = [
  {
    question: "What is PharmaTech 2026?",
    answer:
      "PharmaTech 2026, officially known as the “Global Pharmaceutical Conference” (PharmaTech-2026), is a leading International Pharma conference organized by Helix Conferences. The event gathers Pharma Professionals, Researchers, and Industry Experts to explore innovations across the pharmaceutical landscape.",
  },
  {
    question: "When and where will PharmaTech 2026 take place?",
    answer: "The conference will be held virtually on June 10, 2026.",
  },
  {
    question: "What are the highlights of PharmaTech 2026?",
    answer:
      "Networking with industry leaders, interactive workshops, and exhibitions showcasing pharma innovations and technologies.",
  },
  {
    question: "What conference tracks are featured at PharmaTech 2026?",
    answer: (
      <>
        You can view the full list of tracks at{" "}
        <a href={faqLinks.tracks} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          Helix Conferences Tracks
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I showcase my products or explore sponsorship options?",
    answer: (
      <>
        To showcase your products or discuss sponsorship, contact us directly at{" "}
        <a href={faqLinks.email} className="text-blue-600 underline">
          hello@helixconferences.com
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I submit an abstract for PharmaTech 2026?",
    answer: (
      <>
        You can submit your abstract{" "}
        <a href={faqLinks.abstractSubmission} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "How will I receive my invoice?",
    answer:
      "Invoices will be sent to the email provided during registration. Please check your inbox and spam folder.",
  },
  {
    question: "What materials will I receive during the event?",
    answer:
      "You’ll receive a conference kit with a name badge, program guide, and session booklet upon joining.",
  },
  {
    question: "How long can I present my topic?",
    answer:
      "Presentation slots typically range from 15–20 minutes. Exact timing will be confirmed after abstract approval.",
  },
  {
    question: "Who will be attending PharmaTech 2026?",
    answer:
      "This event attracts pharma professionals, researchers, academicians, and industry leaders globally.",
  },
  {
    question: "How many people usually attend the conference?",
    answer: "We expect over 80 attendees, including speakers, delegates, and exhibitors.",
  },
  {
    question: "Can I register for multiple speaking sessions?",
    answer:
      "Yes, if each session is on a distinct topic relevant to the tracks. Submit a separate abstract for each.",
  },
  {
    question: "Are keynote speaking opportunities available?",
    answer:
      "Yes, keynote slots are available. Indicate your interest in the abstract submission form.",
  },
  {
    question: "What is expected of speakers?",
    answer:
      "Speakers present relevant topics, offer insights, and engage participants. Guidelines will follow upon selection.",
  },
  {
    question: "Is there a fee to participate as a speaker or attendee?",
    answer:
      "Yes, all participants must pay the registration fee. See 'Buy A Ticket' on our website for details.",
  },
  {
    question: "How can I view the event schedule?",
    answer: (
      <>
        The schedule will be available on the website. Download it{" "}
        <a href={faqLinks.schedule} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "Can I preview the session list before the event?",
    answer:
      "Yes, a complete agenda with sessions and speaker details will be posted prior to the event.",
  },
  {
    question: "Can I purchase tickets before the event day?",
    answer:
      "Yes, but we recommend registering early. Limited tickets may be available one day prior to the event.",
  },
  {
    question: "How can I get assistance with accommodation?",
    answer: (
      <>
        Contact us directly at{" "}
        <a href={faqLinks.email} className="text-blue-600 underline">
          hello@helixconferences.com
        </a>{" "}
        for support with bookings.
      </>
    ),
  },
];


const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300 mb-4">
          <button
            className="w-full text-left py-4 px-2 font-medium text-lg flex justify-between items-center"
            onClick={() => toggle(index)}
          >
            {item.question}
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-700">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
