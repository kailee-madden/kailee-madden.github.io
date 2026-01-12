# Kailee Website

A clean, modern personal website built with semantic HTML and vanilla JavaScript. All content is easily editable through a single JSON file.

## Quick Start

Edit `data.json` to update your website so it has accurate information that is relevant to you.

For example, replace the text in the `summary` field:

```json
{
  "summary": "Your summary text here..."
}
```

## 📁 Project Structure

```
.
├── index.html           # Main HTML structure (no content here!)
├── styles.css           # All styling and responsive design
├── app.js              # Loads data.json and populates page
├── data.json           # ✨ All your content goes here ✨
├── README.md           # This file
├── images/             # Your images folder
│   └── IMG_5388.png    # Your profile photo
└── pdf/                # Your PDFs folder
    ├── Kailee.Madden.SeniorSoftwareEngineer.Resume.pdf
    ├── Madden.Thesis19.pdf
    └── An Introduction to Topological Data Analysis.pdf
```

## Design Customization

Edit the `styles.css` to customize colors, fonts, spacing, and layout. 

## Deployment

This website is ready to deploy to any static hosting service, but was designed with GitHub Pages in mind. If you are unfamiliar, with GitHub Pages you can push your changes to GitHub and the website (at github.io) will update automatically. 

## Development

### Local Testing

You need a local server to test

```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server
```

Then visit `http://localhost:8000` in your browser.

### JSON Format Validation

Make sure `data.json` is valid JSON:
- Use double quotes for strings
- No trailing commas
- All braces and brackets must match

Online validator: [jsonlint.com](https://www.jsonlint.com)

## Tips

- Keep your profile image around 300x300px for best performance
- Use relative paths for PDFs (e.g., `pdf/filename.pdf`)



