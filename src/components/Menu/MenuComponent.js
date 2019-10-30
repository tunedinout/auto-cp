import React from 'react';
// import { PanelMenu } from 'primereact/panelmenu';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import './index.css';
import { PanelMenu } from 'primereact/panelmenu';



export default class MenuComponent extends React.Component {
    render() {


        const items = [
            {
                label: 'Admin',
                icon: 'pi pi-user',
                items: [
                    {
                        label: 'Pending Requests',
                        icon: 'pi pi-key',
                        command: (event) => {
                            window.location.hash = "/pending-requests";
                        }

                    },
                    {
                        label: 'All Users',
                        icon: 'pi pi-fw pi-users',
                        command: (event) => {
                            window.location.hash = "/all-users";
                        }
                    }
                ]
            },
            {
                label: 'Inquiry',
                icon: 'pi pi-fw pi-question',
                items: [
                    {
                        label: 'Create new projects',
                        icon: 'pi pi-fw pi-plus',
                        command: (event) => {
                            window.location.hash = "/create-new-projects";
                        }
                    },
                    {
                        label: 'Projects assigned to me',
                        icon: 'pi pi-fw pi-align-left',
                        command: (event) => {
                            window.location.hash = "/projects-assigned-to-me";
                        }
                    },
                    {
                        label: 'Projects assigned by me',
                        icon: 'pi pi-fw pi-align-right',
                        command: (event) => {
                            window.location.hash = "/projects-assigned-by-me";
                        }
                    },
                    {
                        label: 'All ongoing projects',
                        icon: 'pi pi-fw pi-clone',
                        command: (event) => {
                            window.location.hash = "/all-ongoing-projects";
                        }
                    },
                    {
                        label: 'Closed projects',
                        icon: 'pi pi-fw pi-copy',
                        command: (event) => {
                            window.location.hash = "/closed-projects";
                        }
                    },
                    {
                        label: 'Archive projects',
                        icon: 'pi pi-fw pi-envelope',
                        command: (event) => {
                            window.location.hash = "/archieve-projects";
                        }
                    }

                ]
            },
            {
                label: 'Report',
                icon: 'pi pi-fw pi-file-excel',
                items: [
                    {
                        label: 'Generate new reports',
                        icon: 'pi pi-fw pi-plus',
                        command: (event) => {
                            window.location.hash = "/generate-new-reports";
                        }

                    },
                    {
                        label: 'past reports',
                        icon: 'pi pi-fw pi-minus',
                        command: (event) => {
                            window.location.hash = "/past-reports";
                        }

                    }

                ]
            },
            {
                label: 'Support',
                icon: 'pi pi-fw pi-file-excel',
                command: (event) => {
                    window.location.hash = "/support";
                }
            }
        ]




        return (
            // <Tree value={data} />
            <PanelMenu model={items} />

        )
    }
}