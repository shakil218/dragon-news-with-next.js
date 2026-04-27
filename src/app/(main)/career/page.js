export const metadata = {
  title: "Careers | Dragon News",
  description: "Explore career opportunities at Dragon News and join our independent newsroom of journalists, editors, and storytellers.",
  keywords: ["careers", "jobs", "Dragon News", "journalism careers", "join our newsroom"],
};

import Link from "next/link";
import {
  FaPenNib,
  FaGlobe,
  FaUsers,
  FaRocket,
  FaEdit,
  FaSearch,
} from "react-icons/fa";

const CareerPage = () => {
  const jobs = [
    {
      title: "Junior Journalist",
      type: "Full-time",
      desc: "Cover breaking news and assist senior reporters in field reporting.",
      icon: <FaPenNib />,
    },
    {
      title: "Content Editor",
      type: "Remote",
      desc: "Edit and review articles ensuring accuracy and editorial standards.",
      icon: <FaEdit />,
    },
    {
      title: "Investigative Reporter",
      type: "Full-time",
      desc: "Deep-dive reporting on political, social, and economic issues.",
      icon: <FaSearch />,
    },
  ];

  return (
    <div className="bg-base-100 text-base-content">
      {/* HERO */}
      <section className="text-center py-16 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Join The Dragon News
        </h1>

        <p className="mt-4 text-red-600 font-medium">
          Journalism Without Fear or Favour
        </p>

        <p className="mt-6 text-gray-500">
          We are building a fearless newsroom that values truth, integrity, and
          impact. If you&apos;re passionate about storytelling, we want you on our
          team.
        </p>
      </section>

      {/* WHY JOIN */}
      <section className="py-12 px-4 max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center">
        <div className="p-6 bg-base-200 rounded-lg shadow">
          <FaPenNib className="text-3xl text-red-600 mx-auto" />
          <h3 className="font-semibold mt-3">Creative Freedom</h3>
        </div>

        <div className="p-6 bg-base-200 rounded-lg shadow">
          <FaGlobe className="text-3xl text-red-600 mx-auto" />
          <h3 className="font-semibold mt-3">Global Reach</h3>
        </div>

        <div className="p-6 bg-base-200 rounded-lg shadow">
          <FaUsers className="text-3xl text-red-600 mx-auto" />
          <h3 className="font-semibold mt-3">Strong Team</h3>
        </div>

        <div className="p-6 bg-base-200 rounded-lg shadow">
          <FaRocket className="text-3xl text-red-600 mx-auto" />
          <h3 className="font-semibold mt-3">Fast Growth</h3>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="py-16 px-4 bg-base-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Open Positions</h2>
          <p className="text-gray-500 mt-2">
            Apply now and become part of our newsroom.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">
            {jobs.map((job, i) => (
              <div
                key={i}
                className="card bg-base-100 shadow-md p-6 hover:shadow-xl transition"
              >
                {/* ICON */}
                <div className="text-red-600 text-3xl mb-3">{job.icon}</div>

                <h3 className="font-bold text-lg">{job.title}</h3>
                <p className="text-sm text-red-600 mt-1">{job.type}</p>
                <p className="text-sm text-gray-500 mt-3">{job.desc}</p>

                {/* APPLY BUTTON */}
                <button
                  className="btn btn-sm btn-primary bg-violet-600 border-none mt-4"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center">
          Send Your Application
        </h2>

        <form className="mt-10 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered w-full"
          />

          <input
            type="text"
            placeholder="Portfolio / Website (optional)"
            className="input input-bordered w-full"
          />

          <textarea
            placeholder="Why do you want to join?"
            className="textarea textarea-bordered w-full"
            rows={5}
          ></textarea>

          <button className="btn btn-primary bg-violet-600 border-none w-full">Submit Application</button>
        </form>

        <p className="text-xs text-gray-400 text-center mt-4">
          We usually respond within 3–5 working days.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-4 bg-base-200">
        <h2 className="text-2xl font-bold">Not ready yet?</h2>

        <p className="text-gray-500 mt-2">
          Explore our newsroom before applying.
        </p>

        <Link href="/">
          <button className="btn btn-outline text-violet-600 mt-4">Back to Home</button>
        </Link>
      </section>
    </div>
  );
};

export default CareerPage;
