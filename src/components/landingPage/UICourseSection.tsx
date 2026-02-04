export default function UICourseSection() {
  // const UIcourseContent = [
  //   {
  //     id: 1,
  //     heading: 'Get to Know UI/UX',
  //     time: '1 week',
  //     modules: [
  //       {
  //         heading: 'Introduction to Design',
  //         content: [
  //           { topic: 'Understand the difference between UI and UX.' },
  //           { topic: 'Why UI/UX matters in digital products.' },
  //           { topic: 'The evolution of design practices.' },
  //         ],
  //       },
  //       {
  //         heading: 'The Role of a Designer',
  //         content: [
  //           { topic: 'Responsibilities of UI vs UX designers.' },
  //           { topic: 'Collaboration with developers and product managers.' },
  //           { topic: 'Essential skills every designer should have.' },
  //         ],
  //       },
  //       {
  //         heading: 'Design Thinking Basics',
  //         content: [
  //           { topic: 'Overview of the design thinking process.' },
  //           { topic: 'Empathize, Define, Ideate, Prototype, Test.' },
  //           { topic: 'Real-world applications of design thinking.' },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     heading: 'User Research & Analysis',
  //     time: '1 week',
  //     subHeading: 'Discover how to understand users and their needs.',
  //     modules: [
  //       {
  //         heading: 'User Personas',
  //         content: [
  //           { topic: 'Defining target user groups.' },
  //           { topic: 'Building fictional characters to represent users.' },
  //           { topic: 'Using personas to guide design decisions.' },
  //         ],
  //       },
  //       {
  //         heading: 'User Journey Mapping',
  //         content: [
  //           { topic: 'Steps users take to achieve goals.' },
  //           { topic: 'Identifying pain points and opportunities.' },
  //           { topic: 'Improving user flows through mapping.' },
  //         ],
  //       },
  //       {
  //         heading: 'Research Methods',
  //         content: [
  //           { topic: 'Conducting user interviews and focus groups.' },
  //           { topic: 'Designing surveys for quantitative feedback.' },
  //           { topic: 'Running usability testing sessions.' },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     heading: 'Wireframing & Prototyping',
  //     time: '1 week',
  //     subHeading: 'Turn ideas into visual structures and interactive flows.',
  //     modules: [
  //       {
  //         heading: 'Low-Fidelity Wireframes',
  //         content: [
  //           { topic: 'Sketching basic layouts and structures.' },
  //           { topic: 'Using pen and paper for fast iteration.' },
  //           { topic: 'Focusing on functionality over visuals.' },
  //         ],
  //       },
  //       {
  //         heading: 'High-Fidelity Mockups',
  //         content: [
  //           { topic: 'Adding colors, typography, and spacing.' },
  //           { topic: 'Working with design systems and components.' },
  //           { topic: 'Making designs developer-ready.' },
  //         ],
  //       },
  //       {
  //         heading: 'Prototyping Tools',
  //         content: [
  //           { topic: 'Creating interactive prototypes in Figma.' },
  //           { topic: 'Using Adobe XD for collaboration.' },
  //           { topic: 'Building advanced prototypes with Sketch and InVision.' },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     heading: 'Visual Design Principles',
  //     time: '1 week',
  //     subHeading: 'Understand aesthetics, colors, and typography for UI.',
  //     modules: [
  //       {
  //         heading: 'Color Theory',
  //         content: [
  //           { topic: 'Understanding color psychology in design.' },
  //           { topic: 'Applying contrast for readability.' },
  //           { topic: 'Building accessible color palettes.' },
  //         ],
  //       },
  //       {
  //         heading: 'Typography',
  //         content: [
  //           { topic: 'Choosing fonts for readability and style.' },
  //           { topic: 'Establishing hierarchy with font sizes.' },
  //           { topic: 'Best practices for web and mobile typography.' },
  //         ],
  //       },
  //       {
  //         heading: 'Layouts & Grids',
  //         content: [
  //           { topic: 'Using grids for structured design.' },
  //           { topic: 'Applying spacing and alignment principles.' },
  //           { topic: 'Maintaining balance with white space.' },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     heading: 'Interaction Design & Usability',
  //     time: '1 week',
  //     subHeading: 'Design experiences that are intuitive and user-friendly.',
  //     modules: [
  //       {
  //         heading: 'Microinteractions',
  //         content: [
  //           { topic: 'Adding subtle animations to enhance UX.' },
  //           { topic: 'Feedback loops like hover states and clicks.' },
  //           { topic: 'Improving user delight with small details.' },
  //         ],
  //       },
  //       {
  //         heading: 'Accessibility Basics',
  //         content: [
  //           { topic: 'Designing for screen readers and assistive tech.' },
  //           { topic: 'Ensuring proper color contrast.' },
  //           { topic: 'Keyboard-friendly navigation.' },
  //         ],
  //       },
  //       {
  //         heading: 'Usability Testing',
  //         content: [
  //           { topic: 'Planning and setting up usability tests.' },
  //           { topic: 'Analyzing user behavior and struggles.' },
  //           { topic: 'Iterating designs based on feedback.' },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     heading: 'UI/UX Project & Portfolio',
  //     time: '1 week',
  //     subHeading: 'Apply everything learned to create a real-world project.',
  //     modules: [
  //       {
  //         heading: 'Capstone Project',
  //         content: [
  //           { topic: 'Work on a real product case study.' },
  //           { topic: 'Apply all stages from research to prototype.' },
  //           { topic: 'Present findings and solutions.' },
  //         ],
  //       },
  //       {
  //         heading: 'Portfolio Building',
  //         content: [
  //           { topic: 'Showcasing your best design projects.' },
  //           { topic: 'Documenting your design process step by step.' },
  //           { topic: 'Creating a visually appealing online portfolio.' },
  //         ],
  //       },
  //       {
  //         heading: 'Career in UI/UX',
  //         content: [
  //           { topic: 'Preparing for design job interviews.' },
  //           { topic: 'Networking with other designers.' },
  //           {
  //             topic:
  //               'Building an online presence on Behance, Dribbble, LinkedIn.',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];

  const UIcourseContent = [
  {
    id: 1,
    heading: 'Orientation + Tools',
    subHeading: 'Set up your system like a real developer and start clean.',
    time: '1 week',
    modules: [
      {
        heading: 'Part 1',
        content: [
          { topic: 'VS Code, extensions, folder structure' },
          { topic: 'Terminal basics (cmd, bash, zsh)' },
          { topic: 'Git & GitHub (commit, push, branch)' },
          { topic: 'How to use AI for learning + debugging (rules)' },
        ],
      },
    ],
  },

  {
    id: 2,
    heading: 'HTML + CSS Foundations',
    subHeading: 'Build modern, responsive pages with clean structure.',
    time: '2 weeks',
    modules: [
      {
        heading: 'Part 2',
        content: [
          { topic: 'Semantic HTML, forms, tables' },
          { topic: 'CSS basics, Flexbox, Grid' },
          { topic: 'Responsive design (mobile-first)' },
          { topic: 'Project: Responsive landing page' },
        ],
      },
    ],
  },

  {
    id: 3,
    heading: 'JavaScript Basics',
    subHeading: 'Become strong in JavaScript fundamentals (job gate).',
    time: '3 weeks',
    modules: [
      {
        heading: 'Part 3',
        content: [
          { topic: 'Variables, functions, arrays, objects' },
          { topic: 'Loops, conditions, scope' },
          { topic: 'Events, debugging mindset' },
          { topic: 'Daily coding practice set' },
        ],
      },
    ],
  },

  {
    id: 4,
    heading: 'JavaScript Advanced + Async',
    subHeading: 'Write real-world JS used in projects and backend work.',
    time: '2 weeks',
    modules: [
      {
        heading: 'Part 4',
        content: [
          { topic: 'ES6+ (destructuring, spread, modules)' },
          { topic: 'Closures, this, prototypes (practical)' },
          { topic: 'Promises, async/await, fetch' },
          { topic: 'Project: API-based mini app (frontend)' },
        ],
      },
    ],
  },

  {
    id: 5,
    heading: 'TypeScript Fundamentals',
    subHeading: 'TypeScript makes you stand out in Node & React hiring.',
    time: '1 week',
    modules: [
      {
        heading: 'Part 5',
        content: [
          { topic: 'Types, interfaces, unions' },
          { topic: 'Typing functions, objects, arrays' },
          { topic: 'Typing API response shapes' },
          { topic: 'Convert small JS code → TS' },
        ],
      },
    ],
  },

  {
    id: 6,
    heading: 'React Basics',
    subHeading: 'Start building real products with React.',
    time: '3 weeks',
    modules: [
      {
        heading: 'Part 6',
        content: [
          { topic: 'Components, props, state' },
          { topic: 'Hooks: useState, useEffect' },
          { topic: 'Forms + validation' },
          { topic: 'Project: Multi-page React app (basic)' },
        ],
      },
    ],
  },

  {
    id: 7,
    heading: 'React Routing + Patterns',
    subHeading: 'Make your app structured like real teams do.',
    time: '2 weeks',
    modules: [
      {
        heading: 'Part 7',
        content: [
          { topic: 'React Router: routes, params' },
          { topic: 'Reusable components + layout pattern' },
          { topic: 'API integration patterns' },
          { topic: 'Project: Dashboard + listing page' },
        ],
      },
    ],
  },

  {
    id: 8,
    heading: 'React + TypeScript',
    subHeading: 'Build a frontend that’s production-friendly.',
    time: '2 weeks',
    modules: [
      {
        heading: 'Part 8',
        content: [
          { topic: 'Typing props, hooks, events' },
          { topic: 'API typing and error-safe UI' },
          { topic: 'Folder structure for React projects' },
          { topic: 'Mini project: React + TS app' },
        ],
      },
    ],
  },

  {
    id: 9,
    heading: 'Node.js + Express Basics',
    subHeading: 'Build real backend APIs used in companies.',
    time: '3 weeks',
    modules: [
      {
        heading: 'Part 9',
        content: [
          { topic: 'Express routes, middleware' },
          { topic: 'Controllers / services structure' },
          { topic: 'Validation (Joi / Zod), error handling' },
          { topic: 'Project: User CRUD API' },
        ],
      },
    ],
  },

  {
    id: 10,
    heading: 'Authentication + Security Basics',
    subHeading: 'Make your backend ready for real apps.',
    time: '2 weeks',
    modules: [
      {
        heading: 'Part 10',
        content: [
          { topic: 'Password hashing (bcrypt)' },
          { topic: 'JWT login/register flow' },
          { topic: 'Protected routes + roles (admin/user)' },
          { topic: 'CORS, rate limits basics' },
        ],
      },
    ],
  },

  {
    id: 11,
    heading: 'MongoDB + Mongoose',
    subHeading: 'Store and query data properly.',
    time: '2 weeks',
    modules: [
      {
        heading: 'Part 11',
        content: [
          { topic: 'Collections, documents, schema design' },
          { topic: 'Mongoose models, relations / references' },
          { topic: 'Indexing basics for performance' },
          { topic: 'Project: CRUD + search + pagination' },
        ],
      },
    ],
  },

  {
    id: 12,
    heading: 'SQL Basics (Interview + Practical)',
    subHeading: 'Many companies still ask SQL basics.',
    time: '2 weeks',
    modules: [
      {
        heading: 'Part 12',
        content: [
          { topic: 'Tables, primary key, foreign key' },
          { topic: 'Joins (inner, left, group by)' },
          { topic: 'Writing clean queries' },
          { topic: '30 SQL practice questions' },
        ],
      },
    ],
  },

  {
    id: 13,
    heading: 'Full Stack Integration',
    subHeading: 'Connect frontend + backend like a complete product.',
    time: '2 weeks',
    modules: [
      {
        heading: 'Part 13',
        content: [
          { topic: 'Auth integration (frontend ↔ backend)' },
          { topic: 'Protected pages + role-based UI' },
          { topic: 'Pagination, filters, search' },
          { topic: 'File upload basics (optional)' },
        ],
      },
    ],
  },

  {
    id: 14,
    heading: 'AI for Developers + AI Features',
    subHeading: 'Use AI like a real developer and build AI features.',
    time: '1 week',
    modules: [
      {
        heading: 'Part 14',
        content: [
          { topic: 'Prompting for code (spec-first prompts, reusable templates)' },
          { topic: 'Debugging with AI (logs + root cause)' },
          { topic: 'Resume + code quality (clean structure, best practices)' },
          { topic: 'Build AI API (OpenAI / example prompt system)' },
          { topic: 'Store chat/history in DB + basic rate limiting' },
        ],
      },
    ],
  },

  {
    id: 15,
    heading: 'Capstone Build',
    subHeading: 'Build one complete full-stack product to show recruiters.',
    time: '2 weeks',
    modules: [
      {
        heading: 'Part 15',
        content: [
          { topic: 'CRM for small business' },
          { topic: 'Inventory + billing system' },
          { topic: 'Job portal mini' },
          { topic: 'Local services marketplace' },
        ],
      },
    ],
  },

  {
    id: 16,
    heading: 'Deployment + Placement Sprint',
    subHeading: 'Make students interview-ready + job-ready.',
    time: '1 week',
    modules: [
      {
        heading: 'Part 16',
        content: [
          { topic: 'Deploy frontend + backend' },
          { topic: 'Resume + LinkedIn + GitHub cleanup' },
          { topic: 'Mock interviews (technical + HR)' },
          { topic: 'Capstone polish + portfolio final' },
        ],
      },
    ],
  },
];


  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 items-stretch gap-10 justify-center gap-y-5">
      {UIcourseContent.map((content) => (
        <div key={content.id} className="basis-1 bg-gray-50 rounded-2xl ">
          <div className=" rounded-t-2xl bg-[#2DF8C5] p-4 flex gap-x-2 items-center justify-start">
            <div className="">Logo</div>
            <div className="">
              <div className="font-semibold text-lg">{content.heading}</div>
              <div className="font-medium text-sm">{content.time}</div>
            </div>
          </div>
          <div className="m-4 text-green-800 font-semibold text-sm">
            Part {content.id}
            <div className="relative mt-2">
              <div className="w-1/3 absolute top-0 left-0 h-1 bg-green-400 z-10"></div>
              <div className="w-full absolute top-[3px] left-0 h-px bg-gray-900 z-0"></div>
            </div>
          </div>
          <div className="p-4 text-gray-700">
            <div className="rounded-3xl text-sm bg-gray-200 px-5 py-2 ">
              {content.subHeading}
            </div>
            {content.modules.map((module, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gray-200 px-5 py-2 mt-2 "
              >
                {/* <div className="font-semibold text-lg">{module.heading}</div> */}
                <div className="font-regular text-sm">
                  <ul className="list-disc pl-5">
                    {module.content.map((topic, index) => (
                      <li key={index}> {topic.topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
