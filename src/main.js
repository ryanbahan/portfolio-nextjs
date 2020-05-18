// function workPageAnimation() {
//   const timeline = gsap.timeline({defaults:{duration: 1}});
//
//   timeline
//   .to(".partial-bg", {x: -500, scaleX: 0, ease: 'Power2.easeInOut', duration: 0.5})
//   .to('.firstname', {y: -200, opacity: 0, duration: 0.75}, "-=0.5")
//   .to('.lastname', {y: -200, opacity: 0, duration: 0.75}, "-=0.5")
//   .to('.skills-1', {opacity: 0.25, x: 5000, scaleY: 300, scaleX: 200, duration: 1.75}, "-=1")
//   .to('.skills-2', {opacity: 0, scaleY: 0, rotationX: 90, duration: 0.25}, "-=1.25")
//   .to('.skills-3', {opacity: 0, scaleY: 0, rotationX: 90, duration: 0.25}, "-=1.5")
//
// }
//
// function contentAnimation() {
//   console.log('content');
//   const timeline = gsap.timeline();
//
//   timeline.from('nav', {duration: 1.5, scaleY: 0})
// }
//
// function delay(n = 2000) {
//   return new Promise(done => {
//     setTimeout(() => {
//       done();
//     }, n)
//   })
// }
//
// function homePageAnimation() {
//     generateHomePoints();
//     const timeline = gsap.timeline({defaults:{duration: 1}});
//
//     timeline.from(".partial-bg", {opacity: 0, xPercent: -125, duration: 1.25, ease: 'Power2.easeInOut'})
//     .from('.firstname', {y: -20, opacity: 0, duration: 0.75}, "-=0.15")
//     .from('.lastname', {y: -20, opacity: 0, duration: 0.75}, "-=0.45")
//     .from('.skills-1', {opacity: 0, scaleY: 0, rotationX: 90, duration: 0.25}, "-=0.10")
//     .from('.skills-2', {opacity: 0, scaleY: 0, rotationX: 90, duration: 0.25}, "+=0.15")
//     .from('.skills-3', {opacity: 0, scaleY: 0, rotationX: 90, duration: 0.25}, "+=0.15")
//     .from('nav', {y: -150, duration: 2, ease: "expo.out"})
//     .from('.fa-github', {opacity: 0}, "-=0.75")
//     .from('.fa-linkedin-in', {opacity: 0}, "-=0.75")
//     .from('.fa-envelope-square', {opacity: 0}, "-=0.75");
// }
//
//
// barba.init({
//
//   sync: true,
//
//   transitions: [{
//
//     async leave(data) {
//       const done = this.async();
//
//       workPageAnimation();
//       await delay(1500);
//       done();
//
//     },
//
//     // async enter(data) {
//     //   console.log('enter');
//     //   contentAnimation();
//     // },
//
//     async once(data) {
//       console.log('once');
//       homePageAnimation();
//     }
//
//   }]
// });



export function generateHomePoints() {
  Pts.namespace(window);

  // Pts quick start mode.
  var run = Pts.quickStart("#home-points", "#f1f3f7");

  run( (time, ftime) => {

    // create a line and get 200 interpolated points
    let offset = space.size.$multiply(0.2).y;
    let line = new Group( new Pt( 0, offset ), new Pt( space.size.x, space.size.y-offset ) );
    let pts = Line.subpoints( line, 200 );

    // get perpendicular unit vectors from each points on the line
    let pps = pts.map( (p) => Geom.perpendicular( p.$subtract( line[0] ).unit() ).add(p) );

    // let angle = space.pointer.x/space.size.x * Const.two_pi * 2;
    // version without mouse events
    let angle = space.size.x * Const.two_pi * 2;

    // draw each perpendicular like a sine-wave
    pps.forEach( (pp, i) => {
      let t = i/200 * Const.two_pi + angle + Num.cycle(time%10000/10000);

      if (i%2===0) {
        pp[0].to( Geom.interpolate( pts[i], pp[0], Math.sin( t )*offset*2 ) );
        pp[1].to( pts[i] );
        form.stroke("#0c6", 2).line(pp);
      } else {
        pp[0].to( pts[i] );
        pp[1].to( Geom.interpolate( pts[i], pp[1], Math.cos( t )*offset*2 ) );
        form.stroke("#f03", 2).line(pp);
      }

    });

  });

};

// generateHomePoints();
