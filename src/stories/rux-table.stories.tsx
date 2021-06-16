/* eslint-disable no-unused-vars */
import { html, render } from 'lit-html'
import { withKnobs } from '@storybook/addon-knobs'
import TableReadme from '../components/rux-table/readme.md'
/* eslint-enable no-unused-vars */

const getRandomNum = (min, max, roundTo = 0) => {
    const num = Math.random() * max + min
    return num.toFixed(roundTo)
}

const columnData = [
    { headerName: '', field: 'control' },
    { headerName: 'Current tag', field: 'currentTag' },
    { headerName: 'Original tag', field: 'originalTag' },
    { headerName: 'Sensor', field: 'sensor' },
    { headerName: 'ASTAT', field: 'astat' },
    { headerName: 'Obs time', field: 'obsTime' },
    { headerName: 'Ob type', field: 'obType' },
    { headerName: 'Az/Rt asc', field: 'azRtAsc' },
    { headerName: 'El/Dec', field: 'elDec' },
    { headerName: 'Range', field: 'range' },
    { headerName: 'Range rate', field: 'rangeRate' },
]

const agColumnData = columnData.slice(0)
agColumnData.shift()

const agRowData = Array(24)
for (let i = 0; i < agRowData.length; i++) {
    agRowData[i] = {
        selected: false,
        currentTag: getRandomNum(19999999, 9999999),
        originalTag: '0000' + getRandomNum(11111, 99999),
        sensor: getRandomNum(250, 450),
        astat: getRandomNum(-1, 3) > 0 ? 'FULL' : 'SP_FULL',
        obsTime: '2020 158 01:23:45:678',
        obType: 'OBTYPE_' + getRandomNum(1, 9),
        azRtAsc: getRandomNum(120, 150, 4),
        elDec: getRandomNum(1000, 3500, 3),
        range: getRandomNum(1500, 7500, 3),
        rangeRate: getRandomNum(-10, 10, 5),
    }
}

const rowData = agRowData.slice(0).map((item) => {
    item.control = true
    return item
})
rowData[4].selected = true

export default {
    title: 'Components/Table',
    decorators: [withKnobs],
}

export const HTMLTable = () => {
    return html`
    <div style="padding: 2rem;">
			<rux-table class="rux-table">
        <rux-table-header>
          <rux-table-header-row>
            ${columnData.map(
                (column) => html`
                    ${column.headerName == ''
                        ? html``
                        : html`<rux-table-header-cell
                              >${column.headerName}</rux-table-header-cell
                          >`}
                `
            )}
            <rux-table-header-cell>
          </rux-table-header-row>
        </rux-table-header>

        <rux-table-body>
        ${rowData.map(
            (row) => html`
					<rux-table-row ?data-selected="${row.selected}">
          <rux-table-cell>${row.currentTag}</rux-table-cell>
          <rux-table-cell>${row.originalTag}</rux-table-cell>
          <rux-table-cell>${row.sensor}</rux-table-cell>
          <rux-table-cell>${row.astat}</rux-table-cell>
          <rux-table-cell>${row.obsTime}</rux-table-cell>
          <rux-table-cell>${row.obType}</rux-table-cell>
          <rux-table-cell>${row.azRtAsc}</rux-table-cell>
          <rux-table-cell>${row.elDec}</rux-table-cell>
          <rux-table-cell>${row.range}</rux-table-cell>
          <rux-table-cell>${row.rangeRate}</rux-table-cell>
          </rux-table-row>
        </rux-table-body>

        `
        )}
      </table>
    </div>

  `
}
HTMLTable.story = {
    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar: TableReadme,
        },
    },
}

export const HTMLControlsTable = () => {
    function checkBox(id) {
        const checkInput = html`
            <span class="rux-checkbox">
                <input
                    type="checkbox"
                    name="checkbox${id}"
                    id="checkbox${id}"
                />
                <label for="checkbox${id}"></label>
            </span>
        `
        return checkInput
    }
    return html`
        <div style="display: flex; padding: 2vh; justify-content: center;">
            <table class="rux-table">
                <tr class="rux-table__column-head">
                    ${columnData.map(
                        (column) => html` <th>${column.headerName}</th> `
                    )}
                </tr>
                ${rowData.map(
                    (row, index) => html`
                        <tr ?data-selected="${row.selected}">
                            <td>
                                ${row.control
                                    ? html` ${checkBox(index)}`
                                    : html` &nbsp; `}
                            </td>
                            <td>${row.currentTag}</td>
                            <td>${row.originalTag}</td>
                            <td>${row.sensor}</td>
                            <td>${row.astat}</td>
                            <td>${row.obsTime}</td>
                            <td>${row.obType}</td>
                            <td>${row.azRtAsc}</td>
                            <td>${row.elDec}</td>
                            <td>${row.range}</td>
                            <td>${row.rangeRate}</td>
                        </tr>
                    `
                )}
            </table>
        </div>
    `
}

HTMLControlsTable.story = {
    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar: TableReadme,
        },
    },
}
