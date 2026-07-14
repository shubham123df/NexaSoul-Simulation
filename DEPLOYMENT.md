# Render Deployment Instructions

## Deploy NexaSoul Simulation to Render

### Step 1: Connect GitHub to Render
1. Go to [render.com](https://render.com)
2. Sign up/login with your GitHub account
3. Click "New +" → "Web Service"
4. Select the `NexaSoul-Simulation` repository
5. Render will detect it's a Vite project

### Step 2: Configure Build Settings
Render should auto-detect these settings, but verify:

**Build Command:**
```
npm run build
```

**Publish Directory:**
```
dist
```

**Install Command:**
```
npm install
```

**Start Command:**
```
npm run preview
```

### Step 3: Deploy
1. Click "Create Web Service"
2. Wait for build to complete (~2-3 minutes)
3. Your site will be live at: `https://nexasoul-simulation.onrender.com`

### Step 4: Update Original Repository
To redirect the original NexaSoul-showcase to the new simulation:

**Option A: Replace content**
1. Go to original repo: https://github.com/shubham123df/NexaSoul-showcase
2. Create a simple redirect page in `index.html`:
```html
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="refresh" content="0; url=https://nexasoul-simulation.onrender.com">
  <script>window.location.href = "https://nexasoul-simulation.onrender.com"</script>
</head>
<body>
  <p>Redirecting to new NexaSoul Simulation...</p>
</body>
</html>
```

**Option B: Keep both**
- Keep original as archive
- Link to simulation from README

### Step 5: Update Render URL
After deployment, update these files with your actual Render URL:
- `nexasoul-simulation/src/components/scenes/JoinScene.tsx` (line 65)
- Original repository README if redirecting

## Environment Variables (Optional)
No environment variables needed for this project.

## Custom Domain (Optional)
To use a custom domain:
1. Purchase domain (e.g., nexasoul.cuchd.in)
2. In Render dashboard → Web Service → Settings → Custom Domains
3. Add domain and follow DNS instructions
