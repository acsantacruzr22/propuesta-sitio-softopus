import { useEffect } from 'react';
import Header from './components/Header';
import PrivacyHero from './components/PrivacyHero';
import PrivacySidebar from './components/PrivacySidebar';
import PrivacyContent from './components/PrivacyContent';
import Footer from './components/Footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>('main > section[id]');
      const navLinks = document.querySelectorAll('#legal-toc a');
      let currentSection = '';
      const scrollPos = window.scrollY + 150;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSection = section.getAttribute('id') || '';
        }
      });

      navLinks.forEach((link) => {
        const href = link.getAttribute('href')?.replace('#', '');
        if (href === currentSection) {
          link.classList.add('bg-surface-container', 'text-primary', 'font-bold');
          link.classList.remove('text-on-surface-variant');
        } else {
          link.classList.remove('bg-surface-container', 'text-primary', 'font-bold');
          link.classList.add('text-on-surface-variant');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      <Header />
      <main className="w-full pt-20 bg-background min-h-[calc(100vh-80px)]">
        <PrivacyHero />
        <section className="max-w-[1200px] mx-auto px-5 md:px-6 lg:px-12 py-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <PrivacySidebar />
            <PrivacyContent />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;