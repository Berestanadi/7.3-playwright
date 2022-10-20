const config = {
    use: {
      browserName: 'chromium',
      headless: true,
      launchOptions: {
        slowMo: 5000,
      },
      viewport: { width: 1280, height: 720 },
      ignoreHTTPSErrors: true,
      video: 'on-first-retry',
    },
  };
  
  module.exports = config;