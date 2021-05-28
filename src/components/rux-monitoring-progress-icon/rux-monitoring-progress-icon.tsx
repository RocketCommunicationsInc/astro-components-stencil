import { Component, Host, h, Prop, State, Watch } from '@stencil/core';
import { collapseNotifications } from '../../utils/utils'
import { Status } from '../../common/commonTypes.module'

interface RangeItem {
  threshold: number,
  status: Status
}

@Component({
  tag: 'rux-monitoring-progress-icon',
  styleUrl: 'rux-monitoring-progress-icon.scss',
  shadow: true,
})
export class RuxMonitoringProgressIcon {
  /*
  * Displays a label below the icon
  */
  @Prop() label!: string;
  /*
  * Displays a smaller label underneath the icon label 
  */
  @Prop() sublabel?: string;
  /*
  * Displays this value as a percentage in the center of the donut graph, and styles a proportional 
  * segment of the graph. Progress can be positive or negative (the later useful for countdowns). 
  * The progress value must exist within the thresholds specified in the range property below.
  */
  @Prop({reflect: true}) progress!: number
  /*
  * No	Items in this Array define thresholds for changing the status style of the progress icon. 
  * For each item in the Array, the icon will be styled with the given status while the progress value 
  * is less than the Array item’s threshold and equal to or greater than the next largest item‘s threshold. 
  * Both progress and the Array items’ threshold values can be positive or negative, 
  * so long as they are consistent and the threshold values span no more than 100 numbers. 
  * The component assumes the Array's first status threshold begins at 0.
  */
 @Prop() range?: Array<RangeItem>
  /*
  * If provided and greater than `0`, displays an outlined number badge at the bottom right of the icon. 
  * Numbers above `9999` are abbreviated to `'10K'` or `'100K'` for numbers in the thousands, `'1.5M'` 
  * for millions, and `'1.5B'` for billions. The badge uses `'∞'` for one trillion or higher.
  */
  @Prop() notifications?: number = 0;
  /*
  * Sets the minimum value for the progress range. When progress is this number it reads 0%. 
  * When it is halfway between min and max it will read 50%
  */
  @Prop() min?: number = 0
  /*
  * Sets the maximum value for the progress range. When progress is this number it will read 100%. 
  * When it is halfway between min and max it will read 50%
  */
  @Prop() max?: number = 100

  @State() status: Status;
  @State() _circumference: number = 56 * 2 * Math.PI
  @State() _graphProgress: number = 0

  @Watch('progress')
  checkProgress(newValue: number, oldValue: number) {
    if (newValue !== oldValue) {
      this.updateProgress()
    }
  }

  componentWillLoad() {
    if (Number.isInteger(this.progress)) {
      if (!this.range) {
        this.range = [
          {
            threshold: 17,
            status: 'off',
          },
          {
            threshold: 33,
            status: 'standby',
          },
          {
            threshold: 49,
            status: 'normal',
          },
          {
            threshold: 65,
            status: 'caution',
          },
          {
            threshold: 81,
            status: 'serious',
          },
          {
            threshold: 101,
            status: 'critical',
          },
        ];
      }
      this.range = this.range.sort((a, b) => (a.threshold > b.threshold ? 1 : -1));

      this.updateProgress();
    }
  }

  // TODO: Fix method or move to render.... can't return without a wrapping element
  private _iconTemplate() {
    return (
      <div id="icon-template-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" class="rux-status--${this.status}">
          <g id="progress">
            <circle 
              cx="60" 
              cy="60" 
              r="56" 
              fill="transparent" 
              stroke="rgba(40, 63, 88, 1)" 
              stroke-width="10" 
              transform="rotate(-90 61 60)"/>
            <circle 
              cx="60" 
              cy="60" 
              r="56" 
              fill="transparent" 
              stroke-dasharray="351.8583772 351.8583772" 
              stroke-dashoffset={this._graphProgress} 
              stroke-linecap="round" 
              stroke-width="10" 
              class="progress-ring__circle" 
              transform="rotate(-90 61 60)"
            />
          </g>
        </svg>
        <div class="rux-advanced-status__progress">
          ${Math.ceil((this.progress / this.max) * 100)}%
        </div>
      </div>
    );
  }

  // updated(changedProperties) {
  //   if (changedProperties.get('progress')) {
  //     this.updateProgress();
  //   }
  // }

  updateProgress() {
    this.status = this.range.find((range) => this.progress < range.threshold).status || this.range[0].status;

    const graphProgress = this._circumference - (this.progress / this.max) * this._circumference;

    // this.style.setProperty('--monitoring-progress', graphProgress);
    this._graphProgress = graphProgress
  }

  render() {
    return (
      <Host
        id="rux-advanced-status__icon"
        class="rux-advanced-status"
        title={`${this.notifications} ${this.label} ${this.sublabel}`}
        // style={{"--monitoring-progress": this._graphProgress.toString()}}
      >
        <div class="rux-advanced-status__icon-group">
          <rux-status status={this.status}></rux-status>

          {this._iconTemplate()} {this._badgeTemplate()}
        </div>

        {this._labelTemplate()}
      </Host>
    );
  }

}

// /* eslint-disable no-unused-vars */
// import { html, css } from 'lit-element';
// import { RuxMonitoringIcon } from './rux-monitoring-icon.js';
// /* eslint-enable no-unused-vars */

// export class RuxMonitoringProgressIcon extends RuxMonitoringIcon {
//   static get properties() {
//     return {
//       progress: {
//         type: Number,
//       },
//       range: {
//         type: Array,
//       },
//       min: {
//         type: Number,
//       },
//       max: {
//         type: Number,
//       },
//     };
//   }

//   constructor() {
//     super();

//     this.progress = 0;
//     this.max = 100;
//     this.min = 0;
//     this._circumference = 56 * 2 * Math.PI;
//   }

//   firstUpdated() {
//     super.connectedCallback();

//     if (Number.isInteger(parseInt(this.progress, 10))) {
//       if (!this.range) {
//         this.range = [
//           {
//             threshold: 17,
//             status: 'off',
//           },
//           {
//             threshold: 33,
//             status: 'standby',
//           },
//           {
//             threshold: 49,
//             status: 'normal',
//           },
//           {
//             threshold: 65,
//             status: 'caution',
//           },
//           {
//             threshold: 81,
//             status: 'serious',
//           },
//           {
//             threshold: 101,
//             status: 'critical',
//           },
//         ];
//       }
//       this.range = this.range.sort((a, b) => (a.threshold > b.threshold ? 1 : -1));

//       this.updateProgress();
//     }
//   }

//   updated(changedProperties) {
//     if (changedProperties.get('progress')) {
//       this.updateProgress();
//     }
//   }

//   updateProgress() {
//     this.status = this.range.find((range) => this.progress < range.threshold).status || this.range[0];

//     const graphProgress = this._circumference - (this.progress / this.max) * this._circumference;

//     this.style.setProperty('--monitoring-progress', graphProgress);
//   }

//   get iconTemplate() {
//     return html`
    // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style="" class="rux-status--${this.status}">
    //   <g id="progress">
    //     <circle cx="60" cy="60" r="56" fill="transparent" stroke="rgba(40, 63, 88, 1)" stroke-width="10" transform="rotate(-90 61 60)"/>
    //     <circle cx="60" cy="60" r="56" fill="transparent" stroke-dasharray="351.8583772 351.8583772" stroke-dashoffset="var(--monitoring-progress, 1)" stroke-linecap="round" stroke-width="10" class="progress-ring__circle" transform="rotate(-90 61 60)"/>
    //   </g>
    // </svg>
    //   <div class="rux-advanced-status__progress">
    //     ${Math.ceil((this.progress / this.max) * 100)}%
    //   </div>
//     `;
//   }

//   static get styles() {
//     return [
//       super.styles,
//       css`
//         svg {
//           margin: 0 auto;
//           width: 3rem;
//           height: 3rem;
//         }
//         svg.rux-status--off {
//           stroke: var(--colorOff, rgb(158, 167, 173));
//           fill: var(--colorOff, rgb(158, 167, 173));
//         }

//         svg.rux-status--standby {
//           stroke: var(--colorStandby, rgb(45, 204, 255));
//           fill: var(--colorStandby, rgb(45, 204, 255));
//         }

//         svg.rux-status--normal {
//           stroke: var(--colorNormal, rgb(86, 240, 0));
//           fill: var(--colorNormal, rgb(86, 240, 0));
//         }

//         svg.rux-status--caution {
//           stroke: var(--colorCaution, rgb(252, 232, 58));
//           fill: var(--colorCaution, rgb(252, 232, 58));
//         }

//         svg.rux-status--serious {
//           stroke: var(--colorSerious, rgb(255, 179, 0));
//           fill: var(--colorSerious, rgb(255, 179, 0));
//         }

//         svg.rux-status--critical {
//           stroke: var(--colorCritical, rgb(255, 56, 56));
//           fill: var(--colorCritical, rgb(255, 56, 56));
//         }

//         [data-progress] rux-icon {
//           transition: stroke-dashoffset 0.367s, stroke 0.367s;
//           transform-origin: 50% 50%;
//         }

//         .rux-advanced-status__progress {
//           font-family: var(--fontFamilyMono, 'monospace');
//           margin-top: -0.125rem;
//           margin-left: -0.125rem;
//           font-size: 0.8rem;

//           position: absolute;

//           display: flex;
//           justify-content: center;
//           align-items: center;

//           width: 100%;
//           height: 100%;

//           letter-spacing: -0.0625rem;
//           text-align: center;
//         }
//       `,
//     ];
//   }
// }
