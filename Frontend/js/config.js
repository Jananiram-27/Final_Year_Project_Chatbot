// Configuration for API URLs - MindSpace
(function() {

    const isProduction = window.location.hostname !== 'localhost' &&
                         !window.location.hostname.includes('127.0.0.1');

    let backendUrl;
    let mlUrl;

    if (isProduction) {
        backendUrl = 'https://mindspace-9a0l.onrender.com';
        mlUrl = 'https://mindspace-9a0l.onrender.com/predict_emotion';
        console.log('Running in production mode');
    } else {
        // LOCAL DEVELOPMENT - ALIGNED WITH TERMINAL LOGS
        backendUrl = 'https://soulspace-backend-46bh.onrender.com';   // Matches your Node.js server log
        mlServiceUrl: 'https://soulspace-backend-46bh.onrender.com/api/mood/predict_emotion'; 
// (Replace with your actual route path);  // Matches your main.py log
        console.log('Running in development mode');
    }

    window.ENV_API_URL = backendUrl;

    window.ENV_CONFIG = {
        backendApiUrl: backendUrl,
        mlServiceUrl: mlUrl
    };

    console.log('Backend URL:', backendUrl);
    console.log('ML Service URL:', mlUrl);

})();