type TypographyLeadProps = {
  children: React.ReactNode;
};

export function TypographyLead(props: TypographyLeadProps) {
  return <p className="text-xl text-muted-foreground">{props.children}</p>;
}
