import { Check, CheckCheck, Phone, PhoneIncoming, PhoneOutgoing, Video } from 'lucide-react';

export const users = [
  { id: 1, name: 'Alice', avatar: 'https://i.pravatar.cc/150?u=alice', online: true },
  { id: 2, name: 'Bob', avatar: 'https://i.pravatar.cc/150?u=bob', online: false, lastSeen: 'yesterday' },
  { id: 3, name: 'Charlie', avatar: 'https://i.pravatar.cc/150?u=charlie', online: true },
  { id: 4, name: 'Diana', avatar: 'https://i.pravatar.cc/150?u=diana', online: false, lastSeen: '2 hours ago' },
  { id: 5, name: 'Ethan', avatar: 'https://i.pravatar.cc/150?u=ethan', online: true },
  { id: 6, name: 'Fiona', avatar: 'https://i.pravatar.cc/150?u=fiona', online: true },
  { id: 7, name: 'George', avatar: 'https://i.pravatar.cc/150?u=george', online: false, lastSeen: '15 minutes ago' },
  { id: 8, name: 'Hannah', avatar: 'https://i.pravatar.cc/150?u=hannah', online: true },
];

export const currentUser = { id: 0, name: 'You', avatar: 'https://i.pravatar.cc/150?u=you' };

export const chats = [
  {
    id: 1,
    type: 'private',
    participants: [users[0], users[1]],
    messages: [
      { id: 1, senderId: 1, content: 'Hey Bob, how are you?', timestamp: '10:40 AM', status: 'read' },
      { id: 2, senderId: 2, content: 'Hi Alice! I am good, thanks. How about you?', timestamp: '10:41 AM' },
      { id: 3, senderId: 1, content: 'Doing great! Working on the new project.', timestamp: '10:41 AM', status: 'read' },
      { id: 4, senderId: 2, content: 'Awesome! Let me know if you need any help.', timestamp: '10:42 AM' },
      { id: 5, senderId: 1, content: 'Sure, will do. Thanks!', timestamp: '10:43 AM', status: 'delivered' },
    ],
    unreadCount: 0,
  },
  {
    id: 2,
    type: 'private',
    participants: [users[0], users[2]],
    messages: [
      { id: 1, senderId: 0, content: 'Hey Charlie, are we still on for lunch tomorrow?', timestamp: 'Yesterday', status: 'read' },
      { id: 2, senderId: 2, content: 'Yes, absolutely! Looking forward to it.', timestamp: 'Yesterday' },
    ],
    unreadCount: 0,
  },
  {
    id: 3,
    type: 'group',
    name: 'Project Team',
    participants: [users[0], users[3], users[4]],
    messages: [
      { id: 1, senderId: 3, content: 'Team, please check the latest design mockups.', timestamp: '1:15 PM' },
      { id: 2, senderId: 0, content: 'Looks great, Diana!', timestamp: '1:17 PM', status: 'sent' },
      { id: 3, senderId: 4, content: 'I have a few suggestions. I will send them over shortly.', timestamp: '1:20 PM' },
    ],
    unreadCount: 2,
  },
  {
    id: 4,
    type: 'private',
    participants: [users[0], users[5]],
    messages: [
      { id: 1, senderId: 5, content: 'Can you send me the report?', timestamp: '9:05 AM' },
    ],
    unreadCount: 1,
  },
  {
    id: 5,
    type: 'private',
    participants: [users[0], users[6]],
    messages: [
      { id: 1, senderId: 0, content: 'Happy Birthday, George!', timestamp: '12:00 AM', status: 'read' },
      { id: 2, senderId: 6, content: 'Thank you so much!', timestamp: '12:01 AM' },
    ],
    unreadCount: 0,
  },
];

export const statuses = [
  { id: 1, user: users[1], image: 'https://picsum.photos/id/237/1080/1920', timestamp: 'Today, 10:20 AM' },
  { id: 2, user: users[3], image: 'https://picsum.photos/id/102/1080/1920', timestamp: 'Today, 9:45 AM' },
  { id: 3, user: users[5], image: 'https://picsum.photos/id/103/1080/1920', timestamp: 'Yesterday, 8:15 PM' },
];

export const calls = [
  { id: 1, user: users[2], type: 'video', direction: 'outgoing', time: 'Today, 11:00 AM', icon: Video },
  { id: 2, user: users[4], type: 'voice', direction: 'incoming', time: 'Today, 9:30 AM', icon: PhoneIncoming },
  { id: 3, user: users[6], type: 'voice', direction: 'missed', time: 'Yesterday, 5:00 PM', icon: Phone, missed: true },
  { id: 4, user: users[1], type: 'video', direction: 'outgoing', time: 'Yesterday, 2:10 PM', icon: Video },
  { id: 5, user: users[5], type: 'voice', direction: 'outgoing', time: '2 days ago', icon: PhoneOutgoing },
];

export const getMessageStatusIcon = (status: 'sent' | 'delivered' | 'read') => {
  return status; // Return the status string instead of JSX
};