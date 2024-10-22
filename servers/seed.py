from app import create_app, db
from models.listing import Listing

app = create_app()

# Sample listings data
sample_listings = [
    {"title": "Cozy Tiny Home", "description": "A cozy tiny home in the city.", "category": "tiny homes", "price_per_night": 85.0, "location": "City Center", "bedrooms": 1, "bathrooms": 1, "amenities": "WiFi, Kitchen", "rating": 4.5, "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg1SiXZVr2nEIzVyCZ9te-fXIFtUfKLBQOig&s"},
    {"title": "Beachfront Bungalow", "description": "A beautiful bungalow by the beach.", "category": "beach", "price_per_night": 150.0, "location": "Beachside", "bedrooms": 2, "bathrooms": 1, "amenities": "Pool, Beach Access", "rating": 4.8, "image_url": "https://www.bungalowskeylargo.com/wp-content/uploads/2019/02/Waterfront-Bungalows-Exterior-1855x1080.gif"},
    {"title": "Luxurious Pool House", "description": "Relax in this luxurious pool house.", "category": "pool house", "price_per_night": 200.0, "location": "Los Angeles", "bedrooms": 3, "bathrooms": 2, "amenities": "Private Pool, BBQ", "rating": 4.9, "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLFwlHBrv8qBn969drTxtkP37vmBnA67LNIw&s"},
    {"title": "Charming Bed & Breakfast", "description": "Enjoy a charming stay at this bed & breakfast.", "category": "bed and breakfast", "price_per_night": 120.0, "location": "Countryside", "bedrooms": 5, "bathrooms": 5, "amenities": "Free Breakfast, WiFi", "rating": 4.7, "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToyhamQKqvQjTnu5fDxPA-uHUYGnQODRK77g&s"},
    # More listings for tiny homes
    {"title": "Modern Tiny House", "description": "A modern tiny house with a beautiful view.", "category": "tiny homes", "price_per_night": 90.0, "location": "Hillside", "bedrooms": 1, "bathrooms": 1, "amenities": "WiFi, Scenic View", "rating": 4.6, "image_url": "https://a0.muscache.com/im/pictures/miso/Hosting-757413743156244032/original/aadf62aa-b24c-4e25-a944-f1dab396e5f8.jpeg?im_w=720"},
    {"title": "Rustic Tiny Cabin", "description": "A rustic tiny cabin in the woods.", "category": "tiny homes", "price_per_night": 75.0, "location": "Forest", "bedrooms": 1, "bathrooms": 1, "amenities": "Quiet, Nature", "rating": 4.5, "image_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/514468534.jpg?k=f2455b7bba8dabc948abbb19cd4e30f14bde67a432f5641f87858f68962cb50e&o=&hp=1"},
    {"title": "Chic Tiny Studio", "description": "A chic tiny studio with modern amenities.", "category": "tiny homes", "price_per_night": 100.0, "location": "Urban Area", "bedrooms": 1, "bathrooms": 1, "amenities": "Smart TV, Kitchen", "rating": 4.8, "image_url": "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-1076816217049133585/original/c397436a-3d22-4495-ab93-44d7ed1b861f.jpeg?im_w=720"},
    {"title": "Quaint Tiny House", "description": "A quaint tiny house perfect for a weekend getaway.", "category": "tiny homes", "price_per_night": 80.0, "location": "Countryside", "bedrooms": 1, "bathrooms": 1, "amenities": "Outdoor Firepit", "rating": 4.4, "image_url": "https://i.pinimg.com/736x/df/9e/3a/df9e3a2f8d910866bf7aa04ca9a58e04.jpg"},
    {"title": "Eco-Friendly Tiny Home", "description": "An eco-friendly tiny home with solar panels.", "category": "tiny homes", "price_per_night": 95.0, "location": "Suburb", "bedrooms": 1, "bathrooms": 1, "amenities": "Eco-Friendly, Garden", "rating": 4.7, "image_url": "https://images.stockcake.com/public/7/9/b/79b6ba89-a4c7-4e21-b443-92e5c44a4faa_medium/eco-friendly-tiny-home-stockcake.jpg"},
    {"title": "Tiny House on Wheels", "description": "A tiny house on wheels for travel lovers.", "category": "tiny homes", "price_per_night": 85.0, "location": "Mobile", "bedrooms": 1, "bathrooms": 1, "amenities": "Flexible Location", "rating": 4.6, "image_url": "https://i0.wp.com/gotinybefree.com/wp-content/uploads/2022/08/incredibox-painted-flower-boxes-shutters-scaled.jpg?fit=2560%2C1920&ssl=1"},
    # More listings for beach properties
    {"title": "Ocean View Beach House", "description": "A stunning ocean view beach house.", "category": "beach", "price_per_night": 250.0, "location": "Malibu", "bedrooms": 3, "bathrooms": 2, "amenities": "Ocean View, Private Deck", "rating": 4.9, "image_url": "https://img.freepik.com/premium-photo/panoramic-ocean-view-beach-house-with-sunset-background_706399-12178.jpg"},
    {"title": "Coastal Retreat", "description": "A coastal retreat with beautiful surroundings.", "category": "beach", "price_per_night": 200.0, "location": "Florida", "bedrooms": 2, "bathrooms": 2, "amenities": "Free Parking", "rating": 4.8, "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjlJwkndhcnyPaigD1cLdogmrBtQky4FBnEg&s"},
    {"title": "Luxury Beachfront Villa", "description": "A luxurious beachfront villa with top amenities.", "category": "beach", "price_per_night": 500.0, "location": "Miami", "bedrooms": 4, "bathrooms": 3, "amenities": "Infinity Pool, Spa", "rating": 5.0, "image_url": "https://images.stockcake.com/public/2/7/d/27d4dc09-2b68-4099-8b11-4b14dcf084a2_large/luxury-beachfront-villa-stockcake.jpg"},
    {"title": "Charming Beach Cottage", "description": "A charming cottage close to the beach.", "category": "beach", "price_per_night": 180.0, "location": "Oregon Coast", "bedrooms": 2, "bathrooms": 1, "amenities": "BBQ Grill", "rating": 4.6, "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQ4OptclLIKEFugX9tK14eiPOB4-tK2oXtQ&s"},
    {"title": "Seaside Apartment", "description": "A modern apartment near the seaside.", "category": "beach", "price_per_night": 160.0, "location": "Cape Cod", "bedrooms": 2, "bathrooms": 1, "amenities": "Beach Access", "rating": 4.7, "image_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/355059135.jpg?k=9018f9c705cd11450adbd55e95a55579c326682111e7614b4641a45059783072&o=&hp=1"},
    {"title": "Rustic Beach Hut", "description": "A rustic beach hut with a laid-back vibe.", "category": "beach", "price_per_night": 90.0, "location": "Hawaii", "bedrooms": 1, "bathrooms": 1, "amenities": "Outdoor Shower", "rating": 4.5, "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBK0WFHh7dtBoCiUJx88M53FRqh-IZ7a6upA&s"},
    {"title": "Elegant Beach Resort", "description": "An elegant beach resort with luxury amenities.", "category": "beach", "price_per_night": 400.0, "location": "Cancun", "bedrooms": 5, "bathrooms": 4, "amenities": "All-Inclusive", "rating": 4.9, "image_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/68/b2/59/elegant-beach-resort.jpg?w=700&h=-1&s=1"},
    {"title": "Sunny Beach House", "description": "A sunny beach house perfect for families.", "category": "beach", "price_per_night": 300.0, "location": "Santa Monica", "bedrooms": 3, "bathrooms": 2, "amenities": "Family Friendly", "rating": 4.8, "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbtQi7i2sR_5B733AiFtGRL9hJsVMS0B8aPA&s"},
    {"title": "Tranquil Beach Retreat", "description": "A tranquil retreat just steps from the beach.", "category": "beach", "price_per_night": 220.0, "location": "Myrtle Beach", "bedrooms": 3, "bathrooms": 2, "amenities": "Hot Tub", "rating": 4.9, "image_url": "https://uc.orez.io/i/d840aacd122b4f26a3df83d294bd0f42-Large"},
    {"title": "Modern Beach House", "description": "A modern beach house with open concept living.", "category": "beach", "price_per_night": 350.0, "location": "Newport", "bedrooms": 4, "bathrooms": 3, "amenities": "Oceanfront", "rating": 4.9, "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGB9qeKMKQc1l7Y563pzrjyMMXXqbFW6EzkQ&s"},
    # More listings for pool houses
    {"title": "Luxury Poolside Villa", "description": "A luxury villa with a stunning pool.", "category": "pool house", "price_per_night": 600.0, "location": "Beverly Hills", "bedrooms": 5, "bathrooms": 4, "amenities": "Infinity Pool, Poolside Bar", "rating": 5.0, "image_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/153330066.jpg?k=6631fe7ced745daeb0ba5a795e61dad89fbe4581fee841a6da416fcda17f811c&o=&hp=1"},
    {"title": "Private Pool Cottage", "description": "A cozy cottage with a private pool.", "category": "pool house", "price_per_night": 250.0, "location": "Palm Springs", "bedrooms": 2, "bathrooms": 2, "amenities": "Outdoor Shower", "rating": 4.8, "image_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/300318269.jpg?k=6ca11768907637154673dbf87a7c1df1993fe082a110a2d46c9239a58b08941b&o=&hp=1"},
    {"title": "Spacious Pool House", "description": "A spacious house with a large pool.", "category": "pool house", "price_per_night": 350.0, "location": "Orlando", "bedrooms": 4, "bathrooms": 3, "amenities": "Game Room", "rating": 4.9, "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOEmtEf6JiRvTzKGgeJvYZDGJCmgqe8M_2Q&s"},
    {"title": "Charming Poolside Retreat", "description": "A charming retreat with a cozy pool.", "category": "pool house", "price_per_night": 200.0, "location": "Sedona", "bedrooms": 2, "bathrooms": 2, "amenities": "Mountain View", "rating": 4.7, "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQafKTPpG0KFMTbX4qHou5bgAVdOj68P4SBwA&s"},
    {"title": "Modern Luxury Pool House", "description": "A modern pool house with all amenities.", "category": "pool house", "price_per_night": 450.0, "location": "Miami", "bedrooms": 5, "bathrooms": 5, "amenities": "Private Chef", "rating": 5.0, "image_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c6729699929813.5efd8d401514b.png"},
    {"title": "Tranquil Pool House", "description": "A tranquil house with a serene pool.", "category": "pool house", "price_per_night": 300.0, "location": "Austin", "bedrooms": 3, "bathrooms": 2, "amenities": "Fire Pit", "rating": 4.8, "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4A60yYgdZXJcjlC2HVZDVv7DyQRluIF727w&s"},
    {"title": "Tropical Pool Villa", "description": "A tropical villa with an amazing pool.", "category": "pool house", "price_per_night": 550.0, "location": "Hawaii", "bedrooms": 4, "bathrooms": 3, "amenities": "Tropical Garden", "rating": 4.9, "image_url": "https://www.silavadeeresort.com/wp-content/uploads/2020/05/tropical-pool-villa-8.jpg"},
    {"title": "Rustic Pool Cabin", "description": "A rustic cabin with a beautiful pool.", "category": "pool house", "price_per_night": 180.0, "location": "Colorado", "bedrooms": 2, "bathrooms": 1, "amenities": "Nature Trails", "rating": 4.6, "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOL8w8tt01vjX_UPEBYVr2IBgddIyc5uaoBA&s"},
    {"title": "Family Pool House", "description": "A family-friendly house with a large pool.", "category": "pool house", "price_per_night": 350.0, "location": "Orlando", "bedrooms": 4, "bathrooms": 3, "amenities": "Disney Access", "rating": 4.9, "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzEM1e3ImMjYxXgkrV6Nc5NoD31bOXyGwmA&s"},
    {"title": "Elegant Poolside Getaway", "description": "An elegant getaway with a stunning pool.", "category": "pool house", "price_per_night": 500.0, "location": "Los Angeles", "bedrooms": 5, "bathrooms": 4, "amenities": "Poolside BBQ", "rating": 5.0, "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgW5qjab3aTST4-fZSCokSTIKHltQRsaM01Q&s"},
    # More listings for bed and breakfasts
    {"title": "Charming Bed & Breakfast", "description": "A charming bed & breakfast with a homey feel.", "category": "bed and breakfast", "price_per_night": 120.0, "location": "Countryside", "bedrooms": 5, "bathrooms": 5, "amenities": "Home-cooked Meals", "rating": 4.7, "image_url": "https://a0.muscache.com/im/pictures/1bd9a7ab-cd73-494e-b22d-fbd628860fa6.jpg?im_w=720"},
    {"title": "Historic Bed & Breakfast", "description": "A historic bed & breakfast with antique decor.", "category": "bed and breakfast", "price_per_night": 150.0, "location": "Old Town", "bedrooms": 3, "bathrooms": 2, "amenities": "Free Wifi", "rating": 4.6, "image_url": "https://na.rdcpix.com/1547644717/15f9700fc804fc36a9c8144e554647f4w-c0rd-w832_h468_r4_q80.jpg"},
    {"title": "Cozy Bed & Breakfast", "description": "A cozy bed & breakfast perfect for couples.", "category": "bed and breakfast", "price_per_night": 130.0, "location": "Downtown", "bedrooms": 2, "bathrooms": 1, "amenities": "Romantic Setting", "rating": 4.8, "image_url": "https://img.freepik.com/premium-photo/cozy-bed-breakfast-quaint-village_1022456-139115.jpg"},
    {"title": "Luxury Bed & Breakfast", "description": "A luxury bed & breakfast with gourmet meals.", "category": "bed and breakfast", "price_per_night": 200.0, "location": "City Center", "bedrooms": 4, "bathrooms": 4, "amenities": "Spa Services", "rating": 5.0, "image_url": "https://c8.alamy.com/comp/A43K1T/a-luxury-bed-and-breakfast-apartment-part-of-a-converted-stable-block-A43K1T.jpg"},
    {"title": "Quaint Bed & Breakfast", "description": "A quaint bed & breakfast with a garden.", "category": "bed and breakfast", "price_per_night": 110.0, "location": "Rural Area", "bedrooms": 3, "bathrooms": 2, "amenities": "Garden Access", "rating": 4.5, "image_url": "https://www.usnews.com/object/image/00000165-af72-d161-a57f-ef7ab7a00000/18-the-black-walnut-bed-breakfast-inn4-irishguy-design-studio-inc.jpg?update-time=1536345753929&size=responsive640"},
    {"title": "Elegant Bed & Breakfast", "description": "An elegant bed & breakfast with modern amenities.", "category": "bed and breakfast", "price_per_night": 180.0, "location": "Suburban", "bedrooms": 3, "bathrooms": 2, "amenities": "Elegant Dining", "rating": 4.9, "image_url": "https://c8.alamy.com/comp/CTF0WE/a-classic-and-elegant-bed-and-breakfast-located-in-southern-california-CTF0WE.jpg"},
    {"title": "Chic Bed & Breakfast", "description": "A chic bed & breakfast with contemporary decor.", "category": "bed and breakfast", "price_per_night": 160.0, "location": "City Center", "bedrooms": 4, "bathrooms": 3, "amenities": "Free Snacks", "rating": 4.8, "image_url": "https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/532654819.jpg?k=888780079f87b4c2f022c880ed56e0a390697e07d8d06c1141b5def6beb4998c&o="},
    {"title": "Rustic Bed & Breakfast", "description": "A rustic bed & breakfast surrounded by nature.", "category": "bed and breakfast", "price_per_night": 140.0, "location": "Mountain Area", "bedrooms": 3, "bathrooms": 2, "amenities": "Nature Trails", "rating": 4.7, "image_url": "https://i.ytimg.com/vi/c83vCX3vjeY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB5xKfOeDkanblJKd8SV2NdfxNt1A"},
    {"title": "Family Bed & Breakfast", "description": "A family-friendly bed & breakfast with activities.", "category": "bed and breakfast", "price_per_night": 170.0, "location": "Countryside", "bedrooms": 5, "bathrooms": 5, "amenities": "Family Activities", "rating": 4.9, "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPgo9lwcRafLT9qKTH7zcuR5H0tWOiUVLbQ&s"},
    {"title": "Country Bed & Breakfast", "description": "A country bed & breakfast with a peaceful atmosphere.", "category": "bed and breakfast", "price_per_night": 125.0, "location": "Rural Area", "bedrooms": 3, "bathrooms": 2, "amenities": "Scenic Views", "rating": 4.6, "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6gHQhsEIQT9GSg89t9-eqIil99XKf-CVhIg&s"},
]

def seed_database():
    with app.app_context():
        db.create_all()
        for listing in sample_listings:
            new_listing = Listing(**listing)
            db.session.add(new_listing)
        db.session.commit()
        print("Database seeded!")

if __name__ == '__main__':
   seed_database()
