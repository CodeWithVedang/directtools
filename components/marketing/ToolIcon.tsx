import { Camera, FileUp, MessageSquareText, MonitorUp, Video, type LucideIcon } from 'lucide-react';
import type { ToolIconName } from '@/lib/tools';

const ICONS: Record<ToolIconName, LucideIcon> = {
  file: FileUp,
  text: MessageSquareText,
  screen: MonitorUp,
  webcam: Camera,
  call: Video,
};

export function ToolIcon({ name, size = 22 }: { name: ToolIconName; size?: number }) {
  const Icon = ICONS[name];
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
      <Icon size={size} aria-hidden />
    </span>
  );
}
