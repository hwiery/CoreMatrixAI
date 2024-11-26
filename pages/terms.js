import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TermsPage = () => {
  const { t, language } = useLanguage();

  return (
    <div className={`min-h-screen bg-black text-white py-20 ${language === 'ko' ? 'korean' : 'english'}`}>
      <div className="max-w-4xl mx-auto px-4">
        {/* 최상단 타이틀 */}
        <div className="text-left mb-16">
          <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-400">{t('terms.terms.last_updated')}</p>
        </div>

        <div className="space-y-12">
          {/* 약관 동의 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-emerald-500">
              {t('terms.terms.sections.agreement.title')}
            </h2>
            <p className="text-gray-200 leading-relaxed">
              {t('terms.terms.sections.agreement.content')}
            </p>
          </section>

          {/* 서비스 제공 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-emerald-500">
              {t('terms.terms.sections.service.title')}
            </h2>
            <ul className="space-y-3 text-gray-200 ml-4">
              {t('terms.terms.sections.service.content').map((item, index) => (
                <li key={index} className="leading-relaxed list-disc">{item}</li>
              ))}
            </ul>
          </section>

          {/* 사용자의 의무 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-emerald-500">
              {t('terms.terms.sections.obligations.title')}
            </h2>
            <ul className="space-y-3 text-gray-200 ml-4">
              {t('terms.terms.sections.obligations.content').map((item, index) => (
                <li key={index} className="leading-relaxed list-disc">{item}</li>
              ))}
            </ul>
          </section>

          {/* 책임의 제한 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-emerald-500">
              {t('terms.terms.sections.liability.title')}
            </h2>
            <ul className="space-y-3 text-gray-200 ml-4">
              {t('terms.terms.sections.liability.content').map((item, index) => (
                <li key={index} className="leading-relaxed list-disc">{item}</li>
              ))}
            </ul>
          </section>

          {/* 지적 재산권 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-emerald-500">
              {t('terms.terms.sections.intellectual_property.title')}
            </h2>
            <ul className="space-y-3 text-gray-200 ml-4">
              {t('terms.terms.sections.intellectual_property.content').map((item, index) => (
                <li key={index} className="leading-relaxed list-disc">{item}</li>
              ))}
            </ul>
          </section>

          {/* 분쟁 해결 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-emerald-500">
              {t('terms.terms.sections.disputes.title')}
            </h2>
            <ul className="space-y-3 text-gray-200 ml-4">
              {t('terms.terms.sections.disputes.content').map((item, index) => (
                <li key={index} className="leading-relaxed list-disc">{item}</li>
              ))}
            </ul>
          </section>

          {/* 약관의 변경 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-emerald-500">
              {t('terms.terms.sections.changes.title')}
            </h2>
            <p className="text-gray-200 leading-relaxed">
              {t('terms.terms.sections.changes.content')}
            </p>
          </section>

          {/* 연락처 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-emerald-500">
              {t('terms.terms.sections.contact.title')}
            </h2>
            <p className="text-gray-200 leading-relaxed">
              {t('terms.terms.sections.contact.content')}
            </p>
            <p className="text-blue-400">
              {t('terms.terms.sections.contact.email')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;