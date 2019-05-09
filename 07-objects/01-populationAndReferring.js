//Objects

//Objeccts store multiple objects that are simlar in stucture. This is great for our JS logic.
//Objects can hold muttiple datatypes
//Denoted with { }
//Key - Value Pairs


//example

let netFlix = {
        id: 1,
        name: 'Super Store',
        seasons: {
            season1: {
                seasonInfo: {
                    episodeInfo: [{
                                epoisode: 1,
                                episodeName: "Pilot"
                            },
                            {
                                episode: 2,
                                "Magazine Profile"
                            },
                            {
                                episode: 3,
                                "Shots and Salsa",
                                {
                                    epoisode: 4,
                                    episodeName: "Mannequin"
                                },

                                season2: {
                                    {
                                        epoisode: 1,
                                        episodeName: "Pilot"
                                    },
                                    {
                                        episode: 2,
                                        "Magazine Profile"
                                    },
                                    {
                                        episode: 3,
                                        "Shots and Salsa",
                                        {
                                            epoisode: 4,
                                            episodeName: "Mannequin"
                                        },

                                        season3: {
                                            {
                                                epoisode: 1,
                                                episodeName: "Pilot"
                                            },
                                            {
                                                episode: 2,
                                                "Magazine Profile"
                                            },
                                            {
                                                episode: 3,
                                                "Shots and Salsa",
                                                {
                                                    epoisode: 4,
                                                    episodeName: "Mannequin"
                                                },

                                            }
                                            season4: {
                                                {
                                                    epoisode: 1,
                                                    episodeName: "Pilot"
                                                },
                                                {
                                                    episode: 2,
                                                    "Magazine Profile"
                                                },
                                                {
                                                    episode: 3,
                                                    "Shots and Salsa",
                                                    {
                                                        epoisode: 4,
                                                        episodeName: "Mannequin"
                                                    },

                                                }

                                            }
                                        }
                                    }
                                }
                            }

                            //Dot Notation

                            console.log("All data:", netFlix)
                            console.log('Just seasin info: ', netfFlix.season1.seasonIfo)
                            console.log('Episodr name: ', netFlix, seasons.season1.seasonInfo[0].episodeName)



                            /*
                             Challenge:
                             Pick an epispde to show
                             Using dot notation, walk through the netFlix object and print off both thr eposode and the episode name.
                             */




                            console.log(netFlix.seasons.seasonInfo.eposodeInfo[0].episodeName, 'episode', ) netfFlix, .season.season1, seasonInfor.epi