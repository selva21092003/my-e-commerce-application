import type { ButtonProps, VarientType } from "./button.types";

export const Button = ({ children, varient, ...props }: ButtonProps) => {
  const varientClassNames: Record<VarientType, string> = {
    primary: "bg-green-600 text-white hover:bg-green-500 font-semibold",
    secondary: "bg-gray-300 text-black",
    outline: "bg-transparent text-green-600 border border-green-600 hover:bg-green-600 hover:text-white font-semibold"
  };

  const buttonBaseStyles: string = "w-full rounded flex justify-center items-center cursor-pointer px-7 py-1.5";

  return (
    <button
      className={`${buttonBaseStyles} ${varientClassNames[varient]}`}
      {...props}
    >
      {children}
    </button>
  );
};
