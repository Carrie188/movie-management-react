import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
import PATHS from 'resources/paths';
import {
    IconAgents,
    IconArticles,
    IconContacts,
    IconIdeas,
    IconLogout,
    IconOverview,
    IconSettings,
    IconSubscription,
    IconTickets
} from 'assets/icons';
import { convertSlugToUrl } from 'resources/utilities';
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
import MenuItem from './MenuItemComponent';

const useStyles = createUseStyles({
    separator: {
        borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    }
});

function SidebarComponent() {
    const { push } = useHistory();
    const theme = useTheme();
    const classes = useStyles({ theme });
    const isMobile = window.innerWidth <= 1080;

    // log out function
    const handleLogOut =()=> {
        sessionStorage.clear();
        push(PATHS.login);
    }

    function onClick(slug, parameters = {}) {
        push(convertSlugToUrl(slug, parameters));
    }

    return (
        <Menu isMobile={isMobile}>
            <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                <LogoComponent />
            </div>
            <MenuItem
                id={PATHS.dashboard}
                title='Dashboard'
                icon={IconSubscription}
                onClick={() => onClick(PATHS.dashboard)}
            />
            <MenuItem
                id={PATHS.overview}
                items={[PATHS.overviewTwo, PATHS.overviewThree]}
                title='Movies'
                icon={IconOverview}
            >
                <MenuItem
                    id={PATHS.overview}
                    title='Overview'
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(PATHS.overview)}
                />
                <MenuItem
                    id={PATHS.overviewTwo}
                    title='Add Movie'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(PATHS.overviewTwo)}
                />
                <MenuItem
                    id={PATHS.overviewThree}
                    title='Edit Movie'
                    level={2}
                    icon={IconArticles}
                    onClick={() => onClick(PATHS.overviewThree)}
                />
            </MenuItem>
            <MenuItem
                id={PATHS.ideas}
                items={[PATHS.ideasTwo, PATHS.ideasThree]}
                title='Shows'
                icon={IconIdeas}
            >
                <MenuItem
                    id={PATHS.ideas}
                    title='Overview'
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(PATHS.ideas)}
                />
                <MenuItem
                    id={PATHS.ideasTwo}
                    title='Add Show'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(PATHS.ideasTwo)}
                />
                <MenuItem
                    id={PATHS.ideasThree}
                    title='Edit Show'
                    level={2}
                    icon={IconArticles}
                    onClick={() => onClick(PATHS.ideasThree)}
                />
            </MenuItem>
            <MenuItem
                id={PATHS.agents}
                title='Screens'
                icon={IconAgents}
                onClick={() => onClick(PATHS.agents)}
            />
            <MenuItem
                id={PATHS.tickets}
                title='Tickets'
                icon={IconTickets}
                onClick={() => onClick(PATHS.tickets)}
            />
            <MenuItem
                id={PATHS.users}
                title='Users'
                icon={IconContacts}
                onClick={() => onClick(PATHS.users)}
            />
            <MenuItem
                id={PATHS.articles}
                title='Projects'
                icon={IconArticles}
                onClick={() => onClick(PATHS.articles)}
            />
            <MenuItem
                id={PATHS.subscription}
                title='My Profile'
                icon={IconSubscription}
                onClick={() => onClick(PATHS.subscription)}
            />
            <div className={classes.separator}></div>
            <MenuItem
                id={PATHS.settings}
                title='Settings'
                icon={IconSettings}
                onClick={() => onClick(PATHS.settings)}
            />

            <MenuItem id='logout' title='Logout' icon={IconLogout} onClick={handleLogOut} />
        </Menu>
    );
}

export default SidebarComponent;
