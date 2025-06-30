# CLO-SET Connect Store

> A modern, responsive content marketplace to browse, filter, and sort digital assets.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)](https://clo-set-kg9t.vercel.app/) [![Tests](https://img.shields.io/badge/Tests-Vitest-007ACC)](#testing) [![Coverage](https://img.shields.io/badge/Coverage-⚡️%2098%25-blue)](#testing) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](#license)

---

## Table of Contents

- [Purpose](#purpose)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Live Demo](#live-demo)
- [Contributing](#contributing)
- [License](#license)

---

## Purpose

This project was developed as part of an assessment for **CLO-SET Connect**.  
It demonstrates a front-end application that fetches a catalog of items, lets users:

- 🔍 Search by title or creator
- ⚖️ Filter by pricing options (Paid / Free / View-Only) and price range
- 📊 Sort alphabetically or by price (low ↔ high)
- 🔄 Infinite scroll with loading spinner
- 🌙 Dark theme, polished UI interactions & hover animations

---

## Features

- **Dynamic Filtering**
  - Toggle Paid, Free, and View-Only
  - Dual-thumb price-range slider
- **Search & Sort**
  - Debounced keyword search
  - Sort dropdown: Name, Highest Price, Lowest Price
- **Infinite Scrolling**
  - Auto-load more content as you scroll
- **Responsive Design**
  - 1–4 column grid on different breakpoints
- **Dark Theme & Animations**
  - CSS variables, hover shines, glows, and card lifts

---

## Tech Stack

- **Framework:** React + Vite
- **State:** Redux Toolkit
- **Data Fetching:** Axios
- **Styling:** Plain CSS with CSS variables
- **Testing:** Vitest, React Testing Library
- **Deployment:** Vercel

---

## Getting Started

### Prerequisites

- Node.js (v16+) & npm
- Git

### Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/rohitpatnala/clo-set.git
   cd clo-set
   ```

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/rohitpatnala/clo-set.git
   cd clo-set

   ```

2. **Install Dependencies**

   ```bash
   npm install

   ```

3. **Run the development server**

   ```bash
   npm run dev

   ```

   Visit http://localhost:5173.

### Usage

- Use the search bar to find items by title or creator.

- Toggle pricing checkboxes or adjust the price slider to refine your results.

- Open the Sort by dropdown to reorder items.

- Scroll down to trigger infinite loading.

### Testing

Using Vitest + React Testing Library for unit and component tests.

- Running tests in watch mode:

  ```bash
   npm run test

  ```

- Running a coverage report:

  ```bash
   npm run coverage

  ```

### Live Demo

👉 Check out the live version on Vercel: https://clo-set-kg9t.vercel.app/
