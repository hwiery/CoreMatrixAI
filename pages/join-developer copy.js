import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useRouter } from 'next/router';
import { nationalities, languages, skills } from '../src/data/data'; // 데이터 파일에서 불러오기
import { FaTimes } from 'react-icons/fa'; // x 아이콘을 위한 react-icons 패키지

const JoinDeveloper = () => {
  const router = useRouter();
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
      alert('최대 5개의 SNS 계정을 추가할 수 있습니다.');
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
      alert('최소 1개의 경험은 필요합니다.');
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
        throw new Error(data.message || '등록 중 오류가 발생했습니다.');
      }

      alert('성공적으로 등록되었습니다!');
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
          <CardTitle className="text-white">개발자 네트워크에 등록하세요</CardTitle>
          <p className="text-sm text-gray-500">당신의 경력과 기술을 통해 새로운 기를 탐색하세요. 필요한 정보를 입력하면, 당신의 역량에 맞는 기업과 매칭됩니다.</p>
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
                  <option value="">국적을 선택해주세요</option>
                  {nationalities.map((nationality, index) => (
                    <option key={index} value={nationality}>{nationality}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">SNS 계정</label>
                {userInfo.snsAccounts.map((account, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <Input 
                      value={account}
                      onChange={(e) => handleSnsChange(index, e.target.value)}
                      placeholder="SNS 계정 주소를 입력해주세요 (예: https://linkedin.com/in/username)"
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
                <h3 className="text-lg font-bold mb-2 text-white">언어</h3>
                <p className="text-sm text-gray-500 mb-4">사용 가능한 언어와 수준을 입력해 주세요. 최대 5개 언어를 추가할 수 있습니다.</p>
                {userInfo.languageProficiencies.map((language, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <select 
                      value={language.language}
                      onChange={(e) => handleLanguageChange(index, 'language', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white flex-grow h-12 rounded"
                    >
                      <option value="">언어를 선택해주세요</option>
                      {languages.map((lang, idx) => (
                        <option key={idx} value={lang}>{lang}</option>
                      ))}
                    </select>
                    <select 
                      value={language.level}
                      onChange={(e) => handleLanguageChange(index, 'level', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white ml-2"
                    >
                      <option value="">레벨 선택</option>
                      <option value="Very High">Very High</option>
                      <option value="High">High</option>
                      <option value="Mid">Mid</option>
                      <option value="Low">Low</option>
                      <option value="Very Low">Very Low</option>
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
                  언어 추가
                </Button>
              </div>
            </div>

            {/* 학력 섹션 */}
            <div className="border p-4 mb-4 rounded bg-gray-800">
              <h2 className="text-lg font-bold mb-2 text-white">2. 학력</h2>
              <p className="text-sm text-gray-500 mb-4">당신의 학업 배경을 입력해 주세요. 학력 정보는 기업이 요구하는 전문성을 판단하는 중요한 요소입니다. 정확히 작성하면 더 높은 매칭 성공률을 기대할 수 있습니다.</p>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">학교명 <span className="text-red-500">*</span></label>
                <Input 
                  name="university"
                  value={userInfo.university}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">상태 <span className="text-red-500">*</span></label>
                <select 
                  name="status"
                  value={userInfo.status}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white w-full h-12 rounded"
                  required
                >
                  <option value="">상태 선택</option>
                  <option value="졸업">졸업</option>
                  <option value="재학중">재학중</option>
                  <option value="휴학">휴학</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">학위</label>
                <Input 
                  name="schoolLevel"
                  value={userInfo.schoolLevel}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white"
                />
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
              <h2 className="text-lg font-bold mb-2 text-white">3. 경험</h2>
              <p className="text-sm text-gray-500 mb-4">이전 직무 경험을 입력하세요. 구체적인 역할과 성과를 적어 주시면 좋습니다. 경험 항목은 기업이 당신의 실무 역량을 평가하는 데 핵심적인 역할을 합니다. 성과 중심으로 작성하면 좋은 인상을 줄 수 있습니다.</p>
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
                    <label className="block text-sm font-bold mb-2 text-white">프로젝트명</label>
                    <Input 
                      name="project"
                      value={experience.project}
                      onChange={(e) => handleExperienceChange(index, e)}
                      placeholder="프로젝트명을 입력해주세요"
                      className="bg-gray-600 border-gray-500 text-white"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2 text-white">기업명/학교명</label>
                    <Input 
                      name="company"
                      value={experience.company}
                      onChange={(e) => handleExperienceChange(index, e)}
                      placeholder="기업명 또는 학교명을 입력해주세요"
                      className="bg-gray-600 border-gray-500 text-white"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2 text-white">기간</label>
                    <Input 
                      name="period"
                      type="text"
                      value={experience.period}
                      onChange={(e) => handleExperienceChange(index, e)}
                      placeholder="기간을 입력하세요"
                      className="bg-gray-600 border-gray-500 text-white"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2 text-white">주제/제목</label>
                    <Input 
                      name="title"
                      value={experience.title}
                      onChange={(e) => handleExperienceChange(index, e)}
                      placeholder="주제 또는 제목을 입력해주세요"
                      className="bg-gray-600 border-gray-500 text-white"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2 text-white">내용</label>
                    <textarea 
                      name="description"
                      value={experience.description}
                      onChange={(e) => handleExperienceChange(index, e)}
                      placeholder="경험에 대한 내용을 입력해주세요 (최대 1,000자)"
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
                  경험 추가
                </Button>
              </div>
            </div>

            {/* 기술 스택 섹션 */}
            <div className="border p-4 mb-4 rounded bg-gray-800">
              <h2 className="text-lg font-bold mb-2 text-white">4. 기술 스택</h2>
              <p className="text-sm text-gray-500 mb-4">
                사용할 수 있는 기술과 도구를 입력해 주세요. 기업은 당신의 역량과 프로젝트 적합성을 평가하는 데 이 정보를 사용합니다. 
                당신의 기술 스택이 구체적일수록 기업은 당신의 전문성을 빠르게 이해할 수 있습니다. 
                모든 프로젝트에서 "본인이 직접 다룬 기술"을 빠짐없이 기록하세요.
              </p>
              
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">기술 스택 선택</label>
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
                <label className="block text-sm font-bold mb-2 text-white">선택된 기술 스택</label>
                <div className="flex flex-wrap gap-2">
                  {selectedSkills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => toggleSkill(skill)}
                        className="ml-2 focus:outline-none"
                      >
                        <FaTimes className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 근무 시작 정보 섹션 */}
            <div className="border p-4 mb-4 rounded bg-gray-800">
              <h2 className="text-lg font-bold mb-2 text-white">5. 근무 시작 정보</h2>
              <p className="text-sm text-gray-500 mb-4">근무 시작 가능 시점과 관련한 정보를 입력하세요. 근무를 하게 될 기업은 다양한 국가가 될 수 있기 때문에 업무시간이 나라별로 다릅니다. 기업이 일정 조율을 위한 참고 자료로 사용합니다. 이 섹션은 기업과의 일정 조율에 있어 매우 중요합니다. 명확한 정보를 제공하여 매칭 성공률을 높이세요.</p>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">근무 시작 가능 일자 <span className="text-red-500">*</span></label>
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
                <label className="block text-sm font-bold mb-2 text-white">업무 가능 시간 (주중)</label>
                <div className="flex space-x-4">
                  <select 
                    name="weekdayTimezone"
                    value={userInfo.weekdayAvailability.timezone}
                    onChange={(e) => handleAvailabilityChange('weekdayAvailability', 'timezone', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white w-1/4 rounded h-12"
                  >
                    <option value="">시간대 선택</option>
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
                <label className="block text-sm font-bold mb-2 text-white">업무 가능 시간 (주말)</label>
                <div className="flex space-x-4">
                  <select 
                    name="weekendTimezone"
                    value={userInfo.weekendAvailability.timezone}
                    onChange={(e) => handleAvailabilityChange('weekendAvailability', 'timezone', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white w-1/4 rounded h-12"
                  >
                    <option value="">시간대 선택</option>
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
                돌아가기
              </Button>
              <Button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 w-1/3 mx-2"
                variant="primary"
              >
                등록하기
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default JoinDeveloper;