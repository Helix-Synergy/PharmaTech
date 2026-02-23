import React from "react";
import about_img from "../assets/about_img.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  // const about_points = [
  //   "Explore how new technologies can enhance patient care and streamline nursing practices.",
  //   "Delve into personalized approaches to gynecology and obstetrics care.",
  //   "Address the importance of early detection and treatment of cancer.",
  //   "Discuss the latest developments in women's health, reproductive medicine, Neonatal care etc.",
  // ];

  return (
    <div className="flex flex-col md:flex-row gap-2 md:h-[80vh] bg-pimary items-center justify-center p-4 md:px-12 md:py-4">
      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src={about_img}
          alt="Dental Conference 2026"
          loading="lazy"
          className="h-[80%] md:max-h-[100%] w-auto md:w-[400px] md:mx-16 rounded-2xl object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col w-full md:w-2/3">
        <h1 className="text-xl md:text-3xl font-bold my-2">
          <span className="text-one">Welcome to the Global Hub for</span>{" "}
          Pharmaceutical Innovation
        </h1>
        <p className="text-base my-2 text-justify">
          Step into the future of Medicine at the Advanced Pharmaceutical Sciences Forum
          2026 a premier gathering of Pharmaceutical experts, Clinical
          Researchers, Policy-makers, and Innovators. This global platform hosts
          the World Pharmacology Summit and a series of{" "}
          <Link
            className="text-accent font-bold"
            target="_blank"
            to="https://helixconferences.com/blog.php"
          >
            Upcoming Pharmaceutical Conferences
          </Link>{" "}
          that spotlight critical advances in Drug discovery, Biotech,
          regulatory Science, and Global Health.
        </p>
        <blockquote className="italic text-one my-2 border-l-4 border-one pl-4">
          “Innovating Healthcare, Empowering Global Pharma.”
        </blockquote>

        <Link to="/about-global-pharmaceutical-conclave">
          <button className="flex bg-one text-primary px-6 md:px-8 py-2 my-4 rounded-full text-sm md:text-base">
            Know More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
