import Image from "next/image";
import "./main.css"

import SvgCButton from "@/components/svgcbutton";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import CibLua from "@/icons/CibLua";
import CibPython from "@/icons/CibPython";
import CibCplusplus from "@/icons/CibCplusplus";
import CibTypescript from "@/icons/CibTypescript";

import CibWindows from "@/icons/CibWindows";
import CibVim from "@/icons/CibVim";
import CibGit from "@/icons/CibGit";
import CibNotion from "@/icons/CibNotion";
import CibMozillaFirefox from "@/icons/CibMozillaFirefox";

import CibGithub from "@/icons/CibGithub";
import CibGitlab from "@/icons/CibGitlab";
import CibDiscord from "@/icons/CibDiscord";

export default function Home() {
  return (
    <Card className="card-style" style={{ width: "75%", minWidth: "350px", maxWidth: "615px", minHeight: "825px", maxHeight: "825px" }}>
      <CardHeader style={{ height: "80px" }}>
        <CardTitle>Duduble&apos;s Portfolio</CardTitle>
        <CardDescription>Self-Taught Developer / Engineer</CardDescription>
      </CardHeader>

      <CardContent>

        <h3 style={{ margin: "10px 0px", color: "white", backgroundColor: "blueviolet" }}>Skills</h3>
        <Card className="card-style" style={{ backgroundColor: "#1a1a1a", height: "48px", display: "flex" }}>
          <div style={{ height: "48px", margin: "auto", display: "flex" }}>
            <CibLua className="defsvg" style={{ width: "32px", height: "32px", background: "none", margin: "6px 10px" }} />
            <CibPython className="defsvg" style={{ width: "32px", height: "32px", background: "none", margin: "6px 10px" }} />
            <CibCplusplus className="defsvg" style={{ width: "32px", height: "32px", background: "none", margin: "6px 10px" }} />
            <CibTypescript className="defsvg" style={{ width: "32px", height: "32px", background: "none", margin: "6px 10px" }} />
          </div>
        </Card>

        <h3 style={{ margin: "10px 0px", color: "white", backgroundColor: "brown" }}>Software</h3>
        <Card className="card-style" style={{ backgroundColor: "#1a1a1a", height: "48px", display: "flex" }}>
          <div style={{ height: "48px", margin: "auto", display: "flex" }}>

            <HoverCard openDelay={100} closeDelay={0}>
              <HoverCardTrigger style={{ width: "32px", height: "32px", margin: "6px 10px" }} ><CibWindows className="defsvg" /></HoverCardTrigger>
              <HoverCardContent className="card-style" style={{ width: "200px", height: "85px" }}>
                <p>Windows 11</p>
                <p style={{ color: "#ffc78c" }}>Operative System</p>
              </HoverCardContent>
            </HoverCard>

            <HoverCard openDelay={100} closeDelay={0}>
              <HoverCardTrigger style={{ width: "32px", height: "32px", margin: "6px 10px" }} ><CibVim className="defsvg" /></HoverCardTrigger>
              <HoverCardContent className="card-style" style={{ width: "200px", height: "85px" }}>
                <p>Neovim - Lazyvim</p>
                <p style={{ color: "#ffc78c" }}>Code Editor</p>
              </HoverCardContent>
            </HoverCard>

            <HoverCard openDelay={100} closeDelay={0}>
              <HoverCardTrigger style={{ width: "32px", height: "32px", margin: "6px 10px" }} ><CibGit className="defsvg" /></HoverCardTrigger>
              <HoverCardContent className="card-style" style={{ width: "200px", height: "85px" }}>
                <p>Git</p>
                <p style={{ color: "#ffc78c" }}>Organization</p>
              </HoverCardContent>
            </HoverCard>

            <HoverCard openDelay={100} closeDelay={0}>
              <HoverCardTrigger style={{ width: "32px", height: "32px", margin: "6px 10px" }} ><CibNotion className="defsvg" /></HoverCardTrigger>
              <HoverCardContent className="card-style" style={{ width: "200px", height: "85px" }}>
                <p>Notion</p>
                <p style={{ color: "#ffc78c" }}>Organization</p>
              </HoverCardContent>
            </HoverCard>

            <HoverCard openDelay={100} closeDelay={0}>
              <HoverCardTrigger style={{ width: "32px", height: "32px", margin: "6px 10px" }} ><CibMozillaFirefox className="defsvg" /></HoverCardTrigger>
              <HoverCardContent className="card-style" style={{ width: "200px", height: "85px" }}>
                <p>Mozilla Firefox</p>
                <p style={{ color: "#ffc78c" }}>Web Browser</p>

              </HoverCardContent>
            </HoverCard>
          </div>
        </Card>

        <h3 style={{ margin: "10px 0px", color: "white", backgroundColor: "darkcyan" }}>Social Media</h3>
        <Card className="card-style" style={{ backgroundColor: "#1a1a1a", height: "48px", display: "flex" }}>
          <div style={{ height: "48px", margin: "auto", display: "flex" }}>

            <SvgCButton url="https://github.com/dudubles" svgelement=< CibGithub className="defsvg" /> style={{ width: "32px", height: "32px", background: "none", margin: "6px 10px" }} />

            <SvgCButton url="https://gitlab.com/dudubles" svgelement=<CibGitlab className="defsvg" /> style={{ width: "32px", height: "32px", background: "none", margin: "6px 10px" }} />

            <HoverCard openDelay={100} closeDelay={0}>
              <HoverCardTrigger style={{ width: "32px", height: "32px", margin: "6px 10px" }} ><CibDiscord className="defsvg" /></HoverCardTrigger>
              <HoverCardContent className="card-style" style={{ width: "90px", height: "40px" }}>
                <p style={{ color: "#ca58ed", margin: "-8px -7px" }}>dudubles</p>
              </HoverCardContent>
            </HoverCard>

          </div>
        </Card>

        <Tabs defaultValue="projects" style={{ height: "450px", marginTop: "10px" }}>
          <TabsList style={{ backgroundColor: "#1a1a1a", color: "white" }}>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="contact">Contact Form</TabsTrigger>
          </TabsList>

          <TabsContent value="projects">
            <Card className="card-style" style={{ backgroundColor: "#1a1a1a", height: "390px", display: "block", margin: "auto" }}>

            </Card>
          </TabsContent>

          <TabsContent value="aboutme">
            <Card className="card-style" style={{ backgroundColor: "#1a1a1a", height: "390px", display: "block", margin: "auto" }}>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <Card className="card-style" style={{ backgroundColor: "#1a1a1a", height: "390px", display: "block" }}>

            </Card>

          </TabsContent>
        </Tabs>

      </CardContent>

    </Card >
  );
}
