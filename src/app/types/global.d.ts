declare module '*.module.scss' {
  interface IClassNames {
    [className: string]: string;
  }

  const classNames: IClassNames;
  export = classNames;
}

declare const __IS_DEV__: boolean;

declare const __API__: string;

declare const __FILE_CLOUD__: string;

declare const __PROJECT__: 'storybook' | 'frontend' | 'jest';

//Pictures
declare module '*.svg' {
  import React from 'react';

  const SVG: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  export default SVG;
}
declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
