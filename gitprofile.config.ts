// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Shasikhan', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [],
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projects I have worked on:',
      projects: [
        {
          title: 'edupression.com®',
          description:
            'edupression.com is a digital self-help therapy program for patients with unipolar depression or burnout. The therapy is based on elements of behavioral therapy, latest, scientific findings and methods. Available for iOS and Android.',
          imageUrl:
            'https://play-lh.googleusercontent.com/nkzNdBhzOZ6FVKdJV6Ru1lBCM8UbFCqx2HDcDvG4hq6tq8hi9rGIcMdXtRbUyKjaWQ=w480-h960-rw',
          link: 'https://play.google.com/store/apps/details?id=com.proappdev.edupression_web_mobile_app',
        },
        {
          title: 'PropSure',
          description:
            'PropSure Digital Solutions Private Limited (PropSure) strive to transform Pakistan’s real estate industry through disruptive digital solutions and technical expertise. Being a pioneer, we facilitate our valued clients and partners to understand industry dynamics and make informed decisions to grab opportunities regarding real estate investments and developments. Available for iOS and Android.',
          imageUrl:
            'https://play-lh.googleusercontent.com/cp_QHplg8_5p4e4UhGaXoJWiXHKL9Tau4zPjo1fdvindHU5KhYGYKcXgsOAmLTtlIQ=w480-h960-rw',
          link: 'https://play.google.com/store/apps/details?id=com.propsure.map',
        },
        {
          title: 'Fancy Everywhere',
          description:
            'Share stylish text everywhere. Available for iOS and Android',
          imageUrl:
            'https://play-lh.googleusercontent.com/AV8LQwqm6ZTnMI9Sf_zJyazHyck61Y-q72OAYofkugAlB5-wiVa5bnwH3AYGmMjGc7wI=w480-h960-rw',
          link: 'https://play.google.com/store/apps/details?id=com.bircube.fancy',
        },
        {
          title: 'Status Downloader for WhatsApp',
          description:
            'Download and easily share WhatsApp status. Available for Android',
          imageUrl:
            'https://play-lh.googleusercontent.com/6r2NjCDqLkej4rG5cPJZDqa0l5yW9IOy9OGoo177Kh6mCUwjyjAmU8qONi8Wbpwv6Zk=w480-h960-rw',
          link: 'https://play.google.com/store/apps/details?id=com.bircube.statusdownloaderforwhatsapp',
        },
      ],
    },
  },
  seo: {
    title: '',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'shafqat-ullah-khan-25a9b8111/',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '8885560/shafqat-ullah-khan', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'iamshafqatkhan@gmail.com',
  },
  resume: {
    fileUrl: '',
  },
  skills: [
    'React.js',
    'React Native',
    'Node.js',
    'Next.js',
    'Firebase',
    'JavaScript',
    'TypeScript',
    'CSS',
    'Tailwind',
    'Git',
  ],
  experiences: [
    {
      company: 'Codilityhub Technologies Pvt. Ltd.',
      position: 'React Native Developer',
      from: '17 August 2023',
      to: 'Present',
      companyLink: 'https://codilityhub.com/',
    },
    {
      company: 'Bircube Technologies Pvt. Ltd.',
      position: 'React Native Developer',
      from: 'December 2022',
      to: '16 August 2023',
      companyLink: 'https://bircube.com/',
    },
    {
      company: 'CodeAutomation.ai',
      position: 'React Native Developer',
      from: 'September 2022',
      to: 'December 2022',
      companyLink: 'https://codeautomation.ai/',
    },
    {
      company: 'Bircube Technologies Pvt. Ltd.',
      position: 'React Native Developer',
      from: 'February 2021',
      to: 'September 2022',
      companyLink: 'https://bircube.com/',
    },
  ],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    {
      institution: 'Riphah International University',
      degree: 'BS Software Engineering',
      from: '2016',
      to: '2020',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    // source: 'dev', // medium | dev
    // username: 'arifszn', // to hide blog section, keep it empty
    // limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: false,
};

export default CONFIG;
