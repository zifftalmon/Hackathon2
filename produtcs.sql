-- create table products (
-- 	item_id serial primary key,
-- 	name varchar(200) not null,
-- 	price integer not null,
-- 	rating numeric check (rating between 0 and 5) not null
-- )

select * from products

-- alter table products
-- add column image varchar(1000) not null

-- insert into products (name, price, rating, image)
-- values
-- ('La Sportiva Tarantula', 150, 3.5, 'https://www.bfgcdn.com/1500_1500_90/301-0709-0111/la-sportiva-tarantula-climbing-shoes.jpg')

-- insert into products (name, price, rating, image)
-- values
-- ('Scarpa Drago', 250, 4.5, 'https://www.bananafingers.co.uk/sites/default/files/styles/product_gallery_full/public/product-images/footwear/scarpa_0023_70017-000-1_dra_yel_drago_yellow.jpg?itok=Lkw2R1zT'),
-- ('Evolv Shaman', 200, 4, 'https://www.bananafingers.co.uk/sites/default/files/styles/product_gallery_full/public/product-images/footwear/evolv-shaman-climbing-shoes.jpg?itok=BGvWfFX1'),
-- ('La Sportive Solution', 300, 4.8, 'https://lcdn.lasportivausa.com/pub/media/catalog/product/2/0/20g_000100_solution_whiteyellow_1_1_4.jpg?width=700&height=700&store=en&image-type=image')