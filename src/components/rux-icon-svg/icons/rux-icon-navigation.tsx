import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/navigation.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-navigation',
  shadow: false,
})
export class RuxIconNavigation {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#navigation`}></use>
      </svg>
    );
  }
}
