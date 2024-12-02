export const messages = [
  {
    chatId: 1, type: "message.call", direction: 'incoming',
    callDuration: "18 мин", isMissedCall: false, timestamp: '1727027959',
    avatar: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg', subText: '89829445678'
  },
  {
    chatId: 1, type: "message.text", text: "Привет!", direction: 'incoming', status: 'read', timestamp: '1727027959', subText: 'test test',
    actions: [
      { action: 'edit', title: 'изменить', icon: 'https://placehold.jp/30/336633/ffffff/64x64.png?text=pin' },
      { action: 'delete', title: 'удалить' }]
  },
  {
    chatId: 1, type: "message.typing", subText: '89829445678', avatar: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
  },
  {
    chatId: 1, type: "message.text", text: "Привет! Сообщение с просмотрами",
    direction: 'outgoing', status: 'received', timestamp: '1727027959',
    views: 1000,
    actions: [
      { action: 'edit', title: 'изменить', icon: 'https://placehold.jp/30/336633/ffffff/64x64.png?text=pin' },
      { action: 'delete', title: 'удалить' }]
  },
  {
    chatId: 1, type: "message.image", url: "https://nationaltoday.com/wp-content/uploads/2022/05/Sun-Day--1200x834.jpg", timestamp: '1727027959',
    alt: "Example Image", direction: 'outgoing',
    views: 1667,
    status: 'received', actions: [
      { action: 'edit', title: 'изменить', icon: 'https://placehold.jp/30/336633/ffffff/64x64.png?text=pin' },
      { action: 'delete', title: 'удалить' }]
  },
  {
    chatId: 2, type: "message.video", url: "https://file-examples.com/storage/fe40e015d566f1504935cfd/2017/11/file_example_MP3_700KB.mp3",
    text: "Привет!", direction: 'outgoing', status: 'read', timestamp: '1727027959',
    actions: [
      { action: 'edit', title: 'изменить', icon: 'fa-edit' },
      { action: 'delete', title: 'удалить' }]
  },
  {
    chatId: 2,
    messageId: 1,
    timestamp: '1731411505',
    type: "message.system", text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    chatId: 1, messageId: 1,
    timestamp: 1731411505,
    type: "message.system", text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    chatId: 2, type: "message.file", url: "https://axiomabio.com/pdf/test.pdf", filename: "Документ.pdf", direction: 'incoming',
    status: 'received', timestamp: '1727027959', actions: [{ action: 'edit', title: 'изменить' }, { action: 'delete', title: 'удалить' }]
  },
  { chatId: 2, type: "message.text", text: "Привет!", direction: 'incoming', status: 'read', timestamp: '1727027959' },
  {
    chatId: 2, type: "message.audio", url: "https://file-examples.com/storage/fe40e015d566f1504935cfd/2017/11/file_example_MP3_700KB.mp3",
    text: "Привет!", direction: 'incoming', status: 'received', subText: '89829445678', timestamp: '1727027959',
    actions: [{ action: 'edit', title: 'изменить' }, { action: 'delete', title: 'удалить' }]
  },
  {
    chatId: 2, type: "message.audio", url: "https://file-examples.com/storage/fe40e015d566f1504935cfd/2017/11/file_example_MP3_700KB.mp3",
    text: "Привет!", direction: 'outgoing', status: 'received', subText: '89829445678', timestamp: '1727027959',
    actions: [{ action: 'edit', title: 'изменить' }, { action: 'delete', title: 'удалить' }]
  },
  {
    chatId: 2, type: "message.image", url: "https://nationaltoday.com/wp-content/uploads/2022/05/Sun-Day--1200x834.jpg", alt: "Example Image",
    direction: 'incoming', subText: '89829445678', timestamp: '1726743559',
  },
  {
    chatId: 3, type: "message.audio", url: "https://file-examples.com/storage/fe40e015d566f1504935cfd/2017/11/file_example_MP3_700KB.mp3",
    text: "Привет!", direction: 'incoming', status: 'read', timestamp: '1727027959'
  },
  {
    chatId: 3, type: "message.image", url: "https://nationaltoday.com/wp-content/uploads/2022/05/Sun-Day--1200x834.jpg", alt: "Example Image",
    direction: 'outgoing', timestamp: '1726743559',
  },
  {
    chatId: 3, type: "message.audio", url: "https://file-examples.com/storage/fe40e015d566f1504935cfd/2017/11/file_example_MP3_700KB.mp3",
    text: "Привет!", direction: 'incoming', status: 'read', timestamp: '1727027959'
  },
  {
    chatId: 3, type: "message.image", url: "https://nationaltoday.com/wp-content/uploads/2022/05/Sun-Day--1200x834.jpg", alt: "Example Image",
    direction: 'outgoing', timestamp: '1726743559',
  },
];
