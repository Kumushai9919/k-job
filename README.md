# GJK - Guide for Jobs in Korea

## 👋 Personal Project Story

This project started as a small but meaningful initiative by two friends who've been through the challenges of job hunting in Korea as foreigners. After successfully landing jobs in the Korean market, we decided to share our experience and knowledge to help others on the same journey.

## 💡 What is GJK?

GJK (Guide for Jobs in Korea) is our contribution to the foreign community in Korea - a practical guide built from real experiences. We focus on what actually works when preparing:

- 이력서 (Korean-style Resume)
- 자기소개서 (Self-introduction Letter)
- Portfolio preparation
- Korean job market navigation

## 🎯 Why We Built This

Having experienced the confusion and challenges firsthand, we wanted to create something that we wish existed when we were job hunting. This isn't just another job portal - it's a personal guide based on what actually worked for us in the Korean job market.

## 🌟 Current Features

- Step-by-step guide for document preparation
- Bilingual support (English/Russian)
- Templates and examples
- Interactive course content
- Cultural insights and tips

## 🚀 Tech Stack

- React
- TypeScript
- Redux Toolkit
- React Router
- Axios
- Tailwind CSS
- i18next
  - i18next-browser-languagedetector
  - react-i18next
  - Language fallback support
  - Automatic language detection
- Material Tailwind
- Radix UI
- Vite
- React Hook Form
- Zod (Form validation)
- SWR (Data fetching)
- React Spring (Animations)
- Recharts (Charts)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/gjk.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```
VITE_API_URL=your_api_url
```

## 🗺️ Project Structure

```
src/
├── app/           # Main application components
├── components/    # Reusable components
├── lib/          # Utilities and configurations
├── assets/       # Static assets
└── main.tsx      # Application entry point
```

## 🔐 Authentication

The application implements a complete authentication system including:
- Login/Register
- Password reset
- Email verification 

## 🌐 Internationalization

The application implements comprehensive internationalization support using i18next:

- Multiple language support (English/Russian)
- Automatic browser language detection
- Language persistence
- Namespace separation for better organization
- Dynamic language switching
- RTL/LTR support
- Number and date formatting
- Translation fallbacks

### Translation Structure

```
src/
└── locales/
    ├── en/
    │   ├── common.json
    │   ├── auth.json
    │   └── guide.json
    └── ru/
        ├── common.json
        ├── auth.json
        └── guide.json
```

## 🖼️ Demo & Screenshots

### Live Demo
🔗 [Live Demo](https://gjk-guide.vercel.app) (Coming soon)

### Screenshots
![Homepage](/public/screenshots/home.png)
![Guide Section](/public/screenshots/guide.png)
![Resume Builder](/public/screenshots/resume.png)

## 🚀 Deployment

This project is deployed on Vercel:
- Production: [gjk-guide.vercel.app](https://gjk-guide.vercel.app)
- Development: [gjk-guide-dev.vercel.app](https://gjk-guide-dev.vercel.app)

### Deployment Status
[![Vercel Production Status](https://img.shields.io/github/deployments/yourusername/gjk/Production?label=vercel&logo=vercel)](https://gjk-guide.vercel.app)

## 👥 Contributors

Created and maintained by:
- Jay (Backend Developer in Korea)
- Alex (Frontend Developer in Korea)

We're two friends who turned our job-hunting struggles into a resource for others. While this started as a small personal project, we hope it grows to help more foreigners successfully join the Korean workforce.

## 🔜 Future Plans

- Expand language support
- Add more success stories
- Include interview preparation guides
- Build community features
- Add more resources for different industries

## 🙏 Acknowledgments

- SolutionAIX team
- All contributors
