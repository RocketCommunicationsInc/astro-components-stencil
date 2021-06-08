import { html, render } from 'lit-html'
import {
    boolean,
    text,
    select,
    number,
    withKnobs,
} from '@storybook/addon-knobs'

//@ts-ignore
import readme from '../components/rux-notification/readme.md'

export default {
    title: 'Components/Notification',
    decorators: [withKnobs],
}

export const Notification = () => {
    const toggleBanner = boolean('Enable Banner', true)
    const statusOptions = ['standby', 'normal', 'caution', 'critical']
    const statusKnob = select('Status', statusOptions, 'normal')

    const messageKnob = text(
        'Banner Message',
        `This is a notification banner. It won’t disappear until the user dismisses it.`
    )
    return html`
        <div style="display: flex; flex-flow: column; justify-content: center;">
            <rux-notification
                ?open="${toggleBanner}"
                status="${statusKnob}"
                message="${messageKnob}"
            >
            </rux-notification>
        </div>
    `
}

Notification.story = {
    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar: readme,
        },
    },
}

export const NotificationAutoClose = () => {
    const toggleBanner = boolean('Enable Banner', true)
    const statusOptions = ['standby', 'normal', 'caution', 'critical']
    const statusKnob = select('Status', statusOptions, 'standby')

    //* Previous implementation was using second values, which <rux-notification> takes in as ms values.
    //* Changing the default, min and max close delay values to ms values (hence the 2000 - 10000 slider)
    //* allows for the values to be correct and the notification to close at the correct time.
    //* It does look kinda weird to have a slider from 2000 - 10000, so suggestions are welcome.
    const closeDelay = number('Close Delay', 3000, {
        range: true,
        min: 2000,
        max: 10000,
        step: 1000,
    })

    //! This message does not currently update when closeDelay does, likely because it isn't ever re-rendering
    const messageKnob = text(
        'Banner Message',
        `This is a notification banner. It will disappear in ${closeDelay} ms.`
    )
    return html`
        <div style="display: flex; flex-flow: column; justify-content: center;">
            <rux-notification
                ?open="${toggleBanner}"
                close-after="${closeDelay}"
                status="${statusKnob}"
                message="${messageKnob}"
            >
            </rux-notification>
        </div>
    `
}

NotificationAutoClose.story = {
    name: 'Notification (Auto Close)',

    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar: readme,
        },
    },
}

export const AllNotificationBanners = () => html`
    <div
        style="display: flex; flex-flow: column; justify-content: center; margin:20px;"
    >
        <div
            style="display: flex; position: relative; height: 68px; margin-bottom: 20px; overflow: hidden;"
        >
            <rux-notification
                open
                status="standby"
                message="Standby notification banner"
            ></rux-notification>
        </div>
        <div
            style="display: flex; position: relative; height: 68px; margin-bottom: 20px; overflow: hidden;"
        >
            <rux-notification
                open
                status="normal"
                message="Normal notification banner"
            ></rux-notification>
        </div>
        <div
            style="display: flex; position: relative; height: 68px; margin-bottom: 20px; overflow: hidden;"
        >
            <rux-notification
                open
                status="caution"
                message="Caution notification banner"
            ></rux-notification>
        </div>
        <div
            style="display: flex; position: relative; height: 68px; margin-bottom: 20px; overflow: hidden;"
        >
            <rux-notification
                open
                status="critical"
                message="Critical notification banner"
            ></rux-notification>
        </div>
    </div>
`

AllNotificationBanners.story = {
    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar: readme,
        },
    },
}
