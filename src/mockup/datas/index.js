const destinations = [
  {
    id: 1,
    name: "Singkawang",
  },
  {
    id: 2,
    name: "Pontianak",
  },
  {
    id: 3,
    name: "Sambas",
  },
  {
    id: 4,
    name: "Kuching",
  },
  {
    id: 5,
    name: "Mempawah",
  },
  {
    id: 6,
    name: "Sintang",
  },
];

const carToRent = [
  {
    id: 1,
    name: "Bus Executive",
    brand: "Merchedez Benz",
    image: [
      "https://images.unsplash.com/photo-1562620669-98104534c6cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      "https://images.unsplash.com/photo-1621993202323-f438eec934ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    ],
    owndriven: 0,
    price: "2000000",
    availability: 0,
    maintype: "Mini Bus",
    type: "Van",
  },
  {
    id: 2,
    name: "Avanza",
    brand: "Toyota",
    image: [
      "https://images.unsplash.com/photo-1562620669-98104534c6cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      "https://images.unsplash.com/photo-1621993202323-f438eec934ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    ],
    owndriven: 0,
    price: "2000000",
    availability: 0,
    maintype: "Bus",
    type: "Van",
  },
  {
    id: 3,
    name: "Avanza",
    brand: "Toyota",
    image: [
      "https://images.unsplash.com/photo-1562620669-98104534c6cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      "https://images.unsplash.com/photo-1621993202323-f438eec934ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    ],
    owndriven: 0,
    price: "2000000",
    availability: 0,
    maintype: "Mini Bus",
    type: "Van",
  },
  {
    id: 4,
    name: "Bus Large",
    brand: "Mistubishi",
    image: [
      "https://images.unsplash.com/photo-1562620669-98104534c6cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      "https://images.unsplash.com/photo-1621993202323-f438eec934ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    ],
    owndriven: 0,
    price: "2000000",
    availability: 0,
    maintype: "Bus",
    type: "Van",
  },
  {
    id: 5,
    name: "Avanza",
    brand: "Merchedez Benz",
    image: [
      "https://images.unsplash.com/photo-1562620669-98104534c6cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      "https://images.unsplash.com/photo-1621993202323-f438eec934ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    ],
    owndriven: 0,
    price: "2000000",
    availability: 0,
    maintype: "Bus",
    type: "Van",
  },
  {
    id: 6,
    name: "Avanza",
    brand: "Toyota",
    image: [
      "https://images.unsplash.com/photo-1562620669-98104534c6cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      "https://images.unsplash.com/photo-1621993202323-f438eec934ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    ],
    owndriven: 0,
    price: "2000000",
    availability: 0,
    maintype: "Bus",
    type: "Van",
  },
  {
    id: 7,
    name: "Avanza",
    brand: "Toyota",
    image: [
      "https://images.unsplash.com/photo-1562620669-98104534c6cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      "https://images.unsplash.com/photo-1621993202323-f438eec934ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    ],
    owndriven: 0,
    price: "2000000",
    availability: 0,
    maintype: "Bus",
    type: "Van",
  },
  {
    id: 8,
    name: "Bus Biasa",
    brand: "Merchedez Benz",
    image: [
      "https://images.unsplash.com/photo-1562620669-98104534c6cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      "https://images.unsplash.com/photo-1621993202323-f438eec934ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    ],
    owndriven: 1,
    price: "2000000",
    availability: 0,
    maintype: "Bus",
    type: "Van",
  },
  {
    id: 9,
    name: "Avanza",
    brand: "Mistubishi",
    image: [
      "https://images.unsplash.com/photo-1562620669-98104534c6cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      "https://images.unsplash.com/photo-1621993202323-f438eec934ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    ],
    owndriven: true,
    price: "2000000",
    availability: 0,
    maintype: "Mini Bus",
    type: "Van",
  },
  {
    id: 10,
    name: "Bus Kecil",
    brand: "Merchedez Benz",
    image: [
      "https://images.unsplash.com/photo-1562620669-98104534c6cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      "https://images.unsplash.com/photo-1621993202323-f438eec934ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    ],
    owndriven: 1,
    price: "2000000",
    availability: 1,
    maintype: "Mini Bus",
    type: "Van",
  },
  {
    id: 11,
    name: "Avanza",
    brand: "Mistubishi",
    image: [
      "https://images.unsplash.com/photo-1562620669-98104534c6cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      "https://images.unsplash.com/photo-1621993202323-f438eec934ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    ],
    owndriven: 1,
    price: "2000000",
    availability: 1,
    maintype: "Bus",
    type: "Van",
  },
  {
    id: 12,
    name: "Avanza",
    brand: "Mistubishi",
    image: [
      "https://images.unsplash.com/photo-1562620669-98104534c6cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      "https://images.unsplash.com/photo-1621993202323-f438eec934ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    ],
    owndriven: 1,
    price: "2000000",
    availability: 1,
    maintype: "Mini Bus",
    type: "Van",
  },
  {
    id: 13,
    name: "Avanza",
    brand: "Mistubishi",
    image: [
      "https://images.unsplash.com/photo-1562620669-98104534c6cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      "https://images.unsplash.com/photo-1621993202323-f438eec934ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    ],
    owndriven: 1,
    price: "2000000",
    availability: 1,
    maintype: "Mini Bus",
    type: "Van",
  },
  {
    id: 14,
    name: "Avanza",
    brand: "Mistubishi",
    image: [
      "https://images.unsplash.com/photo-1562620669-98104534c6cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      "https://images.unsplash.com/photo-1621993202323-f438eec934ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    ],
    owndriven: 1,
    price: "2000000",
    availability: 1,
    maintype: "Mini Bus",
    type: "Van",
  },
  {
    id: 15,
    name: "Avanza",
    brand: "Mistubishi",
    image: [
      "https://images.unsplash.com/photo-1562620669-98104534c6cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      "https://images.unsplash.com/photo-1621993202323-f438eec934ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    ],
    owndriven: 1,
    price: "2000000",
    availability: 1,
    maintype: "Mini Bus",
    type: "Van",
  },
  {
    id: 16,
    name: "Avanza",
    brand: "Mistubishi",
    image: [
      "https://images.unsplash.com/photo-1562620669-98104534c6cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      "https://images.unsplash.com/photo-1621993202323-f438eec934ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    ],
    owndriven: 1,
    price: "2000000",
    availability: 1,
    maintype: "Mini Bus",
    type: "Van",
  },
  {
    id: 17,
    name: "Avanza",
    brand: "Mistubishi",
    image: [
      "https://images.unsplash.com/photo-1562620669-98104534c6cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      "https://images.unsplash.com/photo-1621993202323-f438eec934ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    ],
    owndriven: 1,
    price: "2000000",
    availability: 1,
    maintype: "Mini Bus",
    type: "Van",
  },
  {
    id: 18,
    name: "Avanza",
    brand: "Mistubishi",
    image: [
      "https://images.unsplash.com/photo-1562620669-98104534c6cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      "https://images.unsplash.com/photo-1621993202323-f438eec934ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    ],
    owndriven: 1,
    price: "2000000",
    availability: 1,
    maintype: "Mini Bus",
    type: "Van",
  },
];

export { destinations, carToRent };