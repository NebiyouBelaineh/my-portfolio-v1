"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { extractImage, extractText } from '@/utils/extractors';
import Link from 'next/link';

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  image: string;
  categories: string[];
}

const MyBlogs: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('/api/medium-feed'); // Call the API route
        const data = await response.json();
        console.log(data);

        const items = data.feed.rss.channel[0].item;

        // console.log("items:", items);


        const blogPosts = items.map((item: any) => ({
          title: item.title[0],
          link: item.link[0],
          pubDate: item.pubDate[0],
          categories: item.category ? item.category : [],
          content: item['content:encoded'] ? item['content:encoded'][0] : '',
        }));
        const blogPostModified = blogPosts.map((post: any) => ({
          ...post,
          contentSnippet: extractText(post.content),
          image: extractImage(post.content),
        }))
        // console.log("blogPosts:", blogPosts);

        setPosts(blogPostModified);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className='bg-base-300 mt-20 mb-10 md:px-10 rounded'>
      <div className="container mx-auto my-10 p-4">
        <h1 className="text-4xl font-bold mb-6 text-base-content">My Blogs</h1>
        {loading ? (
          <div className='flex items-center justify-center mx-auto'>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {posts.map((post, index) => (
              <div key={index} className="bg-neutral p-4 shadow-md rounded-md flex gap-4">
                <div className='w-1/3 rounded justify-center items-center'>
                  <Image src={post.image} width={300} height={300} className='max-w-full max-h-full' alt="blogImg" />
                </div>
                <div className='w-2/3'>
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <div className="flex flex-wrap gap-2 my-2 mb:2">
                    {post.categories.map((category, index) => {
                      return <span key={index} className="bg-base-300 text-sm px-2 py-1 rounded-full">{category} </span>
                    })
                  }
                  </div>
                  <p className="my-3 text-base-content">{new Date(post.pubDate).toDateString()}</p>
                  <Link href={post.link} target="_blank" rel="noopener noreferrer"
                    className="text-accent-content font-semibold bg-accent rounded px-2 py-2 hover:bg-info hover:scale-105 transition-colors">
                    Read Article
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBlogs;
