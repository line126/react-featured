export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/context',
    name: 'context',
    icon: 'smile',
    component: './Context',
  },
  {
    path: '/pureMemo',
    name: 'pureMemo',
    icon: 'smile',
    component: './PureMemo',
  },
  {
    path: '/react-dnd',
    name: 'react-dnd',
    icon: 'smile',
    component: './ReactDnd',
  },
  {
    path: '/re-resizable',
    name: 're-resizable',
    icon: 'smile',
    component: './ReResizable',
  },
  {
    path: '/react-resizable',
    name: 'react-resizable',
    icon: 'smile',
    component: './ReactResizable',
  },
  {
    path: '/react-window',
    name: 'react-window',
    icon: 'smile',
    component: './ReactWindow',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
