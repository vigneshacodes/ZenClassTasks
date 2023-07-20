---------------------------------------------------------1) Find all the information about each products-------------------------------------------------
	
	db.products.find();
	
{
  _id: ObjectId("64a6f41c2d49ea8159eb1343"),
  id: '1',
  product_name: 'Intelligent Fresh Chips',
  product_price: 655,
  product_material: 'Concrete',
  product_color: 'mint green'
}
{
  _id: ObjectId("64a6f41c2d49ea8159eb1344"),
  id: '2',
  product_name: 'Practical Fresh Sausages',
  product_price: 911,
  product_material: 'Cotton',
  product_color: 'indigo'
}
{
  _id: ObjectId("64a6f41c2d49ea8159eb1345"),
  id: '3',
  product_name: 'Refined Steel Car',
  product_price: 690,
  product_material: 'Rubber',
  product_color: 'gold'
}
{
  _id: ObjectId("64a6f41c2d49ea8159eb1346"),
  id: '4',
  product_name: 'Gorgeous Plastic Pants',
  product_price: 492,
  product_material: 'Soft',
  product_color: 'plum'
}
{
  _id: ObjectId("64a6f41c2d49ea8159eb1347"),
  id: '5',
  product_name: 'Sleek Cotton Chair',
  product_price: 33,
  product_material: 'Fresh',
  product_color: 'black'
}
{
  _id: ObjectId("64a6f41c2d49ea8159eb1348"),
  id: '6',
  product_name: 'Awesome Wooden Towels',
  product_price: 474,
  product_material: 'Plastic',
  product_color: 'orange'
}
{
  _id: ObjectId("64a6f41c2d49ea8159eb1349"),
  id: '7',
  product_name: 'Practical Soft Shoes',
  product_price: 500,
  product_material: 'Rubber',
  product_color: 'pink'
}
{
  _id: ObjectId("64a6f41c2d49ea8159eb134a"),
  id: '8',
  product_name: 'Incredible Steel Hat',
  product_price: 78,
  product_material: 'Rubber',
  product_color: 'violet'
}
{
  _id: ObjectId("64a6f41c2d49ea8159eb134b"),
  id: '9',
  product_name: 'Awesome Wooden Ball',
  product_price: 28,
  product_material: 'Soft',
  product_color: 'azure'
}
{
  _id: ObjectId("64a6f41c2d49ea8159eb134c"),
  id: '10',
  product_name: 'Generic Wooden Pizza',
  product_price: 84,
  product_material: 'Frozen',
  product_color: 'indigo'
}
{
  _id: ObjectId("64a6f41c2d49ea8159eb134d"),
  id: '11',
  product_name: 'Unbranded Wooden Cheese',
  product_price: 26,
  product_material: 'Soft',
  product_color: 'black'
}
{
  _id: ObjectId("64a6f41c2d49ea8159eb134e"),
  id: '12',
  product_name: 'Unbranded Plastic Salad',
  product_price: 89,
  product_material: 'Wooden',
  product_color: 'pink'
}
{
  _id: ObjectId("64a6f41c2d49ea8159eb134f"),
  id: '13',
  product_name: 'Gorgeous Cotton Keyboard',
  product_price: 37,
  product_material: 'Concrete',
  product_color: 'sky blue'
}
{
  _id: ObjectId("64a6f41c2d49ea8159eb1350"),
  id: '14',
  product_name: 'Incredible Steel Shirt',
  product_price: 54,
  product_material: 'Metal',
  product_color: 'white'
}
{
  _id: ObjectId("64a6f41c2d49ea8159eb1351"),
  id: '15',
  product_name: 'Ergonomic Cotton Hat',
  product_price: 43,
  product_material: 'Rubber',
  product_color: 'mint green'
}
{
  _id: ObjectId("64a6f41c2d49ea8159eb1352"),
  id: '16',
  product_name: 'Small Soft Chair',
  product_price: 47,
  product_material: 'Cotton',
  product_color: 'teal'
}
{
  _id: ObjectId("64a6f41c2d49ea8159eb1353"),
  id: '17',
  product_name: 'Incredible Metal Car',
  product_price: 36,
  product_material: 'Fresh',
  product_color: 'indigo'
}
{
  _id: ObjectId("64a6f41c2d49ea8159eb1354"),
  id: '18',
  product_name: 'Licensed Plastic Bacon',
  product_price: 88,
  product_material: 'Steel',
  product_color: 'yellow'
}
{
  _id: ObjectId("64a6f41c2d49ea8159eb1355"),
  id: '19',
  product_name: 'Intelligent Cotton Chips',
  product_price: 46,
  product_material: 'Soft',
  product_color: 'azure'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb1370"),
  id: '20',
  product_name: 'Handcrafted Wooden Bacon',
  product_price: 36,
  product_material: 'Concrete',
  product_color: 'lime'
}
{
  _id: ObjectId("64a7703599d094bcb7d3ec16"),
  id: '21',
  product_name: 'Unbranded Granite Chicken',
  product_price: 90,
  product_material: 'Metal',
  product_color: 'gold'
}
{
  _id: ObjectId("64a7703599d094bcb7d3ec17"),
  id: '22',
  product_name: 'Ergonomic Soft Hat',
  product_price: 99,
  product_material: 'Rubber',
  product_color: 'black'
}
{
  _id: ObjectId("64a7703599d094bcb7d3ec18"),
  id: '23',
  product_name: 'Intelligent Steel Pizza',
  product_price: 95,
  product_material: 'Cotton',
  product_color: 'azure'
}
{
  _id: ObjectId("64a7703599d094bcb7d3ec19"),
  id: '24',
  product_name: 'Tasty Rubber Cheese',
  product_price: 47,
  product_material: 'Frozen',
  product_color: 'orchid'
}
{
  _id: ObjectId("64a7703599d094bcb7d3ec1a"),
  id: '25',
  product_name: 'Licensed Steel Car',
  product_price: 20,
  product_material: 'Cotton',
  product_color: 'indigo'
  }

------------------------------------------------------2) Find the product price which are between 400 to 800---------------------------------------------------------

	db.products.find({product_price:{$gt:400,$lt:800}});

{
  _id: ObjectId("64a6f5ed2d49ea8159eb135d"),
  id: '1',
  product_name: 'Intelligent Fresh Chips',
  product_price: 655,
  product_material: 'Concrete',
  product_color: 'mint green'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb135f"),
  id: '3',
  product_name: 'Refined Steel Car',
  product_price: 690,
  product_material: 'Rubber',
  product_color: 'gold'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb1360"),
  id: '4',
  product_name: 'Gorgeous Plastic Pants',
  product_price: 492,
  product_material: 'Soft',
  product_color: 'plum'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb1362"),
  id: '6',
  product_name: 'Awesome Wooden Towels',
  product_price: 474,
  product_material: 'Plastic',
  product_color: 'orange'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb1363"),
  id: '7',
  product_name: 'Practical Soft Shoes',
  product_price: 500,
  product_material: 'Rubber',
  product_color: 'pink'
}

-------------------------------------------------3) Find the product, price which are not between 400 to 600------------------------------------------------------------

     db.products.find({product_price:{$not:{$gte:400,$lte:600}}})

{
  _id: ObjectId("64a6f5ed2d49ea8159eb135d"),
  id: '1',
  product_name: 'Intelligent Fresh Chips',
  product_price: 655,
  product_material: 'Concrete',
  product_color: 'mint green'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb135e"),
  id: '2',
  product_name: 'Practical Fresh Sausages',
  product_price: 911,
  product_material: 'Cotton',
  product_color: 'indigo'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb135f"),
  id: '3',
  product_name: 'Refined Steel Car',
  product_price: 690,
  product_material: 'Rubber',
  product_color: 'gold'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb1361"),
  id: '5',
  product_name: 'Sleek Cotton Chair',
  product_price: 33,
  product_material: 'Fresh',
  product_color: 'black'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb1364"),
  id: '8',
  product_name: 'Incredible Steel Hat',
  product_price: 78,
  product_material: 'Rubber',
  product_color: 'violet'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb1365"),
  id: '9',
  product_name: 'Awesome Wooden Ball',
  product_price: 28,
  product_material: 'Soft',
  product_color: 'azure'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb1366"),
  id: '10',
  product_name: 'Generic Wooden Pizza',
  product_price: 84,
  product_material: 'Frozen',
  product_color: 'indigo'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb1367"),
  id: '11',
  product_name: 'Unbranded Wooden Cheese',
  product_price: 26,
  product_material: 'Soft',
  product_color: 'black'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb1368"),
  id: '12',
  product_name: 'Unbranded Plastic Salad',
  product_price: 89,
  product_material: 'Wooden',
  product_color: 'pink'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb1369"),
  id: '13',
  product_name: 'Gorgeous Cotton Keyboard',
  product_price: 37,
  product_material: 'Concrete',
  product_color: 'sky blue'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb136a"),
  id: '14',
  product_name: 'Incredible Steel Shirt',
  product_price: 54,
  product_material: 'Metal',
  product_color: 'white'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb136b"),
  id: '15',
  product_name: 'Ergonomic Cotton Hat',
  product_price: 43,
  product_material: 'Rubber',
  product_color: 'mint green'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb136c"),
  id: '16',
  product_name: 'Small Soft Chair',
  product_price: 47,
  product_material: 'Cotton',
  product_color: 'teal'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb136d"),
  id: '17',
  product_name: 'Incredible Metal Car',
  product_price: 36,
  product_material: 'Fresh',
  product_color: 'indigo'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb136e"),
  id: '18',
  product_name: 'Licensed Plastic Bacon',
  product_price: 88,
  product_material: 'Steel',
  product_color: 'yellow'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb136f"),
  id: '19',
  product_name: 'Intelligent Cotton Chips',
  product_price: 46,
  product_material: 'Soft',
  product_color: 'azure'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb1370"),
  id: '20',
  product_name: 'Handcrafted Wooden Bacon',
  product_price: 36,
  product_material: 'Concrete',
  product_color: 'lime'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb1371"),
  id: '21',
  product_name: 'Unbranded Granite Chicken',
  product_price: 90,
  product_material: 'Metal',
  product_color: 'gold'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb1372"),
  id: '22',
  product_name: 'Ergonomic Soft Hat',
  product_price: 99,
  product_material: 'Rubber',
  product_color: 'black'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb1373"),
  id: '23',
  product_name: 'Intelligent Steel Pizza',
  product_price: 95,
  product_material: 'Cotton',
  product_color: 'azure'
}
{
  _id: ObjectId("64a7703599d094bcb7d3ec19"),
  id: '24',
  product_name: 'Tasty Rubber Cheese',
  product_price: 47,
  product_material: 'Frozen',
  product_color: 'orchid'
}
{
  _id: ObjectId("64a7703599d094bcb7d3ec1a"),
  id: '25',
  product_name: 'Licensed Steel Car',
  product_price: 20,
  product_material: 'Cotton',
  product_color: 'indigo'
}

--------------------------------------------------4) List the four product ,which are greater than 500 in price----------------------------------------------------------
		
	db.products.find({product_price:{$gt:500}}).limit(4);

{
  _id: ObjectId("64a6f5ed2d49ea8159eb135d"),
  id: '1',
  product_name: 'Intelligent Fresh Chips',
  product_price: 655,
  product_material: 'Concrete',
  product_color: 'mint green'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb135e"),
  id: '2',
  product_name: 'Practical Fresh Sausages',
  product_price: 911,
  product_material: 'Cotton',
  product_color: 'indigo'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb135f"),
  id: '3',
  product_name: 'Refined Steel Car',
  product_price: 690,
  product_material: 'Rubber',
  product_color: 'gold'
}

------------------------------------------------5) Find the product name and product material of each products---------------------------------------------------------

	db.products.find({},{_id:0,product_name:1,product_material:1});

{
  product_name: 'Intelligent Fresh Chips',
  product_material: 'Concrete'
}
{
  product_name: 'Practical Fresh Sausages',
  product_material: 'Cotton'
}
{
  product_name: 'Refined Steel Car',
  product_material: 'Rubber'
}
{
  product_name: 'Gorgeous Plastic Pants',
  product_material: 'Soft'
}
{
  product_name: 'Sleek Cotton Chair',
  product_material: 'Fresh'
}
{
  product_name: 'Awesome Wooden Towels',
  product_material: 'Plastic'
}
{
  product_name: 'Practical Soft Shoes',
  product_material: 'Rubber'
}
{
  product_name: 'Incredible Steel Hat',
  product_material: 'Rubber'
}
{
  product_name: 'Awesome Wooden Ball',
  product_material: 'Soft'
}
{
  product_name: 'Generic Wooden Pizza',
  product_material: 'Frozen'
}
{
  product_name: 'Unbranded Wooden Cheese',
  product_material: 'Soft'
}
{
  product_name: 'Unbranded Plastic Salad',
  product_material: 'Wooden'
}
{
  product_name: 'Gorgeous Cotton Keyboard',
  product_material: 'Concrete'
}
{
  product_name: 'Incredible Steel Shirt',
  product_material: 'Metal'
}
{
  product_name: 'Ergonomic Cotton Hat',
  product_material: 'Rubber'
}
{
  product_name: 'Small Soft Chair',
  product_material: 'Cotton'
}
{
  product_name: 'Incredible Metal Car',
  product_material: 'Fresh'
}
{
  product_name: 'Licensed Plastic Bacon',
  product_material: 'Steel'
}
{
  product_name: 'Intelligent Cotton Chips',
  product_material: 'Soft'
}
{
  product_name: 'Handcrafted Wooden Bacon',
  product_material: 'Concrete'
}
{
  product_name: 'Unbranded Granite Chicken',
  product_material: 'Metal'
}
{
 product_name: 'Ergonomic Soft Hat',
 product_material: 'Rubber'
}
{
  product_name: 'Intelligent Steel Pizza',
  product_material: 'Cotton'
}
{
  product_name: 'Tasty Rubber Cheese', 
  product_material: 'Frozen'
}
{ product_name: 'Licensed Steel Car',
  product_material: 'Cotton'
}

------------------------------------------------------------------6) Find the product with a row id of 10-------------------------------------------------------------

	db.products.find({id:{$eq:"10"}});

{
  _id: ObjectId("64a6f5ed2d49ea8159eb1366"),
  id: '10',
  product_name: 'Generic Wooden Pizza',
  product_price: 84,
  product_material: 'Frozen',
  product_color: 'indigo'
}

-----------------------------------------------------------------7) Find only the product name and product material----------------------------------------------------

	db.products.find({},{_id:0,product_name:1,product_material:1});

{
  product_name: 'Intelligent Fresh Chips',
  product_material: 'Concrete'
}
{
  product_name: 'Practical Fresh Sausages',
  product_material: 'Cotton'
}
{
  product_name: 'Refined Steel Car',
  product_material: 'Rubber'
}
{
  product_name: 'Gorgeous Plastic Pants',
  product_material: 'Soft'
}
{
  product_name: 'Sleek Cotton Chair',
  product_material: 'Fresh'
}
{
  product_name: 'Awesome Wooden Towels',
  product_material: 'Plastic'
}
{
  product_name: 'Practical Soft Shoes',
  product_material: 'Rubber'
}
{
  product_name: 'Incredible Steel Hat',
  product_material: 'Rubber'
}
{
  product_name: 'Awesome Wooden Ball',
  product_material: 'Soft'
}
{
  product_name: 'Generic Wooden Pizza',
  product_material: 'Frozen'
}
{
  product_name: 'Unbranded Wooden Cheese',
  product_material: 'Soft'
}
{
  product_name: 'Unbranded Plastic Salad',
  product_material: 'Wooden'
}
{
  product_name: 'Gorgeous Cotton Keyboard',
  product_material: 'Concrete'
}
{
  product_name: 'Incredible Steel Shirt',
  product_material: 'Metal'
}
{
  product_name: 'Ergonomic Cotton Hat',
  product_material: 'Rubber'
}
{
  product_name: 'Small Soft Chair',
  product_material: 'Cotton'
}
{
  product_name: 'Incredible Metal Car',
  product_material: 'Fresh'
}
{
  product_name: 'Licensed Plastic Bacon',
  product_material: 'Steel'
}
{
  product_name: 'Intelligent Cotton Chips',
  product_material: 'Soft'
}
{
  product_name: 'Handcrafted Wooden Bacon',
  product_material: 'Concrete'
}
{
  product_name: 'Unbranded Granite Chicken',
  product_material: 'Metal'
}
{
 product_name: 'Ergonomic Soft Hat',
 product_material: 'Rubber'
}
{
  product_name: 'Intelligent Steel Pizza',
  product_material: 'Cotton'
}
{
  product_name: 'Tasty Rubber Cheese', 
  product_material: 'Frozen'
}
{
  product_name: 'Licensed Steel Car',
  product_material: 'Cotton'
}

-------------------------------8) Find all products which contain the value of soft in product material --------------------------------------------

	db.products.find({product_material:{$eq:"Soft"}});

{
  _id: ObjectId("64a6f5ed2d49ea8159eb1360"),
  id: '4',
  product_name: 'Gorgeous Plastic Pants',
  product_price: 492,
  product_material: 'Soft',
  product_color: 'plum'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb1365"),
  id: '9',
  product_name: 'Awesome Wooden Ball',
  product_price: 28,
  product_material: 'Soft',
  product_color: 'azure'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb1367"),
  id: '11',
  product_name: 'Unbranded Wooden Cheese',
  product_price: 26,
  product_material: 'Soft',
  product_color: 'black'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb136f"),
  id: '19',
  product_name: 'Intelligent Cotton Chips',
  product_price: 46,
  product_material: 'Soft',
  product_color: 'azure'
}


---------------------------------------------9) Find products which contain product color indigo  or product price 492.00--------------------------

	db.products.find({$or:[{"product_color":{$eq:"indigo"}},{"product_price":{$eq:492.00}}]});

{
  _id: ObjectId("64a6f5ed2d49ea8159eb135e"),
  id: '2',
  product_name: 'Practical Fresh Sausages',
  product_price: 911,
  product_material: 'Cotton',
  product_color: 'indigo'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb1360"),
  id: '4',
  product_name: 'Gorgeous Plastic Pants',
  product_price: 492,
  product_material: 'Soft',
  product_color: 'plum'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb1366"),
  id: '10',
  product_name: 'Generic Wooden Pizza',
  product_price: 84,
  product_material: 'Frozen',
  product_color: 'indigo'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb136d"),
  id: '17',
  product_name: 'Incredible Metal Car',
  product_price: 36,
  product_material: 'Fresh',
  product_color: 'indigo'
}
{
  _id: ObjectId("64a6f5ed2d49ea8159eb1375"),
  id: '25',
  product_name: 'Licensed Steel Car',
  product_price: 20,
  product_material: 'Cotton',
  product_color: 'indigo'
}


----------------------------------------------------------10) Delete the product price less than 300  ------------------------------------------------------------

	db.products.deleteMany({product_price:{$lte:300}})

{
 acknowledged: true,
 deletedCount: 19
}