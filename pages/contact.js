import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLanguage } from '../contexts/LanguageContext';

const ContactPage = () => {
  const router = useRouter();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    company: '',
    position: '',
    message: '',
    referral: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 유효성 검사
    const requiredFields = ['fullName', 'email', 'mobile', 'company', 'position', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      toast.error(`${t('contact.fill_fields')}: ${missingFields.join(', ')}`);
      setIsSubmitting(false);
      return;
    }

    try {
      // MongoDB에 데이터 저장
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date(),
          status: 'new',
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(t('contact.contact_submit_success'));
        
        // 폼 초기화
        setFormData({
          fullName: '',
          email: '',
          mobile: '',
          company: '',
          position: '',
          message: '',
          referral: ''
        });

        // 3초 후 랜딩 페이지로 이동
        setTimeout(() => {
          router.push('/landing');
        }, 3000);
      } else {
        toast.error(result.message || t('contact.contact_submit_error'));
      }

    } catch (error) {
      console.error('문의 제출 중 오류:', error);
      toast.error(t('contact.contact_submit_error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 font-sans">
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        closeOnClick 
        pauseOnHover 
      />
      <div className="max-w-7xl mx-auto"> 
        <Card className="w-full bg-gray-900 border-gray-800">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl text-white">{t('contact.contact_title')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">
                  {t('contact.full_name')} <span className="text-red-500">*</span>
                </label>
                <Input 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder={t('contact.full_name_placeholder')}
                  className="bg-gray-800 border-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">
                  {t('contact.email')} <span className="text-red-500">*</span>
                </label>
                <Input 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('contact.email_placeholder')}
                  className="bg-gray-800 border-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">
                  {t('contact.mobile')} <span className="text-red-500">*</span>
                </label>
                <Input 
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder={t('contact.mobile_placeholder')}
                  className="bg-gray-800 border-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">
                  {t('contact.company')} <span className="text-red-500">*</span>
                </label>
                <Input 
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder={t('contact.company_placeholder')}
                  className="bg-gray-800 border-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">
                  {t('contact.position')} <span className="text-red-500">*</span>
                </label>
                <Input 
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  placeholder={t('contact.position_placeholder')}
                  className="bg-gray-800 border-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">
                  {t('contact.message')} <span className="text-red-500">*</span>
                </label>
                <Input 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t('contact.message_placeholder')}
                  className="bg-gray-800 border-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">
                  {t('contact.referral')}
                </label>
                <Input 
                  name="referral"
                  value={formData.referral}
                  onChange={handleInputChange}
                  placeholder={t('contact.referral_placeholder')}
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <div className="flex justify-center mt-4">
                <Button 
                  type="button"
                  onClick={() => router.push('/landing')}
                  className="bg-gray-800 hover:bg-gray-700 text-white w-1/3 mx-2"
                  disabled={isSubmitting}
                >
                  {t('contact.go_back')}
                </Button>
                <Button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 w-1/3 mx-2"
                  variant="primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('contact.submitting') : t('contact.submit')}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;