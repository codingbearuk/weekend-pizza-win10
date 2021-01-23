import React from 'react';
import { ProgressCircle } from 'react-desktop/windows';
import { red } from '../../constants/colors';

import {
  Container,
  Content,
  OpenMessage,
  MessagesSidebar,
} from './Messages.styles';
import { Message as MessageType } from './Messages.t';
import Message from './Message';

interface ViewType {
  isLoading: boolean;
  messages: MessageType[];
  openMessage: MessageType;
  handleOpenMsg: (messange: MessageType) => void;
}

const View: React.FunctionComponent<ViewType> = (p) => {
  return (
    <Container>
      <h1>Messages</h1>

      {p.isLoading ? (
        <ProgressCircle color={red} size={80} />
      ) : (
        <Content>
          <OpenMessage>
            {p.openMessage && (
              <>
                <h2>{p.openMessage.subject}</h2>
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
