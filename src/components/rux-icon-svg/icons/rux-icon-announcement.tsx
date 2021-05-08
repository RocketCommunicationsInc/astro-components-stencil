import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/announcement.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-announcement',
  shadow: false,
})
export class RuxIconAnnouncement {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#announcement`}></use>
      </svg>
    );
  }
}
