import dotenv from 'dotenv';
import snoowrap from 'snoowrap';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const envPath = join(__dirname, '../../.env');

console.log("Before dotenv config");
dotenv.config({ path: envPath });
console.log("After dotenv config");


const reddit = new snoowrap({
    userAgent: process.env.REDDIT_USER_AGENT,
    clientId: process.env.REDDIT_CLIENT_ID,
    clientSecret: process.env.REDDIT_CLIENT_SECRET,
    username: process.env.REDDIT_USERNAME,
    password: process.env.REDDIT_PASSWORD
});

const getTopMemeForEachMonth = async (subredditName) => {
    const subreddit = await reddit.getSubreddit(subredditName);
    const topMemes = [];
  
    // Get current date
    const currentDate = new Date();
  
    // Loop through the last 12 months
    for (let i = 0; i < 12; i++) {
      // Calculate start and end timestamps for the current month
      const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
      const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - i + 1, 0, 23, 59, 59);
      const startTimestamp = Math.floor(startOfMonth.getTime() / 1000);
      const endTimestamp = Math.floor(endOfMonth.getTime() / 1000);
  
      // Fetch top meme for the current month
      const topMeme = await subreddit.getTop({ time: 'month', limit: 1, after: startTimestamp, before: endTimestamp });
  
      // Extract relevant information and push to topMemes array
      topMeme.forEach(submission => {
        topMemes.push({
          month: startOfMonth.toLocaleString('default', { month: 'long', year: 'numeric' }),
          title: submission.title,
          url: submission.url,
          score: submission.score,
          author: submission.author.name
        });
      });
    }
  
    return topMemes;
  };

getTopMemeForEachMonth('memes').then(async (topMemes) => {
    await fs.writeFile('top_memes.json', JSON.stringify(topMemes, null, 2));
    console.log("Top memes for each month saved to 'top_memes.json' file.");
}).catch(err => {
    console.error('Error fetching top memes:', err);
});
