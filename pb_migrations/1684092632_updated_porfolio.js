migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("70myg3e7j555ofi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fjc4kgwm",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("70myg3e7j555ofi")

  // remove
  collection.schema.removeField("fjc4kgwm")

  return dao.saveCollection(collection)
})
