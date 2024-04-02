import React from "react";
import { Journals } from "./journals";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex">
      <ResizablePanelGroup direction="horizontal" className="min-h-[200px] ">
        <ResizablePanel defaultSize={25}>
          <div>
            <Journals items={[]} />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <div className="p-4">{children}</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
