import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '', title: 'Comercio', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    },
    {
        path: '/dashboard/dashboard1', title: 'Billetera', icon: 'mdi mdi-gauge', class: '', label: '', labelClass: '', extralink: false, submenu: []
    },
    /* {
        path: '', title: 'Dashboards', icon: 'mdi mdi-gauge', class: 'has-arrow', label: '4', labelClass: 'label label-rouded label-themecolor pull-right', extralink: false,
        submenu: [
            { path: '/dashboard/dashboard1', title: 'Usuario', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/dashboard/dashboard2', title: 'Classic', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/dashboard/dashboard3', title: 'Analytical', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    }, */
    {
        path: '', title: 'Transacciones', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    }/* ,{
        path: '/component/AcreditarMillas', title: 'Acreditar', icon: 'mdi mdi-contrast', class: '', label: '', labelClass: '', extralink: false, submenu: [ ]
    } */,{
        path: '/component/CambiarMillas', title: 'Compra', icon: 'mdi mdi-swap-horizontal', class: '', label: '', labelClass: '', extralink: false, submenu: [ ]
    },{
        path: '/component/CobrarMillas', title: 'Cobrar', icon: 'mdi mdi-cash-multiple', class: '', label: '', labelClass: '', extralink: false, submenu: [ ]
    },
   /*  {
        path: '', title: 'test', icon: 'mdi mdi-plus', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/component/accordion', title: 'Accordion', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/alert', title: 'Alert', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/carousel', title: 'Carousel', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/dropdown', title: 'Dropdown', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/modal', title: 'Modal', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/pagination', title: 'Pagination', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/poptool', title: 'Popover & Tooltip', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/progressbar', title: 'Progressbar', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/rating', title: 'Ratings', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/tabs', title: 'Tabs', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/timepicker', title: 'Timepicker', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/buttons', title: 'Button', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/cards', title: 'Card', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    }, */
    /* {
        path: '', title: 'Menu Levels', icon: 'mdi mdi-arrange-send-backward', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: 'javascript:void(0);', title: 'Second Level', icon: '', class: '', label: '', labelClass: '', extralink: true, submenu: [] },
            {
                path: '', title: 'Second Child', icon: '', class: 'has-arrow', label: '', labelClass: '', extralink: false,
                submenu: [
                    { path: 'javascript:void(0);', title: 'Third 1.1', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                    { path: 'javascript:void(0);', title: 'Third 1.2', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                ]
            },
        ]
    } */
     
];
