# Profile Card React App

A React application that displays user profile cards with dynamically generated data.

## Features

- **ProfileCard Component**: Displays user information in a card format
- **ProfileParagraph Component**: Reusable component for displaying individual profile fields
- **Dynamic Data Generation**: Automatically generates random user data before starting the app
- **Responsive Design**: Clean and modern UI

## Project Structure

```
├── data/
│   ├── names.txt                  # Library of names for data generation
│   └── module-data-generator.cjs  # Script to generate random user data
├── src/
│   ├── components/
│   │   ├── ProfileCard.jsx       # Main profile card component
│   │   └── ProfileParagraph.jsx  # Individual profile field component
│   ├── App.jsx                   # Main app component
│   └── module-data.js            # Generated user data (auto-created)
└── package.json
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lab01
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will automatically generate random user data and start the development server.

## Available Scripts

- `npm run dev` - Generates data and starts development server
- `npm run generate-data` - Only generates random user data (10 people)
- `npm run build` - Generates data and builds for production
- `npm run preview` - Preview the production build

## Data Generation

The app uses a Node.js script to generate random user profiles with:
- Random names from a predefined list
- Random birth dates (1980-2005)
- Generated email addresses based on names
- Random phone numbers
- Unique IDs

## Technologies Used

- React 19
- Vite
- Node.js (for data generation)
- CSS3

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
