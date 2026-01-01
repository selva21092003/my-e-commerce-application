import type { IconButtonProps } from "./icon-button.types";

export const IconButton = ({ children,...props }: IconButtonProps) => {
  return (
    <span {...props }className="cursor-pointer transition hover:scale-110">
      {children}
    </span>
  );
};
