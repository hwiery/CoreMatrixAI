// 현재 언어 설정을 가져오는 함수
export const getCurrentLanguage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('language') || 'ko';
  }
  return 'ko';
};

// 언어 설정을 변경하는 함수
export const setLanguage = (lang) => {
  if (data[lang] && typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
  }
};

const data = {
  ko: {
    nationalities: [
        "인도", "미국", "중국", "영국", "독일", "캐나다", "일본", "이스라엘", "한국", "프랑스",
      "네덜란드", "스웨덴", "싱가포르", "스위스", "호주", "핀란드", "덴마크", "아일랜드", "러시아",
      "브라질", "폴란드", "체코", "이탈리아", "스페인", "말레이시아", "오스트리아", "벨기에",
      "포르투갈", "노르웨이", "뉴질랜드", "태국", "필리핀", "베트남", "터키", "멕시코",
      "아랍에미리트", "사우디아라비아", "남아프리카 공화국", "헝가리", "아르헨티나", "콜롬비아",
      "칠레", "파키스탄", "우크라이나", "카자흐스탄", "이집트", "인도네시아", "루마니아",
      "라트비아", "리투아니아", "에스토니아", "벨라루스", "크로아티아", "슬로바키아", "슬로베니아",
      "그리스", "케냐", "나이지리아", "방글라데시", "이란", "알제리", "모로코", "페루",
      "우루과이", "베네수엘라", "쿠웨이트", "카타르", "바레인", "오만", "우즈베키스탄",
      "스리랑카", "미얀마", "몽골", "조지아", "아르메니아", "키르기스스탄", "타지키스탄",
      "아제르바이잔", "튀니지", "에티오피아", "가나", "탄자니아", "앙골라", "잠비아",
      "짐바브웨", "세르비아", "보스니아 헤르체고비나", "북마케도니아", "알바니아", "몰도바",
      "쿠바", "볼리비아", "파라과이", "과테말라", "엘살바도르", "온두라스", "니카라과",
      "코스타리카", "파나마", "아이슬란드"
    ],
  
    languages: [
    "한국어", "영어", "스페인어", "프랑스어", "독일어", "중국어", "일본어", "러시아어", "포르투갈어", "아랍어",
    "힌디어", "펀자브어", "우르두어", "타밀어", "벵골어", "텔루구어", "마라티어", "스웨덴어", "네덜란드어",
    "덴마크어", "핀란드어", "이탈리아어", "체코어", "폴란드어", "헝가리어", "그리스어",
    "슬로바키아어", "슬로베니아어", "크로아티아어", "루마니아어", "불가리아어", "세르비아어", "알바니아어",
    "우즈베크어", "카자흐어", "타지크어", "아제르바이잔어", "조지아어", "아르메니아어", "몽골어", "이란어",
    "아랍어", "말레이어", "인도네시아어", "베트남어", "필리핀어", "태국어", "스와힐리어", "나이지리아어",
    "방글라데시어", "페르시아어", "알제리어", "모로코어", "우루과이어", "볼리비아어", "파라과이어",
    "과테말라어", "온두라스어", "니카라과어", "코스타리카어", "파나마어", "아이슬란드어"
    ],
  
    skills: {
    "프로그래밍 언어": [
      "C", "C++", "C#", "Java", "JavaScript", "TypeScript", "Python", 
      "Swift", "Perl", "Ruby", "PHP", "R", "Scala", "Rust", "Kotlin", "Go"
    ],
    "프론트엔드": [
      "ReactJS", "React-Context", "Redux", "Recoil", "Svelte", 
      "Tailwind", "VueJS", "Vuex", "Next.js", "Nuxt.js", "Electron", "Emotion"
    ],
    "웹 기술": [
      "OpenGL", "Unity", "Unreal"
    ],
    "백엔드 프레임워크": [
      "Node.js", "Spring", "Spring Boot", "NestJS", "Flask", 
      "Django", "FastAPI", "Fastify"
    ],
    "API": [
      "RESTful API", "Swagger"
    ],
    "웹 서버": [
      "Apache", "Nginx"
    ],
    "데이터베이스": [
      "MySQL", "MariaDB", "PostgreSQL", "OracleDB", "MSSQL", "NoSQL"
    ],
    "데이터 관리 도구": [
      "Presto", "Redash", "Prometheus", "Grafana", "Superset", "Zeppelin", "Spark"
    ],
    "DevOps 및 클라우드": [
      "Docker", "Kubernetes", "Jenkins", "GitHub", "GitLab", "AWS", 
      "AWS-RDS", "Linux", "Ubuntu"
    ],
    "모바일 플랫폼": [
      "Android", "iOS"
    ],
    "모바일 프레임워크": [
      "Flutter", "React-Native"
    ],
    "모바일 라이브러리": [
      "Retrofit", "Alamofire", "SnapKit", "ExoPlayer", "Realm", "Fastlane"
    ],
    "머신러닝 및 데이터 과학": [
      "TensorFlow", "PyTorch", "Keras", "MLflow", "CUDA", "ML"
    ],
    "테스트 및 기타 도구": [
      "Tableau", "Jira", "Fastlane", "Bazel", "Dagger", "Zipkin"
    ]
    }
  },
  en: {
    nationalities: [
        "India", "United States", "China", "United Kingdom", "Germany", "Canada", "Japan", "Israel", "Korea", "France",
        "Netherlands", "Sweden", "Singapore", "Switzerland", "Australia", "Finland", "Denmark", "Ireland", "Russia",
        "Brazil", "Poland", "Czech Republic", "Italy", "Spain", "Malaysia", "Austria", "Belgium",
        "Portugal", "Norway", "New Zealand", "Thailand", "Philippines", "Vietnam", "Turkey", "Mexico",
        "United Arab Emirates", "Saudi Arabia", "South Africa", "Hungary", "Argentina", "Colombia",
        "Chile", "Pakistan", "Ukraine", "Kazakhstan", "Egypt", "Indonesia", "Romania",
        "Latvia", "Lithuania", "Estonia", "Belarus", "Croatia", "Slovakia", "Slovenia",
        "Greece", "Kenya", "Nigeria", "Bangladesh", "Iran", "Algeria", "Morocco", "Peru",
        "Uruguay", "Venezuela", "Kuwait", "Qatar", "Bahrain", "Oman", "Uzbekistan",
        "Sri Lanka", "Myanmar", "Mongolia", "Georgia", "Armenia", "Kyrgyzstan", "Tajikistan",
        "Azerbaijan", "Tunisia", "Ethiopia", "Ghana", "Tanzania", "Angola", "Zambia",
        "Zimbabwe", "Serbia", "Bosnia and Herzegovina", "North Macedonia", "Albania", "Moldova",
        "Cuba", "Bolivia", "Paraguay", "Guatemala", "El Salvador", "Honduras", "Nicaragua",
        "Costa Rica", "Panama", "Iceland"
      ],
  
      languages: [
        "Korean", "English", "Spanish", "French", "German", "Chinese", "Japanese", "Russian", "Portuguese", "Arabic",
        "Hindi", "Punjabi", "Urdu", "Tamil", "Bengali", "Telugu", "Marathi", "Swedish", "Dutch",
        "Danish", "Finnish", "Italian", "Czech", "Polish", "Hungarian", "Greek",
        "Slovak", "Slovenian", "Croatian", "Romanian", "Bulgarian", "Serbian", "Albanian",
        "Uzbek", "Kazakh", "Tajik", "Azerbaijani", "Georgian", "Armenian", "Mongolian", "Persian",
        "Arabic", "Malay", "Indonesian", "Vietnamese", "Filipino", "Thai", "Swahili", "Nigerian",
        "Bangladeshi", "Persian", "Algerian", "Moroccan", "Uruguayan", "Bolivian", "Paraguayan",
        "Guatemalan", "Honduran", "Nicaraguan", "Costa Rican", "Panamanian", "Icelandic"
      ],
  
      skills: {
        "Programming Languages": [
          "C", "C++", "C#", "Java", "JavaScript", "TypeScript", "Python",
          "Swift", "Perl", "Ruby", "PHP", "R", "Scala", "Rust", "Kotlin", "Go"
        ],
        "Frontend": [
          "ReactJS", "React-Context", "Redux", "Recoil", "Svelte",
          "Tailwind", "VueJS", "Vuex", "Next.js", "Nuxt.js", "Electron", "Emotion"
        ],
        "Web Technologies": [
          "OpenGL", "Unity", "Unreal"
        ],
        "Backend Frameworks": [
          "Node.js", "Spring", "Spring Boot", "NestJS", "Flask",
          "Django", "FastAPI", "Fastify"
        ],
        "API": [
          "RESTful API", "Swagger"
        ],
        "Web Servers": [
          "Apache", "Nginx"
        ],
        "Databases": [
          "MySQL", "MariaDB", "PostgreSQL", "OracleDB", "MSSQL", "NoSQL"
        ],
        "Data Management Tools": [
          "Presto", "Redash", "Prometheus", "Grafana", "Superset", "Zeppelin", "Spark"
        ],
        "DevOps & Cloud": [
          "Docker", "Kubernetes", "Jenkins", "GitHub", "GitLab", "AWS",
          "AWS-RDS", "Linux", "Ubuntu"
        ],
        "Mobile Platforms": [
          "Android", "iOS"
        ],
        "Mobile Frameworks": [
          "Flutter", "React-Native"
        ],
        "Mobile Libraries": [
          "Retrofit", "Alamofire", "SnapKit", "ExoPlayer", "Realm", "Fastlane"
        ],
        "Machine Learning & Data Science": [
          "TensorFlow", "PyTorch", "Keras", "MLflow", "CUDA", "ML"
        ],
        "Testing & Other Tools": [
          "Tableau", "Jira", "Fastlane", "Bazel", "Dagger", "Zipkin"
        ]
      }
  }
};

// 데이터를 가져오는 함수들
export const getNationalities = () => {
  const currentLang = getCurrentLanguage();
  return data[currentLang].nationalities;
};

export const getLanguages = () => {
  const currentLang = getCurrentLanguage();
  return data[currentLang].languages;
};

export const getSkills = () => {
  const currentLang = getCurrentLanguage();
  return data[currentLang].skills;
};

export default data;  