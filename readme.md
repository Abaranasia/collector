# Collector App frontend (Clean Architecture + Typescript + React)
## Value-objects
    - Id
    - Title
    - Author
    - Category

## Entities
- **Collection**
    - name: Title
    - author: Author
    - category: Category
    - number of items (collected/uncollected) (calculated field)

- **item**
    - title: Title
    - subtitle: Title
    - length: string (time/pages)
    - creationDate: number (years)
    - collected: boolean
    - details?

## Use Cases

**Collection useCases**
- **CreateCollection**: defines author & category; presented as a form with a textfield and a selector of books/music. Requires Author
- **EditCollection**: allows editing author and category
- **ListCollections**: depending on category (books/albums); it should display author, category and number of items collected/uncollected?
- **RemoveCollection**: delete a collection and remove its items. Requires confirmation
- **CountItemsInCollection**
- **CountCollected**
- **CountUncollected**

**Item useCases**
- **AddNewItem**: creates new entry for a collection. Depending on the category: add title, subtitle, creationDate, length and details?
            - Creating a book implies that length are pages
            - Creating a book implies that length are min:sec
- **ListsCollectionItems**: upon selecting a collection, lists all items. It should list titles, length, creationDate and checkbox to set if collected or not. Include a button to AddNewItem
- **EditItem**: edit any field of an item
- **RemoveItem**: allow deleting an item
- **UpdateCollect**: change collect value for an existing item


### DATABASE COLLECTIONS
- **collection** = [author, category]
- **item** = [title, subtitle, length, creation_date, collected, category, details]
- **categories** = [books, music]

``` 
   categories = {
        book: 'book',
        music:  'music',
    }
```

### Nice to have / future improvements
    - series: attached to items inside a collection (subtitle)
    - images for items
    - images for collections
    - Authentication: supertokens?
    - charts: dognut for collected/uncollected, metrics based on totals, collections compared, rankings