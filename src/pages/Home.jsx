import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const userName = localStorage.getItem("userName") || "Hi there";
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <main className="bg-zinc-950 text-white min-h-screen">

        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="text-zinc-400 text-sm uppercase tracking-widest mb-4">
            Welcome back, {userName} 👋
          </h2>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Explore the World of{" "}
            <span className="bg-gradient-to-r from-white via-red-500 to-red-800 bg-clip-text text-transparent">
              Technology
            </span>
          </h1>

          <p className="text-zinc-400 max-w-2xl mx-auto mb-10">
            From building interactive user interfaces to training intelligent
            algorithms — master the tools that power the digital age.
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate("/learning")}
              className="bg-zinc-100 text-black px-8 py-3 rounded-full font-bold text-sm hover:bg-red-600 hover:text-white transition"
            >
              Start Learning
            </button>

            <button
              onClick={() => navigate("/learning")}
              className="border border-zinc-700 px-8 py-3 rounded-full text-sm text-zinc-300 hover:border-red-500 hover:text-white transition"
            >
              Explore Subjects
            </button>
          </div>
        </section>

        {/* INTRO */}
        <section className="border-t border-zinc-900">
          <div className="max-w-6xl mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl font-bold mb-4">Master Modern Skills</h2>
            <p className="text-zinc-400 max-w-3xl mx-auto">
              Our curriculum focuses on the most in-demand technologies in the
              industry. Whether you want to build the front-end of a website or
              dive into complex data patterns, we have you covered.
            </p>
          </div>
        </section>

        {/* SUBJECTS */}
        <section className="border-t border-zinc-900">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Available Subjects
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "JavaScript",
                  desc: "Master the logic of the web and build dynamic experiences.",
                },
                {
                  title: "React",
                  desc: "Create modern, component-based user interfaces.",
                },
                {
                  title: "Python",
                  desc: "Learn automation, backend development, and AI basics.",
                },
                {
                  title: "HTML / CSS",
                  desc: "Design and structure beautiful, responsive websites.",
                },
                {
                  title: "Machine Learning",
                  desc: "Teach machines to learn and predict using data.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-red-500 transition"
                >
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY LEARN */}
        <section className="border-t border-zinc-900">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold mb-8">Why Study These Fields?</h2>

            <ul className="space-y-4 text-zinc-400 list-disc list-inside">
              <li>Build real-world applications</li>
              <li>Understand modern development workflows</li>
              <li>Create intelligent and scalable systems</li>
              <li>Prepare for jobs and technical interviews</li>
              <li>Develop future-proof skills</li>
            </ul>
          </div>
        </section>

        {/* LEARNING PATH */}
        <section className="border-t border-zinc-900">
          <div className="max-w-6xl mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl font-bold mb-4">Start Your Journey</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
              Begin with fundamentals, practice with examples, and build
              projects step by step with AI guidance.
            </p>

            <button
              onClick={() => navigate("/learning")}
              className="bg-zinc-100 text-black px-10 py-3 rounded-full font-bold text-sm hover:bg-red-600 hover:text-white transition"
            >
              Go to Learning
            </button>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-zinc-900">
          <div className="max-w-6xl mx-auto px-6 py-24 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Build Something Real?
            </h2>
            <p className="text-zinc-400 mb-8">
              Learn faster, smarter, and with confidence.
            </p>

            <button
              onClick={() => navigate("/learning")}
              className="bg-gradient-to-r from-red-500 to-red-800 px-12 py-4 rounded-full font-bold text-sm hover:opacity-90 transition"
            >
              Get Started Today
            </button>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default Home;
