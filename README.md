# 🍽️ Garden Cafe – Restaurant & Cafe Website Template

A modern and responsive Restaurant & Cafe website template built with **HTML5**, **Tailwind CSS**, and **Vanilla JavaScript**.

Perfect for:

- Restaurants
- Cafes
- Coffee Shops
- Bakeries
- Fast Food
- Fine Dining
- Bistro
- Catering Business

---

# 📁 Project Structure

```
restaurant-template/
│
├── index.html
├── about.html
├── menu.html
├── gallery.html
├── reservation.html
├── contact.html
│
├── assets/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── main.js
│   │
│   ├── images/
│   │   ├── hero.jpg
│   │   ├── about.jpg
│   │   ├── chef.jpg
│   │   ├── coffee/
│   │   ├── food/
│   │   ├── dessert/
│   │   ├── drink/
│   │   ├── gallery/
│   │   └── team/
│   │
│   └── icons/
│
└── favicon.ico
```

---

# 🚀 Getting Started

No installation is required.

Simply open:

```
index.html
```

using your preferred browser.

For development, we recommend using:

- Visual Studio Code
- Live Server Extension

Start the project by:

```
Right Click
↓

Open with Live Server
```

---

# 📄 Pages

| File | Description |
|------|-------------|
| index.html | Homepage |
| about.html | About Us |
| menu.html | Food & Drinks Menu |
| gallery.html | Restaurant Gallery |
| reservation.html | Reservation Page |
| contact.html | Contact Page |

---

# 🏪 Customize Website Information

## Change Website Name

Search for:

```
Garden Cafe
```

Replace it with your own business name.

Example:

```
Garden Cafe
```

↓

```
Coffee Corner
```

---

## Change Logo

Replace the logo text inside the navigation bar.

Example:

```html
<a href="index.html">Garden Cafe</a>
```

↓

```html
<a href="index.html">Coffee Corner</a>
```

Or replace it with an image:

```html
<img src="assets/images/logo.png" alt="Logo">
```

---

# 🖼️ Change Images

All images are located inside:

```
assets/images/
```

Replace the existing images with your own.

### Recommended Image Sizes

| Image | Recommended Size |
|--------|------------------|
| Hero Banner | 1920 × 1080 px |
| About Image | 1200 × 800 px |
| Food Images | 800 × 800 px |
| Coffee Images | 800 × 800 px |
| Gallery Images | 1200 × 1600 px |
| Team Images | 800 × 1000 px |

Keep the original filenames or update the image path inside the HTML files.

---

# 🍔 Edit Menu Items

Open:

```
menu.html
```

Locate a menu card like this:

```html
<h3>Signature Latte</h3>

<p>Fresh espresso with creamy milk.</p>

<span>$6.50</span>
```

Replace the content with your own menu.

Example:

```html
<h3>Americano</h3>

<p>Freshly brewed premium coffee.</p>

<span>$4.50</span>
```

---

# 📸 Add Gallery Images

Open:

```
gallery.html
```

Copy an existing gallery item:

```html
<div class="gallery-item">

...

</div>
```

Paste it below the last gallery item.

Update:

- Image
- Title
- Category

Example:

```
Coffee

Food

Dessert

Interior
```

---

# 👨‍🍳 Edit About Section

Open:

```
about.html
```

Update:

- Company Story
- Vision
- Mission
- Chef Information
- Team Members
- Statistics

---

# 📍 Change Address

Search:

```
Jakarta, Indonesia
```

Replace it with your own address.

Example:

```
123 Main Street

New York

USA
```

---

# 📞 Update Contact Information

Search for:

```
+62 812 3456 7890
```

Replace with your phone number.

Search:

```
hello@gardencafe.com
```

Replace with your email.

Example:

```
contact@yourbusiness.com
```

Search:

```
www.gardencafe.com
```

Replace with your website.

---

# 💬 WhatsApp Button

Search:

```
https://wa.me/6281234567890
```

Replace the number with your own WhatsApp number.

Example:

```
https://wa.me/15551234567
```

**Important:**

Do not use spaces or "+" signs.

Correct:

```
15551234567
```

Incorrect:

```
+1 555 123 4567
```

---

# 🗺️ Change Google Maps

Open:

```
contact.html
```

or

```
reservation.html
```

Locate:

```html
<iframe ...></iframe>
```

Replace the Google Maps Embed URL.

To get your own embed link:

1. Open Google Maps
2. Search your business
3. Click **Share**
4. Select **Embed a map**
5. Copy the HTML
6. Replace only the `src=""` URL

---

# 🕒 Change Opening Hours

Search for:

```
Monday - Friday
```

Replace the schedule with your business hours.

---

# 🌐 Update Social Media Links

Find:

```html
href="#"
```

Replace with your social media links.

Example:

```html
<a href="https://instagram.com/youraccount">
```

---

# 🎨 Customize Colors

Each HTML page contains the Tailwind configuration:

```javascript
colors: {

primary:"#3B2F2F",

secondary:"#C49B66",

light:"#FFF8F0",

dark:"#1B1B1B"

}
```

Example:

```
Primary

↓

#0F172A

Secondary

↓

#F59E0B
```

---

# 🔤 Change Font

Current font:

```
Poppins
```

To use another Google Font:

1. Replace the Google Fonts URL.
2. Update:

```html
body class="font-[YourFont]"
```

---

# ⚙ JavaScript Features

Located in:

```
assets/js/main.js
```

Current features include:

- Sticky Navigation
- Mobile Navigation
- Back To Top Button
- Gallery Filter
- Menu Filter
- Menu Search
- Reservation Form Validation
- Contact Form Validation
- Smooth Scrolling

---

# 🎨 Custom CSS

Located in:

```
assets/css/style.css
```

Use this file for:

- Custom Animations
- Additional Styling
- Responsive Fixes
- Utility Classes

Avoid editing Tailwind CDN unless necessary.

---

# 📁 Images Folder

```
coffee/
```

Coffee menu images.

```
food/
```

Food images.

```
dessert/
```

Dessert images.

```
drink/
```

Drink images.

```
gallery/
```

Gallery photos.

```
team/
```

Staff & Chef images.

---

# 📱 Responsive Design

Optimized for:

- Desktop
- Laptop
- Tablet
- Mobile

---

# 🌍 Browser Support

✅ Google Chrome

✅ Microsoft Edge

✅ Mozilla Firefox

✅ Safari

---

# 🚀 Recommended Improvements

For production websites, consider adding:

- Tailwind CSS CLI
- Swiper Slider
- AOS Scroll Animation
- Lightbox Gallery
- Dark Mode
- Lazy Loading Images
- SEO Optimization
- robots.txt
- sitemap.xml
- Open Graph Meta Tags
- Schema.org Markup
- Progressive Web App (PWA)
- Laravel Version
- React Version
- Next.js Version

---

# 📦 Deployment

This project can be deployed to:

- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- Cloudflare Pages
- Any Shared Hosting
- VPS or Dedicated Server

Simply upload all project files while keeping the folder structure unchanged.

---

# 📄 License

You are free to use this template for:

- ✅ Personal Projects
- ✅ Commercial Projects
- ✅ Client Websites
- ✅ Educational Purposes

You may modify and customize the template according to your needs.

---

# ❤️ Built With

- HTML5
- Tailwind CSS
- Vanilla JavaScript
- Google Fonts (Poppins)

---

# 🤝 Support

If you encounter any issues or have suggestions for improvements, feel free to customize the project or extend it with additional features.

---

# 🎉 Enjoy Building!

Thank you for using this Restaurant & Cafe Website Template.

Happy Coding! 🚀