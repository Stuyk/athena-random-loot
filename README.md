# Athena - Random Loot

Random Loot lets you specify a list of items into a generator and from the generator it will spit out a random item to give to your player when it is called.

# Installation

### Download

[Download the Archive](https://github.com/Stuyk/athena-random-loot/archive/refs/heads/master.zip)

### Move Folder

Extract the top level folder `athena-random-loot` into `src/core/plugins`.

Your final path should be `src/core/plugins/athena-random-loot`.

See _usage_ to see how to import and use this plugin.

### Verify Installation

Navigate to `src/core/plugins/athena-random-loot/index` and open the file.

Double check that the top-level imports are not underlined in **red**. If they are **red** then you installed this plugin wrong.

# Usage

```typescript
// Import may vary; VSCode should help you with importing
import RandomLoot from '../athena-random-loot/index';

// Create a new instance of the loot generator.
const looter = new RandomLoot([
    {
        item: {
            name: 'Trash',
            quantity: 1
        },
        weight: 50
    },
    {
        item: {
            name: 'Common',
            quantity: 1
        },
        weight: 25
    },
    {
        item: {
            name: 'Unique Item',
            quantity: 1
        },
        weight: 5
    },
    {
        item: {
            name: 'Rare Item',
            quantity: 1
        },
        weight: 2
    },
    {
        item: {
            name: 'Ultra Rare Item',
            quantity: 1
        },
        weight: 1
    }
]);

// This is now a cloned instance item.
// Add it to the player normally.
// This is how you pull a single item.
const item = looter.pull();

// This is how you pull a bunch of items.
const amountOfItems = 5;
const itemsPulled = [];
for (let i = 0; i < amountOfItems; i++) {
    itemsPulled.push(looter.pull());
}

/**
 * Example Output
    [
        { "name": "Trash", ... }, 
        { "name": "Trash", ...}, 
        { "name": "Common", ... }, 
        { "name": "Common", ... }, 
        { "name": "Unique Item", ... }
    ]
 *
 **/
console.log(itemsPulled);
```

# Uninstalling

Delete the folder in `src/core/plugins/athena-random-loot`.

Remove any imports that use random loot.
