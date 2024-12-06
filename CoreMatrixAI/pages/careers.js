import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';

const CareersPage = () => {
  const { t, language } = useLanguage();

  const benefits = [
    {
      title: t('careers.careers.benefits.early.title'),
      description: t('careers.careers.benefits.early.description'),
      icon: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      title: t('careers.careers.benefits.global.title'),
      description: t('careers.careers.benefits.global.description'),
      icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9"
    },
    {
      title: t('careers.careers.benefits.community.title'),
      description: t('careers.careers.benefits.community.description'),
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    }
  ];

  const steps = [
    {
      title: t('careers.careers.steps.register.title'),
      description: t('careers.careers.steps.register.description')
    },
    {
      title: t('careers.careers.steps.match.title'),
      description: t('careers.careers.steps.match.description')
    },
    {
      title: t('careers.careers.steps.success.title'),
      description: t('careers.careers.steps.success.description')
    }
  ];

  return (
    <div className={`min-h-screen bg-black ${language === 'ko' ? 'korean' : 'english'}`}>
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/careers_city.jpg"
            alt="Developers collaborating"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t('careers.careers.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {t('careers.careers.hero.subtitle')}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Coming Soon Section */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-500 mb-6">
            {t('careers.careers.positions.title')}
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            {t('careers.careers.positions.description')}
          </p>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center text-emerald-500">
            {t('careers.careers.benefits.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg">
                <div className="text-emerald-500 mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d={benefit.icon} clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Registration Steps */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center text-emerald-500">
            {t('careers.careers.steps.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center smb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-emerald-500">
            {t('careers.careers.cta.title')}
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('careers.careers.cta.description')}
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-emerald-500 text-white py-4 px-8 rounded-lg hover:bg-emerald-400 transition-colors"
          >
            {t('careers.careers.cta.button')}
          </Link>
          <p className="text-gray-400 mt-4 text-sm">
            {t('careers.careers.cta.note')}
          </p>
        </section>
      </div>
    </div>
  );
};

export default CareersPage;