Today I am going to talk for 15min. 

Cursor Meetup Tokyo
AIコードエディタCursorのユーザー・ミートアップ

Over 5000 Japanese (mostly engineers) people attending.
I want my talk to be written in native Japanese, mostly for Japanese developers, but also understandable for designers, CEOs, etc.

5月から世界各地で Cursor Meetup が開催されています。日本でも世界に負けず、Cursor ユーザが集まってお祭りをしましょう！今回は、企業単位で Cursor を導入したユーザ事例のLTとユーザによるLT、Cursorチームからの日本ユーザへの動画メッセージ紹介後、ユーザ同士の交流会を予定しています。

THe title of my talk:
「大手企業のAIツール導入の壁を越えて：サイバーエージェントのCursor活用戦略」 by サイバーエージェント Gunther Brunner

Some stuff I wanna talk about:
✅ 社内導入で直面した壁と解決策 
✅ MCP活用の実例 
✅ Vibe codingで生産性が爆上がりした話 
✅ 今すぐ使える実践Tips


----


So in short, this is the whole concept of what I wanna talk.

# First half: CyberAgent
How to introduce Cursor to a big company like CyberAgent. 連結従業員数 1万人以上。
（エンジニア3000人近く）

So first need to explain that CyberAgent is not a normal company.
Its vision is: 「自由と自己責任」も当社の大切にしている考え方の1つですが、自分のアイデアを自分で実現してもらうことで、モチベーションとコミットを引き出しています。
極端な言い方をすれば、勝手に学び、勝手に挑戦し、勝手に失敗から次へと生かすという、ループが自然に回っていることが理想。そうなれば、人も会社もどんどん成長していきます。

This means there are too many child companies, groups, teams, etc.
All doing completely different stuff.

So it means its not a top-down company, but a bottom-up company.
No technology or tool usually gets decided like fast/easy.
Every tech/tool that gets adopted is always at some team, then it starts to spread.

So everything has to be done ina viral way.
That's why when you want other teams to start using the tool you find nice, you need to start doing campaign,
like evangelism inside the company.
BUT, there is no "inside the company" for CyberAgent Group. Because it has hundreds of child companies.
WIth different policies, Slack workspaces, etc.
So, the only actual best way to do something is to make public talks.

In the past I pushed hard for the following tools (not effort alone):
SVN -> GitHub (DONE)
HipChat -> Slack (DONE, took 1 year)
Confluence -> Notion (done)
JIRA -> Linear  (Not yet there)
IDE -> Cursor (Here now)
All -> Cursor (Here now)

Yes there is lots of tools, and favorite change over the years.
But some tech are clearly superior.
How do ”I” choose tech? Always look at the TTM (Time to Market) and Trend.
So I need to bet on Cursor.
You can see Anthropic has cut direct API access to Windsurf just after it got acquired by OpenAI.
In all the anquettes I did, the most trending was Cursor.
And, when there is a new model released, or it comes to new features, improvements, simply Cursor has an edge.
Every IDE has their own edge.
So, at least for the category of IDE/Text editor, I bet on Cursor.
This might not be true when CLI stuff appears like Claude Code, etc. But for IDE/Text? Cursor for now.

So, I started pushing Cursor internally: I created the Cursor Slack Channel for CyberAgent.
I started appearing in events. BUt still almost no one using Cursor... Even trough I've been using Cursor since 2 years ago...
Internal events, still nothing...

So I decided to create a big event, it was AI Code Agents祭り! This year 2月.
I called MG-DX 子会社の社長、堂前さん
Where he even is pushing for everyone to use Cursor!
But CA doesnt force top down, and each one choice and timing is respected, 尊重される.


This is where I asked きのぴーさん to talk in the event! Thank for having me today.
So yeah it was a success: over 2万人 watched it on Youtube, making it the most viewed video in the history of CyberAgent developer Youtube account.

And now, yes, lots of teams using it around CyberAgent.
This is the Viral thing that I needed in order to make people interested, now getting so many questions on when its gonna be introduced officially to all teams.

And, we are in talks already to introduce Cursor to the whole company currently, its already decided, ironing the details for now.

In Cursor, all models can be used without needing to register or pay for separate services. So handy.


So I have big future plans/object for CA.
One: @02-cursor-for-all.md Introduce Cursor for all, not only developers.
Two: @01-mcp-universe.md Make CyberAgent be one the companies with most MCP servers around. 

Some MCP servers we have around:

1. Design System Spindle MCP server
using the new Figma Dev mode MVP too.
生産性10倍.

2. RISKEN MCP
リスク可視化によるインシデント防止の効率化

3. CyberAgent用語辞書 MCP

4. CTO統括室Developer Productivity室
OSS PipeCD　MCP　Documentation server

5. CTO
OSS Bucketteer MCP Feature flags Documentation MCP server


6. CyberAgent生産性ツールポータル（Cursor等）
https://cyberagent.tools/

7. 社内MCP Serversポータル
WIP


# Second half: Personal

My favourite models:
For idea/planning, 
Claude Opus 4 mostly and o3 for more number crunching.

For coding: 
Claude 4 Sonnet
and
Gemini 2.5 Pro
depending on the context lenght.

MCP tips, new Cursor 1.0
The best tips I have to use along with Cursor.

ALL without leaving cursor!
First: Project as Code

From Idea: Discuss with Claude 4 Opus. Make it generate the idea in Markdown.

Project management: TaskMaster generate all the tasks to do.

Now, best platform for Vibecoding.
I don't want to publish this because its an unfair advantage.
Its my secret 秘密のタレ.

But I am going to publish it because in Japan I have VERY FEW people with experience.
They are getting very popular in USA, but as you know in Japan everything happens more slowly.
Mastra fortulately got a bit of hype recently in Japan.
Convex not so. But even the famous theo rewrote its T3 Chat (ChatGPT wrapper app) to use Convex recently.
He has a whole 1 hour video explaining why its so amazing.


Forget everything else.

Opinionated stack.
For AI Agents: Mastra
For Apps (Backend & Frontend): Convex (forget Supabase, AWS, Google Cloud, etc)
For Native Apps: Expo
For Hosting and everything else: Cloudflare

The single most important piece is Convex.
Since its a fully e2e typed realtime database, no SQL at all.
It has schema enforcement end to end, it works so much better when generating code with AI.

One VERY important hot take:
Most people try to use stuff that the LLMs know very well, like "Tailwind", etc.
Forget that. There is a problem when you change versions, the API is different.
Please raise your hand if you are using Tailwind v4 and your LLM wrote code for Tailwind v3.
Yes.
So no. The most important factor is that it has either:
1) Rules for Cursor, like COnvex.
or
2) MCP documentation server, like Mastra.

So if you have it, the LLM will write with the latest version, and best practices.
Because the code in LLMs used to be trained from stackoverflow, you know... not best quality/best practices.

You can use also GitMCP/Context7. Less tokens, less context, more precise and updated generation.


The point of Cursor and Speed of Development:
The moment you leave Cursor, think you are loosing so much time, but more important CONTEXT!
CONTEXT CONTEXT CONTEXT!
Which is the crucial thing for AI.

Also something that kills productivity ALWAYS: Context switching.
So lets do everything from the same place: And I think that place is Cursor.

So, lets have everything in the repo while we can.

And the external stuff and tools and services we don't, do the following:
1) Use existing MCP servers　for those tools/services
2) Create your own MCP servers for stuff that is not yet wrapped in an MCP server.
MCP servers for your design systems, internal systems, to collaborate with other teams inside or outside the company, etc.

Some curated MCPs:
GitMCP for having better context of OSS repositories.
Context7 too.

## UI:
21.st  magic MCP for amazing cool Shadcn components.
Or for example Vercel v0 also has an edge on UI React generation.
But going outside CUrsor? no!
There is an MCP that navigates to v0 and submits your prompts and gets the responses back to Cursor.
https://github.com/m2rads/v0-mcp


So the thing is, once you have all the MCP servers for everything you do,
You can start also developing Agents that do the workflow for it so easily using Mastra to orchestrate all your daily workflow.
So basically steps are:
1) you do everything manually in Cursor
2) Then you start adding or developing your MCP for all the parts of your 作業.
For this I recommend Cloudflare Agent or Mastra MCP Server.
You can share it then using the new Cursor v1 Install in 1-click.
3) Now, once you start doing repetitive stuff, you can make the whole business work on agents.
WIth Mastra, you can make an agent that does all that workflow.
4) Once you have the whole business/service with agents, you can either:
a) make an UI/App for it using Convex, or
b) wrap the whole agents thing in an single MCP server SaaS!　you can charge for access for it using Stripe Agent toolkit 
https://github.com/stripe/agent-toolkit


I believe that very soon the number of MCP servers in a company is gonna be a number that investors look actively and may choose to give more value according to it.

Companies like Zapier and Composio said already:
We now have more MCP servers/AI Agents than employees.

This is why every profession should use Cursor, not only engineers.
The task management, everything.

SOme MCP News: Elicitations!
I want to talk briefly about the concept and the real world use cases. 
@mcp-elicitations.md

The docs are complicated but my tl;dr: LLMs can now ask users for info instead of guessing or failing.

Example: "What's your email?" → LLM will ask you to answer before continuing (so it doesn't hallucinate).


# closings

宣伝

1. All these tips around MCP, news, best practices, ALL curated info only. I started publishing and will publish in https://mcpverified.com
(PRE launch, looking for contributors)

2. All tips, docs translated to JP and events info etc, in https://cursor-japan.org/
(PRE launch, looking for contributors)

3. Event about #CA.ai next event!

開催日：2025年7月17日（木）19:30〜22:30
会場：Abema Towers

サイバーエージェントが主催する生成AIに特化した技術勉強会「CA. ai#2」

社内における生成AIの活用法の紹介をはじめ、生成AIの力を最大限に活かす話題の生成AIツールを徹底解説します。
今回はMCPの基礎から応用まで、ホットなMCPの概念から活用事例まで、キーワードをピックアップし、生成AIの未来についての見解をお話いただきます。
ここでしか聞けない話が盛りだくさんなイベントとなっておりますので、この機会を逃さずにご参加ください！
https://cyberagent.connpass.com/event/357471/

4. For summer planning to do a huge event!
Big people names coming from overseas!

5. We're hiring
If you're interested in helping in anything I talked today, send me a DM!
Or apply here: https://dub.sh/dp-enabling
