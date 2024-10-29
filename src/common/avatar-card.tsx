import { cn } from 'utils';
import { Title, Text } from 'rizzui';
import { Avatar, type AvatarProps } from 'rizzui';

interface AvatarCardProps {
  src: string;
  name: string;
  className?: string;
  description?: string;
  path?: string;
  avatarProps?: AvatarProps;
}

export default function AvatarCard({
  src,
  name,
  className,
  description,
  path = 'subscriber',
  avatarProps,
}: AvatarCardProps) {
  return (
    <figure className={cn('flex items-center gap-3', className)}>
      <Avatar name={name} src={`http://localhost:5000/${path}/${src}`} {...avatarProps} />
      <figcaption className="grid gap-0.5">
        <Text className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">
          {name}
        </Text>
        {/* {description && <Text className="text-[13px] text-gray-500">{description}</Text>} */}
      </figcaption>
    </figure>
  );
}
