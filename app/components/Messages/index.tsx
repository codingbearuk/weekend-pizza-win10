import React, { useCallback, useEffect, useState } from 'react';

import View from './Messages.view';
import { Message } from './Messages.t';
import GET from '../../utils/api-comunication/get';
import POST from '../../utils/api-comunication/post';

const Messages: React.FunctionComponent = (p) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [messages, setMessages] = useState<Message[]>();
  const [openMessage, setOpenMessage] = useState<Message>();

  const getMessages = useCallback(async () => {
    const messages: Message[] = await GET('/messages');
    if (messages) {
      const reversed: Message[] = [...messages].reverse();
      setLoading(false);
      setMessages(reversed);
      setOpenMessage(reversed[0]);
    }
  }, []);

  const handleOpenMsg = useCallback(
    async (messageToOpen: Message) => {
      if (messageToOpen.new) {
        const setAsRead = await POST('/set-msg-as-read', {
          id: messageToOpen._id,
        });
        if (setAsRead.status === 'ok')
          setMessages(setAsRead.messages.reverse());
      }
      setOpenMessage(messageToOpen);
    },
    [messages]
  );

  useEffect(() => {
    getMessages();
  }, []);

  return View({ isLoading, messages, openMessage, handleOpenMsg });
};

export default Messages;
