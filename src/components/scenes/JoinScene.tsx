import { motion } from 'framer-motion'

export default function JoinScene() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7faff] px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="text-8xl mb-6"
        >
          ⚡
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
          Ready to Join NexaSoul?
        </h1>

        <p className="text-xl text-[#5f6e8d] mb-8">
          Your simulation journey is just the beginning. Join the real NexaSoul community at Chandigarh University.
        </p>

        <div className="bg-white backdrop-blur-lg rounded-2xl p-8 border border-[#dbe5fb] shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-[#0b1740] mb-4">What's Next:</h2>
          <ul className="text-left space-y-3 text-[#5f6e8d]">
            <li className="flex items-start gap-3">
              <span className="text-[#9fdd42]">✓</span>
              <span>Join weekly learning sessions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#9fdd42]">✓</span>
              <span>Participate in real hackathons</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#9fdd42]">✓</span>
              <span>Build projects with mentors</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#9fdd42]">✓</span>
              <span>Get internship preparation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#9fdd42]">✓</span>
              <span>Become a leader and mentor others</span>
            </li>
          </ul>
        </div>

        <motion.a
          href="https://chat.whatsapp.com/your-link"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 bg-gradient-to-r from-[#315cf4] to-[#7458f5] rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow text-white"
        >
          Join WhatsApp Community
        </motion.a>

        <div className="mt-8 text-[#5f6e8d] text-sm">
          <p>NexaSoul · Chandigarh University</p>
          <p className="mt-2">Code • Connect • Conquer</p>
        </div>
      </motion.div>
    </div>
  )
}
