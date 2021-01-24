import React from 'react';
import { ProgressCircle } from 'react-desktop/windows';
import { red } from '../../constants/colors';
import { Icon } from '@fluentui/react/lib/Icon';
import { useSelector } from 'react-redux';

import {
  Container,
  Content,
  OpenMessage,
  MessagesSidebar,
  ActionContainer,
} from './Messages.styles';
import { Message as MessageType } from './Messages.t';
import Message from './Message';

interface ViewType {
  isLoading: boolean;
  messages: MessageType[];
  openMessage: MessageType;
  handleOpenMsg: (messange: MessageType) => void;
  handleDeleteMessage: (id: string) => void;
  handleReply: () => void;
}

const View: React.FunctionComponent<ViewType> = (p) => {
  const isSidebarOpen = useSelector((s: any) => s.sidebar.isOpen);

  return (
    <Container>
      <h1>Messages</h1>

      {p.isLoading ? (
        <ProgressCircle color={red} size={80} />
      ) : (
        <Content isSidebarOpen={isSidebarOpen}>
          <OpenMessage>
            {p.openMessage && (
              <>
                <h2>{p.openMessage.subject}</h2>
                <h3>
                  {p.openMessage.name} ▫ {p.openMessage.email}
                </h3>
                <ActionContainer>
                  <Icon
                    iconName="MailReply"
                    title="reply"
                    onClick={p.handleReply}
                  />
                  <Icon
                    iconName="Delete"
                    title="delete"
                    onClick={() => p.handleDeleteMessage(p.openMessage._id)}
                  />
                </ActionContainer>
                <p>{p.openMessage.message}</p>
              </>
            )}
          </OpenMessage>
          <MessagesSidebar>
            {p.messages &&
              p.openMessage &&
              p.messages.map((message) => (
                <Message
                  key={message._id}
                  {...message}
                  onClick={p.handleOpenMsg}
                  openMsgID={p.openMessage._id}
                />
              ))}
          </MessagesSidebar>
        </Content>
      )}
    </Container>
  );
};

export default View;
