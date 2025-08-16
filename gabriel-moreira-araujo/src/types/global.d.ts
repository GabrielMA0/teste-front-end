declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/pagination";

// Para importar SVG como Componente React (?react)
declare module '*.svg?react' {
  import * as React from 'react';
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

type Product = {
    productName?: string;
    descriptionShort?: string;
    photo?: string;
    price?: number;
}
