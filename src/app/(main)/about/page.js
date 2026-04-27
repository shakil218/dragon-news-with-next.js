export const metadata = {
  title: "About | Dragon News",
  description: "Learn about Dragon News, our mission, values, editorial principles, and the team driving fearless journalism.",
  keywords: ["about", "dragon news", "journalism", "mission", "team", "newsroom"],
};

import Image from "next/image";
import Link from "next/link";
import { FaBullseye, FaEye, FaShieldAlt } from "react-icons/fa";
import team from "@/data/journalist.json";

const AboutPage = () => {
  return (
    <div className="bg-base-100 text-base-content">
      {/* HERO */}
      <section className="text-center py-16 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          About The Dragon News
        </h1>
        <p className="mt-4 text-lg text-red-600 font-medium">
          Journalism Without Fear or Favour
        </p>
        <p className="mt-6 text-base text-gray-500">
          The Dragon News is an independent digital newsroom committed to
          delivering accurate, unbiased, and impactful journalism. We believe
          truth should be accessible to everyone — without influence, without
          fear.
        </p>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="py-12 px-4 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="card bg-base-200 shadow-md p-6 text-center">
          <FaBullseye className="text-3xl text-red-600 mx-auto mb-3" />
          <h3 className="text-xl font-bold">Our Mission</h3>
          <p className="text-sm text-gray-500 mt-2">
            Deliver truth-driven journalism that informs, educates, and empowers
            society.
          </p>
        </div>

        <div className="card bg-base-200 shadow-md p-6 text-center">
          <FaEye className="text-3xl text-red-600 mx-auto mb-3" />
          <h3 className="text-xl font-bold">Our Vision</h3>
          <p className="text-sm text-gray-500 mt-2">
            Become a globally trusted news platform known for integrity and
            fearless reporting.
          </p>
        </div>

        <div className="card bg-base-200 shadow-md p-6 text-center">
          <FaShieldAlt className="text-3xl text-red-600 mx-auto mb-3" />
          <h3 className="text-xl font-bold">Our Values</h3>
          <p className="text-sm text-gray-500 mt-2">
            Accuracy, independence, transparency, and accountability in every
            story.
          </p>
        </div>
      </section>

      {/* EDITORIAL PRINCIPLES */}
      <section className="py-16 px-4 bg-base-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Editorial Principles</h2>
          <p className="text-gray-500 mt-4">
            Our newsroom follows strict editorial standards to ensure
            credibility and trust.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-10 text-left">
            {[
              "Accuracy First — Every fact is verified before publication.",
              "Independence — Free from political or corporate influence.",
              "Transparency — We correct mistakes openly and quickly.",
              "Accountability — We stand by our reporting.",
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-lg bg-base-100 shadow">
                <p className="text-sm text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Our Impact</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {[
            { value: "500+", label: "Articles Published" },
            { value: "50K+", label: "Monthly Readers" },
            { value: "20+", label: "Journalists" },
            { value: "10+", label: "Countries Covered" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold text-red-600">{stat.value}</h3>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 px-4 bg-base-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Meet Our Team</h2>
          <p className="text-gray-500 mt-4">
            A passionate group of journalists and editors behind every story.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            {team.map((member) => (
              <div key={member.id} className="card bg-base-100 shadow-md p-6">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="mt-4 font-semibold">{member.name}</h4>
                <p className="text-sm text-red-600">{member.role}</p>
                <p className="text-sm text-gray-500 mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold">Join Our Newsroom</h2>
        <p className="text-gray-500 mt-4">
          Help us shape the future of independent journalism.
        </p>

        <Link href="/career">
          <button className="btn bg-violet-600 text-white mt-6">View Careers</button>
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
