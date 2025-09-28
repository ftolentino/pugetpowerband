# Setup Guide for Puget Power Band Website

This guide will help you get your band website up and running quickly.

## Prerequisites

- Node.js 18+ installed
- A Sanity account (free at sanity.io)
- Git for version control

## Step-by-Step Setup

### 1. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 2. Create Sanity Project

1. Go to [sanity.io](https://www.sanity.io) and sign up/log in
2. Create a new project
3. Choose a project name (e.g., "puget-power-band")
4. Note your **Project ID** - you'll need this!

### 3. Configure Environment

1. Copy the environment file:
   \`\`\`bash
   cp .env.local.example .env.local
   \`\`\`

2. Edit \`.env.local\` and replace \`your-project-id\` with your actual Sanity Project ID:
   \`\`\`env
   NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
   NEXT_PUBLIC_SANITY_DATASET=production
   \`\`\`

### 4. Start the Development Server

\`\`\`bash
npm run dev
\`\`\`

Your website will be available at [http://localhost:3000](http://localhost:3000)

### 5. Access Sanity Studio

1. Go to [http://localhost:3000/studio](http://localhost:3000/studio)
2. Sign in with your Sanity account
3. Start adding content!

## Adding Content

### Band Information
1. In Sanity Studio, click "Band Information"
2. Add your band name, description, genre, location
3. Upload a hero image for your homepage
4. Add contact email and social media links

### Photos
1. Click "Photo" in Sanity Studio
2. Upload images and add titles/descriptions
3. Choose categories (Live Performance, Band Photos, etc.)
4. Mark special photos as "Featured"

### Shows
1. Click "Show" in Sanity Studio
2. Add upcoming shows with venue, date, ticket info
3. Include details like doors/show times, age restrictions
4. Add ticket URLs for easy purchasing

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up
3. Import your GitHub repository
4. Add environment variables:
   - \`NEXT_PUBLIC_SANITY_PROJECT_ID\`
   - \`NEXT_PUBLIC_SANITY_DATASET\`
5. Deploy!

### Netlify

1. Push code to GitHub
2. Connect to Netlify
3. Set build command: \`npm run build\`
4. Set publish directory: \`.next\`
5. Add environment variables

## Customization Tips

### Change Colors
Edit \`tailwind.config.ts\` and look for the \`primary\` color definition:
\`\`\`js
primary: {
  500: '#d946ef', // Change this hex code
  600: '#c026d3', // And this one
  // etc.
}
\`\`\`

### Update Band Name
The band name comes from Sanity, but you can also update it in:
- \`components/Navigation.tsx\`
- \`app/layout.tsx\` (page title)

### Add New Sections
Create new components in the \`components/\` folder and add them to \`app/page.tsx\`.

## Troubleshooting

### "Missing environment variable" error
- Make sure your \`.env.local\` file has the correct Sanity Project ID
- Restart the development server after changing environment variables

### Images not loading
- Check that your Sanity Project ID is correct
- Make sure images are published in Sanity Studio

### Studio not loading
- Verify you're signed in to Sanity
- Check that your project ID matches your Sanity project

## Support

- Check the main README.md for detailed documentation
- Visit [sanity.io/docs](https://sanity.io/docs) for Sanity help
- Visit [nextjs.org/docs](https://nextjs.org/docs) for Next.js help

## Next Steps

1. Add your band's content to Sanity
2. Customize colors and styling
3. Deploy to your preferred platform
4. Share your awesome new website! 🎸
