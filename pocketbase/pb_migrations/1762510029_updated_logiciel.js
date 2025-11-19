/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1813921413")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number1716930793",
    "max": null,
    "min": null,
    "name": "color",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1813921413")

  // remove field
  collection.fields.removeById("number1716930793")

  return app.save(collection)
})
