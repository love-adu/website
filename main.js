import { useState } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Github, Mail } from 'lucide-react'

export default function PersonalWebsite() {
  const [showAbout, setShowAbout] = useState(false)

  const boldColors = ['#e91e63', '#2196f3', '#607d8b', '#9c27b0']
  const pastelColors = ['#f8bbd0', '#bbdefb', '#c8e6c9', '#ffe0b2', '#d1c4e9', '#b2ebf2']

  const projects = [
    {
      title: 'Algorithmic Amplification and Filter Bubbles',
      desc: 'OutVote HQ Research — analyzed how digital media algorithms shape voter outreach, engagement, and political discourse.',
      tags: ['Research', 'Media Studies', 'Algorithms']
    },
    {
      title: 'Deception Divide: The Role of Political Disinformation in Marginalized Voter Outcomes',
      desc: 'Honors Transfer Council of California — examined how disinformation undermines civic engagement using mapping and social media data (April 2025, UC Riverside).',
      tags: ['Disinformation', 'Civic Engagement', 'Social Media']
    },
    {
      title: 'A Rhetorical Analysis on Racially Bioessentialist Sports Media Coverage',
      desc: 'National Conference of Undergraduate Research — identified racially biased portrayals of athletes and proposed equitable reporting frameworks (Dec 2024).',
      tags: ['Rhetoric', 'Race', 'Sports Media']
    },
    {
      title: 'Checkpoint',
      desc: 'A fact-checking browser extension that combats misinformation. Recognized in UC Berkeley’s Big Ideas Contest.',
      tags: ['Browser Extension', 'Fact Checking', 'Big Ideas']
    },
    {
      title: 'GLSEN',
      desc: 'National Policy Cohort — wrote congressional testimony against HB6 and served as Hollister Pride campaign advisor to advance LGBTQ+ youth advocacy.',
      tags: ['Policy', 'LGBTQ+', 'Advocacy']
    },
    {
      title: 'AFFIRM Undergraduate Legal Clinic',
      desc: 'LGBTQ+ Name & Gender Change Clinic at UC Berkeley — provides free legal aid and advocacy for trans and nonbinary communities.',
      tags: ['Legal', 'LGBTQ+', 'Advocacy']
    },
    {
      title: 'Oasis Legal Research Volunteer',
      desc: 'Researched LGBTQ+ immigration services and asylum advocacy projects, including PURCOL, to enhance equitable legal access.',
      tags: ['Legal Research', 'Immigration', 'LGBTQ+']
    }
  ]

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-gray-900">
      <header className="bg-white py-6 shadow-sm flex justify-between items-center px-12 border-b border-gray-200">
        <h1 className="text-3xl font-semibold text-gray-800">Love Adu</h1>
        <nav className="flex gap-10 text-lg font-medium">
          {['About', 'Projects', 'Resume', 'Contact'].map((tab, i) => (
            <a
              key={tab}
              href={tab === 'Contact' ? 'mailto:loveadu@berkeley.edu' : tab === 'Resume' ? '/Love Adu Resume (8).pdf' : `#${tab.toLowerCase()}`}
              onClick={tab === 'About' ? () => setShowAbout(true) : undefined}
              className="relative transition-all duration-300 hover:opacity-80"
              style={{ color: boldColors[i % boldColors.length], fontWeight: '700' }}
            >
              {tab}
            </a>
          ))}
        </nav>
      </header>

      <main className="max-w-5xl mx-auto mt-16 bg-white p-10 rounded-3xl shadow-md flex flex-col md:flex-row gap-10 border border-gray-100">
        <div className="flex-shrink-0">
          <img
            src="/profile.jpg"
            alt="Love Adu"
            className="w-48 h-48 rounded-full object-cover border-4 border-[#f8bbd0]"
          />
        </div>
        <div className="flex-1 text-left">
          <h2 className="text-4xl font-bold mb-2 text-[#607d8b]">Love Adu</h2>
          <p className="text-xl text-gray-600 mb-4">
            Junior, UC Berkeley — Data Science & Media Studies
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Researcher and advocate exploring how platform regulation, content moderation, and algorithmic design impact democracy, civic life, and marginalized communities.
          </p>
          <div className="flex gap-6 mt-4">
            <a
              href="mailto:loveadu@berkeley.edu"
              className="text-[#bbdefb] hover:text-[#2196f3]"
            >
              <Mail size={26} />
            </a>
            <a
              href="https://github.com/love-adu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b2ebf2] hover:text-[#00acc1]"
            >
              <Github size={26} />
            </a>
            <a
              href="https://www.linkedin.com/in/love-adu-868458233/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d1c4e9] hover:text-[#7e57c2]"
            >
              <Linkedin size={26} />
            </a>
          </div>
        </div>
      </main>

      {showAbout && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
          onClick={() => setShowAbout(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-10 rounded-3xl shadow-lg max-w-lg border-t-8 border-[#f8bbd0]"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#607d8b]">About Me</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              I’m a researcher, policy advocate, and student exploring the intersections of technology, democracy, and civic justice. My work focuses on algorithmic bias, platform governance, and digital equity.
            </p>
          </div>
        </motion.div>
      )}

      <section id="projects" className="max-w-5xl mx-auto mt-20 mb-20">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl shadow-sm border border-gray-200 hover:shadow-lg transition duration-300"
              style={{ backgroundColor: pastelColors[i % pastelColors.length] }}
            >
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {proj.title}
              </h3>
              <p className="text-gray-700 mb-4">{proj.desc}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm px-3 py-1 rounded-md text-gray-800 font-semibold bg-white/60 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
