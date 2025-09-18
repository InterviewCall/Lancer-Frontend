export default function UICourseSection() {
  const UIcourseContent = [
    {
      id: 1,
      heading: 'Get to Know UI/UX',
      time: '1 week',
      subHeading: 'Learn the fundamentals of UI/UX design and its importance.',
      modules: [
        {
          heading: 'Introduction to Design',
          content: [
            { topic: 'Understand the difference between UI and UX.' },
            { topic: 'Why UI/UX matters in digital products.' },
            { topic: 'The evolution of design practices.' },
          ],
        },
        {
          heading: 'The Role of a Designer',
          content: [
            { topic: 'Responsibilities of UI vs UX designers.' },
            { topic: 'Collaboration with developers and product managers.' },
            { topic: 'Essential skills every designer should have.' },
          ],
        },
        {
          heading: 'Design Thinking Basics',
          content: [
            { topic: 'Overview of the design thinking process.' },
            { topic: 'Empathize, Define, Ideate, Prototype, Test.' },
            { topic: 'Real-world applications of design thinking.' },
          ],
        },
      ],
    },
    {
      id: 2,
      heading: 'User Research & Analysis',
      time: '1 week',
      subHeading: 'Discover how to understand users and their needs.',
      modules: [
        {
          heading: 'User Personas',
          content: [
            { topic: 'Defining target user groups.' },
            { topic: 'Building fictional characters to represent users.' },
            { topic: 'Using personas to guide design decisions.' },
          ],
        },
        {
          heading: 'User Journey Mapping',
          content: [
            { topic: 'Steps users take to achieve goals.' },
            { topic: 'Identifying pain points and opportunities.' },
            { topic: 'Improving user flows through mapping.' },
          ],
        },
        {
          heading: 'Research Methods',
          content: [
            { topic: 'Conducting user interviews and focus groups.' },
            { topic: 'Designing surveys for quantitative feedback.' },
            { topic: 'Running usability testing sessions.' },
          ],
        },
      ],
    },
    {
      id: 3,
      heading: 'Wireframing & Prototyping',
      time: '1 week',
      subHeading: 'Turn ideas into visual structures and interactive flows.',
      modules: [
        {
          heading: 'Low-Fidelity Wireframes',
          content: [
            { topic: 'Sketching basic layouts and structures.' },
            { topic: 'Using pen and paper for fast iteration.' },
            { topic: 'Focusing on functionality over visuals.' },
          ],
        },
        {
          heading: 'High-Fidelity Mockups',
          content: [
            { topic: 'Adding colors, typography, and spacing.' },
            { topic: 'Working with design systems and components.' },
            { topic: 'Making designs developer-ready.' },
          ],
        },
        {
          heading: 'Prototyping Tools',
          content: [
            { topic: 'Creating interactive prototypes in Figma.' },
            { topic: 'Using Adobe XD for collaboration.' },
            { topic: 'Building advanced prototypes with Sketch and InVision.' },
          ],
        },
      ],
    },
    {
      id: 4,
      heading: 'Visual Design Principles',
      time: '1 week',
      subHeading: 'Understand aesthetics, colors, and typography for UI.',
      modules: [
        {
          heading: 'Color Theory',
          content: [
            { topic: 'Understanding color psychology in design.' },
            { topic: 'Applying contrast for readability.' },
            { topic: 'Building accessible color palettes.' },
          ],
        },
        {
          heading: 'Typography',
          content: [
            { topic: 'Choosing fonts for readability and style.' },
            { topic: 'Establishing hierarchy with font sizes.' },
            { topic: 'Best practices for web and mobile typography.' },
          ],
        },
        {
          heading: 'Layouts & Grids',
          content: [
            { topic: 'Using grids for structured design.' },
            { topic: 'Applying spacing and alignment principles.' },
            { topic: 'Maintaining balance with white space.' },
          ],
        },
      ],
    },
    {
      id: 5,
      heading: 'Interaction Design & Usability',
      time: '1 week',
      subHeading: 'Design experiences that are intuitive and user-friendly.',
      modules: [
        {
          heading: 'Microinteractions',
          content: [
            { topic: 'Adding subtle animations to enhance UX.' },
            { topic: 'Feedback loops like hover states and clicks.' },
            { topic: 'Improving user delight with small details.' },
          ],
        },
        {
          heading: 'Accessibility Basics',
          content: [
            { topic: 'Designing for screen readers and assistive tech.' },
            { topic: 'Ensuring proper color contrast.' },
            { topic: 'Keyboard-friendly navigation.' },
          ],
        },
        {
          heading: 'Usability Testing',
          content: [
            { topic: 'Planning and setting up usability tests.' },
            { topic: 'Analyzing user behavior and struggles.' },
            { topic: 'Iterating designs based on feedback.' },
          ],
        },
      ],
    },
    {
      id: 6,
      heading: 'UI/UX Project & Portfolio',
      time: '1 week',
      subHeading: 'Apply everything learned to create a real-world project.',
      modules: [
        {
          heading: 'Capstone Project',
          content: [
            { topic: 'Work on a real product case study.' },
            { topic: 'Apply all stages from research to prototype.' },
            { topic: 'Present findings and solutions.' },
          ],
        },
        {
          heading: 'Portfolio Building',
          content: [
            { topic: 'Showcasing your best design projects.' },
            { topic: 'Documenting your design process step by step.' },
            { topic: 'Creating a visually appealing online portfolio.' },
          ],
        },
        {
          heading: 'Career in UI/UX',
          content: [
            { topic: 'Preparing for design job interviews.' },
            { topic: 'Networking with other designers.' },
            {
              topic:
                'Building an online presence on Behance, Dribbble, LinkedIn.',
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 items-start gap-5 justify-center">
      {UIcourseContent.map((content) => (
        <div key={content.id} className="basis-1 bg-gray-50 rounded-2xl ">
          <div className=" rounded-t-2xl bg-[#2DF8C5] p-4 flex gap-x-2 items-center justify-start">
            <div className="">Logo</div>
            <div className="">
              <div className="font-semibold text-lg">{content.heading}</div>
              <div className="font-medium text-sm">{content.time}</div>
            </div>
          </div>
          <div className="p-4">
            <div className="rounded-3xl text-lg bg-gray-200 px-5 py-2 font-semibold">
              {content.subHeading}
            </div>
            {content.modules.map((module, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gray-200 px-5 py-2 mt-2 "
              >
                <div className="font-semibold text-lg">{module.heading}</div>
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
          <div></div>
        </div>
      ))}
    </div>
  );
}
