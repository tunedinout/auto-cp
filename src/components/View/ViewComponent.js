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
import Support from '../Pages/Support'




export default class ViewComponent extends React.Component {
    render() {
        return (
            <div className="view-container">
                <HashRouter>
                    <Route path="/pending-requests" component={PendingRequests} />
                    <Route path="/all-users" component={AllUsers} />
                    <Route path="/create-new-projects" component={CreateNewProjects} />
                    <Route path="/projects-assigned-to-me" component={ProjectAssignedToMe} />
                    <Route path="/projects-assigned-by-me" component={ProjectAssignedByMe} />
                    <Route path="/all-ongoing-projects" component={AllOngoingProjects} />
                    <Route path="/closed-projects" component={ClosedProjects} />
                    <Route path="/archieve-projects" component={ArchieveProjects} />
                    <Route path="/generate-new-reports" component={GenerateNewProjects} />
                    <Route path="/past-reports" component={PastReports} />
                    <Route path="/support" component={Support} />
                </HashRouter>
            </div>

        )
    }
}