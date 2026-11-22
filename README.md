# Bootstrap Website Projects

A project hub containing two independent responsive website exercises built with HTML5, CSS3 and Bootstrap 5.

## Projects
1. **The Golden Palette** — fictional restaurant website demonstrating Bootstrap's responsive grid system.
2. **Wanderlust Journeys** — travel agency landing page demonstrating Bootstrap components. Its route is scaffolded and ready for the full implementation.

## Repository structure
```text
bootstrap-projects/
├── index.html                 # Project selector / entry point
├── css/hub.css                # Project selector styles
├── restaurant/
│   ├── index.html
│   ├── css/style.css
│   ├── js/script.js
│   └── assets/images/
├── travel-agency/
│   └── index.html             # Travel project entry point
├── README.md
└── .gitignore
```

## Run locally
Open the root `index.html` in a browser and choose either project. No build step or package installation is required. Internet access is required for CDN assets, Google Fonts and externally hosted Unsplash images.

## Restaurant features
- Responsive Bootstrap navbar with same-page section links
- Hero, menu grid with nine dishes, About Us, Contact and footer
- Bootstrap modal with ingredient and allergen details
- Light/dark theme toggle and contact form demo validation

## Travel agency status
The route is scaffolded in `travel-agency/index.html`. The full implementation will include a navbar, scenic hero, destination cards, tour accordion, contact form and footer.

## Notes
Restaurant prices and contact details are fictional. The restaurant contact form does not send or store submissions. Images are externally hosted.
