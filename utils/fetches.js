import Parser from 'rss-parser';

export async function fetchMediumBlogs() {
    const response = await fetch("https://medium.com/feed/@nebiyouseifu", {
        headers: { Accept: "application/rss+xml" },
    });

    if (!response.ok) {
        console.log(response)
        throw new Error("Failed to fetch RSS feed");
    }
    const rssText = await response.text();
    return rssText;
}

export const fetchRSSFeed = async () => {
    const parser = new Parser();
    const feed = await parser.parseURL('https://medium.com/feed/@nebiyouseifu'); // Replace with your Medium username
    const parsedPosts = feed.items.map((item) => ({
      title: item.title || '',
      link: item.link || '',
      pubDate: item.pubDate || '',
      contentSnippet: item.contentSnippet || '',
    }));
    return parsedPosts;
  };
