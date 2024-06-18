type TypographyLargeProps = {
  children: React.ReactNode;
};

export function TypographyLarge(props: TypographyLargeProps) {
  return <div className="text-lg font-semibold">{props.children}</div>;
}
