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
export type kawaiiMusicCategory = "adventure" | "fantacy" | "future" | "happiness" | "modern" | "romance" | "summer";
// musicCategoriesType
export type musicCategoriesType = chillMusicCategoriesType | kawaiiMusicCategoriesType;
export type chillMusicCategoriesType = typeof chillMusicCategories;
export type kawaiiMusicCategoriesType = typeof kawaiiMusicCategories;
//
export type musicIndexObjType = chillMusicIndexObjType | kawaiiMusicIndexObjType;
export type chillMusicIndexObjType = typeof chillMusicIndexObj;
export type kawaiiMusicIndexObjType = typeof kawaiiMusicIndexObj;

export const kawaiiMusicIndexObj = {
    "adventure": {
        id: 0
    },
    "fantacy": {
        id: 1
    },
    "future": {
        id: 2
    },
    "happiness": {
        id: 3
    },
    "modern": {
        id: 4
    },
    "nature": {
        id: 5
    },
    "romance": {
        id: 6
    },
    "summer": {
        id: 7
    },
};

export const kawaiiMusicCategories = [
    {
        id: "adventure",
        raw: "Adventure"
    },
    {
        id: "fantacy",
        raw: "Fantacy"
    },
    {
        id: "future",
        raw: "Future"
    },
    {
        id: "happiness",
        raw: "Happiness"
    },
    {
        id: "modern",
        raw: "Modern"
    },
    {
        id: "nature",
        raw: "Nature"
    },
    {
        id: "romance",
        raw: "Romance"
    },
    {
        id: "summer",
        raw: "Summer"
    },
];

export const kawaiiMusicBgObj = {
    "adventure": [
        "/music/kawaii/img/adventure/minecraft_4girls.jpg",
        "/music/kawaii/img/adventure/2girls_school.jpg",
        "/music/kawaii/img/adventure/gamecenter_4girls_playing.jpg",
        "/music/kawaii/img/adventure/teaching_pc_2girls.jpg",
    ],
    "fantacy": [
        "/music/kawaii/img/fantacy/2girls_reading_books.jpg",
        "/music/kawaii/img/fantacy/cute_room_ping.jpg",
        "/music/kawaii/img/fantacy/remu_looking_back.jpg",
    ],
    "future": [
        "/music/kawaii/img/future/space_rabbit.jpg",
        "/music/kawaii/img/future/pc_girl_blue.jpg",
    ],
    "happiness": [
        "/music/kawaii/img/happiness/mother_daughter_cooking.jpg",
        "/music/kawaii/img/happiness/sprey_3girls.jpg",
        "/music/kawaii/img/happiness/caffe_2girls.jpg",
    ],
    "modern": [
        "/music/kawaii/img/modern/sleeping_minicharactors_books.jpg",
        "/music/kawaii/img/modern/boss_whitehair_office.jpg",
        "/music/kawaii/img/modern/ramen_2girls.jpg",
    ],
    "nature": [
        "/music/kawaii/img/nature/angel_sky.jpg",
        "/music/kawaii/img/nature/girls_with_flower.jpg",
    ],
    "romance": [
        "/music/kawaii/img/romance/looking_back_girl.jpg",
        "/music/kawaii/img/romance/2girls_smile.jpg",
        "/music/kawaii/img/romance/3girls_smile_pic.jpg",
        "/music/kawaii/img/romance/afterschool_3girls.jpg",
        "/music/kawaii/img/romance/friends_memory_3girls.jpg",
        "/music/kawaii/img/romance/room_bed_2girls.jpg",
    ],
    "summer": [
        "/music/kawaii/img/summer/4girls_sky.jpg",
        "/music/kawaii/img/summer/3girls_dance.jpg",
        "/music/kawaii/img/summer/cat_blue_girl_room.jpg",
        "/music/kawaii/img/summer/piece_pic_2girls.jpg",
    ],
};

export const kawaiiMusicsObj = {
    "adventure": [
        {
            name: "Chocolate Adventure - adventure",
            src: "/music/kawaii/mp3/adventure/Chocolate_Adventure.mp3"
        },
        {
            name: "Electric Dream - adventure",
            src: "/music/kawaii/mp3/adventure/Electric_Dream.mp3"
        },
        {
            name: "From Zero - adventure",
            src: "/music/kawaii/mp3/adventure/From_Zero.mp3"
        },
        {
            name: "Ryokou - adventure",
            src: "/music/kawaii/mp3/adventure/Ryokou.mp3"
        },
        {
            name: "Sherbet Land - adventure",
            src: "/music/kawaii/mp3/adventure/Sherbet_Land.mp3"
        },
        {
            name: "夜空を飛んでく夢を見て",
            src: "/music/kawaii/mp3/adventure/夜空を飛んでく夢を見て.mp3"
        },

    ],
    "fantacy": [
        {
            name: "Connected World - fantacy",
            src: "/music/kawaii/mp3/fantacy/Connected_World.mp3"
        },
        {
            name: "Liftoff - fantacy",
            src: "/music/kawaii/mp3/fantacy/Liftoff.mp3"
        },
        {
            name: "Pixel Galaxy - fantacy",
            src: "/music/kawaii/mp3/fantacy/Pixel_Galaxy.mp3"
        },
        {
            name: "Starlight Wonder - fantacy",
            src: "/music/kawaii/mp3/fantacy/Starlight_Wonder.mp3"
        },
        {
            name: "シンデレラベイビー - fantacy",
            src: "/music/kawaii/mp3/fantacy/シンデレラベイビー.mp3"
        },

    ],
    "future": [
        {
            name: "曖昧サイボーグ - future",
            src: "/music/kawaii/mp3/future/Aimai_Cyborg.mp3"
        },
        {
            name: "Tokyo Future Girl - future",
            src: "/music/kawaii/mp3/future/Tokyo_Future_Girl.mp3"
        },
        {
            name: "くいしんぼハッカー - future",
            src: "/music/kawaii/mp3/future/くいしんぼハッカー.mp3"
        },
        {
            name: "ダンスフロアの果実 - future",
            src: "/music/kawaii/mp3/future/ダンスフロアの果実.mp3"
        },
        {
            name: "ピポピポ - future",
            src: "/music/kawaii/mp3/future/ピポピポ.mp3"
        },
        {
            name: "ロボティックガール - future",
            src: "/music/kawaii/mp3/future/ロボティックガール.mp3"
        },
        {
            name: "大江戸コントローラー - future",
            src: "/music/kawaii/mp3/future/大江戸コントローラー.mp3"
        },
    ],
    "happiness": [
        {
            name: "Cappuccino - happiness",
            src: "/music/kawaii/mp3/happiness/Cappuccino.mp3"
        },
        {
            name: "Jump! - happiness",
            src: "/music/kawaii/mp3/happiness/Jump!.mp3"
        },
        {
            name: "Jumping23！ - happiness",
            src: "/music/kawaii/mp3/happiness/Jumping23！.mp3"
        },
        {
            name: "ハッピーくるくる - happiness",
            src: "/music/kawaii/mp3/happiness/ハッピーくるくる.mp3"
        },
        {
            name: "ゆのみっくにお茶して - happiness",
            src: "/music/kawaii/mp3/happiness/ゆのみっくにお茶して.mp3"
        },
    ],
    "modern": [
        {
            name: "ALL DAY - modern",
            src: "/music/kawaii/mp3/modern/ALL_DAY.mp3"
        },
        {
            name: "breeze - modern",
            src: "/music/kawaii/mp3/modern/breeze.mp3"
        },
        {
            name: "Colors - modern",
            src: "/music/kawaii/mp3/modern/Colors.mp3"
        },
        {
            name: "Home Sweet Home - modern",
            src: "/music/kawaii/mp3/modern/Home_Sweet_Home.mp3"
        },
        {
            name: "HoneyComeBear - modern",
            src: "/music/kawaii/mp3/modern/HoneyComeBear.mp3"
        },
        {
            name: "hot milk - modern",
            src: "/music/kawaii/mp3/modern/hot_milk.mp3"
        },
        {
            name: "Hype - modern",
            src: "/music/kawaii/mp3/modern/Hype.mp3"
        },
        {
            name: "Kaedekko - modern",
            src: "/music/kawaii/mp3/modern/Kaedekko.mp3"
        },
        {
            name: "KATOMORI - modern",
            src: "/music/kawaii/mp3/modern/KATOMORI.mp3"
        },
        {
            name: "Mihka! X The End Kodokushi - modern",
            src: "/music/kawaii/mp3/modern/Mihka!_X_The_End_Kodokushi.mp3"
        },
        {
            name: "Pastel - modern",
            src: "/music/kawaii/mp3/modern/Pastel.mp3"
        },
        {
            name: "Ryokucha - modern",
            src: "/music/kawaii/mp3/modern/Ryokucha.mp3"
        },
        {
            name: "Tripod Baby - modern",
            src: "/music/kawaii/mp3/modern/Tripod_Baby.mp3"
        },
        {
            name: "インドア系ならトラックメイカー - modern",
            src: "/music/kawaii/mp3/modern/インドア系ならトラックメイカー.mp3"
        },
        {
            name: "ジェリーフィッシュ - modern",
            src: "/music/kawaii/mp3/modern/ジェリーフィッシュ.mp3"
        },
        {
            name: "チャイナアドバイス - modern",
            src: "/music/kawaii/mp3/modern/チャイナアドバイス.mp3"
        },
        {
            name: "ヒステリックナイトガール - modern",
            src: "/music/kawaii/mp3/modern/ヒステリックナイトガール.mp3"
        },

    ],
    "nature": [
        {
            name: "Cludspin - nature",
            src: "/music/kawaii/mp3/nature/Cloudspin.mp3"
        },
        {
            name: "Diary Line - nature",
            src: "/music/kawaii/mp3/nature/Diary_Line.mp3"
        },
        {
            name: "Fairy Light - nature",
            src: "/music/kawaii/mp3/nature/Fairy_Light.mp3"
        },
        {
            name: "Shooting star - nature",
            src: "/music/kawaii/mp3/nature/Shooting_star.mp3"
        },
        {
            name: "Sirena - nature",
            src: "/music/kawaii/mp3/nature/Sirena.mp3"
        },
        {
            name: "Twinklestar - nature",
            src: "/music/kawaii/mp3/nature/Twinklestar.mp3"
        },
        {
            name: "Yozora - nature",
            src: "/music/kawaii/mp3/nature/Yozora.mp3"
        },
        {
            name: "気楽なCloudy - nature",
            src: "/music/kawaii/mp3/nature/気楽なCloudy.mp3"
        },
        {
            name: "空色デイズ - nature",
            src: "/music/kawaii/mp3/nature/空色デイズ.mp3"
        },

    ],
    "romance": [
        {
            name: "Dont you want me - romance",
            src: "/music/kawaii/mp3/romance/Dont_you_want_me.mp3"
        },
        {
            name: "In Your Heart - romance",
            src: "/music/kawaii/mp3/romance/In_Your_Heart.mp3"
        },
        {
            name: "Remember Me - romance",
            src: "/music/kawaii/mp3/romance/Remember_Me.mp3"
        },
        {
            name: "Renai Circulation - romance",
            src: "/music/kawaii/mp3/romance/Renai_Circulation.mp3"
        },

    ],
    "summer": [
        {
            name: "Journey - summer",
            src: "/music/kawaii/mp3/summer/Journey.mp3"
        },
        {
            name: "Summer Dream - summer",
            src: "/music/kawaii/mp3/summer/Summer_Dream.mp3"
        },
    ],
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