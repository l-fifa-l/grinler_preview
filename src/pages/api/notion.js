// Create a server-side endpoint in Next.js to proxy the API request
// pages/api/notion.js
import { Client } from '@notionhq/client';

export default async function handler(req, res) {
  const notion = new Client({
    auth: 'secret_WHQIHJk0u9FdOBLOBjkErs5HqC3Qe9dYSODwwXKtvU5',
  });

  const databaseId = 'be05bc24853f41008ed8f8849da05e62';

  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      const response = await notion.pages.create({
        parent: { database_id: databaseId },
        properties: {
          email: {
            title: [
              {
                text: {
                  content: email,
                },
              },
            ],
          },
        },
      });
      console.log(response);
      console.log('Success! Entry added.');
      res.status(200).json({ message: 'Success! Entry added.' });
    } catch (error) {
      console.error(error.body);
      res.status(500).json({ message: 'Error adding entry.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
