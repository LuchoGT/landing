declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
}

declare module "*.svg" {
    import * as React from 'react';
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}
