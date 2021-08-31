import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import JulesIcon from '../assets/JulesLogo.png'
import LogoutIcon from '../assets/logout.png'

const SideBar = () => (
    <div className="channel-list___sidebar">
        <div className="channel-list__sidebar__icon1">
            <div classname="icon1__inner">
                <img src={JulesIcon} alt="Jules" width="30" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div classname="icon1__inner">
                <img src={LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
    </div>
)

const ChannelListContainer = () => {
    return (
        <>
            <Sidebar />
        </>
    );
}

export default ChannelListContainer;