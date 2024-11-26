import React from 'react';
import { Button } from '../components/ui/button';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { BiBrain } from 'react-icons/bi';
import { FaChartLine, FaUsers, FaCoins, FaGlobe } from 'react-icons/fa';
import Link from 'next/link'; // Link 컴포넌트 import 추가
import { useLanguage } from '../contexts/LanguageContext';




const LandingPage = () => {
  
  const { t, toggleLanguage, language } = useLanguage(); // useLanguage 훅을 사용하여 t 함수와 toggleLanguage, language 가져오기
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* 상단 배경 이미지 */}
      <div className="bg-[url('/images/mountain-sunset.jpg')] bg-cover bg-center h-1/2">
        <div className="fixed top-2 left-0 right-0 bg-black bg-opacity-70 backdrop-blur-md p-4 rounded-lg z-50 mx-4 border-2 border-white">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <Image src="/images/Logo3.svg" alt="Logo" width={150} height={50} />
            <div className="flex items-center space-x-4">
              <Link href="/join-developer">
                <Button variant="primary" className="text-white text-sm sm:text-base px-2 sm:px-4 py-2">
                  {t('landing.join_as_developer')}
                </Button>
              </Link>
              <Button onClick={toggleLanguage} className="flex items-center bg-white text-black text-sm sm:text-base px-2">
                <FaGlobe className="mr-2" />
                {language === 'en' ? 'En' : 'Ko'}
              </Button>
            </div>
          </div>
        </div>

        {/* Hero 섹션 */}
        <section className="relative pt-40 pb-20">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              {t('landing.landing.accelerate_business')} <br />
              {t('landing.landing.with_proven_talent')}
            </h1>

            <Button
              variant="primary"
              className="mt-20 w-auto sm:w-auto bg-blue-600 hover:bg-blue-700 backdrop-blur-sm bg-opacity-90"
              onClick={() => router.push('/join-developer')}
            >
              ▶▷{t('landing.landing.join_as_developer')}◁◀
            </Button>
          </div>
        </section>
      </div>

      {/* 시장 성장과 필요성 섹션 */}
      <div className="bg-black py-20">
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-white text-lg mb-12 whitespace-pre-line">{t('landing.landing.hero')}</p>
            
            <div className="grid grid-cols-1 gap-8">
              {/* Cost Reduction 섹션 */}
              <div className="text-center p-6 bg-gray-800 rounded-lg border border-blue-500">
                <div className="text-6xl font-bold text-blue-500 mb-2">82.5%</div>
                <p className="text-xl text-gray-300 font-semibold"> {t('landing.landing.cost_reduction')}</p>
              </div>

              {/* Accuracy, Industries, Support 섹션 */}
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gray-800 rounded-lg border border-blue-500">
                  <div className="text-4xl font-bold text-blue-500 mb-2">95%</div>
                  <p className="text-lg text-gray-400">{t('landing.landing.accuracy')}</p>
                </div>
                
                <div className="text-center p-6 bg-gray-800 rounded-lg border border-blue-500">
                  <div className="text-4xl font-bold text-blue-500 mb-2">40+</div>
                  <p className="text-lg text-gray-400">{t('landing.landing.industries')}</p>
                </div>
                
                <div className="text-center p-6 bg-gray-800 rounded-lg border border-blue-500">
                  <div className="text-4xl font-bold text-blue-500 mb-2">24h</div>
                  <p className="text-lg text-gray-400">{t('landing.landing.support')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Why Choose Us? 섹션 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('landing.landing.why_choose_us')}</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <FaCoins className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-lg font-medium">{t('landing.landing.efficient_cost_management')}</h3>
              <p className="mt-2 text-gray-400">{t('landing.landing.efficient_cost_management_description')}</p>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <FaChartLine className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-lg font-medium">{t('landing.landing.exceptional_productivity')}</h3>
              <p className="mt-2 text-gray-400">{t('landing.landing.exceptional_productivity_description')}</p>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <BiBrain className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-lg font-medium">{t('landing.landing.paid_internship_offers')}</h3>
              <p className="mt-2 text-gray-400">{t('landing.landing.paid_internship_offers_description')}</p>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <FaUsers className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-lg font-medium">{t('landing.landing.customized_team_expansion')}</h3>
              <p className="mt-2 text-gray-400">{t('landing.landing.customized_team_expansion_description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">{t('landing.landing.transform_your_ai_vision')}</h2>
          <p className="text-xl mb-8 text-white">
            {t('landing.landing.lead_your_ai_project')}
          </p>
          <Button
            onClick={() => router.push('/join-developer')}
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3"
          >
            {t('landing.landing.join_as_developer')}
          </Button>
        </div>
      </section>

      {/* Footer 섹션 */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:contact@corematrix.ai" className="hover:text-white transition-colors">
                    contact@corematrix.ai
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; 2024 CoreMatrix AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;