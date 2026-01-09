# GM International LLP - Metal Export Business Website

A premium, high-performance website for **GM International LLP**, a leading global exporter of non-ferrous metals. This project highlights the company's product portfolio (Copper, Aluminium, Nickel, Lead, Zinc, Tin), displays live market rates (LME & MCX), and facilitates international B2B inquiries.

![Premium Metals Hero](/public/images/premium-metals-hero.png)

## 🚀 Features

-   **Premium UI/UX**: Modern, corporate aesthetic with a "Golden" color palette reflecting value and trust.
-   **Live Market Data**:
    -   **LME Rates Ticker**: Real-time display of London Metal Exchange rates.
    -   **Delhi Spot Rates**: Detailed table for local market rates.
-   **Product Showcase**:
    -   Detailed specification cards for Copper, Aluminium, Nickel, Lead, Zinc, and Tin.
    -   Dynamic image switching and tabbed content areas.
-   **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices using Tailwind CSS.
-   **Contact & Lead Generation**: Integrated inquiry forms and quick-action buttons for quotes.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Fonts**: Inter (Body) & Montserrat (Headings) via `next/font`

## 🏁 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

-   [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
-   npm or yarn

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/gm-international-llp.git
    cd gm-international-llp
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open your browser**:
    Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📂 Project Structure

```
├── public/              # Static assets (images, icons)
│   └── images/          # Product and hero images
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── about/       # About Us page
│   │   ├── contact/     # Contact Us page
│   │   ├── products/    # Product listing & details
│   │   ├── layout.tsx   # Root layout (Header/Footer wrapper)
│   │   └── page.tsx     # Homepage
│   └── components/      # Reusable React components
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── ProductsShowcase.tsx
│       ├── LiveRatesTicker.tsx
│       └── ...
├── tailwind.config.ts   # Tailwind configuration
└── next.config.js       # Next.js configuration
```

## 🚢 Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1.  Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2.  Import the project into Vercel.
3.  Vercel will detect Next.js and deploy automatically.

## 📄 License

This project is proprietary property of GM International LLP.