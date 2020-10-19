const { Framework } = require('./Framework.model');

const svelte = new Framework({
  title: 'Svelte',
  votes: 0,
  id: 4
});

const setOfCrudOperations = async () => {
  // Create
  const createResult = await svelte.save();
  console.log(createResult);

  // Read
  let readResult = await Framework.findOne({ title: 'Svelte' });
  console.log(readResult);

  // Update
  let updateResult = await Framework.updateOne({ title: 'Svelte' }, { $set: { votes: 100 } });
  console.log(updateResult);

  // Delete
  const deleteResult = await Framework.deleteOne({ title: 'Svelte' });
  console.log(deleteResult);

  process.exit(0);
};

setOfCrudOperations().catch(e => console.error(e) || process.exit(1));
