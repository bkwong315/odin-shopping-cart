type BundlesType = {
  [bundleId: string]: {
    id: string;
    name: string;
    price: string;
    img: string;
  };
};

const Bundles: BundlesType = {
  ryzen_7000_star_wars: {
    id: 'ryzen_7000_star_wars',
    name: 'Ryzen 7000 Series STAR WARS Jedi: Survivor Game Bundle',
    price: '0',
    img: './assets/imgs/carousel/jedi-survivor-bundle',
  },
  radeon_graphics_tlou: {
    id: 'radeon_graphics_tlou',
    name: 'AMD Radeon™ RX Graphics Cards Game Bundle',
    price: '0',
    img: './assets/imgs/carousel/last-of-us-bundle',
  },
};

export default Bundles;
