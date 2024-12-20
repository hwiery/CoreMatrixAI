import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useRouter } from 'next/router';
import { getNationalities, getLanguages, getSkills, getCurrentLanguage, setLanguage } from '../src/data/data';
import { FaTimes, FaCheckCircle } from 'react-icons/fa'; // x 아이콘을 위한 react-icons 패키지
import { useLanguage } from '../contexts/LanguageContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

// Modal 스타일 설정
const customModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 1000,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#1F2937', // dark mode background
    borderRadius: '1rem',
    padding: '2rem',
    border: '1px solid #374151',
    maxWidth: '500px',
    width: '90%',
  },
};

const JoinDeveloper = () => {
  const { language, t } = useLanguage();
  const router = useRouter();

  const initialState = {
    name: '',
    email: '',
    phone: '',
    nationality: '',
    snsAddresses: [],
    educations: [{
      school: '',
      degree: '',
      major: '',
      graduationYear: '',
      status: '',
      gpa: ''
    }],
    experiences: [{
      company: '',
      project: '',
      period: '',
      title: '',
      description: ''
    }],
    languageProficiencies: [{
      language: '',
      level: ''
    }],
    skills: [],
    weekdayAvailability: {
      timezone: '',
      startTime: '',
      endTime: ''
    },
    weekendAvailability: {
      timezone: '',
      startTime: '',
      endTime: ''
    },
    startDate: '',
    status: 'active'
  };

  const [userInfo, setUserInfo] = useState(initialState);

  const [selectedSkills, setSelectedSkills] = useState([]);

  // 언어가 변경될 때마다 데이터 업데이트
  const [nationalities, setNationalities] = useState(getNationalities());
  const [languages, setLanguages] = useState(getLanguages());
  const [skills, setSkills] = useState(getSkills());

  useEffect(() => {
    setNationalities(getNationalities());
    setLanguages(getLanguages());
    setSkills(getSkills());
  }, []); // 언어 변경될 때마다 실행

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    });
  };

  const handleSnsAddressChange = (index, value) => {
    const updatedSnsAddresses = [...userInfo.snsAddresses];
    updatedSnsAddresses[index] = value;
    
    const filteredAddresses = updatedSnsAddresses.filter(address => address.trim() !== '');
    
    setUserInfo({
      ...userInfo,
      snsAddresses: filteredAddresses
    });
  };

  const addSnsAddress = () => {
    if (userInfo.snsAddresses.length < 5) {
      setUserInfo({
        ...userInfo,
        snsAddresses: [...userInfo.snsAddresses, '']
      });
    } else {
      alert(t('join-developer.sns.max_addresses'));
    }
  };

  const removeSnsAddress = (index) => {
    const updatedSnsAddresses = userInfo.snsAddresses.filter((_, i) => i !== index);
    setUserInfo({
      ...userInfo,
      snsAddresses: updatedSnsAddresses
    });
  };

  const handleLanguageChange = (index, field, value) => {
    const updatedLanguages = [...userInfo.languageProficiencies];
    updatedLanguages[index] = { ...updatedLanguages[index], [field]: value };
    setUserInfo({
      ...userInfo,
      languageProficiencies: updatedLanguages
    });
  };

  const emptyLanguageProficiency = {
    language: '',
    level: '',
    _id: null
  };

  const addLanguage = () => {
    if (userInfo.languageProficiencies.length < 5) {
      setUserInfo({
        ...userInfo,
        languageProficiencies: [...userInfo.languageProficiencies, { ...emptyLanguageProficiency }]
      });
    } else {
      toast.error(t('join-developer.personal_info.language.max_languages'));
    }
  };

  const removeLanguage = (index) => {
    const updatedLanguages = userInfo.languageProficiencies.filter((_, i) => i !== index);
    setUserInfo({
      ...userInfo,
      languageProficiencies: updatedLanguages
    });
  };

  const handleAvailabilityChange = (type, field, value) => {
    setUserInfo(prev => {
      const updatedAvailability = { ...prev[type] };
      
      if (field.includes('Hours')) {
        const timeKey = field.startsWith('start') ? 'startTime' : 'endTime';
        const minutes = updatedAvailability[timeKey]?.split(':')?.[1] || '00';
        updatedAvailability[timeKey] = `${value}:${minutes}`;
      } else if (field.includes('Minutes')) {
        const timeKey = field.startsWith('start') ? 'startTime' : 'endTime';
        const hours = updatedAvailability[timeKey]?.split(':')?.[0] || '00';
        updatedAvailability[timeKey] = `${hours}:${value}`;
      } else {
        updatedAvailability[field] = value;
      }

      return {
        ...prev,
        [type]: updatedAvailability
      };
    });
  };

  // 시간 값 파싱 헬퍼 함수
  const getTimeValues = (timeString) => {
    if (!timeString) return { hours: '', minutes: '' };
    const [hours, minutes] = timeString.split(':');
    return { hours: hours || '', minutes: minutes || '' };
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperiences = [...userInfo.experiences];
    updatedExperiences[index][name] = value;
    setUserInfo({
      ...userInfo,
      experiences: updatedExperiences
    });
  };

  const emptyExperience = {
    company: '',
    project: '',
    period: '',
    title: '',
    description: '',
    _id: null
  };

  const addExperience = () => {
    if (userInfo.experiences.length < 5) {
      setUserInfo({
        ...userInfo,
        experiences: [...userInfo.experiences, { ...emptyExperience }]
      });
    } else {
      toast.error(t('join-developer.experience.max_experiences'));
    }
  };

  const removeExperience = (index) => {
    if (userInfo.experiences.length <= 1) {
      alert(t('join-developer.experience.min_experiences'));
      return;
    }
    
    const updatedExperiences = userInfo.experiences.filter((_, i) => i !== index);
    setUserInfo({
      ...userInfo,
      experiences: updatedExperiences
    });
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value) return t('join-developer.validation.name.required');
        if (value.length < 2) return t('join-developer.validation.name.minLength');
        break;
      
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) return t('join-developer.validation.email.required');
        if (!emailRegex.test(value)) return t('join-developer.validation.email.invalid');
        break;
      
      case 'phone':
        const phoneRegex = /^[0-9-+()]{7,}$/;
        if (!value) return t('join-developer.validation.phone.required');
        if (!phoneRegex.test(value)) return t('join-developer.validation.phone.invalid');
        break;
      
      case 'nationality':
        if (!value) return t('join-developer.validation.nationality.required');
        break;

      case 'startDate':
        if (!value) return t('join-developer.validation.startDate.required');
        break;

      case 'educations':
        if (!value || value.length === 0) return t('join-developer.validation.education.required');
        for (const edu of value) {
          if (!edu.school) return t('join-developer.validation.education.school.required');
          if (!edu.major) return t('join-developer.validation.education.major.required');
          if (!edu.degree) return t('join-developer.validation.education.degree.required');
          if (!edu.graduationYear) return t('join-developer.validation.education.graduationYear.required');
        }
        break;
    }
    return '';
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 폼 유효성 검사
    const errors = validateForm();
    if (errors.length > 0) {
      errors.forEach(error => toast.error(error));
      return;
    }

    try {
      // API 요청 데이터 정리
      const submitData = {
        ...userInfo,
        snsAddresses: userInfo.snsAddresses.filter(address => address.trim() !== ''),
        skills: [...userInfo.skills], // 선택된 기술 스택 배열
        startDate: userInfo.startDate, // YYYY-MM-DD 형식
        status: 'active' // 상태 필드 추가
      };

      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      console.log('Response status:', response.status); // 응답 상태 로깅

      const data = await response.json();
      console.log('Response data:', data); // 응답 데이터 로깅

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      setIsModalOpen(true);
      
      setTimeout(() => {
        router.push('/');
      }, 10000);
    } catch (error) {
      console.error('Submit error:', error);
      toast.error(error.message || t('join-developer.messages.registration_error'));
    }
  };

  const handleTimeInput = (type, timeType, value) => {
    // 숫자만 입력 가능하도록
    if (!/^\d*$/.test(value)) return;

    const availability = type === 'weekdayAvailability' ? userInfo.weekdayAvailability : userInfo.weekendAvailability;
    const isStart = timeType.includes('start');
    const isHours = timeType.includes('Hours');
    
    let currentTime = isStart ? availability.startTime : availability.endTime;
    let [hours, minutes] = currentTime ? currentTime.split(':') : ['', ''];

    if (isHours) {
      // 시간 입력 검증 (00-23)
      if (value === '' || (parseInt(value) >= 0 && parseInt(value) <= 23)) {
        hours = value.padStart(2, '0');
        minutes = minutes || '00'; // minutes가 없으면 '00'으로 설정
      }
    } else {
      // 분 입력 검증 (00-59)
      if (value === '' || (parseInt(value) >= 0 && parseInt(value) <= 59)) {
        minutes = value.padStart(2, '0');
        hours = hours || '00'; // hours가 없으면 '00'으로 설정
      }
    }

    const newTime = `${hours}:${minutes}`;
    handleAvailabilityChange(type, isStart ? 'startTime' : 'endTime', newTime);
  };

  const toggleSkill = (skill) => {
    setUserInfo(prevState => {
      const updatedSkills = prevState.skills.includes(skill)
        ? prevState.skills.filter(s => s !== skill)
        : [...prevState.skills, skill];

      return {
        ...prevState,
        skills: updatedSkills
      };
    });
  };

  const addEducation = () => {
    if (userInfo.educations.length >= 3) return; // 최대 3개로 제한
    setUserInfo(prev => ({
      ...prev,
      educations: [...prev.educations, {
        school: '',
        major: '',
        degree: '',
        graduationYear: '',
        status: '',
        gpa: '',
        _id: null
      }]
    }));
  };

  const removeEducation = (index) => {
    setUserInfo(prev => ({
      ...prev,
      educations: prev.educations.filter((_, i) => i !== index)
    }));
  };

  const handleEducationChange = (index, field, value) => {
    setUserInfo(prev => ({
      ...prev,
      educations: prev.educations.map((edu, i) => 
        i === index 
          ? { ...edu, [field]: value }
          : edu
      )
    }));
  };

  // 교육 상태 옵션 추가
  const educationStatusOptions = [
    { value: 'graduated', label: t('join-developer.education.status.graduated') },
    { value: 'attending', label: t('join-developer.education.status.attending') },
    { value: 'leave', label: t('join-developer.education.status.leave') },
    { value: 'expected', label: t('join-developer.education.status.expected') }
  ];

  // 교육 정보 초기값에 status 추가
  const emptyEducation = {
    school: '',
    degree: '',
    major: '',
    graduationYear: '',
    status: '',
    gpa: '',
    _id: null
  };

  // 시작 가능 일자 처리 함수 수정
  const handleStartDateChange = (date) => {
    if (!date) return;
    
    const formattedDate = date.toISOString().split('T')[0];
    setUserInfo(prevState => ({
      ...prevState,
      startDate: formattedDate
    }));
  };

  // 폼 유효성 검사 추가
  const validateForm = () => {
    const errors = [];

    // 시작 가능 일자 필수 체크
    if (!userInfo.startDate) {
      errors.push(t('join-developer.validation.startDate.required'));
    }

    // 기술 스택 최소 1개 이상 선택 체크
    if (userInfo.skills.length === 0) {
      errors.push('최소 1개 이상의 기술을 선택해주세요.');
    }

    return errors;
  };

  return (
    <div className="container mx-auto p-4">
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      
      <Card>
        <CardHeader>
          <CardTitle className="text-white">{t('join-developer.title')}</CardTitle>
          <p className="text-sm text-white">{t('join-developer.subtitle')}</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} noValidate>
            {/* 개인정보 섹션 */}
            <div className="border p-4 mb-4 rounded bg-gray-800">
              <h2 className="text-lg font-bold mb-2 text-white">
                {t('join-developer.personal_info.title')}
              </h2>
              <p className="text-sm text-white mb-4">
                {t('join-developer.personal_info.subtitle')}
              </p>

              {/* 이름 입력 필드 */}
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">
                  {t('join-developer.personal_info.name')} <span className="text-red-500">*</span>
                </label>
                <Input 
                  name="name"
                  value={userInfo.name}
                  onChange={handleInputChange}
                  placeholder={t('join-developer.personal_info.name_placeholder')}
                  className="bg-gray-800 border-gray-600 text-white"
                  noValidate
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">
                  {t('join-developer.personal_info.email')} <span className="text-red-500">*</span>
                </label>
                <Input 
                  name="email"
                  type="email"
                  value={userInfo.email}
                  onChange={handleInputChange}
                  placeholder={t('join-developer.personal_info.email_placeholder')}
                  className="bg-gray-800 border-gray-600 text-white"
                  noValidate
                />
              </div>


              {/* 전화번호 섹션 */}
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">
                  {t('join-developer.personal_info.phone')} <span className="text-red-500">*</span>
                </label>
                <Input 
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleInputChange}
                  placeholder={t('join-developer.personal_info.phone_placeholder')}
                  className="bg-gray-800 border-gray-600 text-white"
                  noValidate
                />
              </div>

              {/* 국적 섹션 */}
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">
                  {t('join-developer.personal_info.nationality')} <span className="text-red-500">*</span>
                </label>
                <select
                  name="nationality"
                  value={userInfo.nationality}
                  onChange={handleInputChange}
                  className="bg-gray-800 border border-gray-700 text-gray-300 w-full h-12 rounded pl-3 font-normal"
                  noValidate
                >
                  <option value="">{t('join-developer.personal_info.select_nationality')}</option>
                  {nationalities.map((nationality) => (
                    <option key={nationality} value={nationality}>
                      {nationality}
                    </option>
                  ))}
                </select>
              </div>


              {/* SNS 계정 섹션 */}
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">
                  {t('join-developer.personal_info.sns.title')}
                </label>
                <div className="space-y-4">
                  {userInfo.snsAddresses.map((address, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => handleSnsAddressChange(index, e.target.value)}
                        placeholder={t('join-developer.personal_info.sns.placeholder')}
                        className="flex-1 w-full min-w-[200px] p-2 border rounded-md bg-gray-800 border-gray-700 text-gray-300"
                      />
                      <Button
                        type="button"
                        onClick={() => removeSnsAddress(index)}
                        className="p-2 rounded-lg bg-gray-800 border-transparent hover:bg-gray-800"
                      >
                        <FaTimes className="w-3 h-3 text-red-500" />
                      </Button>
                    </div>
                  ))}
                </div>
                {userInfo.snsAddresses.length < 5 && (
                  <Button
                    type="button"
                    onClick={addSnsAddress}
                    className="bg-blue-600 hover:bg-blue-700 text-white mt-2"
                  >
                    {t('join-developer.personal_info.sns.add_button')}
                  </Button>
                )}
              </div>

              {/* 언어 섹션 */}
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">
                  {t('join-developer.personal_info.language.title')}
                </label>
                <p className="text-sm text-gray-500 mb-4">{t('join-developer.personal_info.language.subtitle')}</p>
                
                {userInfo.languageProficiencies.map((lang, index) => (
                  <div key={index} className="flex mb-2 space-x-4">
                    <select
                      value={lang.language}
                      onChange={(e) => handleLanguageChange(index, 'language', e.target.value)}
                      className="bg-gray-800 border border-gray-700 text-gray-300 flex-1 h-12 rounded pl-3 font-normal"
                    >
                      <option value="">{t('join-developer.personal_info.language.select_language')}</option>
                      {languages.map((language, i) => (
                        <option key={i} value={language}>{language}</option>
                      ))}
                    </select>
                    <select
                      value={lang.level}
                      onChange={(e) => handleLanguageChange(index, 'level', e.target.value)}
                      className="bg-gray-800 border border-gray-700 text-gray-300 flex-1 h-12 rounded pl-3 font-normal"
                    >
                      <option value="">{t('join-developer.personal_info.language.select_level')}</option>
                      {Object.entries(t('join-developer.personal_info.language.levels', { returnObjects: true })).map(([key, value]) => (
                        <option key={key} value={key}>{value}</option>
                      ))}
                    </select>
                    <Button
                      type="button"
                      onClick={() => removeLanguage(index)}
                      className="top-2 right-2 p-2 rounded-lg bg-gray-800 border-transparent hover:bg-gray-800 border-red-500"
                    >
                      <FaTimes className="w-3 h-3 text-red-500" />
                    </Button>
                  </div>
                ))}
                {userInfo.languageProficiencies.length < 5 && (
                  <Button
                    type="button"
                    onClick={addLanguage}
                    className="bg-blue-600 hover:bg-blue-700 text-white mt-2"
                  >
                    {t('join-developer.personal_info.language.add_button')}
                  </Button>
                )}
              </div>
            </div>

            {/* 학력 섹션 */}
            <div className="border p-4 mb-4 rounded bg-gray-800">
              <h2 className="text-xl font-bold text-white mb-2">
                {t('join-developer.education.title')}
              </h2>
              <p className="text-sm text-white mb-4 font-normal">
                {t('join-developer.education.subtitle')}
              </p>
              
              {userInfo.educations.map((education, index) => (
                <div 
                  key={index} 
                  className="mb-6 border border-white bg-gray-700 p-6 rounded-lg relative"
                >
                  {userInfo.educations.length > 1 && (
                    <Button
                      type="button"
                      onClick={() => removeEducation(index)}
                      className="absolute top-2 right-2 p-2 rounded-lg bg-gray-800 border-transparent hover:bg-gray-800 border-red-500"
                    >
                      <FaTimes className="w-3 h-3 text-red-500" />
                    </Button>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold mb-2 text-white">
                        {t('join-developer.education.school')} <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        name="school"
                        value={education.school}
                        onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
                        placeholder={t('join-developer.education.school_placeholder')}
                        className="bg-gray-800 border-gray-600 text-white w-full"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold mb-2 text-white">
                        {t('join-developer.education.major')} <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        name="major"
                        value={education.major}
                        onChange={(e) => handleEducationChange(index, 'major', e.target.value)}
                        placeholder={t('join-developer.education.major_placeholder')}
                        className="bg-gray-800 border-gray-600 text-white w-full"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold mb-2 text-white">
                        {t('join-developer.education.degree')} <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="degree"
                        value={education.degree}
                        onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                        className="bg-gray-800 border border-gray-700 text-gray-300 w-full h-10 rounded pl-3 font-normal"
                        required
                      >
                        <option value="">{t('join-developer.education.select_degree')}</option>
                        <option value="high_school">{t('join-developer.education.degree_options.high_school')}</option>
                        <option value="associate">{t('join-developer.education.degree_options.associate')}</option>
                        <option value="bachelor">{t('join-developer.education.degree_options.bachelor')}</option>
                        <option value="master">{t('join-developer.education.degree_options.master')}</option>
                        <option value="doctorate">{t('join-developer.education.degree_options.doctorate')}</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold mb-2 text-white">
                        {t('join-developer.education.graduation_year')} <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="graduationYear"
                        value={education.graduationYear}
                        onChange={(e) => handleEducationChange(index, 'graduationYear', e.target.value)}
                        className="bg-gray-800 border border-gray-700 text-gray-300 w-full h-10 rounded pl-3 font-normal"
                        required
                      >
                        <option value="" disabled>
                          {t('join-developer.education.select_graduation_year')}
                        </option>
                        {Array.from({ length: 75 }, (_, i) => {
                          const year = new Date().getFullYear() + 5 - i;
                          return (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold mb-2 text-white">
                        {t('join-developer.education.status')} <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="status"
                        value={education.status}
                        onChange={(e) => handleEducationChange(index, 'status', e.target.value)}
                        className="bg-gray-800 border border-gray-700 text-gray-300 w-full h-10 rounded pl-3 font-normal"
                        required
                      >
                        <option value="">{t('join-developer.education.select_status')}</option>
                        <option value="graduated">{t('join-developer.education.status_options.graduated')}</option>
                        <option value="enrolled">{t('join-developer.education.status_options.enrolled')}</option>
                        <option value="leave_of_absence">{t('join-developer.education.status_options.leave_of_absence')}</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold mb-2 text-white">
                        {t('join-developer.education.gpa')}
                      </label>
                      <Input
                        type="text"
                        value={education.gpa}
                        onChange={(e) => handleEducationChange(index, 'gpa', e.target.value)}
                        placeholder={t('join-developer.education.gpa_placeholder')}
                        className="bg-gray-800 border-gray-600 text-white w-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              {userInfo.educations.length < 3 && (
                <div className="flex justify-center mt-6">
                  <button
                    type="button"
                    onClick={addEducation}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-emerald-500 text-primary-foreground hover:bg-emerald-600 h-10 px-4 py-2"
                  >
                    <svg 
                      className="w-5 h-5 mr-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                      />
                    </svg>
                    {t('join-developer.education.add')}
                  </button>
                </div>
              )}
            </div>

            {/* 경험 섹션 */}
            <div className="border p-4 mb-4 rounded bg-gray-800">
              <h2 className="text-lg font-bold mb-2 text-white">
                {t('join-developer.experience.title')}
              </h2>
              <p className="text-sm text-white mb-4">
                {t('join-developer.experience.subtitle')}
              </p>
              {userInfo.experiences.map((experience, index) => (
                <div key={index} className="border p-4 mb-4 rounded bg-gray-700 relative">
                  {userInfo.experiences.length > 1 && (
                    <button 
                      type="button" 
                      onClick={() => removeExperience(index)}
                      className="absolute top-2 right-2 p-1 rounded-lg border border-transparent hover:border-red-500"
                    >
                      <FaTimes className="w-3 h-3 text-red-500" />
                    </button>
                  )}
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2 text-white">{t('join-developer.experience.project')}</label>
                    <Input 
                      name="project"
                      value={experience.project}
                      onChange={(e) => handleExperienceChange(index, e)}
                      placeholder={t('join-developer.experience.project_placeholder')}
                      className="bg-gray-600 border-gray-500 text-white"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2 text-white">{t('join-developer.experience.company')}</label>
                    <Input 
                      name="company"
                      value={experience.company}
                      onChange={(e) => handleExperienceChange(index, e)}
                      placeholder={t('join-developer.experience.company_placeholder')}
                      className="bg-gray-600 border-gray-500 text-white"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2 text-white">{t('join-developer.experience.period')}</label>
                    <Input 
                      name="period"
                      type="text"
                      value={experience.period}
                      onChange={(e) => handleExperienceChange(index, e)}
                      placeholder={t('join-developer.experience.period_placeholder')}
                      className="bg-gray-600 border-gray-500 text-white"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2 text-white">{t('join-developer.experience.title_field')}</label>
                    <Input 
                      name="title"
                      value={experience.title}
                      onChange={(e) => handleExperienceChange(index, e)}
                      placeholder={t('join-developer.experience.title_placeholder')}
                      className="bg-gray-600 border-gray-500 text-white"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2 text-white">{t('join-developer.experience.description')}</label>
                    <textarea 
                      name="description"
                      value={experience.description}
                      onChange={(e) => handleExperienceChange(index, e)}
                      placeholder={t('join-developer.experience.description_placeholder')}
                      className="bg-gray-600 border-gray-500 text-white w-full h-24 rounded-lg p-2"
                      maxLength={1000}
                    />
                  </div>
                </div>
              ))}
              <div className="flex justify-center mt-6">
                <Button 
                  type="button"
                  onClick={addExperience}
                  className="inline-flex items-left justify-left rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-emerald-500 text-primary-foreground hover:bg-emerald-400 h-10 px-4 py-2"
                >
                  <svg 
                    className="w-5 h-5 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                    />
                  </svg>
                  {t('join-developer.experience.add_button')}
                </Button>
              </div>
            </div>

            {/* 기술 스택 섹션 */}
            <div className="border p-4 mb-4 rounded bg-gray-800">
              <h2 className="text-lg font-bold mb-2 text-white">
                {t('join-developer.skills.title')}
              </h2>
              <p className="text-sm text-white mb-4">
                {t('join-developer.skills.subtitle')}
              </p>
              
              {/* 기술 스택 선택 영역 */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Object.entries(skills).map(([category, categorySkills]) => (
                  <div key={category} className="mb-4">
                    <h3 className="text-white font-semibold mb-2">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill) => (
                        <button
                          key={skill}
                          type="button"
                          onClick={() => toggleSkill(skill)}
                          className={`px-3 py-1 rounded-full text-sm ${
                            userInfo.skills.includes(skill)
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          }`}
                        >
                          {skill}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* 선택된 기술 스택 표시 영역 */}
              {userInfo.skills.length > 0 && (
                <div className="mt-6 border-t border-gray-700 pt-4">
                  <h3 className="text-white font-semibold mb-3">
                    {t('join-developer.skills.selected_title')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {userInfo.skills.map((skill) => (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => toggleSkill(skill)}
                        className="px-3 py-1 rounded-full text-sm bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-1"
                      >
                        {skill}
                        <FaTimes className="w-3 h-3" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 근무 시작 정보 섹션 */}
            <div className="border p-4 mb-4 rounded bg-gray-800">
              <h2 className="text-lg font-bold mb-2 text-white">
                {t('join-developer.availability.title')}
              </h2>
              <p className="text-sm text-white mb-4">
                {t('join-developer.availability.subtitle')}
              </p>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">
                  {t('join-developer.availability.start_date')} <span className="text-red-500">*</span>
                </label>
                <DatePicker
                  selected={userInfo.startDate ? new Date(userInfo.startDate) : null}
                  onChange={handleStartDateChange}
                  dateFormat="yyyy-MM-dd"
                  minDate={new Date()} // 오늘 이후 날짜만 선택 가능
                  placeholderText={t('join-developer.availability.start_date_placeholder')}
                  className="bg-gray-800 border border-gray-600 text-white rounded w-full h-12 pl-4 pr-10"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">
                  {t('join-developer.availability.weekday_time')}
                </label>
                <div className="flex space-x-4">
                  <select 
                    name="weekdayTimezone"
                    value={userInfo.weekdayAvailability.timezone}
                    onChange={(e) => handleAvailabilityChange('weekdayAvailability', 'timezone', e.target.value)}
                    className="bg-gray-800 border border-gray-700 text-gray-300 w-[38%] rounded h-12 pl-3 font-normal"
                  >
                    <option value="">{t('join-developer.availability.select_timezone')}</option>
                    {Array.from({ length: 25 }, (_, i) => {
                      const offset = i - 12;
                      const sign = offset >= 0 ? '+' : '';
                      return (
                        <option key={i} value={`GMT${sign}${offset}`}>
                          {`GMT ${sign}${offset}`}
                        </option>
                      );
                    })}
                  </select>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <select
                        value={getTimeValues(userInfo.weekdayAvailability.startTime).hours}
                        onChange={(e) => handleTimeInput('weekdayAvailability', 'startHours', e.target.value)}
                        className="bg-gray-800 border border-gray-700 text-gray-300 w-16 h-12 rounded text-center appearance-none cursor-pointer"
                      >
                        <option value="">HH</option>
                        {Array.from({ length: 24 }, (_, i) => (
                          <option key={i} value={i.toString().padStart(2, '0')}>
                            {i.toString().padStart(2, '0')}
                          </option>
                        ))}
                      </select>
                      <span className="text-white">:</span>
                      <select
                        value={getTimeValues(userInfo.weekdayAvailability.startTime).minutes}
                        onChange={(e) => handleTimeInput('weekdayAvailability', 'startMinutes', e.target.value)}
                        className="bg-gray-800 border border-gray-700 text-gray-300 w-16 h-12 rounded text-center appearance-none cursor-pointer"
                      >
                        <option value="">MM</option>
                        {Array.from({ length: 60 }, (_, i) => (
                          <option key={i} value={i.toString().padStart(2, '0')}>
                            {i.toString().padStart(2, '0')}
                          </option>
                        ))}
                      </select>
                    </div>
                    <span className="text-white mx-2">~</span>
                    <div className="flex items-center space-x-1">
                      <select
                        value={getTimeValues(userInfo.weekdayAvailability.endTime).hours}
                        onChange={(e) => handleAvailabilityChange('weekdayAvailability', 'endHours', e.target.value)}
                        className="bg-gray-800 border border-gray-700 text-gray-300 w-16 h-12 rounded text-center appearance-none cursor-pointer"
                      >
                        <option value="">HH</option>
                        {Array.from({ length: 24 }, (_, i) => (
                          <option key={i} value={i.toString().padStart(2, '0')}>
                            {i.toString().padStart(2, '0')}
                          </option>
                        ))}
                      </select>
                      <span className="text-white">:</span>
                      <select
                        value={getTimeValues(userInfo.weekdayAvailability.endTime).minutes}
                        onChange={(e) => handleAvailabilityChange('weekdayAvailability', 'endMinutes', e.target.value)}
                        className="bg-gray-800 border border-gray-700 text-gray-300 w-16 h-12 rounded text-center appearance-none cursor-pointer"
                      >
                        <option value="">MM</option>
                        {Array.from({ length: 60 }, (_, i) => (
                          <option key={i} value={i.toString().padStart(2, '0')}>
                            {i.toString().padStart(2, '0')}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">
                  {t('join-developer.availability.weekend_time')}
                </label>
                <div className="flex space-x-4">
                  <select 
                    name="weekendTimezone"
                    value={userInfo.weekendAvailability.timezone}
                    onChange={(e) => handleAvailabilityChange('weekendAvailability', 'timezone', e.target.value)}
                    className="bg-gray-800 border border-gray-700 text-gray-300 w-[38%] rounded h-12 pl-3 font-normal"
                  >
                    <option value="">{t('join-developer.availability.select_timezone')}</option>
                    {Array.from({ length: 25 }, (_, i) => {
                      const offset = i - 12;
                      const sign = offset >= 0 ? '+' : '';
                      return (
                        <option key={i} value={`GMT${sign}${offset}`}>
                          {`GMT ${sign}${offset}`}
                        </option>
                      );
                    })}
                  </select>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <select
                        value={getTimeValues(userInfo.weekendAvailability.startTime).hours}
                        onChange={(e) => handleTimeInput('weekendAvailability', 'startHours', e.target.value)}
                        className="bg-gray-800 border border-gray-700 text-gray-300 w-16 h-12 rounded text-center appearance-none cursor-pointer"
                      >
                        <option value="">HH</option>
                        {Array.from({ length: 24 }, (_, i) => (
                          <option key={i} value={i.toString().padStart(2, '0')}>
                            {i.toString().padStart(2, '0')}
                          </option>
                        ))}
                      </select>
                      <span className="text-white">:</span>
                      <select
                        value={getTimeValues(userInfo.weekendAvailability.startTime).minutes}
                        onChange={(e) => handleTimeInput('weekendAvailability', 'startMinutes', e.target.value)}
                        className="bg-gray-800 border border-gray-700 text-gray-300 w-16 h-12 rounded text-center appearance-none cursor-pointer"
                      >
                        <option value="">MM</option>
                        {Array.from({ length: 60 }, (_, i) => (
                          <option key={i} value={i.toString().padStart(2, '0')}>
                            {i.toString().padStart(2, '0')}
                          </option>
                        ))}
                      </select>
                    </div>
                    <span className="text-white mx-2">~</span>
                    <div className="flex items-center space-x-1">
                      <select
                        value={getTimeValues(userInfo.weekendAvailability.endTime).hours}
                        onChange={(e) => handleTimeInput('weekendAvailability', 'endHours', e.target.value)}
                        className="bg-gray-800 border border-gray-700 text-gray-300 w-16 h-12 rounded text-center appearance-none cursor-pointer"
                      >
                        <option value="">HH</option>
                        {Array.from({ length: 24 }, (_, i) => (
                          <option key={i} value={i.toString().padStart(2, '0')}>
                            {i.toString().padStart(2, '0')}
                          </option>
                        ))}
                      </select>
                      <span className="text-white">:</span>
                      <select
                        value={getTimeValues(userInfo.weekendAvailability.endTime).minutes}
                        onChange={(e) => handleTimeInput('weekendAvailability', 'endMinutes', e.target.value)}
                        className="bg-gray-800 border border-gray-700 text-gray-300 w-16 h-12 rounded text-center appearance-none cursor-pointer"
                      >
                        <option value="">MM</option>
                        {Array.from({ length: 60 }, (_, i) => (
                          <option key={i} value={i.toString().padStart(2, '0')}>
                            {i.toString().padStart(2, '0')}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="flex justify-center mt-4">
              <Button 
                type="button" // 버튼 클릭 시 페이지 이동
                onClick={() => router.push('/')}
                className="bg-gray-800 hover:bg-gray-700 text-white w-1/3 mx-2"
              >
                {t('join-developer.buttons.go_back')}
              </Button>
              <Button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 w-1/3 mx-2"
                variant="primary"
              >
                {t('join-developer.buttons.register')}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={customModalStyles}
        contentLabel="Registration Success Modal"
        ariaHideApp={false}
      >
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <FaCheckCircle className="w-16 h-16 text-emerald-500" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            {t('join-developer.messages.registration_success_title')}
          </h2>
          <p className="text-gray-300 mb-6">
            {t('join-developer.messages.registration_success_description')}
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => router.push('/')}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('join-developer.messages.go_to_landing')}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default JoinDeveloper;