import React from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import Footer from './Footer';

const Layout = ({ children }) => {
  const router = useRouter();
  const { t, toggleLanguage, language } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* 고정 네비게이션 바 */}
      <div className="fixed top-2 left-0 right-0 bg-black bg-opacity-70 backdrop-blur-md p-4 rounded-lg z-50 mx-4 border-2 border-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/landing">
            <div className="hidden sm:block">
              <Image 
                src="/images/Logo3.svg" 
                alt="Logo" 
                width={150} 
                height={50} 
                className="cursor-pointer"
              />
            </div>
            <div className="sm:hidden">
              <Image 
                src="/images/Logo.svg" 
                alt="Logo" 
                width={120} 
                height={40} 
                className="cursor-pointer invert brightness-0"
              />
            </div>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/join-developer">
              <Button 
                variant="primary" 
                className="text-white text-xs sm:text-sm px-2 py-1 bg-green-600 hover:bg-green-700 whitespace-nowrap"
              >
                {t('developer_cta.button')}
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="primary" 
                className="bg-blue-600 text-white text-xs sm:text-sm px-2 py-1 hover:bg-blue-700 whitespace-nowrap"
              >
                {t('hero.cta_primary')}
              </Button>
            </Link>
            <Button 
              onClick={toggleLanguage} 
              className="flex items-center bg-black text-white text-xs sm:text-sm px-2"
            >
              <FaGlobe className="mr-2" />
              {language === 'en' ? 'En' : 'Ko'}
            </Button>
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;