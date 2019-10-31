import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './index.css';
import PendingRequests from '../Pages/PendingRequests'
import AllUsers from '../Pages/AllUsers'
import CreateNewProjects from '../Pages/CreateNewProjects'
import ProjectAssignedToMe from '../Pages/ProjectAssignedToMe'
import ProjectAssignedByMe from '../Pages/ProjectAssignedByMe'
import AllOngoingProjects from '../Pages/AllOngoingProjects'
import ClosedProjects from '../Pages/ClosedProjects'
import ArchieveProjects from '../Pages/ArchieveProjects'
import GenerateNewProjects from '../Pages/GenerateNewProjects'
import PastReports from '../Pages/PastReports'
import Support from '../Pages/CreateNewIncident'
import CreateNewIncident from '../Pages/CreateNewIncident';
import OpenIncidents from '../Pages/OpenIncidents';




export default class ViewComponent extends React.Component {
    render() {
        return (
            <div className="view-container">
                <HashRouter>
                    <Route path="/admin/pending-requests" component={PendingRequests} />
                    <Route path="/admin/all-users" component={AllUsers} />
                    <Route path="/inquiry/create-new-projects" component={CreateNewProjects} />
                    <Route path="/inquiry/projects-assigned-to-me" component={ProjectAssignedToMe} />
                    <Route path="/inquiry/projects-assigned-by-me" component={ProjectAssignedByMe} />
                    <Route path="/inquiry/all-ongoing-projects" component={AllOngoingProjects} />
                    <Route path="/inquiry/closed-projects" component={ClosedProjects} />
                    <Route path="/inquiry/archieve-projects" component={ArchieveProjects} />
                    <Route path="/report/generate-new-reports" component={GenerateNewProjects} />
                    <Route path="/report/past-reports" component={PastReports} />
                    <Route path="/support/create-new-incident" component={CreateNewIncident} />
                    <Route path="/support/open-incidents" component={OpenIncidents} />
                </HashRouter>
            </div>

        )
    }
}