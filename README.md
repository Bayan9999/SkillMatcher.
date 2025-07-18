This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploying to Azure Static Web Apps

This project can be deployed to Azure Static Web Apps for cloud hosting.

### Steps to Deploy

1. **Create Azure Static Web App**

   - Go to [Azure Portal](https://portal.azure.com).
   - Create a new Static Web App resource.
   - Connect your GitHub repository.
   - Select the branch (e.g., `main`).
   - Set build presets to "Custom" and configure:
     - App location: `/`
     - API location: `src/app/api`
     - Output location: `.next`

2. **Configure GitHub Secrets**

   - In your GitHub repository, go to Settings > Secrets.
   - Add a secret named `AZURE_STATIC_WEB_APPS_API_TOKEN` with the deployment token from Azure.

3. **Push Code**

   - Push your code to the configured branch.
   - GitHub Actions will build and deploy your app automatically.

4. **Set Environment Variables**

   - In Azure Portal, go to your Static Web App > Configuration.
   - Add any environment variables your app requires.
   - Prefix client-side variables with `NEXT_PUBLIC_`.

5. **Run Locally**

   - Use `npm run dev` to run the app locally on port 8000.

### Troubleshooting

- Check GitHub Actions logs for build or deployment errors.
- Check Azure Portal logs for runtime errors.
- Ensure environment variables are correctly set.

For more details, see [Azure Static Web Apps documentation](https://learn.microsoft.com/en-us/azure/static-web-apps/).
