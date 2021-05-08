const fs = require('fs');

const main = () => {
  fs.readdir('./src/icons', (err, files) => {
    if (err) throw err;

    files.forEach(file => {
      const iconName = file.replace('.svg', '');

      let folder;
      let template;
      if (!file.includes('-svg')) {
        folder = 'rux-icon-svg';
        template = getTemplate(file, iconName);
      } else {
        folder = 'rux-icon-3';
        template = getTemplateSvg(file, iconName);
      }

      fs.writeFile(`./src/components/${folder}/icons/rux-icon-${iconName}.tsx`, template, (err) => {
        if (err) throw err;
      });
    });
  });
}

const getTemplate = (iconPath, iconName) => {
  return `import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/${iconPath}';

/** @internal **/
@Component({
  tag: 'rux-icon-${iconName}',
  shadow: false,
})
export class RuxIcon${toPascalCase(iconName)} {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={\`rux-icon--\${this.size}\`}  viewBox={this.viewBox}>
        <use xlinkHref={\`\${svgIcon}#${iconName}\`}></use>
      </svg>
    );
  }
}
`
}

const getTemplateSvg = (iconPath, iconName) => {
  return `import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/${iconPath}';

/** @internal **/
@Component({
  tag: 'rux-icon-${iconName}',
  shadow: false,
})
export class RuxIcon${toPascalCase(iconName)} {
  @Prop() size: string;

  render() {
    return <div style={{ 'height': this.size, 'width': this.size }} innerHTML={svgIcon}></div>;
  }
}
`
}

const toPascalCase = (string) => string.replace(/(^\w|-\w)/g, clearAndUpper);

const clearAndUpper = (string) => string.replace(/-/, "").toUpperCase();

// const toPascalCase = (string) => string.replace(/\w+/g,
  // (w) => w[0].toUpperCase() + w.slice(1).toLowerCase()).replace('-', '');

main();
