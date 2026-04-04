# Overview
Lets refactor the otomotif research agent, skills and instruction. Please decide which requirement below should belongs to agent, skills or instructions.

# Workflows
There are 3 workflows the agent will do, we can separate the agent or use the same agent for all workflows:
1. Research
2. Comparation
3. Suggestion

## Research
When agent doing research, the agent will gather information from 3 sources and using 2 MCP. The sources will be web, twitter and youtube. The MCP will be YouYube MCP and Twitter MCP

### Information
Information devided into two types. Specification and narrative. Specification is the spec of the car. Usually it coming from reviewer, media and news. For narrative is a opinion, experience, sentiment and impretion from owner or public.

### Sources
1. Web
When agent gather information from web, they need to gather information from news, media, blog, and forum. This web souces act as main information about the car. The agent need to gather official specification from the news or media. And agent will gather sentiment, review, experience and opinion from use on blog and forum (narrative). Agent need to gather as much as possible sources. I will set the minimum sources to 100. The sources need to be updated and related to the car we research

2. YouTube
When agent gather information from youtube, they need to extract information from description, transcript and comments. YouTube act as secondary information about the car. It act as updated information about car spec. Because usually, some news or media will upload multiple video about a car using updated information. Agent will gather spec information and review about the car from description and transcript. For comment, agent will gather information as opinion, experience, sentiment and opinion (narrative). Agent need to gather as much as possible sources. I will set the minimum sources to 50. The sources need to be updated and related to the car we research

3. Twitter
When agent gather information from twitter, the need to extract information from tweet and replies. Twitter act as source of public voice about the car (narrative). Information from twitter will be mainly about opinion, experience, sentiment and impretion about the car from car owner or public. Agent need to gather as much as possible sources. I will set the minimum sources to 100. The sources need to be updated and related to the car we research

### MCP
1. YouTube MCP
Agent will use YouTube MCP when gathering information on youtube. Agent need to make sure youtube MCP available to be used. If MCP not availabe, agent will use and install this YouYube MCP https://github.com/granitebps/youtube-mcp

2. Twitter MCP
Agent will use Twitter MCP when gather information on Twitter. Agent need to make sure twitter MCP available to be used. If MCP not availabe, agent will use and install this Twitter MCP https://github.com/granitebps/twitter-mcp

### Research Result
Research result will be divided into 4 md files. Master, web, youtube and twitter. Web research will contain information gathered from web. It will contain spec and narrative gathered from web. YouTube research will contain information gathered from YouTube. It will contain spec about the car and the narrative about the car from youtube. Twitter research will contain information from Twitter. It will contain narrative about the car from twitter. The master research will be the final research about the car. It will compile information from all sources. It will be containing the spec and narrative about the car from all sources. The format of the research result is divided into 2 base on information type. For spec, it will formatted like a structured information. Maybe using table format. For narrative, use commentary style format. The research result will also contain conclusion about the car. The file name format is like this:
- master research: {car-name}-master-research.md
- web research: {car-name}-web-research.md
- youtube research: {car-name}-youtube-research.md
- twitter research: {car-name}-twitter-research.md

## Comparation
Agent can do 2 types of comparation. Between variant or between car. When agent comparing between variant, it will produce 1 md file under the car folder. When comparing between cars, it will produce 1 md file outside car folder but still inside research folder. When comparing, it will compare using spec and narrative. Agent can ask question to user to make the comparation more suitable to user needs. The file name format is like this:
- between variant: {car-name}-variant-comparison.md
- between cars: {car1-name}-vs-{car2-name}-comparison.md

## Suggestion
For suggestion, it will use the research result to give suggestion to user. Agent can ask simple/quick question to user before giving suggestion. Agent can also give more comprehensive question to user to give better suggestion. For this suggestion, please generate a md file for list of question to give to user. Please also do a research for list of question we should ask to user.
