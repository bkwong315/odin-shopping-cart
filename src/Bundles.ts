type BundleType = {
  id: string;
  product_type: string;
  name: string;
  price: string;
  img: string;
};

type BundlesType = {
  [bundleId: string]: BundleType;
};

const Bundles: BundlesType = {
  ryzen_7000_star_wars: {
    id: 'ryzen_7000_star_wars',
    product_type: 'bundle',
    name: 'Ryzen 7000 Series STAR WARS Jedi: Survivor Game Bundle',
    price: '0',
    img: './assets/imgs/carousel/jedi-survivor-bundle.jpg',
  },
  radeon_graphics_tlou: {
    id: 'radeon_graphics_tlou',
    product_type: 'bundle',
    name: 'AMD Radeon™ RX Graphics Cards Game Bundle',
    price: '0',
    img: './assets/imgs/carousel/last-of-us-bundle.jpg',
  },
};

function isBundle(object: any): object is BundleType {
  return object.product_type === 'bundle';
}

export default Bundles;

export { BundlesType, BundleType, isBundle };
