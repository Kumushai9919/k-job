# 💼 Global K-Job - Guide for Jobs in Korea 

**KJob is a comprehensive guide web platform for foreigners to secure jobs in South Korea.**

Launched in July 2024 when I first thought, “Why don’t we share our experience?” I invited my friend [@Alisherka7](https://github.com/Alisherka7) to join, and together we distilled our insights from global job fairs in Korea and university 취업클래스 lessons on Korean resumes, cover letters, and document prep into a simple roadmap platform for international applicants.

**KJob은 외국인이 한국에서 취업을 준비하고 성공적으로 정착할 수 있도록 돕는 종합 가이드 웹 플랫폼입니다.**

2024년 7월 “왜 우리의 경험을 공유하지 않을까?”라는 생각에 친구를 초대해 시작했으며, 글로벌 KOTRA 채용박람회 경험과 대학 취업클래스에서 배운 이력서·자기소개서 등 서류 준비 노하우를 국제 지원자를 위한 영어 및 러시아어로 간단한 로드맵 플랫폼으로 정리했습니다.


## 👥 Contributors
- **Frontend & Content Creation**: [Kumushai9919] (https://github.com/Kumushai9919)
  - UI/UX Design
  - Guide Content Development
  - Internationalization
  - User Experience
  
- **Backend Development**: [Alisherka7](https://github.com/Alisherka7)
  - API Development
  - Authentication System
  - Database Management
  - Server Infrastructure

## 💡 What is Global K-Job?

K-Job (Global Guide for Jobs in Korea) is our contribution to the foreign community in Korea - a practical guide built from real experiences. We focus on what actually works when preparing:

- 이력서 (Korean-style Resume)
- 자기소개서 (Self-introduction Letter)
- Portfolio preparation
- Korean job market navigation

<div align="center">
  <img src="https://github.com/user-attachments/assets/3d9cae32-b0e5-4d47-aa7b-91eaf6bc25eb" alt="User Review 1" width="320"/>
  <br/><br/>
  <img src="https://github.com/user-attachments/assets/7d63f596-9ec7-4046-8837-0610d4506ec6" alt="User Review 2" width="320"/> 
</div>

## 🎯 Why We Built This

Having experienced the confusion and challenges firsthand, we wanted to create something that we wish existed when we were job hunting. This isn't just another job portal - it's a personal guide based on what actually worked for us in the Korean job market.


<table align="center">
  <tr>
    <td align="center">
      <img
        src="https://github.com/user-attachments/assets/c8de32c5-543c-402f-8fb0-469672658c9a"
        alt="Screenshot 1"
        width="250"
      />
    </td>
    <td align="center">
      <img
        src="https://github.com/user-attachments/assets/209c8d94-caa9-46b6-ba8f-5e890670acfc"
        alt="Screenshot 2"
        width="250"
      />
    </td>
    <td align="center">
      <img
        src="https://github.com/user-attachments/assets/0c66fdd6-9d9b-41aa-a63b-c7a7e38d01c3"
        alt="Demo GIF"
        width="250"
      />
    </td>
  </tr>
</table>

### 💬 Real User Reviews
Our guide has helped many foreigners successfully navigate the Korean job market. Here are some testimonials from our community:


<div align="center">
  <img src="https://github.com/user-attachments/assets/bc3c10c7-6dfe-4651-a5ea-df9aa6b19969" alt="User Review 3" width="250"/>
  <img src="https://github.com/user-attachments/assets/c406f90c-6b89-47e0-975f-42f6b63352ac" alt="User Review 2" width="250"/>
  <img src="https://github.com/user-attachments/assets/b8c37e3b-4a23-4cf8-9fe1-65344ad54c61" alt="User Review 3" width="250"/>
</div>

> These testimonials were shared by our users on Instagram, showing real results from using our guide.

Our community members have achieved:
- Successfully participated in Korean job fairs
- Received multiple interview invitations
- Secured positions in Korean companies
- Properly formatted resumes and cover letters in Korean style


### 🚀 Live Demo

This project is deployed on Vercel.  
🔗 [Live Demo](https://k-job.vercel.app/) — *Client UI is still accessible, but the server is temporarily offline due to maintenance; coming back soon!*


## 🌟 Main Features

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
- Vite
- React Hook Form
- Zod (Form validation) 
- Lottie Animation
- Recharts (Charts)


## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/k-job.git

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

#### Translation Structure

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
  
## 🔜 Future Plans

- Expand language support 
- Build community features
- Add more resources for different industries
 