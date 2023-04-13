import Processor from './interfaces/Processor';
import GraphicsCard from './interfaces/GraphicsCard';

const products: {
  graphics_cards: { [key: string]: GraphicsCard };
  processors: { [key: string]: Processor };
} = {
  graphics_cards: {
    radeon_rx_7900xtx: {
      id: 'radeon_rx_7900xtx',
      name: 'AMD Radeon™ RX 7900 XTX Graphics',
      sku: '100-300000069',
      stock: '0',
      price: '999.00',
      imgs: {
        img_1: './assets/imgs/products/rx-7900xtx-1.webp',
        img_2: './assets/imgs/products/rx-7900xtx-2.webp',
      },
      details: {
        key_points: [
          'Compute Units: 96',
          'Ray Accelerators: 96',
          'Game Frequency: 2300 MHz',
          'Infinity Cache: 96 MB',
          'Max Memory Size: 24GB',
          'Memory Type: GDDR6',
        ],
        general_specs: {
          section_name: 'General Specifications',
          data: {
            family: ['Product Family', 'AMD Radeon™ RX 7000 Series'],
            line: ['Product Line', 'AMD Radeon™ RX 7900 Series'],
            type: ['Type', 'Component'],
            launch_date: ['Launch Date', '12/13/2022'],
            power_connector: ['Additional power connector', '2x8 pin'],
            length: ['Length', '287 mm'],
            size: ['Slot Size', '2.5 slots'],
            os_support: [
              'OS Support',
              `Windows 11 - 64-Bit Edition
            Windows 10 - 64-Bit Edition
            Ubuntu x86 64-Bit
            Linux x86_64`,
            ],
          },
        },
        gpu: {
          section_name: 'GPU',
          data: {
            compute_units: ['Compute Units', '96'],
            boost_freq: ['Boost Frequency', 'Up to 2500 MHz'],
            game_freq: ['Game Frequency', '2300 MHz'],
            ray_accelerators: ['Ray Accelerators', '96'],
            peak_pixel_fill_rate: ['Peak Pixel Fill-Rate', 'Up to 960 GP/s'],
            peak_texture_fill_rate: [
              'Peak Texture Fill-Rate',
              'Up to 480 GT/s',
            ],
            peak_half_precision_comp_perf: [
              'Peak Half Precision Compute Performance',
              '123 TFLOPs',
            ],
            peak_single_precision_comp_perf: [
              'Peak Single Precision Compute Performance',
              '61 TFLOPs',
            ],
            rops: ['ROPs', '192'],
            stream_processors: ['Stream Processors', '6144'],
            texture_units: ['Texture Units', '384'],
            transistor_count: ['Transistor Count', '58 B'],
          },
        },
        requirements: {
          section_name: 'Requirements',
          data: {
            board_power: ['Typical Board Power (Desktop)', '355 W'],
            min_psu: ['Minimum PSU Recommendation', '800 W'],
          },
        },
        gpu_memory: {
          section_name: 'GPU Memory',
          data: {
            infinity_cache: ['Infinity Cache', '96 MB'],
            mem_speed: ['Memory Speed', '20 Gbps'],
            max_mem_size: ['Max Memory Size', '24 GB'],
            mem_type: ['Memory Type', 'GDDR6'],
            mem_bandwidth: ['Memory Bandwidth', 'Up to 960 GB/s'],
          },
        },
        rendering_formats: {
          section_name: 'Supported Rendering Format',
          data: {
            hdmi_4k: ['HDMI™ 4K Support', 'Yes'],
            h264_decode: ['4K H264 Decode', 'Yes'],
            h264_encode: ['4K H264 Encode', 'Yes'],
            h265_decode: ['H265/HEVC Decode', 'Yes'],
            h265_encode: ['H265/HEVC Encode', 'Yes'],
            av1_decode: ['AV1 Decode', 'Yes'],
          },
        },
        connectivity: {
          section_name: 'Connectivity',
          data: {
            display_port: ['DisplayPort', '2.1'],
            hdmi: ['HDMI™', 'HDMI™ 2.1'],
            usb_type_c: ['USB Type-C', 'Yes'],
          },
        },
      },
    },
    radeon_rx_7900xt: {
      id: 'radeon_rx_7900xt',
      name: 'AMD Radeon™ RX 7900 XT Graphics',
      sku: '100-300000071',
      stock: '25',
      price: '899.00',
      salePrice: '849.00',
      imgs: {
        img_1: './assets/imgs/products/rx-7900xt-1.webp',
        img_2: './assets/imgs/products/rx-7900xt-2.webp',
      },
      details: {
        key_points: [
          'Compute Units: 84',
          'Ray Accelerators: 84',
          'Game Frequency: 2000 MHz',
          'Infinity Cache: 80 MB',
          'Max Memory Size: 20GB',
          'Memory Type: GDDR6',
        ],
        general_specs: {
          section_name: 'General Specifications',
          data: {
            family: ['Product Family', 'AMD Radeon™ RX 7000 Series'],
            line: ['Product Line', 'AMD Radeon™ RX 7900 Series'],
            type: ['Type', 'Component'],
            launch_date: ['Launch Date', '12/13/2022'],
            power_connector: ['Additional power connector', '2x8 pin'],
            length: ['Length', '276 mm'],
            size: ['Slot Size', '2.5 slots'],
            os_support: [
              'OS Support',
              `Windows 11 - 64-Bit Edition
            Windows 10 - 64-Bit Edition
            Ubuntu x86 64-Bit
            Linux x86_64`,
            ],
          },
        },
        gpu: {
          section_name: 'GPU',
          data: {
            compute_units: ['Compute Units', '84'],
            boost_freq: ['Boost Frequency', 'Up to 2400 MHz'],
            game_freq: ['Game Frequency', '2000 MHz'],
            ray_accelerators: ['Ray Accelerators', '84'],
            peak_pixel_fill_rate: ['Peak Pixel Fill-Rate', 'Up to 460 GP/s'],
            peak_texture_fill_rate: [
              'Peak Texture Fill-Rate',
              'Up to 810 GT/s',
            ],
            peak_half_precision_comp_perf: [
              'Peak Half Precision Compute Performance',
              '103 TFLOPs',
            ],
            peak_single_precision_comp_perf: [
              'Peak Single Precision Compute Performance',
              '52 TFLOPs',
            ],
            rops: ['ROPs', '192'],
            stream_processors: ['Stream Processors', '5376'],
            transistor_count: ['Transistor Count', '58 B'],
          },
        },
        requirements: {
          section_name: 'Requirements',
          data: {
            board_power: ['Typical Board Power (Desktop)', '300 W'],
            min_psu: ['Minimum PSU Recommendation', '750 W'],
          },
        },
        gpu_memory: {
          section_name: 'GPU Memory',
          data: {
            infinity_cache: ['Infinity Cache', '80 MB'],
            mem_speed: ['Memory Speed', '20 Gbps'],
            max_mem_size: ['Max Memory Size', '20 GB'],
            mem_type: ['Memory Type', 'GDDR6'],
            mem_bandwidth: ['Memory Bandwidth', 'Up to 800 GB/s'],
          },
        },
        rendering_formats: {
          section_name: 'Supported Rendering Format',
          data: {
            hdmi_4k: ['HDMI™ 4K Support', 'Yes'],
            h264_decode: ['4K H264 Decode', 'Yes'],
            h264_encode: ['4K H264 Encode', 'Yes'],
            h265_decode: ['H265/HEVC Decode', 'Yes'],
            h265_encode: ['H265/HEVC Encode', 'Yes'],
            av1_decode: ['AV1 Decode', 'Yes'],
          },
        },
        connectivity: {
          section_name: 'Connectivity',
          data: {
            display_port: ['DisplayPort', '2.1'],
            hdmi: ['HDMI™', 'HDMI™ 2.1'],
            usb_type_c: ['USB Type-C', 'Yes'],
          },
        },
      },
    },
    radeon_rx_6950xt: {
      id: 'radeon_rx_6950xt',
      name: 'AMD Radeon™ RX 6950 XT Graphics',
      sku: '100-438411',
      stock: '34',
      price: '1099.00',
      salePrice: '699.00',
      imgs: {
        default: './assets/imgs/products/rx-6950xt-default.webp',
        back: './assets/imgs/products/rx-6950xt-back.webp',
        zoom_out: './assets/imgs/products/rx-6950xt-zoom-out.webp',
      },
      details: {
        key_points: [
          'Compute Units: 80',
          'Ray Accelerators: 80',
          'Game Frequency: 2100 MHz',
          'Infinity Cache: 128 MB',
          'Max Memory Size: 16GB',
          'Memory Type: GDDR6',
        ],
        general_specs: {
          section_name: 'General Specifications',
          data: {
            family: ['Product Family', 'AMD Radeon™ RX 6000 Series'],
            line: ['Product Line', 'AMD Radeon™ RX 6900 Series'],
            type: ['Type', 'Component'],
            launch_date: ['Launch Date', 'May 2022'],
            power_connector: ['Additional power connector', '2x8 pin'],
            length: ['Length', '267 mm'],
            size: ['Slot Size', '2.5 slots'],
            os_support: [
              'OS Support',
              `Windows 11 - 64-Bit Edition
              Windows 10 - 64-Bit Edition
              Linux x86_64`,
            ],
          },
        },
        gpu: {
          section_name: 'GPU',
          data: {
            compute_units: ['Compute Units', '80'],
            boost_freq: ['Boost Frequency', 'Up to 2310 MHz'],
            game_freq: ['Game Frequency', '2100 MHz'],
            ray_accelerators: ['Ray Accelerators', '80'],
            peak_pixel_fill_rate: ['Peak Pixel Fill-Rate', 'Up to 296 GP/s'],
            peak_texture_fill_rate: [
              'Peak Texture Fill-Rate',
              'Up to 739.2 GT/s',
            ],
            peak_half_precision_comp_perf: [
              'Peak Half Precision Compute Performance',
              '47.31 TFLOPs',
            ],
            peak_single_precision_comp_perf: [
              'Peak Single Precision Compute Performance',
              '23.65 TFLOPs',
            ],
            rops: ['ROPs', '128'],
            stream_processors: ['Stream Processors', '5120'],
            texture_units: ['Texture Units', '320'],
            transistor_count: ['Transistor Count', '58 B'],
          },
        },
        requirements: {
          section_name: 'Requirements',
          data: {
            board_power: ['Typical Board Power (Desktop)', '335 W'],
            min_psu: ['Minimum PSU Recommendation', '850 W'],
          },
        },
        gpu_memory: {
          section_name: 'GPU Memory',
          data: {
            infinity_cache: ['Infinity Cache', '128 MB'],
            mem_speed: ['Memory Speed', '16 Gbps'],
            max_mem_size: ['Max Memory Size', '16 GB'],
            mem_type: ['Memory Type', 'GDDR6'],
            mem_interface: ['Memory Interface', '256-bit'],
            mem_bandwidth: ['Memory Bandwidth', 'Up to 576 GB/s'],
          },
        },
        rendering_formats: {
          section_name: 'Supported Rendering Format',
          data: {
            hdmi_4k: ['HDMI™ 4K Support', 'Yes'],
            h264_decode: ['4K H264 Decode', 'Yes'],
            h264_encode: ['4K H264 Encode', 'Yes'],
            h265_decode: ['H265/HEVC Decode', 'Yes'],
            h265_encode: ['H265/HEVC Encode', 'Yes'],
            av1_decode: ['AV1 Decode', 'Yes'],
          },
        },
        connectivity: {
          section_name: 'Connectivity',
          data: {
            display_port: ['DisplayPort', '1.4a'],
            hdmi: ['HDMI™', 'HDMI™ 2.1 VRR and FRL'],
            usb_type_c: ['USB Type-C', 'Yes'],
          },
        },
      },
    },
    radeon_rx_6750xt: {
      id: 'radeon_rx_6750xt',
      name: 'AMD Radeon™ RX 6750 XT Graphics',
      sku: '100-438412',
      stock: '47',
      price: '549.00',
      salePrice: '419.00',
      imgs: {
        default: './assets/imgs/products/rx-6750xt-default.webp',
        back: './assets/imgs/products/rx-6750xt-back.webp',
        zoom_out: './assets/imgs/products/rx-6750xt-zoom-out.webp',
      },
      details: {
        key_points: [
          'Compute Units: 40',
          'Ray Accelerators: 40',
          'Game Frequency: Up to 2495 MHz',
          'Infinity Cache: 96 MB',
          'Max Memory Size: 12 GB',
          'Memory Type: GDDR6',
        ],
        general_specs: {
          section_name: 'General Specifications',
          data: {
            family: ['Product Family', 'AMD Radeon™ RX 6000 Series'],
            line: ['Product Line', 'AMD Radeon™ RX 6700 Series'],
            type: ['Type', 'Component'],
            launch_date: ['Launch Date', 'May 2022'],
            power_connector: ['Additional power connector', '8 pin + 6 pin'],
            length: ['Length', '267 mm'],
            size: ['Slot Size', '2 slots'],
            os_support: [
              'OS Support',
              `Windows 11 - 64-Bit Edition
              Windows 10 - 64-Bit Edition
              Linux x86_64`,
            ],
          },
        },
        gpu: {
          section_name: 'GPU',
          data: {
            compute_units: ['Compute Units', '40'],
            boost_freq: ['Boost Frequency', 'Up to 2600 MHz'],
            game_freq: ['Game Frequency', '2495 MHz'],
            ray_accelerators: ['Ray Accelerators', '40'],
            peak_pixel_fill_rate: ['Peak Pixel Fill-Rate', 'Up to 166.4 GP/s'],
            peak_texture_fill_rate: [
              'Peak Texture Fill-Rate',
              'Up to 416 GT/s',
            ],
            peak_half_precision_comp_perf: [
              'Peak Half Precision Compute Performance',
              '26.62 TFLOPs',
            ],
            peak_single_precision_comp_perf: [
              'Peak Single Precision Compute Performance',
              '13.21 TFLOPs',
            ],
            rops: ['ROPs', '64'],
            stream_processors: ['Stream Processors', '2560'],
            texture_units: ['Texture Units', '160'],
          },
        },
        requirements: {
          section_name: 'Requirements',
          data: {
            board_power: ['Typical Board Power (Desktop)', '250 W'],
            min_psu: ['Minimum PSU Recommendation', '650 W'],
          },
        },
        gpu_memory: {
          section_name: 'GPU Memory',
          data: {
            infinity_cache: ['Infinity Cache', '96 MB'],
            mem_speed: ['Memory Speed', '12 Gbps'],
            mem_type: ['Memory Type', 'GDDR6'],
            mem_interface: ['Memory Interface', '192-bit'],
            mem_bandwidth: ['Memory Bandwidth', 'Up to 432 GB/s'],
          },
        },
        rendering_formats: {
          section_name: 'Supported Rendering Format',
          data: {
            hdmi_4k: ['HDMI™ 4K Support', 'Yes'],
            h264_decode: ['4K H264 Decode', 'Yes'],
            h264_encode: ['4K H264 Encode', 'Yes'],
            h265_decode: ['H265/HEVC Decode', 'Yes'],
            h265_encode: ['H265/HEVC Encode', 'Yes'],
            av1_decode: ['AV1 Decode', 'Yes'],
          },
        },
        connectivity: {
          section_name: 'Connectivity',
          data: {
            display_port: ['DisplayPort', '1.4a'],
            hdmi: ['HDMI™', ' 4K120Hz/8K60Hz VRR as specified in HDMI 2.1'],
          },
        },
      },
    },
  },
  processors: {
    ryzen_7_7800x3d: {
      id: 'ryzen_7_7800x3d',
      name: 'AMD RYZEN™ 7 7800X3D Processor',
      sku: '100-100000910WOF',
      stock: '0',
      price: '449.00',
      imgs: {
        default: './assets/imgs/products/ryzen-7-7800x3d-default.webp',
        zoom_out: './assets/imgs/products/ryzen-7-7800x3d-zoom-out.webp',
      },
      details: {
        key_points: [
          '# of CPU Cores: 8',
          '# of Threads: 16',
          'Max Boost Clock: Up to 5.0GHz',
          'Base Clock: 4.2GHz',
          'Default TDP / TDP: 120W',
          'Graphics Model: Integrated AMD Radeon™ Graphics',
        ],
        general_specs: {
          section_name: 'General Specifications',
          data: {
            platform: ['Platform', 'Desktop Processor'],
            product_family: ['Product Family', 'AMD Ryzen™ Processors'],
            product_line: ['Product Line', 'AMD Ryzen™ 7 Desktop Processors'],
            core_count: ['# of CPU Cores', '8'],
            thread_count: ['# of Threads', '16'],
            max_boost_clock: ['Max. Boost Clock', 'Up to 5.0GHz'],
            base_clock: ['Base Clock', '4.2GHz'],
            l1_cache_size: ['Total L1 Cache', '512KB'],
            l2_cache_size: ['Total L2 Cache', '8MB'],
            l3_cache_size: ['Total L3 Cache', '96MB'],
            default_tdp: ['Default TDP', '120W'],
            processor_tech: [
              'Processor Technology for CPU Cores',
              'TSMC 5nm FinFET',
            ],
            socket_type: ['CPU Socket', 'AM5'],
            tjmax: ['Max. Operating Temperature (Tjmax)', '89°C'],
            launch_date: ['Launch Date', '04/06/2023'],
            os_support: [
              '*OS Support',
              `Windows 11 - 64-Bit Edition
          Windows 10 - 64-Bit Edition
          RHEL x86 64-Bit
          Ubuntu x86 64-Bit
          *Operating System (OS) support will vary by manufacturer.`,
            ],
          },
        },
        connectivity: {
          section_name: 'Connectivity',
          data: {
            mem_type: ['System Memory Type', 'DDR5'],
            channel_count: ['Memory Channels', '2'],
            max_mem_speed: [
              'Max Memory Speed',
              `2x1R: DDR5-5200
      2x2R: DDR5-5200
      4x1R: DDR5-3600
      4x2R: DDR5-3600`,
            ],
          },
        },
        graphics: {
          section_name: 'Graphics Capabilities',
          data: {
            integrated_graphics: ['Integrated Graphics', 'Yes'],
            graphics_model: ['Graphics Model', 'AMD Radeon™ Graphics'],
          },
        },
      },
    },
    ryzen_9_7900x3d: {
      id: 'ryzen_9_7900x3d',
      name: 'AMD RYZEN™ 9 7900X3D Processor',
      sku: '100-100000909WOF',
      stock: '0',
      price: '599.00',
      imgs: {
        default: './assets/imgs/products/ryzen-9-7900x3d-default.webp',
        zoom_out: './assets/imgs/products/ryzen-9-7900x3d-zoom-out.webp',
      },
      details: {
        key_points: [
          '# of CPU Cores: 12',
          '# of Threads: 24',
          'Max Boost Clock: Up to 5.6GHz',
          'Base Clock: 4.4GHz',
          'Default TDP / TDP: 120W',
          'Graphics Model: AMD Radeon™ Graphics',
        ],
        general_specs: {
          section_name: 'General Specifications',
          data: {
            platform: ['Platform', 'Desktop Processor'],
            product_family: ['Product Family', 'AMD Ryzen™ Processors'],
            product_line: ['Product Line', 'AMD Ryzen™ 9 Desktop Processors'],
            core_count: ['# of CPU Cores', '12'],
            thread_count: ['# of Threads', '24'],
            max_boost_clock: ['Max. Boost Clock', 'Up to 5.6GHz'],
            base_clock: ['Base Clock', '4.4GHz'],
            l1_cache_size: ['Total L1 Cache', '768KB'],
            l2_cache_size: ['Total L2 Cache', '12MB'],
            l3_cache_size: ['Total L3 Cache', '128MB'],
            default_tdp: ['Default TDP', '120W'],
            processor_tech: [
              'Processor Technology for CPU Cores',
              'TSMC 5nm FinFET',
            ],
            socket_type: ['CPU Socket', 'AM5'],
            tjmax: ['Max. Operating Temperature (Tjmax)', '89°C'],
            launch_date: ['Launch Date', '02/28/2023'],
            os_support: [
              '*OS Support',
              `Windows 11 - 64-Bit Edition
          Windows 10 - 64-Bit Edition
          RHEL x86 64-Bit
          Ubuntu x86 64-Bit
          *Operating System (OS) support will vary by manufacturer.`,
            ],
          },
        },
        connectivity: {
          section_name: 'Connectivity',
          data: {
            mem_type: ['System Memory Type', 'DDR5'],
            channel_count: ['Memory Channels', '2'],
            max_mem_speed: [
              'Max Memory Speed',
              `2x1R: DDR5-5200
        2x2R: DDR5-5200
        4x1R: DDR5-3600
        4x2R: DDR5-3600`,
            ],
          },
        },
        graphics: {
          section_name: 'Graphics Capabilities',
          data: {
            integrated_graphics: ['Integrated Graphics', 'Yes'],
            graphics_model: ['Graphics Model', 'AMD Radeon™ Graphics'],
          },
        },
      },
    },
    ryzen_9_7950x3d: {
      id: 'ryzen_9_7950x3d',
      name: 'AMD RYZEN™ 9 7950X3D Processor',
      sku: '100-100000908WOF',
      price: '699.00',
      stock: '12',
      imgs: {
        default: './assets/imgs/products/ryzen-9-7950x3d-default.webp',
        zoom_out: './assets/imgs/products/ryzen-9-7950x3d-zoom-out.webp',
      },
      details: {
        key_points: [
          '# of CPU Cores: 16',
          '# of Threads: 32',
          'Max Boost Clock: Up to 5.7GHz',
          'Base Clock: 4.2GHz',
          'Default TDP / TDP: 120W',
          'Graphics Model: AMD Radeon™ Graphics',
        ],
        general_specs: {
          section_name: 'General Specifications',
          data: {
            platform: ['Platform', 'Desktop Processor'],
            product_family: ['Product Family', 'AMD Ryzen™ Processors'],
            product_line: ['Product Line', 'AMD Ryzen™ 9 Desktop Processors'],
            core_count: ['# of CPU Cores', '16'],
            thread_count: ['# of Threads', '32'],
            max_boost_clock: ['Max. Boost Clock', 'Up to 5.7GHz'],
            base_clock: ['Base Clock', '4.2GHz'],
            l1_cache_size: ['Total L1 Cache', '1MB'],
            l2_cache_size: ['Total L2 Cache', '16MB'],
            l3_cache_size: ['Total L3 Cache', '128MB'],
            default_tdp: ['Default TDP', '120W'],
            processor_tech: [
              'Processor Technology for CPU Cores',
              'TSMC 5nm FinFET',
            ],
            socket_type: ['CPU Socket', 'AM5'],
            pib: ['Thermal Solution (PIB)', 'Not Included'],
            tjmax: ['Max. Operating Temperature (Tjmax)', '89°C'],
            launch_date: ['Launch Date', '02/28/2023'],
            os_support: [
              '*OS Support',
              `Windows 11 - 64-Bit Edition
          Windows 10 - 64-Bit Edition
          RHEL x86 64-Bit
          Ubuntu x86 64-Bit
          *Operating System (OS) support will vary by manufacturer.`,
            ],
          },
        },
        connectivity: {
          section_name: 'Connectivity',
          data: {
            mem_type: ['System Memory Type', 'DDR5'],
            channel_count: ['Memory Channels', '2'],
            max_mem_speed: [
              'Max Memory Speed',
              `2x1R: DDR5-5200
        2x2R: DDR5-5200
        4x1R: DDR5-3600
        4x2R: DDR5-3600`,
            ],
          },
        },
        graphics: {
          section_name: 'Graphics Capabilities',
          data: {
            integrated_graphics: ['Integrated Graphics', 'Yes'],
            graphics_model: ['Graphics Model', 'AMD Radeon™ Graphics'],
          },
        },
      },
    },
    ryzen_9_7950x: {
      id: 'ryzen_9_7950x',
      name: 'AMD RYZEN™ 9 7950X Processor',
      sku: '100-100000514WOF',
      stock: '0',
      price: '699.00',
      salePrice: '599.00',
      imgs: {
        default: './assets/imgs/products/ryzen-9-7950x-default.webp',
        zoom_out: './assets/imgs/products/ryzen-9-7950x-zoom-out.webp',
      },
      details: {
        key_points: [
          '# of CPU Cores: 16',
          '# of Threads: 32',
          'Max Boost Clock: Up to 5.7GHz',
          'Base Clock: 4.5GHz',
          'Thermal Solution: Not Included',
          'Default TDP / TDP: 170W',
          'Graphics Model: AMD Radeon™ Graphics',
          `STAR WARS Jedi: Survivor™ game bundle with purchase.
    See full offer terms at www.amdrewards.com/terms.`,
        ],
        general_specs: {
          section_name: 'General Specifications',
          data: {
            platform: ['Platform', 'Desktop Processor'],
            product_family: ['Product Family', 'AMD Ryzen™ Processors'],
            product_line: ['Product Line', 'AMD Ryzen™ 9 Desktop Processors'],
            core_count: ['# of CPU Cores', '16'],
            thread_count: ['# of Threads', '32'],
            max_boost_clock: ['Max. Boost Clock', 'Up to 5.7GHz'],
            base_clock: ['Base Clock', '4.5GHz'],
            l1_cache_size: ['Total L1 Cache', '1MB'],
            l2_cache_size: ['Total L2 Cache', '16MB'],
            l3_cache_size: ['Total L3 Cache', '64MB'],
            default_tdp: ['Default TDP', '170W'],
            processor_tech: [
              'Processor Technology for CPU Cores',
              'TSMC 5nm FinFET',
            ],
            socket_type: ['CPU Socket', 'AM5'],
            pib: ['Thermal Solution (PIB)', 'Not Included'],
            tjmax: ['Max. Operating Temperature (Tjmax)', '95°C'],
            launch_date: ['Launch Date', '09/27/2022'],
            os_support: [
              '*OS Support',
              `Windows 11 - 64-Bit Edition
          Windows 10 - 64-Bit Edition
          RHEL x86 64-Bit
          Ubuntu x86 64-Bit
          *Operating System (OS) support will vary by manufacturer.`,
            ],
          },
        },
        connectivity: {
          section_name: 'Connectivity',
          data: {
            mem_type: ['System Memory Type', 'DDR5'],
            channel_count: ['Memory Channels', '2'],
            max_mem_speed: [
              'Max Memory Speed',
              `2x1R: DDR5-5200
        2x2R: DDR5-5200
        4x1R: DDR5-3600
        4x2R: DDR5-3600`,
            ],
          },
        },
        graphics: {
          section_name: 'Graphics Capabilities',
          data: {
            integrated_graphics: ['Integrated Graphics', 'Yes'],
            graphics_model: ['Graphics Model', 'AMD Radeon™ Graphics'],
          },
        },
      },
    },
    ryzen_5_7600x: {
      id: 'ryzen_5_7600x',
      name: 'AMD RYZEN™ 5 7600X Processor',
      sku: '100-100000593WOF',
      stock: '25',
      price: '299.00',
      salePrice: '249.00',
      imgs: {
        default: './assets/imgs/products/ryzen-5-7600x-default.webp',
        zoom_out: './assets/imgs/products/ryzen-5-7600x-zoom-out.webp',
      },
      details: {
        key_points: [
          '# of CPU Cores: 6',
          '# of Threads: 12',
          'Max Boost Clock: Up to 5.3GHz',
          'Base Clock: 4.7GHz',
          'Thermal Solution: Not Included',
          'Default TDP / TDP: 105W',
          'Graphics Model: AMD Radeon™ Graphics',
          `STAR WARS Jedi: Survivor™ game bundle with purchase.
    See full offer terms at www.amdrewards.com/terms.`,
        ],
        general_specs: {
          section_name: 'General Specifications',
          data: {
            platform: ['Platform', 'Desktop Processor'],
            product_family: ['Product Family', 'AMD Ryzen™ Processors'],
            product_line: ['Product Line', 'AMD Ryzen™ 5 Desktop Processors'],
            core_count: ['# of CPU Cores', '6'],
            thread_count: ['# of Threads', '12'],
            max_boost_clock: ['Max. Boost Clock', 'Up to 5.3GHz'],
            base_clock: ['Base Clock', '4.7GHz'],
            l1_cache_size: ['Total L1 Cache', '384KB'],
            l2_cache_size: ['Total L2 Cache', '6MB'],
            l3_cache_size: ['Total L3 Cache', '32MB'],
            default_tdp: ['Default TDP', '105W'],
            processor_tech: [
              'Processor Technology for CPU Cores',
              'TSMC 5nm FinFET',
            ],
            socket_type: ['CPU Socket', 'AM5'],
            pib: ['Thermal Solution (PIB)', 'Not Included'],
            tjmax: ['Max. Operating Temperature (Tjmax)', '95°C'],
            launch_date: ['Launch Date', '09/27/2022'],
            os_support: [
              '*OS Support',
              `Windows 11 - 64-Bit Edition
          Windows 10 - 64-Bit Edition
          RHEL x86 64-Bit
          Ubuntu x86 64-Bit
          *Operating System (OS) support will vary by manufacturer.`,
            ],
          },
        },
        connectivity: {
          section_name: 'Connectivity',
          data: {
            mem_type: ['System Memory Type', 'DDR5'],
            channel_count: ['Memory Channels', '2'],
            max_mem_speed: ['Max Memory Speed', `2x1R: DDR5-5200`],
          },
        },
        graphics: {
          section_name: 'Graphics Capabilities',
          data: {
            integrated_graphics: ['Integrated Graphics', 'Yes'],
            graphics_model: ['Graphics Model', 'AMD Radeon™ Graphics'],
          },
        },
      },
    },
    ryzen_5_7700x: {
      id: 'ryzen_5_7700x',
      name: 'AMD RYZEN™ 5 7700X Processor',
      sku: '100-100000591WOF',
      stock: '64',
      price: '399.00',
      salePrice: '349.00',
      imgs: {
        default: './assets/imgs/products/ryzen-5-7700x-default.webp',
        zoom_out: './assets/imgs/products/ryzen-5-7700x-zoom-out.webp',
      },
      details: {
        key_points: [
          '# of CPU Cores: 8',
          '# of Threads: 16',
          'Max Boost Clock: Up to 5.4GHz',
          'Base Clock: 4.5GHz',
          'Thermal Solution: Not Included',
          'Default TDP / TDP: 105W',
          'Graphics Model: AMD Radeon™ Graphics',
          `STAR WARS Jedi: Survivor™ game bundle with purchase.
    See full offer terms at www.amdrewards.com/terms.`,
          'Eligible for AMD Ryzen™ Processor and AMD Radeon™ Graphics Bundle Deals',
        ],
        general_specs: {
          section_name: 'General Specifications',
          data: {
            platform: ['Platform', 'Desktop Processor'],
            product_family: ['Product Family', 'AMD Ryzen™ Processors'],
            product_line: ['Product Line', 'AMD Ryzen™ 7 Desktop Processors'],
            core_count: ['# of CPU Cores', '8'],
            thread_count: ['# of Threads', '16'],
            max_boost_clock: ['Max. Boost Clock', 'Up to 5.4GHz'],
            base_clock: ['Base Clock', '4.5GHz'],
            l1_cache_size: ['Total L1 Cache', '512KB'],
            l2_cache_size: ['Total L2 Cache', '8MB'],
            l3_cache_size: ['Total L3 Cache', '32MB'],
            default_tdp: ['Default TDP', '105W'],
            processor_tech: [
              'Processor Technology for CPU Cores',
              'TSMC 5nm FinFET',
            ],
            socket_type: ['CPU Socket', 'AM5'],
            pib: ['Thermal Solution (PIB)', 'Not Included'],
            tjmax: ['Max. Operating Temperature (Tjmax)', '95°C'],
            launch_date: ['Launch Date', '09/27/2022'],
            os_support: [
              '*OS Support',
              `Windows 11 - 64-Bit Edition
          Windows 10 - 64-Bit Edition
          RHEL x86 64-Bit
          Ubuntu x86 64-Bit
          *Operating System (OS) support will vary by manufacturer.`,
            ],
          },
        },
        connectivity: {
          section_name: 'Connectivity',
          data: {
            mem_type: ['System Memory Type', 'DDR5'],
            channel_count: ['Memory Channels', '2'],
            max_mem_speed: [
              'Max Memory Speed',
              `2x1R: DDR5-5200
        2x2R: DDR5-5200
        4x1R: DDR5-3600
        4x2R: DDR5-3600`,
            ],
          },
        },
        graphics: {
          section_name: 'Graphics Capabilities',
          data: {
            integrated_graphics: ['Integrated Graphics', 'Yes'],
            graphics_model: ['Graphics Model', 'AMD Radeon™ Graphics'],
          },
        },
      },
    },
    ryzen_9_7900x: {
      id: 'ryzen_9_7900x',
      name: 'AMD RYZEN™ 9 7900X Processor',
      sku: '100-100000589WOF',
      stock: '16',
      price: '549.00',
      salePrice: '449.00',
      imgs: {
        default: './assets/imgs/products/ryzen-9-7900x-default.webp',
        zoom_out: './assets/imgs/products/ryzen-9-7900x-zoom-out.webp',
      },
      details: {
        key_points: [
          '# of CPU Cores: 12',
          '# of Threads: 24',
          'Max Boost Clock: Up to 5.6GHz',
          'Base Clock: 4.7GHz',
          'Thermal Solution: Not Included',
          'Default TDP / TDP: 170W',
          'Graphics Model: AMD Radeon™ Graphics',
          `STAR WARS Jedi: Survivor™ game bundle with purchase.
    See full offer terms at www.amdrewards.com/terms.`,
          'Eligible for AMD Ryzen™ Processor and AMD Radeon™ Graphics Bundle Deals',
        ],
        general_specs: {
          section_name: 'General Specifications',
          data: {
            platform: ['Platform', 'Desktop Processor'],
            product_family: ['Product Family', 'AMD Ryzen™ Processors'],
            product_line: ['Product Line', 'AMD Ryzen™ 9 Desktop Processors'],
            core_count: ['# of CPU Cores', '12'],
            thread_count: ['# of Threads', '24'],
            max_boost_clock: ['Max. Boost Clock', 'Up to 5.6GHz'],
            base_clock: ['Base Clock', '4.7GHz'],
            l1_cache_size: ['Total L1 Cache', '768KB'],
            l2_cache_size: ['Total L2 Cache', '12MB'],
            l3_cache_size: ['Total L3 Cache', '64MB'],
            default_tdp: ['Default TDP', '170W'],
            processor_tech: [
              'Processor Technology for CPU Cores',
              'TSMC 5nm FinFET',
            ],
            socket_type: ['CPU Socket', 'AM5'],
            pib: ['Thermal Solution (PIB)', 'Not Included'],
            tjmax: ['Max. Operating Temperature (Tjmax)', '95°C'],
            launch_date: ['Launch Date', '09/27/2022'],
            os_support: [
              '*OS Support',
              `Windows 11 - 64-Bit Edition
          Windows 10 - 64-Bit Edition
          RHEL x86 64-Bit
          Ubuntu x86 64-Bit
          *Operating System (OS) support will vary by manufacturer.`,
            ],
          },
        },
        connectivity: {
          section_name: 'Connectivity',
          data: {
            mem_type: ['System Memory Type', 'DDR5'],
            channel_count: ['Memory Channels', '2'],
            max_mem_speed: [
              'Max Memory Speed',
              `2x1R: DDR5-5200
        2x2R: DDR5-5200
        4x1R: DDR5-3600
        4x2R: DDR5-3600`,
            ],
          },
        },
        graphics: {
          section_name: 'Graphics Capabilities',
          data: {
            integrated_graphics: ['Integrated Graphics', 'Yes'],
            graphics_model: ['Graphics Model', 'AMD Radeon™ Graphics'],
          },
        },
      },
    },
    ryzen_5_5600g: {
      id: 'ryzen_5_5600g',
      name: 'AMD RYZEN™ 5 5600G Processor',
      sku: '100-100000252BOX',
      stock: '35',
      price: '259.00',
      salePrice: '139.00',
      imgs: {
        default: './assets/imgs/products/ryzen-5-5600g-default.webp',
        zoom_out: './assets/imgs/products/ryzen-5-5600g-zoom-out.webp',
      },
      details: {
        key_points: [
          '# of CPU Cores: 6',
          '# of Threads: 12',
          'Max Boost Clock: Up to 4.4GHz',
          'Base Clock: 3.9GHz',
          'Thermal Solution: Wraith Stealth',
          'Default TDP / TDP: 65W',
          'Graphics Model: AMD Radeon™ Graphics',
        ],
        general_specs: {
          section_name: 'General Specifications',
          data: {
            platform: ['Platform', 'Boxed Processor'],
            product_family: ['Product Family', 'AMD Ryzen™ Processors'],
            product_line: [
              'Product Line',
              'AMD Ryzen™ 5 5000 G-Series Desktop Processors with Radeon™ Graphics',
            ],
            code_name: ['Former Codename', '"Cezanne"'],
            core_count: ['# of CPU Cores', '6'],
            thread_count: ['# of Threads', '12'],
            max_boost_clock: ['Max. Boost Clock', 'Up to 4.4GHz'],
            base_clock: ['Base Clock', '3.9GHz'],
            l2_cache_size: ['Total L2 Cache', '3MB'],
            l3_cache_size: ['Total L3 Cache', '16MB'],
            default_tdp: ['Default TDP', '65W'],
            cTDP: ['AMD Configurable TDP (cTDP)', '45-65W'],
            processor_tech: [
              'Processor Technology for CPU Cores',
              'TSMC 7nm FinFET',
            ],
            unlocked: ['Unlocked for Overclocking', 'Yes'],
            socket_type: ['CPU Socket', 'AM4'],
            pib: ['Thermal Solution (PIB)', 'Wraith Stealth'],
            tjmax: ['Max. Operating Temperature (Tjmax)', '95°C'],
            launch_date: ['Launch Date', '4/13/2021'],
            os_support: [
              '*OS Support',
              `Windows 11 - 64-Bit Edition
          Windows 10 - 64-Bit Edition
          RHEL x86 64-Bit
          Ubuntu x86 64-Bit
          *Operating System (OS) support will vary by manufacturer.`,
            ],
          },
        },
        connectivity: {
          section_name: 'Connectivity',
          data: {
            pci_version: ['PCI ExpressⓇ Version', 'PCIe® 3.0'],
            mem_type: ['System Memory Type', 'DDR4'],
            channel_count: ['Memory Channels', '2'],
            mem_spec: ['System Memory Specification', `Up to 3200MHz`],
          },
        },
        graphics: {
          section_name: 'Graphics Capabilities',
          data: {
            integrated_graphics: ['Integrated Graphics', 'Yes'],
            graphics_model: ['Graphics Model', 'AMD Radeon™ Graphics'],
            graphics_core_count: ['Graphics Core Count', '7'],
            graphics_freq: ['Graphics Frequency', '1900 MHz'],
          },
        },
        product_ids: {
          section_name: 'Product IDs',
          data: {
            product_id_boxed: ['Product ID Boxed', '100-100000252BOX'],
            product_id_tray: ['Product ID Tray', '100-000000252'],
            product_id_mpk: ['Product ID MPK', '100-100000252MPK'],
          },
        },
      },
    },
    ryzen_5_5600x: {
      id: 'ryzen_5_5600x',
      name: 'AMD RYZEN™ 5 5600X Processor',
      sku: '100-100000065BOX',
      stock: '23',
      price: '299.00',
      salePrice: '169.00',
      imgs: {
        default: './assets/imgs/products/ryzen-5-5600x-default.webp',
        zoom_out: './assets/imgs/products/ryzen-5-5600x-zoom-out.webp',
      },
      details: {
        key_points: [
          '# of CPU Cores: 6',
          '# of Threads: 12',
          'Max Boost Clock: Up to 4.6GHz',
          'Base Clock: 3.7GHz',
          'Thermal Solution: Wraith Stealth',
          'Default TDP / TDP: 65W',
          'Graphics Model: Discrete Graphics Card Required',
        ],
        general_specs: {
          section_name: 'General Specifications',
          data: {
            platform: ['Platform', 'Boxed Processor'],
            product_family: ['Product Family', 'AMD Ryzen™ Processors'],
            product_line: ['Product Line', 'AMD Ryzen™ 5 Desktop Processors'],
            code_name: ['Former Codename', '"Vermeer"'],
            core_count: ['# of CPU Cores', '6'],
            thread_count: ['# of Threads', '12'],
            max_boost_clock: ['Max. Boost Clock', 'Up to 4.6GHz'],
            base_clock: ['Base Clock', '3.7GHz'],
            l2_cache_size: ['Total L2 Cache', '3MB'],
            l3_cache_size: ['Total L3 Cache', '32MB'],
            default_tdp: ['Default TDP', '65W'],
            processor_tech: [
              'Processor Technology for CPU Cores',
              'TSMC 7nm FinFET',
            ],
            unlocked: ['Unlocked for Overclocking', 'Yes'],
            socket_type: ['CPU Socket', 'AM4'],
            pib: ['Thermal Solution (PIB)', 'Wraith Stealth'],
            tjmax: ['Max. Operating Temperature (Tjmax)', '95°C'],
            launch_date: ['Launch Date', '11/5/2020'],
            os_support: [
              '*OS Support',
              `Windows 11 - 64-Bit Edition
          Windows 10 - 64-Bit Edition
          RHEL x86 64-Bit
          Ubuntu x86 64-Bit
          *Operating System (OS) support will vary by manufacturer.`,
            ],
          },
        },
        connectivity: {
          section_name: 'Connectivity',
          data: {
            pci_version: ['PCI ExpressⓇ Version', 'PCIe® 4.0'],
            mem_type: ['System Memory Type', 'DDR4'],
            mem_spec: ['System Memory Specification', `Up to 3200MHz`],
          },
        },
        graphics: {
          section_name: 'Graphics Capabilities',
          data: {
            integrated_graphics: ['Integrated Graphics', 'No'],
            graphics_model: [
              'Graphics Model',
              'Discrete Graphics Card Required',
            ],
          },
        },
        product_ids: {
          section_name: 'Product IDs',
          data: {
            product_id_boxed: ['Product ID Boxed', '100-100000065BOX'],
            product_id_tray: ['Product ID Tray', '100-000000065'],
            product_id_mpk: ['Product ID MPK', '100-100000065MPK'],
          },
        },
      },
    },
    ryzen_7_5700g: {
      id: 'ryzen_7_5700g',
      name: 'AMD RYZEN™ 7 5700G Processor',
      sku: '100-100000263BOX',
      stock: '64',
      price: '359.00',
      salePrice: '199.00',
      imgs: {
        default: './assets/imgs/products/ryzen-7-5700g-default.webp',
        zoom_out: './assets/imgs/products/ryzen-7-5700g-zoom-out.webp',
      },
      details: {
        key_points: [
          '# of CPU Cores: 8',
          '# of Threads: 16',
          'Max Boost Clock: Up to 4.6GHz',
          'Base Clock: 3.8GHz',
          'Thermal Solution: Wraith Stealth',
          'Default TDP / TDP: 65W',
          'Graphics Model: Integrated Radeon Graphics',
        ],
        general_specs: {
          section_name: 'General Specifications',
          data: {
            platform: ['Platform', 'Boxed Processor'],
            product_family: ['Product Family', 'AMD Ryzen™ Processors'],
            product_line: [
              'Product Line',
              'AMD Ryzen™ 7 5000 G-Series Desktop Processors with Radeon™ Graphics',
            ],
            code_name: ['Former Codename', '"Cezanne"'],
            core_count: ['# of CPU Cores', '8'],
            thread_count: ['# of Threads', '16'],
            max_boost_clock: ['Max. Boost Clock', 'Up to 4.6GHz'],
            base_clock: ['Base Clock', '3.8GHz'],
            l2_cache_size: ['Total L2 Cache', '4MB'],
            l3_cache_size: ['Total L3 Cache', '16MB'],
            default_tdp: ['Default TDP', '65W'],
            cTDP: ['AMD Configurable TDP (cTDP)', '45-65W'],
            processor_tech: [
              'Processor Technology for CPU Cores',
              'TSMC 7nm FinFET',
            ],
            unlocked: ['Unlocked for Overclocking', 'Yes'],
            socket_type: ['CPU Socket', 'AM4'],
            pib: ['Thermal Solution (PIB)', 'Wraith Stealth'],
            tjmax: ['Max. Operating Temperature (Tjmax)', '95°C'],
            launch_date: ['Launch Date', '4/13/2021'],
            os_support: [
              '*OS Support',
              `Windows 11 - 64-Bit Edition
          Windows 10 - 64-Bit Edition
          RHEL x86 64-Bit
          Ubuntu x86 64-Bit
          *Operating System (OS) support will vary by manufacturer.`,
            ],
          },
        },
        connectivity: {
          section_name: 'Connectivity',
          data: {
            pci_version: ['PCI ExpressⓇ Version', 'PCIe® 3.0'],
            mem_type: ['System Memory Type', 'DDR4'],
            channel_count: ['Memory Channels', '2'],
            mem_spec: ['System Memory Specification', `Up to 3200MHz`],
          },
        },
        graphics: {
          section_name: 'Graphics Capabilities',
          data: {
            integrated_graphics: ['Integrated Graphics', 'Yes'],
            graphics_model: ['Graphics Model', 'Radeon™ Graphics'],
            graphics_core_count: ['Graphics Core Count', '8'],
            graphics_freq: ['Graphics Frequency', '2000 MHz'],
          },
        },
        product_ids: {
          section_name: 'Product IDs',
          data: {
            product_id_boxed: ['Product ID Boxed', '100-100000263BOX'],
            product_id_tray: ['Product ID Tray', '100-000000263'],
            product_id_mpk: ['Product ID MPK', '100-100000263MPK'],
          },
        },
      },
    },
    ryzen_7_5800x: {
      id: 'ryzen_7_5800x',
      name: 'AMD RYZEN™ 7 5800X Processor',
      sku: '100-100000063WOF',
      stock: '58',
      price: '449.00',
      salePrice: '249.00',
      imgs: {
        default: './assets/imgs/products/ryzen-7-5800x-default.webp',
        zoom_out: './assets/imgs/products/ryzen-7-5800x-zoom-out.webp',
      },
      details: {
        key_points: [
          '# of CPU Cores: 8',
          '# of Threads: 16',
          'Max Boost Clock: Up to 4.7GHz',
          'Base Clock: 3.8GHz',
          'Thermal Solution: Not Included',
          'Default TDP / TDP: 105W',
          'Graphics Model: Discrete Graphics Card Required',
        ],
        general_specs: {
          section_name: 'General Specifications',
          data: {
            platform: ['Platform', 'Boxed Processor'],
            product_family: ['Product Family', 'AMD Ryzen™ Processors'],
            product_line: ['Product Line', 'AMD Ryzen™ 7 Desktop Processors'],
            code_name: ['Former Codename', '"Vermeer"'],
            core_count: ['# of CPU Cores', '8'],
            thread_count: ['# of Threads', '16'],
            max_boost_clock: ['Max. Boost Clock', 'Up to 4.7GHz'],
            base_clock: ['Base Clock', '3.8GHz'],
            l2_cache_size: ['Total L2 Cache', '4MB'],
            l3_cache_size: ['Total L3 Cache', '32MB'],
            default_tdp: ['Default TDP', '105W'],
            processor_tech: [
              'Processor Technology for CPU Cores',
              'TSMC 7nm FinFET',
            ],
            unlocked: ['Unlocked for Overclocking', 'Yes'],
            socket_type: ['CPU Socket', 'AM4'],
            pib: ['Thermal Solution (PIB)', 'Not Included'],
            tjmax: ['Max. Operating Temperature (Tjmax)', '90°C'],
            launch_date: ['Launch Date', '11/5/2020'],
            os_support: [
              '*OS Support',
              `Windows 10 - 64-Bit Edition
        RHEL x86 64-Bit
        Ubuntu x86 64-Bit
        *Operating System (OS) support will vary by manufacturer.`,
            ],
          },
        },
        connectivity: {
          section_name: 'Connectivity',
          data: {
            pci_version: ['PCI ExpressⓇ Version', 'PCIe® 4.0'],
            mem_type: ['System Memory Type', 'DDR4'],
            mem_spec: ['System Memory Specification', `Up to 3200MHz`],
          },
        },
        graphics: {
          section_name: 'Graphics Capabilities',
          data: {
            integrated_graphics: ['Integrated Graphics', 'No'],
            graphics_model: [
              'Graphics Model',
              'Discrete Graphics Card Required',
            ],
          },
        },
        product_ids: {
          section_name: 'Product IDs',
          data: {
            product_id_boxed: ['Product ID Boxed', '100-100000063WOF'],
            product_id_tray: ['Product ID Tray', '100-000000063'],
          },
        },
      },
    },
    ryzen_7_5800x3d: {
      id: 'ryzen_7_5800x3d',
      name: 'AMD RYZEN™ 7 5800X3D Processor',
      sku: '100-100000651WOF',
      stock: '34',
      price: '449.00',
      salePrice: '349.00',
      imgs: {
        default: './assets/imgs/products/ryzen-7-5800x3d-default.webp',
        zoom_out: './assets/imgs/products/ryzen-7-5800x3d-zoom-out.webp',
      },
      details: {
        key_points: [
          '# of CPU Cores: 8',
          '# of Threads: 16',
          'Max Boost Clock: Up to 4.5GHz',
          'Base Clock: 3.4GHz',
          'Thermal Solution: Not Included',
          'Default TDP / TDP: 105W',
          'Graphics Model: Discrete Graphics Card Required',
        ],
        general_specs: {
          section_name: 'General Specifications',
          data: {
            platform: ['Platform', 'Boxed Processor'],
            product_family: ['Product Family', 'AMD Ryzen™ Processors'],
            product_line: ['Product Line', 'AMD Ryzen™ 7 Desktop Processors'],
            code_name: ['Former Codename', '"Vermeer"'],
            core_count: ['# of CPU Cores', '8'],
            thread_count: ['# of Threads', '16'],
            max_boost_clock: ['Max. Boost Clock', 'Up to 4.5GHz'],
            base_clock: ['Base Clock', '3.4GHz'],
            l2_cache_size: ['Total L2 Cache', '4MB'],
            l3_cache_size: ['Total L3 Cache', '32MB'],
            default_tdp: ['Default TDP', '105W'],
            processor_tech: [
              'Processor Technology for CPU Cores',
              'TSMC 7nm FinFET',
            ],
            socket_type: ['CPU Socket', 'AM4'],
            socket_count: ['Socket Count', '1 P'],
            pib: ['Thermal Solution (PIB)', 'Not Included'],
            tjmax: ['Max. Operating Temperature (Tjmax)', '90°C'],
            launch_date: ['Launch Date', '11/5/2020'],
            os_support: [
              '*OS Support',
              `Windows 10 - 64-Bit Edition
        RHEL x86 64-Bit
        Ubuntu x86 64-Bit
        *Operating System (OS) support will vary by manufacturer.`,
            ],
          },
        },
        connectivity: {
          section_name: 'Connectivity',
          data: {
            pci_version: ['PCI ExpressⓇ Version', 'PCIe® 4.0'],
            mem_type: ['System Memory Type', 'DDR4'],
            mem_channels: ['Memory Channels', '2'],
            mem_spec: [
              'System Memory Specification',
              `2x1R: DDR4-3200
      2x2R: DDR4-3200
      4x1R: DDR4-2933
      4x2R: DDR4-2667`,
            ],
          },
        },
        graphics: {
          section_name: 'Graphics Capabilities',
          data: {
            integrated_graphics: ['Integrated Graphics', 'No'],
            graphics_model: [
              'Graphics Model',
              'Discrete Graphics Card Required',
            ],
          },
        },
      },
    },
    ryzen_9_5900x: {
      id: 'ryzen_9_5900x',
      name: 'AMD RYZEN™ 9 5900X Processor',
      sku: '100-100000061WOF',
      stock: '35',
      price: '549.00',
      salePrice: '349.00',
      imgs: {
        default: './assets/imgs/products/ryzen-9-5900x-default.webp',
        zoom_out: './assets/imgs/products/ryzen-9-5900x-zoom-out.webp',
      },
      details: {
        key_points: [
          '# of CPU Cores: 12',
          '# of Threads: 24',
          'Max Boost Clock: Up to 4.8GHz',
          'Base Clock: 3.7GHz',
          'Thermal Solution: Not Included',
          'Default TDP / TDP: 105W',
          'Graphics Model: Discrete Graphics Card Required',
        ],
        general_specs: {
          section_name: 'General Specifications',
          data: {
            platform: ['Platform', 'Boxed Processor'],
            product_family: ['Product Family', 'AMD Ryzen™ Processors'],
            product_line: ['Product Line', 'AMD Ryzen™ 9 Desktop Processors'],
            code_name: ['Former Codename', '"Vermeer"'],
            core_count: ['# of CPU Cores', '12'],
            thread_count: ['# of Threads', '24'],
            max_boost_clock: ['Max. Boost Clock', 'Up to 4.8GHz'],
            base_clock: ['Base Clock', '3.7GHz'],
            l2_cache_size: ['Total L2 Cache', '6MB'],
            l3_cache_size: ['Total L3 Cache', '64MB'],
            default_tdp: ['Default TDP', '105W'],
            processor_tech: [
              'Processor Technology for CPU Cores',
              'TSMC 7nm FinFET',
            ],
            unlocked: ['Unlocked for Overclocking', 'Yes'],
            socket_type: ['CPU Socket', 'AM4'],
            pib: ['Thermal Solution (PIB)', 'Not Included'],
            tjmax: ['Max. Operating Temperature (Tjmax)', '90°C'],
            launch_date: ['Launch Date', '11/5/2020'],
            os_support: [
              '*OS Support',
              `Windows 10 - 64-Bit Edition
        RHEL x86 64-Bit
        Ubuntu x86 64-Bit
        *Operating System (OS) support will vary by manufacturer.`,
            ],
          },
        },
        connectivity: {
          section_name: 'Connectivity',
          data: {
            pci_version: ['PCI ExpressⓇ Version', 'PCIe® 4.0'],
            mem_type: ['System Memory Type', 'DDR4'],
            mem_spec: ['System Memory Specification', `Up to 3200MHz`],
          },
        },
        graphics: {
          section_name: 'Graphics Capabilities',
          data: {
            integrated_graphics: ['Integrated Graphics', 'No'],
            graphics_model: [
              'Graphics Model',
              'Discrete Graphics Card Required',
            ],
          },
        },
        product_ids: {
          section_name: 'Product IDs',
          data: {
            product_id_boxed: ['Product ID Boxed', '100-100000061WOF'],
            product_id_tray: ['Product ID Tray', '100-000000061'],
          },
        },
      },
    },
    ryzen_9_5950x: {
      id: 'ryzen_9_5950x',
      name: 'AMD RYZEN™ 9 5950X Processor',
      sku: '100-100000059WOF',
      stock: '57',
      price: '799.00',
      salePrice: '499.00',
      imgs: {
        default: './assets/imgs/products/ryzen-9-5950x-default.webp',
        zoom_out: './assets/imgs/products/ryzen-9-5950x-zoom-out.webp',
      },
      details: {
        key_points: [
          '# of CPU Cores: 16',
          '# of Threads: 32',
          'Max Boost Clock: Up to 4.9GHz',
          'Base Clock: 3.4GHz',
          'Thermal Solution: Not Included',
          'Default TDP / TDP: 105W',
          'Graphics Model: Discrete Graphics Card Required',
        ],
        general_specs: {
          section_name: 'General Specifications',
          data: {
            platform: ['Platform', 'Boxed Processor'],
            product_family: ['Product Family', 'AMD Ryzen™ Processors'],
            product_line: ['Product Line', 'AMD Ryzen™ 9 Desktop Processors'],
            code_name: ['Former Codename', '"Vermeer"'],
            core_count: ['# of CPU Cores', '16'],
            thread_count: ['# of Threads', '32'],
            max_boost_clock: ['Max. Boost Clock', 'Up to 4.9GHz'],
            base_clock: ['Base Clock', '3.4GHz'],
            l2_cache_size: ['Total L2 Cache', '8MB'],
            l3_cache_size: ['Total L3 Cache', '64MB'],
            default_tdp: ['Default TDP', '105W'],
            processor_tech: [
              'Processor Technology for CPU Cores',
              'TSMC 7nm FinFET',
            ],
            unlocked: ['Unlocked for Overclocking', 'Yes'],
            socket_type: ['CPU Socket', 'AM4'],
            pib: ['Thermal Solution (PIB)', 'Not Included'],
            tjmax: ['Max. Operating Temperature (Tjmax)', '90°C'],
            launch_date: ['Launch Date', '11/5/2020'],
            os_support: [
              '*OS Support',
              `Windows 10 - 64-Bit Edition
        RHEL x86 64-Bit
        Ubuntu x86 64-Bit
        *Operating System (OS) support will vary by manufacturer.`,
            ],
          },
        },
        connectivity: {
          section_name: 'Connectivity',
          data: {
            pci_version: ['PCI ExpressⓇ Version', 'PCIe® 4.0'],
            mem_type: ['System Memory Type', 'DDR4'],
            mem_spec: ['System Memory Specification', `Up to 3200MHz`],
          },
        },
        graphics: {
          section_name: 'Graphics Capabilities',
          data: {
            integrated_graphics: ['Integrated Graphics', 'No'],
            graphics_model: [
              'Graphics Model',
              'Discrete Graphics Card Required',
            ],
          },
        },
        product_ids: {
          section_name: 'Product IDs',
          data: {
            product_id_boxed: ['Product ID Boxed', '100-100000059WOF'],
            product_id_tray: ['Product ID Tray', '100-000000059'],
          },
        },
      },
    },
  },
};

export default products;
