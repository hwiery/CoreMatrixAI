import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useRouter } from 'next/router';
import { getNationalities, getLanguages, getSkills, getCurrentLanguage, setLanguage } from '../src/data/data';
import { FaTimes } from 'react-icons/fa'; // x 아이콘을 위한 react-icons 패키지
import { useLanguage } from '../contexts/LanguageContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const JoinDeveloper = () => {
  const { language, t } = useLanguage();
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    nationality: '',
    snsAccounts: [''],
    languageProficiencies: [{
      language: '',
      level: ''
    }],
    education: {
      title: '',
      subtitle: '',
      school: '',
      status: '',
      degree: '',
      major: '',
      graduationYear: '',
      gpa: ''
    },
    experiences: [{
      company: '',
      project: '',
      period: '',
      title: '',
      description: ''
    }],
    skills: [],
    weekdayAvailability: {
      startTime: '',
      endTime: '',
      timezone: ''
    },
    weekendAvailability: {
      startTime: '',
      endTime: '',
      timezone: ''
    },
    startDate: '',
    educations: [{
      school: '',
      major: '',
      degree: '',
      graduationYear: ''
    }]
  });

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

  const handleSnsChange = (index, value) => {
    const updatedSnsAccounts = [...userInfo.snsAccounts];
    updatedSnsAccounts[index] = value;
    setUserInfo({
      ...userInfo,
      snsAccounts: updatedSnsAccounts
    });
  };

  const addSnsAccount = () => {
    if (userInfo.snsAccounts.length < 5) {
      setUserInfo({
        ...userInfo,
        snsAccounts: [...userInfo.snsAccounts, '']
      });
    } else {
      alert(t('join-developer.sns.max_accounts'));
    }
  };

  const removeSnsAccount = (index) => {
    const updatedSnsAccounts = userInfo.snsAccounts.filter((_, i) => i !== index);
    setUserInfo({
      ...userInfo,
      snsAccounts: updatedSnsAccounts
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

  const addLanguage = () => {
    if (userInfo.languageProficiencies.length < 5) {
      setUserInfo({
        ...userInfo,
        languageProficiencies: [...userInfo.languageProficiencies, { language: '', level: '' }]
      });
    } else {
      alert(t('join-developer.personal_info.language.max_languages'));
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
    setUserInfo(prev => ({
      ...prev,
      [type]: {
        ...prev[type],
        [field]: value
      }
    }));
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

  const addExperience = () => {
    if (userInfo.experiences.length < 5) {
      setUserInfo({
        ...userInfo,
        experiences: [...userInfo.experiences, { company: '', project: '', period: '', skills: [], title: '', description: '' }]
      });
    } else {
      alert(t('join-developer.experience.max_experiences'));
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(t('join-developer.messages.registration_error'));
      }

      alert(t('join-developer.messages.registration_success'));
      router.push('/landing');
    } catch (error) {
      console.error('Registration error:', error);
      alert(`등록 중 오류가 발생했습니다: ${error.message}`);
    }
  };

  const handleTimeInput = (type, timeType, value) => {
    // 숫자만 입력 가능하도록
    if (!/^\d*$/.test(value)) return;

    if (timeType.includes('Hours')) {
      // 시간 입력 검증 (00-23)
      if (value === '' || (parseInt(value) >= 0 && parseInt(value) <= 23)) {
        const formattedValue = value.padStart(2, '0');
        handleAvailabilityChange(type, timeType === 'startHours' ? 'startTime' : 'endTime', formattedValue);
      }
    } else if (timeType.includes('Minutes')) {
      // 분 입력 검증 (00-59)
      if (value === '' || (parseInt(value) >= 0 && parseInt(value) <= 59)) {
        const formattedValue = value.padStart(2, '0');
        handleAvailabilityChange(type, timeType === 'startMinutes' ? 'startTime' : 'endTime', formattedValue);
      }
    }
  };

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
  };

  const addEducation = () => {
    if (userInfo.educations.length >= 3) return; // 최대 3개로 제한
    setUserInfo(prev => ({
      ...prev,
      educations: [...prev.educations, {
        school: '',
        major: '',
        degree: '',
        graduationYear: ''
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
        i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-white">{t('join-developer.title')}</CardTitle>
          <p className="text-sm text-gray-500">{t('join-developer.subtitle')}</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {/* 개인정보 섹션 */}
            <div className="border p-4 mb-4 rounded bg-gray-800">
              <h2 className="text-lg font-bold mb-2 text-white">
                {t('join-developer.personal_info.title')}
              </h2>
              <p className="text-sm text-gray-500 mb-4">
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
                  className="bg-gray-700 border-gray-600 text-white"
                  required
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
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>

              {/* SNS 계정 섹션 */}
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">
                  {t('join-developer.personal_info.sns.title')}
                </label>
                <div className="space-y-4">
                  {userInfo.snsAccounts.map((account, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <input
                        type="text"
                        value={account}
                        onChange={(e) => handleSnsChange(index, e.target.value)}
                        placeholder={t('join-developer.personal_info.sns.placeholder')}
                        className="flex-1 w-full min-w-[200px] p-2 border rounded-md bg-gray-800 border-gray-600 text-white"
                      />
                      {index > 0 && (
                        <Button
                          type="button"
                          onClick={() => removeSnsAccount(index)}
                          className="top-2 right-2 p-2 rounded-lg bg-gray-800 border-transparent hover:bg-gray-800 border-red-500"
                        >
                          <FaTimes className="w-3 h-3 text-red-500" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
                {userInfo.snsAccounts.length < 5 && (
                  <Button
                    type="button"
                    onClick={addSnsAccount}
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
                      className="bg-gray-700 border-gray-600 text-white flex-1 h-12 rounded"
                    >
                      <option value="">{t('join-developer.personal_info.language.select_language')}</option>
                      {languages.map((language, i) => (
                        <option key={i} value={language}>{language}</option>
                      ))}
                    </select>
                    <select
                      value={lang.level}
                      onChange={(e) => handleLanguageChange(index, 'level', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white flex-1 h-12 rounded"
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
            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">{t('join-developer.education.title')}</h2>
              
              <div className="border border-white rounded-lg p-6">
                {userInfo.educations.map((education, index) => (
                  <div key={index} className="mb-6 bg-gray-800 p-6 rounded-lg relative">
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
                          className="bg-gray-700 border-gray-600 text-white w-full"
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
                          className="bg-gray-700 border-gray-600 text-white w-full"
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
                          className="bg-gray-700 border-gray-600 text-white w-full h-10 rounded"
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
                        <Input
                          type="number"
                          name="graduationYear"
                          value={education.graduationYear}
                          onChange={(e) => handleEducationChange(index, 'graduationYear', e.target.value)}
                          placeholder={t('join-developer.education.graduation_year_placeholder')}
                          className="bg-gray-700 border-gray-600 text-white w-full"
                          min="1950"
                          max={new Date().getFullYear() + 5}
                          required
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
            </div>

            {/* 경험 섹션 */}
            <div className="border p-4 mb-4 rounded bg-gray-800">
              <h2 className="text-lg font-bold mb-2 text-white">{t('join-developer.experience.title')}</h2>
              <p className="text-sm text-gray-500 mb-4">{t('join-developer.experience.subtitle')}</p>
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
              <h2 className="text-lg font-bold mb-2 text-white">{t('join-developer.skills.title')}</h2>
              <p className="text-sm text-gray-500 mb-4">{t('join-developer.skills.subtitle')}</p>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">
                  {t('join-developer.skills.select_title')}
                </label>
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
                              selectedSkills.includes(skill)
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
              </div>

              <div className="mt-4">
                <label className="block text-sm font-bold mb-2 text-white">{t('join-developer.skills.selected_title')}</label>
                <div className="flex flex-wrap gap-2">
                  {selectedSkills.map((skill) => (
                    <span key={skill} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
                      {skill}
                      <button type="button" onClick={() => toggleSkill(skill)} className="ml-2 focus:outline-none">
                        <FaTimes className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 근무 시작 정보 섹션 */}
            <div className="border p-4 mb-4 rounded bg-gray-800">
              <h2 className="text-lg font-bold mb-2 text-white">{t('join-developer.availability.title')}</h2>
              <p className="text-sm text-gray-500 mb-4">{t('join-developer.availability.subtitle')}</p>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">
                  {t('join-developer.availability.start_date')} <span className="text-red-500">*</span>
                </label>
                <div className="relative w-full">
                  <div className="relative">
                    <DatePicker
                      selected={userInfo.startDate ? new Date(userInfo.startDate) : null}
                      onChange={(date) => {
                        handleInputChange({
                          target: {
                            name: 'startDate',
                            value: date.toISOString().split('T')[0]
                          }
                        });
                      }}
                      dateFormat="yyyy-MM-dd"
                      placeholderText={t('join-developer.availability.start_date_placeholder')}
                      className="bg-gray-700 border border-gray-600 text-white rounded w-full h-12 pl-4 pr-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                      popperPlacement="bottom"
                      wrapperClassName="w-full"
                      onKeyDown={(e) => e.preventDefault()}
                    />
                    <div className="absolute top-0 right-0 h-full flex items-center pr-3 pointer-events-none">
                      <svg 
                        className="w-5 h-5 text-gray-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">{t('join-developer.availability.weekday_time')}</label>
                <div className="flex space-x-4">
                  <select 
                    name="weekdayTimezone"
                    value={userInfo.weekdayAvailability.timezone}
                    onChange={(e) => handleAvailabilityChange('weekdayAvailability', 'timezone', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white w-[38%] rounded h-12"
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
                        name="weekdayStartHours"
                        value={userInfo.weekdayAvailability.startHours || ''}
                        onChange={(e) => handleInputChange({
                          target: {
                            name: 'weekdayAvailability.startHours',
                            value: e.target.value
                          }
                        })}
                        className="bg-gray-700 border-gray-600 text-white w-16 h-12 rounded px-2 text-center appearance-none cursor-pointer"
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
                        name="weekdayStartMinutes"
                        value={userInfo.weekdayAvailability.startMinutes || ''}
                        onChange={(e) => handleInputChange({
                          target: {
                            name: 'weekdayAvailability.startMinutes',
                            value: e.target.value
                          }
                        })}
                        className="bg-gray-700 border-gray-600 text-white w-16 h-12 rounded px-2 text-center appearance-none cursor-pointer"
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
                        name="weekdayEndHours"
                        value={userInfo.weekdayAvailability.endHours || ''}
                        onChange={(e) => handleInputChange({
                          target: {
                            name: 'weekdayAvailability.endHours',
                            value: e.target.value
                          }
                        })}
                        className="bg-gray-700 border-gray-600 text-white w-16 h-12 rounded px-2 text-center appearance-none cursor-pointer"
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
                        name="weekdayEndMinutes"
                        value={userInfo.weekdayAvailability.endMinutes || ''}
                        onChange={(e) => handleInputChange({
                          target: {
                            name: 'weekdayAvailability.endMinutes',
                            value: e.target.value
                          }
                        })}
                        className="bg-gray-700 border-gray-600 text-white w-16 h-12 rounded px-2 text-center appearance-none cursor-pointer"
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
                <label className="block text-sm font-bold mb-2 text-white">{t('join-developer.availability.weekend_time')}</label>
                <div className="flex space-x-4">
                  <select 
                    name="weekendTimezone"
                    value={userInfo.weekendAvailability.timezone}
                    onChange={(e) => handleAvailabilityChange('weekendAvailability', 'timezone', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white w-[38%] rounded h-12"
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
                        name="weekendStartHours"
                        value={userInfo.weekendAvailability.startTime}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value === '' || (parseInt(value) >= 0 && parseInt(value) <= 23 && /^\d{0,2}$/.test(value))) {
                            handleTimeInput('weekendAvailability', 'startHours', value);
                          }
                        }}
                        className="bg-gray-700 border-gray-600 text-white w-16 h-12 rounded px-2 text-center appearance-none cursor-pointer"
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
                        name="weekendStartMinutes"
                        value={userInfo.weekendAvailability.startMinutes}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value === '' || (parseInt(value) >= 0 && parseInt(value) <= 59 && /^\d{0,2}$/.test(value))) {
                            handleTimeInput('weekendAvailability', 'startMinutes', value);
                          }
                        }}
                        className="bg-gray-700 border-gray-600 text-white w-16 h-12 rounded px-2 text-center appearance-none cursor-pointer"
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
                        name="weekendEndHours"
                        value={userInfo.weekendAvailability.endTime}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value === '' || (parseInt(value) >= 0 && parseInt(value) <= 23 && /^\d{0,2}$/.test(value))) {
                            handleTimeInput('weekendAvailability', 'endHours', value);
                          }
                        }}
                        className="bg-gray-700 border-gray-600 text-white w-16 h-12 rounded px-2 text-center appearance-none cursor-pointer"
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
                        name="weekendEndMinutes"
                        value={userInfo.weekendAvailability.endMinutes}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value === '' || (parseInt(value) >= 0 && parseInt(value) <= 59 && /^\d{0,2}$/.test(value))) {
                            handleTimeInput('weekendAvailability', 'endMinutes', value);
                          }
                        }}
                        className="bg-gray-700 border-gray-600 text-white w-16 h-12 rounded px-2 text-center appearance-none cursor-pointer"
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
                onClick={() => router.push('/landing')}
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
    </div>
  );
};

export default JoinDeveloper;