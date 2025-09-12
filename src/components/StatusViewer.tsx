import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface StatusViewerProps {
  status: any;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

export function StatusViewer({ status, onClose, onNext, onPrevious }: StatusViewerProps) {
  if (!status) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      <div className="flex items-center justify-between p-4 bg-black/50">
        <div className="flex items-center gap-3">
          <img src={status.user.avatar} alt={status.user.name} className="w-10 h-10 rounded-full" />
          <span className="text-white font-semibold">{status.user.name}</span>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-white">
          <X className="h-6 w-6" />
        </Button>
      </div>
      
      <div className="flex-1 flex items-center justify-center">
        <img 
          src={status.image} 
          alt="Status" 
          className="max-w-full max-h-full object-contain"
        />
      </div>
      
      <div className="flex items-center justify-between p-4 bg-black/50">
        <Button variant="ghost" size="icon" onClick={onPrevious} className="text-white">
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <span className="text-white text-sm">{status.timestamp}</span>
        <Button variant="ghost" size="icon" onClick={onNext} className="text-white">
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}