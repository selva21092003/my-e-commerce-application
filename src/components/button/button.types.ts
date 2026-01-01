export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  varient: VarientType
};

export type VarientType='primary' | 'secondary';
