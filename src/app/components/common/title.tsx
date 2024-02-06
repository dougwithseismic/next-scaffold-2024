import { NodeProps } from '@/types';

export const Title: React.FC<NodeProps> = ({ children }) => {
  return (
    <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 py-4">
      {children}
    </h1>
  );
};
