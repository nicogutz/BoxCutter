/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "flowbite-react";
import { useState } from "react";

const script = `
import sys
from boxes import *

class Example(Boxes): # Adjust class name and call below
    """Example: Single Shelve to screw to the wall"""

    ui_group = "Shelves" # change for generators belonging in another group
    
    def __init__(self):
        Boxes.__init__(self)
        # arguments
        self.addSettingsArgs(edges.FingerJointSettings, finger=3.0) # arguments for finger joints
        self.buildArgParser(x=150, y=70, h=50)
        self.argparser.add_argument(
            "--hole_dist", action="store", type=float, default=10.,
            help="distance of the mounting holes to the boards")
        self.argparser.add_argument(
            "--hole_dia", action="store", type=float, default=3., # can't use "hole" as param name as it is a method
            help="diameter of the mounting holes")
        
    def render(self):
        x, y, h = self.x, self.y, self.h
        t = self.thickness
        
        # render-magic goes here
        
        hole = lambda: self.hole(self.hole_dist, self.hole_dist, d=self.hole_dia) # use lambda as a callback
        # holes are placed relative to the inner rectangle of the back wall. The top part with the finger holes and 
        # the finges at the sides do not count.
        # Callbacks start in the bottom left corner. Place holes in the third and forth corners only.       
        self.rectangularWall(x, h, "eFhF", move="up", callback=[None, None, hole, hole]) # back board

        self.rectangularWall(x, y, "ehfh", move="up") # top board
        self.rectangularTriangle(y, h, "ff", num=2) # braces        
        

b = Example()
b.parseArgs(['--reference=0', '--debug=0'])
b.open()
b.render()
data = b.close()
print("Hello")
with open("img.svg", "wb") as f:
  f.write(data.getvalue())
`;

type BoxConfiguratorProps = {
  runPython: (code: string, preamble?: string) => Promise<void>;
  isReady: boolean;
  readFile: (name: string) => Promise<void> | undefined;
};

export default function BoxConfigurator({
  runPython,
  isReady,
  readFile,
}: BoxConfiguratorProps) {
  const [result, setResult] = useState<string>();

  const handleRender = () => {
    async function _fn() {
      console.log("Hello 2");
      await runPython(script);
      const file = await readFile("img.svg");
      setResult(file as unknown as string);
      console.log(file as unknown as string);
    }
    if (isReady) {
      _fn();
    }
  };

  return (
    <div className="mb-10 flex h-screen items-center">
      <div className="flex w-screen flex-col items-center">
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(result)}`}
          alt=""
        />
        <Button onClick={handleRender}></Button>
      </div>
    </div>
  );
}
