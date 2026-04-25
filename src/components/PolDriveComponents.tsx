import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Shield, CheckCircle2, ChevronRight, Menu, X, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

// --- Shared Components ---

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', path: '/' },
    { name: 'Processus', path: '/process' },
    { name: 'Tarifs', path: '/pricing' },
    { name: 'Locations', path: '/locations' },
    { name: 'Support', path: '/support' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b",
      scrolled ? "bg-white/95 backdrop-blur-sm border-slate-200 py-2 shadow-sm" : "bg-white border-transparent py-4"
    )}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="text-2xl font-display font-bold text-navy tracking-tight">
          PolDrive <span className="text-gold">Hub</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-semibold uppercase tracking-wider transition-colors hover:text-gold",
                location.pathname === link.path ? "text-gold border-b-2 border-gold pb-1" : "text-slate-500"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-4 w-px bg-slate-300" />
          <button className="text-xs font-bold text-slate-400 hover:text-navy uppercase">PL / EN</button>
          <button className="bg-gold text-white px-6 py-2.5 rounded text-xs font-bold uppercase tracking-widest hover:scale-95 transition-transform">
            Appliquer
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-navy" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 p-6 space-y-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-gold"
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full bg-navy text-white py-3 rounded font-bold uppercase tracking-widest text-xs">
            Commencer
          </button>
        </motion.div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <h3 className="text-xl font-display font-bold mb-6">PolDrive Hub</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            L'excellence de l'institutionnalisme moderne dans l'accompagnement administratif pour les conducteurs en Pologne.
          </p>
          <div className="flex space-x-4 text-slate-400">
            <Globe className="cursor-pointer hover:text-gold transition-colors" size={20} />
            <Mail className="cursor-pointer hover:text-gold transition-colors" size={20} />
            <Phone className="cursor-pointer hover:text-gold transition-colors" size={20} />
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg mb-6">Services</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><Link to="/" className="hover:text-gold hover:underline underline-offset-4">Échange de permis</Link></li>
            <li><Link to="/" className="hover:text-gold hover:underline underline-offset-4">Nouveau permis</Link></li>
            <li><Link to="/" className="hover:text-gold hover:underline underline-offset-4">Traductions assermentées</Link></li>
            <li><Link to="/" className="hover:text-gold hover:underline underline-offset-4">Immatriculation</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-6">Ressources</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><Link to="/" className="hover:text-gold hover:underline underline-offset-4">Politique de confidentialité</Link></li>
            <li><Link to="/" className="hover:text-gold hover:underline underline-offset-4">Mentions légales</Link></li>
            <li><Link to="/" className="hover:text-gold hover:underline underline-offset-4">Accessibilité</Link></li>
            <li><Link to="/process" className="hover:text-gold hover:underline underline-offset-4">Guide du processus</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-6">Contact</h4>
          <p className="text-slate-400 text-sm mb-2">Al. Jerozolimskie 100</p>
          <p className="text-slate-400 text-sm mb-6">00-001 Varsovie, Pologne</p>
          <button className="text-gold font-bold text-xs uppercase tracking-widest flex items-center group">
            Vérifier un dossier <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs uppercase tracking-widest">
        © 2024 Polish National Driver Agency. Excellence Moderniste Institutionnelle.
      </div>
    </footer>
  );
}

// --- Page Content Components ---

export function Home() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAemM-K82Zo5CV4J7u6GUAuyWBH-O0cE9VKWGPe92ZkVsMxkLctcTuK3KfppyZPBaKbL8iW9n0gkXqEBJ5nn6Js6MMFB7BAgL-YtfN63a8V32-hods3lSaUqT8l14iZZ5Aeod2lYlZ3Lgrw-mA8gcM8sSw1t7LXWQlcTyHqfCXhjP9X6CTlICcN9UphfAS1PNX4_WZmfZ2ll5_QwRKH-VktcUfVRFkEpAr9DmrDCif6BioT2a1cdQrunEcfANNiStOyWExAtDNNMLM1" 
            alt="Silver car" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
              Solutions d'Experts pour vos Besoins de Conduite
            </h1>
            <p className="text-white/80 text-xl font-light mb-10 leading-relaxed">
              Naviguer dans les réglementations routières polonaises exige de la précision. PolDrive Hub assure conformité et mobilité pour la communauté internationale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gold text-white px-10 py-4 rounded font-bold uppercase tracking-widest shadow-xl hover:shadow-gold/20 transition-all">
                Lancer ma demande
              </button>
              <button className="bg-transparent border border-white text-white px-10 py-4 rounded font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                Voir les services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Bento */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-navy font-bold mb-4">Nos Services de Référence</h2>
          <div className="w-16 h-1 bg-gold mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 bg-white border border-slate-100 p-10 rounded shadow-sm hover:shadow-xl transition-all group">
            <div className="flex justify-between items-start mb-8">
              <div className="bg-surface-container p-4 rounded text-navy group-hover:bg-gold group-hover:text-white transition-colors">
                <Globe size={40} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
                Service Populaire
              </span>
            </div>
            <h3 className="text-3xl font-bold text-navy mb-4">Échange de Permis Étranger</h3>
            <p className="text-slate-600 mb-8 max-w-xl leading-relaxed">
              Échangez votre permis étranger contre un permis polonais. Nous gérons la vérification, les traductions assermentées et la coordination avec le Kommunikacja.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {['Évaluation d\'éligibilité', 'Légalisation de documents', 'Représentation officielle', 'Coordination biométrique'].map(item => (
                <div key={item} className="flex items-center space-x-3 text-sm text-slate-700">
                  <CheckCircle2 size={16} className="text-gold" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <button className="flex items-center font-bold uppercase tracking-widest text-xs group/btn">
              Commencer <ChevronRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="md:col-span-4 bg-surface-container-high p-10 rounded border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm">
                <Shield size={32} className="text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Permis Internationaux</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Obtenez un permis de convention 1949 ou 1968 pour une mobilité globale. Essentiel pour les courts séjours.
              </p>
            </div>
            <Link to="/pricing" className="text-navy font-bold uppercase tracking-widest text-xs flex items-center">
              En savoir plus <ArrowUpRight size={14} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Grid */}
      <section className="bg-surface py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
             {['Conseil Légal', 'Écoles Certifiées', 'Traducteurs Jurés', 'Liaison Ministérielle'].map(tag => (
               <div key={tag} className="flex flex-col items-center text-center">
                 <div className="w-12 h-12 bg-white rounded flex items-center justify-center mb-3 shadow-sm">
                    <Globe size={24} />
                 </div>
                 <span className="text-[10px] font-bold uppercase tracking-widest">{tag}</span>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function Process() {
  const steps = [
    { num: '01', title: 'Consultation Initiale', desc: 'Nous analysons votre dossier et vos documents gratuitement pour identifier tout obstacle potentiel.' },
    { num: '02', title: 'Collecte & Dossier', desc: 'Nous préparons tout le dossier, incluant les traductions assermentées et les apostilles nécessaires.' },
    { num: '03', title: 'Soumission Agence', desc: 'Nous gérons toutes les interactions avec le ministère polonais des transports (Communication office).' },
    { num: '04', title: 'Livraison Permis', desc: 'Recevez votre permis polonais légal, valide dans toute l\'UE, via un coursier sécurisé.' },
  ];

  return (
    <div className="pt-20">
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
           <span className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Excellence Procédurale</span>
           <h1 className="text-5xl font-bold text-navy mb-8 max-w-2xl">Un Processus Simple en 4 Étapes</h1>
           <p className="text-slate-600 text-lg max-w-xl">
             Notre approche institutionnelle rationalisée élimine le fardeau administratif de vos épaules.
           </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {steps.map((step, idx) => (
              <div key={step.num} className="relative group">
                <div className="flex items-center mb-6">
                  <div className={cn(
                    "w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold z-10 transition-colors",
                    idx === 0 ? "border-navy text-navy bg-white" : "border-slate-200 text-slate-300 bg-white group-hover:border-navy group-hover:text-navy"
                  )}>
                    {step.num}
                  </div>
                  {idx < 3 && <div className="hidden md:block absolute left-12 right-0 h-px bg-slate-200 -z-0" />}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Prêt à commencer ?</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">Rejoignez les milliers de conducteurs qui ont sécurisé leur liberté de mouvement en Europe.</p>
        <button className="bg-gold text-white px-10 py-4 rounded font-bold uppercase tracking-widest hover:brightness-110 transition-all">
          Évaluation gratuite
        </button>
      </section>
    </div>
  );
}

export function Pricing() {
  const packages = [
    { title: 'Support de Base', price: '299', desc: 'Idéal pour ceux qui ont juste besoin d\'une vérification et d\'un guide.' },
    { title: 'Échange Complet', price: '749', desc: 'L\'accompagnement de bout en bout pour l\'échange de votre permis.', recommended: true },
    { title: 'Concierge Premium', price: '1299', desc: 'Support total pour les nouveaux conducteurs, auto-école incluse.' },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 text-center max-w-7xl mx-auto px-8">
        <h1 className="text-5xl font-bold text-navy mb-4">Tarification Transparente</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">Pas de frais cachés. Choisissez le pack qui correspond à votre statut de résidence.</p>
      </section>

      <section className="pb-24 max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div key={pkg.title} className={cn(
            "p-10 rounded border flex flex-col transition-all duration-300",
            pkg.recommended ? "bg-navy text-white shadow-2xl scale-105 border-navy relative" : "bg-white border-slate-100 hover:shadow-xl"
          )}>
            {pkg.recommended && (
              <div className="absolute -top-4 right-8 bg-gold text-white text-[10px] px-3 py-1 rounded font-bold uppercase tracking-widest">
                Recommandé
              </div>
            )}
            <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">{pkg.price}</span>
              <span className={pkg.recommended ? "text-white/60" : "text-slate-400"}> PLN</span>
            </div>
            <p className={cn("text-sm mb-10 min-h-[3rem]", pkg.recommended ? "text-white/70" : "text-slate-500")}>
              {pkg.desc}
            </p>
            <div className="space-y-4 mb-12 flex-grow">
              {['Vérification documents', 'Guide procédures', 'Bureau dédié'].map(feat => (
                <div key={feat} className="flex items-center space-x-3 text-sm">
                  <CheckCircle2 size={16} className="text-gold" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
            <button className={cn(
              "w-full py-4 rounded font-bold uppercase tracking-widest text-xs transition-transform hover:scale-[0.98]",
              pkg.recommended ? "bg-gold text-white" : "bg-navy text-white"
            )}>
              Choisir ce pack
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

export function Support() {
  return (
    <div className="pt-20">
      <section className="py-24 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 space-y-12">
          <div>
            <h1 className="text-5xl font-bold text-navy mb-6">Nous Sommes Là Pour Vous Aider</h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Contactez nos experts institutionnels pour simplifier vos démarches administratives en Pologne.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center text-navy font-bold">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Assistance</p>
                <p className="text-2xl font-bold text-navy">+48 22 555 0192</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center text-navy font-bold">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">E-mail</p>
                <p className="text-2xl font-bold text-navy">consult@poldrive.pl</p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-surface-container-lowest border border-slate-100 rounded-xl">
            <h3 className="text-xl font-bold mb-6">Nos Bureaux</h3>
            <div className="space-y-4 text-sm text-slate-600">
              <p><strong>Varsovie :</strong> Al. Jerozolimskie 100, 00-001</p>
              <p><strong>Cracovie :</strong> ul. Pawia 5, 31-154</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white p-12 border border-slate-100 shadow-2xl rounded-xl">
           <h2 className="text-3xl font-bold text-navy mb-8">Réserver une Consultation</h2>
           <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input className="w-full p-4 border border-slate-200 rounded outline-none focus:border-gold transition-colors" placeholder="Nom complet" />
                <input className="w-full p-4 border border-slate-200 rounded outline-none focus:border-gold transition-colors" placeholder="Téléphone" />
              </div>
              <input className="w-full p-4 border border-slate-200 rounded outline-none focus:border-gold transition-colors" placeholder="E-mail" />
              <textarea className="w-full p-4 border border-slate-200 rounded outline-none focus:border-gold transition-colors min-h-[150px]" placeholder="Détails de votre demande..." />
              <button className="w-full bg-navy text-white py-5 rounded font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-colors">
                Demander un rendez-vous
              </button>
           </form>
        </div>
      </section>
    </div>
  );
}
