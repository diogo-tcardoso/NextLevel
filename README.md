# README - NextLevel Website

## Overview

Welcome to the repository for **NextLevel**, a company specializing in **Paid Traffic Services**. This project consists of the development of a website built using **HTML** and **CSS** to promote the company's services, showcase client success stories, and provide information about NextLevel’s offerings. The website aims to offer a clean, professional design while ensuring optimal user experience and performance.

This README will guide you through the structure of the project, installation process, and usage instructions. The goal is to make it as easy as possible for contributors and team members to understand, update, and maintain the website code.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Project Structure

The **NextLevel** website is built entirely in **HTML** and **CSS**, making it lightweight and easy to modify or extend in the future. The website is designed to be fully responsive, ensuring that users have a seamless experience whether they are browsing from a desktop, tablet, or smartphone.

### Features

- **Landing Page**: A modern and sleek homepage that highlights NextLevel’s core services.
- **Services Page**: A detailed overview of the paid traffic services offered.
- **About Page**: Information about the company's mission, vision, and team.
- **Contact Page**: A form for potential clients to get in touch, with integrated social media links.
- **Testimonial Section**: Showcasing success stories and reviews from satisfied clients.

---

## Technologies

The technologies used in this project are minimal but highly effective for creating a professional, responsive, and easy-to-maintain website.

- **HTML5**: The latest version of Hypertext Markup Language, used for structuring the content.
- **CSS3**: Cascading Style Sheets used for styling and making the website visually appealing.
  
No additional frameworks or JavaScript libraries are used to keep the website lightweight and fast-loading.

---

## Installation

### Prerequisites

Before you begin, ensure that you have the following software installed on your local machine:

- **Git**: For version control. Download from [here](https://git-scm.com/).
- **Code Editor**: We recommend using **Visual Studio Code** or any modern text editor.

### Steps

1. **Clone the Repository**:  
   Clone the NextLevel website repository using the following command:
   
   ```bash
   git clone https://github.com/diogo-tcardoso/NextLevel.git
   ```

2. **Navigate to the Project Directory**:  
   Once cloned, navigate into the project folder:
   
   ```bash
   cd NextLevel
   ```

3. **Open the Project in Your Code Editor**:  
   Open the directory in your preferred code editor (e.g., Visual Studio Code).

4. **Live Server**:  
   For ease of development, you can use a live server to view the website locally. If using Visual Studio Code, install the "Live Server" extension and click "Go Live" at the bottom of the editor to see changes in real-time.

---

## Usage

The website is structured in a way that is easy to update and maintain. Below are some guidelines for making updates:

### HTML

All the HTML files are located in the root directory. Each page (e.g., `index.html`, `services.html`, `about.html`) corresponds to a specific section of the website. Simply open the desired file in your editor and modify the content as needed.

### CSS

All custom styles are contained in the `styles.css` file located in the `css/` directory. Any changes to the website's design can be made here. If you are planning to add more pages or components, you can create new CSS classes or ID selectors as needed.

### Images

All image assets are stored in the `images/` directory. You can add or replace images in this folder, ensuring the file paths in the HTML reflect the correct image location.

### Responsive Design

The website uses media queries in the CSS to ensure it is fully responsive. If you need to adjust the website’s layout on mobile or tablet, you can modify the existing media queries or add new ones.

---

## File Structure

Here is an overview of the project's file structure:

```bash
nextlevel-website/
│
├── src/
│    └── css  
|    |  └── styles.css            # Main CSS file for styling
│    |      font-awesome.css
|    |      responsive.css
|    |      variables.css
|    |
│    └── images/
|    |   └── [various images]     # Images used in the website
|    |
│    └── webfonts
|
├── index.html                    # Homepage
│
└── README.md                     # Project documentation (this file)
```

---

## Contributing

We welcome contributions to the NextLevel website. To contribute, follow these steps:

1. **Fork the Repository**:  
   Click the "Fork" button at the top-right corner of the repository page on GitHub.

2. **Create a Feature Branch**:  
   Create a branch for your feature or bugfix:
   
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit Changes**:  
   Make your changes and commit them with a descriptive message:
   
   ```bash
   git commit -m "Add new feature: Your Feature"
   ```

4. **Push to GitHub**:  
   Push your changes to your forked repository:
   
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**:  
   On GitHub, open a pull request to the main branch of the original repository.

We will review your pull request as soon as possible and provide feedback.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---


Thank you for your interest in contributing to the NextLevel website!
