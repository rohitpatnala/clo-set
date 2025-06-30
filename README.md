# CLO-SET Connect Store

> A modern, responsive content marketplace to browse, filter, and sort digital assets.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)](https://clo-set-kg9t.vercel.app/) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](#license)

---

## Table of Contents

- [Purpose](#purpose)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Live Demo](#live-demo)
- [Contributing](#contributing)
- [License](#license)

---

## Purpose

This project was developed as part of an assessment for **CLO-SET Connect**.  
It showcases a front-end application that fetches a catalog of items, lets users:

- 🔍 Search by title or creator
- ⚖️ Filter by pricing options (Paid / Free / View-Only) and price range
- 📊 Sort alphabetically or by price (low ↔ high)
- 🔄 Infinite scroll with loading spinner
- 🌙 Dark theme and polished UI interactions

---

## Features

- **Dynamic Filtering**
  - Toggle paid, free, and view-only items
  - Dual-thumb price-range slider
- **Search & Sort**
  - Debounced keyword search
  - Sort dropdown: Name, Highest Price, Lowest Price
- **Infinite Scrolling**
  - Auto-load more content as you scroll
- **Responsive Design**
  - 1–4 column grid on different breakpoints
- **Dark Theme**
  - Global CSS variables and modern UI touches (hover shines, glows)

---

## Tech Stack

- **Framework:** React + Vite
- **State:** Redux Toolkit
- **Data Fetching:** Axios
- **Styling:** Plain CSS (no Tailwind) with CSS variables
- **Deployment:** Vercel

---

## Getting Started

### Prerequisites

- Node.js (v16+) & npm
- Git

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
   npm run **dev**

   ```

### Usage

- Use the search bar to find items by title or creator.

- Toggle pricing checkboxes or adjust the price slider to refine your results.

- Open the Sort by dropdown to reorder items.

- Scroll down to trigger infinite loading.

### Live Demo

👉 Check out the live version on Vercel: [https://clo-set-kg9t.vercel.app/]
