import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import colors from '../constants/colors';
import electron, { remote } from 'electron';
import { TitleBar } from 'react-desktop/windows';
import { initializeIcons } from '@fluentui/react/lib/Icons';

import Sidebar from '../components/Sidebar';

interface LayoutType {
  isMaximized: boolean;
  isOpen: boolean;
}

const Layout = styled.div<LayoutType>`
  display: grid;
  transition-duration: 0.3s;
  grid-template-columns: ${({ isOpen, isMaximized }) =>
    isOpen ? '30% 70%' : isMaximized ? '4.5% 95.5%' : '6% 94%'};
  border-radius: ${(p) => (p.isMaximized ? '0px' : '3px')};
  overflow: hidden;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(./shot.jpg);
    background-position: center;
    background-size: 160% 160%;
    opacity: 0.9;
    filter: blur(15px);
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  section {
    @media screen and (prefers-color-scheme: light) {
      background: ${colors.white};
      color: ${colors.black};
    }
    @media screen and (prefers-color-scheme: dark) {
      background: ${colors.black};
      color: ${colors.white};
    }
    padding: 0 20px;
  }
`;

const WindowControls = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  div {
    position: absolute;
    right: 0;
    @media screen and (prefers-color-scheme: dark) {
      a {
        svg {
          polygon,
          path,
          rect {
            fill: ${colors.white};
          }
        }
      }
    }
  }
`;

const BasicLayout: React.FunctionComponent = (p) => {
  const [isMaximized, setMaximized] = useState<boolean>(false);
  const isMenuOpen = useSelector((s: any) => s.sidebar.isOpen);
  const Bwindow = electron.remote.BrowserWindow.getAllWindows()[0];
  initializeIcons();

  const handleMaximize = (): void => {
    if (isMaximized) {
      Bwindow.setResizable(true);
      Bwindow?.setSize(1024, 650);
      Bwindow.setResizable(false);
      setMaximized(false);
    } else {
      Bwindow?.maximize();
      setMaximized(true);
    }
  };

  return (
    <Layout id="main-window" isMaximized={isMaximized} isOpen={isMenuOpen}>
      <Sidebar isMaximized={isMaximized} />
      <section>{p.children}</section>
      <WindowControls>
        <TitleBar
          controls
          background="none"
          isMaximized={isMaximized}
          onCloseClick={() => Bwindow?.close()}
          onMinimizeClick={() => Bwindow?.minimize()}
          onMaximizeClick={handleMaximize}
          onRestoreDownClick={handleMaximize}
        />
      </WindowControls>
    </Layout>
  );
};

export default BasicLayout;
