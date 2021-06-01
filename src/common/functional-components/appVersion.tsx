import { FunctionalComponent, h } from '@stencil/core';

interface AppVersionProps{
  version: string;
}

export const AppVersion: FunctionalComponent<AppVersionProps> = ({ version }) => (
  <span class="app-version">{ version }</span>
);