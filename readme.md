# Shop APIs Project
#### To set up the project, pleae follow the instructions.

- Clone the repo onto your system.
- Run npm i to install all dependencies.
- MySql is used as database, so that is required as well. (I'm using v8.0.26).
- Once MySQL is installed and setup, please open ShopAPIs/config/dbConfig.ts. Change the "USER" and "PASSWORD" FIELD to the one you have set up.
- Once that is done, please run npm start on the root of the cloned folder. Application should start and will create required DB and tables in database.
- I have added a json file by the Name of ShopAPIs.json which is a postman collection for apis. You can import that into Postman and use the apis.It has all the sample required query params and requests body.
- Also to populate the database you can use the following sql inserts commands.

INSERT INTO `products` (`id`, `title`, `description`, `picture`, `price`, `quantity`, `createdAt`, `updatedAt`) VALUES (1, 'Laptop', 'Series 1 ', 'https://images.app.goo.gl/LXTZ8Ss1YStZfBwg6', 123432, 13, '2022-12-19 15:53:10', '2022-12-20 19:42:56');
INSERT INTO `products` (`id`, `title`, `description`, `picture`, `price`, `quantity`, `createdAt`, `updatedAt`) VALUES (2, 'Mouse', 'Dell', 'https://images.app.goo.gl/EL1Z2AenD3yQQzqV7', 560, 3, '2022-12-19 15:56:17', '2022-12-20 19:42:56');
INSERT INTO `products` (`id`, `title`, `description`, `picture`, `price`, `quantity`, `createdAt`, `updatedAt`) VALUES (3, 'Table', 'Home Desk', 'https://images.app.goo.gl/gGHmTxMAVZp6PaXY7', 7652, 89, '2022-12-21 02:37:55', '2022-12-21 02:37:56');
INSERT INTO `products` (`id`, `title`, `description`, `picture`, `price`, `quantity`, `createdAt`, `updatedAt`) VALUES (4, 'Bed', 'King Size', 'https://images.app.goo.gl/ZxETgbB1MKxMiRi56', 8000, 100, '2022-12-21 02:38:46', '2022-12-21 02:38:47');
INSERT INTO `products` (`id`, `title`, `description`, `picture`, `price`, `quantity`, `createdAt`, `updatedAt`) VALUES (5, 'bed side lamp', 'Lamp', 'https://images.app.goo.gl/jT9W4AEJNe1pbjZB7', 500, 8222, '2022-12-21 02:39:19', '2022-12-21 02:39:19');

