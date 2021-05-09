import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/local-library.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-local-library',
  shadow: false,
})
export class RuxIconLocalLibrary {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#local-library`}></use>
      </svg>
    );
  }
}
