import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'rux-classification-markings',
  styleUrl: 'rux-classification-markings.scss',
  shadow: true,
})
export class RuxClassificationMarking {
  @Prop() classification: string;
  @Prop({reflect: true}) tag: boolean
  @Prop() label: string


  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}




