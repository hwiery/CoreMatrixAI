import React from 'react';
import { Button } from '../components/ui/button';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import { BiBrain } from 'react-icons/bi';
import { FaChartLine, FaUsers, FaCoins } from 'react-icons/fa';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import FAQ from '../components/FAQ';

const LandingPage = () => {
  const [heroRef, isHeroVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [benefitsRef, isBenefitsVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [storiesRef, isStoriesVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [ctaRef, isCtaVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [faqRef, isFaqVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [finalCtaRef, isFinalCtaVisible] = useIntersectionObserver({ threshold: 0.1 });
  const { t, language } = useLanguage();
  const router = useRouter();

  return (
    <div className={`min-h-screen bg-black text-white ${language === 'ko' ? 'korean' : 'english'}`}>
      {/* Hero 섹션 */}
      <section 
        ref={heroRef} 
        className={`relative min-h-screen flex items-center justify-center pt-32 overflow-hidden opacity-0 
          ${isHeroVisible ? 'animate-fade-in-up' : ''}`}
      >
        <div className="absolute inset-0">
          <Image 
            src="/images/mountain-sunset.jpg" 
            alt="Mountain Landscape" 
            layout="fill" 
            objectFit="cover" 
            objectPosition="center"
            quality={90}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <Button
                onClick={() => router.push('/contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                {t('hero.cta_primary')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits 섹션 */}
      <section 
        ref={benefitsRef}
        className={`py-24 bg-gradient-to-b from-black to-gray-900 opacity-0 
          ${isBenefitsVisible ? 'animate-fade-in-up' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">{t('benefits.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(t('benefits.items')).map(([key, item], index) => (
              <div 
                key={key} 
                className={`bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-duration-300 opacity-0
                  ${isBenefitsVisible ? 'animate-fade-in-up animate-delay-' + (index + 1) + '00' : ''}`}
              >
                {key === 'cost' && <FaCoins className="w-12 h-12 text-emerald-500 mb-4" />}
                {key === 'productivity' && <FaChartLine className="w-12 h-12 text-emerald-500 mb-4" />}
                {key === 'internship' && <BiBrain className="w-12 h-12 text-emerald-500 mb-4" />}
                {key === 'team' && <FaUsers className="w-12 h-12 text-emerald-500 mb-4" />}
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ 섹션 */}
      <section 
        ref={faqRef}
        className={`py-24 bg-gray-900 opacity-0 
          ${isFaqVisible ? 'animate-fade-in-up' : ''}`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <FAQ />
        </div>
      </section>

      {/* Final CTA 섹션 */}
      <section 
        ref={finalCtaRef}
        className={`bg-gradient-to-r from-blue-600 to-blue-700 py-20 opacity-0 
          ${isFinalCtaVisible ? 'animate-fade-in-up' : ''}`}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6 text-white">
            {t('final_cta.title')}
          </h2>
          <p className="text-xl mb-10 text-white/90">
            {t('final_cta.subtitle')}
          </p>
          <Button 
            onClick={() => router.push('/contact')}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-lg transform hover:scale-105 transition-all duration-300"
          >
            {t('final_cta.button')}
          </Button>
        </div>
      </section>
            {/* Developer CTA 섹션 */}
      <section 
        ref={ctaRef}
        className={`relative bg-gradient-to-br from-emerald-900 to-teal-900 py-32 overflow-hidden opacity-0 
          ${isCtaVisible ? 'animate-fade-in-up' : ''}`}
      >
        <div className="absolute inset-0 opacity-30">
          <Image 
            src="/images/india_city.jpg" 
            alt="Indian City"
            layout="fill"
            objectFit="cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('developer_cta.headline')}
            </h2>
            <p className="text-xl text-emerald-100 mb-12">
              {t('developer_cta.subtitle')}
            </p>
            <Button
              onClick={() => router.push('/join-developer')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-lg transform hover:scale-105 transition-all duration-300"
            >
              {t('developer_cta.button')}
            </Button>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(t('developer_cta.benefits')).map(([key, benefit]) => (
              <div key={key} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-emerald-400 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-emerald-100">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;