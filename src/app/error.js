"use client";

export default function RootErrorPage(props) {
  const { error } = props;

  return (
    <div>
      Oops something went wrong
      <p>{error.message}</p>
    </div>
  );
}
