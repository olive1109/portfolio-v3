/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1813921413")

  // remove field
  collection.fields.removeById("text139652955")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1813921413")

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text139652955",
    "max": 1,
    "min": 0,
    "name": "lettre",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
