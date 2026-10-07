# ✨ Yasmine Hatem — Personal Portfolio

A modern, premium, and responsive personal portfolio website for **Yasmine Hatem**, combining **Biomedical Engineering** with **Software Development** and **Healthcare Technology**.

The website is designed as a clean and interactive digital portfolio to present professional information, technical skills, specializations, projects, and contact links in a visually engaging way.

---

## 🌐 Project Overview

This project is a **front-end-only portfolio website** built using pure:

* HTML5
* CSS3
* JavaScript

No backend or database is currently connected.

The project is intentionally designed to work as a standalone website first, with the possibility of connecting it to a backend in the future.

---

## 🎯 Project Goals

The main goals of this portfolio are to:

* Present Yasmine Hatem's professional profile.
* Showcase Biomedical Engineering knowledge.
* Display software development skills.
* Present healthcare technology interests.
* Visualize technical skill levels.
* Showcase completed and ongoing projects.
* Provide easy access to social and professional links.
* Create a premium and modern user experience.
* Provide a strong foundation for future backend integration.

---

# ✨ Main Features

## 🏠 1. Hero Section

The landing section introduces the portfolio owner with:

* Name
* Professional title
* Short professional description
* Availability status
* Call-to-action buttons
* Social media links
* Animated code-style visual

The hero section also includes:

* Floating elements
* Gradient effects
* Orbit animations
* Hover effects
* Responsive layout

---

## 📊 2. Statistics Section

The website includes animated statistics such as:

* Number of technical skills
* Number of projects
* Healthcare areas
* Passion percentage

The numbers are animated using JavaScript counters when the section enters the viewport.

---

## 👩‍💻 3. About Me

The About section provides:

* Professional introduction
* Biomedical Engineering background
* Software development interests
* Healthcare technology interests
* Data analysis interests
* Personal skill tags

It also includes a profile card with:

* Name
* Professional title
* Location
* Academic field
* Technical interests

---

# 📈 4. Skills Section

The skills section provides two different visualizations.

### Progressive Skill Bars

Technical skills are represented using animated progress bars.

Example:

| Skill                  | Percentage |
| ---------------------- | ---------: |
| Python                 |        90% |
| HTML / CSS             |        95% |
| JavaScript             |        85% |
| React                  |        80% |
| Data Analysis          |        82% |
| Biomedical Engineering |        90% |

The bars start from `0%` and progressively animate to their target values when the user reaches the section.

### Circular Skill Charts

The website also includes circular percentage charts for:

* Biomedical Engineering
* Programming
* Analytics
* Problem Solving

These charts are animated using JavaScript and CSS.

---

# 🧬 5. Specializations

The portfolio presents different areas of interest through interactive cards.

Current specializations include:

* Biomedical Engineering
* Software Development
* Data Analysis
* Medical Imaging
* Healthcare Simulation
* Decision Support Systems

Each card contains:

* Number
* Icon
* Title
* Description
* Hover animation

---

# 💻 6. Projects

The Projects section showcases technical and engineering projects.

Current examples include:

### Healthcare Simulation & Decision-Support System

A healthcare-focused analytical platform designed to support hospital management and decision-making.

Technologies/concepts:

* Python
* Data Analysis
* Simulation

### Interactive Portfolio

A responsive personal portfolio website with interactive animations.

Technologies:

* HTML
* CSS
* JavaScript

### Medical Budget Analysis

A statistical tool for estimating medical equipment purchasing budgets.

Technologies/concepts:

* Python
* Statistics
* Data Analysis

These projects can easily be replaced or expanded as the portfolio grows.

---

# 📬 7. Contact Section

The contact section provides links to:

* Email
* LinkedIn
* GitHub
* Instagram

### Important

The current links are **placeholder links**.

They should be replaced with the real social media accounts before publishing the final version.

---

# 🎨 Design

The website uses a premium light interface with:

* Soft gradients
* Glassmorphism-inspired elements
* Rounded cards
* Subtle shadows
* Blue/purple accent colors
* Smooth transitions
* Responsive layouts
* Animated progress bars
* Circular charts
* Floating elements
* Hover interactions
* Scroll reveal animations

The design is intentionally clean and professional rather than using an overly dark or aggressive neon style.

---

# 🛠️ Technologies Used

## HTML5

HTML is used to create the website structure and semantic sections.

Main sections include:

```text
Home
About
Skills
Specializations
Projects
Contact
Footer
```

---

## CSS3

CSS is responsible for:

* Layout
* Responsive design
* Colors
* Gradients
* Shadows
* Animations
* Progress bars
* Circular charts
* Hover effects
* Mobile navigation
* Responsive breakpoints

No CSS framework is required.

---

## JavaScript

JavaScript is used for interactive functionality including:

* Mobile navigation
* Active navigation links
* Scroll reveal animations
* Animated counters
* Progressive skill bars
* Circular skill animations
* Back-to-top button
* Navbar behavior
* Mouse parallax
* Project card tilt effects
* Smooth scrolling

---

# 📁 Project Structure

The project currently contains three main files:

```text
yasmine-portfolio/
│
├── index.html
├── style.css
└── script.js
```

### `index.html`

Contains the complete structure and content of the portfolio.

It includes:

* Navigation
* Hero section
* Statistics
* About section
* Skills
* Specializations
* Projects
* Contact
* Footer

---

### `style.css`

Contains all visual styling and animations.

It controls:

* Colors
* Typography
* Layout
* Cards
* Buttons
* Progress bars
* Circular charts
* Responsive behavior
* Animations
* Hover effects

---

### `script.js`

Contains all interactive behavior.

It controls:

* Navigation
* Scroll effects
* Counters
* Skill animations
* Circular charts
* Mouse interactions
* Back-to-top functionality

---

# 🚀 How to Run the Project

## Method 1 — Open Directly

The easiest method is to download or clone the project and open:

```text
index.html
```

directly in a browser.

No server is required for the current version.

---

# 📥 Installation

## 1. Clone the Repository

Open a terminal and run:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

Replace the repository URL with the actual GitHub repository.

---

## 2. Enter the Project Folder

```bash
cd YOUR-REPOSITORY
```

---

## 3. Open the Website

Open:

```text
index.html
```

in your browser.

---

# 🧑‍💻 Running with VS Code

For development, it is recommended to use **Visual Studio Code**.

### Steps

1. Open Visual Studio Code.
2. Select **File → Open Folder**.
3. Select the project folder.
4. Open `index.html`.
5. Install the **Live Server** extension if desired.
6. Right-click `index.html`.
7. Select **Open with Live Server**.

The website will then open in your browser.

---

# 🔗 Updating Social Links

The current project contains placeholder links.

For example:

```html
<a href="https://github.com/example-yasmine">
```

Replace the placeholder URL with the real GitHub profile:

```html
<a href="https://github.com/YOUR-USERNAME">
```

The same applies to:

* LinkedIn
* Instagram
* Email

---

# 📊 Updating Skill Percentages

Skill percentages are controlled in `index.html`.

Example:

```html
<div
    class="progress-bar"
    data-progress="90"
></div>
```

To change the percentage:

```html
data-progress="90"
```

can be changed to:

```html
data-progress="95"
```

The JavaScript automatically animates the bar to the new value.

---

# 🎯 Updating Circular Skills

Circular skill charts use:

```html
<div
    class="circle"
    data-percent="90"
>
```

To change the percentage, simply modify:

```html
data-percent="90"
```

For example:

```html
data-percent="85"
```

The JavaScript automatically calculates the corresponding circular progress.

---

# ➕ Adding a New Project

To add a new project, duplicate an existing project card inside:

```html
<div class="projects-grid">
```

Then update:

* Project category
* Project title
* Description
* Technologies
* Project visual

Example technology tags:

```html
<div class="project-tech">
    <span>Python</span>
    <span>React</span>
    <span>Machine Learning</span>
</div>
```

---

# 📱 Responsive Design

The website is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

Responsive behavior includes:

* Mobile navigation menu
* Stacked sections
* Responsive cards
* Flexible grids
* Mobile-friendly buttons
* Responsive typography
* Mobile project layouts

---

# ⚡ Performance

The website is lightweight because it does not currently use:

* React
* Angular
* Vue
* Bootstrap
* Tailwind
* Backend frameworks
* Databases

The core website is built using only:

```text
HTML
CSS
JavaScript
```

This makes it easy to deploy as a static website.

---

# 🔐 Current Architecture

The current architecture is intentionally simple:

```text
                    ┌──────────────────┐
                    │     Browser      │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │    index.html    │
                    │   Website HTML   │
                    └────────┬─────────┘
                             │
                ┌────────────┴────────────┐
                ▼                         ▼
        ┌──────────────┐          ┌──────────────┐
        │  style.css   │          │  script.js   │
        │    Design    │          │ Interactions │
        └──────────────┘          └──────────────┘
```

There is currently no backend.

---

# 🔮 Future Improvements

The portfolio can later be expanded with a backend system.

Possible future features include:

### Backend Integration

* User authentication
* Admin dashboard
* Database
* Dynamic projects
* Dynamic skills
* Dynamic social links
* Contact form
* Messages management

### Portfolio Management

Instead of editing HTML manually, the backend could allow the owner to:

```text
Add Project
Edit Project
Delete Project

Add Skill
Edit Skill
Delete Skill

Update About Information

Update Social Links
```

### Contact System

A future backend could provide:

```text
Visitor
   │
   ▼
Contact Form
   │
   ▼
Backend API
   │
   ▼
Database
   │
   ▼
Admin Dashboard
```

---

# 🌐 Possible Deployment

Because the current project is a static website, it can be deployed using services such as:

* GitHub Pages
* Vercel
* Netlify

A backend can be connected later when the project architecture is expanded.

---

# 🧪 Testing

The current version is primarily a front-end static website.

Before deployment, it is recommended to test:

* Navigation
* Mobile menu
* Responsive layouts
* Social links
* Email link
* Progress animations
* Circular skill animations
* Project cards
* Different browsers
* Mobile devices

---

# 📝 Customization Checklist

Before publishing the final portfolio, update:

* [ ] Real GitHub URL
* [ ] Real LinkedIn URL
* [ ] Real Instagram URL
* [ ] Real email
* [ ] Actual project information
* [ ] Actual project links
* [ ] Final skill percentages
* [ ] Profile image if desired
* [ ] Resume/CV link
* [ ] Final professional description

---

# 👩‍💻 Author

## Yasmine Hatem

**Biomedical Engineering Student | Software Developer | Healthcare Technology Enthusiast**

Interested in combining engineering, programming, data analysis and healthcare technologies to develop practical solutions for modern healthcare.

---

# 📄 License

This project is a personal portfolio website created for **Yasmine Hatem**.

The source code can be used as a reference for learning and personal projects.

---

## ⭐ Future Vision

The goal is to evolve this portfolio from a static front-end website into a complete personal portfolio platform with:

```text
Frontend
   │
   ▼
Backend API
   │
   ▼
Database
   │
   ├── Projects
   ├── Skills
   ├── Experience
   ├── Social Links
   └── Contact Messages
```

The current version provides the visual foundation for that future system.

---

**Built with ❤️, engineering, and code by Yasmine Hatem.**
