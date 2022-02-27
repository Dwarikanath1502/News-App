import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    // articles = [
    //     {
    //         "source": {
    //             "id": "the-wall-street-journal",
    //             "name": "The Wall Street Journal"
    //         },
    //         "author": "Yaroslav Trofimov, Brett Forrest",
    //         "title": "Russian Forces Close In on Ukraine’s Capital as Kremlin Agrees to Talks - The Wall Street Journal",
    //         "description": "Airstrikes hit cities, tanks roll in and casualties mount; EU officials agree to impose sanctions on President Putin and Foreign Minister Lavrov",
    //         "url": "https://www.wsj.com/articles/ukrainian-capital-rocked-by-explosions-as-russia-intensifies-attack-11645771768",
    //         "urlToImage": "https://images.wsj.net/im-492931/social",
    //         "publishedAt": "2022-02-25T18:27:00Z",
    //         "content": "HOSTOMEL, UkraineRussian forces moved by air and land to attack Kyiv on Friday and the capitals defenders dug into positions along its forested edge and deployed for urban combat inside the city cent… [+251 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-wall-street-journal",
    //             "name": "The Wall Street Journal"
    //         },
    //         "author": "David Harrison",
    //         "title": "U.S. Consumer Spending Rose 2.1% in January and Inflation Accelerated Amid Omicron Wave - The Wall Street Journal",
    //         "description": "Commerce Department’s inflation gauge rose 6.1% from a year earlier",
    //         "url": "https://www.wsj.com/articles/consumer-spending-january-2022-inflation-omicron-11645735669",
    //         "urlToImage": "https://images.wsj.net/im-492453/social",
    //         "publishedAt": "2022-02-25T18:16:00Z",
    //         "content": "U.S. consumer spending rose briskly in January and prices climbed faster, adding to other signs that the economy started the year on a solid footing despite the Omicron wave of Covid-19 infections. B… [+414 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-washington-post",
    //             "name": "The Washington Post"
    //         },
    //         "author": "Dan Lamothe, Paul Sonne",
    //         "title": "On Ukraine's Snake Island, a defiant last stand against Russian forces - The Washington Post",
    //         "description": "Ukrainian President Volodymyr Zelensky said the 13 who were killed will be bestowed with the title “Hero of Ukraine,” the highest honorific he can award.",
    //         "url": "https://www.washingtonpost.com/national-security/2022/02/25/snake-island-russian-warship-ukraine/",
    //         "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/TBQHQLEWFEI6ZOZROT6ANQFDUU.jpg&w=1440",
    //         "publishedAt": "2022-02-25T18:15:00Z",
    //         "content": "The Ukrainians responded boldly.\r\nRussian warship, came the reply, go f--- yourself.\r\nThe Russians opened fire, eventually killing the 13 border guards.\r\n500 FEET\r\nRUSSIA\r\nKyiv\r\nUKRAINE\r\nROM.\r\nCrimea… [+3605 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "cnn",
    //             "name": "CNN"
    //         },
    //         "author": "Chris Isidore, CNN Business",
    //         "title": "Elon Musk and brother reportedly face insider trading probe - CNN",
    //         "description": "Tesla CEO Elon Musk and his brother are under investigation by the Securities and Exchange Commission for possibly violating insider trading rules, according to media reports.",
    //         "url": "https://www.cnn.com/2022/02/25/investing/elon-musk-brother-insider-stock-sale-investigation/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220225091320-restricted-elon-musk-kimbal-musk-split-super-tease.jpg",
    //         "publishedAt": "2022-02-25T18:03:00Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "ars-technica",
    //             "name": "Ars Technica"
    //         },
    //         "author": "Sam Machkovech",
    //         "title": "Steam Deck: The comprehensive Ars Technica review - Ars Technica",
    //         "description": "Power, battery, software compatibility, and too many random crashes: Let's dig in.",
    //         "url": "https://arstechnica.com/gaming/2022/02/steam-deck-the-comprehensive-ars-technica-review/",
    //         "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2022/02/IMG_2226-760x380.jpg",
    //         "publishedAt": "2022-02-25T18:00:55Z",
    //         "content": "Enlarge/ The Steam Deck has arrived.\r\n28 with 26 posters participating\r\nThe Steam Deck, the new $399-and-up Switch-like PC made by Valve, sometimes feels like the most impressive portable gaming syst… [+4262 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "reuters",
    //             "name": "Reuters"
    //         },
    //         "author": null,
    //         "title": "NATO making more deployments in east after Russian invasion - Reuters",
    //         "description": "NATO leaders said on Friday they were deploying more troops to eastern Europe after Russia invaded Ukraine, saying that Moscow had lied about its intentions.",
    //         "url": "https://www.reuters.com/world/europe/nato-making-more-deployments-east-after-russian-invasion-2022-02-25/",
    //         "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=75",
    //         "publishedAt": "2022-02-25T17:19:00Z",
    //         "content": "BRUSSELS, Feb 25 (Reuters) - NATO leaders said on Friday they were deploying more troops to eastern Europe after Russia invaded Ukraine, saying that Moscow had lied about its intentions.\r\n\"No one sho… [+467 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-hill",
    //             "name": "The Hill"
    //         },
    //         "author": "Cameron Jenkins",
    //         "title": "Man who carried Pelosi's lectern on Jan. 6 sentenced to prison | TheHill - The Hill",
    //         "description": "A man who was photographed carrying House Speaker Nancy Pelosi's (D-Calif.) lectern as rioters st...",
    //         "url": "https://thehill.com/regulation/court-battles/595838-man-who-carried-pelosis-lectern-on-jan-6-sentenced-to-prison",
    //         "urlToImage": "https://thehill.com/sites/default/files/article_images/johnsonadam_ap_02252022.jpg",
    //         "publishedAt": "2022-02-25T17:08:25Z",
    //         "content": "A man who was photographed carrying House Speaker Nancy PelosiNancy PelosiPsaki on Cruz 'Peanuts' character comparison: 'Don't tell him I like Peppermint Patty'Congress to receive in-person, classifi… [+1848 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Fox Business"
    //         },
    //         "author": "FOX Business Team",
    //         "title": "Stocks jump, oil steady as Russia, Ukraine fears ease: LIVE UPDATES - Fox Business",
    //         "description": "FOX Business is providing real-time updates on the markets, commodities and all the most active stocks on the move.",
    //         "url": "https://www.foxbusiness.com/live-news/stock-market-today-2-25-2022",
    //         "urlToImage": "https://static.foxnews.com/static/orion/styles/img/fox-business/og/og-fox-business.png",
    //         "publishedAt": "2022-02-25T17:04:20Z",
    //         "content": "Americans are already coping with the hottest inflation in four decades, and Russia's full-scale attack on Ukraine could push it even higher.\r\nThe conflict roiled the global market Thursday, pushing … [+228 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "BuzzFeed News"
    //         },
    //         "author": "David Mack",
    //         "title": "Russia Has Now Been Booted From Eurovision For Invading Ukraine - BuzzFeed News",
    //         "description": "A number of other European countries had indicated they would not participate in this year's popular song contest unless Russia was kicked out for its invasion of Ukraine.",
    //         "url": "https://www.buzzfeednews.com/article/davidmack/eurovision-ban-russia",
    //         "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2022-02/25/17/campaign_images/2acc7ff9a0c9/russia-has-now-been-booted-from-eurovision-for-in-2-1210-1645809835-0_dblbig.jpg",
    //         "publishedAt": "2022-02-25T16:54:11Z",
    //         "content": "Organizers of the Eurovision Song Contest reversed course on Friday, announcing that Russia would no longer be permitted to perform in this year's event.\r\n\"The decision reflects concern that, in ligh… [+1057 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "cnn",
    //             "name": "CNN"
    //         },
    //         "author": "Jake Tapper, Ariane de Vogue, Jeff Zeleny and Betsy Klein, CNN",
    //         "title": "First on CNN: Biden to nominate Ketanji Brown Jackson to be first Black woman to sit on Supreme Court - CNN",
    //         "description": "President Joe Biden has selected Ketanji Brown Jackson as his nominee to the Supreme Court, setting in motion a historic confirmation process for the first Black woman to sit on the highest court in the nation.",
    //         "url": "https://www.cnn.com/2022/02/25/politics/supreme-court-ketanji-brown-jackson/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220223111350-restricted-lead-image-ketanji-brown-jackson-super-tease.jpg",
    //         "publishedAt": "2022-02-25T16:29:00Z",
    //         "content": "(CNN)President Joe Biden has selected Ketanji Brown Jackson as his nominee to the Supreme Court, setting in motion a historic confirmation process for the first Black woman to sit on the highest cour… [+10221 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "independent",
    //             "name": "Independent"
    //         },
    //         "author": "Harriet Sinclair",
    //         "title": "Zelensky says Biden ‘looked on from a distance’ as Russia invaded Ukraine - The Independent",
    //         "description": "‘This morning, we are defending our country alone’",
    //         "url": "https://www.independent.co.uk/news/world/americas/us-politics/zelensky-biden-ukraine-russia-war-b2023218.html",
    //         "urlToImage": "https://static.independent.co.uk/2022/02/25/08/eb174335226318f71d9c87451938d0e1Y29udGVudHNlYXJjaGFwaSwxNjQ1ODY0MTkx-2.65044524.jpg?quality=75&width=1200&auto=webp",
    //         "publishedAt": "2022-02-25T15:54:33Z",
    //         "content": "Volodymyr Zelensky has accused the US of standing by as Russia invaded Ukraine, appearing to hit out at US President Joe Bidens actions as he blasted sanctions as not being enough to get Russian troo… [+1401 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CBS Sports"
    //         },
    //         "author": "",
    //         "title": "2022 NFL combine: Quarterback hand size, Aidan Hutchinson vs. Kayvon Thibodeaux the biggest storylines - CBS Sports",
    //         "description": "Here are the biggest storylines to monitor during the 2022 NFL Combine",
    //         "url": "https://www.cbssports.com/nfl/draft/news/2022-nfl-combine-quarterback-hand-size-aidan-hutchinson-vs-kayvon-thibodeaux-the-biggest-storylines/",
    //         "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/02/19/62d975dc-56c6-4678-bf73-709b54807816/thumbnail/1200x675/d2c9e8e6faf2ba2d7c3be0bfa70644c2/kenny-pickett-2-getty.jpg",
    //         "publishedAt": "2022-02-25T15:47:29Z",
    //         "content": "The NFL Combine is back, and I couldn't be more happy. Given that we have over 20 years of comprehensive combine data, player workouts from the event will easily be compared to prospects in the past.… [+5347 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "reuters",
    //             "name": "Reuters"
    //         },
    //         "author": null,
    //         "title": "Dow, S&P 500 rise as Russia says ready to hold talks with Ukraine - Reuters",
    //         "description": "The Dow and the S&P 500 index rose on Friday, building on a rally in the previous session after the Kremlin said Russian President Vladimir Putin is ready to send a delegation to Minsk for negotiations with Ukraine.",
    //         "url": "https://www.reuters.com/business/futures-slip-investors-fret-over-ukraine-crisis-2022-02-25/",
    //         "urlToImage": "https://www.reuters.com/resizer/RGrPn4UVEdriEds86L3qon3hSLo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/7N6PADXMJVMEHME5JPTPNN7V54.jpg",
    //         "publishedAt": "2022-02-25T15:46:00Z",
    //         "content": "Feb 25 (Reuters) - The Dow and the S&amp;P 500 index rose on Friday, building on a rally in the previous session after the Kremlin said Russian President Vladimir Putin is ready to send a delegation … [+2634 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Kotaku"
    //         },
    //         "author": "Ethan Gach",
    //         "title": "Elden Ring Shatters Dark Souls Records On Twitch And Steam - Kotaku",
    //         "description": "FromSoftware’s open world Souls-like is already Twitch's number one game.",
    //         "url": "https://kotaku.com/elden-ring-twitch-steam-dark-souls-fromsoftware-records-1848593903",
    //         "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/d9f013c8ecb5bd862c2b8d4b79d7b50e.jpg",
    //         "publishedAt": "2022-02-25T15:45:00Z",
    //         "content": "FromSoftwares Elden Ringhas been out for less than a day, and its already taken over Twitch and Steam. The open world action-RPG is posting unprecedented numbers for a Souls-like.\r\nShortly after its … [+2173 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CNBC"
    //         },
    //         "author": "MacKenzie Sigalos",
    //         "title": "$4.1 million in cryptocurrency funneled to Ukrainian military since Russia invaded - CNBC",
    //         "description": "Donations to the Ukrainian army in cryptocurrencies like bitcoin are in the millions of dollars, according to new data from blockchain analytics firm Elliptic.",
    //         "url": "https://www.cnbc.com/2022/02/25/4point1-million-in-cryptocurrency-funneled-to-ukrainian-military-since-russia-invaded.html",
    //         "urlToImage": "https://image.cnbcfm.com/api/v1/image/107020767-1645794978985-gettyimages-1238745691-AFP_323W7XN.jpeg?v=1645795080",
    //         "publishedAt": "2022-02-25T15:36:20Z",
    //         "content": "Donations being funneled to the Ukrainian army in cryptocurrencies like bitcoin are in the millions of dollars, according to new data from blockchain analytics firm Elliptic.\r\nResearch shows that $4.… [+3375 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "NBCSports.com"
    //         },
    //         "author": "Josh Alper",
    //         "title": "Michael Bidwill: We’ve had good conversations nonstop with Kyler Murray - NBC Sports",
    //         "description": "A report on Thursday night indicated that the Cardinals and quarterback Kyler Murray were on good terms despite some signs that the relationship wasn’t in a great place earlier this month and that was the same message that team owner Michael Bidwill sent on F…",
    //         "url": "https://profootballtalk.nbcsports.com/2022/02/25/michael-bidwill-weve-had-good-conversations-with-kyler-murray/",
    //         "urlToImage": "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2022/02/GettyImages-1350127386-e1645802525415.jpg",
    //         "publishedAt": "2022-02-25T15:23:00Z",
    //         "content": "A report on Thursday night indicated that the Cardinals and quarterback Kyler Murray were on good terms despite some signs that the relationship wasnt in a great place earlier this month and that was… [+891 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "ESPN"
    //         },
    //         "author": null,
    //         "title": "International Olympic Committee urges sports bodies to cancel events in Russia, Belarus - ESPN",
    //         "description": "The IOC is urging sports bodies to cancel or move all events they plan to hold in Russia and Belarus and stop using the countries' flags and national anthems.",
    //         "url": "https://www.espn.com/olympics/story/_/id/33368931/international-olympic-committee-urges-sports-bodies-cancel-events-russia-belarus",
    //         "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2016%2F0724%2Fr106554_1296x729_16%2D9.jpg",
    //         "publishedAt": "2022-02-25T15:13:34Z",
    //         "content": "GENEVA -- The International Olympic Committee urged sports bodies Friday to cancel or move all events they plan to hold in Russia and Belarus, and stop using the countries' flags and national anthems… [+3945 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Yahoo Entertainment"
    //         },
    //         "author": "Jeff Eisenberg",
    //         "title": "‘You need to get out of there': American basketball players struggle to flee Ukraine - Yahoo Sports",
    //         "description": "For Americans playing basketball in Ukraine, escaping has not been easy. Said one player: “Nobody thought anything like this was actually going to happen.\"",
    //         "url": "https://sports.yahoo.com/you-need-to-get-out-of-there-american-basketball-players-struggle-to-flee-ukraine-150040957.html",
    //         "urlToImage": "https://s.yimg.com/ny/api/res/1.2/elVTG.PoMV_GCHHhRha.Kg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-02/cfd30400-9647-11ec-befe-52988b5d9c01",
    //         "publishedAt": "2022-02-25T15:00:40Z",
    //         "content": "Last month, when the U.S. State Department began urging American citizens to leave Ukraine, Jerome Randles phone started buzzing incessantly.\r\nFriends and family in America would send Randle media re… [+7763 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "abc-news",
    //             "name": "ABC News"
    //         },
    //         "author": "The Associated Press",
    //         "title": "Oklahoma's Inhofe confirms he is resigning US Senate seat - ABC News",
    //         "description": "",
    //         "url": "https://abcnews.go.com/Politics/wireStory/oklahomas-inhofe-confirms-resigning-us-senate-seat-83108694",
    //         "urlToImage": "https://s.abcnews.com/images/Politics/WireAP_4a76fccbae0d4d22bcac625cc58a79a9_16x9_992.jpg",
    //         "publishedAt": "2022-02-25T14:41:22Z",
    //         "content": "OKLAHOMA CITY -- Oklahoma's U.S. Sen. Jim Inhofe, the ranking Republican on the Senate Armed Services Committee, says he will step down before his six-year term is up and that he is absolutely at pea… [+1575 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-washington-post",
    //             "name": "The Washington Post"
    //         },
    //         "author": "Gerry Shih",
    //         "title": "India stays silent on Russian invasion of Ukraine, to apparent frustration of Biden administration - The Washington Post",
    //         "description": "For years, India has juggled its close relations with Russia, which supplies 70 percent of its military equipment, with its fast-growing ties with the United States, which sees India as a crucial partner in countering China’s rise.",
    //         "url": "https://www.washingtonpost.com/world/2022/02/25/india-ukraine-russia-biden/",
    //         "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/DLZ55MUVPAI6ZOZROT6ANQFDUU.jpg&w=1440",
    //         "publishedAt": "2022-02-25T14:40:00Z",
    //         "content": "For years, India has juggled its close relations with Russia an enduring legacy of the Cold War with its fast-growing ties with the United States, which has envisioned India as a crucial partner in i… [+6179 chars]"
    //     }
    // ]
    constructor() {
        super();
        // console.log("Hello Constructor news");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=aba0349b6d5d4fb594fedf08fb7bfae3";
        let data  = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles})
    }

    render() {
        console.log("render");
        return (
            <div className="container my-4" >
                <h1>NewFinder - Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4">
                            <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 45): ""} description={element.description?element.description.slice(0, 88):""}
                                    imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        </div>

                    })}
                </div>
            </div>
        )
    }
}

export default News