interface Processor {
  id: string;
  product_type: string;
  name: string;
  sku: string;
  stock: string;
  price: string;
  salePrice?: string;
  imgs: {
    [key: string]: string;
  };
  details: {
    key_points: string[];
    general_specs: {
      section_name: string;
      data: {
        platform: [string, string];
        product_family: [string, string];
        product_line: [string, string];
        core_count: [string, string];
        thread_count: [string, string];
        max_boost_clock: [string, string];
        base_clock: [string, string];
        l2_cache_size: [string, string];
        l3_cache_size: [string, string];
        default_tdp: [string, string];
        processor_tech: [string, string];
        socket_type: [string, string];
        tjmax: [string, string];
        launch_date: [string, string];
        os_support: [string, string];
        l1_cache_size?: [string, string];
        cTDP?: [string, string];
        unlocked?: [string, string];
        pib?: [string, string];
        socket_count?: [string, string];
        [key: string]: [string, string];
      };
    };
    connectivity: {
      section_name: string;
      data: {
        mem_type: [string, string];
        channel_count?: [string, string];
        max_mem_speed?: [string, string];
        [key: string]: [string, string];
      };
    };
    graphics: {
      section_name: string;
      data: {
        integrated_graphics: [string, string];
        graphics_model: [string, string];
        [key: string]: [string, string];
      };
    };
    product_ids?: {
      section_name: string;
      data: {
        product_id_boxed: [string, string];
        product_id_tray: [string, string];
        product_id_mpk?: [string, string];
      };
    };
  };
}

export default Processor;
