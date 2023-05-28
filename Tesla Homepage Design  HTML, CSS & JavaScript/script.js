var animation = gsap.timeline();





animation.fromTo(".title",
                {y: 25, opacity: 0},
                {y:0, opacity: 1, ease: "easeInQuad"})

         .fromTo(".link",
                {y: 30, opacity: 0},
                {y:0, opacity: 1, ease: "easeInQuad"})

         .fromTo(".primary",
                {y: -25, opacity: 0},
                {y:0, opacity: 1, ease: "easeInQuad"})

         .fromTo(".secondary",
                {y: 25, opacity: 0},
                {y:0, opacity: 1, ease: "easeInQuad"})