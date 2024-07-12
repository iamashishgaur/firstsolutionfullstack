"use client";
import React, { useState } from "react";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  ChevronRight,
  File,
  Inbox,
  MessagesSquare,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {};

import { Nav } from "@/components/ui/nav";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Button } from "@/components/ui/button";
export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  function toggelbar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <TooltipProvider>
      <div className="  mt-5">
        <div className="absolute left-[150px] top-7">
          <Button onClick={toggelbar}>
            <ChevronRight />
          </Button>
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Dashboard</AccordionTrigger>
            <AccordionContent>
              <Nav
                isCollapsed={isCollapsed}
                links={[
                  {
                    title: "Dashboard",
                    label: "972",
                    href: "/dashboard",
                    icon: Users2,
                    variant: "ghost",
                  },
                  {
                    title: "Employee",
                    label: "342",
                    href: "/dashboard/employee",
                    icon: AlertCircle,
                    variant: "ghost",
                  },
                  {
                    title: "Jobs",
                    label: "128",
                    icon: MessagesSquare,
                    href: "/dashboard/jobs",
                    variant: "ghost",
                  },
                  {
                    title: "Recrutar",
                    label: "8",
                    icon: ShoppingCart,
                    href: "/dashboard/recrutar",
                    variant: "ghost",
                  },
                  {
                    title: "Promotions",
                    label: "21",
                    icon: Archive,
                    href: "/dahsboard/recrutar",

                    variant: "ghost",
                  },
                ]}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div></div>
      </div>
    </TooltipProvider>
  );
}
