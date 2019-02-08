// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'mySchema',

  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      title: 'Projects',
      name: 'projects',
      type: 'document',
      fields: [
        {
          title: 'Image',
          name: 'image',
          type: 'file',
        },
        {
          title: 'What',
          name: 'what',
          type: 'string',
        },
        {
          title: 'Where',
          name: 'where',
          type: 'string',
        },
        {
          title: 'Who',
          name: 'who',
          type: 'string',
        },
        {
          title: 'Date',
          name: 'date',
          type: 'date',
        },
        {
          title: 'Details',
          name: 'details',
          type: 'text',
        },
        {
          title: 'Url',
          name: 'url',
          type: 'string',
        },
      ],
    },
  ]),
})
