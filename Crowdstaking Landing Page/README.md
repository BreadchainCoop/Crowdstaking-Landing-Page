# 🌱 CrowdStaking Protocol Landing Page

**Crowdstaking: Fund Your Community with Yield**

A beautifully crafted landing page for a Web3 crowdstaking protocol that enables communities to pool stablecoins, generate yield through DeFi staking, and democratically fund local projects.

![CrowdStaking Protocol](https://images.unsplash.com/photo-1639322537231-2f206e06af84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwY29tbXVuaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NTUzMDI2NDN8MA&ixlib=rb-4.1.0&q=80&w=800)

## ✨ Features

- **🎨 Custom Design System** - Forest green (#065f46) and burnt orange (#D95D0F) color palette
- **📱 Fully Responsive** - Mobile-first design that works beautifully on all devices
- **⚡ Built with Modern Stack** - React 18, TypeScript, Tailwind CSS v4, ShadCN/UI
- **🔧 White-Label Ready** - Easy to customize for any community organization
- **🚀 Performance Optimized** - Fast loading with optimized images and components

## 🏗️ Project Structure

```
crowdstaking-landing/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── LandingPage.tsx      # Main landing page component
│   │   ├── ui/                  # ShadCN UI components
│   │   └── figma/
│   │       └── ImageWithFallback.tsx
│   ├── styles/
│   │   └── globals.css          # Tailwind v4 CSS with custom variables
│   ├── App.tsx                  # Main app component
│   └── index.tsx               # Entry point
├── package.json
├── tailwind.config.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone or create the project:**
```bash
npx create-react-app crowdstaking-landing --template typescript
cd crowdstaking-landing
```

2. **Install dependencies:**
```bash
npm install lucide-react class-variance-authority clsx tailwind-merge
npm install @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-avatar
npm install @radix-ui/react-checkbox @radix-ui/react-dialog @radix-ui/react-dropdown-menu
npm install sonner
npm install -D tailwindcss@latest typescript @types/react @types/react-dom
```

3. **Copy the components:**
   - Replace `src/App.tsx` with the provided App.tsx
   - Copy `components/` folder to `src/components/`
   - Replace `src/index.css` with `styles/globals.css`
   - Copy `tailwind.config.js` to project root

4. **Start development server:**
```bash
npm start
```

Visit `http://localhost:3000` to see your landing page!

## 🎯 Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repo to [vercel.com](https://vercel.com)
3. Auto-deploy on commits

### Netlify
1. `npm run build`
2. Drag `build` folder to [netlify.com](https://netlify.com)

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run deploy
```

## 🎨 Customization

### Colors
Update the CSS variables in `styles/globals.css`:
```css
:root {
  --primary: #D95D0F;        /* Burnt orange */
  --secondary: #065f46;      /* Forest green */
  --background: #F3EDE6;     /* Cream */
}
```

### Content
Edit `components/LandingPage.tsx` to update:
- Hero headline and description
- Feature cards
- Success stories
- Call-to-action buttons

### Branding
- Update logo in navigation
- Change company name throughout
- Customize footer links

## 📦 Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better DX
- **Tailwind CSS v4** - Utility-first CSS framework
- **ShadCN/UI** - High-quality, accessible components
- **Lucide React** - Beautiful icon library
- **Radix UI** - Unstyled, accessible primitives

## 🌟 Key Sections

1. **Hero** - Compelling headline with primary CTA
2. **Features** - 6 key protocol features with icons
3. **How It Works** - 4-step process explanation
4. **Success Stories** - Community testimonials
5. **Get Started** - Free deployment options
6. **Footer** - Links and additional resources

## 🎯 Perfect for Hackathons

This landing page is specifically designed for:
- **Demo Day presentations**
- **Investor pitches**
- **Community showcases**
- **Protocol launches**

## 📄 License

Open source - feel free to use and modify for your projects!

## 🤝 Contributing

Pull requests welcome! This project encourages community contributions.

## 📞 Support

For questions about deployment or customization, check the [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) or create an issue.

---

**Built with ❤️ for the Web3 community**