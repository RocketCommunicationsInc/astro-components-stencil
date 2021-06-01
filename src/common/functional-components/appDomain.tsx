import { FunctionalComponent, h } from '@stencil/core';

interface AppDomainProps{
  domain: string;
}

export const AppDomain: FunctionalComponent<AppDomainProps> = ({ domain }) => (
  <h1 class="app-domain">{domain}</h1>
);