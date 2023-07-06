import React, { Component } from 'react'
import {Link} from'react-router-dom';
import Parallax from 'parallax-js'
import VanillaTilt from 'vanilla-tilt';
import anime from 'animejs';
// import gsap from 'gsap';
export default class home extends Component {
    constructor(props){
        super(props);
        this.state={
            load:false,
        }
        this.myFullpage = null
        this.interval = null
    }
    sleep = (time) =>{
        return new Promise((resolve) => setTimeout(resolve, time));
      }
    componentDidMount(){
        document.title = "Portfolio | Aryan Raj";
        // $(".fillpage").css("height","0vh")
        this.sleep(0).then(()=>{
        this.setState({load:true})
        $('.venobox').venobox({
            framewidth : 'auto',
            frameheight: 'auto',
            'share': false
          });
          this.myFullpage = new fullpage('#fullpage', {
            licenseKey: null,
            verticalCentered: false,
            autoScrolling: true,
            scrollingSpeed:1e3,
            dragAndMove: true,
            animateAnchor:false,
            lockAnchors: false,
            anchors: ['home', 'about', 'projects', 'contact'],
            // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke'],
            // scrollBar: true,
            responsiveHeight: 600,
            // easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
            easingcss3: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
            afterRender: function(origin){
                // if (origin.index == 0) {
                //     var tiltTimeline = gsap.timeline({delay:0.5})
                //     tiltTimeline.fromTo(`#${origin.item.id} .d1`,{opacity:0},{opacity:1,duration:0.5})
                //                 .fromTo(`#${origin.item.id} .d2`,{width:'10%',height:'10%'},{width:'90%',height:'90%',ease:"elastic.out(1,0.3)",duration:1})
                //                 .fromTo(`#${origin.item.id} .d7`,{opacity:0,scale:0},{opacity:1,scale:1,ease:"elastic.out(1,0.3)",duration:1.5})
                //     var tl = gsap.timeline({delay:0.5,defaults:{duration:1.5}})
                //     tl.fromTo(`#${origin.item.id} .meta-title`,{x:-100,opacity:0},{x:0,opacity:1,ease:"elastic.out(1,0.3)",})
                //       .fromTo(`#${origin.item.id} .name`,{opacity:0,scale:0},{opacity:1,scale:1,ease:"elastic.out(1,0.3)"},"-=1")
                //       .fromTo([`#${origin.item.id} .desc1`,`#${origin.item.id} .desc2`,`#${origin.item.id} .desc3`],{x:-100,opacity:0},{x:0,opacity:1,stagger:0.5}, "-=1")
                // }
                anime({
                    targets: '.fillpage',
                    height:["100vh","0vh"],
                    duration:500,
                    delay:200,
                    easing: 'linear'
                })
                if (origin.index==0) {
                    var tiltTimeline = anime.timeline({duration:500,delay:700})
                    tiltTimeline.add({
                        targets: `#${origin.item.id} .d1`,
                        opacity:[0,1],
                        duration:100,
                        easing: 'linear'
                      });
                      tiltTimeline.add({
                        targets: `#${origin.item.id} .d2`,
                        width:['0%','90%'],
                        height: ['0%','90%'],
                      });
                      tiltTimeline.add({
                        targets: `#${origin.item.id} .d7`,
                        scale: [0, 1],
                        opacity:[0,1],
                      }, "-=600");
                    var animeTl = anime.timeline({delay:700})
                    animeTl.add({
                        targets: `#${origin.item.id} .name`,
                        scale: [0, 1],
                        opacity:[0,1],
                        duration:1000,
                    });
                    animeTl.add({
                        targets: [`#${origin.item.id} .desc1`,`#${origin.item.id} .desc2`,`#${origin.item.id} .desc3`],
                        translateX:  [-100, 0],
                        opacity:[0, 1],
                        duration:1000,
                        delay: anime.stagger(50)
                    },"-=500");
                }
            },
            onLeave: function(origin, destination, direction){
                // if (destination.index == 0) {
                //     var tiltTimeline = gsap.timeline({delay:0.5})
                //     tiltTimeline.fromTo(`#${destination.item.id} .d1`,{opacity:0},{opacity:1,duration:0.5})
                //                 .fromTo(`#${destination.item.id} .d2`,{width:'10%',height:'10%'},{width:'90%',height:'90%',ease:"elastic.out(1,0.3)",duration:1})
                //                 .fromTo(`#${destination.item.id} .d7`,{opacity:0,scale:0},{opacity:1,scale:1,ease:"elastic.out(1,0.3)",duration:1.5})
                // }
                // var tl = gsap.timeline({delay:0.5,defaults:{duration:1.5}})
                //     tl.fromTo(`#${destination.item.id} .meta-title`,{x:-100,opacity:0},{x:0,opacity:1,ease:"elastic.out(1,0.3)",})
                //       .fromTo(`#${destination.item.id} .name`,{opacity:0,scale:0},{opacity:1,scale:1,ease:"elastic.out(1,0.3)"},"-=1")
                //       .fromTo([`#${destination.item.id} .desc1`,`#${destination.item.id} .desc2`,`#${destination.item.id} .desc3`],{x:-100,opacity:0},{x:0,opacity:1,stagger:0.5}, "-=1")
                if (destination.index==0) {
                    var tiltTimeline = anime.timeline({duration:500,delay:700})
                    tiltTimeline.add({
                        targets: `#${destination.item.id} .d1`,
                        opacity:[0,1],
                        duration:100,
                        easing: 'linear'
                      });
                      tiltTimeline.add({
                        targets: `#${destination.item.id} .d2`,
                        width:['0%','90%'],
                        height: ['0%','90%'],
                      });
                      tiltTimeline.add({
                        targets: `#${destination.item.id} .d7`,
                        scale: [0, 1],
                        opacity:[0,1],
                      }, "-=600");
                }
                if(destination.index == 0 || destination.index == 1 || destination.index == 2 || destination.index == 3){
                    var animeTl = anime.timeline({delay:700})
                    animeTl.add({
                        targets: `#${destination.item.id} .name`,
                        scale: [0, 1],
                        opacity:[0,1],
                        duration:1000,
                    });
                    animeTl.add({
                        targets: [`#${destination.item.id} .desc1`,`#${destination.item.id} .desc2`,`#${destination.item.id} .desc3`],
                        translateX:  [-100, 0],
                        opacity:[0, 1],
                        duration:1000,
                        delay: anime.stagger(50)
                    },"-=500");
                }
                // if(destination.index == 2){
                //     var animeTl = anime.timeline({delay:700})
                //     animeTl.add({
                //         targets: `#${destination.item.id} .meta-title`,
                //         translateX: [-100, 0],
                //         opacity:[0,1],
                //         duration:1000
                //     });
                //     animeTl.add({
                //         targets: `#${destination.item.id} .viewMore`,
                //         width: ["0%","100%"],
                //         duration:1000
                //     },"-=1500");
                //     animeTl.add({
                //         targets: `#${destination.item.id} .viewMore button`,
                //         opacity:[0,1],
                //         scale: [0, 1],
                //         duration:1000
                //     },"-=1000");
                // }
                // if(destination.index == 3){
                //     var animeTl = anime.timeline({delay:700})
                //     animeTl.add({
                //         targets: `#${destination.item.id} .meta-title`,
                //         translateX: [-100, 0],
                //         opacity:[0,1],
                //         duration:1000
                //     });
                // }
            },
        });
          var tilt = document.getElementById('Tilt')
          VanillaTilt.init(tilt);
          var scene = document.getElementById('drops')
          var parallaxInstance = new Parallax(scene);
          $('.drop').css("left","")
        this.interval = setInterval(this.bubble, 150);
    })
    }
    bubble = () =>{
        const section = document.getElementById('section2')
        const creatElement = document.createElement('i')
        var size = Math.random() * 60
        creatElement.style.width = size + 'px'
        creatElement.style.height = size + 'px'
        creatElement.style.left = Math.random() * innerWidth + 'px'
        section.appendChild(creatElement)

        setTimeout(()=>{
            creatElement.remove()
        },4000)
    }
    componentWillUnmount(){
        this.myFullpage.destroy('all');
        clearInterval(this.interval);
    }
    componentDidUpdate(){
        $(".owl-carousel").owlCarousel({
            autoplay: true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            dots: false,
            loop: true,
            nav:false,
            margin:30,
            smartSpeed:450,
            responsive: {
              0: {
                items: 1
              },
              768: {
                items: 2
              },
              992:{
                  items : 3
              }
            }
          });
     }
    render() {
        if(this.state.load == false) return null
        return (<>
            <div className="content" id="fullpage">
            <section id="section0" className="section">
                <div className="d1" id="Tilt" data-tilt data-tilt-max="5" data-tilt-reset="false" data-tilt-full-page-listening>
                        <div className="d2">
                            <div className="d3">
                                <div className="d4">
                                <div className="d5">
                                <div className="d6">
                                <h3 className="d7">Portfolio</h3> 
                                </div>
                                </div>  
                                </div>       
                            </div>    
                    </div>
                    </div>
                <div className="container position-relative maxHeight">
                    <div className="meta-body">
                        <h1 className="name">Aryan <br /> Raj </h1>
                        <span className="desc1 text-white">Student,</span><span className="desc2 ml-2 text-white">Developer,</span><span className="desc3 ml-4 text-white">Freelancer</span>
                    </div>
                </div>
            </section>
            <section id="section1" className="section">
                <div id="drops">
                    <div className="drop" data-depth="0.5"></div>
                    <div className="drop" data-depth="0.7"></div>
                    <div className="drop" data-depth="0.9"></div>
                    <div className="drop" data-depth="0.3"></div>
                </div>
            <div className="container position-relative maxHeight">
                    <div className="container-body">
                        <h1 className="name">About <br /> Me</h1>
                        <h2 className="text-white ml-3 meta-desc desc1"><span>I'm an student who loves to code, visualize and build new stuff.</span></h2>
                        <div className="knowMore desc3 ml-3">
                            <Link to="/about"><button className="btn btn-outline-danger btn-lg">Know More</button></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section2" className="section">
            <div className="placeholder-img d-flex align-items-center"><img src="/assets/img/projects.png" alt="Project Placeholder" /></div>
                <div className="float-projects"></div>
                <div className="container position-relative maxHeight">

                    <div className="container-body">
                        <h1 className="name">Projects</h1>
                        <h2 className="text-white ml-3 desc1"><span className="row"><a className="venobox" data-vbtype="inline" href="#practica"><div className="project-tag">Practica</div></a><a className="venobox" data-vbtype="inline" href="#oddsKiller"><div className="project-tag">OddsKiller</div></a><a className="venobox" data-vbtype="inline" href="#emailScheduler"><div className="project-tag">Email Scheduler</div></a></span></h2>
                        <div className="knowMore desc3 ml-3">
                            <Link to="/projects"><button className="btn btn-outline-danger btn-lg">All Projetcs</button></Link>
                        </div>
                    </div>
                    <div id="oddsKiller" className="none">
                        <div className="container">
                        </div>
                        <div className="card mb-3">
                            <img className="card-img-top" src="/assets/img/OddsKiller.gif" alt="OddsKiller Preview" />
                            <div className="card-body">
                                <h5 className="card-title">OddsKiller</h5>
                                <p className="card-text">An sports betting web app created for client. User can buy subscription and then view data scrapped and use those data to place bets to maximize their profit.
                                <h6>Goals =></h6>
                                    <ol>
                                        <li>To convert web scrapping script into Django view</li>
                                        <li>Creating and managing Subscriber (Paypal Api)</li>
                                        <li>Creating User Interface</li>
                                        <li>Hosting and deploying App.</li>
                                    </ol></p>
                            </div>
                            <div className="card-footer bg-transparent"><a href="https://www.oddskiller.co.uk/" target="_blank"><button className="icon ri-global-line"></button></a></div>
                        </div>
                    </div>
                    <div id="emailScheduler" className="none">
                        <div className="container">
                        </div>
                        <div className="card mb-3">
                            <img className="card-img-top" src="/assets/img/email_scheduler.jpg" alt="Email Scheduler preview" />
                            <div className="card-body">
                                <h5 className="card-title">Email Scheduler</h5>
                                <p className="card-text">It is an Email Scheduler built using MERN Statck to schedule your emails to be delivered in a recurring manner.</p>
                            </div>
                                <div className="card-footer bg-transparent">
                                    <a href="https://github.com/aryaraj132/EmailAutomation-MERN" target="_blank"><button
                                            className="icon ri-github-fill"></button></a>
                                    <a href="https://email-automation-mern.herokuapp.com/" target="_blank"><button
                                            className="icon ri-global-line"></button></a>
                                </div>
                        </div>
                    </div>
                    <div id="practica" className="none">
                        <div className="container">
                        </div>
                        <div className="card mb-3">
                            <img className="card-img-top" src="/assets/img/practica.gif" alt="FaceDetection Preview" />
                            <div className="card-body">
                                <h5 className="card-title">Practica</h5>
                                <p className="card-text">
                                            <ul>
                                                <li>Built a Full Stack learning app with Django and React.</li>
                                                <li>Designed complete database according to client’s instructions.</li>
                                                <li>Developed an admin panel to handle transactions and mentors.</li>
                                                <li>Developed a custom React calendar to schedule bookings.</li>
                                                <li>Implemented video calling using Twilio API with PayPal’s payments gateway.</li>
                                                <li>Tested and Deployed on AWS ec2 instance.</li>
                                                <li>Key Features : 
                                                    <ul>
                                                        <li>User authentication,</li>
                                                        <li>CRUD user operations,</li>
                                                        <li>Slots and Bookings handling,</li>
                                                        <li>Mentor-Mentee video session,</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </p>
                            </div>
                                <div className="card-footer bg-transparent">
                                    
                                </div>
                        </div>
                    </div>
                </div> 
            </section>
            <section id="section3" className="section">
                <div className="container position-relative maxHeight">
                <span className="meta-title">Contact</span>
                    <div className="meta-body">
                        <h1 className="name">Contact<br /> ME</h1>
                        <span className="desc1 text-white"><a className="text-white" href="mailto:aryaraj132@gmail.com">aryaraj132@gmail.com</a></span><br /><span className="desc2 ml-2 text-white"><a href="https://twitter.com/aryanankit_raj" target="_blank"><i class="ri-twitter-fill"></i></a> &nbsp; &nbsp; <a href="https://www.linkedin.com/in/aryaraj132" target="_blank"><i class="ri-linkedin-fill"></i></a></span>
                    </div>
                </div>
                <div className="placeholder-img d-flex align-items-center"><img src="/assets/img/contact.svg" alt="Contact Placeholder" /></div>
            </section>
            </div>
            </>
        )
    }
}
