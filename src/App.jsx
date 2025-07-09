import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { Mail, Instagram, Github, Linkedin, ExternalLink, Sparkles, BookOpen, Search, Palette, Eye } from 'lucide-react'
import MagazineViewer from '@/components/MagazineViewer.jsx'
import './App.css'

// Import Pokémon images
import pokemonGraphics1 from './assets/pokemon/EgwTA5Y5TAQv.jpg'
import pokemonGraphics2 from './assets/pokemon/nX3s66jw0oPS.png'
import pokemonCharacterArt1 from './assets/pokemon/yjTYwOJZGnYF.png'
import pokemonCharacterArt2 from './assets/pokemon/J1hcYZZD7skW.jpg'
import pokemonBattle1 from './assets/pokemon/qp4KTGq14EFK.png'
import pokemonBattle2 from './assets/pokemon/AZYIeOmlMQfJ.jpg'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [isMagazineViewerOpen, setIsMagazineViewerOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 pokemon-gradient opacity-20"></div>
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            className="floating-animation mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-yellow-400 to-red-500 rounded-full flex items-center justify-center pulse-glow">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 text-gradient"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Pokémon Magazine Journey
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            A deep dive into the creative process behind designing a Pokémon magazine
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('story').scrollIntoView({ behavior: 'smooth' })}
            >
              Begin the Journey
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/90 hover:bg-white border-2 border-purple-300 text-purple-700 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setIsMagazineViewerOpen(true)}
            >
              View Magazine
              <Eye className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Author Introduction */}
      <motion.section 
        id="story"
        className="py-20 px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Meet the Creator</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <Card className="pokemon-card max-w-4xl mx-auto">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-bold text-gray-800">Golam Sayon Ahamed</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Second-year Graphic Design Student & Visual Storyteller
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-700">
                  Hello there, fellow enthusiasts and design aficionados! I am a second-year graphic design student with an unyielding passion for bold, purposeful visuals. This blog is my dedicated space to delve into the fascinating world of posters, branding, and visual storytelling, encompassing everything from my academic classwork to self-initiated projects that ignite my creative spark.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-700">
                  For me, Pokémon isn't just a franchise; it's a vibrant tapestry woven into the very fabric of my childhood. I remember countless hours spent exploring the Kanto region on my Game Boy, the thrill of encountering a rare Pokémon, the strategic depth of turn-based battles, and the sheer joy of completing my Pokédex.
                </p>
                
                <div className="flex flex-wrap gap-3 justify-center pt-4">
                  <Badge variant="secondary" className="px-4 py-2">
                    <Palette className="w-4 h-4 mr-2" />
                    Graphic Design
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Visual Storytelling
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Pokémon Enthusiast
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Research Process */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">The Research Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating a comprehensive Pokémon magazine requires meticulous research and planning. Here's how I approached this creative challenge.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Search,
                title: "Audience Analysis",
                description: "Understanding who the magazine is for and what they want to see",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: BookOpen,
                title: "Content Research",
                description: "Deep diving into Pokémon lore, game mechanics, and character data",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Palette,
                title: "Visual Assets",
                description: "Curating high-quality artwork, screenshots, and design elements",
                color: "from-green-500 to-teal-500"
              },
              {
                icon: Sparkles,
                title: "Quality Control",
                description: "Fact-checking, consistency review, and editorial refinement",
                color: "from-orange-500 to-red-500"
              }
            ].map((step, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="pokemon-card h-full text-center">
                  <CardHeader>
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-4`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Visual Gallery */}
      <motion.section 
        className="py-20 px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Visual Inspiration</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collection of Pokémon visuals that inspired the magazine's design direction
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: pokemonGraphics1, title: "Game Graphics Evolution", category: "Graphics" },
              { src: pokemonCharacterArt1, title: "Character Design Studies", category: "Character Art" },
              { src: pokemonBattle1, title: "Battle Scene Dynamics", category: "Battle Scenes" },
              { src: pokemonGraphics2, title: "Visual Style Comparison", category: "Graphics" },
              { src: pokemonCharacterArt2, title: "Concept Art Analysis", category: "Character Art" },
              { src: pokemonBattle2, title: "Anime Battle Sequences", category: "Battle Scenes" }
            ].map((image, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="pokemon-card overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-800">{image.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Magazine Preview Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">The Final Magazine</h2>
            <p className="text-xl text-gray-600 mb-12">
              After all the research and design work, here's the completed 24-page Pokémon magazine. Click below to flip through the pages and see the final result!
            </p>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-12 py-6 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setIsMagazineViewerOpen(true)}
            >
              <BookOpen className="mr-3 w-6 h-6" />
              View Complete Magazine
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect!</h2>
            <p className="text-xl text-gray-300 mb-12">
              Interested in collaborating or discussing design? Reach out through any of these platforms.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Mail, label: "Email", value: "sayanahamed06@gmail.com", href: "mailto:sayanahamed06@gmail.com" },
              { icon: Instagram, label: "Instagram", value: "@golamsayonahamed", href: "https://instagram.com/golamsayonahamed" },
              { icon: Github, label: "GitHub", value: "yota321", href: "https://github.com/yota321" },
              { icon: Linkedin, label: "LinkedIn", value: "Profile", href: "https://www.linkedin.com/me?trk=p_mwlite_profile_self-secondary_nav" }
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <contact.icon className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-1">{contact.label}</h3>
                <p className="text-sm text-gray-300">{contact.value}</p>
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div variants={fadeInUp} className="mt-12">
            <Separator className="bg-white/20 mb-6" />
            <p className="text-gray-400">
              © 2025 Golam Sayon Ahamed. Passionate about bold, purposeful visuals.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Magazine Viewer Modal */}
      <MagazineViewer 
        isOpen={isMagazineViewerOpen} 
        onClose={() => setIsMagazineViewerOpen(false)} 
      />
    </div>
  )
}

export default App

