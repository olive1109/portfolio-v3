/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1728504295")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "file3787771756",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "image2",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "file2529427450",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "image3",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1728504295")

  // remove field
  collection.fields.removeById("file3787771756")

  // remove field
  collection.fields.removeById("file2529427450")

  return app.save(collection)
})
