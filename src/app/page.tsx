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

import CircleFlagsCl from "@/icons/CircleFlagsCl";
import GameIconsSoccerBall from "@/icons/GameIconsSoccerBall";
import HeroiconsSolidHeart from "@/icons/HeroiconsSolidHeart";

export default function Home() {
  return (
    <Card className="card-style" style={{ width: "75%", height: "95%", minWidth: "350px", maxWidth: "800px", minHeight: "860px" }}>
      <CardHeader style={{ height: "80px" }}>
        <CardTitle>Duduble&apos;s Portfolio</CardTitle>
        <CardDescription>Self-Taught Developer / Engineer</CardDescription>
      </CardHeader>

      <CardContent>

        <h3 style={{ margin: "10px 0px", color: "white", backgroundColor: "blueviolet" }}>Languages I regularly use.</h3>
        <Card className="card-style" style={{ backgroundColor: "#1a1a1a", height: "48px", display: "flex" }}>
          <div style={{ height: "48px", margin: "auto", display: "flex" }}>
            <CibLua className="defsvg" style={{ width: "32px", height: "32px", background: "none", margin: "6px 10px" }} />
            <CibPython className="defsvg" style={{ width: "32px", height: "32px", background: "none", margin: "6px 10px" }} />
            <CibCplusplus className="defsvg" style={{ width: "32px", height: "32px", background: "none", margin: "6px 10px" }} />
            <CibTypescript className="defsvg" style={{ width: "32px", height: "32px", background: "none", margin: "6px 10px" }} />
          </div>
        </Card>

        <h3 style={{ margin: "10px 0px", color: "white", backgroundColor: "brown" }}>Software I use.</h3>
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
            <SvgCButton url="https://github.com/dudubles" svgelement=<CibGithub className="defsvg" /> className="svg-btn" style={{ width: "32px", height: "32px", background: "none", margin: "6px 10px" }}>
            </SvgCButton>

            <SvgCButton url="https://gitlab.com/dudubles" svgelement=<CibGitlab className="defsvg" /> className="svg-btn" style={{ width: "32px", height: "32px", background: "none", margin: "6px 10px" }}>
            </SvgCButton>

            <HoverCard openDelay={100} closeDelay={0}>
              <HoverCardTrigger style={{ width: "32px", height: "32px", margin: "6px 10px" }} ><CibDiscord className="defsvg" /></HoverCardTrigger>
              <HoverCardContent className="card-style" style={{ width: "90px", height: "40px" }}>
                <p style={{ color: "#ca58ed", margin: "-8px -7px" }}>dudubles</p>
              </HoverCardContent>
            </HoverCard>

          </div>
        </Card>

        <Tabs defaultValue="aboutme" style={{ height: "450px", marginTop: "10px" }}>
          <TabsList style={{ backgroundColor: "#1a1a1a", color: "white" }}>
            <TabsTrigger value="aboutme">About Me</TabsTrigger>
            <TabsTrigger value="contact">Contact Info</TabsTrigger>
          </TabsList>
          <TabsContent value="aboutme">
            <Card className="card-style" style={{ backgroundColor: "#1a1a1a", height: "435px", display: "block", margin: "auto" }}>
              <h1 style={{ width: "525px", margin: "0px auto", marginTop: "45px" }}>My name is Tiago. I was born in Chile and have lived there all my life, my journey to programming started in the year 2020 where the first language I learned was lua since then I&apos;ve been learning all sorts of technologies and I hope to keep learning more in the future.</h1>
              <h1 style={{ width: "525px", margin: "25px auto" }}>Even though I&apos;m not a web developer, (and more likely engineer), I&apos;m still fascinated by the web development possibilities, good example of this is the website you are looking here which was totally designed and programmed by me.
                <div style={{ height: "56px", marginTop: "45px", display: "flex" }}>
                  <CircleFlagsCl style={{ width: "56px" }} className="defsvg"></CircleFlagsCl>
                  <GameIconsSoccerBall style={{ width: "56px" }} className="defsvg"></GameIconsSoccerBall>
                  <HeroiconsSolidHeart style={{ width: "56px" }} className="defsvg"></HeroiconsSolidHeart>
                </div>
              </h1>
            </Card>
          </TabsContent>
          <TabsContent value="contact">
            <Card className="card-style" style={{ backgroundColor: "#1a1a1a", height: "435px", display: "block" }}>
              <h1 style={{ fontSize: "24px", margin: "0px 20px", marginTop: "10px", textAlign: "center", color: "blanchedalmond" }}>Personal Email</h1>
              <h2 style={{ textAlign: "center", fontSize: "24px", color: "crimson" }}>dev.dudubles@gmail.com</h2>
            </Card>
          </TabsContent>
        </Tabs>

      </CardContent>

    </Card >
  );
}
