
const cabecera = "codigo,nombre_producto,descripcion,categoria,precio,ciudad";

const listaproductos=`TOT0546-Qz,Camera Tripod,Sturdy camera tripod for professional photography.,vehiculos,49.99,Coslada
HLC3990-V2,Vegan Taco Seasoning,Spice blend for creating flavorful vegan taco filling.,tecnologia,2.49,Colmenar Viejo
WTY3808-Wx,Oven-Baked Cheese Crisps,Crispy cheese snacks that melt in your mouth.,tecnologia,3.99,Alcalá de Henares
FUW7624-OE,High-Pressure Handheld Shower Head,Shower head designed for a strong spray and complete coverage.,moda,39.99,Madrid
ZNH2124-W0,Self-Inflating Camping Mattress,Comfortable camping mattress that inflates automatically.,moda,49.99,Boadilla del Monte
INJ2389-Z1,Multifunctional Baby Bottle Warmer,Warmer for heating baby bottles and food jars.,moda,39.99,Colmenar Viejo
JFR6780-CC,Decorative Wall Tapestry,Colorful tapestry to add charm to any room.,tecnologia,34.99,Alcorcón
RMU8980-kk,BBQ Jackfruit,"Tender jackfruit cooked in BBQ sauce, a delicious plant-based alternative.",vehiculos,4.29,Boadilla del Monte
ABP0585-rt,Cinnamon Sugar Donuts,Delicious mini donuts dusted with cinnamon sugar.,tecnologia,4.99,Alcorcón
BLJ6825-rx,USB Flash Drive,32GB USB flash drive with fast data transfer speeds.,hogar,9.99,Coslada
CSI7157-z8,Pineapple Teriyaki Chicken Mix,A perfect blend of pineapple and teriyaki for stir-fry.,vehiculos,6.99,Alcorcón
PFL9351-t9,Coconut Granola,Crunchy granola mixed with coconut flakes.,vehiculos,4.19,Boadilla del Monte
JPY3841-W4,Indoor Grill,Electric indoor grill for quick meals.,tecnologia,59.99,Collado Villalba
MIU3153-6z,Smart Thermostat,Wi-Fi enabled thermostat for energy-saving temperature control.,vehiculos,149.99,Alcobendas
CHH2653-6d,Elderberry Syrup Kit,DIY kit to make your own elderberry syrup.,moda,22.99,Alcalá de Henares
FYL0734-bV,Organic Lentil Soup,A hearty soup made with organic lentils and vegetables.,moda,4.99,Boadilla del Monte
APB3885-55,Personal Safety Alarm,Compact alarm for personal safety and security.,moda,12.99,Aranjuez
XBR3256-97,Sliced Strawberries,Fresh sliced strawberries for toppings or snacking,vehiculos,4.99,Alcorcón
EEO5403-rZ,Dish Rack,Collapsible dish rack for kitchen countertop use.,moda,24.99,Collado Villalba
OSE7454-ZM,Basketball,Official size basketball for indoor and outdoor play.,vehiculos,29.99,Colmenar Viejo
BWB3386-6q,Ramen Noodle Soup Cups,Instant ramen cups with flavor-packed broth.,vehiculos,1.29,Collado Villalba
GOP8592-Xu,Yoga Blocks,Set of two yoga blocks for increased stability and support.,hogar,29.99,Madrid
ISG9196-cl,Spinach and Cheese Stuffed Shells,Delicious pasta shells filled with spinach and cheese,moda,5.99,Alcorcón
TWH7487-oe,Adjustable Height Standing Desk Converter,Convert your desk to a standing desk easily.,vehiculos,89.99,Arganda del Rey
OLO1148-bB,Picnic Blanket,Waterproof picnic blanket for outdoor fun.,hogar,29.99,Alcobendas
PWO4453-so,Honey Roasted Chickpeas,Crispy chickpeas roasted with honey for a sweet and satisfying snack.,tecnologia,3.29,Arganda del Rey
HIG1926-pJ,Insulated Lunch Box,Durable lunch box designed to keep food fresh and cool.,tecnologia,24.99,Coslada
GMN2941-Tv,Ergonomic Gaming Chair,Comfortable gaming chair for long hours of play.,vehiculos,199.99,Alcalá de Henares
AZA2100-cf,Pet First Aid Kit,Essential kit for taking care of your pets' health emergencies.,vehiculos,29.99,Alcobendas
DIG9141-Oi,Mini Indoor Hydroponic Garden,Grow herbs indoors with this easy-to-use hydroponic garden system.,hogar,59.99,Colmenar Viejo
BMJ4311-YA,Chilli Lime Corn on the Cob,Corn on the cob seasoned with chili and lime for a spicy kick.,vehiculos,1.99,Arganda del Rey
DVU9737-1Y,Magnetic Whiteboard,Reusable whiteboard for notes and reminders with magnetic backing.,tecnologia,34.99,Arganda del Rey
XZM8119-xv,Customizable Photo Calendar,Personalized calendar with your favorite photos.,tecnologia,19.99,Aranjuez
MRF9160-Fi,Cheesy Broccoli Soup Mix,Just add water for a hearty cheese and broccoli soup in minutes.,hogar,2.99,Arganda del Rey
XVX2220-Md,Peach Preserves,"Sweet and fruity peach preserves, perfect for spreading on toast.",vehiculos,3.79,Alcorcón
PUE9211-8X,Lemon Herb Chicken,Marinated chicken grilled with lemon and herbs.,moda,7.49,Coslada
DCG7078-Jf,Brownie Bites,"Fudgy brownie bites, perfect for sharing or snacking.",hogar,4.99,Coslada
WIS6162-Qf,Spicy Tuna Salad,"Ready-to-eat tuna salad with a spicy kick, perfect for sandwiches.",moda,4.49,Collado Villalba
YMS3727-WI,Miso Soup Mix,"Instant miso soup mix, just add hot water for a warm meal.",vehiculos,3.29,Colmenar Viejo
EGU6508-X2,Fruit and Nut Bars,Individually packaged bars made with dried fruits and nuts.,tecnologia,1.99,Colmenar Viejo
BSV6336-ve,Wireless Smart Plug,Control home appliances remotely using your smartphone app.,tecnologia,19.99,Colmenar Viejo
VPW3344-ua,Vegetarian Stuffed Peppers,"Bell peppers stuffed with rice, beans, and spices, ready to bake.",tecnologia,4.99,Colmenar Viejo
VWX9684-g3,Maple Bacon Jerky,Savory bacon jerky coated with maple flavoring.,moda,6.99,Alcalá de Henares
CUK3310-kK,Portable Phone Mug Holder,Convenient holder for drinks and phones while driving.,hogar,14.99,Collado Villalba
GEO4992-iT,Tattoo Kit,Complete tattoo kit for beginners and professionals.,vehiculos,99.99,Aranjuez
VFR1487-ib,Cacao Powder,Unsweetened cacao powder for baking and smoothies.,tecnologia,4.49,Coslada
HDR5218-RN,Banana Nut Muffins,"Moist, fluffy muffins packed with bananas and walnuts for a delightful breakfast or snack.",vehiculos,4.49,Alcalá de Henares
JMD5899-5t,Salsa Verde,"Tangy green salsa made with tomatillos, perfect for tacos.",vehiculos,3.49,Madrid
RQZ5052-Yx,Interactive Plush Toy,"Soft, cuddly toy that interacts with children.",hogar,34.99,Coslada
PPQ0749-Lx,Wall Art Stickers,Removable wall art stickers for home decoration.,tecnologia,19.99,Madrid
AJM2977-HX,Caramel Apple Chips,Crispy apple chips drizzled with caramel for a sweet treat.,vehiculos,3.49,Collado Villalba
DGH8634-th,Sun Protection Clothing,UV-blocking clothing for outdoor activities.,moda,44.99,Alcobendas
BAM8335-qm,Heart-Shaped Baking Molds,Love-themed molds for creating desserts and treats.,moda,10.99,Madrid
VDN3896-jC,Spinach and Cheese Quiche,Savory quiche loaded with spinach and cheese.,hogar,5.49,Collado Villalba
PKS9252-Qv,Orange Ginger Vinaigrette,Tangy vinaigrette with orange and ginger flavors.,hogar,3.99,Arganda del Rey
KAG9986-uM,Over-the-Door Hooks,Convenient hooks that utilize door space for hanging items.,vehiculos,12.99,Alcobendas
LVG6227-6c,Folding Exercise Bike,Space-saving bike for indoor workouts.,vehiculos,199.99,Arganda del Rey
TLF2983-oc,Bluetooth Shower Speaker,Water-resistant Bluetooth speaker for showers.,tecnologia,24.99,Aranjuez
GNN5940-rv,Kale Salad Kit,"Ready-to-eat salad with kale, lemon, and cheese.",tecnologia,4.99,Aranjuez
LPD3169-Dc,DIY Lip Balm Kit,Craft your own lip balms with this complete kit.,vehiculos,22.99,Alcorcón
GWP5814-o4,Lemon Dill Salmon,"Salmon fillets seasoned with lemon and dill, perfect for grilling.",moda,9.99,Boadilla del Monte
UQU2040-KQ,Feta Cheese Crumbles,"Crumbled feta cheese, perfect for salads and Mediterranean dishes.",vehiculos,2.49,Collado Villalba
QQU5574-yC,Lightweight Backpacking Tent,Easy-to-set up tent designed for campers and hikers.,tecnologia,129.99,Collado Villalba
AMY5494-yc,Smartphone Tripod with Bluetooth Remote,Tripod with wireless remote for effortless photo-taking.,vehiculos,29.99,Alcalá de Henares
OUG4431-Yn,Blackberry Jam,Delicious homemade style blackberry jam.,hogar,4.29,Alcobendas
ORY9045-Lb,Lemon Dill Chicken Skewers,"Marinated chicken skewers with lemon and dill flavor, grilled to perfection.",moda,9.99,Arganda del Rey
QZN4108-qG,Brown Rice,Nutty and wholesome brown rice.,vehiculos,1.79,Colmenar Viejo
DXB2459-6W,Pet Caress Brush,Gentle brush for removing loose fur from pets.,vehiculos,12.99,Alcalá de Henares
UPK6075-RN,Almond Milk,"Deliciously creamy almond milk, perfect for smoothies.",tecnologia,3.29,Alcalá de Henares
TDN7309-mE,Crafting Kit,Complete crafting kit for kids and adults.,vehiculos,29.99,Alcalá de Henares
HBY9599-BY,Electric Pressure Washer,Powerful electric pressure washer for deep cleaning.,hogar,199.99,Boadilla del Monte
JWP3222-x1,Blackberry Jam,Delicious homemade style blackberry jam.,tecnologia,4.29,Alcalá de Henares
OMB6390-Z6,Peach Halves (canned),"Sweet peach halves packed in juice, great for desserts.",tecnologia,2.49,Arganda del Rey
UYA8323-YY,Spinach and Feta Stuffed Chicken Breast,"Juicy chicken breast stuffed with spinach and feta cheese, seasoned to perfection.",tecnologia,8.99,Arganda del Rey
HSJ3719-ex,Italian Marinara Sauce,"Classic marinara sauce for pasta, pizza, or dipping.",tecnologia,3.29,Coslada
MOA8196-8C,Infrared Space Heater,Energy-efficient infrared heater for home use.,hogar,99.99,Madrid
OIZ6387-bI,Spice Rack,Rotating spice rack with 20 spice jars.,vehiculos,39.99,Madrid
DCN6840-kS,Berry Smoothie Mix,Frozen mix for quick berry smoothies.,hogar,4.99,Alcalá de Henares
ZYE4251-Pc,Vegan Caesar Dressing,"Creamy vegan dressing made with cashews, perfect for salads.",tecnologia,3.99,Alcorcón
UYN5797-Iy,Cable Knit Cardigan,Cozy cable knit cardigan to layer during chilly evenings.,hogar,49.99,Alcalá de Henares
BCE2833-nP,Fitness Resistance Bands Kit,Set with various resistance bands for workouts.,hogar,29.99,Alcobendas
PLG6106-MG,Garlic and Herb Rub,A seasoning blend of garlic and herbs to enhance any dish.,vehiculos,2.29,Alcorcón
FHI2465-ja,Non-Stick Grill Mat,Reusable mat that prevents food from sticking to the grill.,vehiculos,19.99,Coslada
OCW0693-ft,Mixed Nuts,"A blend of assorted nuts, perfect for snacking or adding to recipes.",vehiculos,5.99,Madrid
WLY8726-f3,Marinara Sauce,Classic marinara sauce for all pasta dishes.,tecnologia,3.49,Colmenar Viejo
PRF0106-2q,Spicy Thai Chili Sauce,A sweet and spicy sauce for dipping or cooking.,vehiculos,3.29,Boadilla del Monte
YWK8645-mX,Pet Hair Vacuum Cleaner Attachment,Specialized attachment for removing pet hair from surfaces.,vehiculos,14.99,Alcobendas
BTX2217-Pa,Handmade Leather Wallet,High-quality leather wallet with multiple compartments.,vehiculos,49.99,Boadilla del Monte
XUE0204-Ok,Coconut Yogurt,"Creamy yogurt made from coconut milk, dairy-free and delicious.",moda,3.89,Collado Villalba
XFB1274-fr,Eco-Friendly Disposable Plates,Compostable plates suitable for various occasions.,tecnologia,22.99,Collado Villalba
NRQ4021-Yn,Herbal Garden Starter Kit,Indoor gardening kit with herbs and pots.,tecnologia,24.99,Collado Villalba
LWR4375-wP,Outdoor Camping Hammock,Lightweight and durable hammock for relaxing in nature.,tecnologia,29.99,Boadilla del Monte
ZKI5667-D0,Roasted Garlic,Savory roasted garlic in a jar for easy use.,hogar,4.29,Alcalá de Henares
CMS1381-4z,Plaid Flannel Shirt,"Soft flannel shirt with a timeless plaid pattern, perfect for layering.",tecnologia,29.99,Alcorcón
IJJ1683-tS,Low-Fat Cottage Cheese,"Creamy cottage cheese, perfect for healthy snacking.",moda,2.99,Collado Villalba
NHO0376-Z1,Banana Nut Oatmeal Cups,"Quick oatmeal cups with banana and nut flavor, great for breakfast.",vehiculos,2.99,Alcalá de Henares
VMT4884-Tg,Cushion Covers,Set of decorative cushion covers for home decor.,moda,35,Arganda del Rey
JQQ1643-bW,Snack Container Set,Stackable containers for organizing snacks and treats.,hogar,19.99,Arganda del Rey
CSD2339-bJ,Stainless Steel Mixing Bowls,Set of versatile mixing bowls for cooking.,vehiculos,29.99,Collado Villalba
JVB9250-wb,Lemon Garlic Marinade,"A zesty marinade made with lemon juice and garlic, ideal for chicken or fish.",tecnologia,4.29,Collado Villalba
IUO7616-Co,Bamboo Cutting Board Set,Eco-friendly bamboo cutting boards in various sizes.,tecnologia,34.99,Arganda del Rey
BBZ8799-iL,Coconut Milk,Rich coconut milk for curries and desserts.,moda,2.49,Aranjuez
KCJ8986-Ok,Saffron Rice Mix,Flavorful rice mix with saffron and spices.,moda,2.99,Madrid
ACH8156-TJ,Peach & Mango Salsa,"A zesty salsa made with peaches and mangos, great for chips.",hogar,4.49,Collado Villalba
TOE1848-sq,Coconut Milk Ice Cream,"Dairy-free ice cream made with coconut milk, creamy and delicious.",hogar,6.99,Arganda del Rey
DPL8432-Xn,Blackberry Jam,Delicious homemade style blackberry jam.,vehiculos,4.29,Arganda del Rey
LEM4944-OE,Teriyaki Chicken Wings,Flavorful chicken wings marinated in a sweet teriyaki glaze.,hogar,10.99,Collado Villalba
FSZ8885-RJ,Vegan Alfredo Sauce,"Creamy, dairy-free Alfredo sauce",vehiculos,4.99,Colmenar Viejo
YYK4095-Hp,Wall Art,Abstract canvas print to enhance home decor.,vehiculos,45,Madrid
ODP0505-Sr,Smartphone Tripod,Adjustable tripod for smartphones and cameras.,vehiculos,29.99,Colmenar Viejo
LEB6244-8g,Set of Silicone Cooking Utensils,Non-stick utensils for safe and easy cooking.,hogar,29.99,Arganda del Rey
TGH4743-LP,Bamboo Bathtub Caddy,"Expandable caddy for holding books, phones, and snacks while in the bath.",vehiculos,34.99,Alcorcón
QXU9097-RG,Self-Adhesive Wallpaper,Peel and stick wallpaper for easy home decor changes.,vehiculos,34.99,Collado Villalba
QKU5771-rB,Magnetic Phone Car Mount,Strong magnetic holder for smartphones in cars.,moda,14.99,Alcorcón
QWQ3003-Fj,Personal Security Alarm Keychain,Handy keychain that emits a loud alarm for personal safety.,moda,10.99,Madrid
RCR2399-E7,Adjustable Garden Rake,Heavy-duty rake with adjustable width for different gardening needs.,vehiculos,22.99,Alcobendas
IHE9779-hV,Memory Card,64GB SD memory card for cameras and devices.,hogar,15.99,Coslada
VHQ8498-sf,Kids Tablet,Durable tablet designed for kids with parental controls.,hogar,129.99,Alcorcón
QLR7154-gK,LED Desk Light,Adjustable LED desk light with brightness settings.,vehiculos,34.99,Alcobendas
BBF1670-2w,Fresh Strawberries,"Sweet and juicy strawberries, perfect for desserts.",moda,3.99,Madrid
ZKY0648-r5,Chickpea Pancakes,"Savory pancakes made with chickpea flour, high in protein.",hogar,4.99,Boadilla del Monte
TJC1822-Gk,Chocolate Mint Thins,Mint-flavored chocolate candies for a refreshing treat.,tecnologia,2.99,Alcobendas
NTC4355-en,Chickpea Pasta,Healthy pasta alternative made from chickpeas,moda,4.19,Alcobendas
UAW8092-9G,Smart LED Light Strip,"Customizable RGB LED light strip, perfect for mood lighting.",moda,29.99,Aranjuez
IDY9557-8V,Set of Decorative Storage Bins,Colorful bins to keep your space organized.,tecnologia,34.99,Alcorcón
BNI6489-nx,Oven Mitts with Pocket,Silicone oven mitts designed for safe cooking and baking.,vehiculos,19.99,Coslada
PDT2200-wr,Almond Flour Tortillas,"Gluten-free tortillas made from almond flour, perfect for various wraps and meals.",hogar,4.99,Alcobendas
KJK4021-fi,Mango Chilli Sauce,A sweet and spicy sauce for dipping or glazing.,hogar,3.99,Coslada
EQS7041-Aa,Electric Kettle with Temperature Control,Electric kettle that offers precise temperature settings.,hogar,49.99,Colmenar Viejo
PZX0575-0i,Hot Dog Buns,Soft buns perfect for stuffing with your favorite hot dogs.,tecnologia,2.49,Arganda del Rey
IGA5638-tj,Cranberry Orange Oatmeal,Instant oatmeal flavored with cranberries and orange zest for breakfast.,hogar,2.49,Coslada
HVR1882-7Y,Bock Beer Mustard,"Flavorful mustard with a tangy kick, perfect for hot dogs and sandwiches.",tecnologia,2.29,Alcorcón
AFC7799-QE,Beef Tacos,"Pre-seasoned beef mix for delicious tacos, just heat and serve.",tecnologia,5.49,Arganda del Rey
UMR9590-I6,Electric Kettle,Rapid boil electric kettle with temperature control.,hogar,39.99,Alcobendas
ZQE6220-0U,Frozen Vegetarian Pizza,A delicious pizza loaded with vegetables,tecnologia,6.49,Coslada
FLP9078-h4,Wireless Music Receiver,Stream music from your device to any speaker wirelessly.,vehiculos,19.99,Collado Villalba
EEC6241-6T,Cinnamon Raisin Bagels,Soft bagels flavored with cinnamon and raisins.,vehiculos,4.19,Arganda del Rey
GFJ9642-OS,Cabbage,"Fresh green cabbage, great for salads and slaws.",moda,1.29,Arganda del Rey
HDE1119-fm,Honey,"Pure and natural honey, great for sweetening.",tecnologia,5.49,Aranjuez
TQC8702-xv,Gluten-Free Brownies,"Decadent brownies made without gluten, rich and chocolatey.",tecnologia,4.99,Collado Villalba
OJN3776-cv,Pet Grooming Scissors,Quality scissors designed for easy pet grooming.,vehiculos,16.99,Aranjuez
LCM6316-6I,Wireless Range Extender,Boost your Wi-Fi signal for better coverage.,tecnologia,49.99,Alcobendas
MFB9606-tM,Canvas Wall Art,Stylish wall art to enhance home decor.,moda,39.99,Boadilla del Monte
STN5469-vE,Window Blinds,Adjustable window blinds for privacy and light control.,hogar,59.99,Coslada
FGI0761-JT,Baking Soda,Essential ingredient for baking and cooking.,tecnologia,0.99,Madrid
UGV4847-0P,Collapsible Colander,Space-saving colander for rinsing fruits and vegetables.,tecnologia,14.99,Colmenar Viejo
BIA8948-iq,Pine Nuts,Nutty flavor perfect for pesto and salads.,moda,7.99,Arganda del Rey
IIW8904-u1,Miso Soup Starter,Miso paste for making traditional Japanese miso soup.,vehiculos,2.99,Boadilla del Monte
OTU5731-dh,Beef Enchilada Casserole,Hearty casserole with beef and enchilada sauce.,moda,8.99,Alcalá de Henares
EAB9306-zm,Yoga Strap,Durable yoga strap for deeper stretches.,hogar,12.99,Alcorcón
VYX0189-sd,Overnight Duffle Bag,Spacious duffle bag for weekend getaways.,moda,34.99,Aranjuez
CEG7436-2v,Savory Oatmeal Cups,"Savory oatmeal ready to eat, great for breakfast or a snack.",tecnologia,1.99,Alcobendas
AZE0265-sL,Savory Mushroom Risotto,Creamy risotto infused with wild mushrooms.,vehiculos,6.49,Coslada
ZLO8877-o6,Chocolate Fudge Brownie Mix,Just add water for delicious brownies.,hogar,2.99,Colmenar Viejo
MSG0472-4n,Spaghetti and Meatball Dinner Kit,"All-in-one meal kit including pasta, meatballs, and sauce for a quick dinner.",hogar,7.99,Colmenar Viejo
IAC4116-GR,Silicone Baking Mat Set,Non-stick and reusable mats for easy baking.,tecnologia,24.99,Arganda del Rey
RQV0335-P2,Pet Caress Brush,Gentle brush for removing loose fur from pets.,vehiculos,12.99,Aranjuez
BIU0586-NN,Microfiber Cleaning Cloth Set,Assorted cloths for cleaning electronics and delicate surfaces.,moda,9.99,Boadilla del Monte
IFJ8096-xD,High-Quality Yoga Block,Foam yoga block for enhancing poses and stability.,vehiculos,12.99,Arganda del Rey
JFC4173-B6,Air Mattress,Inflatable air mattress for convenient sleeping.,hogar,49.99,Arganda del Rey
VAF0345-iW,Cookbook,Inspiring cookbook with healthy recipes.,hogar,27.99,Colmenar Viejo
OQI5193-Mv,Travel Jewelry Case,Portable case to organize and protect jewelry on trips.,moda,24.99,Collado Villalba
IQI8516-81,Canned Black Beans,"Delicious and hearty black beans, great for soups or salads.",tecnologia,1.29,Collado Villalba
OTB6373-BZ,Veggie Chips Variety Pack,A colorful variety of crunchy veggie chips for snacking.,hogar,3.79,Arganda del Rey
AWC7208-iN,Oven Mitts,Silicone oven mitts for safe handling of hot cookware.,tecnologia,15.99,Alcobendas
TZU3991-gM,Graphic Print Leggings,"Trendy leggings with a unique graphic print, versatile for workouts and casual wear.",moda,29.99,Collado Villalba
LDP6083-dN,Pumpkin Spice Muffins,Moist and flavorful muffins packed with fall spices and pumpkin puree.,tecnologia,3.99,Collado Villalba
KLG3556-Kb,Gluten-Free Biscuits,Fluffy biscuits made without gluten,moda,3.79,Boadilla del Monte
MKO6956-2d,Lentil Soup,"Flavorful lentil soup, perfect for a quick meal.",moda,2.49,Aranjuez
WBS0856-Ff,Stainless Steel Grater,Multi-functional grater for cheese and vegetables.,vehiculos,14.99,Alcorcón
OAD8441-D7,Electric Griddle with Lid,"Non-stick griddle for pancakes, burgers, and more.",vehiculos,49.99,Alcalá de Henares
MXI1374-VW,Wireless HDMI Transmitter,Stream HD video wirelessly to your TV.,vehiculos,79.99,Arganda del Rey
ISQ5921-8K,Reclining Camping Chair,Foldable reclining camping chair with cup holder.,hogar,49.99,Coslada
JGC2021-d0,Travel Mug,Stainless steel travel mug with spill-proof lid.,vehiculos,18.99,Alcalá de Henares
AVN7936-GK,DIY Candle Kit,Everything you need to make your own scented candles at home.,hogar,34.99,Arganda del Rey
CLI3961-3M,Yoga Mat Carrier,Convenient carrier for transporting yoga mat.,vehiculos,12.99,Aranjuez
SGC0720-b4,High-Low Hem Tee,"Trendy high-low tee with a relaxed fit, ideal for weekends.",moda,22.99,Madrid
RKB0173-0L,Ranch Dressing,"Creamy ranch dressing, perfect for salads and dips.",tecnologia,2.59,Collado Villalba
LJT3404-uz,Chocolate Hazelnut Granola,Crunchy granola with chocolate and hazelnuts for breakfast.,hogar,4.49,Madrid
DST8528-8D,Eco-Friendly Notepad,Notepad made from recycled paper for sustainable note-taking.,vehiculos,8.99,Alcalá de Henares
KFK0225-9a,Electric Hot Pot,Compact electric pot for hot pot dining at home.,vehiculos,49.99,Coslada
GMY9475-g8,Fitness Mat,Thick and durable mat for workouts and yoga.,vehiculos,49.99,Boadilla del Monte
SHQ5119-Zv,Organic Quinoa,Nutritious organic quinoa for salads or sides,moda,4.29,Arganda del Rey
HXZ8275-Bt,Multi-Function Smartphone Holder,"Versatile holder that can be used on desks, cars, and more.",tecnologia,12.99,Madrid
EUF8327-6E,Scent Diffuser,Ultrasonic essential oil diffuser with LED lights.,tecnologia,34.99,Madrid
XSI6570-QH,Field Journal,Durable journal for nature observations and notes.,tecnologia,14.99,Aranjuez
TKJ4031-71,Puffer Winter Coat,A warm and stylish puffer coat perfect for winter weather.,tecnologia,99.99,Coslada
WVE6611-Mu,Coconut Oil,Versatile organic coconut oil for cooking and baking.,vehiculos,6.49,Arganda del Rey
MPP2685-uz,Frozen Berry Medley,"A mix of strawberries, blueberries, and raspberries, great for smoothies or desserts.",hogar,5.49,Alcalá de Henares
MXK7048-Wj,Professional Chef Knife,High-carbon stainless steel chef knife for precision cutting.,tecnologia,89.99,Madrid
MCD0856-pb,Maple Pecan Pancake Mix,"A fluffy pancake mix infused with maple and pecans, perfect for a hearty breakfast.",tecnologia,4.99,Boadilla del Monte
FME0187-Sv,Vegetable Korma,Creamy vegetable curry enriched with spices.,vehiculos,6.49,Madrid
BTL0577-jN,LED Christmas Tree Lights,String lights for decorating holiday trees.,moda,34.99,Alcobendas
NSX3757-8G,Kale Salad Kit,"Ready-to-eat salad with kale, lemon, and cheese.",tecnologia,4.99,Coslada
RZA0556-EV,Crispy Potato Tots,"Golden brown potato tots, crispy on the outside and fluffy inside.",hogar,3.69,Colmenar Viejo
UHL3874-Ai,Pet Hair Remover,Effective roller for removing pet hair from furniture.,moda,9.99,Alcalá de Henares
YSB6639-en,Radish Chips,"Crispy baked radish chips, a healthy snack alternative.",hogar,2.89,Boadilla del Monte
ZFT5818-IN,Fruit and Nut Medley,A healthy mix of assorted dried fruits and nuts for snacking.,hogar,5.99,Arganda del Rey
OCQ0556-El,Scented Soy Candles,Hand-poured candles made of natural soy wax.,tecnologia,19.99,Boadilla del Monte
HMI1617-p4,Vegetable Fried Rice,Quick and easy fried rice mixed with vegetables and soy sauce.,tecnologia,4.99,Alcobendas`;
