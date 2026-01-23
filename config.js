const CONFIG = {

    valentineName: "Sanya",
    pageTitle: "Us, this Valentine? 🌹",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝'],
        bears: ['🧸', '🐻'],
        frog: ['🐸'],
        sunflower: ['🌻']
    },

    questions: {
        first: {
            text: "You and me, forever? 💫💖",
            yesBtn: "Yes, duh 😏",
            noBtn: "No way 🙃",
            secretAnswer: "Forever 💘"
        },
        second: {
            text: "How much do you love me?",
            startText: "This much",
            nextBtn: "Next ❤️"
        },
        third: {
            text: "Valentine with me? 🌹",
            yesBtn: "Yes ❤️",
            noBtn: "No 💔"
        }
    },

    loveMessages: {
        extreme: "As it should be 😌",
        high: "Not surprising ❤️",
        normal: "I expected that 😉"
    },

    celebration: {
        title: "You said yes 🫶",
        message: "Guess we’re officially Valentines now 😌❤️",
        emojis: "💖💝✨"
    },

    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://raw.githubusercontent.com/AkashAwal/Site/main/nazdeekiyan.mp3.mp3",
        startText: "🎵 Play",
        stopText: "🔇 Stop",
        volume: 0.5
    }
};

window.VALENTINE_CONFIG = CONFIG;
