const config = window.VALENTINE_CONFIG;

document.title = config.pageTitle;

window.addEventListener('DOMContentLoaded', () => {

    document.getElementById('valentineTitle').textContent = `${config.valentineName}, my love...`;

    document.getElementById('question1Text').textContent = config.questions.first.text;
    document.getElementById('yesBtn1').textContent = config.questions.first.yesBtn;
    document.getElementById('noBtn1').textContent = config.questions.first.noBtn;
    document.getElementById('secretAnswerBtn').textContent = config.questions.first.secretAnswer;

    document.getElementById('question2Text').textContent = config.questions.second.text;
    document.getElementById('startText').textContent = config.questions.second.startText;
    document.getElementById('nextBtn').textContent = config.questions.second.nextBtn;

    document.getElementById('question3Text').textContent = config.questions.third.text;
    document.getElementById('yesBtn3').textContent = config.questions.third.yesBtn;
    document.getElementById('noBtn3').textContent = config.questions.third.noBtn;

    createFloatingElements();
    setupMusicPlayer();
    setInitialPosition();
});

/* ================= FLOATING EMOJIS ================= */

function createFloatingElements() {
    const container = document.querySelector('.floating-elements');

    const allEmojis = [
        ...config.floatingEmojis.hearts,
        ...config.floatingEmojis.bears,
        ...config.floatingEmojis.frog,
        ...config.floatingEmojis.sunflower
    ];

    for (let i = 0; i < 28; i++) {
        const div = document.createElement('div');
        div.className = 'floating-emoji';
        div.innerHTML = allEmojis[Math.floor(Math.random() * allEmojis.length)];
        setRandomPosition(div);
        container.appendChild(div);
    }
}

function setRandomPosition(el) {
    el.style.left = Math.random() * 100 + 'vw';
    el.style.animationDelay = Math.random() * 6 + 's';
    el.style.animationDuration = 10 + Math.random() * 18 + 's';
}

/* ================= QUESTIONS ================= */

function showNextQuestion(n) {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    document.getElementById(`question${n}`).classList.remove('hidden');
}

function moveButton(btn) {
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

/* ================= LOVE METER (INFINITE) ================= */

const loveMeter = document.getElementById('loveMeter');
const loveValue = document.getElementById('loveValue');
const extraLove = document.getElementById('extraLove');

function setInitialPosition() {
    loveMeter.value = 100;
    loveValue.textContent = 100;
    loveMeter.style.width = '100%';
}

loveMeter.addEventListener('input', () => {
    const value = parseInt(loveMeter.value);
    loveValue.textContent = value;

    if (value > 100) {
        extraLove.classList.remove('hidden');

        // 🔥 INFINITE WIDTH EFFECT (RESTORED)
        const overflow = (value - 100) / 9900;
        const extraWidth = overflow * window.innerWidth * 0.9;
        loveMeter.style.width = `calc(100% + ${extraWidth}px)`;
        loveMeter.style.transition = 'width 0.25s ease';

        if (value >= 5000) {
            extraLove.textContent = config.loveMessages.extreme;
            extraLove.classList.add('super-love');
        } 
        else if (value > 1000) {
            extraLove.textContent = config.loveMessages.high;
            extraLove.classList.remove('super-love');
        } 
        else {
            extraLove.textContent = config.loveMessages.normal;
            extraLove.classList.remove('super-love');
        }

    } else {
        extraLove.classList.add('hidden');
        loveMeter.style.width = '100%';
    }
});

/* ================= CELEBRATION ================= */

function celebrate() {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    const celebration = document.getElementById('celebration');
    celebration.classList.remove('hidden');

    document.getElementById('celebrationTitle').textContent = config.celebration.title;
    document.getElementById('celebrationMessage').textContent = config.celebration.message;
    document.getElementById('celebrationEmojis').textContent = config.celebration.emojis;
}

/* ================= MUSIC ================= */

function setupMusicPlayer() {
    const musicControls = document.getElementById('musicControls');
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const musicSource = document.getElementById('musicSource');

    if (!config.music.enabled) {
        musicControls.style.display = 'none';
        return;
    }

    musicSource.src = config.music.musicUrl;
    bgMusic.volume = config.music.volume || 0.5;
    bgMusic.load();

    if (config.music.autoplay) {
        bgMusic.play().catch(() => {});
    }

    musicToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.textContent = config.music.stopText;
        } else {
            bgMusic.pause();
            musicToggle.textContent = config.music.startText;
        }
    });
}
