const { forwardTo } = require("prisma-binding");

const Query = {
  // This is being used because there's not auth/filtering going on
  // and the Prisma db can just return whatever it is returning
  // instead of having to write our own resolver for it.
  items: forwardTo("db"),
  item: forwardTo("db")
  // async items(parent, args, ctx, info) {
  //   const items = await ctx.db.query.items();
  //   return items;
  // }
};

module.exports = Query;
