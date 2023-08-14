import { CardHeader } from "./card-header";
import { CardFooter } from "./card-footer";
import { CardContent } from "./card-content";

interface ICardProps extends React.PropsWithChildren {
  className?: string;
}

const CardComponent = (props: ICardProps) => {
  return (
    <article
      className={`outline-pd-green bg-pd-green prose prose-zinc m-2 min-h-fit min-w-[200px] max-w-fit rounded-lg outline outline-4 ${props.className}`}
    >
      {props.children}
    </article>
  );
};

export const Card = Object.assign(CardComponent, {
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
});
