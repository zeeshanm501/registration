import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {

    const { header } = props

    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', position: 'fixed' }}>
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                        {header}
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact='true' to="" activeclassname="activeClicked">
                            <CDBSidebarMenuItem icon="user">Student</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact='true' to="quiz" activeclassname="activeClicked">
                            <CDBSidebarMenuItem icon="table">Quiz</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact='true' to="courses" activeclassname="activeClicked">
                            <CDBSidebarMenuItem icon="chart-line">Courses</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;