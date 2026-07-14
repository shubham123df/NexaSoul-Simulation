import { motion } from 'framer-motion'

export default function JoinScene() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7faff] px-4 py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-3xl w-full text-center"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
          Ready to Join NexaSoul?
        </h1>

        <p className="text-xl text-[#5f6e8d] mb-8">
          Your simulation journey is just the beginning. Join the real NexaSoul community at Chandigarh University.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* What's Next Card */}
          <div className="bg-white backdrop-blur-lg rounded-2xl p-8 border border-[#dbe5fb] shadow-lg">
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

          {/* QR Code Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white backdrop-blur-lg rounded-2xl p-8 border border-[#dbe5fb] shadow-lg flex flex-col items-center justify-center"
          >
            <h2 className="text-2xl font-bold text-[#0b1740] mb-4">Scan to Join</h2>
            <div className="bg-[#f7faff] p-6 rounded-xl mb-4">
              <img 
                src="/assets/qr-whatsapp.png" 
                alt="WhatsApp QR Code" 
                className="w-48 h-48 rounded-lg"
              />
            </div>
            <p className="text-sm text-[#5f6e8d]">
              Scan with WhatsApp to join our community
            </p>
          </motion.div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex items-center gap-4">
            <img 
              src="/assets/nexasoul-logo.png" 
              alt="NexaSoul Logo" 
              className="h-10 w-auto"
            />
            <span className="text-[#5f6e8d] text-lg">·</span>
            <img 
              src="/assets/cu-logo.png" 
              alt="Chandigarh University Logo" 
              className="h-7 w-auto"
            />
          </div>
          <p className="text-[#5f6e8d] text-sm">Code • Connect • Conquer</p>
        </div>
      </motion.div>
    </div>
  )
}
