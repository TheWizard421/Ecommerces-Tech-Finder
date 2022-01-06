const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "TV's and Projectors" },
    { name: "Laptops and PC's" },
    { name: 'Cellphones and Tablets' },
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
      image: 'wooden-spoons.jpg',
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
      name: 'Amazon - All-New Fire HD 10 – 10.1” – Tablet – 32 GB - Black',
      category: categories[2]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'bedtime-book.jpg',
      price: 149.99,
      quantity: 70
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
