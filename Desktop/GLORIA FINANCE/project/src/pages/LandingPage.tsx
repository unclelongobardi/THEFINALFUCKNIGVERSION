import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BarChart3, 
  Shield, 
  Target, 
  Zap, 
  TrendingUp,
  Brain,
  Database,
  AlertTriangle,
  CheckCircle,
  Users,
  Globe,
  Lock,
  LineChart,
  DollarSign,
  Clock,
  Award,
  BookOpen,
  Activity,
  Calculator,
  Building2,
  Cpu,
  Rocket,
  Terminal
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';
import SolanaPrice from '../components/SolanaPrice';
import TechBackground from '../components/TechBackground';
import InstitutionalOverlay from '../components/InstitutionalOverlay';
import Logo from '../components/Logo';

// X (Twitter) SVG Component
const XLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LandingPage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-white relative">
      <TechBackground />
      <InstitutionalOverlay />
      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-950/95 backdrop-blur-xl border-b border-blue-500/20 shadow-lg shadow-blue-500/10' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <Logo size="lg" animated={true} />
                <div className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-xs font-medium text-blue-400">
                  BETA
                </div>
              </div>
              <SolanaPrice />
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <motion.a 
                href="#about" 
                className="hover:text-blue-400 transition-colors"
                whileHover={{ y: -2 }}
              >
                About
              </motion.a>
              <motion.a 
                href="#methodology" 
                className="hover:text-blue-400 transition-colors"
                whileHover={{ y: -2 }}
              >
                Methodology
              </motion.a>
              <motion.a 
                href="#solutions" 
                className="hover:text-blue-400 transition-colors"
                whileHover={{ y: -2 }}
              >
                Solutions
              </motion.a>
              <motion.a 
                href="#research" 
                className="hover:text-blue-400 transition-colors"
                whileHover={{ y: -2 }}
              >
                Research
              </motion.a>
              <motion.div whileHover={{ y: -2 }}>
                <Link 
                  to="/whitepaper"
                  className="hover:text-blue-400 transition-colors"
                >
                  Whitepaper
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <a 
                  href="https://x.com/i/communities/1947558796168941737"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors group"
                >
                  <XLogo className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  to="/dapp"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-6 py-2 rounded-lg font-semibold text-white transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                >
                  Launch Platform
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">
        <div className="relative z-20 text-center max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-display-xl md:text-display-2xl font-display mb-6 leading-tight">
              <span className="text-white">Institutional-Grade</span>
              <br />
              <span className="text-blue-400">DeFi Risk Intelligence</span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Advanced quantitative analysis and professional risk assessment for DeFi protocols on Solana. 
              Empowering institutional investors with Bloomberg-level insights into decentralized finance.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/dapp"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 inline-flex items-center space-x-3 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 border border-blue-400/20"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500/30 rounded-lg flex items-center justify-center">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <span>Access Terminal</span>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/whitepaper"
                  className="bg-slate-800/60 hover:bg-slate-700/60 border border-slate-600/50 hover:border-slate-500/50 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 inline-flex items-center space-x-3 backdrop-blur-sm"
                >
                  <BookOpen className="w-5 h-5 text-slate-300" />
                  <span>Whitepaper</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Key Metrics */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 font-mono">$850M+</div>
                <div className="text-sm text-slate-400 font-body">TVL Monitored</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 font-mono">250+</div>
                <div className="text-sm text-slate-400 font-body">Protocols Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400 font-mono">99.7%</div>
                <div className="text-sm text-slate-400 font-body">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400 font-mono">24/7</div>
                <div className="text-sm text-slate-400 font-body">Risk Monitoring</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <AnimatedSection>
        <section id="about" className="py-20 bg-slate-950/50 backdrop-blur-sm border-y border-blue-500/10 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6 text-white font-display">
                  Built for 
                  <span className="text-blue-400"> Institutional Standards</span>
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  GLORIA FINANCE bridges traditional finance rigor with DeFi innovation. Our platform provides 
                  institutional-grade risk assessment using quantitative methodologies refined through decades 
                  of traditional finance experience, now adapted for the decentralized ecosystem.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  We serve fund managers, family offices, corporate treasuries, and sophisticated investors 
                  who require Bloomberg Terminal-level analytics for DeFi investment decisions. Our proprietary 
                  risk models analyze smart contract security, liquidity depth, protocol governance, and market dynamics.
                </p>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="text-green-400 w-5 h-5" />
                  <span className="text-slate-300">SEC-compliant reporting frameworks</span>
                </div>
                <div className="flex items-center space-x-4 mt-2">
                  <CheckCircle className="text-green-400 w-5 h-5" />
                  <span className="text-slate-300">Enterprise-grade security and compliance</span>
                </div>
                <div className="flex items-center space-x-4 mt-2">
                  <CheckCircle className="text-green-400 w-5 h-5" />
                  <span className="text-slate-300">Real-time risk monitoring and alerts</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">$2K+</div>
                      <div className="text-slate-300">Average Position Size</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">47+</div>
                      <div className="text-slate-300">Beta Partners</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-400 mb-2">15ms</div>
                      <div className="text-slate-300">Average Latency</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400 mb-2">AAA</div>
                      <div className="text-slate-300">Security Rating</div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Methodology Section */}
      <AnimatedSection>
        <section id="methodology" className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white font-display">
                Quantitative <span className="text-blue-400">Risk Framework</span>
              </h2>
              <p className="text-slate-300 text-lg max-w-4xl mx-auto">
                Our proprietary GLORIA Risk Assessment Model (GRAM) combines traditional finance risk metrics 
                with DeFi-specific indicators to provide comprehensive protocol evaluation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <Building2 className="w-8 h-8" />,
                  title: 'Smart Contract Analysis',
                  description: 'Advanced static analysis of contract code, formal verification methods, and dependency mapping to assess implementation risks.',
                  metrics: ['Code Quality Score', 'Vulnerability Index', 'Upgrade Risk Assessment']
                },
                {
                  icon: <Database className="w-8 h-8" />,
                  title: 'Liquidity Depth Modeling',
                  description: 'Real-time analysis of order book depth, slippage calculations, and market impact assessment for large institutional trades.',
                  metrics: ['Market Impact Analysis', 'Liquidity Concentration', 'Execution Cost Modeling']
                },
                {
                  icon: <Activity className="w-8 h-8" />,
                  title: 'Economic Security Assessment',
                  description: 'Evaluation of protocol economics, tokenomics sustainability, and governance security through game-theoretic analysis.',
                  metrics: ['Economic Stability Score', 'Governance Risk Rating', 'Token Distribution Analysis']
                }
              ].map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <GlassCard className="p-6 h-full">
                    <div className="text-blue-400 mb-4">{method.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{method.title}</h3>
                    <p className="text-slate-300 leading-relaxed mb-4">{method.description}</p>
                    <div className="space-y-2">
                      {method.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-slate-400 text-sm">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Solutions Section */}
      <AnimatedSection>
        <section id="solutions" className="py-20 bg-slate-950/30 backdrop-blur-sm relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">
                Enterprise <span className="text-blue-400">Solutions</span>
              </h2>
              <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                Comprehensive suite of institutional-grade tools designed for professional DeFi investment and risk management.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: 'Risk Analytics Platform',
                  description: 'Real-time risk assessment with custom alerting, stress testing scenarios, and portfolio optimization recommendations.',
                  features: ['VaR Calculations', 'Stress Testing', 'Scenario Analysis', 'Custom Alerts']
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: 'Protocol Due Diligence',
                  description: 'Comprehensive protocol evaluation including technical audits, economic analysis, and governance assessment.',
                  features: ['Technical Audits', 'Economic Models', 'Governance Review', 'Risk Scoring']
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: 'Portfolio Monitoring',
                  description: 'Continuous monitoring of DeFi positions with real-time risk metrics and automated rebalancing suggestions.',
                  features: ['Position Tracking', 'Risk Metrics', 'Rebalancing', 'Performance Analytics']
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: 'Institutional Reporting',
                  description: 'Regulatory-compliant reporting with detailed attribution analysis and risk decomposition for stakeholders.',
                  features: ['Compliance Reports', 'Attribution Analysis', 'Risk Decomposition', 'Stakeholder Dashboards']
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <GlassCard className="p-6 h-full">
                    <div className="text-blue-400 mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                    <p className="text-slate-300 leading-relaxed mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-slate-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Trust & Security Section */}
      <AnimatedSection>
        <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">
                Enterprise-Grade <span className="text-blue-400">Security</span>
              </h2>
              <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                Built with institutional security standards and compliance frameworks from day one.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Lock className="w-8 h-8" />,
                  title: 'Data Security',
                  description: 'End-to-end encryption, zero-knowledge architecture, and SOC 2 Type II compliance ensure your data remains secure.',
                  certifications: ['SOC 2 Type II', 'ISO 27001', 'GDPR Compliant']
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: 'Access Controls',
                  description: 'Multi-factor authentication, role-based permissions, and audit trails provide granular access management.',
                  certifications: ['SSO Integration', 'RBAC', 'Audit Logging']
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: 'Infrastructure',
                  description: 'Multi-region deployment, 99.99% uptime SLA, and disaster recovery ensure continuous availability.',
                  certifications: ['99.99% SLA', 'Multi-Region', 'DR Planning']
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="p-6 h-full">
                    <div className="text-blue-400 mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                    <p className="text-slate-300 leading-relaxed mb-4">{item.description}</p>
                    <div className="space-y-2">
                      {item.certifications.map((cert, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-green-400" />
                          <span className="text-slate-400 text-sm">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Research Process */}
      <AnimatedSection>
        <section id="research" className="py-20 bg-slate-950/40 backdrop-blur-sm border-y border-blue-500/10 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">
                Research <span className="text-blue-400">Methodology</span>
              </h2>
              <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                Our systematic approach to DeFi protocol analysis combines quantitative metrics with qualitative assessment 
                to provide comprehensive risk evaluation.
              </p>
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  step: '01',
                  icon: <Database className="w-6 h-6" />,
                  title: 'Data Collection & Aggregation',
                  description: 'Comprehensive data harvesting from multiple sources including on-chain analytics, protocol APIs, social sentiment, and governance activity.',
                  details: ['Real-time blockchain data ingestion', 'Social sentiment analysis', 'Governance participation tracking', 'Market data aggregation']
                },
                {
                  step: '02',
                  icon: <Calculator className="w-6 h-6" />,
                  title: 'Quantitative Risk Modeling',
                  description: 'Application of advanced statistical models and machine learning algorithms to identify risk patterns and predict protocol behavior.',
                  details: ['Monte Carlo simulations', 'Machine learning risk prediction', 'Statistical correlation analysis', 'Volatility modeling']
                },
                {
                  step: '03',
                  icon: <Shield className="w-6 h-6" />,
                  title: 'Security Assessment',
                  description: 'Multi-layered security evaluation including smart contract audits, economic attack vector analysis, and governance vulnerability assessment.',
                  details: ['Formal verification methods', 'Economic attack modeling', 'Governance security analysis', 'Historical exploit analysis']
                },
                {
                  step: '04',
                  icon: <TrendingUp className="w-6 h-6" />,
                  title: 'Risk Rating & Validation',
                  description: 'Synthesis of quantitative and qualitative factors into actionable risk ratings with continuous backtesting and validation.',
                  details: ['Multi-factor risk scoring', 'Backtesting framework', 'Peer review process', 'Continuous validation']
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="text-3xl font-bold text-blue-400 min-w-[80px]">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="text-blue-400">{item.icon}</div>
                          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        </div>
                        <p className="text-slate-300 mb-4">{item.description}</p>
                        <div className="grid md:grid-cols-2 gap-2">
                          {item.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                              <span className="text-slate-400 text-sm">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">
                Ready to Transform Your <span className="text-blue-400">DeFi Strategy?</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Join leading institutional investors who trust GLORIA FINANCE for professional-grade 
                DeFi risk analysis and portfolio management. Start with our comprehensive platform today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    to="/dapp"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 inline-flex items-center space-x-3 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 border border-blue-400/20"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500/30 rounded-lg flex items-center justify-center">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <span>Launch Analysis Platform</span>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-12 border-t border-blue-500/20 bg-slate-950/80 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Logo size="md" animated={false} />
              <p className="text-slate-400 mt-2">Institutional DeFi risk intelligence</p>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-slate-300">Powered by Solana</span>
              </motion.div>
              
              <div className="hidden md:block">
                <SolanaPrice />
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-blue-500/20 text-center text-slate-400">
            <p>&copy; 2025 GLORIA FINANCE. All rights reserved. | Licensed by Financial Conduct Authority</p>
          </div>
        </div>
      </footer>

      {/* CA Coming Soon Pop-up */}
      <motion.div
        className="fixed bottom-6 left-6 z-50"
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
      >
        <div className="bg-slate-900/90 backdrop-blur-md border border-blue-500/30 rounded-lg px-4 py-3 shadow-lg shadow-blue-500/10">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white">
              CA: <span className="text-blue-400">Coming Soon</span>
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage; 