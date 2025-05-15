import React from 'react'

function FAQ() {

     const faqItems = [
        {
          question: "What services do you offer?",
          answer: "I provide full-stack development services including website development, web applications, e-commerce solutions, API development, and UI/UX design. Each project is tailored to meet specific business needs and objectives."
        },
        {
          question: "What is your development process like?",
          answer: "My process includes discovery and planning, design and prototyping, development, testing and quality assurance, deployment, and ongoing support. I emphasize collaboration throughout to ensure we're aligned with your vision."
        },
        {
          question: "How long does a typical project take?",
          answer: "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a comprehensive web application could take 2-3 months. I provide detailed timelines during the proposal phase."
        },
        {
          question: "Do you provide support after the project is complete?",
          answer: "Yes, I offer maintenance packages and ongoing support to keep your digital products running smoothly. This includes bug fixes, security updates, performance optimization, and feature enhancements."
        }
      ];
      function FAQItem({ question, answer }) {
        const [isOpen, setIsOpen] = useState(false);
        
        return (
          <div className="border-b border-white/10 py-4 last:border-b-0">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="flex justify-between items-center w-full text-left"
            >
              <h4 className="text-lg font-medium text-white">{question}</h4>
              <ChevronDown 
                size={20} 
                className={`text-indigo-400 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} 
              />
            </button>
            <div className={`mt-2 text-gray-400 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
              <p className="pb-2">{answer}</p>
            </div>
          </div>
        );
      }
  return (
    <div id="faq" className="relative py-20 md:py-32 backdrop-blur-sm bg-black/30">
    <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50 z-0"></div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="text-center mb-16"
      >
        <h2 className="inline-block text-3xl font-bold text-white mb-3 relative">
          Frequently Asked Questions
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500 to-purple-500/0"></div>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Common questions about my services and process</p>
      </motion.div>
      
      <div className="bg-black/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/10">
        {faqItems.map((item, index) => (
          <FAQItem key={index} {...item} />
        ))}
      </div>
      
      <div className="text-center mt-8">
        <p className="text-gray-400">Have more questions? <a href="#contact" className="text-indigo-400 hover:text-indigo-300 transition-colors">Get in touch</a></p>
      </div>
    </div>
  </div>
  )
}

export default FAQ