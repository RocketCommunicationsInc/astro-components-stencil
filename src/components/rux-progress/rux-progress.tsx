import { Component, Host, h, Prop, Method } from '@stencil/core';

@Component({
  tag: 'rux-progress',
  styleUrl: 'rux-progress.scss',
  shadow: true,
})
export class RuxProgress {
@Prop() maxvalue: number = 100;
@Prop() value: number;
@Prop() hidelabel: boolean = false;

getProgressAsString(){
  return this.maxvalue === 100 ? `${this.value}%` : `${this.value}/${this.maxvalue}`
}
  render() {
    return (
      <Host>
        <div class="rux-progress">
            
        </div>
        <slot></slot>
      </Host>
    );
  }

}

//? Gonna need to determine things with the given props, such as hidden, value, that kinda thing.