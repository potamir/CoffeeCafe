export interface MenuItemImage {
  src: string; // relative path under /public, e.g. "/images/risole-sayur-1.jpg"
  alt: string;
}

export interface MenuItem {
  name: string;
  price: number | string; // string for ranges like "3.000 / 2.500"
  unit?: string; // e.g. "/ cup muffin", "/ roti", "/ pcs"
  note?: string;
  images?: [MenuItemImage, MenuItemImage, MenuItemImage]; // exactly 3 images
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    category: "Gurih",
    items: [
      {
        name: "Risole Sayur",
        price: 2500,
        unit: "/ pcs",
        images: [
          { src: "/images/risole-sayur-1.jpg", alt: "Risole Sayur" },
          { src: "/images/risole-sayur-2.jpg", alt: "Risole Sayur close-up" },
          { src: "/images/risole-sayur-3.jpg", alt: "Risole Sayur detail" },
        ],
      },
      {
        name: "Risole Ragout",
        price: 3000,
        unit: "/ pcs",
        images: [
          { src: "/images/risole-ragout-1.jpg", alt: "Risole Ragout" },
          { src: "/images/risole-ragout-2.jpg", alt: "Risole Ragout close-up" },
          { src: "/images/risole-ragout-3.jpg", alt: "Risole Ragout detail" },
        ],
      },
      {
        name: "Pastel Bihun Sayur",
        price: 2500,
        unit: "/ pcs",
        images: [
          {
            src: "/images/pastel-bihun-sayur-1.jpg",
            alt: "Pastel Bihun Sayur",
          },
          {
            src: "/images/pastel-bihun-sayur-2.jpg",
            alt: "Pastel Bihun Sayur close-up",
          },
          {
            src: "/images/pastel-bihun-sayur-3.jpg",
            alt: "Pastel Bihun Sayur detail",
          },
        ],
      },
      {
        name: "Pastel Bihun Telur",
        price: 3500,
        unit: "/ pcs",
        images: [
          {
            src: "/images/pastel-bihun-telur-1.jpg",
            alt: "Pastel Bihun Telur",
          },
          {
            src: "/images/pastel-bihun-telur-2.jpg",
            alt: "Pastel Bihun Telur close-up",
          },
          {
            src: "/images/pastel-bihun-telur-3.jpg",
            alt: "Pastel Bihun Telur detail",
          },
        ],
      },
      {
        name: "Dadar Gulung",
        price: 3000,
        unit: "/ pcs",
        images: [
          { src: "/images/dadar-gulung-1.jpg", alt: "Dadar Gulung" },
          { src: "/images/dadar-gulung-2.jpg", alt: "Dadar Gulung close-up" },
          { src: "/images/dadar-gulung-3.jpg", alt: "Dadar Gulung detail" },
        ],
      },
      {
        name: "Onde-Onde Wijen",
        price: 2500,
        unit: "/ pcs",
        images: [
          { src: "/images/onde-onde-wijen-1.jpg", alt: "Onde-Onde Wijen" },
          {
            src: "/images/onde-onde-wijen-2.jpg",
            alt: "Onde-Onde Wijen close-up",
          },
          {
            src: "/images/onde-onde-wijen-3.jpg",
            alt: "Onde-Onde Wijen detail",
          },
        ],
      },
    ],
  },
  {
    category: "Bolu & Cake",
    items: [
      {
        name: "Bolu Chocolate Banana",
        price: 5000,
        unit: "/ cup muffin",
        images: [
          {
            src: "/images/bolu-chocolate-banana-1.jpg",
            alt: "Bolu Chocolate Banana",
          },
          {
            src: "/images/bolu-chocolate-banana-2.jpg",
            alt: "Bolu Chocolate Banana close-up",
          },
          {
            src: "/images/bolu-chocolate-banana-3.jpg",
            alt: "Bolu Chocolate Banana detail",
          },
        ],
      },
      {
        name: "Bolu Cake Tape",
        price: 5000,
        unit: "/ cup muffin",
        images: [
          { src: "/images/bolu-cake-tape-1.jpg", alt: "Bolu Cake Tape" },
          {
            src: "/images/bolu-cake-tape-2.jpg",
            alt: "Bolu Cake Tape close-up",
          },
          { src: "/images/bolu-cake-tape-3.jpg", alt: "Bolu Cake Tape detail" },
        ],
      },
      {
        name: "Bolu Chedar Cheese",
        price: 5000,
        unit: "/ cup muffin",
        images: [
          {
            src: "/images/bolu-chedar-cheese-1.jpg",
            alt: "Bolu Chedar Cheese",
          },
          {
            src: "/images/bolu-chedar-cheese-2.jpg",
            alt: "Bolu Chedar Cheese close-up",
          },
          {
            src: "/images/bolu-chedar-cheese-3.jpg",
            alt: "Bolu Chedar Cheese detail",
          },
        ],
      },
      {
        name: "Brownies Fudgy",
        price: 5000,
        unit: "/ cup muffin",
        images: [
          { src: "/images/brownies-fudgy-1.jpg", alt: "Brownies Fudgy" },
          {
            src: "/images/brownies-fudgy-2.jpg",
            alt: "Brownies Fudgy close-up",
          },
          {
            src: "/images/brownies-fudgy-3.jpg",
            alt: "Brownies Fudgy detail",
          },
        ],
      },
      {
        name: "Salt Bread",
        price: 5000,
        unit: "/ roti",
        images: [
          { src: "/images/salt-bread-1.jpg", alt: "Salt Bread" },
          { src: "/images/salt-bread-2.jpg", alt: "Salt Bread close-up" },
          { src: "/images/salt-bread-3.jpg", alt: "Salt Bread detail" },
        ],
      },
      {
        name: "Hokkaido Cheese Lotus",
        price: 5000,
        unit: "/ cup",
        images: [
          {
            src: "/images/hokkaido-cheese-lotus-1.jpg",
            alt: "Hokkaido Cheese Lotus",
          },
          {
            src: "/images/hokkaido-cheese-lotus-2.jpg",
            alt: "Hokkaido Cheese Lotus close-up",
          },
          {
            src: "/images/hokkaido-cheese-lotus-3.jpg",
            alt: "Hokkaido Cheese Lotus detail",
          },
        ],
      },
      {
        name: "Banana Milk Crispy",
        price: 3000,
        unit: "/ pcs",
        images: [
          {
            src: "/images/banana-milk-crispy-1.jpg",
            alt: "Banana Milk Crispy",
          },
          {
            src: "/images/banana-milk-crispy-2.jpg",
            alt: "Banana Milk Crispy close-up",
          },
          {
            src: "/images/banana-milk-crispy-3.jpg",
            alt: "Banana Milk Crispy detail",
          },
        ],
      },
    ],
  },
  {
    category: "Donat",
    items: [
      {
        name: "Donat Kentang Toping Gula",
        price: 2000,
        unit: "/ pcs",
        images: [
          {
            src: "/images/donat-kentang-gula-1.jpg",
            alt: "Donat Kentang Toping Gula",
          },
          {
            src: "/images/donat-kentang-gula-2.jpg",
            alt: "Donat Kentang Toping Gula close-up",
          },
          {
            src: "/images/donat-kentang-gula-3.jpg",
            alt: "Donat Kentang Toping Gula detail",
          },
        ],
      },
      {
        name: "Donat Pumpkin Toping Dancow",
        price: 3000,
        unit: "/ pcs",
        images: [
          {
            src: "/images/donat-pumpkin-dancow-1.jpg",
            alt: "Donat Pumpkin Toping Dancow",
          },
          {
            src: "/images/donat-pumpkin-dancow-2.jpg",
            alt: "Donat Pumpkin Toping Dancow close-up",
          },
          {
            src: "/images/donat-pumpkin-dancow-3.jpg",
            alt: "Donat Pumpkin Toping Dancow detail",
          },
        ],
      },
      {
        name: "Donat Pumpkin Toping Meses Ceres",
        price: 3000,
        unit: "/ pcs",
        images: [
          {
            src: "/images/donat-pumpkin-messes-1.jpg",
            alt: "Donat Pumpkin Toping Meses Ceres",
          },
          {
            src: "/images/donat-pumpkin-messes-2.jpg",
            alt: "Donat Pumpkin Toping Meses Ceres close-up",
          },
          {
            src: "/images/donat-pumpkin-messes-3.jpg",
            alt: "Donat Pumpkin Toping Meses Ceres detail",
          },
        ],
      },
    ],
  },
];

export default menuData;
