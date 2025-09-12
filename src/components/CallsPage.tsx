import { calls } from '@/data/db';
import { cn } from '@/lib/utils';
import { Phone, PhoneIncoming, PhoneOutgoing, Video, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export function CallsPage() {
  const getCallIcon = (call) => {
    if (call.missed) {
      return <Phone className="h-5 w-5 text-red-500" />;
    }
    return call.direction === 'outgoing' ? 
      <ArrowUpRight className="h-5 w-5 text-green-500" /> : 
      <ArrowDownLeft className="h-5 w-5 text-blue-500" />;
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-900 h-full">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Calls</h2>
      <div className="space-y-2">
        {calls.map(call => (
          <div key={call.id} className="flex items-center gap-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg cursor-pointer transition-colors">
            <img src={call.user.avatar} alt={call.user.name} className="w-12 h-12 rounded-full" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">{call.user.name}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                {getCallIcon(call)}
                <span>{call.direction === 'outgoing' ? 'Outgoing' : call.missed ? 'Missed' : 'Incoming'} {call.type} call</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500 dark:text-gray-400">{call.time}</p>
              {call.type === 'video' ? (
                <Video className="h-5 w-5 text-gray-400 ml-auto mt-1" />
              ) : (
                <Phone className="h-5 w-5 text-gray-400 ml-auto mt-1" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}