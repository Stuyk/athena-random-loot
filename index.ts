import { Item } from '../../../shared/interfaces/Item';
import { deepCloneObject } from '../../../shared/utility/deepCopy';

interface ILootItem {
    /**
     * Item to Use
     * @type {Item}
     * @memberof ILootItem
     */
    item: Item;

    /**
     * How much more often should this item come up in the loot table?
     * There is no limitation. Higher values is more often.
     * @type {number}
     * @memberof ILootItem
     */
    weight: number;
}

export default class RandomLoot {
    private lootItems: Array<ILootItem>;
    private totalWeight: number = 0;

    /**
     * Creates a Random Loot Class.
     * After specifying the lootable items you can 'pull' an item out.
     * The item is never pulled out it just gives you a random item.
     * @param {Array<ILootItem>} items
     * @memberof RandomLoot
     */
    constructor(items: Array<ILootItem>) {
        for (let i = 0; i < items.length; i++) {
            items[i].item = deepCloneObject(items[i].item);
            this.totalWeight += items[i].weight;
        }

        this.lootItems = items;
    }

    /**
     * Used to get a random loot item.
     * The item is already 'deep cloned' so do not reclone.
     * @memberof RandomLoot
     */
    pull(): Item {
        let option = 0;
        let choice = Math.floor(Math.random() * this.totalWeight + 1);
        let weight = 0;

        for (let i = 0; i < this.lootItems.length; i++) {
            const lootItem = this.lootItems[i];
            weight += lootItem.weight;

            if (choice >= weight) {
                continue;
            }

            option = i;
            break;
        }

        return this.lootItems[option].item;
    }
}
