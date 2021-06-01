import { FunctionalComponent, h } from '@stencil/core';

interface AppNameProps{
  name: string;
}

export const AppName: FunctionalComponent<AppNameProps> = ({ name }, children ) => (
  <h1 class="app-name">{name}{children}</h1>
);