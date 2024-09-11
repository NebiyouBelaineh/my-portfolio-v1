import { htmlToText } from 'html-to-text';
import * as cheerio from 'cheerio';

// Function to extract and clean the text
export function extractText(content: string): string {
    // Convert HTML to plain text
    const plainText = htmlToText(content, {
        wordwrap: 130, // Adjust as needed
        ignoreImage: true, // Ignore images in the text
        ignoreHref: true, // Ignore links
    });

    // Trim text to 200 characters
    return plainText.substring(0, 200);
}



// Function to extract image URL
export function extractImage(content: string): string | null {
    const $ = cheerio.load(content); // Load HTML content
    const imageElement = $('img').first(); // Get the first image element
    return imageElement.attr('src') || null; // Extract the src attribute
}

