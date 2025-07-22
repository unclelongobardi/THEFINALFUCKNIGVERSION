import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight,
  ChevronDown,
} from 'lucide-react';
import GlassCard from './GlassCard';
import Logo from './Logo';

interface Section {
  id: string;
  title: string;
  subsections?: { id: string; title: string }[];
}

const Whitepaper: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<string[]>(['introduction']);

  const sections: Section[] = [
    {
      id: 'overview',
      title: 'Executive Summary'
    },
    {
      id: 'introduction',
      title: 'Introduction',
      subsections: [
        { id: 'problem', title: 'The Problem' },
        { id: 'solution', title: 'Our Solution' },
        { id: 'market', title: 'Market Opportunity' }
      ]
    },
    {
      id: 'strategy',
      title: 'Mission & Vision',
      subsections: [
        { id: 'mission', title: 'Mission Statement' },
        { id: 'vision', title: 'Vision & Goals' },
        { id: 'values', title: 'Core Values' }
      ]
    },
    {
      id: 'team',
      title: 'Team & Leadership',
      subsections: [
        { id: 'founder', title: 'Founder & CTO' },
        { id: 'roadmap', title: 'Development Roadmap' }
      ]
    },
    {
      id: 'technology',
      title: 'Technology Stack',
      subsections: [
        { id: 'architecture', title: 'Platform Architecture' },
        { id: 'security', title: 'Security Framework' },
        { id: 'performance', title: 'Performance Metrics' }
      ]
    },
    {
      id: 'tokenomics',
      title: 'BONK Integration',
      subsections: [
        { id: 'launch', title: 'July 22 Launch' }
      ]
    },
    {
      id: 'beta',
      title: 'Beta Phase',
      subsections: [
        { id: 'current-phase', title: 'Current Phase' }
      ]
    },
    {
      id: 'compliance',
      title: 'Regulatory Compliance'
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-12">
            <div>
              <h1 className="text-4xl font-bold text-white mb-4 font-display bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                GLORIA FINANCE
              </h1>
              <p className="text-xl text-zinc-300 mb-6">
                Institutional-Grade DeFi Risk Intelligence Platform
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 mb-8"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-8 text-center backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-2">Launch Date</h3>
                <p className="text-2xl font-bold text-zinc-300 mb-1">July 22, 2025</p>
                <p className="text-sm text-amber-400 font-medium">BONK Integration</p>
              </div>
              
              <div className="bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-8 text-center backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-2">Current Phase</h3>
                <p className="text-2xl font-bold text-zinc-300 mb-1">Beta Testing</p>
                <p className="text-sm text-amber-400 font-medium">Active Development</p>
              </div>
              
              <div className="bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-8 text-center backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-2">Target Market</h3>
                <p className="text-2xl font-bold text-zinc-300 mb-1">Institutional DeFi</p>
                <p className="text-sm text-amber-400 font-medium">Risk Intelligence</p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-6">Executive Summary</h2>
              <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                GLORIA FINANCE represents a paradigm shift in decentralized finance risk assessment, 
                bringing institutional-grade analytics and professional risk management tools to the 
                rapidly evolving Solana ecosystem. Our platform bridges the gap between traditional 
                finance requirements and DeFi innovation.
              </p>

              <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8 mb-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-amber-400 mb-6">Key Highlights</h3>
                <ul className="text-zinc-300 space-y-4 text-lg">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    Developed by Aiden Mavov, former Phantom team member with deep Solana expertise
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    Launching with BONK integration on July 22, 2025
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    Currently in beta phase with active institutional user testing
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    Bloomberg Terminal-level analytics for DeFi protocols
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    Comprehensive risk assessment using quantitative methodologies
                  </li>
                </ul>
              </div>

              <p className="text-zinc-300 text-lg leading-relaxed">
                Our platform serves institutional investors, fund managers, family offices, and 
                sophisticated traders who require professional-grade risk analysis for DeFi investment 
                decisions. Through proprietary risk models and real-time monitoring, GLORIA FINANCE 
                enables confident institutional participation in the decentralized finance ecosystem.
              </p>
            </div>
          </div>
        );

      case 'problem':
        return (
          <div className="space-y-10">
            <h1 className="text-3xl font-bold text-white mb-8">The Problem</h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-zinc-300 text-lg leading-relaxed mb-12">
                The decentralized finance ecosystem has reached critical mass with over $200 billion in Total Value Locked (TVL), 
                yet institutional capital allocation remains constrained by fundamental infrastructure gaps. Traditional 
                financial institutions require Bloomberg Terminal-equivalent analytics, automated risk monitoring, 
                and regulatory-compliant reporting frameworks that current DeFi tooling cannot provide.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-8">Current Market Challenges</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-white mb-6">Risk Assessment Gap</h3>
                  <ul className="text-zinc-300 space-y-3 text-lg">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-zinc-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      No standardized risk metrics
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-zinc-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      Lack of institutional reporting
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-zinc-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      Insufficient audit coverage
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-zinc-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      Manual due diligence processes
                    </li>
                  </ul>
                </div>

                <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-white mb-6">Data Fragmentation</h3>
                  <ul className="text-zinc-300 space-y-3 text-lg">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-zinc-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      Scattered data sources
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-zinc-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      Inconsistent metrics
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-zinc-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      Real-time monitoring gaps
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-zinc-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      No unified analytics platform
                    </li>
                  </ul>
                </div>

                <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-white mb-6">Compliance Barriers</h3>
                  <ul className="text-zinc-300 space-y-3 text-lg">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-zinc-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      Regulatory uncertainty
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-zinc-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      Lack of audit trails
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-zinc-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      Insufficient reporting tools
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-zinc-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      Complex legal frameworks
                    </li>
                  </ul>
                </div>

                <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-white mb-6">Technical Complexity</h3>
                  <ul className="text-zinc-300 space-y-3 text-lg">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-zinc-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      Steep learning curves
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-zinc-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      Protocol-specific knowledge
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-zinc-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      Smart contract risks
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-zinc-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      Network effects analysis
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-amber-400 mb-4">The $50B Opportunity Gap</h4>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  Institutional investors manage over $50 billion in assets that could be allocated to DeFi 
                  strategies, but current tooling doesn't meet their risk management and compliance requirements. 
                  This represents the largest untapped market in decentralized finance.
                </p>
              </div>
            </div>
          </div>
        );

      case 'solution':
        return (
          <div className="space-y-10">
            <h1 className="text-3xl font-bold text-white mb-8">Our Solution</h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-zinc-300 text-lg leading-relaxed mb-12">
                GLORIA FINANCE provides a comprehensive institutional-grade platform that transforms 
                how professional investors analyze, assess, and manage DeFi investments. Our solution 
                addresses every aspect of institutional DeFi adoption.
              </p>

              <div className="grid lg:grid-cols-2 gap-12 mb-12">
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-8">Core Platform Features</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-6 backdrop-blur-sm">
                      <h3 className="text-lg font-semibold text-white mb-3">Risk Intelligence Engine</h3>
                      <p className="text-zinc-300 leading-relaxed">
                        Proprietary GLORIA Risk Assessment Model (GRAM) with real-time monitoring 
                        across 5 key risk dimensions.
                      </p>
                    </div>

                    <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-6 backdrop-blur-sm">
                      <h3 className="text-lg font-semibold text-white mb-3">Performance Analytics</h3>
                      <p className="text-zinc-300 leading-relaxed">
                        Bloomberg Terminal-level analytics with Sharpe ratios, VaR calculations, 
                        and institutional reporting standards.
                      </p>
                    </div>

                    <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-6 backdrop-blur-sm">
                      <h3 className="text-lg font-semibold text-white mb-3">Smart Contract Analysis</h3>
                      <p className="text-zinc-300 leading-relaxed">
                        Automated vulnerability assessment, formal verification methods, 
                        and dependency mapping for all protocols.
                      </p>
                    </div>

                    <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-6 backdrop-blur-sm">
                      <h3 className="text-lg font-semibold text-white mb-3">Liquidity Intelligence</h3>
                      <p className="text-zinc-300 leading-relaxed">
                        Real-time market depth analysis, slippage calculations, and execution 
                        optimization for large institutional trades.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-white mb-8">Institutional Benefits</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Risk Management</h3>
                      <ul className="text-zinc-300 space-y-2">
                        <li>• Real-time portfolio monitoring</li>
                        <li>• Automated risk alerts</li>
                        <li>• Stress testing scenarios</li>
                        <li>• Correlation analysis</li>
                      </ul>
                    </div>

                    <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Compliance & Reporting</h3>
                      <ul className="text-zinc-300 space-y-2">
                        <li>• SEC-compliant reporting</li>
                        <li>• Audit trail generation</li>
                        <li>• Regulatory framework mapping</li>
                        <li>• Stakeholder dashboards</li>
                      </ul>
                    </div>

                    <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Operational Efficiency</h3>
                      <ul className="text-zinc-300 space-y-2">
                        <li>• Automated due diligence</li>
                        <li>• One-click protocol analysis</li>
                        <li>• Portfolio optimization</li>
                        <li>• Team collaboration tools</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-amber-400 mb-4">Competitive Advantage</h4>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  GLORIA FINANCE is the first platform purpose-built for institutional DeFi adoption, 
                  combining deep Solana expertise from our Phantom alumni team with traditional finance 
                  risk management methodologies. Our BONK integration provides native ecosystem alignment 
                  while maintaining enterprise-grade security standards.
                </p>
              </div>
            </div>
          </div>
        );

      case 'mission':
        return (
          <div className="space-y-12">
            <h1 className="text-3xl font-bold text-white mb-8">Mission Statement</h1>
            
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-12 backdrop-blur-sm text-center">
              <h2 className="text-2xl font-bold text-amber-400 mb-8">Our Mission</h2>
              <p className="text-zinc-300 text-xl leading-relaxed mb-8">
                To democratize institutional-quality DeFi analysis, empowering fund managers, family offices, 
                and corporate treasuries with Bloomberg Terminal-level insights that enable confident, 
                data-driven investment decisions in the rapidly evolving decentralized finance ecosystem.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-amber-400 rounded"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Institutional Grade</h3>
                  <p className="text-zinc-400">Professional analytics meeting traditional finance standards</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-zinc-300 rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Risk Intelligence</h3>
                  <p className="text-zinc-400">Comprehensive risk assessment and monitoring capabilities</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-6 h-6 bg-amber-400 rounded-full mx-auto"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">DeFi Innovation</h3>
                  <p className="text-zinc-400">Bridging traditional finance with decentralized opportunities</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'vision':
        return (
          <div className="space-y-10">
            <h1 className="text-3xl font-bold text-white mb-8">Vision Statement</h1>
            
            <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-12 mb-12">
              <blockquote className="text-xl text-white font-medium leading-relaxed italic text-center">
                "To become the global standard for institutional DeFi risk intelligence, 
                powering the next trillion dollars of capital allocation into decentralized 
                finance through unparalleled analysis, transparency, and professional-grade tools."
              </blockquote>
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-white mb-8">Vision Roadmap</h2>
              
              <div className="space-y-8 mb-12">
                <div className="relative">
                  <div className="flex items-start space-x-6">
                    <div className="bg-amber-400 text-black rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-4">Solana Ecosystem Leader (2024-2025)</h3>
                      <p className="text-zinc-300 text-lg leading-relaxed">
                        Establish GLORIA FINANCE as the definitive risk intelligence platform for 
                        Solana DeFi, covering 100% of major protocols with real-time monitoring 
                        and institutional-grade analytics.
                      </p>
                    </div>
                  </div>
                  <div className="ml-5 mt-4 mb-8 w-px h-12 bg-zinc-600"></div>
                </div>

                <div className="relative">
                  <div className="flex items-start space-x-6">
                    <div className="bg-zinc-300 text-black rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-4">Multi-Chain Expansion (2025-2026)</h3>
                      <p className="text-zinc-300 text-lg leading-relaxed">
                        Extend our risk intelligence capabilities across Ethereum, Polygon, and 
                        other major DeFi ecosystems, providing unified cross-chain portfolio 
                        management and risk assessment.
                      </p>
                    </div>
                  </div>
                  <div className="ml-5 mt-4 mb-8 w-px h-12 bg-zinc-600"></div>
                </div>

                <div className="relative">
                  <div className="flex items-start space-x-6">
                    <div className="bg-zinc-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-4">Global Industry Standard (2026-2027)</h3>
                      <p className="text-zinc-300 text-lg leading-relaxed">
                        Become the Bloomberg Terminal equivalent for DeFi, with regulatory 
                        endorsement and adoption by major financial institutions worldwide. 
                        Shape industry standards for DeFi risk assessment.
                      </p>
                    </div>
                  </div>
                  <div className="ml-5 mt-4 mb-8 w-px h-12 bg-zinc-600"></div>
                </div>

                <div className="relative">
                  <div className="flex items-start space-x-6">
                    <div className="bg-amber-400 text-black rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-4">Financial Infrastructure (2027+)</h3>
                      <p className="text-zinc-300 text-lg leading-relaxed">
                        Evolve into core financial infrastructure powering institutional DeFi 
                        allocation decisions globally, facilitating trillion-dollar capital flows 
                        into decentralized finance protocols.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8 text-center">
                  <h4 className="text-lg font-semibold text-white mb-4">Market Impact</h4>
                  <p className="text-zinc-300">
                    Enable $1T+ institutional DeFi allocation by becoming the trusted 
                    risk intelligence standard
                  </p>
                </div>

                <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8 text-center">
                  <h4 className="text-lg font-semibold text-white mb-4">Global Reach</h4>
                  <p className="text-zinc-300">
                    Serve 10,000+ institutional clients across 50+ countries with 
                    localized compliance frameworks
                  </p>
                </div>

                <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8 text-center">
                  <h4 className="text-lg font-semibold text-white mb-4">Industry Leadership</h4>
                  <p className="text-zinc-300">
                    Define risk assessment standards adopted by regulators and 
                    financial institutions worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'founder':
        return (
          <div className="space-y-12">
            <h1 className="text-3xl font-bold text-white mb-8">Founder & CTO</h1>
            
            <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-12 backdrop-blur-sm">
              <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-zinc-600">
                    <img
                      src="https://i.ibb.co/spKy2mMb/Imavov-PFP.jpg"
                      alt="Aiden Mavov"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-3xl font-bold text-white mb-3">Aiden Mavov</h2>
                  <p className="text-xl text-amber-400 font-medium mb-8">Founder & Chief Technology Officer</p>
                  
                  <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                    Aiden brings deep expertise in blockchain infrastructure and institutional finance systems 
                    to GLORIA FINANCE. As a former core team member at Phantom, one of Solana's most prominent 
                    wallet providers, he gained invaluable insights into the technical challenges and user experience 
                    requirements of institutional DeFi adoption.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-zinc-800/50 border border-zinc-700/50 rounded-xl">
                      <p className="text-lg font-semibold text-white">Phantom Core Team</p>
                      <p className="text-sm text-zinc-400 mt-2">Infrastructure & Security</p>
                    </div>
                    
                    <div className="text-center p-6 bg-zinc-800/50 border border-zinc-700/50 rounded-xl">
                      <p className="text-lg font-semibold text-white">Solana Breakpoint</p>
                      <p className="text-sm text-zinc-400 mt-2">Best Security Innovation 2023</p>
                    </div>
                    
                    <div className="text-center p-6 bg-zinc-800/50 border border-zinc-700/50 rounded-xl">
                      <p className="text-lg font-semibold text-white">GitHub Star</p>
                      <p className="text-sm text-zinc-400 mt-2">100K+ contributions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-amber-400 mb-6">Vision & Leadership</h3>
              <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                Under Aiden's technical leadership, GLORIA FINANCE is positioned to become the definitive 
                institutional-grade DeFi risk intelligence platform. His unique combination of deep Solana 
                ecosystem knowledge and institutional finance understanding drives our product vision.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-6 text-center">
                  <h4 className="text-lg font-semibold text-white mb-4">Technical Excellence</h4>
                  <p className="text-zinc-400">
                    Deep blockchain infrastructure expertise with proven track record in high-scale systems
                  </p>
                </div>
                
                <div className="bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-6 text-center">
                  <h4 className="text-lg font-semibold text-white mb-4">Institutional Focus</h4>
                  <p className="text-zinc-400">
                    Understanding of enterprise requirements and regulatory compliance needs
                  </p>
                </div>
                
                <div className="bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-6 text-center">
                  <h4 className="text-lg font-semibold text-white mb-4">Ecosystem Integration</h4>
                  <p className="text-zinc-400">
                    Strong connections within Solana ecosystem and broader DeFi community
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'launch':
        return (
          <div className="space-y-10">
            <h1 className="text-3xl font-bold text-white mb-8">July 22 Launch Event</h1>
            
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-12 mb-12 text-center">
              <h2 className="text-3xl font-bold text-amber-400 mb-4">BONK Integration Launch</h2>
              <p className="text-xl text-zinc-300 font-medium mb-8">July 22, 2025 • 12:00 PM UTC</p>
              <p className="text-zinc-300 text-lg leading-relaxed">
                GLORIA FINANCE officially launches with native BONK integration, marking a new era 
                of institutional DeFi analysis on Solana. This strategic partnership brings together 
                professional risk intelligence with the most vibrant memecoin ecosystem.
              </p>
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-white mb-8">Launch Highlights</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-white mb-6">BONK Ecosystem Integration</h3>
                  <ul className="text-zinc-300 space-y-3 text-lg">
                    <li>• Native BONK token utility implementation</li>
                    <li>• Exclusive access features for BONK holders</li>
                    <li>• Premium analytics for BONK-related protocols</li>
                    <li>• Community governance participation rights</li>
                    <li>• Staking rewards for platform contributors</li>
                  </ul>
                </div>

                <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Platform Launch Features</h3>
                  <ul className="text-zinc-300 space-y-3 text-lg">
                    <li>• Full institutional dashboard access</li>
                    <li>• 250+ Solana protocols covered</li>
                    <li>• Real-time risk monitoring system</li>
                    <li>• Professional reporting suite</li>
                    <li>• API access for institutional clients</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-8">Strategic Partnership Benefits</h3>
              
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="text-center bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Community Alignment</h4>
                  <p className="text-zinc-300">
                    Leverage BONK's massive community of 1M+ holders for platform adoption 
                    and feedback during beta phase
                  </p>
                </div>

                <div className="text-center bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Ecosystem Integration</h4>
                  <p className="text-zinc-300">
                    Deep integration with Solana's most recognized token provides 
                    natural ecosystem alignment and liquidity access
                  </p>
                </div>

                <div className="text-center bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Market Validation</h4>
                  <p className="text-zinc-300">
                    Partnership with established Solana project validates our approach 
                    and provides credibility with institutional investors
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'current-phase':
        return (
          <div className="space-y-10">
            <h1 className="text-3xl font-bold text-white mb-8">Current Beta Phase</h1>
            
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-12 mb-12 text-center">
              <h2 className="text-3xl font-bold text-amber-400 mb-4">Beta v0.9.2</h2>
              <p className="text-xl text-zinc-300 font-medium mb-8">Active Development Phase • Pre-Launch Testing</p>
              <p className="text-zinc-300 text-lg leading-relaxed">
                We are currently in an intensive beta testing phase with select institutional partners, 
                refining our platform based on real-world usage and professional feedback before the 
                July 22 public launch.
              </p>
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-white mb-6">Beta Program Overview</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8 text-center">
                  <h3 className="text-lg font-semibold text-white mb-4">Beta Partners</h3>
                  <div className="text-3xl font-bold text-amber-400 mb-2">47</div>
                  <p className="text-zinc-400">Institutional testers</p>
                </div>

                <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8 text-center">
                  <h3 className="text-lg font-semibold text-white mb-4">Active Sessions</h3>
                  <div className="text-3xl font-bold text-amber-400 mb-2">1,247</div>
                  <p className="text-zinc-400">Hours of usage</p>
                </div>

                <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8 text-center">
                  <h3 className="text-lg font-semibold text-white mb-4">Feedback Score</h3>
                  <div className="text-3xl font-bold text-amber-400 mb-2">4.8/5</div>
                  <p className="text-zinc-400">User satisfaction</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Beta Partner Profiles</h3>
                  <div className="space-y-4">
                    <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Institutional Funds</h4>
                      <p className="text-zinc-300">15 partners • $23M AUM</p>
                    </div>

                    <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Family Offices</h4>
                      <p className="text-zinc-300">12 partners • $8.9M AUM</p>
                    </div>

                    <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Corporate Treasuries</h4>
                      <p className="text-zinc-300">8 partners • $11M AUM</p>
                    </div>

                    <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Hedge Funds</h4>
                      <p className="text-zinc-300">12 partners • $18M AUM</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Testing Focus Areas</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                      <h4 className="font-semibold text-blue-400 mb-2">Risk Assessment Accuracy</h4>
                      <p className="text-slate-300 text-sm">
                        Validating our GRAM model against real market events and partner 
                        portfolio performance to ensure predictive accuracy.
                      </p>
                    </div>

                    <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                      <h4 className="font-semibold text-green-400 mb-2">User Experience Flow</h4>
                      <p className="text-slate-300 text-sm">
                        Testing workflow efficiency for institutional users with varying 
                        levels of DeFi experience and technical expertise.
                      </p>
                    </div>

                    <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                      <h4 className="font-semibold text-purple-400 mb-2">Performance & Scalability</h4>
                      <p className="text-slate-300 text-sm">
                        Load testing with high-volume data feeds and concurrent user 
                        sessions to ensure enterprise-grade performance.
                      </p>
                    </div>

                    <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                      <h4 className="font-semibold text-amber-400 mb-2">Compliance Integration</h4>
                      <p className="text-slate-300 text-sm">
                        Testing regulatory reporting features and audit trail generation 
                        with compliance teams at partner institutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-400 mb-3">Key Beta Insights</h4>
                <ul className="text-slate-300 space-y-2">
                  <li>• 94% of partners report significant improvement in DeFi due diligence speed</li>
                  <li>• Risk assessment accuracy validated against 12 major market events</li>
                  <li>• Platform performance maintained under 50+ concurrent institutional users</li>
                  <li>• Compliance reporting features approved by 3 major audit firms</li>
                  <li>• User onboarding time reduced from 2 weeks to 2 hours based on feedback</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'values':
        return (
          <div className="space-y-12">
            <h1 className="text-3xl font-bold text-white mb-8">Core Values</h1>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-6">Institutional Rigor</h3>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  We maintain the highest standards of analytical precision and methodological rigor, 
                  ensuring our platform meets the demanding requirements of institutional investors 
                  and regulatory frameworks.
                </p>
              </div>

              <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-6">Innovation Bridge</h3>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  We bridge the gap between traditional finance expertise and DeFi innovation, 
                  translating complex blockchain protocols into familiar risk assessment frameworks 
                  that institutional investors understand and trust.
                </p>
              </div>

              <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-6">Excellence First</h3>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  Excellence permeates every aspect of our platform, from data accuracy and security 
                  protocols to user experience design. We never compromise on quality in our pursuit 
                  of institutional-grade DeFi intelligence.
                </p>
              </div>

              <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-6">Client Partnership</h3>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  We view our clients as strategic partners, working collaboratively to understand 
                  their unique risk tolerance, investment objectives, and operational requirements 
                  to deliver tailored DeFi intelligence solutions.
                </p>
              </div>

              <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-6">Security Paramount</h3>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  Security is not an afterthought but the foundation upon which our entire platform 
                  is built. We implement enterprise-grade security measures and compliance frameworks 
                  to protect client data and maintain regulatory adherence.
                </p>
              </div>

              <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-6">Global Perspective</h3>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  We maintain a global perspective on DeFi markets, regulatory environments, and 
                  institutional needs, ensuring our platform serves diverse markets while adapting 
                  to local compliance and operational requirements.
                </p>
              </div>
            </div>
          </div>
        );

      case 'market':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-white mb-6">Market Opportunity</h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                The institutional DeFi market represents a $2.3 trillion opportunity, with traditional financial 
                institutions actively seeking regulated, professional-grade entry points into decentralized finance.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-6">Total Addressable Market (TAM)</h2>
                  
                  <div className="space-y-8">
                    <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8">
                      <div className="text-center mb-6">
                        <span className="text-4xl font-bold text-amber-400">$2.3T</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-4">Institutional Assets Under Management</h3>
                      <p className="text-zinc-300 text-lg">
                        Global AUM seeking digital asset allocation strategies
                      </p>
                    </div>

                    <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8">
                      <div className="text-center mb-6">
                        <span className="text-4xl font-bold text-amber-400">$47B</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-4">Current DeFi Market Cap</h3>
                      <p className="text-zinc-300 text-lg">
                        Serviceable Available Market (SAM) for institutional tools
                      </p>
                    </div>

                    <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8">
                      <div className="text-center mb-6">
                        <span className="text-4xl font-bold text-amber-400">$1.2B</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-4">Risk Analytics Market</h3>
                      <p className="text-zinc-300 text-lg">
                        Serviceable Obtainable Market (SOM) for GLORIA FINANCE
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-white mb-6">Market Drivers</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Regulatory Clarity</h4>
                      <p className="text-zinc-300 text-lg leading-relaxed">
                        Institutional frameworks like MiCA in Europe and evolving US regulations 
                        creating compliant entry pathways.
                      </p>
                    </div>

                    <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Institutional Adoption</h4>
                      <p className="text-zinc-300 text-lg leading-relaxed">
                        Major banks and asset managers allocating 2-5% of portfolios to 
                        digital assets, requiring professional tooling.
                      </p>
                    </div>

                    <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Risk Management Evolution</h4>
                      <p className="text-zinc-300 text-lg leading-relaxed">
                        Traditional risk models inadequate for DeFi, creating demand for 
                        specialized analytics platforms.
                      </p>
                    </div>

                    <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Yield Opportunities</h4>
                      <p className="text-zinc-300 text-lg leading-relaxed">
                        DeFi yields significantly outperforming traditional markets, 
                        driving institutional interest despite risk concerns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
                );

      case 'architecture':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-white mb-6">Platform Architecture</h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                GLORIA FINANCE is built on a modern, scalable architecture designed for institutional-grade 
                performance, reliability, and security. Our platform leverages cutting-edge technologies 
                to deliver real-time analytics and risk assessment at enterprise scale.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-6">Core Infrastructure</h2>
                  
                  <div className="space-y-8">
                    <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8">
                      <h3 className="text-xl font-semibold text-white mb-6">Microservices Architecture</h3>
                      <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                        Distributed microservices ensure scalability, fault tolerance, and independent 
                        deployment capabilities across all platform components.
                      </p>
                      <ul className="text-zinc-400 space-y-2">
                        <li>• Container-based deployment (Docker/Kubernetes)</li>
                        <li>• Auto-scaling based on demand</li>
                        <li>• Circuit breaker patterns for resilience</li>
                        <li>• Health monitoring and alerting</li>
                      </ul>
                    </div>

                    <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8">
                      <h3 className="text-xl font-semibold text-white mb-6">Data Layer</h3>
                      <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                        Multi-tier data architecture optimized for real-time analytics, 
                        historical analysis, and high-frequency data ingestion.
                      </p>
                      <ul className="text-zinc-400 space-y-2">
                        <li>• Time-series databases for market data</li>
                        <li>• Redis for caching and session management</li>
                        <li>• PostgreSQL for transactional data</li>
                        <li>• Data lakes for historical analytics</li>
                      </ul>
                    </div>

                    <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8">
                      <h3 className="text-xl font-semibold text-white mb-6">API Gateway</h3>
                      <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                        Centralized API management with rate limiting, authentication, 
                        and request routing for optimal performance and security.
                      </p>
                      <ul className="text-zinc-400 space-y-2">
                        <li>• RESTful and GraphQL endpoints</li>
                        <li>• WebSocket for real-time updates</li>
                        <li>• Rate limiting and throttling</li>
                        <li>• API versioning and documentation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-white mb-6">Blockchain Integration</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8">
                      <h3 className="text-xl font-semibold text-white mb-6">Solana Integration</h3>
                      <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                        Direct integration with Solana RPC nodes and specialized data providers 
                        for comprehensive on-chain analytics and monitoring.
                      </p>
                      <ul className="text-zinc-400 space-y-2">
                        <li>• Multiple RPC endpoint connections</li>
                        <li>• Program account monitoring</li>
                        <li>• Transaction signature tracking</li>
                        <li>• Real-time slot progression analysis</li>
                      </ul>
                    </div>

                    <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8">
                      <h3 className="text-xl font-semibold text-white mb-6">Data Indexing</h3>
                      <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                        Custom indexing infrastructure processes and stores blockchain data 
                        for fast querying and historical analysis.
                      </p>
                      <ul className="text-zinc-400 space-y-2">
                        <li>• Real-time transaction indexing</li>
                        <li>• Protocol-specific data extraction</li>
                        <li>• Cross-program state tracking</li>
                        <li>• Historical data backfilling</li>
                      </ul>
                    </div>

                    <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8">
                      <h3 className="text-xl font-semibold text-white mb-6">Risk Engine</h3>
                      <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                        Proprietary risk calculation engine processes market data and 
                        protocol metrics to generate real-time risk assessments.
                      </p>
                      <ul className="text-zinc-400 space-y-2">
                        <li>• Monte Carlo simulations</li>
                        <li>• Machine learning models</li>
                        <li>• Statistical correlation analysis</li>
                        <li>• Custom risk factor weighting</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Performance Specifications</h3>
                <p className="text-slate-300 mb-4">
                  Our architecture is designed to handle institutional-scale workloads with 
                  guaranteed performance and reliability metrics.
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">10k+</div>
                    <div className="text-sm text-slate-300">Requests/second</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">&lt;100ms</div>
                    <div className="text-sm text-slate-300">API Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">99.99%</div>
                    <div className="text-sm text-slate-300">Uptime SLA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-400 mb-1">24/7</div>
                    <div className="text-sm text-slate-300">Monitoring</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-400 mb-3">Scalability & Redundancy</h4>
                <p className="text-slate-300 mb-4">
                  Built for enterprise scale with multi-region deployment, automated failover, 
                  and horizontal scaling capabilities to support growing institutional adoption.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-white mb-2">Auto-scaling</h5>
                    <p className="text-slate-400 text-sm">Kubernetes-based horizontal pod autoscaling based on CPU, memory, and custom metrics</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-white mb-2">Disaster Recovery</h5>
                    <p className="text-slate-400 text-sm">Multi-region backups with &lt;5 minute RTO and &lt;1 hour RPO guarantees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-white mb-6">Security Framework</h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Security is paramount in institutional finance. GLORIA FINANCE implements defense-in-depth 
                security practices, zero-trust architecture, and continuous monitoring to protect 
                client data and platform integrity at the highest standards.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-6">Access Control & Authentication</h2>
                  
                  <div className="space-y-6">
                    <GlassCard className="p-6">
                      <div className="flex items-center mb-4">
                        <Shield className="w-8 h-8 text-green-400 mr-4" />
                        <h3 className="text-lg font-semibold text-white">Zero-Trust Architecture</h3>
                      </div>
                      <p className="text-slate-300 mb-3">
                        Every request is authenticated, authorized, and encrypted. No implicit 
                        trust is granted to any user, device, or network location.
                      </p>
                      <ul className="text-slate-400 text-sm space-y-1">
                        <li>• Multi-factor authentication (MFA) required</li>
                        <li>• Role-based access control (RBAC)</li>
                        <li>• Principle of least privilege</li>
                        <li>• Continuous identity verification</li>
                      </ul>
                    </GlassCard>

                    <GlassCard className="p-6">
                      <div className="flex items-center mb-4">
                        <Users className="w-8 h-8 text-blue-400 mr-4" />
                        <h3 className="text-lg font-semibold text-white">Identity Management</h3>
                      </div>
                      <p className="text-slate-300 mb-3">
                        Enterprise-grade identity and access management with support for 
                        federated authentication and single sign-on (SSO) integration.
                      </p>
                      <ul className="text-slate-400 text-sm space-y-1">
                        <li>• SAML 2.0 and OpenID Connect support</li>
                        <li>• Active Directory integration</li>
                        <li>• API key management and rotation</li>
                        <li>• Session management and timeout controls</li>
                      </ul>
                    </GlassCard>

                    <GlassCard className="p-6">
                      <div className="flex items-center mb-4">
                        <Lock className="w-8 h-8 text-purple-400 mr-4" />
                        <h3 className="text-lg font-semibold text-white">Data Encryption</h3>
                      </div>
                      <p className="text-slate-300 mb-3">
                        End-to-end encryption for data at rest and in transit using 
                        industry-standard encryption algorithms and key management.
                      </p>
                      <ul className="text-slate-400 text-sm space-y-1">
                        <li>• AES-256 encryption for data at rest</li>
                        <li>• TLS 1.3 for data in transit</li>
                        <li>• Hardware Security Module (HSM) integration</li>
                        <li>• Automated key rotation and escrow</li>
                      </ul>
                    </GlassCard>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-white mb-6">Monitoring & Threat Detection</h2>
                  
                  <div className="space-y-6">
                    <GlassCard className="p-6">
                      <div className="flex items-center mb-4">
                        <Eye className="w-8 h-8 text-amber-400 mr-4" />
                        <h3 className="text-lg font-semibold text-white">24/7 Security Operations</h3>
                      </div>
                      <p className="text-slate-300 mb-3">
                        Continuous security monitoring with real-time threat detection, 
                        automated incident response, and expert security analyst oversight.
                      </p>
                      <ul className="text-slate-400 text-sm space-y-1">
                        <li>• Security Information and Event Management (SIEM)</li>
                        <li>• Behavioral anomaly detection</li>
                        <li>• Automated threat response</li>
                        <li>• Security incident escalation procedures</li>
                      </ul>
                    </GlassCard>

                    <GlassCard className="p-6">
                      <div className="flex items-center mb-4">
                        <AlertTriangle className="w-8 h-8 text-red-400 mr-4" />
                        <h3 className="text-lg font-semibold text-white">Vulnerability Management</h3>
                      </div>
                      <p className="text-slate-300 mb-3">
                        Proactive vulnerability scanning, penetration testing, and 
                        security assessments to identify and remediate potential threats.
                      </p>
                      <ul className="text-slate-400 text-sm space-y-1">
                        <li>• Automated vulnerability scanning</li>
                        <li>• Quarterly penetration testing</li>
                        <li>• Code security reviews</li>
                        <li>• Third-party security audits</li>
                      </ul>
                    </GlassCard>

                    <GlassCard className="p-6">
                      <div className="flex items-center mb-4">
                        <Shield className="w-8 h-8 text-cyan-400 mr-4" />
                        <h3 className="text-lg font-semibold text-white">Compliance & Auditing</h3>
                      </div>
                      <p className="text-slate-300 mb-3">
                        Comprehensive audit trails, compliance monitoring, and 
                        regulatory reporting to meet institutional security requirements.
                      </p>
                      <ul className="text-slate-400 text-sm space-y-1">
                        <li>• Immutable audit logs</li>
                        <li>• Compliance dashboard and reporting</li>
                        <li>• Data retention and deletion policies</li>
                        <li>• Regulatory change monitoring</li>
                      </ul>
                    </GlassCard>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-red-400 mb-4">Incident Response Framework</h3>
                <p className="text-slate-300 mb-4">
                  Comprehensive incident response procedures ensure rapid detection, containment, 
                  and recovery from security incidents with minimal impact to operations.
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400 mb-1">&lt;5min</div>
                    <div className="text-sm text-slate-300">Detection Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-400 mb-1">&lt;15min</div>
                    <div className="text-sm text-slate-300">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">&lt;1hr</div>
                    <div className="text-sm text-slate-300">Containment Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">100%</div>
                    <div className="text-sm text-slate-300">Documentation</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Security Certifications & Standards</h4>
                <p className="text-slate-300 mb-4">
                  GLORIA FINANCE maintains the highest security certifications and adheres to 
                  international security standards required for institutional financial services.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-medium text-white mb-2">SOC 2 Type II</h5>
                    <p className="text-slate-400 text-sm">Annual independent audit of security, availability, and confidentiality controls</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-white mb-2">ISO 27001</h5>
                    <p className="text-slate-400 text-sm">Information security management system certification and continuous improvement</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-white mb-2">PCI DSS Level 1</h5>
                    <p className="text-slate-400 text-sm">Payment card industry data security standard compliance for financial data protection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
  
      case 'compliance':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-white mb-6">Regulatory Compliance</h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                GLORIA FINANCE is built with regulatory compliance at its core, ensuring institutional clients 
                can confidently adopt our platform within their existing legal and compliance frameworks.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-6">Compliance Framework</h2>
                  
                  <div className="space-y-6">
                    <GlassCard className="p-6">
                      <div className="flex items-center mb-4">
                        <Shield className="w-8 h-8 text-green-400 mr-4" />
                        <h3 className="text-lg font-semibold text-white">SOC 2 Type II Certification</h3>
                      </div>
                      <p className="text-slate-300 mb-3">
                        Comprehensive security, availability, and confidentiality controls audited by independent 
                        third parties, ensuring enterprise-grade operational security.
                      </p>
                      <ul className="text-slate-400 text-sm space-y-1">
                        <li>• Annual independent audits</li>
                        <li>• Continuous monitoring systems</li>
                        <li>• Access control documentation</li>
                        <li>• Data encryption protocols</li>
                      </ul>
                    </GlassCard>

                    <GlassCard className="p-6">
                      <div className="flex items-center mb-4">
                        <Globe className="w-8 h-8 text-blue-400 mr-4" />
                        <h3 className="text-lg font-semibold text-white">Multi-Jurisdictional Compliance</h3>
                      </div>
                      <p className="text-slate-300 mb-3">
                        Structured to comply with major financial regulations including EU MiCA, 
                        US SEC guidelines, and other international frameworks.
                      </p>
                      <ul className="text-slate-400 text-sm space-y-1">
                        <li>• EU MiCA compliance preparation</li>
                        <li>• US regulatory framework adherence</li>
                        <li>• FATF AML/KYC standards</li>
                        <li>• Cross-border data protection</li>
                      </ul>
                    </GlassCard>

                    <GlassCard className="p-6">
                      <div className="flex items-center mb-4">
                        <FileText className="w-8 h-8 text-purple-400 mr-4" />
                        <h3 className="text-lg font-semibold text-white">Institutional Reporting</h3>
                      </div>
                      <p className="text-slate-300 mb-3">
                        Comprehensive reporting capabilities meeting institutional audit requirements 
                        and regulatory disclosure standards.
                      </p>
                      <ul className="text-slate-400 text-sm space-y-1">
                        <li>• Automated compliance reports</li>
                        <li>• Audit trail maintenance</li>
                        <li>• Risk disclosure documentation</li>
                        <li>• Transaction monitoring logs</li>
                      </ul>
                    </GlassCard>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-white mb-6">Legal Structure</h2>
                  
                  <div className="space-y-6">
                    <GlassCard className="p-6">
                      <h3 className="text-lg font-semibold text-amber-400 mb-3">Corporate Entity</h3>
                      <p className="text-slate-300 mb-3">
                        GLORIA FINANCE operates through properly structured legal entities in 
                        compliant jurisdictions with appropriate licensing and registration.
                      </p>
                      <ul className="text-slate-400 text-sm space-y-1">
                        <li>• Delaware C-Corp structure</li>
                        <li>• Swiss data processing entity</li>
                        <li>• Regulatory sandbox participation</li>
                        <li>• Legal counsel oversight</li>
                      </ul>
                    </GlassCard>

                    <GlassCard className="p-6">
                      <h3 className="text-lg font-semibold text-red-400 mb-3">Risk Management</h3>
                      <p className="text-slate-300 mb-3">
                        Comprehensive risk management policies covering operational, 
                        technical, and regulatory risks with continuous monitoring.
                      </p>
                      <ul className="text-slate-400 text-sm space-y-1">
                        <li>• Operational risk frameworks</li>
                        <li>• Technical security protocols</li>
                        <li>• Regulatory change monitoring</li>
                        <li>• Incident response procedures</li>
                      </ul>
                    </GlassCard>

                    <GlassCard className="p-6">
                      <h3 className="text-lg font-semibold text-cyan-400 mb-3">Data Protection</h3>
                      <p className="text-slate-300 mb-3">
                        GDPR-compliant data handling with privacy-by-design principles 
                        and institutional-grade data security measures.
                      </p>
                      <ul className="text-slate-400 text-sm space-y-1">
                        <li>• GDPR compliance protocols</li>
                        <li>• Data minimization practices</li>
                        <li>• User consent management</li>
                        <li>• Data retention policies</li>
                      </ul>
                    </GlassCard>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Compliance Commitment</h3>
                <p className="text-slate-300 mb-4">
                  Our commitment to regulatory compliance goes beyond minimum requirements. We proactively 
                  engage with regulators, participate in industry standard-setting, and continuously 
                  update our practices to exceed evolving compliance expectations.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">100%</div>
                    <div className="text-sm text-slate-300">Compliance Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">24/7</div>
                    <div className="text-sm text-slate-300">Monitoring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">Zero</div>
                    <div className="text-sm text-slate-300">Violations</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Legal Partnerships</h4>
                <p className="text-slate-300 mb-4">
                  We work with leading legal and compliance firms to ensure our platform meets 
                  the highest institutional standards across all operating jurisdictions.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-white mb-2">Legal Counsel</h5>
                    <p className="text-slate-400 text-sm">Top-tier blockchain and financial regulation specialists</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-white mb-2">Compliance Consultants</h5>
                    <p className="text-slate-400 text-sm">Former regulators and institutional compliance experts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'roadmap':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-white mb-6">Development Roadmap</h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Our development roadmap outlines the strategic evolution of GLORIA FINANCE from beta launch 
                through enterprise-grade institutional platform leadership.
              </p>

              <div className="space-y-8">
                {/* Q3 2025 */}
                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className="w-4 h-4 bg-green-400 rounded-full mr-4"></div>
                    <h2 className="text-2xl font-semibold text-white">Q3 2025 - Platform Launch</h2>
                    <span className="ml-4 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm">Current</span>
                  </div>
                  <div className="ml-8 grid md:grid-cols-2 gap-6">
                    <GlassCard className="p-6">
                      <h3 className="font-semibold text-blue-400 mb-3">✅ Core Platform Features</h3>
                      <ul className="text-slate-300 space-y-2 text-sm">
                        <li>• BONK integration and launch (July 22)</li>
                        <li>• Institutional risk analytics dashboard</li>
                        <li>• Protocol scanner and monitoring</li>
                        <li>• Basic compliance reporting</li>
                        <li>• Beta partner onboarding</li>
                      </ul>
                    </GlassCard>
                    <GlassCard className="p-6">
                      <h3 className="font-semibold text-blue-400 mb-3">📊 Analytics Suite</h3>
                      <ul className="text-slate-300 space-y-2 text-sm">
                        <li>• Real-time risk scoring</li>
                        <li>• Liquidity depth analysis</li>
                        <li>• Portfolio optimization tools</li>
                        <li>• Market impact modeling</li>
                        <li>• Stress testing capabilities</li>
                      </ul>
                    </GlassCard>
                  </div>
                </div>

                {/* Q4 2025 */}
                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className="w-4 h-4 bg-blue-400 rounded-full mr-4"></div>
                    <h2 className="text-2xl font-semibold text-white">Q4 2025 - Enterprise Features</h2>
                  </div>
                  <div className="ml-8 grid md:grid-cols-2 gap-6">
                    <GlassCard className="p-6">
                      <h3 className="font-semibold text-purple-400 mb-3">🏢 Enterprise Integration</h3>
                      <ul className="text-slate-300 space-y-2 text-sm">
                        <li>• API access for institutional clients</li>
                        <li>• Custom dashboard development</li>
                        <li>• White-label solutions</li>
                        <li>• Enterprise SSO integration</li>
                        <li>• Advanced user permissions</li>
                      </ul>
                    </GlassCard>
                    <GlassCard className="p-6">
                      <h3 className="font-semibold text-purple-400 mb-3">🔐 Security & Compliance</h3>
                      <ul className="text-slate-300 space-y-2 text-sm">
                        <li>• SOC 2 Type II certification</li>
                        <li>• Enhanced audit trails</li>
                        <li>• Regulatory reporting automation</li>
                        <li>• Multi-jurisdictional compliance</li>
                        <li>• Insurance coverage implementation</li>
                      </ul>
                    </GlassCard>
                  </div>
                </div>

                {/* Q1 2026 */}
                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className="w-4 h-4 bg-amber-400 rounded-full mr-4"></div>
                    <h2 className="text-2xl font-semibold text-white">Q1 2026 - AI & Machine Learning</h2>
                  </div>
                  <div className="ml-8 grid md:grid-cols-2 gap-6">
                    <GlassCard className="p-6">
                      <h3 className="font-semibold text-amber-400 mb-3">🤖 AI-Powered Analytics</h3>
                      <ul className="text-slate-300 space-y-2 text-sm">
                        <li>• Predictive risk modeling</li>
                        <li>• Anomaly detection systems</li>
                        <li>• Automated alert optimization</li>
                        <li>• Market sentiment analysis</li>
                        <li>• Protocol behavior prediction</li>
                      </ul>
                    </GlassCard>
                    <GlassCard className="p-6">
                      <h3 className="font-semibold text-amber-400 mb-3">📈 Advanced Features</h3>
                      <ul className="text-slate-300 space-y-2 text-sm">
                        <li>• Portfolio rebalancing automation</li>
                        <li>• Cross-chain risk assessment</li>
                        <li>• Real-time correlation analysis</li>
                        <li>• Dynamic hedging strategies</li>
                        <li>• Performance attribution analysis</li>
                      </ul>
                    </GlassCard>
                  </div>
                </div>

                {/* Q2-Q4 2026 */}
                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className="w-4 h-4 bg-red-400 rounded-full mr-4"></div>
                    <h2 className="text-2xl font-semibold text-white">Q2-Q4 2026 - Market Leadership</h2>
                  </div>
                  <div className="ml-8 grid md:grid-cols-2 gap-6">
                    <GlassCard className="p-6">
                      <h3 className="font-semibold text-red-400 mb-3">🌐 Global Expansion</h3>
                      <ul className="text-slate-300 space-y-2 text-sm">
                        <li>• Multi-chain protocol support</li>
                        <li>• Additional blockchain integrations</li>
                        <li>• Regional compliance frameworks</li>
                        <li>• Local partnership development</li>
                        <li>• Institutional onboarding scaling</li>
                      </ul>
                    </GlassCard>
                    <GlassCard className="p-6">
                      <h3 className="font-semibold text-red-400 mb-3">🚀 Innovation Lab</h3>
                      <ul className="text-slate-300 space-y-2 text-sm">
                        <li>• Zero-knowledge privacy features</li>
                        <li>• Quantum-resistant security</li>
                        <li>• Advanced derivatives analytics</li>
                        <li>• Real-time settlement monitoring</li>
                        <li>• Next-gen risk modeling</li>
                      </ul>
                    </GlassCard>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Long-term Vision (2027+)</h3>
                <p className="text-slate-300 mb-4">
                  Position GLORIA FINANCE as the definitive institutional DeFi infrastructure, 
                  serving as the bridge between traditional finance and decentralized protocols.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">$10B+</div>
                    <div className="text-sm text-slate-300">Assets Under Analysis</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">500+</div>
                    <div className="text-sm text-slate-300">Enterprise Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">50+</div>
                    <div className="text-sm text-slate-300">Supported Protocols</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'performance':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-white mb-6">Performance Metrics</h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Real-time performance metrics demonstrating GLORIA FINANCE's operational excellence 
                and platform reliability during our beta testing phase.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8 text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">99.7%</div>
                  <div className="text-lg text-white font-medium">Platform Uptime</div>
                  <div className="text-sm text-zinc-400 mt-2">Last 90 days</div>
                </div>
                
                <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8 text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">15ms</div>
                  <div className="text-lg text-white font-medium">Average Latency</div>
                  <div className="text-sm text-zinc-400 mt-2">API response time</div>
                </div>
                
                <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8 text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">47</div>
                  <div className="text-lg text-white font-medium">Active Beta Partners</div>
                  <div className="text-sm text-zinc-400 mt-2">Institutional clients</div>
                </div>
                
                <div className="bg-zinc-900/30 border border-zinc-700/30 rounded-xl p-8 text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">$850M</div>
                  <div className="text-lg text-white font-medium">TVL Monitored</div>
                  <div className="text-sm text-zinc-400 mt-2">Across 250+ protocols</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-6">Technical Performance</h2>
                  
                  <div className="space-y-4">
                    <GlassCard className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-blue-400">Data Processing Speed</h3>

                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-slate-400">Real-time Updates</div>
                          <div className="text-white font-semibold">&lt; 100ms</div>
                        </div>
                        <div>
                          <div className="text-slate-400">Risk Calculations</div>
                          <div className="text-white font-semibold">&lt; 500ms</div>
                        </div>
                        <div>
                          <div className="text-slate-400">Report Generation</div>
                          <div className="text-white font-semibold">&lt; 2s</div>
                        </div>
                        <div>
                          <div className="text-slate-400">Data Sync</div>
                          <div className="text-white font-semibold">&lt; 5s</div>
                        </div>
                      </div>
                    </GlassCard>

                    <GlassCard className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-green-400">System Reliability</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-slate-300">Error Rate</span>
                          <span className="text-amber-400 font-semibold">0.03%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-300">Data Accuracy</span>
                          <span className="text-amber-400 font-semibold">99.97%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-300">Alert Precision</span>
                          <span className="text-amber-400 font-semibold">94.2%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-300">API Availability</span>
                          <span className="text-amber-400 font-semibold">99.98%</span>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-white mb-6">User Satisfaction</h2>
                  
                  <div className="space-y-4">
                    <GlassCard className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-amber-400">Beta Feedback Scores</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-slate-300">Overall Satisfaction</span>
                          <span className="text-amber-400 font-semibold">4.7/5.0</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-300">Ease of Use</span>
                          <span className="text-amber-400 font-semibold">4.5/5.0</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-300">Data Accuracy</span>
                          <span className="text-amber-400 font-semibold">4.8/5.0</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-300">Support Quality</span>
                          <span className="text-amber-400 font-semibold">4.9/5.0</span>
                        </div>
                      </div>
                    </GlassCard>

                    <GlassCard className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-purple-400">Adoption Metrics</h3>

                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-slate-300">Daily Active Users</span>
                          <span className="text-purple-400 font-semibold">89% of partners</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-300">Feature Adoption</span>
                          <span className="text-purple-400 font-semibold">76%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-300">Retention Rate</span>
                          <span className="text-purple-400 font-semibold">94%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-300">Referral Rate</span>
                          <span className="text-purple-400 font-semibold">68%</span>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Risk Analysis Accuracy</h3>
                <p className="text-slate-300 mb-4">
                  Our risk models have been validated against major market events, demonstrating 
                  superior prediction accuracy compared to traditional risk assessment methods.
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">12/12</div>
                    <div className="text-sm text-slate-300">Major Events Predicted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">87%</div>
                    <div className="text-sm text-slate-300">Prediction Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">2.4hrs</div>
                    <div className="text-sm text-slate-300">Average Lead Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-400 mb-1">0.02%</div>
                    <div className="text-sm text-slate-300">False Positive Rate</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-400 mb-3">Performance Guarantees</h4>
                <p className="text-slate-300 mb-4">
                  We stand behind our platform performance with SLA commitments and continuous monitoring.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-white mb-2">Uptime SLA</h5>
                    <p className="text-slate-400 text-sm">99.9% guaranteed uptime with automatic failover</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-white mb-2">Data Freshness</h5>
                    <p className="text-slate-400 text-sm">Real-time data updates within 100ms of on-chain events</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-white mb-6">Select a Section</h1>
            <p className="text-slate-300">
              Choose a section from the navigation to view detailed information about GLORIA FINANCE.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white relative whitepaper-container">
      <div className="flex min-h-screen">
        {/* Sidebar Navigation */}
        <div className="w-80 bg-zinc-900/80 backdrop-blur-md border-r border-zinc-700/50 fixed left-0 top-0 h-full z-30 overflow-y-auto scrollbar-thin whitepaper-sidebar">
          <div className="p-6 border-b border-zinc-700/50 bg-zinc-900/90 sticky top-0 z-40">
            <div className="flex items-center space-x-4 mb-4">
              <Logo size="md" animated={false} />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">GLORIA FINANCE</h1>
                <p className="text-sm text-zinc-400">Whitepaper v1.0</p>
              </div>
            </div>
          </div>

          <nav className="p-4 pb-20">
            {sections.map((section) => (
              <div key={section.id} className="mb-2">
                                  <button
                    onClick={() => {
                      if (section.subsections) {
                        toggleSection(section.id);
                      } else {
                        setActiveSection(section.id);
                      }
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                      activeSection === section.id
                        ? 'bg-amber-500/10 border border-amber-500/30 text-amber-300'
                        : 'text-zinc-300 hover:bg-zinc-800/50 hover:text-white'
                    }`}
                  >
                    <span className="font-medium">{section.title}</span>
                    {section.subsections && (
                      expandedSections.includes(section.id) 
                        ? <ChevronDown className="w-4 h-4" />
                        : <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                
                <AnimatePresence>
                  {section.subsections && expandedSections.includes(section.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-6 mt-2 space-y-1 overflow-hidden"
                    >
                      {section.subsections.map((subsection) => (
                        <button
                          key={subsection.id}
                          onClick={() => setActiveSection(subsection.id)}
                          className={`w-full text-left p-2 rounded-lg transition-colors duration-200 ${
                            activeSection === subsection.id
                              ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-medium'
                              : 'text-zinc-400 hover:bg-zinc-800/30 hover:text-zinc-200'
                          }`}
                        >
                          {subsection.title}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-80 whitepaper-content">
          <div className="max-w-4xl mx-auto p-8 relative z-10">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper; 