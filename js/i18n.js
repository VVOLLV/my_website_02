(function() {
    var translations = {
        zh: {
            page_title: '张明远 | 天然地震学',
            nav_logo: '张明远',
            nav_home: '首页',
            nav_about: '关于',
            nav_skills: '技能',
            nav_projects: '项目',
            nav_publications: '论文',
            nav_contact: '联系',
            lang_label: '中/EN',
            hero_title: '张明远',
            hero_subtitle: '天然地震学 · 研一',
            hero_intro: '探索地球内部的震动信号，揭示地壳运动的奥秘',
            about_title: '关于我',
            about_education_title: '教育背景',
            about_education: '中国地震局地质研究所 · 硕士研究生 · 天然地震学方向',
            about_research_title: '研究兴趣',
            about_research: '地震定位 · 震源机制解 · 地壳结构成像 · 地震危险性评估',
            about_intro_title: '个人介绍',
            about_intro: '我是一名天然地震学方向的硕士研究生，目前就读于中国地震局地质研究所。我的研究聚焦于地震定位、震源机制解以及地壳结构成像。我热衷于通过地震波形数据理解地球内部的物理过程，并致力于将研究成果应用于地震危险性评估。',
            skills_title: '技能',
            skill_programming: '编程语言',
            skill_seismology: '地震学工具',
            skill_data: '数据处理',
            skill_other: '其他工具',
            projects_title: '项目展示',
            project1_title: '基于双差定位法的地震重定位研究',
            project1_desc: '利用双差定位算法对区域地震目录进行重定位，提高震源位置精度',
            project2_title: '接收函数与H-κ叠加地壳结构成像',
            project2_desc: '基于远震接收函数方法反演台站下方地壳厚度与波速比',
            project3_title: '地震目录统计分析工具',
            project3_desc: '开发 Python 工具包用于地震目录的完整性评估与统计分析',
            project4_title: '基于机器学习的震相自动拾取',
            project4_desc: '利用深度学习模型实现P波和S波震相的自动识别与拾取',
            publications_title: '论文发表',
            pub1_title: '基于密集台阵的某地区地壳结构成像研究',
            pub1_journal: '地球物理学报',
            pub2_title: '某某断裂带地震活动性统计分析',
            pub2_journal: 'Seismological Research Letters',
            contact_title: '联系方式',
            contact_email: '邮箱',
            contact_location: '所在城市',
            contact_location_value: '北京, 中国',
            footer_name: '张明远'
        },
        en: {
            page_title: 'Zhang Mingyuan | Seismology',
            nav_logo: 'Zhang Mingyuan',
            nav_home: 'Home',
            nav_about: 'About',
            nav_skills: 'Skills',
            nav_projects: 'Projects',
            nav_publications: 'Publications',
            nav_contact: 'Contact',
            lang_label: '中/EN',
            hero_title: 'Zhang Mingyuan',
            hero_subtitle: 'Seismology · First-Year Graduate Student',
            hero_intro: 'Exploring seismic signals to uncover the dynamics of Earth\'s crust',
            about_title: 'About Me',
            about_education_title: 'Education',
            about_education: 'Institute of Geology, China Earthquake Administration · M.S. · Seismology',
            about_research_title: 'Research Interests',
            about_research: 'Earthquake Location · Focal Mechanism · Crustal Structure Imaging · Seismic Hazard Assessment',
            about_intro_title: 'About',
            about_intro: 'I am a first-year graduate student in seismology at the Institute of Geology, China Earthquake Administration. My research focuses on earthquake location, focal mechanism solutions, and crustal structure imaging. I am passionate about understanding the physical processes inside the Earth through seismic waveform data and applying research findings to seismic hazard assessment.',
            skills_title: 'Skills',
            skill_programming: 'Programming Languages',
            skill_seismology: 'Seismology Tools',
            skill_data: 'Data Processing',
            skill_other: 'Other Tools',
            projects_title: 'Projects',
            project1_title: 'Earthquake Relocation Using Double-Difference Method',
            project1_desc: 'Relocating regional earthquake catalogs using double-difference algorithms to improve source location accuracy',
            project2_title: 'Crustal Structure Imaging with Receiver Functions & H-κ Stacking',
            project2_desc: 'Inverting crustal thickness and velocity ratio beneath stations using teleseismic receiver function methods',
            project3_title: 'Seismic Catalog Statistical Analysis Toolkit',
            project3_desc: 'Developing Python packages for seismic catalog completeness assessment and statistical analysis',
            project4_title: 'Machine Learning-Based Seismic Phase Picking',
            project4_desc: 'Using deep learning models for automatic identification and picking of P-wave and S-wave phases',
            publications_title: 'Publications',
            pub1_title: 'Crustal Structure Imaging Study of a Region Based on Dense Array',
            pub1_journal: 'Chinese Journal of Geophysics',
            pub2_title: 'Statistical Analysis of Seismicity in a Fault Zone',
            pub2_journal: 'Seismological Research Letters',
            contact_title: 'Contact',
            contact_email: 'Email',
            contact_location: 'Location',
            contact_location_value: 'Beijing, China',
            footer_name: 'Zhang Mingyuan'
        }
    };

    function setLanguage(lang, translations) {
        var elements = document.querySelectorAll('[data-i18n]');
        for (var i = 0; i < elements.length; i++) {
            var el = elements[i];
            var key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        }
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
        localStorage.setItem('language', lang);
    }

    function initLanguage(translations) {
        var savedLang = localStorage.getItem('language');
        var lang = savedLang ? savedLang : 'zh';
        setLanguage(lang, translations);
        return lang;
    }

    function init() {
        var langToggle = document.getElementById('lang-toggle');
        var currentLang = initLanguage(translations);

        if (langToggle) {
            langToggle.addEventListener('click', function() {
                currentLang = currentLang === 'zh' ? 'en' : 'zh';
                setLanguage(currentLang, translations);
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            init();
        });
    } else {
        init();
    }
})();