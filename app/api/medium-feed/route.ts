import { NextResponse } from 'next/server';
import { parseStringPromise } from 'xml2js';

export async function GET() {
  try {
    const res = await fetch('https://medium.com/feed/@nebiyouseifu');
    const xmlData = await res.text();
    
    // Parse the XML into JSON
    const jsonData = await parseStringPromise(xmlData);

    // Return the JSON data
    return NextResponse.json({ feed: jsonData });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch or parse RSS feed' }, { status: 500 });
  }
}
