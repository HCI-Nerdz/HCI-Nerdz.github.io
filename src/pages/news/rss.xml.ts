import { getCollection } from 'astro:content';

export async function GET() {
  const posts = (await getCollection('news', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  const site = 'https://hci-nerdz.github.io';

  function escapeXml(s: string) {
    return s
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;');
  }

  const items = posts
    .map((post) => {
      const link = `${site}/news/${post.slug}/`;
      return `    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${link}</link>
      <guid>${link}</guid>
      <pubDate>${post.data.pubDate.toUTCString()}</pubDate>
      <description>${escapeXml(post.data.description)}</description>
    </item>`;
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>HCI Nerdz News</title>
    <link>${site}/news/</link>
    <description>Discoverable surfaces, lower cognitive tax, and the evolution of HCI Nerdz.</description>
${items}
  </channel>
</rss>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
