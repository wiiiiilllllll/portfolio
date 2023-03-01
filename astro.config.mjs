// astro.config.mjs

import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';

export default defineConfig({
  integrations: [
    NetlifyCMS({
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'main',
        },
        collections: [
            {
                name: 'posts',
                label: 'Case studies',
                folder: 'src/content/posts',
                create: true,
                delete: true,
                fields: [
                    { name: 'title', widget: 'string', label: 'Post title'},
                    { name: 'description', widget: 'string', label: 'Description'},
                    { name: 'client', widget: 'string', label: 'Client'},
                    { name: 'date', widget: 'date', label: 'Date'},
                    { name: 'tags', widget: 'list', label: 'Tags'},
                    { name: 'body', widget: 'markdown', label: 'Post Body'},
                    { name: 'image', widget: 'image', label: 'Image'},
                ]
            },
        ],
      },
    }),
  ],
});