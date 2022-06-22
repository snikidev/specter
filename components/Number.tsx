import React from "react";

interface Props {
  children: number;
  currency?: string;
  locale?: string;
  style?: "unit" | "currency";
}

const Number = ({
  children,
  currency = "USD",
  style = "currency",
  locale = "en-US",
}: Props) => {
  return (
    <div>
      {new Intl.NumberFormat(locale, {
        style,
        currency,
      }).format(children)}
    </div>
  );
};

export default Number;
