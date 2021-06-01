import { FunctionalComponent, h} from '@stencil/core'
import {collapseNotifications} from '../../utils/utils'

interface MonitoringBadgeProps {
    notifications: number;
}

const MonitoringBadge: FunctionalComponent<MonitoringBadgeProps> = ({notifications}) => (
    <div class={`rux-advanced-status__badge ${!notifications ? 'rux-advanced-status__hidden' : ''}`}>
        {collapseNotifications(notifications)}
    </div>
)

export default MonitoringBadge