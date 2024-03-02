// config.js
const devConfig = {
    backendURL: "http://localhost:3000",
  };

  const prodConfig = {
    backendURL: "https://supple-backend-service-sbzxfh2qda-ue.a.run.app",
  };

  // Check if the current URL is your GitHub Pages URL
  const isProduction = window.location.hostname === 'kevinjing11.github.io';

  const config = isProduction ? prodConfig : devConfig;

  export default config;