export interface IButtonProps extends React.PropsWithChildren {
  onClick?: () => void;
  className?: string;
}

export const Button = (props: IButtonProps) => (
  <a
    onClick={props.onClick}
    className={`bg-pd-amber w-fit rounded-md p-2 text-zinc-600 shadow-sm hover:cursor-pointer hover:bg-amber-500 hover:shadow-lg ${props.className}`}
  >
    {props.children}
  </a>
);
