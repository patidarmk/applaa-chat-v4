import { statuses, currentUser } from '@/data/db';

export function StatusPage() {
  return (
    <div className="p-4 bg-white dark:bg-black h-full">
      <h2 className="text-xl font-bold mb-4">Status</h2>
      <div className="flex items-center gap-4 p-3 border-b border-gray-200 dark:border-gray-700">
        <div className="relative">
          <img src={currentUser.avatar} alt="My Status" className="w-14 h-14 rounded-full" />
          <div className="absolute bottom-0 right-0 bg-green-500 rounded-full p-1 border-2 border-white dark:border-black">
            <p className="text-white text-xs">+</p>
          </div>
        </div>
        <div>
          <p className="font-semibold">My status</p>
          <p className="text-sm text-gray-500">Tap to add status update</p>
        </div>
      </div>
      <p className="text-sm font-semibold text-gray-500 my-2 p-2">Recent updates</p>
      {statuses.map(status => (
        <div key={status.id} className="flex items-center gap-4 p-3">
          <div className="p-0.5 border-2 border-green-500 rounded-full">
            <img src={status.user.avatar} alt={status.user.name} className="w-14 h-14 rounded-full" />
          </div>
          <div>
            <p className="font-semibold">{status.user.name}</p>
            <p className="text-sm text-gray-500">{status.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  );
}