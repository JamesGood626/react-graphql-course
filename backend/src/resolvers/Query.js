const { forwardTo } = require("prisma-binding");

const Query = {
  // This is being used because there's not auth/filtering going on
  // and the Prisma db can just return whatever it is returning
  // instead of having to write our own resolver for it.
  items: forwardTo("db"),
  item: forwardTo("db"),
  itemsConnection: forwardTo("db"),
  me(parent, args, ctx, info) {
    // check if there is a current user ID
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId }
      },
      info
    );
  }
};

module.exports = Query;
