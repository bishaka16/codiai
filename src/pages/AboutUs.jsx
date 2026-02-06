import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <main className="bg-zinc-950 text-white min-h-screen">

        {/* HEADER */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold mb-4">About CodiAI</h1>
          <p className="text-zinc-400 max-w-3xl">
            CodiAI is an intelligent learning platform designed to help developers
            understand, practice, and master modern technologies with clarity
            and confidence.
          </p>
        </section>

        {/* PROJECT VALUE */}
        <section className="border-t border-zinc-900 bg-zinc-950">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold mb-6">
              What This Project Gives You
            </h2>

            <ul className="space-y-4 text-zinc-400 list-disc list-inside max-w-3xl">
              <li>Clear, beginner-friendly explanations of complex topics</li>
              <li>Real-world examples and practical use cases</li>
              <li>AI-powered personalized learning assistance</li>
              <li>Structured answers instead of confusing documentation</li>
              <li>A single platform to learn multiple technologies</li>
            </ul>
          </div>
        </section>

                       {/* VISION */}
        <section className="border-t border-zinc-900 bg-zinc-950">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold mb-8">Our Vision</h2>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-red-500 transition">
              <p className="text-zinc-400 mb-6 max-w-3xl">
                We envision a future where learning technology is no longer
                overwhelming or fragmented. CodiAI aims to become a trusted
                companion for learners by transforming complex concepts into
                simple, meaningful knowledge.
              </p>

              <p className="text-zinc-400 mb-6 max-w-3xl">
                Our goal is to empower students and developers to think clearly,
                build confidently, and grow continuously in an ever-evolving
                tech landscape.
              </p>

              <ul className="space-y-3 text-zinc-400 list-disc list-inside">
                <li>Encourage strong problem-solving and logical thinking</li>
                <li>Bridge the gap between theory and real-world applications</li>
                <li>Support lifelong learning with AI-assisted guidance</li>
                <li>Create a calm, focused, distraction-free learning space</li>
              </ul>
            </div>
          </div>
        </section>



      </main>

      <Footer />
    </>
  );
};

export default About;

