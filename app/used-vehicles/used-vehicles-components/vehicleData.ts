export type Vehicle = {
  id: number;
  name: string;
  image: string;
  type: string;
  tags: string[];
  mileage: string;
  engine: string;
  horsepower: string;
  location: string;
  condition: "Excellent" | "Good";
  rating: number;
  reviews: number;
  price: string;
  action: "Buy Now" | "Make Bid";
};


export const vehicles: Vehicle[] = [
  {
    id: 1,
    name: "Mercedes-Benz C63 2017",
    image: "/cars/c63.jpg",
    type: "Sedan",
    tags: ["Sedan", "Used Car", "Buy Now"],
    mileage: "49,000 km",
    engine: "AMG 4.0L",
    horsepower: "486 HP",
    location: "New-York",
    condition: "Excellent",
    rating: 4.8,
    reviews: 23,
    price: "$93,000",
    action: "Buy Now",
  },

  {
    id: 2,
    name: "Mercedes-Benz CLA200 2017",
    image: "/cars/cla.jpg",
    type: "Sedan",
    tags: ["Sedan", "New Vehicle"],
    mileage: "0,000 km",
    engine: "2.0L",
    horsepower: "172 HP",
    location: "New-York",
    condition: "Good",
    rating: 3.5,
    reviews: 12,
    price: "$45,500",
    action: "Buy Now",
  },

  {
    id: 3,
    name: "Mercedes-Benz E300 2017",
    image: "/cars/e300.jpg",
    type: "Sedan",
    tags: ["Sedan", "Used Car", "Auction"],
    mileage: "45,000 km",
    engine: "3.0L",
    horsepower: "273 HP",
    location: "Chicago",
    condition: "Excellent",
    rating: 4.8,
    reviews: 6,
    price: "$35,000",
    action: "Make Bid",
  },

  {
    id: 4,
    name: "Mercedes-Benz GLE450 AMG 2016",
    image: "/cars/gle.jpg",
    type: "SUV",
    tags: ["SUV", "Used Car"],
    mileage: "52,000 km",
    engine: "3.0L",
    horsepower: "362 HP",
    location: "Dubai",
    condition: "Excellent",
    rating: 4.7,
    reviews: 25,
    price: "$65,000",
    action: "Buy Now",
  },
];