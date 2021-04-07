import functions from '../index';
// import{originalFlavors}from '../index';
let originalFlavors;
beforeEach(()=>{
    originalFlavors = ["Banana Nut Fudge",
    "Black Walnut",
    "Burgundy Cherry",
   "Butterscotch Ribbon",
    "Cherry Macaron",
    "Chocolate",
    "Chocolate Almond",
    "Chocolate Chip",
    "Chocolate Fudge",
    "Chocolate Mint",
    "Chocolate Ribbon",
    "Coffee",
    "Coffee Candy",
    "Date Nut",
    "Eggnog",
    "French Vanilla",
    "Green Mint Stick",
    "Lemon Crisp",
    "Lemon Custard",
    "Lemon Sherbet",
    "Maple Nut",
    "Orange Sherbet",
    "Peach",
    "Peppermint Fudge Ribbon",
    "Peppermint Stick",
    "Pineapple Sherbet",
    "Raspberry Sherbet",
    "Rocky Road",
    "Strawberry",
    "Vanilla",
    "Vanilla Burnt Almond"];
})

describe('fooFunction', ()=>{
    it('foo returns foo', ()=>{
        expect(functions.foo()).toBe('bar');
    })
});
describe('copy', ()=>{
    it('copy returns array', ()=>{
        expect(functions.copy(originalFlavors)).toEqual(originalFlavors);
    })
    it('copy returns array', ()=>{
        expect(functions.copy([1,2,3,4])).toEqual([1,2,3,4]);
    })
});
describe('is31Flavors', ()=>{
    it('is31Flavours returns true', ()=>{
        expect(functions.is31Flavors(originalFlavors)).toBe(true);
    })
    it('is31Flavours returns true', ()=>{
        expect(functions.is31Flavors([1,2,3,4])).toBe(false);
    })
});
describe('addFlavor', ()=>{
    it('addFlavor returns array with new flavor at beginning', ()=>{
        expect(functions.addFlavor(originalFlavors, 'Rainbow Sherbert')).toEqual([
            'Rainbow Sherbert',
            'Banana Nut Fudge',
            'Black Walnut',
            'Burgundy Cherry',
            'Butterscotch Ribbon',
            'Cherry Macaron',
            'Chocolate',
            'Chocolate Almond',
            'Chocolate Chip',
            'Chocolate Fudge',
            'Chocolate Mint',
            'Chocolate Ribbon',
            'Coffee',
            'Coffee Candy',
            'Date Nut',
            'Eggnog',
            'French Vanilla',
            'Green Mint Stick',
            'Lemon Crisp',
            'Lemon Custard',
            'Lemon Sherbet',
            'Maple Nut',
            'Orange Sherbet',
            'Peach',
            'Peppermint Fudge Ribbon',
            'Peppermint Stick',
            'Pineapple Sherbet',
            'Raspberry Sherbet',
            'Rocky Road',
            'Strawberry',
            'Vanilla',
            'Vanilla Burnt Almond'
          ]);
    })
    it('addFlavor returns array with new flavor at beginning', ()=>{
        expect(functions.addFlavor([1,2,3,4], 'Rainbow Sherbert')).toEqual(['Rainbow Sherbert', 1,2,3,4]);
    })
});
describe('removeLastFlavor', ()=>{
    it('removeLastFlavor returns array with last flavor removed', ()=>{
        expect(functions.removeLastFlavor(originalFlavors)).toEqual([
            'Banana Nut Fudge',
            'Black Walnut',
            'Burgundy Cherry',
            'Butterscotch Ribbon',
            'Cherry Macaron',
            'Chocolate',
            'Chocolate Almond',
            'Chocolate Chip',
            'Chocolate Fudge',
            'Chocolate Mint',
            'Chocolate Ribbon',
            'Coffee',
            'Coffee Candy',
            'Date Nut',
            'Eggnog',
            'French Vanilla',
            'Green Mint Stick',
            'Lemon Crisp',
            'Lemon Custard',
            'Lemon Sherbet',
            'Maple Nut',
            'Orange Sherbet',
            'Peach',
            'Peppermint Fudge Ribbon',
            'Peppermint Stick',
            'Pineapple Sherbet',
            'Raspberry Sherbet',
            'Rocky Road',
            'Strawberry',
            'Vanilla',
          ]);
    })
    it('removeLastFlavor returns array with last flavor removed', ()=>{
        expect(functions.removeLastFlavor([1,2,3,4])).toEqual([1,2,3]);
    })
});
describe('getFlavorByIndex', ()=>{
    it('getFlavorByIndex returns string at index', ()=>{
        expect(functions.getFlavorByIndex(originalFlavors, 2)).toBe("Burgundy Cherry");
    })
    it('getFlavorByIndex returns string at index', ()=>{
        expect(functions.getFlavorByIndex([1,2,3,4], 2)).toBe(3);
    })
});

describe('removeFlavorByName', ()=>{
    it('removeFlavorByName returns array with specified removed', ()=>{
        expect(functions.removeFlavorByName(originalFlavors, 'Vanilla')).toEqual([
            'Banana Nut Fudge',
            'Black Walnut',
            'Burgundy Cherry',
            'Butterscotch Ribbon',
            'Cherry Macaron',
            'Chocolate',
            'Chocolate Almond',
            'Chocolate Chip',
            'Chocolate Fudge',
            'Chocolate Mint',
            'Chocolate Ribbon',
            'Coffee',
            'Coffee Candy',
            'Date Nut',
            'Eggnog',
            'French Vanilla',
            'Green Mint Stick',
            'Lemon Crisp',
            'Lemon Custard',
            'Lemon Sherbet',
            'Maple Nut',
            'Orange Sherbet',
            'Peach',
            'Peppermint Fudge Ribbon',
            'Peppermint Stick',
            'Pineapple Sherbet',
            'Raspberry Sherbet',
            'Rocky Road',
            'Strawberry',
            "Vanilla Burnt Almond"
          ]);
    })
    it('removeFlavorByName returns array with specified removed', ()=>{
        expect(functions.removeFlavorByName(originalFlavors, 'Peach')).toEqual([
            'Banana Nut Fudge',
            'Black Walnut',
            'Burgundy Cherry',
            'Butterscotch Ribbon',
            'Cherry Macaron',
            'Chocolate',
            'Chocolate Almond',
            'Chocolate Chip',
            'Chocolate Fudge',
            'Chocolate Mint',
            'Chocolate Ribbon',
            'Coffee',
            'Coffee Candy',
            'Date Nut',
            'Eggnog',
            'French Vanilla',
            'Green Mint Stick',
            'Lemon Crisp',
            'Lemon Custard',
            'Lemon Sherbet',
            'Maple Nut',
            'Orange Sherbet',
            'Peppermint Fudge Ribbon',
            'Peppermint Stick',
            'Pineapple Sherbet',
            'Raspberry Sherbet',
            'Rocky Road',
            'Strawberry',
            'Vanilla',
            "Vanilla Burnt Almond"
          ]);
    })
});

describe('filterByWord', ()=>{
    it('filterByWord returns a new array items containing word', ()=>{
        expect(functions.filterByWord(originalFlavors, 'Chocolate')).toEqual([
            'Chocolate',
            'Chocolate Almond',
            'Chocolate Chip',
            'Chocolate Fudge',
            'Chocolate Mint',
            'Chocolate Ribbon'
          ]);
    })
    it('filterByWord returns a new array items containing word', ()=>{
        expect(functions.filterByWord(originalFlavors, 'Lemon')).toEqual([
            'Lemon Crisp',
            'Lemon Custard',
            'Lemon Sherbet',
          ]);
    })
});