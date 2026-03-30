import React, { useEffect, useState } from "react";
import { Sparkle } from "lucide-react";


// import pharmacology from "../assets/tracks/pharmacology.jpg";
// import pharmaceutics from "../assets/tracks/pharmaceutics.jpg";
// import pharmaBiotechnology from "../assets/tracks/pharmaBiotechnology.jpg";
import pharmacognosy from "../assets/tracks/pharmacognosy.jpg";
import pharmacovigilance from "../assets/tracks/pharmacovigilance.jpg";
// import regulatoryAffairs from "../assets/tracks/regulatoryAffairs.jpg";
import traditionalMedicine from "../assets/tracks/traditionalMedicine.jpg";
import pharmaChemistry from "../assets/tracks/pharmaChemistry.jpg";
import pharmaAnalysis from "../assets/tracks/pharmaAnalysis.jpg";
import clinicalResearch from "../assets/tracks/clinicalResearch.jpg";
import drugDesigning from "../assets/tracks/drugDesigning.jpg";
import clinicalPathology from "../assets/tracks/clinicalPathology.jpg";
import pharmacotherapeutics from "../assets/tracks/pharmacotherapeutics.jpg";
import precisionMedicine from "../assets/tracks/precisionMedicine.jpg";
import pharmacoepidemiology from "../assets/tracks/pharmacoepidemiology.jpg";
import curativeTherapeutics from "../assets/tracks/curativeTherapeutics.jpg";
import pharmacoEconomics from "../assets/tracks/pharmacoEconomics.jpg";
import pharmaEthics from "../assets/tracks/pharmaEthics.jpg";
import { Link } from "react-router-dom"
export const tracks = [
  {
    image: pharmacognosy,
    title: "Pharmacognosy",
    subtitle: "Natural Drug Sources",
    description:
      <>
        <Link to="/world-pharmaceutical-summit-orators" className="hover:text-one hover:decoration-accent
             transition-colors duration-300"> Pharmacognosy</Link>  studies Medicinal compounds derived from natural sources like Plants, Bacteria, and Marine organisms. It explores the Chemical, Biological, and therapeutic properties of Natural products. This discipline supports the discovery of new Drugs by investigating Traditional remedies and Bioactive substances of Natural origin.
      </>
  },
  {
    image: pharmacovigilance,
    title: "Pharmacovigilance",
    subtitle: "Drug Safety Monitoring",
    description:
      <>
        <Link to="/world-pharmaceutical-summit-orators" className="hover:text-one hover:decoration-accent
             transition-colors duration-300"> Pharmacovigilance</Link> involves monitoring, detecting, and assessing adverse effects of Pharmaceutical Drugs. It ensures Medication safety by identifying risks like Side effects, Overdose, and Drug misuse. This track is critical in maintaining Public health, reducing harm, and guiding Regulatory decisions throughout a Drug’s lifecycle.
      </>
  },
  {
    image: traditionalMedicine,
    title: "Traditional Medicine",
    subtitle: "Ancient Healing Practices",
    description:
      <>
        <Link to="/pharmaceutical-event-schedule" className="hover:text-one hover:decoration-accent
             transition-colors duration-300" >Traditional Medicine</Link> draws from Centuries-old Cultural practices using Herbs, Minerals, and Spiritual therapies. It integrates Holistic healing to prevent and treat Diseases naturally. This track promotes Alternative Medicine's role in Modern Healthcare by studying Traditional Diagnostic methods and Plant-based Therapeutic systems across Global cultures.
      </>
  },
  {
    image: pharmaChemistry,
    title: "Pharmaceutical Chemistry",
    subtitle: "Drug Molecule Design",
    description:
      <>
        <Link to="/venue" className="hover:text-one hover:decoration-accent
             transition-colors duration-300">Pharmaceutical Chemistry</Link> blends Organic Chemistry, Biochemistry, and Pharmacology to develop and optimize Drug compounds. It plays a key role in Drug discovery, Quality control, and Formulation. This track emphasizes creating safe, Stable, and Effective Medications with desired Therapeutic outcomes for diverse Patient populations.
      </>
  },
  {
    image: pharmaAnalysis,
    title: "Pharmaceutical Analysis",
    subtitle: "Drug Quality Testing",
    description:
      "Pharmaceutical Analysis uses Analytical techniques to Identify, Measure, and Ensure the Purity and Composition of Drugs. It supports Quality control, Structural characterization, and Regulatory compliance. This track ensures Medications meet Safety and Efficacy standards throughout Manufacturing and Post-market surveillance processes."
  }
  ,
  {
    image: clinicalResearch,
    title: "Clinical Research",
    subtitle: "Trial and Evaluation",
    description:
      <>
        <Link to="/" className="hover:text-one hover:decoration-accent
             transition-colors duration-300" >Clinical Research</Link>investigates new Drugs through Preclinical and Clinical trial phases. It evaluates Safety, Efficacy, and Dosage in Human populations. This track emphasizes Protocol development, Data analysis, and Regulatory compliance, playing a Pivotal role in Translating Scientific discoveries into Approved Therapeutic interventions.
      </>
  },
  {
    image: drugDesigning,
    title: "Drug Designing",
    subtitle: "Targeted Molecule Creation",
    description:
      <>
        <Link to="/venue" className="hover:text-one hover:decoration-accent
             transition-colors duration-300" >Drug</Link> Designing involves creating Therapeutic molecules that interact with Biological targets like Enzymes or Receptors. Using Computational modeling, Molecular docking, and Structure-activity relationships, this track enables Researchers to optimize Drug Efficacy and minimize Side effects through Precise Chemical structure modifications.
      </>
  },
  {
    image: clinicalPathology,
    title: "Clinical Pathology",
    subtitle: "Diagnostic Sample Analysis",
    description:
      <>
        <Link to="/pharmaceutical-event-schedule" className="hover:text-one hover:decoration-accent
             transition-colors duration-300">Clinical Pathology</Link> analyzes Bodily fluids and Tissues to Diagnose Diseases and Monitor Drug effects. It provides Essential data for Evaluating Treatment safety and Effectiveness. This track links Pharmaceutical sciences with Diagnostic Medicine, guiding Personalized Treatment strategies and Improving Patient care outcomes with proper care.
      </>
  },
  {
    image: pharmacotherapeutics,
    title: "Pharmacotherapeutics",
    subtitle: "Disease-Focused Treatment",
    description:
      <>
        <Link to="/about-global-pharmaceutical-conclave/" className="hover:text-one hover:decoration-accent
             transition-colors duration-300">Pharmacotherapeutics</Link> focuses on using Drugs to treat Diseases effectively. It integrates Pharmacology and Clinical care to Select optimal Medications, Dosages, and Regimens. This track emphasizes Personalized Treatment planning, Monitoring Therapeutic outcomes, and Minimizing Side effects to Enhance Patient well-being and Clinical success.
      </>
  },
  {
    image: precisionMedicine,
    title: "Precision Medicine",
    subtitle: "Tailored Drug Therapy",
    description:
      "Precision Medicine uses Genetic, Environmental, and Lifestyle data to Personalize Treatments. In Pharmacy, it Enhances Drug selection and Dosage accuracy, Reducing Adverse effects and Maximizing Efficacy. This track supports Innovations in Oncology, Cardiology, and Rare Diseases, Transforming One-size-fits-all care into Individualized Therapeutic solutions."
  },
  {
    image: pharmacoepidemiology,
    title: "Pharmacoepidemiology",
    subtitle: "Drug Use in Populations",
    description:
      <>
        <Link to="https://helixconferences.com/buy-a-ticket" className="hover:text-one hover:decoration-accent
             transition-colors duration-300">Pharmacoepidemiology </Link>studies how Drugs are used and their Effects across Populations. It evaluates Drug Safety, Usage patterns, and Health outcomes, Integrating Pharmacology and Epidemiology. This track provides Essential data for Improving Public Health, Guiding Regulatory decisions, and Supporting Safe, Effective Medication practices Globally.
      </>
  },
  {
    image: curativeTherapeutics,
    title: "Curative Therapeutics",
    subtitle: "Illness-Curing Treatments",
    description:
      "Curative Therapeutics aims to Eliminate Diseases at their Source, Offering Complete Recovery rather than Symptom control. This track explores Treatments like Antibiotics, Antivirals, and Cancer therapies that Target Root causes. Pharmacists ensure these Therapies are used Effectively and Safely to achieve Optimal Health outcomes."
  },
  {
    image: pharmacoEconomics,
    title: "Pharmaco Economics",
    subtitle: "Drug Cost Effectiveness",
    description:
      <>
        <Link to="/venue" className="hover:text-one hover:decoration-accent
             transition-colors duration-300">Pharmaco Economics</Link> assesses the Economic impact of Medications by Comparing Costs to Clinical outcomes. It Informs Policy decisions, Resource allocation, and Treatment prioritization. This track supports Sustainable Healthcare by Evaluating Drug value, Optimizing Spending, and Improving Patient access to Affordable, Effective Therapies.
      </>
  },
  {
    image: pharmaEthics,
    title: "Pharma Ethics",
    subtitle: "Ethical Drug Practices",
    description:
      <>
        <Link to="/" className="hover:text-one hover:decoration-accent
             transition-colors duration-300">Pharmaceutical Ethics</Link> ensures that Drug Development, Distribution, and Patient care follow Moral and Legal standards. This track emphasizes Informed consent, Patient rights, Research integrity, and Equitable access. Pharmacists and Researchers are Guided by Ethical principles to Prioritize Safety, Transparency, and Trust in Healthcare.
      </>
  },
];




const StaticTracks = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0px rgba(44, 211, 35, 0.2);
          }
          50% {
            box-shadow: 0 0 18px 6px rgb(122,179,38);
          }
        }

        .animate-pulseShadow {
          animation: pulseShadow 3s ease-in-out infinite;
        }

        .transition-custom {
          transition: all 0.8s ease-in-out;
        }
      `}</style>

      <div className="relative mt-14">
        {/* Fixed Top-Right Button */}
        <div
          className="fixed top-[22%] right-[1%] z-50 transition-custom"
        >
          <a
            href="/abstract-submission"
            aria-label="Submit abstract"
            className="bg-one rounded-full text-white text-sm font-medium px-3 py-3 select-none transition-transform hover:scale-110 animate-pulseShadow"
          >
            Submit Abstract
          </a>
        </div>

        {/* Track Content */}
        <div className="container mx-auto px-4 py-10 space-y-20 flex flex-col items-center">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="relative w-[80%] flex flex-col md:flex-row items-stretch md:space-x-6"
            >
              <div className="flex-shrink-0 bg-white border shadow-xl rounded-2xl p-2 w-full md:w-1/3">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white border shadow-xl rounded-2xl p-6 w-full md:w-2/3 mt-12 md:mt-0 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-1 text-one flex items-center gap-2">
                  <Sparkle className="fill-one" />
                  {track.title}
                </h2>
                <h3 className="text-xl text-gray-600 font-semibold mb-3">
                  {track.subtitle}
                </h3>
                <p className="text-md text-gray-800 leading-relaxed text-justify">
                  {track.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StaticTracks;