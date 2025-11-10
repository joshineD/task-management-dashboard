const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Design Homepage",
        taskDescription: "Create wireframes for the new homepage layout.",
        taskDate: "2025-09-08",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve the login issue reported by QA team.",
        taskDate: "2025-09-09",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Team Meeting",
        taskDescription: "Weekly sync with the design team.",
        taskDate: "2025-09-10",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskNumbers: { active: 2, newTask: 1, completed: 1, failed: 0 },
  },
  {
    id: 2,
    firstName: "Isha",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Write Blog Post",
        taskDescription: "Draft a blog post on new feature release.",
        taskDate: "2025-09-11",
        category: "Content",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "SEO Optimization",
        taskDescription: "Update meta tags for better SEO ranking.",
        taskDate: "2025-09-12",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Customer Feedback Review",
        taskDescription: "Analyze recent feedback and create report.",
        taskDate: "2025-09-13",
        category: "Analysis",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        taskTitle: "Code Review",
        taskDescription: "Review PRs for the new authentication module.",
        taskDate: "2025-09-14",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: { active: 2, newTask: 1, completed: 1, failed: 1 },
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Create Test Cases",
        taskDescription: "Write unit tests for the payment service.",
        taskDate: "2025-09-08",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Bug Report",
        taskDescription: "Document UI issues from sprint testing.",
        taskDate: "2025-09-09",
        category: "QA",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Update Dependencies",
        taskDescription: "Upgrade outdated npm packages.",
        taskDate: "2025-09-15",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: { active: 2, newTask: 1, completed: 1, failed: 0 },
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "UI Redesign",
        taskDescription: "Improve dashboard UI with Tailwind.",
        taskDate: "2025-09-10",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Performance Testing",
        taskDescription: "Run load tests on backend services.",
        taskDate: "2025-09-11",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        taskTitle: "Prepare Presentation",
        taskDescription: "Slides for upcoming client demo.",
        taskDate: "2025-09-12",
        category: "Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskNumbers: { active: 1, newTask: 1, completed: 1, failed: 1 },
  },
  {
    id: 5,
    firstName: "Kabir",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Database Migration",
        taskDescription: "Migrate users table to new schema.",
        taskDate: "2025-09-09",
        category: "Database",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "API Documentation",
        taskDescription: "Update Swagger docs for new endpoints.",
        taskDate: "2025-09-10",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Deploy to Staging",
        taskDescription: "Deploy latest build for testing team.",
        taskDate: "2025-09-11",
        category: "DevOps",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Fix Email Service",
        taskDescription: "Resolve email notification failure bug.",
        taskDate: "2025-09-12",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskNumbers: { active: 2, newTask: 1, completed: 1, failed: 1 },
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage =()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage =()=>{
  const employees= JSON.parse(localStorage.getItem('employees'))
  const admin= JSON.parse(localStorage.getItem('admin'))

  return{employees,admin}

  

}