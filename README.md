Soul Space - AI Based Mental Health Companion with Intelligent Voice Tone Analysis.
Soul Space is a comprehensive full-stack Python application designed to provide empathetic mental health support. It leverages Artificial Intelligence to understand user emotions through facial expressions and text sentiment, providing a safe space for users to track their well-being.

🚀 Key Features
Speech/Text Sentiment Analysis: Uses VADER and NLP to detect the user's current mood from their inputs.

Facial Emotion Recognition: A CNN (Convolutional Neural Network) model built with TensorFlow that detects emotions (Happy, Sad, Angry, etc.) in real-time.

AI Chatbot: An intelligent assistant that provides supportive responses based on detected emotions.

Mood Tracking: Visualizes mental health progress over time.

Secure Authentication: User data is protected using JWT (JSON Web Tokens).

Resource Library: Curated books, videos, and guides for mental wellness.

🛠️ Tech Stack
Frontend
HTML5, CSS3, JavaScript (Vanilla JS for performance and modularity)

Responsive Design for mobile and desktop access.

Backend
Node.js & Express.js: Handles API routing and server logic.

Python (Flask/Sub-process): Runs the Deep Learning models for emotion detection.

MongoDB Atlas: Cloud NoSQL database for storing user profiles, logs, and mood history.

AI & Data Science
TensorFlow & Keras: For the CNN model architecture.

VADER (Valence Aware Dictionary and Sentiment Reasoner): For rule-based sentiment analysis.

NLTK: For NLP tasks like Tokenization, Lemmatization, and Stop-word removal.

🧠 AI Process Flow
Preprocessing: Text is broken down into tokens (Tokenization) and cleaned.

Sentiment Scoring: VADER assigns intensity scores to words to determine if the user is feeling positive, negative, or neutral.

Emotion Classification: The CNN model processes facial frames, extracting features to categorize emotions with high accuracy.

Actionable Insights: Based on the scores, the system suggests resources or initiates an AI conversation.

🔐 Security & Storage
Authentication: Implemented JWT to ensure that session handling is stateless and secure.

Database: MongoDB stores sensitive user data in a scalable, document-oriented format, ensuring fast retrieval of mental health reports.


👥 Target Audience
This project is dedicated to individuals struggling with stress, anxiety, or emotional fluctuations, providing them with an accessible, AI-powered first line of emotional support.

Important Notes for your Interview:
VADER vs Simple NLP: Interview-la keta, "VADER rule-based and context-aware (especially for social media slang/emojis)" nu sollunga.

CNN Layering: Neenga model_file.h5 use panreenga, so Conv2D, MaxPooling, and Dense layers pathi basic-ah therinju vachukonga.

Tokenization: "Breaking sentences into individual words to analyze each word's emotional weight" nu explain pannunga.
