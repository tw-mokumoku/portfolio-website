export type MusicCategory = "chillhop_radio" | "love_radio" | "chill_beat";

export const musicCategories = [
    {
        id : "chillhop_radio",
        raw: "Chillhop Radio",
    },
    {
        id : "love_radio",
        raw: "Love Radio",
    },
    {
        id : "chill_beat",
        raw: "Chill Beat",
    },
];

export const musicIndex = {
    "chillhop_radio": {
        id: 0
    },
    "love_radio": {
        id: 1
    },
    "chill_beat": {
        id: 2
    },
};

export type musicsObjType = typeof musicsObj;
export type musicBgObjType = typeof musicBgObj;

export const musicBgObj = {
    "chillhop_radio":[
        "/gif/chillhop_radio/cat_night.gif",
        "/gif/chillhop_radio/pc_game_rain.gif",
        "/gif/chillhop_radio/pc_night_work.gif",
        "/gif/chillhop_radio/study_girl.gif",
        "/gif/chillhop_radio/study_with_cat.gif",
        "/gif/chillhop_radio/windy_room_cat.gif",
        "/gif/chillhop_radio/mario_room.gif",
    ],
    "love_radio":[
        "/gif/love_radio/bike_couple.gif",
        "/gif/love_radio/buildings_rain.gif",
        "/gif/love_radio/couple_game_room.gif",
        "/gif/love_radio/robot_night_bench.gif",
        "/gif/love_radio/hituji_station.gif",
        "/gif/love_radio/PixeLɑnd.gif",
    ],
    "chill_beat":[
        "/gif/chill_beat/coffe_break.gif",
        "/gif/chill_beat/convini_sleep_2man.gif",
        "/gif/chill_beat/restaurant_puyopuyo.gif",
        "/gif/chill_beat/small_cafe.gif",
        "/gif/chill_beat/station_soba.gif",
        "/gif/chill_beat/tired_gyudon.gif",
    ]
}

export const musicsObj = {
    "chillhop_radio": [
        {
            name: "aria - Chillhop Radio",
            src: "/chillhop_radio/aria.mp3",
        },
        {
            name: "aurora - Chillhop Radio",
            src: "/chillhop_radio/aurora.mp3",
        },
        {
            name: "dreamscape - Chillhop Radio",
            src: "/chillhop_radio/dreamscape.mp3",
        },
        {
            name: "dusk - Chillhop Radio",
            src: "/chillhop_radio/dusk.mp3",
        },
        {
            name: "i'm alone out here - Chillhop Radio",
            src: "/chillhop_radio/im_alone_out_here.mp3",
        },
    ],
    "love_radio": [
        {
            name: "bloom - Love Radio",
            src: "/love_radio/bloom.mp3",
        },
        {
            name: "come closer - Love Radio",
            src: "/love_radio/come_closer.mp3",
        },
        {
            name: "faraway - Love Radio",
            src: "/love_radio/faraway.mp3",
        },
        {
            name: "good morning love - Love Radio",
            src: "/love_radio/good_morning_love.mp3",
        },
        {
            name: "it's ok - Love Radio",
            src: "/love_radio/its_ok.mp3",
        },
        {
            name: "looking at the moon - Love Radio",
            src: "/love_radio/looking_at_the_moon.mp3",
        },
        {
            name: "miss you - Love Radio",
            src: "/love_radio/miss_you.mp3",
        },
        {
            name: "soul searching - Love Radio",
            src: "/love_radio/soul_searching.mp3",
        },
        {
            name: "station to station - Love Radio",
            src: "/love_radio/station_to_station.mp3",
        },
        {
            name: "your eyes - Love Radio",
            src: "/love_radio/your_eyes.mp3",
        },
    ],
    "chill_beat": [
        {
            name: "breeze - Chill Beat",
            src: "/chill_beat/breeze.mp3",
        },
        {
            name: "cafe - Chill Beat",
            src: "/chill_beat/cafe.mp3",
        },
        {
            name: "cute - Chill Beat",
            src: "/chill_beat/cute.mp3",
        },
        {
            name: "cute [slowed] - Chill Beat",
            src: "/chill_beat/cute_slowed.mp3",
        },
        {
            name: "dreamscape - Chill Beat",
            src: "/chill_beat/dreamscape.mp3",
        },
        {
            name: "dreamscape [slowed] - Chill Beat",
            src: "/chill_beat/dreamscape_slowed.mp3",
        },
        {
            name: "echo - Chill Beat",
            src: "/chill_beat/echo.mp3",
        },
        {
            name: "echo [slowed] - Chill Beat",
            src: "/chill_beat/echo_slowed.mp3",
        },
        {
            name: "escape - Chill Beat",
            src: "/chill_beat/escape.mp3",
        },
        {
            name: "falling asleep - Chill Beat",
            src: "/chill_beat/falling_asleep.mp3",
        },
        {
            name: "feels - Chill Beat",
            src: "/chill_beat/feels.mp3",
        },
        {
            name: "home - Chill Beat",
            src: "/chill_beat/home.mp3",
        },
        {
            name: "home [slowed] - Chill Beat",
            src: "/chill_beat/home_slowed.mp3",
        },
        {
            name: "ill come back to you - Chill Beat",
            src: "/chill_beat/ill_come_back_to_you.mp3",
        },
        {
            name: "LAKE - Chill Beat",
            src: "/chill_beat/LAKE.mp3",
        },
        {
            name: "lazy - Chill Beat",
            src: "/chill_beat/lazy.mp3",
        },
        {
            name: "lazy [slowed] - Chill Beat",
            src: "/chill_beat/lazy_slowed.mp3",
        },
        {
            name: "lull - Chill Beat",
            src: "/chill_beat/lull.mp3",
        },
        {
            name: "mood - Chill Beat",
            src: "/chill_beat/mood.mp3",
        },
        {
            name: "RAIN - Chill Beat",
            src: "/chill_beat/RAIN.mp3",
        },
        {
            name: "reverie - Chill Beat",
            src: "/chill_beat/reverie.mp3",
        },
        {
            name: "slow burn - Chill Beat",
            src: "/chill_beat/slow_burn.mp3",
        },
        {
            name: "slow burn [slowed] - Chill Beat",
            src: "/chill_beat/slow_burn_slowed.mp3",
        },
        {
            name: "use to - Chill Beat",
            src: "/chill_beat/use_to.mp3",
        },
        {
            name: "velour - Chill Beat",
            src: "/chill_beat/velour.mp3",
        },
        {
            name: "velour [slowed] - Chill Beat",
            src: "/chill_beat/velour_slowed.mp3",
        },
    ]
}