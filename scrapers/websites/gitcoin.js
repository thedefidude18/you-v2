const axios = require('axios');
const cheerio = require('cheerio');

const gitcoinScraper = async () => {
    const url = "https://explorer.gitcoin.co/#/projects";
    const projects = [];

    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        // Example: Adjust this logic based on the structure of Gitcoin's page
        $('.project-card').each((index, element) => {
            const name = $(element).find('.project-name').text().trim();
            const about = $(element).find('.project-description').text().trim();
            const ecosystem = $(element).find('.ecosystem-name').text().trim();
            const socials = $(element).find('.social-links a').map((_, el) => $(el).attr('href')).get();
            
            projects.push({ name, about, ecosystem, socials });
        });

        return projects;

    } catch (error) {
        console.error(`[ERROR] Failed to scrape Gitcoin: ${error.message}`);
        return [];
    }
};

module.exports = gitcoinScraper;
