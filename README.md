# Mongoose(s)

Live Website: [https://mongoose-s.onrender.com/](https://mongoose-s.onrender.com/)

MongoDB is awesome. Mongoose makes it even cooler. But realizing mongoose pluralizes your **model** name and infers a **collection** can be pretty damn confusing.

This small web-app allows you to inspect how mongoose will pluralize your model name if you don't specify a literal collection name. No more guessing. And no more searching for the plural of words in google. It uses mongoose's own package [mongoose-legacy-pluralize](https://www.npmjs.com/package/mongoose-legacy-pluralize) so the results should be consistent with mongoose's implementation.

## What are you talking about?

From the Mongoose documentation:

> ### Compiling your first model
>
> When you call mongoose.model() on a schema, Mongoose compiles a model for you.
>
> ``` javascript
> const schema = new mongoose.Schema({ name: 'string', size: 'string' });
> const Tank = mongoose.model('Tank', schema);
> ```
>
> The first argument is the singular name of the collection your model is for. **Mongoose automatically looks for the plural, lowercased version of your model name.** Thus, for the example above, the model Tank is for the tanks collection in the database.

If like me you skipped right over that (bolded) note and spent over an hour trying to understand why `mongoose.model('people', schema)` would not connect to your *people* collection, this might come in handy.

## That's confusing. Is there any way to avoid it?

Yes. Mongoose only attempts to infer the collection name if you don't provide one yourself. Take a look at:

- [Specify collection on model creation](https://mongoosejs.com/docs/api.html#connection_Connection-model)
- [Specify collection on Schema instantiation](https://mongoosejs.com/docs/guide.html#collection)

You can also provide mongoose with your own pluralization function to generate collection names. See [this](https://mongoosejs.com/docs/api.html#mongoose_Mongoose-pluralize).

*Information last updated on Jan 05 2021, refering to mongoose version 5.11.10*