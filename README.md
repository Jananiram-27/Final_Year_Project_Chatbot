# 🌟 Soul Space: AI-Powered Mental Health Companion

Welcome to **Soul Space**! This isn't just a standard chatbot—it's a multi-modal AI companion that genuinely tries to understand how you feel. By combining what you type, the tone of your voice, and your facial expressions, Soul Space acts as a secure, personal space for mental wellness tracking.

## ✨ The Magic Inside (Key Features)

### 📸 Real-Time Facial Emotion Detection
We don't just read your words; we look at your expressions! 
* **How it works:** When you open the mood tracker, the app securely accesses your webcam. It uses **OpenCV (Haar Cascade)** to instantly spot your face in the video frame. 
* **The AI Brain:** The cropped face is then sent to our custom-trained **Convolutional Neural Network (CNN)** built with **TensorFlow & Keras**. In milliseconds, it predicts your exact emotional state (Happy, Sad, Neutral, etc.) and logs it for you.

### 🎙️ Voice Tone & Text Sentiment Analysis
Sometimes it's not *what* you say, but *how* you say it.
* Uses the browser's native **Web Speech & Audio APIs** to capture your voice instantly.
* Analyzes your spoken and written text using **Python NLTK (VADER Engine)** to give a precise sentiment score (Positive or Negative).

### 📊 Interactive Wellness Dashboard
* Your emotional history shouldn't be boring text. We use **Chart.js** to generate fluid, colorful, and interactive timeline graphs so you can visualize your mood shifts over days and weeks.

### 🔒 Privacy First (Stateless Security)
* Mental health data is sensitive. That's why we use **JWT (JSON Web Tokens)** for secure, stateless user authentication. Your data is safely stored in MongoDB Atlas and only accessible by you.

---

## 🛠️ The Tech Stack

Soul Space is built using a modern, decoupled architecture:

* **Frontend (The Face):** HTML5, CSS3, Vanilla JS (ES6+) — *Clean, responsive, and fast.*
* **Backend Proxy (The Traffic Cop):** Node.js — *Handles heavy traffic and data streaming smoothly.*
* **ML Engine (The Brain):** Python, TensorFlow, OpenCV, NLTK — *Runs complex AI calculations on a dedicated local port (5055).*
* **Database (The Memory):** MongoDB Atlas.

---

## 🚀 How the System Flows (End-to-End)

Ever wondered what happens when you click "Check Mood"? Here is the simple 5-step journey:

1. **Secure Login:** You log in, and the app verifies your identity using a secure JWT token.
2. **Hardware Trigger:** The app seamlessly opens your mic and camera without freezing your screen.
3. **Data Streaming:** As you speak or capture an image, the Node.js backend quickly grabs this dense data and forwards it to the Python AI service.
4. **AI Processing:** * *For Face:* The CNN model (`model_file.h5`) analyzes your facial grid.
   * *For Text:* VADER calculates the sentiment polarity.
5. **Instant Update:** The AI sends the results back. Your UI instantly flashes the detected emotion and the Chart.js dashboard updates in real-time—**zero page reloads required!**
