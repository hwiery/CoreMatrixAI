import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import { FaGlobe, FaChartLine, FaUsers, FaLightbulb } from 'react-icons/fa';

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[600px]">
        <Image 
          src="/images/about.jpg"
          alt="CoreMatrix AI About"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-30"
        
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t('about.hero_title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto">
            {t('about.hero_description')}
          </p>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">{t('about.who_we_are_title')}</h2>
        <p className="text-lg mb-12">
          {t('about.who_we_are_description')}
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-500">{t('about.stats.korean_companies_trust')}</h3>
            <p>{t('about.stats.korean_companies_trust_details')}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-500">{t('about.stats.successful_projects')}</h3>
            <p>{t('about.stats.successful_projects_details')}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-500">{t('about.stats.developers_network')}</h3>
            <p>{t('about.stats.developers_network_details')}</p>
          </div>
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">{t('about.our_vision_title')}</h2>
          <p className="text-lg">
            {t('about.our_vision_description')}
          </p>
        </div>
      </div>

      {/* Why Choose CoreMatrix Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('about.why_choose_title')}</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* For Businesses */}
          <div>
            <h3 className="text-2xl font-bold mb-6">{t('about.for_businesses.title')}</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <FaChartLine className="text-blue-500 mr-4 text-3xl" />
                <div>
                  <h4 className="font-bold">{t('about.for_businesses.cost_efficiency.title')}</h4>
                  <p>{t('about.for_businesses.cost_efficiency.description')}</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaLightbulb className="text-blue-500 mr-4 text-3xl" />
                <div>
                  <h4 className="font-bold">{t('about.for_businesses.project_timelines.title')}</h4>
                  <p>{t('about.for_businesses.project_timelines.description')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* For Developers */}
          <div>
            <h3 className="text-2xl font-bold mb-6">{t('about.for_developers.title')}</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <FaGlobe className="text-blue-500 mr-4 text-3xl" />
                <div>
                  <h4 className="font-bold">{t('about.for_developers.global_exposure.title')}</h4>
                  <p>{t('about.for_developers.global_exposure.description')}</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaUsers className="text-blue-500 mr-4 text-3xl" />
                <div>
                  <h4 className="font-bold">{t('about.for_developers.career_growth.title')}</h4>
                  <p>{t('about.for_developers.career_growth.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Impact Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">{t('about.our_impact_title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-4xl font-bold text-blue-500">{t('about.impact_stats.industries_served')}</h3>
              <p>{t('about.impact_stats.industries_served_details')}</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-500">{t('about.impact_stats.matching_accuracy')}</h3>
              <p>{t('about.impact_stats.matching_accuracy_details')}</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-500">{t('about.impact_stats.support')}</h3>
              <p>{t('about.impact_stats.support_details')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;