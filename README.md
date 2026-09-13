# Dev Stack Builder

Dev Stack Builder is an interactive web application designed to help developers explore, select, and build their ideal technology stack for modern software development.

## Technologies Used

- Frontend: React (TypeScript), Vite
- Styling: Tailwind CSS
- Notifications: React Toastify
- Deployment: Netlify

## Key Features

- Interactive Stack Builder: Add or remove technologies dynamically to construct your ideal tech stack in real-time.
- Skeleton Loading Animation: Displays smooth UI skeletons while tech data is fetched, ensuring a polished loading experience.
- Responsive UI & Sticky Sidebar: Fully responsive layout featuring a dynamic sidebar counter and toast feedback on actions.

## React Q&A

i. What is JSX, and why is it used in React?
Answer: JSX (JavaScript XML) is a syntax extension that lets us write HTML-like code inside JavaScript. It makes React components visually clear, intuitive to write, and easy to read.

ii. What is the difference between props and state?
Answer: 
- Props: Data passed from a parent component down to a child component (read-only/immutable).
- State: Local data maintained internally within a component that can change over time and trigger re-renders.

iii. What does the useState hook do, and where did you use it in this project?
Answer: useState creates reactive local variables that hold data across renders. In this project, it was used to manage fetched technologies (technologies), user-selected stacks (selectedStack), and loading indicators (loading).

iv. What does the useEffect hook do, and why did you need it to load the JSON data?
Answer: useEffect performs side-effects in functional components. It was used to fetch technology data from ./technologies.json once when the component initially mounts.

v. Why does every item in a .map() list need a unique key prop?
Answer: The key prop helps React track and identify which items changed, were added, or were removed. This optimizes DOM updates and prevents re-rendering performance bugs.

vi. What is conditional rendering? Show one place you used it.
Answer: Conditional rendering displays different UI elements based on specific logical conditions. In this project, it was used to render the skeleton loader when loading is true, and the actual technology list when loading is false.

vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Answer: 
- Parent to Child: Passed directly via Props.
- Child to Parent: Passed by executing a callback function provided by the parent as a prop when an event occurs in the child..
