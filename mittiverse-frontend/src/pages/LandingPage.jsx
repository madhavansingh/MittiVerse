import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, CloudDrizzle, BarChart3, Leaf, ArrowRight, CheckCircle, Users, TrendingUp, Sparkles } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Cpu className="w-8 h-8" />,
      color: "from-green-400 to-emerald-600",
      title: "Mitti Intelligence for Soil Health",
      description: "Use AI to assess Indian soil conditions, nutrients, and deficiencies with ease. Supports photo-based and manual input.",
      image: "/images/feature-soil.jpg",
      stats: "95% Accuracy"
    },
    {
      icon: <CloudDrizzle className="w-8 h-8" />,
      color: "from-blue-400 to-cyan-600",
      title: "Localized Weather & Crop Guidance",
      description: "Get real-time forecasts and smart suggestions tailored for Indian regions and seasonal variations.",
      image: "/images/feature-community.png",
      stats: "24/7 Updates"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-yellow-400 to-orange-600",
      title: "Smart Yield Boosting",
      description: "Optimize your harvests with science-backed recommendations for fertilizer, water, and crop cycles.",
      image: "/images/hero-farm.jpg",
      stats: "+40% Yield"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      color: "from-emerald-400 to-green-700",
      title: "Track Your Carbon Impact",
      description: "Log farming activities and monitor environmental impact to build a more sustainable India.",
      image: "/images/feature-tracking.png",
      stats: "Carbon Neutral"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Farmers", icon: <Users className="w-6 h-6" /> },
    { number: "2M+", label: "Acres Managed", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "40%", label: "Yield Increase", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "100%", label: "Satisfaction", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  const testimonials = [
    { name: "Rajesh Kumar", location: "Punjab", text: "MittiVerse transformed my farming. My yield increased by 45% in just one season!" },
    { name: "Priya Sharma", location: "Maharashtra", text: "The soil analysis feature saved me thousands in fertilizer costs." },
    { name: "Arjun Patel", location: "Gujarat", text: "Finally, technology that understands Indian agriculture!" }
  ];

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      {/* Floating Elements Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-300 rounded-full opacity-20 blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/images/hero-farm.jpg')",
            y: parallaxY
          }}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-emerald-800/85 to-green-950/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* Animated Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-green-300" />
            <span className="text-green-100 text-sm font-medium">AI-Powered Agricultural Revolution</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-black leading-tight text-white mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Cultivate Growth,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-200 to-green-400">
              Harvest Sustainability
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-green-50 max-w-4xl mx-auto mb-12 leading-relaxed font-light"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            MittiVerse supports India's farmers with AI-powered tools to boost soil health, 
            productivity, and eco-friendly growth. Join thousands of farmers transforming agriculture.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <a
              href="/register"
              className="group relative bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              Join the MittiVerse
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/login"
              className="group bg-white/10 backdrop-blur-md border-2 border-white/50 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-3"
            >
              Login
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-3 bg-white rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl mb-4 text-white shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-4xl md:text-5xl font-black text-green-700 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              How MittiVerse Helps
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Indian Agriculture
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From local weather to soil diagnostics, MittiVerse gives Indian farmers 
              powerful tools for better yields and sustainability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                  
                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-gray-900 shadow-lg">
                    {feature.stats}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl mb-4 text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <a
                    href="/register"
                    className="inline-flex items-center gap-2 text-green-600 font-bold hover:gap-4 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-gradient-to-br from-green-600 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Trusted by Farmers Across India
            </h2>
            <p className="text-xl text-green-100">
              Join thousands of farmers who've transformed their farming journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-green-200 text-6xl mb-4">"</div>
                <p className="text-white text-lg mb-6 leading-relaxed">{testimonial.text}</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-green-200 text-sm">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-16 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-50" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Ready to Transform Your Farm?
              </h2>
              <p className="text-xl text-green-50 mb-10 max-w-2xl mx-auto">
                Join MittiVerse today and start your journey towards smarter, 
                more sustainable farming.
              </p>
              <a
                href="/register"
                className="inline-flex items-center gap-3 bg-white text-green-600 px-12 py-5 rounded-full text-xl font-bold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Get Started Free
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

{/* Footer */}
<footer className="bg-gray-900 text-gray-400 py-16">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
      <div className="col-span-1 md:col-span-2">
        <h3 className="text-2xl font-bold text-white mb-4">MittiVerse</h3>
        <p className="text-gray-400 mb-6">
          Empowering Indian farmers with AI-driven insights for sustainable 
          and profitable agriculture.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/madhavansingh"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
          >
            <FaFacebookF className="text-white" />
            <span className="sr-only">Facebook</span>
          </a>
          <a
            href="https://x.com/MadhavanEra"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
          >
            <FaTwitter className="text-white" />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=madhavansingh32@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
          >
            <FaInstagram className="text-white" />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/in/madhavan-singh"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
          >
            <FaLinkedinIn className="text-white" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>

      <div>
        <h4 className="text-white font-bold mb-4">Quick Links</h4>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
        </ul>
      </div>

            
            <div>
              <h4 className="text-white font-bold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} MittiVerse. Built for the hands that feed the nation
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;