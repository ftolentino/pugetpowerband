# 🎯 SEO Setup Checklist

Quick checklist to get your band website ranking on Google!

## ✅ Immediate Actions (Do First!)

- [ ] **Add Site URL to environment variables**
  - In `.env.local`: `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`
  - In Vercel dashboard: Add same variable

- [ ] **Create Open Graph image**
  - Size: 1200 x 630 pixels
  - Save as: `public/og-image.jpg`
  - Include: Band name, photo, tagline
  - See: `public/README-og-image.md` for help

- [ ] **Fill out Sanity Studio completely**
  - Band name and description
  - Genre and location
  - Contact email
  - All social media links

## 🔍 Google Setup (Week 1)

- [ ] **Google Search Console**
  1. Sign up at: https://search.google.com/search-console
  2. Add your domain
  3. Verify ownership (copy code to layout.tsx)
  4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

- [ ] **Google Business Profile** (if applicable)
  - Create profile for local SEO
  - Link to your website
  - Add band photos and details

## 📝 Content Optimization (Ongoing)

- [ ] **Add alt text to all photos** in Sanity
  - Example: "Puget Power Band performing live at The Showbox Seattle"

- [ ] **Add at least 3 upcoming shows** with full details
  - Venue name, city, date
  - Ticket URL and prices
  - Event description

- [ ] **Write compelling band description**
  - 150-160 characters
  - Include genre and location
  - Mention what makes you unique

## 🌐 Online Presence

- [ ] **Get listed on music platforms**
  - Bandcamp
  - Bandsintown
  - ReverbNation
  - SoundCloud
  - Spotify for Artists

- [ ] **Social media setup**
  - Instagram: Link in bio to website
  - Facebook: Add website to page
  - Twitter: Pin tweet with website link
  - YouTube: Add website to description

- [ ] **Local listings**
  - Local music venue calendars
  - Eventbrite
  - City event listings
  - Local music blogs/publications

## 🧪 Testing & Verification

- [ ] **Test structured data**
  - https://search.google.com/test/rich-results
  - Enter your homepage URL
  - Should show MusicGroup and Events

- [ ] **Test mobile-friendliness**
  - https://search.google.com/test/mobile-friendly
  - Should pass all tests

- [ ] **Test social sharing**
  - Facebook Debugger: https://developers.facebook.com/tools/debug/
  - Twitter Validator: https://cards-dev.twitter.com/validator
  - Should show your og-image and description

- [ ] **Test site speed**
  - https://pagespeed.web.dev/
  - Aim for 90+ scores

## 📈 Ongoing Maintenance

### Weekly
- [ ] Add new photos from recent shows
- [ ] Update upcoming show dates
- [ ] Share new content on social media

### Monthly
- [ ] Check Google Search Console for issues
- [ ] Review which keywords are working
- [ ] Update band description if needed
- [ ] Add any new social media profiles

### After Each Show
- [ ] Upload show photos
- [ ] Move past show to history
- [ ] Post show recap on social media
- [ ] Thank venue and tag them (backlink!)

## 🎸 Band-Specific Tips

- [ ] **Use full band name consistently**
  - "Puget Power Band" everywhere
  - In photo filenames: `puget-power-band-showbox-2024.jpg`

- [ ] **Include location keywords**
  - "Seattle rock band"
  - "Puget Sound music"
  - "Pacific Northwest live music"

- [ ] **Get backlinks**
  - Ask venues to link to your site
  - Get featured in local press
  - Collaborate with other bands
  - Guest post on music blogs

## 📊 Success Metrics

Track these in Google Search Console:

- **Week 1-2:** Site indexed by Google ✅
- **Week 2-4:** Appearing in search results ✅
- **Month 2:** 100+ impressions per week ✅
- **Month 3:** 50+ clicks per week ✅
- **Month 6:** Ranking in top 10 for "[Band Name]" ✅

## 🚨 Common Issues

**Site not showing in Google?**
- Wait 2-4 weeks for indexing
- Submit sitemap in Search Console
- Share your site on social media

**Social share not showing image?**
- Check og-image.jpg exists in /public/
- Clear Facebook cache at debugger
- Image must be exactly 1200x630px

**Low traffic?**
- Keep adding content (shows, photos)
- Get more backlinks
- Be patient - SEO takes 3-6 months

---

📖 **For detailed instructions, see [SEO-GUIDE.md](SEO-GUIDE.md)**

🎉 **Check off items as you complete them!**

