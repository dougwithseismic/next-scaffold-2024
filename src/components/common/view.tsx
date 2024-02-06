import { Title } from "./title";
import { FCProps } from "@/types";

const View: React.FC<FCProps> = ({ children }) => {
    return (
        <div className="flex flex-col w-full gap-4">
            <Title>Activity Feed</Title>
            <div className="border border-foreground-500 rounded-md w-full h-full flex flex-col gap-4 p-4">
                {children}
            </div>
        </div>
    );
};

export default View;