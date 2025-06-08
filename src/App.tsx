import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, Linkedin, Github, ExternalLink, ChevronDown, Database, TrendingUp, BarChart3, Users, Brain, Code, Award, BookOpen, FileText, MapPin, Calendar, GraduationCap, Briefcase, Download, Eye, Star, ArrowRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'experience', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'Data Science & Analytics', icon: Database, level: 92, description: 'Advanced statistical analysis and machine learning' },
    { name: 'SQL & Database Management', icon: Code, level: 90, description: 'Complex queries and database optimization' },
    { name: 'Financial Analysis', icon: TrendingUp, level: 88, description: 'Financial modeling and performance metrics' },
    { name: 'Marketing Analytics', icon: BarChart3, level: 85, description: 'Consumer behavior and market research' },
    { name: 'Statistical Analysis', icon: Brain, level: 87, description: 'Econometrics and quantitative techniques' },
    { name: 'Business Strategy', icon: Users, level: 83, description: 'Strategic planning and business intelligence' }
  ];

  const education = [
    {
      degree: 'PGDM (Post Graduate Diploma in Management)',
      institution: 'Praxis Business School',
      year: '2024-2026',
      grade: '6.17 CGPA',
      specialization: 'Data & Business Analytics',
      status: 'Current'
    },
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Jalpaiguri Government Engineering College',
      year: '2019-2023',
      grade: '81.4%',
      specialization: 'Computer Science & Engineering',
      status: 'Completed'
    },
    {
      degree: 'Diploma in Mechanical Engineering',
      institution: 'Baruipur Government Polytechnic',
      year: '2017-2020',
      grade: '80%',
      specialization: 'Mechanical Engineering',
      status: 'Completed'
    }
  ];

  const projects = [
    {
      title: 'Beverage Industry Data Analytics',
      description: 'Comprehensive analysis of beer sales data to uncover regional insights and factors influencing consumer behavior. Examined ABV, user ratings, and market trends to identify growth opportunities and optimize sales strategies.',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Statistical Analysis', 'Data Visualization'],
      category: 'Data Analytics',
      outcomes: ['Identified key sales drivers', 'Regional market analysis', 'Consumer preference insights', 'Operational efficiency strategies'],
      impact: 'Enhanced understanding of market dynamics and consumer preferences',
      featured: true
    },
    {
      title: 'Financial Performance Analysis: Electrical Industry',
      description: 'Conducted a comprehensive 3-year comparative analysis of Havells, V-Guard, and Finolex using advanced financial metrics and ratio analysis to evaluate market positioning and operational efficiency.',
      technologies: ['Financial Modeling', 'Excel', 'Ratio Analysis', 'Tableau', 'Statistical Methods'],
      category: 'Financial Analysis',
      outcomes: ['Profitability assessment', 'Liquidity analysis', 'Market positioning insights', 'Strategic recommendations'],
      impact: 'Delivered actionable insights on financial health and market positioning',
      featured: true
    },
    {
      title: 'Sunsilk Brand Analysis: Marketing Strategy',
      description: 'Detailed study of Sunsilk brand evolution, market segmentation, and distribution strategies. Analyzed STP framework and developed actionable marketing strategies using comprehensive SWOT analysis.',
      technologies: ['Marketing Analytics', 'SWOT Analysis', 'Market Research', 'Consumer Behavior Analysis'],
      category: 'Marketing Management',
      outcomes: ['Brand positioning strategy', 'Market segmentation insights', 'Distribution optimization', 'Growth opportunity identification'],
      impact: 'Developed comprehensive marketing strategies for brand growth',
      featured: false
    }
  ];

  const certifications = [
    {
      title: 'Complete Guide to SQL for Data Engineering',
      description: 'Advanced SQL certification covering data engineering fundamentals',
      icon: Database,
      level: 'Advanced'
    },
    {
      title: 'Career Essentials in Generative AI',
      description: 'Microsoft and LinkedIn certification in AI technologies',
      icon: Brain,
      level: 'Professional'
    }
  ];

  const stats = [
    { label: 'PGDM CGPA', value: '6.17', color: 'blue' },
    { label: 'B.Tech Score', value: '81.4%', color: 'purple' },
    { label: 'Projects Completed', value: '3+', color: 'teal' },
    { label: 'Years Experience', value: '2+', color: 'green' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-slate-950 to-purple-950/20" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-md z-50 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-slate-100 relative z-10">
              Bodhisattwa Malik
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'education', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm font-medium transition-all duration-300 hover:text-blue-400 relative group ${
                    activeSection === section ? 'text-blue-400' : 'text-slate-400'
                  }`}
                >
                  {section}
                  <div className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full transition-all duration-300 ${
                    activeSection === section ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></div>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-400 hover:text-slate-100 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800/50">
            <div className="px-6 py-4 space-y-2">
              {['home', 'about', 'education', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-4 py-3 capitalize text-sm font-medium transition-colors duration-300 rounded-lg ${
                    activeSection === section ? 'text-blue-400 bg-blue-400/10' : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className={`space-y-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Profile Image */}
            <div className="relative mx-auto w-48 h-48 mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-1 bg-slate-950 rounded-full"></div>
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Bodhisattwa Malik"
                className="absolute inset-2 w-44 h-44 rounded-full object-cover border-2 border-slate-700 hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-slate-950 animate-pulse"></div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-100 tracking-tight">
                Bodhisattwa Malik
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-slate-300 font-light">
                Data & Business Analytics Professional
              </p>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
                PGDM student at Praxis Business School specializing in transforming complex data into strategic business insights through advanced analytics, financial modeling, and innovative problem-solving approaches.
              </p>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 hover:border-${stat.color}-500/30 transition-all duration-300 group`}
                >
                  <div className={`text-2xl font-bold text-${stat.color}-400 mb-1 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 group"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>View My Work</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-blue-400 rounded-lg font-medium transition-all duration-300 group"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Mail size={16} />
                  <span>Get In Touch</span>
                </span>
              </button>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={24} className="text-slate-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-900/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-200">
                Data-Driven Business Strategist
              </h3>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  Currently pursuing PGDM at Praxis Business School with a specialization in Data & Business Analytics. 
                  My academic journey combines a strong technical foundation in Computer Science with advanced business 
                  analytics skills, creating a unique perspective on data-driven decision making.
                </p>
                <p>
                  With experience spanning cybersecurity, financial analysis, and marketing analytics, I bring a 
                  multidisciplinary approach to solving complex business challenges. My work focuses on transforming 
                  raw data into actionable insights that drive strategic business outcomes.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 pt-8">
                {stats.slice(0, 3).map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className={`text-3xl font-bold text-${stat.color}-400 mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-500 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
              <h4 className="text-xl font-semibold mb-6 text-slate-200">Core Competencies</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group hover:bg-slate-700/30 p-3 rounded-lg transition-all duration-300">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Database className="text-blue-400" size={20} />
                  </div>
                  <span className="text-slate-300">Foundations of Data Science</span>
                </div>
                <div className="flex items-center space-x-4 group hover:bg-slate-700/30 p-3 rounded-lg transition-all duration-300">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="text-purple-400" size={20} />
                  </div>
                  <span className="text-slate-300">Quantitative Techniques & Econometrics</span>
                </div>
                <div className="flex items-center space-x-4 group hover:bg-slate-700/30 p-3 rounded-lg transition-all duration-300">
                  <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="text-teal-400" size={20} />
                  </div>
                  <span className="text-slate-300">Marketing Analytics & Consumer Behavior</span>
                </div>
                <div className="flex items-center space-x-4 group hover:bg-slate-700/30 p-3 rounded-lg transition-all duration-300">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Code className="text-green-400" size={20} />
                  </div>
                  <span className="text-slate-300">Advanced SQL, Pandas, Tableau</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700/50">
                <h5 className="text-lg font-semibold mb-4 text-slate-200">Recognition</h5>
                <div className="flex items-center space-x-3 group hover:bg-slate-700/30 p-3 rounded-lg transition-all duration-300">
                  <Award className="text-yellow-400 group-hover:rotate-12 transition-transform duration-300" size={20} />
                  <span className="text-slate-300 text-sm">Swami Vivekananda Merit Scholarship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">Academic Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300 group hover:transform hover:scale-[1.02]">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="text-blue-400 group-hover:rotate-12 transition-transform duration-300" size={24} />
                      <span className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                        edu.status === 'Current' ? 'bg-green-500/20 text-green-400 group-hover:bg-green-500/30' : 'bg-slate-500/20 text-slate-400 group-hover:bg-slate-500/30'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-200 group-hover:text-blue-300 transition-colors duration-300">{edu.degree}</h3>
                    <p className="text-blue-400 font-medium">{edu.institution}</p>
                    <p className="text-slate-400 text-sm">{edu.specialization}</p>
                  </div>
                  <div className="text-right mt-6 lg:mt-0 space-y-2">
                    <div className="text-2xl font-bold text-purple-400 group-hover:scale-110 transition-transform duration-300">{edu.grade}</div>
                    <div className="text-slate-400 text-sm flex items-center justify-end space-x-2">
                      <Calendar size={16} />
                      <span>{edu.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-20">
            <h3 className="text-2xl font-semibold text-center mb-12 text-slate-200">Professional Certifications</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 group hover:transform hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                      <cert.icon className="text-purple-400" size={24} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <h4 className="text-lg font-semibold text-slate-200 group-hover:text-purple-300 transition-colors duration-300">{cert.title}</h4>
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-medium group-hover:bg-blue-500/30 transition-all duration-300">
                          {cert.level}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-900/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">Technical Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 group hover:transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                    <skill.icon className="text-blue-400 group-hover:text-purple-400 transition-colors duration-300" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-200 group-hover:text-blue-300 transition-colors duration-300">{skill.name}</h3>
                    <p className="text-slate-400 text-sm">{skill.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-400">Proficiency</span>
                    <span className="text-sm font-medium text-slate-300">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className={`bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 group hover:transform hover:scale-[1.02] ${project.featured ? 'ring-1 ring-blue-500/20' : ''}`}>
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium group-hover:bg-blue-500/30 transition-all duration-300">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium flex items-center space-x-1">
                            <Star size={12} />
                            <span>Featured</span>
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-semibold text-slate-200 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <div className="bg-slate-700/30 p-4 rounded-lg group-hover:bg-slate-700/50 transition-all duration-300">
                        <p className="text-slate-300 text-sm font-medium">Impact: {project.impact}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-lg text-sm border border-slate-600/50 hover:border-blue-400/50 hover:text-blue-300 transition-all duration-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700/20 p-6 rounded-xl border border-slate-600/30 group-hover:border-blue-500/30 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-slate-200 mb-4">Key Outcomes</h4>
                    <ul className="space-y-3">
                      {project.outcomes.map((outcome, outcomeIndex) => (
                        <li key={outcomeIndex} className="text-slate-400 text-sm flex items-start group/item hover:text-slate-300 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:bg-purple-400 transition-colors duration-300"></div>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-slate-900/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          </div>

          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 group">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Briefcase className="text-blue-400 group-hover:rotate-12 transition-transform duration-300" size={24} />
                  <h3 className="text-2xl font-semibold text-slate-200 group-hover:text-blue-300 transition-colors duration-300">Cyber Security Intern</h3>
                </div>
                <p className="text-blue-400 font-medium text-lg">Gurugram Police</p>
                <div className="flex items-center space-x-2 text-slate-400">
                  <Calendar size={16} />
                  <span>June 2021 - July 2021</span>
                </div>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-200 mb-4">Key Responsibilities</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start text-slate-400 group/item hover:text-slate-300 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:bg-purple-400 transition-colors duration-300"></div>
                      Maintained comprehensive logs and prepared detailed case documentation for ongoing investigations
                    </li>
                    <li className="flex items-start text-slate-400 group/item hover:text-slate-300 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:bg-purple-400 transition-colors duration-300"></div>
                      Supported community awareness drives on cyber hygiene and digital safety
                    </li>
                    <li className="flex items-start text-slate-400 group/item hover:text-slate-300 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:bg-purple-400 transition-colors duration-300"></div>
                      Conducted school outreach programs on cybersecurity awareness
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-200 mb-4">Technical Skills Gained</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start text-slate-400 group/item hover:text-slate-300 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:bg-blue-400 transition-colors duration-300"></div>
                      Digital forensics techniques and methodologies
                    </li>
                    <li className="flex items-start text-slate-400 group/item hover:text-slate-300 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:bg-blue-400 transition-colors duration-300"></div>
                      Basic ethical hacking and penetration testing
                    </li>
                    <li className="flex items-start text-slate-400 group/item hover:text-slate-300 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:bg-blue-400 transition-colors duration-300"></div>
                      Data privacy regulations and compliance (IT Act 2000, IPC cyber provisions)
                    </li>
                    <li className="flex items-start text-slate-400 group/item hover:text-slate-300 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:bg-blue-400 transition-colors duration-300"></div>
                      Law enforcement protocols and procedures
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Publications */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-12 text-slate-200">Publications</h3>
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 hover:border-teal-500/30 transition-all duration-300 group">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-teal-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                  <FileText className="text-teal-400" size={28} />
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-slate-200 leading-tight group-hover:text-teal-300 transition-colors duration-300">
                    "An Empirical Study on U-Shaped Relationship Between Sustainable Economic Growth and Human Capital"
                  </h4>
                  <p className="text-slate-400">
                    Published in the International Journal of All Research Education and Scientific Methods (IJARESM)
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                    <span className="px-3 py-1 bg-slate-700/50 rounded-full hover:bg-slate-700 transition-colors duration-300">ISSN: 2455-6211</span>
                    <span className="px-3 py-1 bg-slate-700/50 rounded-full hover:bg-slate-700 transition-colors duration-300">Volume 13, Issue 3</span>
                    <span className="px-3 py-1 bg-slate-700/50 rounded-full hover:bg-slate-700 transition-colors duration-300">March 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              I'm always interested in discussing data analytics opportunities, 
              collaborative projects, or connecting with fellow professionals in the field.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300 group">
                <h3 className="text-xl font-semibold mb-8 text-slate-200">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group/item hover:bg-slate-700/30 p-3 rounded-lg transition-all duration-300">
                    <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <Mail className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 mb-1">Email</div>
                      <div className="text-slate-200 font-medium">bodhisattwa.malik_bm24@praxis.ac.in</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group/item hover:bg-slate-700/30 p-3 rounded-lg transition-all duration-300">
                    <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <Phone className="text-purple-400" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 mb-1">Mobile</div>
                      <div className="text-slate-200 font-medium">+91 9748917666</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group/item hover:bg-slate-700/30 p-3 rounded-lg transition-all duration-300">
                    <div className="w-14 h-14 bg-teal-500/20 rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <Linkedin className="text-teal-400" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 mb-1">LinkedIn</div>
                      <a 
                        href="https://www.linkedin.com/in/bodhimalik20" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-200 font-medium hover:text-teal-400 transition-colors"
                      >
                        linkedin.com/in/bodhimalik20
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-8 text-slate-200">Send Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300 hover:border-slate-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300 hover:border-slate-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Your Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300 resize-none hover:border-slate-500"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 group"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 border-t border-slate-800/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 mb-4 md:mb-0">
              © 2025 Bodhisattwa Malik. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/in/bodhimalik20" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:bodhisattwa.malik_bm24@praxis.ac.in" 
                className="text-slate-400 hover:text-teal-400 transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;