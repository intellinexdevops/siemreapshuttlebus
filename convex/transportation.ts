import { mutation, query } from "./_generated/server";

export const generateUploadUrl = mutation({
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const get = query({
  args: {},
  handler: async (ctx) => {
    const transportations = await ctx.db.query("transportations").collect();
    return Promise.all(
      transportations.map(async (transportation) => ({
        ...transportation,
        url: await ctx.storage.getUrl(transportation.storageId),
      }))
    );
  },
});
