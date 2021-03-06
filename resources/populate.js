var array = [{
    "name": "Gyro Plus",
    "description": "Casual counter serve for gyros, falafel & other Middle Eastern bites, with veggie options & dessert.",
    "address": "1011 W University Ave, Gainesville, FL 32601",
    "hours": "11AM - 9PM",
    "phone": "(352) 336-5323",
    "image": "https://bloximages.chicago2.vip.townnews.com/alligator.org/content/tncms/assets/v3/editorial/7/4b/74b74292-2fc7-11e3-811c-0019bb2963f4/5253784b419aa.image.jpg",
    "_id": ObjectId("59c19d9a0eea600ee87e49e7"),
    "rating": [],
    "tips": [],
    "__v": 0
}, {
    "name": "Sweet Dreams",
    "description": "Local spot for ice creams & Italian sorbets, made in-house each week using fresh ingredients.",
    "address": "3437 W University Ave, Gainesville, FL 32607",
    "hours": "12-10PM",
    "phone": "(352) 378-0532",
    "image": "http://gainesvilleicecream.com/images/sdLogo.png",
    "_id": ObjectId("59c19ef8a08c0810727505ee"),
    "rating": [],
    "tips": [],
    "__v": 0
}, {
    "name": "Karma Cream",
    "description": "Counter-serve operation turning out organic coffee plus vegan sandwiches & ice cream.",
    "address": " 607 W University Ave, Gainesville, FL 32601",
    "hours": "8AM-11PM",
    "phone": "(352) 505-6566",
    "image": "http://2.bp.blogspot.com/-YxiU9L3nYI4/VTqKS-VhsHI/AAAAAAAAATw/uomH3707lro/s1600/karma%2Bcream%2B.gif",
    "_id": ObjectId("59c19f4aa08c0810727505ef"),
    "rating": [],
    "tips": [],
    "__v": 0
}, {
    "name": "Caribbean Spice Inc",
    "description": "Cheap quick empanadas",
    "address": "1121 W University Ave, Gainesville, FL 32601",
    "hours": "11AM-5PM",
    "phone": " (352) 377-2712",
    "image": "http://media.superpages.com/media/photos/e840/92c0/cda8/ab15/883f/6392/8edb/2ba7/image/e84092c0cda8ab15883f63928edb2ba7.jpeg",
    "_id": ObjectId("59c19feba08c0810727505f0"),
    "rating": [],
    "tips": [],
    "__v": 0
}, {
    "name": "Mother's Pub & Grill",
    "description": "Casual Irish-themed space with a patio as well as a familiar menu of burgers & other bar food.",
    "address": "1017 W University Ave, Gainesville, FL 32601",
    "hours": "7:30AM-2AM",
    "phone": "(352) 378-8135",
    "image": "http://www.motherspub.com/uploads/1/3/5/8/13588430/1426340142.png",
    "_id": ObjectId("59c1aa7d4402a9170d068483"),
    "rating": [],
    "tips": [],
    "__v": 0
}, {
    "name": "Two Men and a Truck",
    "description": "Moving and storage service in Gainesville, Florida",
    "address": "1120 NW 53rd Ave, Gainesville, FL 32609",
    "hours": "8:30AM–5:30PM",
    "phone": "(352) 577-0078",
    "image": "https://twomenandatruck.com/sites/all/themes/twomenandatruck_zen/images/logo_centered_black.png",
    "_id": ObjectId("59c1bb8e3f334622504f63ae"),
    "rating": [],
    "tips": [],
    "__v": 0
}]
array.forEach(function(item) {db.businesses.insert(item)});