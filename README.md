# Image Gallery

A simple, responsive image gallery built with React. It displays a collection of image cards with titles and descriptions, and adds a subtle lift effect when a card is hovered.

## Features

- Gallery of image cards with titles and descriptions
- Responsive layout that adapts to smaller and larger screens
- Hover effect on gallery cards

## Built with

- React
- Vite
- CSS

## Getting started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm.

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```text
src/
├── assets/
│   └── image/          # Gallery images
├── components/
│   ├── Imagecard.jsx   # Individual gallery card
│   └── Images.jsx      # Gallery data and card list
├── App.jsx
├── App.css
└── main.jsx
```
