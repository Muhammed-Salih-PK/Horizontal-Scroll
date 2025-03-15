# 🚀 React Horizontal Scroll with GSAP

## 📌 Project Overview
This project implements a **smooth horizontal scrolling** effect using **React, GSAP, and ScrollTrigger**. As the user scrolls vertically, the content moves **horizontally**, creating a seamless scrolling experience.

## 🛠️ Technologies Used
- **React** (Frontend Framework)
- **GSAP** (Animation Library)
- **GSAP ScrollTrigger** (Scroll-based Animations)
- **Tailwind CSS** (Styling)

## 🎯 Features
✅ Smooth **horizontal scrolling** effect
✅ **GSAP ScrollTrigger** for scroll-based animations
✅ **Responsive design** for different screen sizes
✅ **Styled using Tailwind CSS**
✅ **Performance optimized** using `useRef` and `useLayoutEffect`

## 📂 Folder Structure
```
📦 react-horizontal-scroll-gsap
├── 📂 src
│   ├── 📄 App.js          # Main component
│   ├── 📄 HorizontalScroll.js  # Horizontal scroll animation
│   ├── 📄 index.js        # React entry point
│   ├── 📄 styles.css      # Tailwind CSS (optional)
├── 📄 package.json        # Project dependencies
├── 📄 README.md           # Project documentation
```

## 🚀 Getting Started
### 1️⃣ Install Dependencies
Run the following command to install required packages:
```bash
npm install
```

### 2️⃣ Start the Development Server
Run the project locally:
```bash
npm start
```

### 3️⃣ View the Project
Open **http://localhost:3000/** in your browser to see the horizontal scrolling in action! 🎉

## ⚡ How It Works
1. The **`HorizontalScroll.js`** component creates a horizontally scrollable section.
2. **GSAP's `to()` method** animates the `x` position of the content.
3. **ScrollTrigger** pins the section and synchronizes scroll movement.
4. **Tailwind CSS** is used for styling and layout.

## 📸 Screenshot
![Horizontal Scroll Demo](https://via.placeholder.com/800x400?text=Demo+Image)

## 🛠️ Customization
### 🖌️ Change Section Colors
Edit `HorizontalScroll.js`:
```jsx
<section className="bg-blue-600">...</section>
<section className="bg-red-600">...</section>
```
Replace with any **Tailwind CSS color classes**.

### 🔄 Adjust Scroll Speed
Modify `scrub` value in `HorizontalScroll.js`:
```js
scrollTrigger: { scrub: 1 } // Increase for smoother effect
```

## 🤝 Contributing
Feel free to **fork** this repo and improve the project! Pull requests are welcome. 🚀

## 📜 License
This project is licensed under the **MIT License**.

---
💡 **Have questions?** Feel free to ask! Happy coding! 😃

