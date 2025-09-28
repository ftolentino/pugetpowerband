# Puget Power Band Website

A modern, responsive website for Puget Power Band built with Next.js and Sanity CMS. Features photo galleries, show listings, and easy content management.

## Features

- 🎸 **Modern Design**: Beautiful, responsive design with smooth animations
- 📸 **Photo Gallery**: Categorized photo gallery with lightbox functionality
- 📅 **Show Management**: Upcoming and past show listings with detailed information
- 🎨 **Headless CMS**: Easy content management with Sanity Studio
- 📱 **Mobile Responsive**: Optimized for all device sizes
- ⚡ **Fast Performance**: Built with Next.js for optimal performance
- 🚀 **Easy Deployment**: Ready for deployment on Vercel

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Quick Start

### 1. Installation

\`\`\`bash
# Clone the repository
git clone <your-repo-url>
cd pugetpowerband

# Install dependencies
npm install
\`\`\`

### 2. Sanity Setup

1. Create a new Sanity project at [sanity.io](https://www.sanity.io/)
2. Note your Project ID and Dataset name
3. Copy the environment variables:

\`\`\`bash
cp .env.local.example .env.local
\`\`\`

4. Update \`.env.local\` with your Sanity credentials:

\`\`\`env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
\`\`\`

### 3. Deploy Sanity Studio

\`\`\`bash
# Install Sanity CLI
npm install -g @sanity/cli

# Deploy your studio
cd sanity
sanity deploy
\`\`\`

### 4. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Content Management

### Accessing Sanity Studio

1. Go to \`https://your-studio-name.sanity.studio\`
2. Sign in with your Sanity account
3. Start adding content!

### Content Types

#### Band Information
- Band name, description, genre, location
- Hero image for the main banner
- Contact email and social media links

#### Photos
- Upload and categorize band photos
- Set featured photos for highlights
- Add photographer credits
- Organize by category (Live, Band Photos, Studio, Behind the Scenes)

#### Shows
- Add upcoming and past shows
- Include venue, date, ticket information
- Manage show details like doors/show times
- Add supporting acts

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - \`NEXT_PUBLIC_SANITY_PROJECT_ID\`
   - \`NEXT_PUBLIC_SANITY_DATASET\`
4. Deploy!

### Deploy to Other Platforms

This is a standard Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Any platform supporting Node.js

## Customization

### Colors and Styling
- Edit \`tailwind.config.ts\` to change color scheme
- Modify \`app/globals.css\` for global styles
- Component-specific styles are in individual component files

### Content Structure
- Modify Sanity schemas in \`sanity/schemas/\` directory
- Update TypeScript interfaces in \`lib/sanity.ts\`
- Adjust GROQ queries as needed

### Adding Features
- Add new components in \`components/\` directory
- Create new pages in \`app/\` directory
- Extend Sanity schemas for additional content types

## Project Structure

\`\`\`
pugetpowerband/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── PhotoGallery.tsx
│   ├── Shows.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/                   # Utilities
│   └── sanity.ts          # Sanity client and types
├── sanity/                # Sanity configuration
│   ├── config.ts          # Sanity config
│   └── schemas/           # Content schemas
└── public/                # Static assets
\`\`\`

## Support

For questions or issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [Sanity documentation](https://www.sanity.io/docs)
3. Open an issue in this repository

## License

This project is licensed under the MIT License - see the LICENSE file for details.
