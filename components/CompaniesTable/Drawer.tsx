import React, { ComponentProps } from "react";
import Image from "next/image";
import MUIDrawer from "@mui/material/Drawer";
import Chip from "@mui/material/Chip";
import MUILink from "@mui/material/Link";

import { Link, EmailIcon, CrowdIcon } from "components";

interface Props extends ComponentProps<typeof MUIDrawer> {
  // TODO: no, just no!
  activeCompany: any;
}

const Drawer = ({ activeCompany, open, onClose }: Props) => {
  return (
    <MUIDrawer anchor="right" open={open} onClose={onClose}>
      {activeCompany !== null && (
        <div className="p-6 w-[400px] space-y-4">
          <div>
            <div className="flex justify-between items-center ">
              <h2 className="text-2xl font-semibold text-gray-800">
                {activeCompany["Company Name"]}
              </h2>
              <Link href={activeCompany["Website"]} />
            </div>
            <div className="mb-2 text-xs text-gray-500">
              Founded: {activeCompany["Founded Date"]}
            </div>
            <div className="text-sm text-gray-600 ">
              {activeCompany["Description"].substr(0, 150)}...{"  "}
              <MUILink href="#">Read more</MUILink>
            </div>
          </div>
          <div className="grid grid-cols-6">
            <div className="col-span-1">
              <EmailIcon />
            </div>
            <div className="col-span-5">{activeCompany["Contact Email"]}</div>
            <div className="col-span-1">
              <CrowdIcon />
            </div>
            <div className="col-span-5">
              {activeCompany["Employee Count"]} employees
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">
              Category Groups
            </h3>
            <div className="flex flex-wrap items-center">
              {/* TODO: create Types for everything */}
              {(activeCompany["Category Groups"] as string)
                .trim()
                .split(",")
                .map((category: string) => (
                  <div key={category} className="my-1 mr-1">
                    <Chip label={category} variant="outlined" />
                  </div>
                ))}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <a
              href={activeCompany["iTunes - URL"]}
              target="_blank"
              className="w-20"
              rel="noreferrer"
            >
              <Image
                src="/apple_store.png"
                width={224.5}
                height={77.6}
                alt="Apple store logo"
              />
            </a>
            <a
              href={activeCompany["Google Play - URL"]}
              target="_blank"
              className="w-20"
              rel="noreferrer"
            >
              <Image
                src="/google_play.png"
                width={224.5}
                height={77.6}
                alt="Google Play store logo"
              />
            </a>
          </div>
        </div>
      )}
    </MUIDrawer>
  );
};

export default Drawer;
