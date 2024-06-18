type TypographyPProps = {
  children: React.ReactNode;
};

export function TypographyP(props: TypographyPProps) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">{props.children}</p>
  );
}
