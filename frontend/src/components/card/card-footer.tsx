export interface ICardFooterProps extends React.PropsWithChildren {
  className?: string;
}

export const CardFooter = (props: ICardFooterProps) => {
  return (
    <footer className={`rounded-b-xl p-4 last:pt-2 ${props.className}`}>
      {props.children}
    </footer>
  );
};
