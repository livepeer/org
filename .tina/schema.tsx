import { defineSchema, defineConfig } from "tinacms";

export default defineSchema({
  collections: [
    {
      label: "Blog Posts",
      name: "posts",
      path: "content/posts",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Blog Post Body",
          name: "body",
          isBody: true,
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      name: "apps",
      label: "Apps",
      path: "content/apps",
      format: "md",
      fields: [
        {
          name: "publish",
          label: "Publish",
          type: "boolean",
          ui: {
            defaultValue: true,
          },
        },
        {
          name: "image",
          label: "Image",
          type: "image",
        },
        {
          name: "title",
          label: "Title",
          type: "string",
        },
        {
          name: "richtext",
          label: "Rich Text",
          type: "rich-text",
        },
        {
          name: "website",
          label: "Website",
          type: "string",
        },
        {
          name: "twitter",
          label: "Twitter",
          type: "string",
        },
        {
          name: "discord",
          label: "Discord",
          type: "string",
        },
        {
          name: "linkedin",
          label: "LinkedIn",
          type: "string",
        },
        {
          name: "telegram",
          label: "Telegram",
          type: "string",
        },
        {
          name: "createdAt",
          type: "datetime",
          label: "CreatedAt",
          ui: {
            defaultValue: new Date().toDateString(),
          },
        },
      ],
    },
    {
      name: "videos",
      label: "Video Tools",
      path: "content/videos",
      format: "md",
      fields: [
        {
          name: "publish",
          label: "Publish",
          type: "boolean",
          ui: {
            defaultValue: true,
          },
        },
        {
          name: "image",
          label: "Image",
          type: "image",
        },
        {
          name: "title",
          label: "Title",
          type: "string",
        },
        {
          name: "richtext",
          label: "Rich Text",
          type: "rich-text",
        },
        {
          name: "website",
          label: "Website",
          type: "string",
        },
        {
          name: "createdAt",
          type: "datetime",
          label: "CreatedAt",
          ui: {
            defaultValue: new Date().toDateString(),
          },
        },
      ],
    },
    {
      name: "web3",
      label: "Web3",
      path: "content/web3",
      format: "md",
      fields: [
        {
          name: "publish",
          label: "Publish",
          type: "boolean",
          ui: {
            defaultValue: true,
          },
        },
        {
          name: "image",
          label: "Image",
          type: "image",
        },
        {
          name: "title",
          label: "Title",
          type: "string",
        },
        {
          name: "richtext",
          label: "Rich Text",
          type: "rich-text",
        },
        {
          name: "website",
          label: "Website",
          type: "string",
        },
        {
          name: "createdAt",
          type: "datetime",
          label: "CreatedAt",
          ui: {
            defaultValue: new Date().toDateString(),
          },
        },
      ],
    },
    {
      name: "staking",
      label: "Staking Platform",
      path: "content/staking",
      format: "md",
      fields: [
        {
          name: "publish",
          label: "Publish",
          type: "boolean",
          ui: {
            defaultValue: true,
          },
        },
        {
          name: "image",
          label: "Image",
          type: "image",
        },
        {
          name: "title",
          label: "Title",
          type: "string",
        },
        {
          name: "richtext",
          label: "Rich Text",
          type: "rich-text",
        },
        {
          name: "website",
          label: "Website",
          type: "string",
        },
        {
          name: "twitter",
          label: "Twitter",
          type: "string",
        },
        {
          name: "discord",
          label: "Discord",
          type: "string",
        },
        {
          name: "linkedin",
          label: "LinkedIn",
          type: "string",
        },
        {
          name: "telegram",
          label: "Telegram",
          type: "string",
        },
        {
          name: "createdAt",
          type: "datetime",
          label: "CreatedAt",
          ui: {
            defaultValue: new Date().toDateString(),
          },
        },
      ],
    },
    {
      name: "exchange",
      label: "Exchange",
      path: "content/exchange",
      format: "md",
      fields: [
        {
          name: "publish",
          label: "Publish",
          type: "boolean",
          ui: {
            defaultValue: true,
          },
        },
        {
          name: "image",
          label: "Image",
          type: "image",
        },
        {
          name: "title",
          label: "Title",
          type: "string",
        },
        {
          name: "richtext",
          label: "Rich Text",
          type: "rich-text",
        },
        {
          name: "website",
          label: "Website",
          type: "string",
        },
        {
          name: "twitter",
          label: "Twitter",
          type: "string",
        },
        {
          name: "discord",
          label: "Discord",
          type: "string",
        },
        {
          name: "linkedin",
          label: "LinkedIn",
          type: "string",
        },
        {
          name: "telegram",
          label: "Telegram",
          type: "string",
        },
        {
          name: "createdAt",
          type: "datetime",
          label: "CreatedAt",
          ui: {
            defaultValue: new Date().toDateString(),
          },
        },
      ],
    },
    {
      name: "comunity",
      label: "Community",
      path: "content/community",
      format: "md",
      fields: [
        {
          name: "publish",
          label: "Publish",
          type: "boolean",
          ui: {
            defaultValue: true,
          },
        },
        {
          name: "image",
          label: "Image",
          type: "image",
        },
        {
          name: "title",
          label: "Title",
          type: "string",
        },
        {
          name: "richtext",
          label: "Rich Text",
          type: "rich-text",
        },
        {
          name: "website",
          label: "Website",
          type: "string",
        },
        {
          name: "createdAt",
          type: "datetime",
          label: "CreatedAt",
          ui: {
            defaultValue: new Date().toDateString(),
          },
        },
      ],
    },
    {
      label: "Pages",
      name: "pages",
      path: "content/pages",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "datetime",
          label: "Updated at",
          name: "updatedAt",
          ui: {
            defaultValue: new Date().toDateString(),
          },
        },
        {
          type: "rich-text",
          label: "Body",
          name: "body",
          isBody: true,
        },
      ],
    },
    {
      label: "Ecosystem",
      name: "ecosystem",
      path: "content/ecosystem",
      fields: [
        {
          name: "hero",
          label: "Hero",
          type: "object",
          fields: [
            {
              type: "string",
              label: "Hero Title (dark left side)",
              name: "hero_title_dark",
            },
            {
              type: "string",
              label: "Hero Title (green right side)",
              name: "hero_title_green",
            },
            {
              type: "string",
              label: "Hero Description",
              name: "hero_description",
            },
            {
              type: "string",
              label: "Hero Eyebrow",
              name: "hero_eyebrow",
            },
          ],
        },
        {
          name: "apps_section",
          label: "Apps Section",
          type: "object",
          fields: [
            {
              name: "title",
              label: "Apps Title",
              type: "string",
            },
            {
              name: "description",
              label: "Apps Description",
              type: "string",
            },
          ],
        },
        {
          name: "video_section",
          label: "Video Section",
          type: "object",
          fields: [
            {
              name: "title",
              label: "Video Title",
              type: "string",
            },
            {
              name: "description",
              label: "Video Description",
              type: "string",
            },
          ],
        },
        {
          name: "web3_section",
          label: "Web3 Section",
          type: "object",
          fields: [
            {
              name: "title",
              label: "Web3 Title",
              type: "string",
            },
            {
              name: "description",
              label: "Web3 Description",
              type: "string",
            },
          ],
        },
        {
          name: "stacking_section",
          label: "Stacking Section",
          type: "object",
          fields: [
            {
              name: "title",
              label: "Stacking Title",
              type: "string",
            },
            {
              name: "description",
              label: "Stacking Description",
              type: "string",
            },
          ],
        },
        {
          name: "exchanges_section",
          label: "Exchanges Section",
          type: "object",
          fields: [
            {
              name: "title",
              label: "Exchanges Title",
              type: "string",
            },
            {
              name: "description",
              label: "Exchanges Description",
              type: "string",
            },
          ],
        },
        {
          name: "community_section",
          label: "Community Section",
          type: "object",
          fields: [
            {
              name: "title",
              label: "Community Title",
              type: "string",
            },
            {
              name: "description",
              label: "Community Description",
              type: "string",
            },
          ],
        },
        {
          name: "footer_cta_description",
          label: "Footer CTA Description",
          type: "string",
        },
      ],
    },
  ],
});

// Your tina config
// ==============
const branch = "main";
// When working locally, hit our local filesystem.
// On a Vercel deployment, hit the Tina Cloud API
const apiURL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:4001/graphql"
    : `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`;

export const tinaConfig = defineConfig({
  apiURL,
  mediaStore: async () => {
    const pack = await import("next-tinacms-cloudinary");
    return pack.TinaCloudCloudinaryMediaStore;
  },
  formifyCallback: ({ formConfig, createForm, skip }) => {
    if (formConfig.id === "getPagesDocument") {
      const onSubmit = (values, form, callback) => {
        formConfig.onSubmit(
          { ...values, updatedAt: new Date().toDateString() },
          form,
          callback
        );
      };
      return createForm({ ...formConfig, onSubmit });
    }
    return createForm(formConfig);
  },
  cmsCallback: (cms) => {
    //  add your CMS callback code here (if you want)

    // The Route Mapper
    /**
     * 1. Import `tinacms` and `RouteMappingPlugin`
     **/
    import("tinacms").then(({ RouteMappingPlugin }) => {
      /**
       * 2. Define the `RouteMappingPlugin` see https://tina.io/docs/tinacms-context/#the-routemappingplugin for more details
       **/
      const RouteMapping = new RouteMappingPlugin((collection, document) => {
        return undefined;
      });
      /**
       * 3. Add the `RouteMappingPlugin` to the `cms`.
       **/
      cms.plugins.add(RouteMapping);
    });

    return cms;
  },
});
