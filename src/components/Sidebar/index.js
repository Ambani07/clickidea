import React from 'react'

import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SidebarLinks,
} from './SidebarElements'

const Sidebar = ({isOpen, toggle, home}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>

                {home ? (
                    <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="pricing" onClick={toggle}>Prices</SidebarLink>
                    <SidebarLink to="contactus" onClick={toggle}>Contact</SidebarLink>
                </SidebarMenu>
                ): (
                    <SidebarMenu>
                        <SidebarLinks to="/" onClick={toggle}>Home</SidebarLinks>
                    </SidebarMenu>
                )}
                
                {/* <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
