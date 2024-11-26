import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useRouter } from 'next/router';
import { nationalities, languages, skills } from '../src/data/data'; // 데이터 파일에서 불러오기
import { FaTimes } from 'react-icons/fa'; // x 아이콘을 위한 react-icons 패키지
import { useTranslation } from 'react-i18next';

const JoinDeveloper = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    nationality: '',
    snsAccounts: [''], // SNS 계정 배열
    languages: [],
    university: '',
    schoolLevel: '',
    major: '',
    year: '',
    gpa: '',
    status: '', // 상태 추가
    experiences: [{ company: '', project: '', period: '', skills: [], title: '', description: '' }],
    startDate: '',
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
    languageProficiencies: [] // 언어 및 레벨 배열
  });

  const [selectedSkills, setSelectedSkills] = useState([]);

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
      alert(t('join_developer.sns.max_accounts'));
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
      alert('최대 5개의 언어를 추가할 수 있습니다.');
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
    setUserInfo(prevState => ({
      ...prevState,
      [type]: {
        ...prevState[type],
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
      alert('최대 5개의 경험 항목만 추가할 수 있습니다.');
    }
  };

  const removeExperience = (index) => {
    if (userInfo.experiences.length <= 1) {
      alert(t('join_developer.experience.min_experiences'));
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
        throw new Error(t('join_developer.messages.registration_error'));
      }

      alert(t('join_developer.messages.registration_success'));
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

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-white">{t('join_developer.title')}</CardTitle>
          <p className="text-sm text-gray-500">{t('join_developer.subtitle')}</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {/* 개인정보 섹션 */}
            <div className="border p-4 mb-4 rounded bg-gray-800">
              <h2 className="text-lg font-bold mb-2 text-white">1. 개인정보</h2>
              <p className="text-sm text-gray-500 mb-4">개인의 기본 정보를 입력해 주세요. 이 정보는 정확한 매칭과 신뢰성을 보장하기 위해 사용됩니다. 개인정보는 보안 정책에 따라 철저히 보호되며, 허가 없이 공개되지 않습니다.</p>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">이름 <span className="text-red-500">*</span></label>
                <Input 
                  name="name"
                  value={userInfo.name}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">이메일 <span className="text-red-500">*</span></label>
                <Input 
                  name="email"
                  type="email"
                  value={userInfo.email}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">전화번호 <span className="text-red-500">*</span></label>
                <Input 
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">국적 <span className="text-red-500">*</span></label>
                <select
                  name="nationality"
                  value={userInfo.nationality}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white w-full h-12 rounded"
                  required
                >
                  <option value="">{t('join_developer.basic_info.nationality_placeholder')}</option>
                  {nationalities.map((nationality, index) => (
                    <option key={index} value={nationality}>{nationality}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">{t('join_developer.sns.title')}</label>
                {userInfo.snsAccounts.map((account, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <Input 
                      value={account}
                      onChange={(e) => handleSnsChange(index, e.target.value)}
                      placeholder={t('join_developer.sns.placeholder')}
                      className="bg-gray-700 border-gray-600 text-white flex-grow h-12 rounded"
                    />
                    <button type="button" onClick={() => removeSnsAccount(index)} className="ml-2 bg-red-500 text-white rounded-full p-1">
                      <FaTimes />
                    </button>
                  </div>
                ))}
                <Button type="button" onClick={addSnsAccount} className="bg-blue-600 hover:bg-blue-700 text-white">
                  +
                </Button>
              </div>

              {/* 언어 섹션 */}
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-2 text-white">{t('join_developer.language.title')}</h3>
                <p className="text-sm text-gray-500 mb-4">{t('join_developer.language.subtitle')}</p>
                {userInfo.languageProficiencies.map((language, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <select 
                      value={language.language}
                      onChange={(e) => handleLanguageChange(index, 'language', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white flex-grow h-12 rounded"
                    >
                      <option value="">{t('join_developer.language.select_language')}</option>
                      {languages.map((lang, idx) => (
                        <option key={idx} value={lang}>{lang}</option>
                      ))}
                    </select>
                    <select 
                      value={language.level}
                      onChange={(e) => handleLanguageChange(index, 'level', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white ml-2"
                    >
                      <option value="">{t('join_developer.language.select_level')}</option>
                      {Object.entries(t('join_developer.language.levels')).map(([key, value]) => (
                        <option key={key} value={key}>{value}</option>
                      ))}
                    </select>
                    <button 
                      type="button" 
                      onClick={() => removeLanguage(index)} 
                      className="ml-2 p-1 rounded-lg border border-transparent hover:border-red-500"
                    >
                      <FaTimes className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                ))}
                <Button type="button" onClick={addLanguage} className="bg-blue-600 hover:bg-blue-700 text-white">
                  {t('join_developer.language.add_button')}
                </Button>
              </div>
            </div>

            {/* 학력 섹션 */}
            <div className="border p-4 mb-4 rounded bg-gray-800">
              <h2 className="text-lg font-bold mb-2 text-white">{t('join_developer.education.title')}</h2>
              <p className="text-sm text-gray-500 mb-4">{t('join_developer.education.subtitle')}</p>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">
                  {t('join_developer.education.school')} <span className="text-red-500">*</span>
                </label>
                <Input 
                  name="university"
                  value={userInfo.university}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">
                  {t('join_developer.education.status')} <span className="text-red-500">*</span>
                </label>
                <select 
                  name="status"
                  value={userInfo.status}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white w-full h-12 rounded"
                  required
                >
                  <option value="">{t('join_developer.education.select_status')}</option>
                  {Object.entries(t('join_developer.education.status_options', { returnObjects: true })).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">
                  {t('join_developer.education.degree')}
                </label>
                <select 
                  name="schoolLevel"
                  value={userInfo.schoolLevel}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white w-full h-12 rounded"
                >
                  <option value="">{t('join_developer.education.select_degree')}</option>
                  {Object.entries(t('join_developer.education.degree_options', { returnObjects: true })).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">전공</label>
                <Input 
                  name="major"
                  value={userInfo.major}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">졸업 연도</label>
                <Input 
                  name="year"
                  value={userInfo.year}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">GPA</label>
                <Input 
                  name="gpa"
                  value={userInfo.gpa}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
            </div>

            {/* 경험 섹션 */}
            <div className="border p-4 mb-4 rounded bg-gray-800">
              <h2 className="text-lg font-bold mb-2 text-white">{t('join_developer.experience.title')}</h2>
              <p className="text-sm text-gray-500 mb-4">{t('join_developer.experience.subtitle')}</p>
              {userInfo.experiences.map((experience, index) => (
                <div key={index} className="border p-4 mb-4 rounded bg-gray-700 relative">
                  {userInfo.experiences.length > 1 && (
                    <button 
                      type="button" 
                      onClick={() => removeExperience(index)}
                      className="absolute top-2 right-2 p-1 rounded-lg border border-transparent hover:border-red-500"
                    >
                      <FaTimes className="w-4 h-4 text-red-500" />
                    </button>
                  )}
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2 text-white">{t('join_developer.experience.project')}</label>
                    <Input 
                      name="project"
                      value={experience.project}
                      onChange={(e) => handleExperienceChange(index, e)}
                      placeholder={t('join_developer.experience.project_placeholder')}
                      className="bg-gray-600 border-gray-500 text-white"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2 text-white">{t('join_developer.experience.company')}</label>
                    <Input 
                      name="company"
                      value={experience.company}
                      onChange={(e) => handleExperienceChange(index, e)}
                      placeholder={t('join_developer.experience.company_placeholder')}
                      className="bg-gray-600 border-gray-500 text-white"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2 text-white">{t('join_developer.experience.period')}</label>
                    <Input 
                      name="period"
                      type="text"
                      value={experience.period}
                      onChange={(e) => handleExperienceChange(index, e)}
                      placeholder={t('join_developer.experience.period_placeholder')}
                      className="bg-gray-600 border-gray-500 text-white"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2 text-white">{t('join_developer.experience.title_field')}</label>
                    <Input 
                      name="title"
                      value={experience.title}
                      onChange={(e) => handleExperienceChange(index, e)}
                      placeholder={t('join_developer.experience.title_placeholder')}
                      className="bg-gray-600 border-gray-500 text-white"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2 text-white">{t('join_developer.experience.description')}</label>
                    <textarea 
                      name="description"
                      value={experience.description}
                      onChange={(e) => handleExperienceChange(index, e)}
                      placeholder={t('join_developer.experience.description_placeholder')}
                      className="bg-gray-600 border-gray-500 text-white w-full h-24 rounded-lg p-2"
                      maxLength={1000}
                    />
                  </div>
                </div>
              ))}
              <div className="mt-4">
                <Button 
                  type="button"
                  onClick={addExperience}
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                >
                  {t('join_developer.experience.add_button')}
                </Button>
              </div>
            </div>

            {/* 기술 스택 섹션 */}
            <div className="border p-4 mb-4 rounded bg-gray-800">
              <h2 className="text-lg font-bold mb-2 text-white">{t('join_developer.skills.title')}</h2>
              <p className="text-sm text-gray-500 mb-4">{t('join_developer.skills.subtitle')}</p>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">
                  {t('join_developer.skills.select_title')}
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
                <label className="block text-sm font-bold mb-2 text-white">{t('join_developer.skills.selected_title')}</label>
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
              <h2 className="text-lg font-bold mb-2 text-white">{t('join_developer.availability.title')}</h2>
              <p className="text-sm text-gray-500 mb-4">{t('join_developer.availability.subtitle')}</p>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">
                  {t('join_developer.availability.start_date')} <span className="text-red-500">*</span>
                </label>
                <Input 
                  name="startDate"
                  type="date"
                  value={userInfo.startDate}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">{t('join_developer.availability.weekday_time')}</label>
                <div className="flex space-x-4">
                  <select 
                    name="weekdayTimezone"
                    value={userInfo.weekdayAvailability.timezone}
                    onChange={(e) => handleAvailabilityChange('weekdayAvailability', 'timezone', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white w-1/4 rounded h-12"
                  >
                    <option value="">{t('join_developer.availability.select_timezone')}</option>
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
                    <div className="flex items-center">
                      <Input 
                        name="weekdayStartHours"
                        type="text"
                        placeholder="hh"
                        value={userInfo.weekdayAvailability.startTime}
                        onChange={(e) => handleTimeInput('weekdayAvailability', 'startHours', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white w-16 text-center h-12 rounded"
                        maxLength="2"
                        pattern="\d*"
                      />
                      <span className="text-white">:</span>
                      <Input 
                        name="weekdayStartMinutes"
                        type="text"
                        placeholder="mm"
                        value={userInfo.weekdayAvailability.startMinutes}
                        onChange={(e) => handleTimeInput('weekdayAvailability', 'startMinutes', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white w-16 text-center h-12 rounded"
                        maxLength="2"
                        pattern="\d*"
                      />
                    </div>
                    <span className="text-white mx-2">~</span>
                    <div className="flex items-center">
                      <Input 
                        name="weekdayEndHours"
                        type="text"
                        placeholder="hh"
                        value={userInfo.weekdayAvailability.endTime}
                        onChange={(e) => handleTimeInput('weekdayAvailability', 'endHours', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white w-16 text-center h-12 rounded"
                        maxLength="2"
                        pattern="\d*"
                      />
                      <span className="text-white">:</span>
                      <Input 
                        name="weekdayEndMinutes"
                        type="text"
                        placeholder="mm"
                        value={userInfo.weekdayAvailability.endMinutes}
                        onChange={(e) => handleTimeInput('weekdayAvailability', 'endMinutes', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white w-16 text-center h-12 rounded"
                        maxLength="2"
                        pattern="\d*"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">{t('join_developer.availability.weekend_time')}</label>
                <div className="flex space-x-4">
                  <select 
                    name="weekendTimezone"
                    value={userInfo.weekendAvailability.timezone}
                    onChange={(e) => handleAvailabilityChange('weekendAvailability', 'timezone', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white w-1/4 rounded h-12"
                  >
                    <option value="">{t('join_developer.availability.select_timezone')}</option>
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
                    <div className="flex items-center">
                      <Input 
                        name="weekendStartHours"
                        type="text"
                        placeholder="hh"
                        value={userInfo.weekendAvailability.startTime}
                        onChange={(e) => handleTimeInput('weekendAvailability', 'startHours', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white w-16 text-center h-12 rounded"
                        maxLength="2"
                        pattern="\d*"
                      />
                      <span className="text-white">:</span>
                      <Input 
                        name="weekendStartMinutes"
                        type="text"
                        placeholder="mm"
                        value={userInfo.weekendAvailability.startMinutes}
                        onChange={(e) => handleTimeInput('weekendAvailability', 'startMinutes', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white w-16 text-center h-12 rounded"
                        maxLength="2"
                        pattern="\d*"
                      />
                    </div>
                    <span className="text-white mx-2">~</span>
                    <div className="flex items-center">
                      <Input 
                        name="weekendEndHours"
                        type="text"
                        placeholder="hh"
                        value={userInfo.weekendAvailability.endTime}
                        onChange={(e) => handleTimeInput('weekendAvailability', 'endHours', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white w-16 text-center h-12 rounded"
                        maxLength="2"
                        pattern="\d*"
                      />
                      <span className="text-white">:</span>
                      <Input 
                        name="weekendEndMinutes"
                        type="text"
                        placeholder="mm"
                        value={userInfo.weekendAvailability.endMinutes}
                        onChange={(e) => handleTimeInput('weekendAvailability', 'endMinutes', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white w-16 text-center h-12 rounded"
                        maxLength="2"
                        pattern="\d*"
                      />
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
                {t('join_developer.buttons.go_back')}
              </Button>
              <Button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 w-1/3 mx-2"
                variant="primary"
              >
                {t('join_developer.buttons.register')}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default JoinDeveloper;