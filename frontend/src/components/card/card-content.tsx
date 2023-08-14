export interface ICardContentProps extends React.PropsWithChildren {
  className?: string;
}

export const CardContent = (props: ICardContentProps) => {
  return (
    <section
      className={`flex flex-col rounded-lg bg-white px-2 py-0 first:pt-2 last:pb-2 only:py-2 ${props.className}`}
    >
      {props.children}
    </section>
  );
};
