interface GraphicsCard {
  id: string;
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
        family: [string, string];
        line: [string, string];
        type: [string, string];
        launch_date: [string, string];
        power_connector: [string, string];
        length: [string, string];
        size: [string, string];
        os_support: [string, string];
      };
    };
    gpu: {
      section_name: string;
      data: {
        compute_units: [string, string];
        boost_freq: [string, string];
        game_freq: [string, string];
        ray_accelerators: [string, string];
        peak_pixel_fill_rate: [string, string];
        peak_texture_fill_rate: [string, string];
        peak_half_precision_comp_perf: [string, string];
        peak_single_precision_comp_perf: [string, string];
        rops: [string, string];
        stream_processors: [string, string];
        texture_units?: [string, string];
        transistor_count?: [string, string];
      };
    };
    requirements: {
      section_name: string;
      data: {
        board_power: [string, string];
        min_psu: [string, string];
      };
    };
    gpu_memory: {
      section_name: string;
      data: {
        infinity_cache: [string, string];
        mem_speed: [string, string];
        max_mem_size?: [string, string];
        mem_interface?: [string, string];
        mem_type: [string, string];
        mem_bandwidth: [string, string];
      };
    };
    rendering_formats: {
      section_name: string;
      data: {
        hdmi_4k: [string, string];
        h264_decode: [string, string];
        h264_encode: [string, string];
        h265_decode: [string, string];
        h265_encode: [string, string];
        av1_decode: [string, string];
      };
    };
    connectivity: {
      section_name: string;
      data: {
        display_port: [string, string];
        hdmi: [string, string];
        usb_type_c?: [string, string];
      };
    };
  };
}

export default GraphicsCard;
