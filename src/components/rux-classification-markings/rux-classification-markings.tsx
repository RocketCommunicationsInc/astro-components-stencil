import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'rux-classification-markings',
  styleUrl: 'rux-classification-markings.css',
  shadow: true,
})
export class RuxClassificationMarkings {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
