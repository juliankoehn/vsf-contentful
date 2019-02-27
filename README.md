
# vsf-contentful

Frontend Store for vsf-contentful-api

### Requirements
` installed [vsf-contentful-api](https://github.com/juliankoehn/vsf-contentful-api)

### Installation

Edit vue-storefront-api/config/local.json
```json
"contentful": {
      "endpoint": "{YOUR-API-ENDPOINT}/ext/contentful-api",
      "defaultContentType": "{DEFAULTTYPE: eg. blogPost}"
    },
```

### Mixins

./components/Entries.js (All Entries)
./components/Entry.js (Single Page Entry)

### Todos
Add Pagination & Limit Support to allEntries.
