import React from "react";
import { ExternalIcon } from "components";

interface Props {
  href: string;
}

const Link = ({ href }: Props) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <ExternalIcon />
    </a>
  );
};

export default Link;
