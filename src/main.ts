import newman from 'newman'; // require Newman in your project

// call newman.run to pass `options` object and wait for callback
newman.run({
    //Export the collection from POSTMAN and store it in the ./collections_envs/ folder
    collection: require('./collections_envs/Regression testing.postman_collection.json'),
    //Export the environment from POSTMAN and store it in the ./collections_envs/ folder
    environment: require('./collections_envs/regression-stg.postman_environment.json'),
    //specify the folder name if you want to run a specific folder.
    //Leave it in '' to run the whole collection
    folder: '',
    reporters: ['htmlextra', 'junit', 'cli'],
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});