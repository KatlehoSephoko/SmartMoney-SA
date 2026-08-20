# SmartMoney-SA 🇿🇦
**Making Smart Money Moves.**

SmartMoney-SA is a behavioral personal finance platform designed to help South Africans build better financial habits through **financial education, gamification, budgeting, saving, rewards, and informed decision-making.**

### A Note from the Founder
> *"I built this platform because I realized I had a problem: I didn't know how to budget. Even when I had money coming in, I would get to the end of the month, look at my balance, and ask myself, 'What happened?' The truth was, I was spending it on things I didn't really need.*
>
> *When you look at traditional banks, they promise to help you make 'smart choices.' But in reality, they mostly just help you invest your money so it grows for them. They don't teach you the foundational skills of how to budget your money day-to-day, or how to stop impulsive spending.* 
>
> *I wanted something different. I wanted a tool that actually guides you on how to manage your money wisely, and more importantly, **rewards you** for making good financial choices. Think about a child: when you reward them for doing well in their studies, it pushes them to keep that consistency. It motivates them to not just hit their target, but to go above and beyond. Human psychology is exactly the same when it comes to personal finance. If you get tangible rewards for making smart money choices, it pushes you to want to do more—to want to bank better. And let's be honest, this is South Africa; we all know the value of a good reward.*
>
> *While this idea started as a way to help students and young professionals like myself navigate their first paychecks, I quickly realized that financial illiteracy doesn't have an age limit. Older generations and established professionals struggle with this exact same thing. SmartMoney-SA is built to bridge that gap and change financial habits for absolutely everyone."*  
>
> **— Katleho Sephoko**

---

## 🚀 The Mission

SmartMoney-SA is a behavioral personal finance platform designed to treat the *cause* of financial stress (a lack of budgeting skills) rather than just the *symptoms*. By gamifying the saving process, users are actively rewarded with real-world value for demonstrating financial discipline.

## ✨ Core Features

*   **Gamified Savings Portfolios:** Users earn points for consistently depositing money and hitting target multipliers, but face point-deduction penalties for early withdrawals. This actively discourages impulsive spending and reinforces the habit of saving.
*   **Corporate Partner Rewards:** A built-in marketplace where users trade their earned discipline points for real-world lifestyle and retail vouchers, including partnerships with airlines like **FlySafair** and **SAA**, as well as major retailers. 
*   **Independent SA Bank Simulator:** A bias-free, market-aggregator calculator. Users can select from 9 major South African retail banks and specific account types to instantly calculate their projected returns based on approximate benchmark interest rates.
*   **JSE Retail Stock Ticker:** A live-scrolling marquee featuring affordable, highly recognizable South African consumer brands (like Pepkor, Shoprite, and Pick n Pay). This demystifies the stock market and proves that investing is accessible to everyone.
*   **Gig-Economy Tracker:** A dedicated pending-invoice ledger designed to help freelancers, side-hustlers, and independent contractors track expected income before it clears into their available balance.

---

## ♿ Enterprise-Grade Accessibility

Financial literacy should be accessible to absolutely everyone. SmartMoney-SA is fully equipped with a native accessibility toolkit designed for inclusive user experiences:

*   **Haptic Feedback Engine:** Translates financial actions into physical touch. Provides single-tap confirmations, double-pulse celebrations for reaching goals, and rapid-stutter warnings for errors—a crucial feature for deaf or hard-of-hearing users.
*   **Native Text-to-Speech:** A built-in screen-reader assistant that verbally summarizes the user's available balance, reward points, and specific portfolio progress.
*   **Dyslexia & Low-Vision UI:** Dynamic CSS variables allow users to toggle a high-readability Dyslexia-friendly font and scale the entire application's text up to 135% without breaking the responsive layout.

---

## 🛠️ Tech Stack

This application is built with a lightweight, high-performance architecture to ensure it runs seamlessly across all devices, including budget smartphones.

*   **Frontend:** HTML5, Custom CSS3, Vanilla JavaScript (ES6+)
*   **Build Tool:** Vite
*   **State Management / Storage:** Web Storage API (LocalStorage)
*   **APIs & Native Web Integrations:**
    *   **QR Server API:** Real-time generation of secure voucher QR codes.
    *   **Web Speech API:** Native text-to-speech rendering for screen-reading.
    *   **Web Vibrate API:** Native hardware communication for haptic feedback.
    *   **EmailJS:** Integrated hook for scalable, serverless SMTP email delivery.
*   **Deployment:** Vercel

---

## 💻 Local Development

SmartMoney-SA is built using a lightning-fast Vite + Vanilla JavaScript architecture for maximum performance, rapid load times, and zero dependency bloat.

### Quick Start

1. **Clone the repository** to your local machine:
   ```bash
   git clone [https://github.com/KatlehoSephoko/SmartMoney-SA.git](https://github.com/KatlehoSephoko/SmartMoney-SA.git)
