import { Provider, StoryParams, ApiConfig } from './types';

export const DEFAULT_API_CONFIG: ApiConfig = {
  provider: Provider.GEMINI,
  apiKey: '',
  model: '', // Empty by default as requested
  baseUrl: ''
};

export const DEFAULT_STORY_PARAMS: StoryParams = {
  genre: 'Science Fiction',
  length: 'Medium',
  perspective: 'Third Person Limited',
  characters: '',
  conflict: '',
  climax: '',
  keywords: '',
  tone: 'Suspenseful',
  writingStyle: 'Descriptive',
  authorMimic: '',
  styleExample: ''
};

export const TRANSLATIONS = {
  en: {
    appTitle: "MAKER OF BIG THINGS",
    apiSettings: "SYSTEM CONFIG",
    saveConfig: "SAVE DATA",
    cancel: "ABORT",
    generate: "INITIATE SEQUENCE",
    generating: "PROCESSING...",
    preview: "OUTPUT STREAM",
    copy: "COPY DATA",
    download: "EXPORT .TXT",
    shareImage: "SAVE IMAGE",
    placeholderStart: "WAITING FOR INPUT STREAM...",
    
    configTitle: "SYSTEM CONFIGURATION",
    providerLabel: "AI CORE PROVIDER",
    apiKeyLabel: "ACCESS KEY",
    getKey: "GET KEY ->",
    modelLabel: "MODEL DESIGNATION",
    modelHelp: "SELECT PRESET OR INPUT CUSTOM ID.",
    baseUrlLabel: "BASE URL OVERRIDE",
    securityNote: "NOTICE: KEY STORED IN LOCAL STORAGE. DIRECT TRANSMISSION ONLY.",

    sectionBasic: "PRIMARY PARAMETERS",
    sectionCore: "CORE DATA",
    sectionStyle: "TONAL SETTINGS",

    fieldGenre: "GENRE",
    fieldLength: "LENGTH",
    fieldPerspective: "VIEWPOINT",
    fieldCharacters: "CHARACTERS",
    fieldConflict: "CONFLICT",
    fieldClimax: "CLIMAX EVENT",
    fieldKeywords: "KEYWORDS",
    fieldTone: "TONE",
    fieldStyle: "STYLE",
    fieldAuthor: "MIMIC AUTHOR",
    fieldStyleExample: "STYLE SAMPLE",

    phCharacters: "e.g. Elara, Kael...",
    phConflict: "e.g. Solar theft...",
    phClimax: "e.g. Final confrontation...",
    phKeywords: "e.g. Neon, Rust...",
    phBaseUrl: "https://api.example.com/v1",
    phAuthor: "e.g. Asimov, Gibson...",
    phStyleExample: "Input sample text for analysis...",

    // About Modal
    aboutTitle: "SYSTEM INFORMATION",
    aboutTech: "TECHNOLOGY STACK",
    aboutGuide: "OPERATIONAL GUIDE",
    aboutAuthor: "ARCHITECT DATA",
    close: "CLOSE TERMINAL",
    blog: "ACCESS BLOG LOGS",
    repo: "SOURCE CODE REPO",
    techList: "React 19, Tailwind CSS, Google GenAI SDK, Lucide Icons",
    guideText: "1. Configure API Key in Settings.\n2. Input story parameters in the left panel.\n3. Click 'INITIATE SEQUENCE'.\n4. Output renders in Markdown format."
  },
  zh: {
    appTitle: "大份制造机",
    apiSettings: "系统设置",
    saveConfig: "写入配置",
    cancel: "终止",
    generate: "启动制造程序",
    generating: "正在编织数据...",
    preview: "输出流",
    copy: "拷贝数据",
    download: "导出文本",
    shareImage: "生成长图",
    placeholderStart: "等待输入数据流...",
    
    configTitle: "系统配置控制台",
    providerLabel: "AI 核心供应商",
    apiKeyLabel: "访问密钥 (API Key)",
    getKey: "获取密钥 ->",
    modelLabel: "模型代号",
    modelHelp: "选择预设或输入自定义 ID。",
    baseUrlLabel: "基地址覆盖",
    securityNote: "注意：密钥仅存储于本地终端。仅作直接传输用途。",

    sectionBasic: "基础参数",
    sectionCore: "核心数据",
    sectionStyle: "风格调教",

    fieldGenre: "题材类别",
    fieldLength: "数据长度",
    fieldPerspective: "观测视角",
    fieldCharacters: "角色实体",
    fieldConflict: "核心冲突",
    fieldClimax: "高潮事件 (详细描写)",
    fieldKeywords: "关键索引",
    fieldTone: "基调频率",
    fieldStyle: "文体风格",
    fieldAuthor: "模拟作家",
    fieldStyleExample: "风格样本",

    phCharacters: "例如：Elara（发明家）...",
    phConflict: "例如：偷走太阳...",
    phClimax: "例如：火山口决战...",
    phKeywords: "例如：背叛，齿轮...",
    phBaseUrl: "https://api.example.com/v1",
    phAuthor: "例如：鲁迅、Gibson...",
    phStyleExample: "粘贴样本以供分析...",

    // About Modal
    aboutTitle: "系统情报",
    aboutTech: "技术架构",
    aboutGuide: "操作手册",
    aboutAuthor: "架构师数据",
    close: "关闭终端",
    blog: "访问技术博客",
    repo: "源代码仓库",
    techList: "React 19, Tailwind CSS, Google GenAI SDK, Lucide Icons",
    guideText: "1. 在设置中配置 API Key。\n2. 在左侧面板输入小说参数。\n3. 点击“启动制造程序”。\n4. 输出将以 Markdown 格式渲染。"
  },
  ja: {
    appTitle: "大盛り製造機",
    apiSettings: "システム設定",
    saveConfig: "保存",
    cancel: "中止",
    generate: "生成開始",
    generating: "処理中...",
    preview: "出力ストリーム",
    copy: "コピー",
    download: "TXT出力",
    shareImage: "画像保存",
    placeholderStart: "入力ストリーム待機中...",
    
    configTitle: "システム構成",
    providerLabel: "AIプロバイダー",
    apiKeyLabel: "アクセスキー",
    getKey: "キーを取得 ->",
    modelLabel: "モデル識別子",
    modelHelp: "プリセット選択またはカスタムID入力。",
    baseUrlLabel: "Base URL (上書き)",
    securityNote: "注意: キーはローカルストレージにのみ保存されます。",

    sectionBasic: "基本パラメータ",
    sectionCore: "コアデータ",
    sectionStyle: "トーン設定",

    fieldGenre: "ジャンル",
    fieldLength: "長さ",
    fieldPerspective: "視点",
    fieldCharacters: "キャラクター",
    fieldConflict: "対立構造",
    fieldClimax: "クライマックス",
    fieldKeywords: "キーワード",
    fieldTone: "トーン",
    fieldStyle: "文体",
    fieldAuthor: "文体模倣",
    fieldStyleExample: "文体サンプル",

    phCharacters: "例: エララ、カエル...",
    phConflict: "例: 太陽の盗難...",
    phClimax: "例: 最終決戦...",
    phKeywords: "例: ネオン、錆...",
    phBaseUrl: "https://api.example.com/v1",
    phAuthor: "例: 太宰治、ギブソン...",
    phStyleExample: "分析用のサンプルテキストを入力...",

    // About Modal
    aboutTitle: "システム情報",
    aboutTech: "技術スタック",
    aboutGuide: "操作ガイド",
    aboutAuthor: "開発者情報",
    close: "端末を閉じる",
    blog: "開発ブログ",
    repo: "ソースコード",
    techList: "React 19, Tailwind CSS, Google GenAI SDK, Lucide Icons",
    guideText: "1. 設定でAPIキーを設定します。\n2. 左側のパネルにパラメータを入力します。\n3. 「生成開始」をクリックします。\n4. 出力はMarkdown形式で表示されます。"
  },
  ko: {
    appTitle: "특대 제조기",
    apiSettings: "시스템 설정",
    saveConfig: "저장",
    cancel: "취소",
    generate: "가동 시작",
    generating: "처리 중...",
    preview: "출력 스트림",
    copy: "복사",
    download: "TXT 내보내기",
    shareImage: "이미지 저장",
    placeholderStart: "입력 스트림 대기 중...",
    
    configTitle: "시스템 구성",
    providerLabel: "AI 공급자",
    apiKeyLabel: "액세스 키",
    getKey: "키 발급 ->",
    modelLabel: "모델 ID",
    modelHelp: "프리셋 선택 또는 직접 입력.",
    baseUrlLabel: "Base URL 재정의",
    securityNote: "주의: 키는 로컬 스토리지에만 저장됩니다.",

    sectionBasic: "기본 매개변수",
    sectionCore: "핵심 데이터",
    sectionStyle: "톤 설정",

    fieldGenre: "장르",
    fieldLength: "길이",
    fieldPerspective: "시점",
    fieldCharacters: "등장인물",
    fieldConflict: "핵심 갈등",
    fieldClimax: "클라이맥스",
    fieldKeywords: "키워드",
    fieldTone: "어조 (Tone)",
    fieldStyle: "문체",
    fieldAuthor: "작가 모방",
    fieldStyleExample: "문체 샘플",

    phCharacters: "예: 엘라라, 카엘...",
    phConflict: "예: 태양 도난 사건...",
    phClimax: "예: 화산에서의 최후 결전...",
    phKeywords: "예: 네온, 녹...",
    phBaseUrl: "https://api.example.com/v1",
    phAuthor: "예: 김영하, 깁슨...",
    phStyleExample: "분석할 샘플 텍스트 입력...",

    // About Modal
    aboutTitle: "시스템 정보",
    aboutTech: "기술 스택",
    aboutGuide: "사용 가이드",
    aboutAuthor: "개발자 정보",
    close: "터미널 종료",
    blog: "블로그 접속",
    repo: "소스 코드",
    techList: "React 19, Tailwind CSS, Google GenAI SDK, Lucide Icons",
    guideText: "1. 설정에서 API 키를 구성하십시오.\n2. 왼쪽 패널에 스토리 매개변수를 입력하십시오.\n3. '가동 시작'을 클릭하십시오.\n4. 결과는 Markdown 형식으로 렌더링됩니다."
  },
  ru: {
    appTitle: "Генератор Шедевров",
    apiSettings: "Настройки",
    saveConfig: "Сохранить",
    cancel: "Отмена",
    generate: "Запуск",
    generating: "Обработка...",
    preview: "Вывод",
    copy: "Копировать",
    download: "Скачать TXT",
    shareImage: "Сохранить изображение",
    placeholderStart: "Ожидание ввода...",
    
    configTitle: "Конфигурация системы",
    providerLabel: "AI Провайдер",
    apiKeyLabel: "API Ключ",
    getKey: "Получить ключ ->",
    modelLabel: "ID Модели",
    modelHelp: "Выберите пресет или введите ID.",
    baseUrlLabel: "Base URL",
    securityNote: "Внимание: Ключ хранится только локально.",

    sectionBasic: "Основные параметры",
    sectionCore: "Ядро сюжета",
    sectionStyle: "Стиль и Тон",

    fieldGenre: "Жанр",
    fieldLength: "Длина",
    fieldPerspective: "Перспектива",
    fieldCharacters: "Персонажи",
    fieldConflict: "Конфликт",
    fieldClimax: "Кульминация",
    fieldKeywords: "Ключевые слова",
    fieldTone: "Тон",
    fieldStyle: "Стиль",
    fieldAuthor: "Подражание автору",
    fieldStyleExample: "Пример стиля",

    phCharacters: "напр. Элара, Каэль...",
    phConflict: "напр. Кража солнца...",
    phClimax: "напр. Финальная битва...",
    phKeywords: "напр. Неон, Ржавчина...",
    phBaseUrl: "https://api.example.com/v1",
    phAuthor: "напр. Азимов, Гибсон...",
    phStyleExample: "Введите текст для анализа...",

    // About Modal
    aboutTitle: "Системная информация",
    aboutTech: "Технологический стек",
    aboutGuide: "Руководство",
    aboutAuthor: "Архитектор",
    close: "Закрыть",
    blog: "Блог",
    repo: "Репозиторий",
    techList: "React 19, Tailwind CSS, Google GenAI SDK, Lucide Icons",
    guideText: "1. Настройте API Key.\n2. Введите параметры сюжета.\n3. Нажмите 'Запуск'.\n4. Вывод в формате Markdown."
  }
};

type LocalizedOption = { value: string; label: { en: string; zh: string; ja: string; ko: string; ru: string } };

export const GENRE_OPTIONS: LocalizedOption[] = [
  { value: 'Science Fiction', label: { en: 'Science Fiction', zh: '科幻', ja: 'SF', ko: '공상과학(SF)', ru: 'Научная фантастика' } },
  { value: 'Fantasy', label: { en: 'Fantasy', zh: '奇幻', ja: 'ファンタジー', ko: '판타지', ru: 'Фэнтези' } },
  { value: 'Mystery', label: { en: 'Mystery', zh: '悬疑', ja: 'ミステリー', ko: '미스터리', ru: 'Детектив' } },
  { value: 'Romance', label: { en: 'Romance', zh: '言情', ja: 'ロマンス', ko: '로맨스', ru: 'Романтика' } },
  { value: 'Horror', label: { en: 'Horror', zh: '恐怖', ja: 'ホラー', ko: '공포', ru: 'Ужасы' } },
  { value: 'Cyberpunk', label: { en: 'Cyberpunk', zh: '赛博朋克', ja: 'サイバーパンク', ko: '사이버펑크', ru: 'Киберпанк' } },
  { value: 'Historical Fiction', label: { en: 'Historical Fiction', zh: '历史架空', ja: '歴史フィクション', ko: '대체 역사', ru: 'Исторический' } },
  { value: 'Thriller', label: { en: 'Thriller', zh: '惊悚', ja: 'スリラー', ko: '스릴러', ru: 'Триллер' } },
  { value: 'Comedy', label: { en: 'Comedy', zh: '喜剧', ja: 'コメディ', ko: '코미디', ru: 'Комедия' } },
  { value: 'Drama', label: { en: 'Drama', zh: '剧情', ja: 'ドラマ', ko: '드라마', ru: 'Драма' } },
  { value: 'Fairy Tale', label: { en: 'Fairy Tale', zh: '童话', ja: '童話', ko: '동화', ru: 'Сказка' } }
];

export const LENGTH_OPTIONS: LocalizedOption[] = [
  { value: 'Short', label: { en: 'Short', zh: '短波 (Short)', ja: '短編', ko: '단편', ru: 'Короткий' } },
  { value: 'Medium', label: { en: 'Medium', zh: '中波 (Medium)', ja: '中編', ko: '중편', ru: 'Средний' } },
  { value: 'Long', label: { en: 'Long', zh: '长波 (Long)', ja: '長編', ko: '장편', ru: 'Длинный' } }
];

export const PERSPECTIVE_OPTIONS: LocalizedOption[] = [
  { value: 'First Person', label: { en: 'First Person', zh: '第一人称', ja: '一人称', ko: '1인칭', ru: 'Первое лицо' } },
  { value: 'Third Person Limited', label: { en: 'Third Person Limited', zh: '第三人称（有限）', ja: '三人称（限定）', ko: '3인칭 (제한적)', ru: 'Третье лицо (Огр.)' } },
  { value: 'Third Person Omniscient', label: { en: 'Third Person Omniscient', zh: '第三人称（全知）', ja: '三人称（全知）', ko: '3인칭 (전지적)', ru: 'Третье лицо (Всевед.)' } }
];

export const TONE_OPTIONS: LocalizedOption[] = [
  { value: 'Dark', label: { en: 'Dark', zh: '暗黑', ja: 'ダーク', ko: '어두운', ru: 'Мрачный' } },
  { value: 'Hopeful', label: { en: 'Hopeful', zh: '希望', ja: '希望に満ちた', ko: '희망찬', ru: 'Обнадеживающий' } },
  { value: 'Suspenseful', label: { en: 'Suspenseful', zh: '悬疑', ja: 'サスペンスフル', ko: '긴장감 넘치는', ru: 'Напряженный' } },
  { value: 'Humorous', label: { en: 'Humorous', zh: '幽默', ja: 'ユーモラス', ko: '유머러스한', ru: 'Юмористический' } },
  { value: 'Melancholic', label: { en: 'Melancholic', zh: '忧郁', ja: 'メランコリック', ko: '우울한', ru: 'Меланхоличный' } },
  { value: 'Whimsical', label: { en: 'Whimsical', zh: '怪诞', ja: '気まぐれ', ko: '기상천외한', ru: 'Причудливый' } },
  { value: 'Cynical', label: { en: 'Cynical', zh: '愤世', ja: 'シニカル', ko: '냉소적', ru: 'Циничный' } },
  { value: 'Romantic', label: { en: 'Romantic', zh: '浪漫', ja: 'ロマンチック', ko: '로맨틱', ru: 'Романтичный' } },
  { value: 'Philosophical', label: { en: 'Philosophical', zh: '哲学', ja: '哲学的', ko: '철학적', ru: 'Философский' } }
];

export const STYLE_OPTIONS: LocalizedOption[] = [
  { value: 'Minimalist', label: { en: 'Minimalist', zh: '极简', ja: 'ミニマリスト', ko: '미니멀리즘', ru: 'Минимализм' } },
  { value: 'Descriptive', label: { en: 'Descriptive', zh: '详尽', ja: '記述的', ko: '묘사적', ru: 'Описательный' } },
  { value: 'Fast-paced', label: { en: 'Fast-paced', zh: '极速', ja: 'テンポが良い', ko: '빠른 전개', ru: 'Динамичный' } },
  { value: 'Poetic', label: { en: 'Poetic', zh: '诗性', ja: '詩的', ko: '시적', ru: 'Поэтичный' } },
  { value: 'Dialog-heavy', label: { en: 'Dialog-heavy', zh: '对话', ja: '会話重視', ko: '대화 중심', ru: 'Диалоговый' } },
  { value: 'Epistolary', label: { en: 'Epistolary', zh: '档案/书信', ja: '書簡体', ko: '서간체', ru: 'Эпистолярный' } },
  { value: 'Stream of Consciousness', label: { en: 'Stream of Consciousness', zh: '意识流', ja: '意識の流れ', ko: '의식의 흐름', ru: 'Поток сознания' } }
];

export const PROVIDER_OPTIONS: LocalizedOption[] = [
  { value: Provider.GEMINI, label: { en: 'Google Gemini', zh: 'Google Gemini', ja: 'Google Gemini', ko: 'Google Gemini', ru: 'Google Gemini' } },
  { value: Provider.OPENAI, label: { en: 'OpenAI', zh: 'OpenAI', ja: 'OpenAI', ko: 'OpenAI', ru: 'OpenAI' } },
  { value: Provider.DEEPSEEK, label: { en: 'DeepSeek', zh: 'DeepSeek (深度求索)', ja: 'DeepSeek', ko: 'DeepSeek', ru: 'DeepSeek' } },
  { value: Provider.ALIYUN, label: { en: 'Aliyun Qwen', zh: 'Aliyun Qwen (通义千问)', ja: 'Aliyun Qwen', ko: 'Aliyun Qwen', ru: 'Aliyun Qwen' } },
  { value: Provider.SILICONFLOW, label: { en: 'SiliconFlow', zh: 'SiliconFlow (硅基)', ja: 'SiliconFlow', ko: 'SiliconFlow', ru: 'SiliconFlow' } },
  { value: Provider.CUSTOM, label: { en: 'Custom / Proxy', zh: 'Custom / Proxy', ja: 'Custom / Proxy', ko: 'Custom / Proxy', ru: 'Custom / Proxy' } },
];

export const MODEL_SUGGESTIONS: Record<Provider, string[]> = {
  [Provider.GEMINI]: ['gemini-3-flash-preview', 'gemini-3-pro-preview', 'gemini-2.5-flash-latest'],
  [Provider.OPENAI]: ['gpt-4o', 'gpt-4o-mini', 'gpt-3.5-turbo'],
  [Provider.DEEPSEEK]: ['deepseek-chat', 'deepseek-reasoner'],
  [Provider.ALIYUN]: ['qwen-max', 'qwen-plus', 'qwen-turbo', 'qwen-long'],
  [Provider.SILICONFLOW]: ['deepseek-ai/DeepSeek-V3', 'deepseek-ai/DeepSeek-R1'],
  [Provider.CLAUDE]: ['claude-3-5-sonnet-20241022'],
  [Provider.CUSTOM]: []
};

export const PROVIDER_URLS: Record<Provider, string> = {
  [Provider.GEMINI]: 'https://aistudio.google.com/app/apikey',
  [Provider.OPENAI]: 'https://platform.openai.com/api-keys',
  [Provider.SILICONFLOW]: 'https://cloud.siliconflow.cn/account/ak',
  [Provider.DEEPSEEK]: 'https://platform.deepseek.com/api_keys',
  [Provider.ALIYUN]: 'https://bailian.console.aliyun.com/#/api-key',
  [Provider.CLAUDE]: 'https://console.anthropic.com/settings/keys',
  [Provider.CUSTOM]: ''
};