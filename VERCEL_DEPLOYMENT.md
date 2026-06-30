# Vercel Deployment Guide

This project is configured for deployment on Vercel. Here are the key configurations:

## Files Created

### 1. `vercel.json`
Main Vercel configuration file that specifies:
- Build command: `pnpm install && pnpm run build`
- Output directory: `artifacts/learn-and-grab/dist/public`
- Environment variables (PORT, BASE_PATH)
- Node version: 20.x

### 2. `.vercelignore`
Specifies files and directories to ignore during deployment to reduce build time.

### 3. Environment Files
- `.env.example` - Template for environment variables
- `.env.production` - Production environment variables
- `.env.local` - Local development variables

## Deployment Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the configuration from `vercel.json`

3. **Configure Environment Variables (if needed)**
   - Go to Project Settings → Environment Variables
   - Add any additional environment variables if required
   - The defaults are already set in `vercel.json`

4. **Deploy**
   - Vercel will automatically deploy on every push to main branch
   - You can also manually trigger deployments from the dashboard

## Configuration Details

### Build Process
The build process:
1. Installs dependencies using pnpm
2. Runs `pnpm run build` which:
   - Type-checks all code
   - Builds the Vite app in `artifacts/learn-and-grab/`
   - Creates output in `artifacts/learn-and-grab/dist/public`

### Environment Variables
- **PORT**: Server port (default: 3000)
- **BASE_PATH**: Application base path (default: /)

### Framework Detection
Vercel automatically detects:
- Framework: Vite
- Package manager: pnpm
- Build command: Custom (from vercel.json)

## Troubleshooting

### Build Fails
1. Check the build logs in Vercel dashboard
2. Ensure `pnpm-lock.yaml` is committed
3. Verify all workspace dependencies are correct

### Environment Variables Not Loading
1. Check `.env.production` is properly formatted
2. Verify variables are set in Vercel dashboard
3. Restart the deployment

### Static Files Not Loading
1. Verify `BASE_PATH` is correctly set
2. Check output directory matches: `artifacts/learn-and-grab/dist/public`
3. Ensure public files are in the correct location

## Performance Optimization

Consider adding:
1. Caching headers in `vercel.json`
2. Image optimization
3. Code splitting configuration in `vite.config.ts`

## Local Testing

Test locally before deployment:
```bash
pnpm install
pnpm run build
pnpm run serve
```

This simulates the production build and preview locally.
