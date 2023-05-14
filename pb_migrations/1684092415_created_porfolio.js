migrate((db) => {
  const collection = new Collection({
    "id": "70myg3e7j555ofi",
    "created": "2023-05-14 19:26:55.122Z",
    "updated": "2023-05-14 19:26:55.122Z",
    "name": "porfolio",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ev6fjdr8",
        "name": "portfolio",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("70myg3e7j555ofi");

  return dao.deleteCollection(collection);
})
