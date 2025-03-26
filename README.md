## Local Development Setup

1. Clone the repository
```bash
git clone git@github.com:singletonepro/userListTestTask.git
cd my-user-list-app
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create environment variables (if needed)
```bash
cp .env.example .env.local
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## SEO Optimizations

The application implements the following SEO optimizations:
- Proper metadata configuration using Next.js Metadata API
- Semantic HTML structure for better search engine understanding
- Descriptive page titles and meta descriptions
- Proper heading hierarchy (h1, h2, etc.)

## Accessibility (WCAG Compliance)

The application follows WCAG guidelines with these implementations:
- Proper ARIA labels and roles where necessary
- Semantic HTML elements for better screen reader support
- Sufficient color contrast ratios
- Keyboard navigation support
- Status indicators with both visual and screen reader support
- Alt text for all images
- Focus management and visible focus indicators
- Responsive design supporting text resizing