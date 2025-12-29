// Centralized product data
export const products = [
  {
    id: 1,
    title: "Classic T-Shirt",
    description: "A timeless classic t-shirt made from 100% organic cotton. Perfect for everyday wear with a comfortable fit that never goes out of style.",
    price: 120,
    rating: 4.5,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a",
    ],
    category: "t-shirts",
    style: "casual",
    colors: ["#FFFFFF", "#000000", "#2F4F4F"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    isNew: true,
    isBestSeller: false,
    discount: null,
  },
  {
    id: 2,
    title: "Slim Fit Shirt",
    description: "Elegant slim fit shirt perfect for both casual and formal occasions. Made with premium cotton blend for ultimate comfort.",
    price: 140,
    oldPrice: 180,
    rating: 3.5,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
    ],
    category: "shirts",
    style: "formal",
    colors: ["#FFFFFF", "#87CEEB", "#FFC0CB"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    isNew: true,
    isBestSeller: false,
    discount: 22,
  },
  {
    id: 3,
    title: "Oversized Hoodie",
    description: "Stay cozy with our oversized hoodie. Features a spacious kangaroo pocket and adjustable drawstring hood.",
    price: 220,
    rating: 5,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    images: [
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
      "https://images.unsplash.com/photo-1509942774463-acf339cf87d5",
    ],
    category: "hoodie",
    style: "casual",
    colors: ["#000000", "#808080", "#2E2E5D"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    isNew: true,
    isBestSeller: true,
    discount: null,
  },
  {
    id: 4,
    title: "Denim Jacket",
    description: "Classic denim jacket with a modern twist. Features distressed details and a comfortable relaxed fit.",
    price: 210,
    oldPrice: 260,
    rating: 4.5,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    images: [
      "https://images.unsplash.com/photo-1520975916090-3105956dac38",
      "https://images.unsplash.com/photo-1551537482-f2075a1d41f2",
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef",
    ],
    category: "shirts",
    style: "casual",
    colors: ["#4169E1", "#000080", "#87CEEB"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    isNew: true,
    isBestSeller: false,
    discount: 19,
  },
  {
    id: 5,
    title: "Graphic T-Shirt",
    description: "Express yourself with our graphic t-shirt collection. Features unique artistic prints on premium cotton.",
    price: 130,
    rating: 4.5,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd0",
    ],
    category: "t-shirts",
    style: "casual",
    colors: ["#000000", "#FFFFFF", "#FF6347"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    isNew: false,
    isBestSeller: true,
    discount: null,
  },
  {
    id: 6,
    title: "Leather Jacket",
    description: "Premium genuine leather jacket with a sleek design. Perfect for making a bold fashion statement.",
    price: 210,
    oldPrice: 260,
    rating: 3.5,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5",
      "https://images.unsplash.com/photo-1520975916090-3105956dac38",
      "https://images.unsplash.com/photo-1559551409-dadc959f76b8",
    ],
    category: "shirts",
    style: "party",
    colors: ["#000000", "#8B4513", "#2F4F4F"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    isNew: false,
    isBestSeller: true,
    discount: 19,
  },
  {
    id: 7,
    title: "Casual Hoodie",
    description: "Comfortable casual hoodie for everyday wear. Soft fleece interior keeps you warm all day.",
    price: 200,
    rating: 5,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
      "https://images.unsplash.com/photo-1509942774463-acf339cf87d5",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    ],
    category: "hoodie",
    style: "casual",
    colors: ["#808080", "#000000", "#2E2E5D"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    isNew: false,
    isBestSeller: true,
    discount: null,
  },
  {
    id: 8,
    title: "Slim Fit Jeans",
    description: "Modern slim fit jeans with stretch comfort. Perfect balance of style and flexibility.",
    price: 150,
    oldPrice: 180,
    rating: 4.5,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
      "https://images.unsplash.com/photo-1542272604-787c3835535d",
      "https://images.unsplash.com/photo-1555689502-c4b22d76c56f",
    ],
    category: "jeans",
    style: "casual",
    colors: ["#000080", "#4169E1", "#000000"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    isNew: false,
    isBestSeller: true,
    discount: 17,
  },
  {
    id: 9,
    title: "Gradient Graphic T-shirt",
    description: "Stand out with this unique gradient graphic t-shirt. Vibrant colors that make a statement.",
    price: 145,
    rating: 3.5,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1",
    ],
    category: "t-shirts",
    style: "party",
    colors: ["#FF6347", "#4169E1", "#32CD32"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    isNew: false,
    isBestSeller: false,
    discount: null,
  },
  {
    id: 10,
    title: "Polo with Tipping Details",
    description: "Classic polo shirt with elegant tipping details on collar and sleeves. Perfect for smart casual looks.",
    price: 180,
    rating: 4.5,
    reviews: 134,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
    images: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    ],
    category: "shirts",
    style: "formal",
    colors: ["#FFFFFF", "#000080", "#006400"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    isNew: false,
    isBestSeller: false,
    discount: null,
  },
  {
    id: 11,
    title: "Black Striped T-shirt",
    description: "Trendy striped t-shirt with a modern fit. Versatile piece that pairs well with any outfit.",
    price: 120,
    oldPrice: 150,
    rating: 5,
    reviews: 187,
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd0",
    images: [
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd0",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a",
    ],
    category: "t-shirts",
    style: "casual",
    colors: ["#000000", "#FFFFFF", "#808080"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    isNew: false,
    isBestSeller: false,
    discount: 20,
  },
  {
    id: 12,
    title: "Checkered Shirt",
    description: "Classic checkered pattern shirt. Timeless design that works for both casual and semi-formal occasions.",
    price: 180,
    rating: 4.5,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    ],
    category: "shirts",
    style: "casual",
    colors: ["#FF0000", "#000080", "#006400"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    isNew: false,
    isBestSeller: false,
    discount: null,
  },
  {
    id: 13,
    title: "Skinny Fit Jeans",
    description: "Ultra-slim skinny jeans with premium stretch denim. Hugs your legs for a sleek silhouette.",
    price: 240,
    oldPrice: 260,
    rating: 3.5,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
      "https://images.unsplash.com/photo-1555689502-c4b22d76c56f",
    ],
    category: "jeans",
    style: "casual",
    colors: ["#000000", "#000080", "#4169E1"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    isNew: false,
    isBestSeller: false,
    discount: 8,
  },
  {
    id: 14,
    title: "Sleeve Striped T-shirt",
    description: "Casual t-shirt with striped sleeves. A fun twist on the classic tee.",
    price: 130,
    oldPrice: 160,
    rating: 4.5,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a",
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1",
    ],
    category: "t-shirts",
    style: "casual",
    colors: ["#FFFFFF", "#000000", "#FF6347"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    isNew: false,
    isBestSeller: false,
    discount: 19,
  },
  {
    id: 15,
    title: "Gym Shorts",
    description: "Lightweight and breathable gym shorts. Perfect for workouts with moisture-wicking technology.",
    price: 80,
    rating: 4.5,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b",
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    ],
    category: "shorts",
    style: "gym",
    colors: ["#000000", "#808080", "#000080"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    isNew: true,
    isBestSeller: false,
    discount: null,
  },
  {
    id: 16,
    title: "Polo with Contrast Trims",
    description: "Stylish polo shirt with contrast trim details. Elevate your casual wardrobe.",
    price: 212,
    oldPrice: 242,
    rating: 4.0,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
    images: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    ],
    category: "shirts",
    style: "formal",
    colors: ["#FFFFFF", "#000080", "#8B0000"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    isNew: false,
    isBestSeller: false,
    discount: 12,
  },
];

// Helper functions
export const getProductById = (id) => products.find((p) => p.id === parseInt(id));

export const getNewArrivals = () => products.filter((p) => p.isNew);

export const getBestSellers = () => products.filter((p) => p.isBestSeller);

export const getProductsByCategory = (category) =>
  products.filter((p) => p.category === category.toLowerCase());

export const getProductsByStyle = (style) =>
  products.filter((p) => p.style === style.toLowerCase());

export const searchProducts = (query) => {
  const searchTerm = query.toLowerCase();
  return products.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm) ||
      p.category.toLowerCase().includes(searchTerm) ||
      p.style.toLowerCase().includes(searchTerm)
  );
};

export const filterProducts = ({ category, style, minPrice, maxPrice, sizes, colors }) => {
  return products.filter((p) => {
    if (category && p.category !== category.toLowerCase()) return false;
    if (style && p.style !== style.toLowerCase()) return false;
    if (minPrice && p.price < minPrice) return false;
    if (maxPrice && p.price > maxPrice) return false;
    if (sizes && sizes.length > 0 && !sizes.some((s) => p.sizes.includes(s))) return false;
    if (colors && colors.length > 0 && !colors.some((c) => p.colors.includes(c))) return false;
    return true;
  });
};

export const categories = ["T-shirts", "Shirts", "Hoodie", "Jeans", "Shorts"];
export const styles = ["Casual", "Formal", "Party", "Gym"];
export const allColors = [
  "#000000", "#FFFFFF", "#808080", "#FF0000", "#000080", 
  "#4169E1", "#006400", "#8B4513", "#FF6347", "#FFC0CB"
];
export const allSizes = ["Small", "Medium", "Large", "X-Large"];

