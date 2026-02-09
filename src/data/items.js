// src/data/items.js

export const SHOP_ITEMS = {
  outfits: [
    // FREE HAIR (always available)
    { id: 'hair_brown', name: 'Brown Hair', price: 0, type: 'hair', color: '#4a3728', free: true },
    { id: 'hair_black', name: 'Black Hair', price: 0, type: 'hair', color: '#1a1a1a', free: true },
    { id: 'hair_blonde', name: 'Blonde Hair', price: 0, type: 'hair', color: '#f1c40f', free: true },
    { id: 'hair_red', name: 'Red Hair', price: 0, type: 'hair', color: '#e74c3c', free: true },
    { id: 'hair_blue', name: 'Blue Hair', price: 0, type: 'hair', color: '#3498db', free: true },
    { id: 'hair_pink', name: 'Pink Hair', price: 0, type: 'hair', color: '#e91e63', free: true },
    // FREE FACES (always available)
    { id: 'eyes_normal', name: 'Normal Eyes', price: 0, type: 'face', color: '#000', free: true },
    { id: 'eyes_happy', name: 'Happy Eyes', price: 0, type: 'face', color: '#000', free: true },
    { id: 'eyes_cool', name: 'Cool Eyes', price: 0, type: 'face', color: '#000', free: true },
    // FREE SHIRTS (always available)
    { id: 'shirt_white', name: 'White Shirt', price: 0, type: 'shirt', color: '#ecf0f1', free: true },
    { id: 'shirt_gray', name: 'Gray Shirt', price: 0, type: 'shirt', color: '#95a5a6', free: true },
    // FREE PANTS (always available)
    { id: 'pants_gray', name: 'Gray Pants', price: 0, type: 'pants', color: '#7f8c8d', free: true },
    { id: 'pants_khaki', name: 'Khaki Pants', price: 0, type: 'pants', color: '#d4ac6e', free: true },
    // FREE SHOES (always available)
    { id: 'shoes_black', name: 'Black Shoes', price: 0, type: 'shoes', color: '#1a1a1a', free: true },
    { id: 'shoes_brown', name: 'Brown Shoes', price: 0, type: 'shoes', color: '#8B4513', free: true },
    // PAID HEAD ITEMS
    { id: 'crown', name: 'Golden Crown', price: 1000000, type: 'head', color: '#FFD700' },
    { id: 'tophat', name: 'Top Hat', price: 400000, type: 'head', color: '#1a1a1a' },
    { id: 'cap', name: 'Baseball Cap', price: 160000, type: 'head', color: '#e74c3c' },
    { id: 'helmet', name: 'Viking Helmet', price: 600000, type: 'head', color: '#8B4513' },
    { id: 'wizardhat', name: 'Wizard Hat', price: 800000, type: 'head', color: '#9b59b6' },
    // PAID ACCESSORIES
    { id: 'glasses', name: 'Cool Glasses', price: 300000, type: 'accessory', color: '#1a1a1a' },
    { id: 'sunglasses', name: 'Sunglasses', price: 200000, type: 'accessory', color: '#2c3e50' },
    { id: 'monocle', name: 'Monocle', price: 500000, type: 'accessory', color: '#f1c40f' },
    // PAID BACK ITEMS
    { id: 'cape', name: 'Hero Cape', price: 2000000, type: 'back', color: '#e74c3c' },
    { id: 'wings', name: 'Angel Wings', price: 10000000, type: 'back', color: '#ecf0f1' },
    // PAID NECK ITEMS
    { id: 'scarf', name: 'Cozy Scarf', price: 200000, type: 'neck', color: '#3498db' },
    { id: 'bowtie', name: 'Fancy Bowtie', price: 160000, type: 'neck', color: '#e74c3c' },
    { id: 'medal', name: 'Gold Medal', price: 3000000, type: 'neck', color: '#f1c40f' },
    // PAID SHIRTS
    { id: 'shirt_red', name: 'Red Shirt', price: 100000, type: 'shirt', color: '#e74c3c' },
    { id: 'shirt_blue', name: 'Blue Shirt', price: 100000, type: 'shirt', color: '#3498db' },
    { id: 'shirt_green', name: 'Green Shirt', price: 100000, type: 'shirt', color: '#2ecc71' },
    { id: 'shirt_purple', name: 'Purple Shirt', price: 150000, type: 'shirt', color: '#9b59b6' },
    { id: 'shirt_gold', name: 'Golden Shirt', price: 500000, type: 'shirt', color: '#f1c40f' },
    // PAID PANTS
    { id: 'pants_blue', name: 'Blue Pants', price: 80000, type: 'pants', color: '#2980b9' },
    { id: 'pants_black', name: 'Black Pants', price: 80000, type: 'pants', color: '#2c3e50' },
    { id: 'pants_brown', name: 'Brown Pants', price: 80000, type: 'pants', color: '#8B4513' },
    // PAID SHOES
    { id: 'shoes_red', name: 'Red Shoes', price: 60000, type: 'shoes', color: '#c0392b' },
    { id: 'shoes_white', name: 'White Sneakers', price: 60000, type: 'shoes', color: '#ecf0f1' },
    { id: 'shoes_gold', name: 'Golden Shoes', price: 400000, type: 'shoes', color: '#f1c40f' },
  ],
  weapons: [
    { id: 'sword', name: 'Magic Sword', price: 800000, color: '#95a5a6' },
    { id: 'shield', name: 'Knight Shield', price: 600000, color: '#8B4513' },
    { id: 'bow', name: 'Elven Bow', price: 1000000, color: '#8B4513' },
    { id: 'wand', name: 'Wizard Wand', price: 1200000, color: '#9b59b6' },
    { id: 'trident', name: 'Sea Trident', price: 2400000, color: '#3498db' },
    { id: 'hammer', name: 'Thunder Hammer', price: 3000000, color: '#7f8c8d' },
    { id: 'staff', name: 'Power Staff', price: 4000000, color: '#f1c40f' },
    { id: 'axe', name: 'Battle Axe', price: 1500000, color: '#7f8c8d' },
    { id: 'dagger', name: 'Shadow Dagger', price: 500000, color: '#2c3e50' },
  ],
  pets: [
    { id: 'dog', name: 'Loyal Dog', price: 400000, color: '#D2691E', sounds: ['Woof!', 'Bark bark!', 'Arf!'], thoughts: ['I love my human!', 'Is that food?', 'Walk time?', 'Best day ever!'] },
    { id: 'cat', name: 'Cute Cat', price: 400000, color: '#FFA500', sounds: ['Meow!', 'Purrrr', 'Mrrp?'], thoughts: ['I own this place', 'Nap time...', 'Pet me NOW', 'Ignore the human'] },
    { id: 'bunny', name: 'Fluffy Bunny', price: 300000, color: '#ecf0f1', sounds: ['*nose twitch*', '*hop hop*', '*munch*'], thoughts: ['Carrots!', 'So fluffy', 'Hop hop hop!', 'Ears up!'] },
    { id: 'dragon', name: 'Baby Dragon', price: 15000000, color: '#e74c3c', sounds: ['*tiny roar*', 'Rawr!', '*smoke puff*'], thoughts: ['Fire is fun!', 'I\'m not THAT small', 'Treasure?', 'Fear me!'] },
    { id: 'unicorn', name: 'Magic Unicorn', price: 20000000, color: '#ecf0f1', sounds: ['*magical neigh*', '*sparkles*', '*whinny*'], thoughts: ['So majestic', 'Rainbow time!', 'Magic is real', 'Glitter!'] },
    { id: 'phoenix', name: 'Phoenix', price: 30000000, color: '#e67e22', sounds: ['*beautiful cry*', '*flames crackle*', '*soaring sound*'], thoughts: ['Rise from ashes!', 'So warm~', 'Eternal flame', 'Rebirth!'] },
    { id: 'owl', name: 'Wise Owl', price: 1000000, color: '#8B4513', sounds: ['Hoo hoo!', 'Who?', '*wise hoot*'], thoughts: ['I know things', 'Night time!', 'Books are good', 'Wisdom!'] },
    { id: 'turtle', name: 'Slow Turtle', price: 200000, color: '#2ecc71', sounds: ['...', '*slow blink*', '*munch*'], thoughts: ['Slow and steady', 'Shell is cozy', 'Lettuce?', 'No rush...'] },
  ],
  furniture: [
    { id: 'bed', name: 'Cozy Bed', price: 1600000, canSit: true },
    { id: 'couch', name: 'Comfy Couch', price: 2000000, canSit: true },
    { id: 'chair', name: 'Gaming Chair', price: 800000, canSit: true },
    { id: 'tv', name: 'Big Screen TV', price: 4000000 },
    { id: 'computer', name: 'Gaming PC', price: 6000000 },
    { id: 'bookshelf', name: 'Bookshelf', price: 1200000 },
    { id: 'piano', name: 'Grand Piano', price: 15000000 },
    { id: 'aquarium', name: 'Fish Tank', price: 3600000 },
    { id: 'fireplace', name: 'Fireplace', price: 5000000 },
    { id: 'trophy', name: 'Trophy Case', price: 7000000 },
    { id: 'plant', name: 'House Plant', price: 200000 },
    { id: 'lamp', name: 'Magic Lamp', price: 400000 },
    { id: 'turtle_fountain', name: 'Giant Turtle Fountain', price: 1 },
  ],
  rooms: [
    { id: 'bedroom', name: 'Bedroom', price: 15000000 },
    { id: 'gaming', name: 'Gaming Room', price: 20000000 },
    { id: 'kitchen', name: 'Kitchen', price: 16000000 },
    { id: 'library', name: 'Library', price: 24000000 },
    { id: 'garden', name: 'Garden', price: 30000000 },
    { id: 'pool', name: 'Pool Room', price: 50000000 },
  ],
  wallpapers: [
    { id: 'wall_blue', name: 'Blue Wallpaper', price: 100000, color: '#3498db' },
    { id: 'wall_pink', name: 'Pink Wallpaper', price: 100000, color: '#e91e63' },
    { id: 'wall_green', name: 'Green Wallpaper', price: 100000, color: '#2ecc71' },
    { id: 'wall_purple', name: 'Purple Wallpaper', price: 150000, color: '#9b59b6' },
    { id: 'wall_gold', name: 'Gold Wallpaper', price: 500000, color: '#f1c40f' },
    { id: 'wall_rainbow', name: 'Rainbow Wallpaper', price: 1000000, color: 'linear-gradient(90deg, red, orange, yellow, green, blue, purple)' },
  ],
  floors: [
    { id: 'floor_wood', name: 'Wooden Floor', price: 100000, color: '#8B4513' },
    { id: 'floor_marble', name: 'Marble Floor', price: 300000, color: '#ecf0f1' },
    { id: 'floor_carpet', name: 'Red Carpet', price: 200000, color: '#c0392b' },
    { id: 'floor_tile', name: 'Tile Floor', price: 150000, color: '#bdc3c7' },
    { id: 'floor_gold', name: 'Golden Floor', price: 2000000, color: '#f1c40f' },
  ],
};
