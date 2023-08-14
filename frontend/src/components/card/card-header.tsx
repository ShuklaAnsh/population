export interface ICardHeaderProps extends React.PropsWithChildren {
  className?: string;
}

export const CardHeader = (props: ICardHeaderProps) => {
  return (
    <header
      className={`rounded-t-xl p-2 first:pb-2 prose-headings:m-0 prose-headings:text-white prose-a:no-underline ${props.className}`}
    >
      {props.children}
    </header>
  );
};
