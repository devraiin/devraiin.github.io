class _app {
  id = 0;
  videoElement = null;
  audioElement = null;
  musicVolume = 0.12;
  musicFadeIn = 4000;
  skippedIntro = false;
  backgroundToggler = false;
  shouldIgnoreVideo = false;
  effects = ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello'];
  brandDescription = ['software engineer', 'reverse engineer', 'back end developer', 'c++ / c', 'software engineer', 'meow'];

  iconChanger = (urls, delay) => {
    if (!urls) return;

    delay = delay || 2000;

    let counter = 0;

    setInterval(() => {
      if (counter < urls.length) {
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link');

        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = urls[counter];

        document.getElementsByTagName('head')[0].appendChild(link);
      } else counter = 0;

      ++counter;
    }, delay);
  };

  playMusic = (musicUrl) => {
    if (!musicUrl) return;

   
    if (!this.audioElement) {
      this.audioElement = new Audio();
      this.audioElement.volume = this.musicVolume;
    }

    this.audioElement.src = musicUrl; 
    this.audioElement.loop = true; 
    this.audioElement.play().catch((err) => {
      console.error("Error playing music:", err);
    });
  };
}

const app = new _app();
app.playMusic('assets/song.mp3');
