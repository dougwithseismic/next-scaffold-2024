import { FCProps } from "@/types";

export const Title: React.FC<FCProps> = ({ children }) => {
  return (
    <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
      {children}
    </h1>
  );
};
