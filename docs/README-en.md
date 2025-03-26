[English](https://github.com/Yukkurisiteikitai/Stylish_timer/blob/main/docs/README-en.md)
[Japanese](https://github.com/Yukkurisiteikitai/Stylish_timer/blob/main/docs/README-ja.md)

# Countdown + Particle Animation

This project is a web application that combines a countdown timer with a dynamic particle animation. When the countdown reaches zero, the particles explode outward, creating an engaging visual effect.  
It leverages **p5.js** for the interactive particle animation.

---

## 🛠️ Features

1. **Dynamic Countdown Timer**
   - Displays a real-time countdown to a specified target date and time.
   - Shows a message ("Time has arrived!") when the countdown ends.

2. **Particle Animation with p5.js**
   - Particles rotate in a circular motion during the countdown.
   - Once the countdown ends, the particles explode outward dynamically.

3. **Responsive Design**
   - Works well on both mobile devices and desktop browsers.

---

## 🖥️ Demo Overview

- **Before the Deadline**  
The countdown timer is displayed, and a rotating particle animation runs in the background.

- **After the Deadline**  
The timer disappears, and the particles explode outward in a stunning animation.

---

## 📁 Project Structure

```
project/
├── index.html         # Main HTML file
├── README.md          # Project documentation
└── assets/            # (Optional) Resources such as images or other assets
```

---

## 🚀 How to Run the Project

### Requirements
- A web browser (latest versions of Chrome, Firefox, etc.)
- Internet connection (for Google Fonts and p5.js CDN)

### Local Setup
1. **Clone or download the project**
   ```bash
   git clone https://github.com/your-repo/countdown-particle.git
   cd countdown-particle
   ```

2. **Open `index.html` in a browser**  
   Either double-click the file or start a local server with the following command:  
   ```bash
   python -m http.server
   ```
   Then, navigate to `http://localhost:8000` in your browser.

---

## 🧰 How It Works

### 1. **HTML**
The `index.html` file contains:
- A section for the countdown timer.
- A `<canvas>` element for the particle animation powered by p5.js.

### 2. **CSS**
- **Background Design:**  
  Uses `linear-gradient` to create a beautiful gradient background.
- **Font Styling:**  
  Incorporates the Montserrat font from Google Fonts for a modern look.

### 3. **JavaScript**
#### Countdown Logic
- Calculates the difference between the current time and the target date.
- Displays the time remaining in `days, hours, minutes, and seconds`.
- When the countdown reaches zero, it triggers the particle explosion.

#### Particle Animation (p5.js)
- **Normal State:**  
  Particles rotate in a circular motion.
- **Exploding State:**  
  The `explode()` method accelerates particles outward when the countdown ends.

---

## ⚙️ Customization

1. **Change the Target Date**
   Modify the following code in `index.html`:
   ```javascript
   const targetDate = new Date('2025-03-26T14:00:00');
   ```

2. **Adjust Particle Behavior**
   Customize the number of particles or their behavior in the `p5.js` section:
   ```javascript
   let totalParticles = 800; // Number of particles
   this.explodeSpeed = random(3, 8); // Speed of particle explosion
   ```

3. **Customize End-of-Countdown Behavior**
   Change the message or animation behavior when the countdown ends.

---

## 📜 License

This project is released under the MIT License. Feel free to use, modify, and distribute it, but please give proper credit to the author.

---

## ✨ Credits

- Developer: **Yukkurisiteikitai**
- Framework: [p5.js](https://p5js.org/)
- Font: [Google Fonts - Montserrat](https://fonts.google.com/specimen/Montserrat)

---

## 💡 Ideas for Future Extensions

- **Add Sound Effects:**  
  Play a sound effect when the particles explode for a more immersive experience.
- **Different Animations:**  
  Experiment with fireworks, light trails, or other creative effects.

Feel free to customize and expand this project to create your own exciting countdown timer! 🎉