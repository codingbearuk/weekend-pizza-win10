import React from 'react';
import { Icon } from '@fluentui/react/lib/Icon';

import { Container, Title, Image } from './Message.styles';
import { Message as MsgType } from '../Messages.t';

interface MessageType extends MsgType {
  onClick: (message: MessageType) => void;
  openMsgID: string;
}

const Message: React.FunctionComponent<MessageType> = (p) => {
  return (
    <Container
      onClick={() => p.onClick(p)}
      isOpen={p.openMsgID === p._id}
      new={p.new}
    >
      <Image new={p.new} isOpen={p.openMsgID === p._id}>
        <Icon iconName={p.new ? 'MessageFill' : 'Message'} />
      </Image>
      <Title new={p.new} isOpen={p.openMsgID === p._id}>
        <h3>
          {p.subject.length > 20 ? `${p.subject.slice(0, 19)}...` : p.subject}
        </h3>
        <p>{p.email}</p>
      </Title>
    </Container>
  );
};

export default Message;
