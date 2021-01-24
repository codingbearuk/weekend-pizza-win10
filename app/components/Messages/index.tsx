import React, { useCallback, useEffect, useState } from 'react';
import { remote } from 'electron';

import View from './Messages.view';
import { Message } from './Messages.t';
import GET from '../../utils/api-comunication/get';
import POST from '../../utils/api-comunication/post';
import DEL from '../../utils/api-comunication/delete';

const Messages: React.FunctionComponent<{}> = (p) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [messages, setMessages] = useState<Message[]>();
  const [openMessage, setOpenMessage] = useState<Message>();

  const mainWindow = remote.BrowserWindow.getAllWindows()[0];

  const getMessages = useCallback(async () => {
    !isLoading && setLoading(true);
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

  const handleDeleteMessage = useCallback(async (id: string) => {
    const questionWindow = remote.dialog.showMessageBoxSync(mainWindow, {
      message: 'Are you sure you want to remove this message?',
      buttons: ['yes', 'no'],
      type: 'question',
    });
    if (questionWindow === 0) {
      const deleteMessage = await DEL('/message', { id });
      getMessages();
      const alertWindow = remote.dialog.showMessageBox(mainWindow, {
        message: 'your item has been deleted',
      });
    }
  }, []);

  const handleReply = useCallback(() => {
    window.location.replace(
      `mailto:${openMessage.email}?subject=re: ${openMessage.subject}`
    );
  }, [openMessage]);

  useEffect(() => {
    getMessages();
  }, []);

  return View({
    isLoading,
    messages,
    openMessage,
    handleOpenMsg,
    handleDeleteMessage,
    handleReply,
  });
};

export default Messages;
