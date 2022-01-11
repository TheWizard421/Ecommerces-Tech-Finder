const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "TV's and Projectors" },
    { name: "Laptops and PC's" },
    { name: 'Cellphones and Tablets' },
    { name: 'Gaming'},
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Amazon - 43" Class Omni Series 4K UHD Smart Fire TV hands-free with Alexa',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '6479709_sd.jpg',
      category: categories[0]._id,
      price: 409.99,
      quantity: 32
    },
    {
      name: 'Epson - EpiqVision™ Mini EF12 Smart Streaming Laser Projector with HDR and Android TV - Black and Copper',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: '6428489_sd.jpg',
      category: categories[0]._id,
      price: 999.99,
      quantity: 500
    },
    {
      name: 'Samsung - 75" Class 8000 Series LED 4K UHD Smart Tizen TV', 
      description: "Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.",
      image: '6453027_sd.jpg',
      category: categories[0]._id,
      price: 1199.99,
      quantity: 8

    },
    {
      name: 'Apple - MacBook Pro - 16" Display with Touch Bar - Intel Core i9 - 16GB Memory - AMD Radeon Pro 5500M - 1TB SSD - Silver',
      category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: '6366581_sd.jpg',
      price: 2799.99,
      quantity: 20
    },
    {
      name: 'Skytech Gaming - Shiva Gaming PC Desktop – AMD Ryzen 5 5600X – 16G Memory – NVIDIA GeForce RTX 3060 Ti – 1TB NVME – 120mm AIO - White',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: '6482938_sd.jpg',
      price: 1649.99,
      quantity: 3
    },
    {
      name: 'ASUS - ROG Zephyrus M16 GU603 Gaming Laptop - Intel Core i9 - 16GB Memory - NVIDIA RTX3060 - 1TB SSD - Off Black',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: '6452913_rd.jpg',
      price: 1849.99,
      quantity: 10
    },
    {
      name: 'OtterBox - Commuter Series for Apple® iPhone® 12 mini - Black',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: '6422363_rd.jpg',
      price: 11.99,
      quantity: 80
    },
    {
      name: 'Microsoft - Surface Go 2 - 10.5" Touch-Screen - Intel Pentium Gold - 8GB - 128GB SSD - Device Only - Platinum',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: '6408475_sd.jpg',
      price: 579.99,
      quantity: 20
    },
    {
      name: "Oculus - Quest 2 Advanced All-In-One Virtual Reality Headset - 256GB",
      category: categories[3]._id,
      description: 'Experience our most advanced all-in-one VR system yet with Oculus Quest 2. No PC or console required. Every detail has been engineered to make virtual worlds adapt to your movements, letting you explore awe-inspiring games and experiences with unparalleled freedom. You can get the most out of each moment with blazing-fast performance and next-generation graphics. Stay focused on every detail with a stunning display that features 50% more pixels than the original Quest. Or take a break from the action and grab front-row seats to live concerts, exclusive events and more. With the redesigned Touch controllers, your gestures and motions are transported directly into VR with improved ergonomics. You can even connect your VR headset to a gaming-compatible computer with an Oculus Link cable (sold separately) to access hundreds of PC VR games and experiences. Quest 2 also lets you bring your friends into the action. Live casting lets you share your VR experience with people around you. Or meet up with friends in virtual worlds to battle in multiplayer competitions or just spend some time together. There’s no end in sight to what you can play, create and discover in Oculus Quest 2.',
      image: '6473857_rd.jpg',
      price: 400.99,
      quantity: 7
    },
    {
      name: "NVIDIA GeForce RTX 3080 10GB GDDR6X PCI Express 4.0 Graphics Card - Titanium and Black",
      category: categories[3]._id,
      description: 'The GeForce RTX 3080 delivers the ultra performance that gamers crave, powered by Ampere—NVIDIA’s 2nd gen RTX architecture. It’s built with enhanced RT Cores and Tensor Cores, new streaming multiprocessors, and superfast G6X memory for an amazing gaming experience.',
      image: '6429440cv1d.webp',
      price: 1300.00,
      quantity: 1
    },
    {
      name: "ASUS - TUF GAMING X570-PLUS (WI-FI) (Socket AM4) USB-C Gen2 AMD Motherboard with LED Lighting",
      category: categories[3]._id,
      description: 'Get the power you need to play demanding games with this ASUS TUF gaming motherboard. The AMD chipset provides power and compatibility with Ryzen processors while Gigabit Ethernet, Bluetooth 5 and 802.11ac Wi-Fi deliver fast connectivity. Active cooling and multiple heat sinks keep this ASUS TUF gaming motherboard running at peak performance.',
      image: '6356983cv12d.jpg',
      price: 199.99,
      quantity: 18
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
