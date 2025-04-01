#!/bin/bash

# GitHub Pages Deployment Guide

## Prerequisites
1. A GitHub account
2. Git installed on your computer

## Deployment Steps

### 1. Create a GitHub Repository
- Log in to your GitHub account
- Create a new repository named "eportfolio" (or any name you prefer)
- Make sure the repository is public if you want to use the free GitHub Pages

### 2. Configure Git
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/eportfolio.git
```
Replace `YOUR_USERNAME` with your actual GitHub username.

### 3. Update package.json
- Edit the "homepage" field in package.json to match your GitHub username:
```json
"homepage": "https://YOUR_USERNAME.github.io/eportfolio",
```

### 4. Deploy to GitHub Pages
```bash
npm run deploy
```

This will:
1. Build the project (via the predeploy script)
2. Deploy the "out" directory to the gh-pages branch of your repository

### 5. Configure GitHub Pages
- Go to your repository on GitHub
- Navigate to Settings > Pages
- Set the source to the "gh-pages" branch
- Save the settings

Your site should be available at: https://YOUR_USERNAME.github.io/eportfolio

## Updating Your Site
To update your site after making changes:
```bash
git add .
git commit -m "Update site content"
git push origin main
npm run deploy
```

## Troubleshooting
- If your site shows a blank page, check that the "basePath" in next.config.js matches your repository name
- Make sure all links in your site use relative paths
- Check the GitHub Pages settings to ensure the correct branch is selected
