// Configuration for API URLs - MindSpace
(function() {
    // Determine if we are running in production or development
    // Using simple boolean here for local testing
    const isProduction = window.location.hostname !== 'localhost' && 
                         !window.location.hostname.includes('127.0.0.1');
                         
    const environment = isProduction ? 'production' : 'development';
    
    let backendUrl;
    let mlUrl;
    
    if (isProduction) {
        backendUrl = 'https://soulspace-backend-46bh.onrender.com';
        mlUrl = 'https://soulspace-backend-46bh.onrender.com/api/mood/analyze';
        console.log('Running in production mode');
    } else {
        // LOCAL DEVELOPMENT URLs
        backendUrl = 'http://localhost:5000';
        mlUrl = 'http://localhost:5000/api/mood/analyze';
        console.log('Running in development mode');
    }

    // Set global variables for other files to use
    window.ENV_API_URL = backendUrl;
    window.ENV_CONFIG = {
        environment: environment,
        backendApiUrl: backendUrl,
        mlServiceUrl: mlUrl
    };
    
    console.log('Environment:', environment);
    console.log('Backend URL:', backendUrl);
    console.log('ML Service URL:', mlUrl);
})();