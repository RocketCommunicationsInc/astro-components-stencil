import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/new-releases.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-new-releases',
  shadow: false,
})
export class RuxIconNewReleases {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#new-releases`}></use>
      </svg>
    );
  }
}
