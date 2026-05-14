# 🌴 The Grand Lumière | Luxury Resort & Spa

Welcome to the **Grand Lumière** project! This is a modern, single-page website for a fictional luxury hotel and resort. It is built to be fast, responsive (looks good on mobile and desktop), and visually stunning with smooth animations.

If you are a beginner, this README will guide you through exactly what this project is, how it works, and how you can run it or make changes to it.

---

## 🧩 What's Inside? (The Tech Stack)

This project is built using modern web development tools. Here is a beginner-friendly breakdown of what we used:

1. **[Next.js (App Router)](https://nextjs.org/) & [React](https://react.dev/):** 
   Next.js is a framework built on top of React. React is used to build the user interface using "components" (reusable blocks of code). Next.js makes React faster and easier to use by handling routing (how pages load) and optimization out of the box.
   
2. **[Tailwind CSS v4](https://tailwindcss.com/):** 
   This is how we style the website. Instead of writing separate CSS files, Tailwind allows us to use "utility classes" directly in our HTML/React code. For example, `text-center text-white bg-black` will center the text, make it white, and give it a black background.

3. **[shadcn/ui](https://ui.shadcn.com/):** 
   This is a collection of beautifully designed, accessible components (like Buttons, Dialogs, Forms) that we can copy and paste into our project. You will find these inside the `components/ui` folder.

4. **[Framer Motion](https://www.framer.com/motion/):** 
   This library handles the smooth animations you see when you scroll down the page, like text fading in or sliding up.

5. **[Lucide React](https://lucide.dev/):** 
   This provides the crisp, clean icons used throughout the site (like the menu icon or arrows).

---

## 📁 How the Code is Organized

When you open the project folder, you'll see a lot of files. Here are the most important ones you need to know about:

```text
hotel/
├── app/                  
│   ├── globals.css       # Global styles and Tailwind configuration
│   ├── layout.tsx        # The main wrapper for the website (contains fonts and metadata)
│   └── page.tsx          # 🌟 THE MAIN PAGE: This puts all the sections together!
│
├── components/           
│   ├── ui/               # Reusable "building block" components from shadcn/ui (e.g., button.tsx)
│   ├── hero.tsx          # The big welcome screen at the top
│   ├── navbar.tsx        # The navigation bar at the top
│   ├── rooms.tsx         # The section showing hotel rooms
│   └── (other sections like amenities, gallery, about, etc.)
│
├── public/               
│   └── images/           # Put your image files (jpg, png) here!
│
├── tailwind.config.ts    # Settings for Tailwind CSS (colors, fonts)
└── package.json          # A list of all the tools/libraries this project needs to run
```

---

## 🛠️ How to Run the Website on Your Computer

To see the website live on your own computer, you need to use the terminal (Command Prompt or Terminal app).

### Step 1: Install Node.js
If you don't have it yet, download and install [Node.js](https://nodejs.org/). This gives your computer the ability to run JavaScript projects.

### Step 2: Open the Terminal and Install Dependencies
Open your terminal, navigate to the `hotel` folder, and tell Node.js to download all the necessary tools listed in `package.json`:

```bash
# Make sure you are inside the 'hotel' folder in your terminal!
npm install
```

### Step 3: Start the Development Server
Once the installation is done, run this command:

```bash
npm run dev
```

### Step 4: View the Site
Open your web browser (like Chrome or Safari) and go to: **[http://localhost:3000](http://localhost:3000)**. You should now see the website running! As you change the code, the website will automatically update in your browser.

---

## ✍️ How to Make Changes (A Beginner's Guide)

Want to customize the website for your own hotel or project? Here is how to do it:

### 1. Changing the Main Text
Let's say you want to change the big welcome text on the homepage. 
1. Open the file `components/hero.tsx`.
2. Look for the `<h1>` tag around line 37 that says `"Experience Timeless Luxury"`.
3. Change it to whatever you want, save the file, and look at your browser!

### 2. Changing the Layout of the Page
If you want to re-order the sections (for example, put the "About" section above the "Rooms" section), you do that in the main page file.
1. Open `app/page.tsx`.
2. You will see a list of components like `<Hero />`, `<Rooms />`, `<Amenities />`.
3. Just move the lines of code up or down to change the order they appear on the website.

### 3. Changing Colors
The main colors of the site are controlled by Tailwind CSS. Look inside `app/globals.css`. You will see CSS variables (like `--primary`, `--background`) that define the exact color codes used across the whole site.

---

## 🚀 How to Put Your Website on the Internet

When you are ready to share your website with the world, the easiest (and free!) way is to use **Vercel**.

1. Create a free account at [Vercel.com](https://vercel.com/).
2. Upload your project code to a GitHub repository.
3. In Vercel, click "Add New Project" and select your GitHub repository.
4. Click "Deploy". Vercel will automatically build your site and give you a live URL link to share with your friends!
