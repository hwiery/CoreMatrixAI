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

  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) return t('contact.contact.validation.email.required');
        if (!emailRegex.test(value)) return t('contact.contact.validation.email.invalid');
        break;
      
      case 'mobile':
        const mobileRegex = /^[0-9-+()]{7,}$/;
        if (!value) return t('contact.contact.validation.mobile.required');
        if (!mobileRegex.test(value)) return t('contact.contact.validation.mobile.invalid');
        break;

      case 'fullName':
        if (!value) return t('contact.contact.validation.fullName.required');
        if (value.length < 2) return t('contact.contact.validation.fullName.minLength');
        break;

      case 'message':
        if (!value) return t('contact.contact.validation.message.required');
        if (value.length < 10) return t('contact.contact.validation.message.minLength');
        break;

      default:
        if (!value) return t('contact.contact.validation.required');
    }
    return '';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 전체 폼 유효성 검사
    const errors = Object.entries(formData)
      .map(([name, value]) => validateField(name, value))
      .filter(Boolean);

    if (errors.length > 0) {
      errors.forEach(error => toast.error(error));
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
        toast.success(t('contact.contact.contact_submit_success'));
        
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
        toast.error(result.message || t('contact.contact.contact_submit_error'));
      }

    } catch (error) {
      console.error('문의 제출 중 오류:', error);
      toast.error(t('contact.contact.contact_submit_error'));
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
              <CardTitle className="text-2xl text-white">{t('contact.contact.contact_title')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">
                  {t('contact.contact.full_name')} <span className="text-red-500">*</span>
                </label>
                <Input 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder={t('contact.contact.full_name_placeholder')}
                  className="bg-gray-800 border-gray-700 text-white"
                  required
                  title={t('contact.contact.validation.fullName.minLength')}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">
                  {t('contact.contact.email')} <span className="text-red-500">*</span>
                </label>
                <Input 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('contact.contact.email_placeholder')}
                  className="bg-gray-800 border-gray-700 text-white"
                  required
                  title={t('contact.contact.validation.email.invalid')}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">
                  {t('contact.contact.mobile')} <span className="text-red-500">*</span>
                </label>
                <Input 
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder={t('contact.contact.mobile_placeholder')}
                  className="bg-gray-800 border-gray-700 text-white"
                  required
                  title={t('contact.contact.validation.mobile.invalid')}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">
                  {t('contact.contact.company')} <span className="text-red-500">*</span>
                </label>
                <Input 
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder={t('contact.contact.company_placeholder')}
                  className="bg-gray-800 border-gray-700 text-white"
                  required
                  title={t('contact.contact.validation.company.required')}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">
                  {t('contact.contact.position')} <span className="text-red-500">*</span>
                </label>
                <Input 
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  placeholder={t('contact.contact.position_placeholder')}
                  className="bg-gray-800 border-gray-700 text-white"
                  required
                  title={t('contact.contact.validation.position.required')}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">
                  {t('contact.contact.message')} <span className="text-red-500">*</span>
                </label>
                <Input 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t('contact.contact.message_placeholder')}
                  className="bg-gray-800 border-gray-700 text-white"
                  required
                  title={t('contact.contact.validation.message.minLength')}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">
                  {t('contact.contact.referral')}
                </label>
                <Input 
                  name="referral"
                  value={formData.referral}
                  onChange={handleInputChange}
                  placeholder={t('contact.contact.referral_placeholder')}
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
                  {t('contact.contact.go_back')}
                </Button>
                <Button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 w-1/3 mx-2"
                  variant="primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('contact.contact.submitting') : t('contact.contact.submit')}
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