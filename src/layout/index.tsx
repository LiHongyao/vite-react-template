/*
 * @Author: Lee
 * @Date: 2021-11-12 11:11:26
 * @LastEditors: Lee
 * @LastEditTime: 2021-11-13 15:17:20
 */

import TabBar from '@/components/@lgs-react/TabBar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <>
      <Outlet />
      <TabBar />
    </>
  );
};

export default Layout;
