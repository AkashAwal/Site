const CONFIG = {

    valentineName: "Sanya",
    pageTitle: "Be My Valentine 💝",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝'],
        bears: ['🧸'],
        frog: ['🐸'],
        sunflower: ['🌻']
    },

    questions: {
        first: {
            text: "Will you be mine? 💖",
            yesBtn: "Yes 🥺",
            noBtn: "No 🙈",
            secretAnswer: "Always ❤️"
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
        extreme: "Crazy love 😳💝",
        high: "So much ❤️",
        normal: "Cute 🥰"
    },

    celebration: {
        title: "You said yes 🫶",
        message: "Us forever ❤️",
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
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3",
        startText: "🎵 Play",
        stopText: "🔇 Stop",
        volume: 0.5
    }
};

window.VALENTINE_CONFIG = CONFIG;
