import React from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Layout = ({ children }) => {
  const router = useRouter();
  const { t, toggleLanguage, language } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* 고정 네비게이션 바 */}
      <div className="fixed top-2 left-0 right-0 bg-black bg-opacity-70 backdrop-blur-md p-4 rounded-lg z-50 mx-4 border-2 border-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/landing">
            <Image 
              src="/images/Logo3.svg" 
              alt="Logo" 
              width={150} 
              height={50} 
              className="cursor-pointer"
            />
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/join-developer">
              <Button 
                variant="primary" 
                className="text-white text-sm sm:text-base px-2 sm:px-4 py-2"
              >
                {t('landing.join_as_developer')}
              </Button>
            </Link>
            <Button 
              onClick={toggleLanguage} 
              className="flex items-center bg-white text-black text-sm sm:text-base px-2"
            >
              <FaGlobe className="mr-2" />
              {language === 'en' ? 'En' : 'Ko'}
            </Button>
          </div>
        </div>
      </div>

      {/* 페이지 콘텐츠 (상단 네비게이션 바 아래) */}
      <div className="pt-20">
        {children}
      </div>
    </div>
  );
};

export default Layout;