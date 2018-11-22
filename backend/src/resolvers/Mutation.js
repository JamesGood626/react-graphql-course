const mutations = {
  createItem(parent, args, ctx, info) {
    // TODO: Check if they are logged in.

    // Passing in the info argument as the second
    // argument to the db.mutation call informs our
    // Prisma GraphQL Server as to what the return types
    // should be from this operation.
    const item = ctx.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );
    console.log(item);
    return item;
  }
};

module.exports = mutations;
