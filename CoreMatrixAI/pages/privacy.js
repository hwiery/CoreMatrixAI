import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPage = () => {
  const { t, language } = useLanguage();

  return (
    <div className={`min-h-screen bg-black text-white py-20 ${language === 'ko' ? 'korean' : 'english'}`}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-400">{t('privacy.privacy_policy.last_updated')}</p>
        </div>
    
        {/* 데이터 수집 섹션 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-500">{t('privacy.privacy_policy.sections.data_collection.title')}</h2>
          <p className="mb-4">{t('privacy.privacy_policy.sections.data_collection.content')}</p>
          
          <div className="ml-4 mb-6">
            <h3 className="text-xl font-medium mb-3">{t('privacy.privacy_policy.sections.data_collection.types.user_provided.title')}</h3>
            <ul className="list-disc list-inside space-y-2">
              {t('privacy.privacy_policy.sections.data_collection.types.user_provided.items').map((item, index) => (
                <li key={index} className="text-gray-300">{item}</li>
              ))}
            </ul>
          </div>

          <div className="ml-4">
            <h3 className="text-xl font-medium mb-3">{t('privacy.privacy_policy.sections.data_collection.types.automatic.title')}</h3>
            <ul className="list-disc list-inside space-y-2">
              {t('privacy.privacy_policy.sections.data_collection.types.automatic.items').map((item, index) => (
                <li key={index} className="text-gray-300">{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 데이터 사용 섹션 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-500">{t('privacy.privacy_policy.sections.data_usage.title')}</h2>
          <p className="mb-4">{t('privacy.privacy_policy.sections.data_usage.content')}</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {t('privacy.privacy_policy.sections.data_usage.purposes').map((purpose, index) => (
              <li key={index} className="text-gray-300">{purpose}</li>
            ))}
          </ul>
        </section>

        {/* 데이터 공유 섹션 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-500">{t('privacy.privacy_policy.sections.data_sharing.title')}</h2>
          <p className="mb-4">{t('privacy.privacy_policy.sections.data_sharing.content')}</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {t('privacy.privacy_policy.sections.data_sharing.conditions').map((condition, index) => (
              <li key={index} className="text-gray-300">{condition}</li>
            ))}
          </ul>
        </section>

        {/* 보안 섹션 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-500">{t('privacy.privacy_policy.sections.security.title')}</h2>
          <p className="text-gray-300">{t('privacy.privacy_policy.sections.security.content')}</p>
        </section>

        {/* 데이터 보유 기간 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-500">{t('privacy.privacy_policy.sections.retention.title')}</h2>
          <p className="text-gray-300">{t('privacy.privacy_policy.sections.retention.content')}</p>
        </section>

        {/* 사용자 권리 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-500">{t('privacy.privacy_policy.sections.user_rights.title')}</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {t('privacy.privacy_policy.sections.user_rights.rights').map((right, index) => (
              <li key={index} className="text-gray-300">{right}</li>
            ))}
          </ul>
        </section>

        {/* 쿠키 사용 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-500">{t('privacy.privacy_policy.sections.cookies.title')}</h2>
          <p className="text-gray-300">{t('privacy.privacy_policy.sections.cookies.content')}</p>
        </section>

        {/* 정책 변경 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-500">{t('privacy.privacy_policy.sections.policy_changes.title')}</h2>
          <p className="text-gray-300">{t('privacy.privacy_policy.sections.policy_changes.content')}</p>
        </section>

        {/* 연락처 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-500">{t('privacy.privacy_policy.sections.contact.title')}</h2>
          <p className="text-gray-300">{t('privacy.privacy_policy.sections.contact.content')}</p>
          <p className="text-blue-400 mt-2">{t('privacy.privacy_policy.sections.contact.email')}</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;