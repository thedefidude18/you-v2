const fs = require('fs');
const path = require('path');
const gitcoinScraper = require('./websites/gitcoin');
const anotherSiteScraper = require('./websites/anotherSite');
const { saveToDatabase } = require('./utils/database');
const { logInfo, logError } = require('./utils/logger');

(async () => {
    try {
        logInfo("Starting scraping tasks...");

        // Scrape data from Gitcoin
        const gitcoinData = await gitcoinScraper();
        logInfo("Gitcoin scraping completed.");

        // Scrape data from another website (future-proof for multiple sites)
        const anotherSiteData = await anotherSiteScraper();
        logInfo("Another site scraping completed.");

        // Combine all data into one dataset
        const allProjects = [...gitcoinData, ...anotherSiteData];
        logInfo(`Total projects scraped: ${allProjects.length}`);

        // Save data to a JSON file (for testing) and database
        const outputPath = path.join(__dirname, 'output', 'projects.json');
        fs.writeFileSync(outputPath, JSON.stringify(allProjects, null, 2));
        logInfo(`Scraped data saved to ${outputPath}`);

        // Save to the database
        await saveToDatabase(allProjects);
        logInfo("Data successfully saved to the database.");

    } catch (error) {
        logError("Error during scraping tasks", error);
    }
})();
