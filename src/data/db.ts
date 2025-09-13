import { Check, CheckCheck, Phone, PhoneIncoming, PhoneOutgoing, Video } from 'lucide-react';

export const users = [
  { id: 1, name: 'Sarah Johnson', avatar: 'https://i.pravatar.cc/150?u=sarah', online: true },
  { id: 2, name: 'Michael Chen', avatar: 'https://i.pravatar.cc/150?u=michael', online: false, lastSeen: 'yesterday' },
  { id: 3, name: 'Emma Rodriguez', avatar: 'https://i.pravatar.cc/150?u=emma', online: true },
  { id: 4, name: 'David Kim', avatar: 'https://i.pravatar.cc/150?u=david', online: false, lastSeen: '2 hours ago' },
  { id: 5, name: 'Jessica Williams', avatar: 'https://i.pravatar.cc/150?u=jessica', online: true },
  { id: 6, name: 'Robert Taylor', avatar: 'https://i.pravatar.cc/150?u=robert', online: true },
  { id: 7, name: 'Maria Garcia', avatar: 'https://i.pravatar.cc/150?u=maria', online: false, lastSeen: '15 minutes ago' },
  { id: 8, name: 'James Wilson', avatar: 'https://i.pravatar.cc/150?u=james', online: true },
  { id: 9, name: 'Lisa Anderson', avatar: 'https://i.pravatar.cc/150?u=lisa', online: true },
  { id: 10, name: 'Christopher Brown', avatar: 'https://i.pravatar.cc/150?u=christopher', online: false, lastSeen: '1 hour ago' },
  { id: 11, name: 'Amanda Davis', avatar: 'https://i.pravatar.cc/150?u=amanda', online: true },
  { id: 12, name: 'Daniel Martinez', avatar: 'https://i.pravatar.cc/150?u=daniel', online: false, lastSeen: '3 hours ago' },
];

export const currentUser = { id: 0, name: 'You', avatar: 'https://i.pravatar.cc/150?u=you' };

export const chats = [
  {
    id: 1,
    type: 'private',
    participants: [currentUser, users[0]], // Sarah Johnson
    messages: [
      { id: 1, senderId: 1, content: 'Hey! How are you doing today?', timestamp: '10:40 AM', status: 'read' },
      { id: 2, senderId: 0, content: 'Hi Sarah! I am good, thanks. How about you?', timestamp: '10:41 AM' },
      { id: 3, senderId: 1, content: 'Doing great! Working on the new marketing campaign.', timestamp: '10:41 AM', status: 'read' },
      { id: 4, senderId: 0, content: 'That sounds exciting! Let me know if you need any help with the design.', timestamp: '10:42 AM' },
      { id: 5, senderId: 1, content: 'Actually, I could use your input on the color scheme. Can we discuss it later?', timestamp: '10:43 AM', status: 'delivered' },
    ],
    unreadCount: 0,
  },
  {
    id: 2,
    type: 'private',
    participants: [currentUser, users[1]], // Michael Chen
    messages: [
      { id: 1, senderId: 0, content: 'Hey Michael, are we still on for lunch tomorrow?', timestamp: 'Yesterday', status: 'read' },
      { id: 2, senderId: 2, content: 'Yes, absolutely! Looking forward to trying that new sushi place.', timestamp: 'Yesterday' },
      { id: 3, senderId: 0, content: 'Perfect! I will book a table for 12:30 PM.', timestamp: 'Yesterday', status: 'read' },
    ],
    unreadCount: 0,
  },
  {
    id: 3,
    type: 'group',
    name: 'Project Alpha Team',
    participants: [currentUser, users[2], users[3], users[4]], // Emma, David, Jessica
    messages: [
      { id: 1, senderId: 3, content: 'Team, please check the latest design mockups I shared in the drive.', timestamp: '1:15 PM' },
      { id: 2, senderId: 0, content: 'Looks great, Emma! I really like the new color palette.', timestamp: '1:17 PM', status: 'sent' },
      { id: 3, senderId: 4, content: 'I have a few suggestions for the mobile layout. I will send them over shortly.', timestamp: '1:20 PM' },
      { id: 4, senderId: 5, content: 'Thanks everyone! Let us schedule a review meeting for tomorrow.', timestamp: '1:25 PM' },
    ],
    unreadCount: 2,
  },
  {
    id: 4,
    type: 'private',
    participants: [currentUser, users[5]], // Robert Taylor
    messages: [
      { id: 1, senderId: 6, content: 'Can you send me the quarterly report when you get a chance?', timestamp: '9:05 AM' },
      { id: 2, senderId: 0, content: 'Sure Robert! I will send it to you within the next hour.', timestamp: '9:10 AM', status: 'delivered' },
    ],
    unreadCount: 1,
  },
  {
    id: 5,
    type: 'private',
    participants: [currentUser, users[6]], // Maria Garcia
    messages: [
      { id: 1, senderId: 0, content: 'Happy Birthday, Maria! Hope you have an amazing day! 🎉', timestamp: '12:00 AM', status: 'read' },
      { id: 2, senderId: 7, content: 'Thank you so much! Your message made my day even more special!', timestamp: '12:01 AM' },
      { id: 3, senderId: 7, content: 'Are you coming to the celebration dinner tonight?', timestamp: '8:30 AM' },
    ],
    unreadCount: 0,
  },
  {
    id: 6,
    type: 'private',
    participants: [currentUser, users[7]], // James Wilson
    messages: [
      { id: 1, senderId: 8, content: 'Did you finish the code review for the authentication module?', timestamp: '2:30 PM' },
      { id: 2, senderId: 0, content: 'Almost done! I will push the changes by end of day.', timestamp: '2:35 PM', status: 'sent' },
    ],
    unreadCount: 0,
  },
  {
    id: 7,
    type: 'group',
    name: 'Weekend Plans',
    participants: [currentUser, users[8], users[9], users[10]], // Lisa, Christopher, Amanda
    messages: [
      { id: 1, senderId: 9, content: 'Hey everyone! Who is up for hiking this weekend?', timestamp: '11:20 AM' },
      { id: 2, senderId: 10, content: 'Count me in! I have been wanting to explore the new trail.', timestamp: '11:25 AM' },
      { id: 3, senderId: 11, content: 'Sounds fun! What time are we thinking?', timestamp: '11:30 AM' },
      { id: 4, senderId: 0, content: 'I am in! How about we meet at 8 AM at the trailhead?', timestamp: '11:35 AM', status: 'sent' },
    ],
    unreadCount: 3,
  },
  {
    id: 8,
    type: 'private',
    participants: [currentUser, users[11]], // Daniel Martinez
    messages: [
      { id: 1, senderId: 12, content: 'The client loved the presentation! Great job yesterday!', timestamp: '9:45 AM' },
      { id: 2, senderId: 0, content: 'That is wonderful news! Thanks for the update.', timestamp: '9:50 AM', status: 'read' },
    ],
    unreadCount: 0,
  },
];

export const statuses = [
  { id: 1, user: users[1], image: 'https://picsum.photos/id/237/1080/1920', timestamp: 'Today, 10:20 AM' },
  { id: 2, user: users[3], image: 'https://picsum.photos/id/102/1080/1920', timestamp: 'Today, 9:45 AM' },
  { id: 3, user: users[5], image: 'https://picsum.photos/id/103/1080/1920', timestamp: 'Yesterday, 8:15 PM' },
  { id: 4, user: users[7], image: 'https://picsum.photos/id/104/1080/1920', timestamp: 'Yesterday, 3:30 PM' },
];

export const calls = [
  { id: 1, user: users[2], type: 'video', direction: 'outgoing', time: 'Today, 11:00 AM', icon: Video },
  { id: 2, user: users[4], type: 'voice', direction: 'incoming', time: 'Today, 9:30 AM', icon: PhoneIncoming },
  { id: 3, user: users[6], type: 'voice', direction: 'missed', time: 'Yesterday, 5:00 PM', icon: Phone, missed: true },
  { id: 4, user: users[1], type: 'video', direction: 'outgoing', time: 'Yesterday, 2:10 PM', icon: Video },
  { id: 5, user: users[8], type: 'voice', direction: 'outgoing', time: '2 days ago', icon: PhoneOutgoing },
  { id: 6, user: users[10], type: 'video', direction: 'incoming', time: '3 days ago', icon: Video },
];

export const getMessageStatusIcon = (status: 'sent' | 'delivered' | 'read') => {
  return status; // Return the status string instead of JSX
};