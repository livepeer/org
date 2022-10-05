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
          name: "image",
          label: "Image",
          type: "string",
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
      ],
    },
    {
      name: "videos",
      label: "Video Tools",
      path: "content/videos",
      format: "md",
      fields: [
        {
          name: "image",
          label: "Image",
          type: "string",
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
      ],
    },
    {
      name: "web3",
      label: "Web3",
      path: "content/web3",
      format: "md",
      fields: [
        {
          name: "image",
          label: "Image",
          type: "string",
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
      ],
    },
    {
      name: "staking",
      label: "Staking Platform",
      path: "content/staking",
      format: "md",
      fields: [
        {
          name: "image",
          label: "Image",
          type: "string",
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
      ],
    },
    {
      name: "exchange",
      label: "Exchange",
      path: "content/exchange",
      format: "md",
      fields: [
        {
          name: "image",
          label: "Image",
          type: "string",
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
          name: "telegram",
          label: "Telegram",
          type: "string",
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
            component: () => {
              return <div></div>;
            },
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
