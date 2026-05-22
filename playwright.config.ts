import { defineConfig } from '@playwright/test'; 

export default defineConfig({ 
    use: { headless: false, // run tests with a visible browser 
    screenshot: 'only-on-failure', // take screenshots when errors occur 
    video: 'retain-on-failure', // save videos only when errors occur 
    }, 
});
