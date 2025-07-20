# LogBuddy - Real fires, delivered to you.

A modern, responsive landing page for "LogBuddy," a fictional on-demand service for building the perfect fireplace fire. This project was built to showcase modern front-end development skills using React and Tailwind CSS.

[View Live Demo](https://sandivd.github.io/logbuddy/)

## ✨ Features

-   **Fully Responsive Design:** Adapts seamlessly to all screen sizes, from mobile to desktop.
-   **Interactive UI Elements:** Features a booking modal, a collapsible FAQ section, and hover effects on all interactive elements.
-   **Dark Mode Toggle:** A sleek theme switcher with a sun/moon icon for enhanced user comfort, positioned in the top-right corner.
-   **Component-Based Architecture:** Built with reusable React components for maintainability and scalability.
-   **Utility-First Styling:** Styled entirely with Tailwind CSS for rapid and consistent UI development.
-   **Modern Aesthetics:** Clean and professional design with high-quality imagery from Unsplash and a consistent icon set from Lucide React.


## 🤖 Development Approach: Vibe Coding

This project was developed using a method known as **Vibe Coding**. Instead of manually writing every line of React and Tailwind CSS, the development process involved giving high-level instructions and refinement prompts to an AI assistant, which then generated the code.

> Vibe coding is a modern approach to software development where you use natural language—either spoken or typed—to describe what you want a program to do, and then an AI (usually a large language model, or LLM) generates the actual code for you. Instead of manually writing every line of code, you give the AI high-level instructions or prompts, and it handles the technical implementation.

This approach allowed for rapid prototyping and iteration, focusing on the overall structure and functionality of the application.

## 🛠️ Tech Stack

-   **React:** A JavaScript library for building user interfaces.
-   **TypeScript:** Adds static typing to JavaScript to improve code quality and developer experience.
-   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
-   **Lucide React:** A beautiful and consistent icon library.
-   **Create React App:** Used as the initial project boilerplate.
-   **Craco:** Used to override the default Create React App configuration to enable Tailwind CSS.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/en/) (which includes npm) installed on your computer.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repository-name.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd your-repository-name
    ```

3.  **Install the dependencies:**
    This single command will install React, Tailwind CSS, Lucide React, Craco, and all other necessary packages defined in `package.json`.
    ```sh
    npm install
    ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will automatically reload when you make changes.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.



## 🧑‍💻 My Contributions

I designed the overall app structure, iteratively prompted the AI assistant for code generation, and manually refined the UI and logic for search, filtering, and the favorites system. I also debugged several rendering issues and customized the Tailwind CSS configuration to better fit the project’s design goals.

## 🧩 Challenges Faced

-   **Framework Mismatch:** The initial code included Next.js components (`<Head>`, `NextPage`) within a Create React App environment, causing compilation errors. This was resolved by removing the Next.js-specific code and adapting it to a standard React implementation.
-   **CSS Positioning and Overflow:** A "Most Popular" badge was being clipped by its parent card. This was fixed by restructuring the JSX to separate the absolutely positioned badge from the parent element that had an `overflow-hidden` class.
-   **Image Cropping and Alignment:** Profile pictures in the "Meet the Team" section were not centered correctly. The issue was solved by applying the `object-top` Tailwind class to adjust the `object-position` of the images, ensuring the subjects were perfectly framed.

## 📚 What I Learned

-   **Framework-Specific APIs:** Gained a deeper understanding of the differences between Create React App and Next.js, particularly regarding document head management and build-time dependencies.
-   **Advanced CSS with Tailwind:** Mastered complex CSS concepts like stacking contexts (`z-index`), overflow, and object positioning (`object-cover`, `object-top`) using Tailwind's utility classes.
-   **React State and Effect Hooks:** Implemented robust state management for UI interactivity (modals, FAQs) and global state (theme switching) using `useState` and `useEffect`. The theme toggle specifically reinforced how to manipulate the DOM (adding/removing classes on the `<html>` element) in response to state changes.

## 🚧 Future Improvements

If I had more time, I would:

-   **Persist Theme:** Use `localStorage` to remember the user's theme choice between visits.
-   **Animations & Transitions:** Add subtle animations on scroll (e.g., fade-in sections) to enhance the user experience.
-   **Functional Booking:** Integrate a calendar/booking library to make the "Book Your Fire" call-to-action functional.
-   **Code Refactoring:** Break down the single large `.tsx` file into smaller, more focused component files for better organization and maintainability.
