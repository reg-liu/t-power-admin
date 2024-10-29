import { Suspense, lazy } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import Card from '@/components/card';
import { Iconify, SvgIcon } from '@/components/icon';
import { CircleLoading } from '@/components/loading';
import ProTag from '@/theme/antd/components/tag';

import { AppRouteObject } from '#/router';

const ClipboardPage = lazy(() => import('@/pages/functions/clipboard'));
const Test = lazy(() => import('@/pages/sys/others/test'));
const Page403 = lazy(() => import('@/pages/sys/error/Page403'));
const Page404 = lazy(() => import('@/pages/sys/error/Page404'));
const Page500 = lazy(() => import('@/pages/sys/error/Page500'));

function Wrapper({ children }: any) {
  return <Suspense fallback={<CircleLoading />}>{children}</Suspense>;
}

const functions: AppRouteObject = {
  order: 4,
  path: 'functions',
  element: (
    <Suspense fallback={<CircleLoading />}>
      <Outlet />
    </Suspense>
  ),
  meta: {
    label: 'sys.menu.functions',
    icon: <Iconify icon="solar:plain-2-bold-duotone" className="ant-menu-item-icon" size="24" />,
    key: '/functions',
  },
  children: [
    {
      index: true,
      element: <Navigate to="clipboard" replace />,
    },
    {
      path: 'clipboard',
      element: <ClipboardPage />,
      meta: { label: 'sys.menu.clipboard', key: '/functions/clipboard' },
    },
    {
      path: '403',
      element: <Page403 />,
      meta: {
        label: 'sys.menu.error.403',
        key: '/functions/403',
      },
    },
    {
      path: '404',
      element: <Page404 />,
      meta: {
        label: 'sys.menu.error.404',
        key: '/functions/404',
      },
    },
    {
      path: '500',
      element: <Page500 />,
      meta: {
        label: 'sys.menu.error.500',
        key: '/functions/500',
      },
    },
    {
      path: 'test',
      element: (
        <Wrapper>
          <Test />
        </Wrapper>
      ),
      meta: {
        label: 'sys.menu.test',
        icon: <Iconify icon="carbon:debug" size={24} />,
        key: '/functions/test',
      },
    },
    {
      element: (
        <Wrapper>
          <div />
        </Wrapper>
      ),
      meta: {
        label: 'sys.menu.disabled',
        icon: <SvgIcon icon="ic_disabled" className="ant-menu-item-icon" size="24" />,
        disabled: true,
        key: '/functions/disabled',
      },
    },
    {
      path: 'label',
      element: (
        <Wrapper>
          <div />
        </Wrapper>
      ),
      meta: {
        label: 'sys.menu.label',
        icon: <SvgIcon icon="ic_label" className="ant-menu-item-icon" size="24" />,
        suffix: (
          <ProTag color="cyan" icon={<Iconify icon="solar:bell-bing-bold-duotone" size={14} />}>
            NEW
          </ProTag>
        ),
        key: '/functions/label',
      },
    },
    {
      path: 'blank',
      element: (
        <Wrapper>
          <Card />
        </Wrapper>
      ),
      meta: {
        label: 'sys.menu.blank',
        icon: <SvgIcon icon="ic_blank" className="ant-menu-item-icon" size="24" />,
        key: '/functions/blank',
      },
    },
  ],
};

export default functions;
