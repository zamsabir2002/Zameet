"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import {
  ChevronDown,
  Code,
  ExternalLink,
  Github,
  Mail,
  Menu,
  X,
  Database,
  Server,
  Globe,
  Layers,
  FileCode,
  GitBranch,
  Cloud,
  Monitor,
  Zap,
  Lock,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  // Separate state for each skills category
  const [showAllSkillsAll, setShowAllSkillsAll] = useState(false)
  const [showAllSkillsFrontend, setShowAllSkillsFrontend] = useState(false)
  const [showAllSkillsBackend, setShowAllSkillsBackend] = useState(false)
  const [showAllSkillsOther, setShowAllSkillsOther] = useState(false)

  const [showAllProjects, setShowAllProjects] = useState(false)
  const [showAllServices, setShowAllServices] = useState(false)

  // Refs for section headings
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const servicesRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "services", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
      setActiveSection(sectionId)
      setMobileMenuOpen(false)
    }
  }

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 100,
        behavior: "smooth",
      })
    }
  }

  const toggleShowAllProjects = () => {
    if (showAllProjects) {
      setShowAllProjects(false)
      scrollToRef(projectsRef)
    } else {
      setShowAllProjects(true)
    }
  }

  const toggleShowAllServices = () => {
    if (showAllServices) {
      setShowAllServices(false)
      scrollToRef(servicesRef)
    } else {
      setShowAllServices(true)
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  // Skill data with icons
  const skillsData = {
    frontend: [
      { name: "React", icon: <Globe className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "Next.js", icon: <Zap className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "JavaScript", icon: <FileCode className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "TypeScript", icon: <FileCode className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "HTML/CSS", icon: <Code className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "Tailwind CSS", icon: <Layers className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "Angular", icon: <Globe className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "Redux", icon: <Layers className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "Vue.js", icon: <Globe className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "SASS/SCSS", icon: <Code className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "Material UI", icon: <Layers className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "Bootstrap", icon: <Layers className="h-6 w-6 text-purple-600 mb-2" /> },
    ],
    backend: [
      { name: "Python", icon: <Server className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "FastAPI", icon: <Zap className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "Flask", icon: <Server className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "Django", icon: <Server className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "DRF", icon: <Server className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "Node.js", icon: <Server className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "ASP.NET", icon: <Server className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "SQL", icon: <Database className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "Express.js", icon: <Server className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "GraphQL", icon: <Database className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "Java", icon: <Server className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "Spring Boot", icon: <Server className="h-6 w-6 text-purple-600 mb-2" /> },
    ],
    other: [
      { name: "Docker", icon: <Cloud className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "AWS", icon: <Cloud className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "Git", icon: <GitBranch className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "CI/CD", icon: <GitBranch className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "RabbitMQ", icon: <Layers className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "MongoDB", icon: <Database className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "PostgreSQL", icon: <Database className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "Redis", icon: <Database className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "Kubernetes", icon: <Cloud className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "Azure", icon: <Cloud className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "Jenkins", icon: <GitBranch className="h-6 w-6 text-purple-600 mb-2" /> },
      { name: "Terraform", icon: <Cloud className="h-6 w-6 text-purple-600 mb-2" /> },
    ],
  }

  // Combine all skills for the "All" tab
  const allSkills = [...skillsData.frontend, ...skillsData.backend, ...skillsData.other]

  // Project data
  const projectsData = [
    {
      title: "AURA",
      description: "Risk portfolio analysis tool for asset classification and posture calculation.",
      tech: "Angular, ASP.NET Core, RabbitMQ, WebSocket",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "PurePrivacy",
      description: "Gen-AI powered privacy tool to manage online data exposure.",
      tech: "Flask, Celery, FusionAuth, AWS, Jenkins, Docker",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Robin",
      description: "Feature enhancement and maintenance for enterprise-level risk tracking app.",
      tech: "Angular, ASP.NET Core",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Octdaily",
      description: "Developed task tracking and productivity app for daily workflows.",
      tech: "Angular, .NET MVC",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "DataSync",
      description: "Real-time data synchronization platform for distributed systems.",
      tech: "React, Node.js, Socket.io, MongoDB",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "SecureAuth",
      description: "Multi-factor authentication system with biometric verification.",
      tech: "React Native, Express, PostgreSQL, JWT",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "CloudMonitor",
      description: "Monitoring and alerting system for cloud infrastructure.",
      tech: "Vue.js, Go, Prometheus, Grafana",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "SmartContract",
      description: "Blockchain-based smart contract platform for digital agreements.",
      tech: "Solidity, Web3.js, React, Node.js",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  // Services data
  const servicesData = [
    {
      title: "Full Stack Development",
      description:
        "End-to-end web application development with modern frontend frameworks and scalable backend solutions.",
      icon: <Code className="h-10 w-10 text-purple-600" />,
    },
    {
      title: "API Development",
      description: "Design and implementation of RESTful and GraphQL APIs with proper documentation and security.",
      icon: <Server className="h-10 w-10 text-purple-600" />,
    },
    {
      title: "Database Design",
      description: "Efficient database schema design and optimization for SQL and NoSQL databases.",
      icon: <Database className="h-10 w-10 text-purple-600" />,
    },
    {
      title: "Cloud Deployment",
      description: "Deployment and configuration of applications on AWS, Azure, or other cloud platforms.",
      icon: <Cloud className="h-10 w-10 text-purple-600" />,
    },
    {
      title: "Performance Optimization",
      description: "Identifying and resolving performance bottlenecks in web applications.",
      icon: <Zap className="h-10 w-10 text-purple-600" />,
    },
    {
      title: "Technical Consultation",
      description: "Expert advice on technology stack selection, architecture design, and best practices.",
      icon: <Settings className="h-10 w-10 text-purple-600" />,
    },
    {
      title: "Security Auditing",
      description: "Comprehensive security assessment and vulnerability testing for web applications.",
      icon: <Lock className="h-10 w-10 text-purple-600" />,
    },
    {
      title: "UI/UX Development",
      description: "Creating intuitive and responsive user interfaces with modern design principles.",
      icon: <Monitor className="h-10 w-10 text-purple-600" />,
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
              <span className="absolute -left-1 text-2xl opacity-30">{`{`}</span>
              <span>ZS</span>
              <span className="absolute -right-1 text-2xl opacity-30">{`}`}</span>
            </div>
            <span className="font-bold text-xl">Zameet Sabir</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["home", "about", "skills", "projects", "services", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors ${
                  activeSection === section ? "text-purple-600 dark:text-purple-400" : ""
                }`}
              >
                {section}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {["home", "about", "skills", "projects", "services", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-left py-2 text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors ${
                    activeSection === section ? "text-purple-600 dark:text-purple-400" : ""
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Turning Ideas Into Digital Reality
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
              Full Stack Engineer specializing in building exceptional digital experiences
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                size="lg"
              >
                Hire Me
              </Button>
              <Button onClick={() => scrollToSection("projects")} variant="outline" size="lg">
                View My Work
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75"></div>
              <Avatar className="h-64 w-64 border-4 border-white dark:border-gray-800 relative">
                <AvatarImage src="/placeholder.svg?height=256&width=256" alt="Zameet Sabir" />
                <AvatarFallback className="text-5xl bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                  ZS
                </AvatarFallback>
              </Avatar>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-purple-600 dark:text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-12"></div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                  I'm a passionate software engineer who thrives on building efficient, scalable, and impactful digital
                  products. With expertise in both frontend and backend technologies, I create seamless user experiences
                  backed by robust architecture.
                </p>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                  From developing Gen-AI-powered web apps to risk analysis tools for banks, I've worked across diverse
                  tech stacks and problem domains. My approach combines technical excellence with a deep understanding
                  of business needs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="px-3 py-1">
                      5+ Years Experience
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="px-3 py-1">
                      20+ Projects Completed
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="px-3 py-1">
                      Full Stack Development
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-bold text-xl mb-2">Education</h4>
                  <p className="text-gray-700 dark:text-gray-300">Computer Science, BS</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-bold text-xl mb-2">Location</h4>
                  <p className="text-gray-700 dark:text-gray-300">Remote, Worldwide</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-bold text-xl mb-2">Languages</h4>
                  <p className="text-gray-700 dark:text-gray-300">English, Hindi</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-bold text-xl mb-2">Availability</h4>
                  <p className="text-gray-700 dark:text-gray-300">Full-time, Contract</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            ref={skillsRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-12"></div>

            <Tabs defaultValue="all" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {allSkills.slice(0, showAllSkillsAll ? allSkills.length : 8).map((skill, index) => (
                    <motion.div
                      key={`all-${skill.name}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow group">
                        <div className="h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                        <CardContent className="p-6 text-center">
                          <div className="flex justify-center items-center">{skill.icon}</div>
                          <p className="font-semibold">{skill.name}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                {allSkills.length > 8 && (
                  <div className="flex justify-center mt-8">
                    <Button
                      onClick={() => {
                        setShowAllSkillsAll(!showAllSkillsAll)
                        if (showAllSkillsAll) {
                          scrollToRef(skillsRef)
                        }
                      }}
                      variant="outline"
                      className="group"
                    >
                      {showAllSkillsAll ? "Show Less" : "Show More"}
                      <ChevronDown
                        className={`ml-2 h-4 w-4 transition-transform ${showAllSkillsAll ? "rotate-180" : ""}`}
                      />
                    </Button>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="frontend" className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {skillsData.frontend
                    .slice(0, showAllSkillsFrontend ? skillsData.frontend.length : 8)
                    .map((skill, index) => (
                      <motion.div
                        key={`frontend-${skill.name}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
                          <div className="h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                          <CardContent className="p-6 text-center">
                            <div className="flex justify-center items-center">{skill.icon}</div>
                            <p className="font-semibold">{skill.name}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                </div>
                {skillsData.frontend.length > 8 && (
                  <div className="flex justify-center mt-8">
                    <Button
                      onClick={() => {
                        setShowAllSkillsFrontend(!showAllSkillsFrontend)
                        if (showAllSkillsFrontend) {
                          scrollToRef(skillsRef)
                        }
                      }}
                      variant="outline"
                      className="group"
                    >
                      {showAllSkillsFrontend ? "Show Less" : "Show More"}
                      <ChevronDown
                        className={`ml-2 h-4 w-4 transition-transform ${showAllSkillsFrontend ? "rotate-180" : ""}`}
                      />
                    </Button>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="backend" className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {skillsData.backend
                    .slice(0, showAllSkillsBackend ? skillsData.backend.length : 8)
                    .map((skill, index) => (
                      <motion.div
                        key={`backend-${skill.name}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
                          <div className="h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                          <CardContent className="p-6 text-center">
                            <div className="flex justify-center items-center">{skill.icon}</div>
                            <p className="font-semibold">{skill.name}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                </div>
                {skillsData.backend.length > 8 && (
                  <div className="flex justify-center mt-8">
                    <Button
                      onClick={() => {
                        setShowAllSkillsBackend(!showAllSkillsBackend)
                        if (showAllSkillsBackend) {
                          scrollToRef(skillsRef)
                        }
                      }}
                      variant="outline"
                      className="group"
                    >
                      {showAllSkillsBackend ? "Show Less" : "Show More"}
                      <ChevronDown
                        className={`ml-2 h-4 w-4 transition-transform ${showAllSkillsBackend ? "rotate-180" : ""}`}
                      />
                    </Button>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="other" className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {skillsData.other.slice(0, showAllSkillsOther ? skillsData.other.length : 8).map((skill, index) => (
                    <motion.div
                      key={`other-${skill.name}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
                        <div className="h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                        <CardContent className="p-6 text-center">
                          <div className="flex justify-center items-center">{skill.icon}</div>
                          <p className="font-semibold">{skill.name}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                {skillsData.other.length > 8 && (
                  <div className="flex justify-center mt-8">
                    <Button
                      onClick={() => {
                        setShowAllSkillsOther(!showAllSkillsOther)
                        if (showAllSkillsOther) {
                          scrollToRef(skillsRef)
                        }
                      }}
                      variant="outline"
                      className="group"
                    >
                      {showAllSkillsOther ? "Show Less" : "Show More"}
                      <ChevronDown
                        className={`ml-2 h-4 w-4 transition-transform ${showAllSkillsOther ? "rotate-180" : ""}`}
                      />
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            ref={projectsRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-12"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.slice(0, showAllProjects ? projectsData.length : 6).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full group">
                    <div className="relative overflow-hidden h-48">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 group-hover:opacity-0 transition-opacity z-10"></div>
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.split(", ").map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-gray-100 dark:bg-gray-700">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-auto pt-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Github size={16} />
                          <span>Code</span>
                        </Button>
                        <Button variant="outline" size="sm" className="gap-1">
                          <ExternalLink size={16} />
                          <span>Demo</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {projectsData.length > 6 && (
              <div className="flex justify-center mt-12">
                <Button onClick={toggleShowAllProjects} variant="outline" className="group">
                  {showAllProjects ? "Show Less" : "Show More Projects"}
                  <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showAllProjects ? "rotate-180" : ""}`} />
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            ref={servicesRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Services I Offer</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-12"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {servicesData.slice(0, showAllServices ? servicesData.length : 6).map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full group">
                    <div className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 transform origin-left transition-all duration-300 group-hover:scale-x-100"></div>
                    <CardContent className="p-6">
                      <div className="mb-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-full w-fit">{service.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {servicesData.length > 6 && (
              <div className="flex justify-center mt-12">
                <Button onClick={toggleShowAllServices} variant="outline" className="group">
                  {showAllServices ? "Show Less" : "Show More Services"}
                  <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showAllServices ? "rotate-180" : ""}`} />
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-12"></div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  I'm currently available for freelance work. If you have a project that needs my expertise, please get
                  in touch.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 dark:bg-gray-700 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-700 dark:text-gray-300">contact@zameetsabir.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 dark:bg-gray-700 p-3 rounded-full">
                      <Github className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-gray-700 dark:text-gray-300">github.com/zameetsabir</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Send Me a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                  ZS
                </div>
                <span className="font-bold text-lg">Zameet Sabir</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Zameet Sabir. All rights reserved.</p>
            <p className="mt-1">Turning ideas into digital reality, one project at a time.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

