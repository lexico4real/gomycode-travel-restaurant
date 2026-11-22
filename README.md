# Bootstrap Website Projects

A project hub containing two independent responsive website exercises built with HTML5, CSS3 and Bootstrap 5.

## Projects
1. **The Golden Palette** — fictional restaurant website demonstrating Bootstrap's responsive grid system.
2. **Wanderlust Journeys** — responsive travel agency landing page demonstrating Bootstrap components, cards, accordion and forms.

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
│   ├── index.html             # Travel agency landing page
│   ├── css/style.css          # Travel agency styles
│   ├── js/script.js           # Navigation and form interactions
│   └── README.md
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

## Travel agency features
- Responsive Bootstrap navbar with Home, Destinations, Tours and Contact links
- Scenic hero with headline, supporting copy and calls to action
- Three destination cards with images and enquiry links
- Bootstrap accordion with three sample tour packages
- Contact form with Bootstrap validation feedback and destination prefill
- Responsive footer with social links

The travel-agency contact form is a front-end demonstration; it does not send or store enquiries. The agency, destinations, contact details and tour packages are fictional sample content.

## Notes
Restaurant prices and contact details are fictional. The restaurant contact form does not send or store submissions. Images are externally hosted.
