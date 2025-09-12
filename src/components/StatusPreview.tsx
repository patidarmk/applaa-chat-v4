import { Plus, Circle } from 'lucide-react';
import { currentUser, statuses } from '@/data/db';

export function StatusPreview({ onStatusClick }) {
  return (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="p-4">
        {/* My Status */}
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors mb-3">
          <div className="relative">
            <img src={currentUser.avatar} alt="My Status" className="w-14 h-14 rounded-full" />
            <div className="absolute bottom-0 right-0 bg-green-500 rounded-full p-1 border-2 border-white dark:border-gray-900">
              <Plus className="h-3 w-3 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-gray-800 dark:text-gray-200">My status</p>
            <p className="text-sm text-gray-500">Tap to add status update</p>
          </div>
        </div>
        
        {/* Recent Updates */}
        <div className="space-y-2">
          {statuses.map(status => (
            <div 
              key={status.id} 
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors"
              onClick={() => onStatusClick?.(status)}
            >
              <div className="p-0.5 border-2 border-green-500 rounded-full">
                <img src={status.user.avatar} alt={status.user.name} className="w-12 h-12 rounded-full" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800 dark:text-gray-200">{status.user.name}</p>
                <p className="text-sm text-gray-500">{status.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}