# Kate Volkova - Academic Website

This is the academic website for Kate Volkova, Associate Professor in the Department of Finance at the University of Melbourne.

**Website URL:** [www.evolkova.info](https://www.evolkova.info)

## Technology Stack

This website is built with [Quarto](https://quarto.org/), an open-source scientific and technical publishing system.

## Local Development

### Prerequisites

1. Install Quarto from [https://quarto.org/docs/get-started/](https://quarto.org/docs/get-started/)

### Preview the Site Locally

```bash
# Preview the site with live reload
quarto preview

# Or render without preview
quarto render
```

The site will be available at `http://localhost:4000` (or another port if 4000 is busy).

## Adding New Content

### Adding a New Research Paper

1. Create a new folder under `research/` with a descriptive name (e.g., `research/new-paper/`)
2. Add an `index.qmd` file with the following template:

```yaml
---
title: "Paper Title"
author:
  - name: Author Name
    equal-contributor: true
  - name: Ekaterina Volkova
    equal-contributor: true
date: "YYYY-MM-DD"
categories: [category1, category2]
image: featured.png
description: "Brief description"
---

Your content here...
```

3. Add a featured image (optional) named `featured.png` or `featured.jpg`
4. Update `index.qmd` to include the paper in the appropriate section

### Adding a New Dataset

1. Create a new folder under `data/` (e.g., `data/new-dataset/`)
2. Add an `index.qmd` file similar to the research paper template
3. Add the data files you want to share
4. Update `index.qmd` to include the dataset

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch. The deployment workflow is defined in `.github/workflows/quarto-publish.yml`.

### Manual Deployment

If needed, you can trigger a manual deployment:
1. Go to the repository's Actions tab
2. Select "Quarto Publish" workflow
3. Click "Run workflow"

## Project Structure

```
.
├── _quarto.yml          # Main Quarto configuration
├── index.qmd            # Homepage
├── styles.scss          # Custom SCSS styles
├── styles.css           # Additional CSS styles
├── research/            # Research papers
│   ├── blockholders/
│   ├── antitrust/
│   ├── fragmentation/
│   └── ...
├── data/                # Datasets
│   ├── blocks/
│   ├── fragmentation/
│   └── ...
├── uploads/             # Static files (CV, etc.)
├── authors/             # Author profile images
├── media/               # Site icons and images
└── .github/workflows/   # GitHub Actions
```

## Customization

### Theme Colors

The primary color is defined in `styles.scss`:
```scss
$primary: #1565c0;  // Blue theme
```

### Fonts

- **Headings:** Montserrat
- **Body:** Roboto
- **Code:** Roboto Mono

Fonts are loaded from Google Fonts via the `_quarto.yml` configuration.

## Troubleshooting

### Build Errors

If the build fails, try:
1. Delete the `.quarto/` and `_site/` directories
2. Run `quarto render` again

### Missing Images

Ensure images are in the correct location relative to the `.qmd` file that references them.

## Contact

For questions about the website, contact Ekaterina Volkova at [evolkova@unimelb.edu.au](mailto:evolkova@unimelb.edu.au).
