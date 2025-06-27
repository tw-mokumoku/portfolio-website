// musicObj
export type musicsObjType = chillMusicsObjType | kawaiiMusicsObjType;
export type chillMusicsObjType = typeof chillMusicsObj;
export type kawaiiMusicsObjType = typeof kawaiiMusicsObj;
// musicBgObj
export type musicBgObjType = chillMusicBgObjType | kawaiiMusicBgObjType
export type chillMusicBgObjType = typeof chillMusicBgObj;
export type kawaiiMusicBgObjType = typeof kawaiiMusicBgObj;
// MusicCategory
export type MusicCategory = chillMusicCategory | kawaiiMusicCategory;
export type chillMusicCategory = "chillhop_radio" | "love_radio" | "chill_beat";
export type kawaiiMusicCategory = "kawaii_edm";
// musicCategoriesType
export type musicCategoriesType = chillMusicCategoriesType | kawaiiMusicCategoriesType;
export type chillMusicCategoriesType = typeof chillMusicCategories;
export type kawaiiMusicCategoriesType = typeof kawaiiMusicCategories;
//
export type musicIndexObjType = chillMusicIndexObjType | kawaiiMusicIndexObjType;
export type chillMusicIndexObjType = typeof chillMusicIndexObj;
export type kawaiiMusicIndexObjType = typeof kawaiiMusicIndexObj;


export const kawaiiMusicIndexObj = {
    "kawaii_edm": {
        id: 0
    }
};

export const kawaiiMusicCategories = [
    {
        id: "kawaii_edm",
        raw: "Kawaii EDM"
    }
];

export const kawaiiMusicBgObj = {
    "kawaii_edm": [
        "/music/kawaii/gif/kawaii_edm/future_eve.gif"
    ]
};

export const kawaiiMusicsObj = {
    "kawaii_edm": [
        {
            name: "曖昧サイボーグ",
            src: "/music/kawaii/mp3/kawaii_edm/Aimai_Cyborg.mp3"
        },
        {
            name: "ALL DAY",
            src: "/music/kawaii/mp3/kawaii_edm/ALL_DAY.mp3"
        },
        {
            name: "breeze",
            src: "/music/kawaii/mp3/kawaii_edm/breeze.mp3"
        },
        {
            name: "Cappuccino",
            src: "/music/kawaii/mp3/kawaii_edm/Cappuccino.mp3"
        },
        {
            name: "Chocolate Adventure",
            src: "/music/kawaii/mp3/kawaii_edm/Chocolate_Adventure.mp3"
        },
        {
            name: "Cludspin",
            src: "/music/kawaii/mp3/kawaii_edm/Cloudspin.mp3"
        },
        {
            name: "Colors",
            src: "/music/kawaii/mp3/kawaii_edm/Colors.mp3"
        },
        {
            name: "Connected World",
            src: "/music/kawaii/mp3/kawaii_edm/Connected_World.mp3"
        },
        {
            name: "Diary Line",
            src: "/music/kawaii/mp3/kawaii_edm/Diary_Line.mp3"
        },
        {
            name: "Dont you want me",
            src: "/music/kawaii/mp3/kawaii_edm/Dont_you_want_me.mp3"
        },
        {
            name: "Electric Dream",
            src: "/music/kawaii/mp3/kawaii_edm/Electric_Dream.mp3"
        },
        {
            name: "Fairy Light",
            src: "/music/kawaii/mp3/kawaii_edm/Fairy_Light.mp3"
        },
        {
            name: "From Zero",
            src: "/music/kawaii/mp3/kawaii_edm/From_Zero.mp3"
        },
        {
            name: "Home Sweet Home",
            src: "/music/kawaii/mp3/kawaii_edm/Home_Sweet_Home.mp3"
        },
        {
            name: "HoneyComeBear",
            src: "/music/kawaii/mp3/kawaii_edm/HoneyComeBear.mp3"
        },
        {
            name: "hot milk",
            src: "/music/kawaii/mp3/kawaii_edm/hot_milk.mp3"
        },
        {
            name: "Hype",
            src: "/music/kawaii/mp3/kawaii_edm/Hype.mp3"
        },
        {
            name: "In Your Heart",
            src: "/music/kawaii/mp3/kawaii_edm/In_Your_Heart.mp3"
        },
        {
            name: "Journey",
            src: "/music/kawaii/mp3/kawaii_edm/Journey.mp3"
        },
        {
            name: "Jump!",
            src: "/music/kawaii/mp3/kawaii_edm/Jump!.mp3"
        },
        {
            name: "Jumping23！",
            src: "/music/kawaii/mp3/kawaii_edm/Jumping23！.mp3"
        },
        {
            name: "Kaedekko",
            src: "/music/kawaii/mp3/kawaii_edm/Kaedekko.mp3"
        },
        {
            name: "KATOMORI",
            src: "/music/kawaii/mp3/kawaii_edm/KATOMORI.mp3"
        },
        {
            name: "Liftoff",
            src: "/music/kawaii/mp3/kawaii_edm/Liftoff.mp3"
        },
        {
            name: "Mihka! X The End Kodokushi",
            src: "/music/kawaii/mp3/kawaii_edm/Mihka!_X_The_End_Kodokushi.mp3"
        },
        {
            name: "Pastel",
            src: "/music/kawaii/mp3/kawaii_edm/Pastel.mp3"
        },
        {
            name: "Pixel Galaxy",
            src: "/music/kawaii/mp3/kawaii_edm/Pixel_Galaxy.mp3"
        },
        {
            name: "Remember Me",
            src: "/music/kawaii/mp3/kawaii_edm/Remember_Me.mp3"
        },
        {
            name: "Renai Circulation",
            src: "/music/kawaii/mp3/kawaii_edm/Renai_Circulation.mp3"
        },
        {
            name: "Ryokou",
            src: "/music/kawaii/mp3/kawaii_edm/Ryokou.mp3"
        },
        {
            name: "Ryokucha",
            src: "/music/kawaii/mp3/kawaii_edm/Ryokucha.mp3"
        },
        {
            name: "Sherbet Land",
            src: "/music/kawaii/mp3/kawaii_edm/Sherbet_Land.mp3"
        },
        {
            name: "Shooting star",
            src: "/music/kawaii/mp3/kawaii_edm/Shooting_star.mp3"
        },
        {
            name: "Sirena",
            src: "/music/kawaii/mp3/kawaii_edm/Sirena.mp3"
        },
        {
            name: "Starlight Wonder",
            src: "/music/kawaii/mp3/kawaii_edm/Starlight_Wonder.mp3"
        },
        {
            name: "Summer Dream",
            src: "/music/kawaii/mp3/kawaii_edm/Summer_Dream.mp3"
        },
        {
            name: "Tokyo Future Girl",
            src: "/music/kawaii/mp3/kawaii_edm/Tokyo_Future_Girl.mp3"
        },
        {
            name: "Tripod Baby",
            src: "/music/kawaii/mp3/kawaii_edm/Tripod_Baby.mp3"
        },
        {
            name: "Twinklestar",
            src: "/music/kawaii/mp3/kawaii_edm/Twinklestar.mp3"
        },
        {
            name: "Yozora",
            src: "/music/kawaii/mp3/kawaii_edm/Yozora.mp3"
        },
        {
            name: "インドア系ならトラックメイカー",
            src: "/music/kawaii/mp3/kawaii_edm/インドア系ならトラックメイカー.mp3"
        },
        {
            name: "くいしんぼハッカー",
            src: "/music/kawaii/mp3/kawaii_edm/くいしんぼハッカー.mp3"
        },
        {
            name: "ジェリーフィッシュ",
            src: "/music/kawaii/mp3/kawaii_edm/ジェリーフィッシュ.mp3"
        },
        {
            name: "シンデレラベイビー",
            src: "/music/kawaii/mp3/kawaii_edm/シンデレラベイビー.mp3"
        },
        {
            name: "ダンスフロアの果実",
            src: "/music/kawaii/mp3/kawaii_edm/ダンスフロアの果実.mp3"
        },
        {
            name: "チャイナアドバイス",
            src: "/music/kawaii/mp3/kawaii_edm/チャイナアドバイス.mp3"
        },
        {
            name: "ハッピーくるくる",
            src: "/music/kawaii/mp3/kawaii_edm/ハッピーくるくる.mp3"
        },
        {
            name: "ヒステリックナイトガール",
            src: "/music/kawaii/mp3/kawaii_edm/ヒステリックナイトガール.mp3"
        },
        {
            name: "ピポピポ",
            src: "/music/kawaii/mp3/kawaii_edm/ピポピポ.mp3"
        },
        {
            name: "ゆのみっくにお茶して",
            src: "/music/kawaii/mp3/kawaii_edm/ゆのみっくにお茶して.mp3"
        },
        {
            name: "ロボティックガール",
            src: "/music/kawaii/mp3/kawaii_edm/ロボティックガール.mp3"
        },
        {
            name: "気楽なCloudy",
            src: "/music/kawaii/mp3/kawaii_edm/気楽なCloudy.mp3"
        },
        {
            name: "空色デイズ",
            src: "/music/kawaii/mp3/kawaii_edm/空色デイズ.mp3"
        },
        {
            name: "大江戸コントローラー",
            src: "/music/kawaii/mp3/kawaii_edm/大江戸コントローラー.mp3"
        },
        {
            name: "夜空を飛んでく夢を見て",
            src: "/music/kawaii/mp3/kawaii_edm/夜空を飛んでく夢を見て.mp3"
        },
    ]
}

export const chillMusicIndexObj = {
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

export const chillMusicCategories = [
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


export const chillMusicBgObj = {
    "chillhop_radio":[
        "/music/chill/gif/chillhop_radio/cat_night.gif",
        "/music/chill/gif/chillhop_radio/pc_game_rain.gif",
        "/music/chill/gif/chillhop_radio/pc_night_work.gif",
        "/music/chill/gif/chillhop_radio/study_girl.gif",
        "/music/chill/gif/chillhop_radio/study_with_cat.gif",
        "/music/chill/gif/chillhop_radio/windy_room_cat.gif",
        "/music/chill/gif/chillhop_radio/mario_room.gif",
    ],
    "love_radio":[
        "/music/chill/gif/love_radio/bike_couple.gif",
        "/music/chill/gif/love_radio/buildings_rain.gif",
        "/music/chill/gif/love_radio/couple_game_room.gif",
        "/music/chill/gif/love_radio/robot_night_bench.gif",
        "/music/chill/gif/love_radio/hituji_station.gif",
        "/music/chill/gif/love_radio/PixeLɑnd.gif",
    ],
    "chill_beat":[
        "/music/chill/gif/chill_beat/coffe_break.gif",
        "/music/chill/gif/chill_beat/convini_sleep_2man.gif",
        "/music/chill/gif/chill_beat/restaurant_puyopuyo.gif",
        "/music/chill/gif/chill_beat/small_cafe.gif",
        "/music/chill/gif/chill_beat/station_soba.gif",
        "/music/chill/gif/chill_beat/tired_gyudon.gif",
    ]
}

export const chillMusicsObj = {
    "chillhop_radio": [
        {
            name: "aria - Chillhop Radio",
            src: "/music/chill/mp3/chillhop_radio/aria.mp3",
        },
        {
            name: "aurora - Chillhop Radio",
            src: "/music/chill/mp3/chillhop_radio/aurora.mp3",
        },
        {
            name: "dreamscape - Chillhop Radio",
            src: "/music/chill/mp3/chillhop_radio/dreamscape.mp3",
        },
        {
            name: "dusk - Chillhop Radio",
            src: "/music/chill/mp3/chillhop_radio/dusk.mp3",
        },
        {
            name: "i'm alone out here - Chillhop Radio",
            src: "/music/chill/mp3/chillhop_radio/im_alone_out_here.mp3",
        },
    ],
    "love_radio": [
        {
            name: "bloom - Love Radio",
            src: "/music/chill/mp3/love_radio/bloom.mp3",
        },
        {
            name: "come closer - Love Radio",
            src: "/music/chill/mp3/love_radio/come_closer.mp3",
        },
        {
            name: "faraway - Love Radio",
            src: "/music/chill/mp3/love_radio/faraway.mp3",
        },
        {
            name: "good morning love - Love Radio",
            src: "/music/chill/mp3/love_radio/good_morning_love.mp3",
        },
        {
            name: "it's ok - Love Radio",
            src: "/music/chill/mp3/love_radio/its_ok.mp3",
        },
        {
            name: "looking at the moon - Love Radio",
            src: "/music/chill/mp3/love_radio/looking_at_the_moon.mp3",
        },
        {
            name: "miss you - Love Radio",
            src: "/music/chill/mp3/love_radio/miss_you.mp3",
        },
        {
            name: "soul searching - Love Radio",
            src: "/music/chill/mp3/love_radio/soul_searching.mp3",
        },
        {
            name: "station to station - Love Radio",
            src: "/music/chill/mp3/love_radio/station_to_station.mp3",
        },
        {
            name: "your eyes - Love Radio",
            src: "/music/chill/mp3/love_radio/your_eyes.mp3",
        },
    ],
    "chill_beat": [
        {
            name: "breeze - Chill Beat",
            src: "/music/chill/mp3/chill_beat/breeze.mp3",
        },
        {
            name: "cafe - Chill Beat",
            src: "/music/chill/mp3/chill_beat/cafe.mp3",
        },
        {
            name: "cute - Chill Beat",
            src: "/music/chill/mp3/chill_beat/cute.mp3",
        },
        {
            name: "cute [slowed] - Chill Beat",
            src: "/music/chill/mp3/chill_beat/cute_slowed.mp3",
        },
        {
            name: "dreamscape - Chill Beat",
            src: "/music/chill/mp3/chill_beat/dreamscape.mp3",
        },
        {
            name: "dreamscape [slowed] - Chill Beat",
            src: "/music/chill/mp3/chill_beat/dreamscape_slowed.mp3",
        },
        {
            name: "echo - Chill Beat",
            src: "/music/chill/mp3/chill_beat/echo.mp3",
        },
        {
            name: "echo [slowed] - Chill Beat",
            src: "/music/chill/mp3/chill_beat/echo_slowed.mp3",
        },
        {
            name: "escape - Chill Beat",
            src: "/music/chill/mp3/chill_beat/escape.mp3",
        },
        {
            name: "falling asleep - Chill Beat",
            src: "/music/chill/mp3/chill_beat/falling_asleep.mp3",
        },
        {
            name: "feels - Chill Beat",
            src: "/music/chill/mp3/chill_beat/feels.mp3",
        },
        {
            name: "home - Chill Beat",
            src: "/music/chill/mp3/chill_beat/home.mp3",
        },
        {
            name: "home [slowed] - Chill Beat",
            src: "/music/chill/mp3/chill_beat/home_slowed.mp3",
        },
        {
            name: "ill come back to you - Chill Beat",
            src: "/music/chill/mp3/chill_beat/ill_come_back_to_you.mp3",
        },
        {
            name: "LAKE - Chill Beat",
            src: "/music/chill/mp3/chill_beat/LAKE.mp3",
        },
        {
            name: "lazy - Chill Beat",
            src: "/music/chill/mp3/chill_beat/lazy.mp3",
        },
        {
            name: "lazy [slowed] - Chill Beat",
            src: "/music/chill/mp3/chill_beat/lazy_slowed.mp3",
        },
        {
            name: "lull - Chill Beat",
            src: "/music/chill/mp3/chill_beat/lull.mp3",
        },
        {
            name: "mood - Chill Beat",
            src: "/music/chill/mp3/chill_beat/mood.mp3",
        },
        {
            name: "RAIN - Chill Beat",
            src: "/music/chill/mp3/chill_beat/RAIN.mp3",
        },
        {
            name: "reverie - Chill Beat",
            src: "/music/chill/mp3/chill_beat/reverie.mp3",
        },
        {
            name: "slow burn - Chill Beat",
            src: "/music/chill/mp3/chill_beat/slow_burn.mp3",
        },
        {
            name: "slow burn [slowed] - Chill Beat",
            src: "/music/chill/mp3/chill_beat/slow_burn_slowed.mp3",
        },
        {
            name: "use to - Chill Beat",
            src: "/music/chill/mp3/chill_beat/use_to.mp3",
        },
        {
            name: "velour - Chill Beat",
            src: "/music/chill/mp3/chill_beat/velour.mp3",
        },
        {
            name: "velour [slowed] - Chill Beat",
            src: "/music/chill/mp3/chill_beat/velour_slowed.mp3",
        },
    ]
}