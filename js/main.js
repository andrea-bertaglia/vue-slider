const { createApp } = Vue;

createApp({
  data() {
    return {
      activeIndex: 0,
      isActive: false,
      clock: null,
      images: [
        {
          image: "img/01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
    };
  },
  methods: {
    showNext: function () {
      if (this.activeIndex < this.images.length - 1) {
        this.activeIndex++;
        console.log(this.activeIndex);
        this.changeClass();
      } else {
        this.activeIndex = 0;
        console.log(this.activeIndex);
      }
    },
    showPrev: function () {
      if (this.activeIndex !== 0) {
        this.activeIndex--;
        console.log(this.activeIndex);
        this.changeClass();
      } else {
        this.activeIndex = this.images.length - 1;
        console.log(this.activeIndex);
      }
    },
    changeClass: function () {
      this.isActive = !this.isActive;
    },
    playCarousel: function () {
      if (!this.clock) {
        this.clock = setInterval(this.showNext, 3000);
        console.log(this.clock, "start carousel");
      } else {
        clearInterval(this.clock);
        this.clock = null;
        console.log(this.clock, "stop carousel");
      }
    },
    reverseDirection: function () {
      console.log(this.clock);
      if (this.clock !== null) {
        clearInterval(this.clock);
        this.clock = setInterval(this.showPrev, 3000);
        console.log(this.clock, "reverse");
      }
    },
  },
}).mount("#app");
