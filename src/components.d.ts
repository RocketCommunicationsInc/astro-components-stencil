/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
export namespace Components {
  interface RuxButton {
    disabled: boolean;
    icon: string;
    iconOnly: boolean;
    outline: boolean;
    size?: 'small' | 'large';
  }
  interface RuxClock {
    aos: number;
    dayOfYear: number;
    hideDate: boolean;
    hideTimezone: boolean;
    los: string;
    small: boolean;
    time: string;
    timezone: string;
  }
  interface RuxGlobalStatusBar {
    appname: string;
    version: string;
  }
}
declare global {
  interface HTMLRuxButtonElement extends Components.RuxButton, HTMLStencilElement {}
  var HTMLRuxButtonElement: {
    prototype: HTMLRuxButtonElement;
    new (): HTMLRuxButtonElement;
  };
  interface HTMLRuxClockElement extends Components.RuxClock, HTMLStencilElement {}
  var HTMLRuxClockElement: {
    prototype: HTMLRuxClockElement;
    new (): HTMLRuxClockElement;
  };
  interface HTMLRuxGlobalStatusBarElement extends Components.RuxGlobalStatusBar, HTMLStencilElement {}
  var HTMLRuxGlobalStatusBarElement: {
    prototype: HTMLRuxGlobalStatusBarElement;
    new (): HTMLRuxGlobalStatusBarElement;
  };
  interface HTMLElementTagNameMap {
    'rux-button': HTMLRuxButtonElement;
    'rux-clock': HTMLRuxClockElement;
    'rux-global-status-bar': HTMLRuxGlobalStatusBarElement;
  }
}
declare namespace LocalJSX {
  interface RuxButton {
    disabled?: boolean;
    icon?: string;
    iconOnly?: boolean;
    outline?: boolean;
    size?: 'small' | 'large';
  }
  interface RuxClock {
    aos?: number;
    dayOfYear?: number;
    hideDate?: boolean;
    hideTimezone?: boolean;
    los?: string;
    small?: boolean;
    time?: string;
    timezone?: string;
  }
  interface RuxGlobalStatusBar {
    appname?: string;
    version?: string;
  }
  interface IntrinsicElements {
    'rux-button': RuxButton;
    'rux-clock': RuxClock;
    'rux-global-status-bar': RuxGlobalStatusBar;
  }
}
export { LocalJSX as JSX };
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'rux-button': LocalJSX.RuxButton & JSXBase.HTMLAttributes<HTMLRuxButtonElement>;
      'rux-clock': LocalJSX.RuxClock & JSXBase.HTMLAttributes<HTMLRuxClockElement>;
      'rux-global-status-bar': LocalJSX.RuxGlobalStatusBar & JSXBase.HTMLAttributes<HTMLRuxGlobalStatusBarElement>;
    }
  }
}
