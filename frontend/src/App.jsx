import React, { useRef , useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Code, Database, Globe, Download, Menu, X, ExternalLink, Monitor, Smartphone, Server } from 'lucide-react'
import emailjs from '@emailjs/browser'
import cv from "../../Ayoub_Souayeb_Professional_CV.pdf"
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const services = [
    {
      icon: Monitor,
      title: "Website Creation",
      description: "Enhance your brand with our bespoke website creation using React, Vite and modern technologies"
    },
    {
      icon: Smartphone,
      title: "Web Applications",
      description: "Empower and automate your business with our coding expertise and scalable solutions"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Robust Node.js backend solutions for your web applications and APIs"
    }
  ]

  const skills = [
    "React", "Vite", "JavaScript", "Tailwind CSS", "HTML/CSS", "Node.js", 
    "Git", "Responsive Design", "API Integration", "Performance Optimization"
  ]

  const projects = [
    {
      title: "vintage store",
      description: "vinatge is a cloth store build with React and Node.js",
      tech: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
      status: "Live",
      link: "https://cloth1-jet.vercel.app/"
    },
    {
      title: "chat app",
      description: "Real-time analytics chat websites",
      tech: ["React", "Vite", "Chart.js", "Express"],
      status: "In Progress",
      link: "#"
    },
    {
      title: "car company",
      description: "Full-stack restaurant website with online ordering",
      tech: ["React", "Node.js", "Stripe API", "PostgreSQL"],
      status: "Live",
      link: "https://2youb00.github.io/beat-car/"
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_u4x26ff',      // من حسابك
      'template_z82xmt7',     // من حسابك
      form.current,
      '1eMtfO2hROjNfS7tc'       // من حسابك
    )
    .then(() => {
      alert('✅ Message sent successfully!')
    })
    .catch(() => {
      alert('❌ Failed to send message.')
    })

  }
  return (
    <div className="min-h-screen bg-dark-100 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-dark-100/80 backdrop-blur-md z-50 border-b border-dark-300/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold gradient-text">Portfolio</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-blue-400'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-dark-300/20">
              <div className="flex flex-col space-y-4">
                {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-full max-w-md mx-auto lg:mx-0 aspect-square bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl overflow-hidden border border-blue-500/20">
                  <div className="w-full h-full bg-dark-200/50 flex items-center justify-center">
                    <Code size={120} className="text-blue-400/50" />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-block bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm border border-blue-500/20 mb-6">
                Hello, I'm a Ayoub Souayeb
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Let's Build Your{' '}
                <span className="gradient-text">Online Existence!</span>
              </h1>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-2xl">
                Let's Collaborate to Shape and Amplify Your Distinctive Online Presence - Where Your Identity Meets the Digital World™
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
    href={cv}
    download
    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
  >
    <Download size={20} />
    Download CV
  </a>
                <a
                  href="#contact"
                  className="border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 px-8 py-3 rounded-lg transition-colors text-center"
                >
                  Get In Touch
                </a>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {skills.slice(0, 6).map((skill, index) => (
                  <span key={index} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What I <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Specialized services to bring your digital vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="service-card group p-8 ">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <IconComponent size={24} className="text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-200/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate web designer and developer specializing in React (with Vite) and Tailwind CSS, 
                  with a strong foundation in HTML, CSS, and JavaScript. On the backend, I work with Node.js to 
                  build robust, scalable applications.
                </p>
                <p>
                  I hold a Bachelor's degree (Licence) in Computer Science, which has given me a solid grounding 
                  in software development principles and best practices.
                </p>
                <p>
                  I love crafting modern, responsive, and user-friendly web interfaces, paying close attention 
                  to both aesthetics and performance. Whether it's developing from scratch or improving existing 
                  projects, I'm dedicated to delivering clean code and elegant solutions.
                </p>
              </div>
            </div>
            
            <div className="bg-dark-200/50 p-8 rounded-2xl border border-dark-300/30">
              <h3 className="text-xl font-semibold mb-6 text-white">Education & Skills</h3>
              
              <div className="mb-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-white">Bachelor's Degree (Licence)</h4>
                  <p className="text-gray-400">Computer Science</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Solid foundation in software development principles and best practices
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">Technical Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span key={index} className="skill-badge text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Some of my recent work that showcases my skills and expertise
            </p>
          </div>

        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
  {projects.map((project, index) => (
    <a
      key={index}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="service-card group transition-transform hover:scale-[1.02] p-7"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            project.status === "Live" 
              ? "bg-green-500/10 text-green-400 border border-green-500/20" 
              : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
          }`}>
            {project.status}
          </span>
          <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
        </div>
      </div>

      <p className="text-gray-400 mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, techIndex) => (
          <span key={techIndex} className="bg-dark-300/30 text-gray-300 px-3 py-1 rounded-full text-xs border border-dark-300/30">
            {tech}
          </span>
        ))}
      </div>
    </a>
  ))}
</div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-200/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to start your next project? Let's collaborate and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Let's Work Together</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. Whether you need a modern website, 
                a web application, or want to improve an existing project, I'd love to hear from you.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="text-blue-400" size={20} />
                  </div>
                  <span className="text-gray-300">ayoubas2003@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="text-blue-400" size={20} />
                  </div>
                  <span className="text-gray-300">+213 778951943</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="text-blue-400" size={20} />
                  </div>
                  <span className="text-gray-300">algeria</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <a href="https://github.com/2youb00" className="w-12 h-12 bg-dark-200 rounded-lg flex items-center justify-center hover:bg-blue-500/10 transition-colors border border-dark-300/30">
                  <Github size={20} className="text-gray-400 hover:text-blue-400" />
                </a>
                <a href="https://www.linkedin.com/in/ayoub-souayeb-036423294/" className="w-12 h-12 bg-dark-200 rounded-lg flex items-center justify-center hover:bg-blue-500/10 transition-colors border border-dark-300/30">
                  <Linkedin size={20} className="text-gray-400 hover:text-blue-400" />
                </a>
              </div>
            </div>

     <form ref={form} onSubmit={sendEmail} className="service-card space-y-6">
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
    <input
      type="text"
      name="name"
      required
      className="w-full px-4 py-3 bg-dark-200/50 border border-dark-300/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-500"
      placeholder="Your Name"
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
    <input
      type="email"
      name="email"
      required
      className="w-full px-4 py-3 bg-dark-200/50 border border-dark-300/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-500"
      placeholder="your.email@example.com"
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
    <textarea
      name="message"
      required
      rows={4}
      className="w-full px-4 py-3 bg-dark-200/50 border border-dark-300/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-500 resize-none"
      placeholder="Tell me about your project..."
    ></textarea>
  </div>

  {/* Hidden Time Field */}
  <input type="hidden" name="time" value={new Date().toLocaleString()} />

  <button
    type="submit"
    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors"
  >
    Send Message
  </button>
</form>


          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-dark-300/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Built with React, Vite and Tailwind CSS.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-gray-400 text-sm mr-2">dz</span>
              <span className="text-gray-400 text-sm">EN</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App