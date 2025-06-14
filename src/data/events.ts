const events = [
    {
      title: "Classmatic",
      date: "2025-06-20",
      location: "Sacramento, CA",
      venue: "LowBrau",
      image: "/images/classmatic.jpg",
      description: "Classmatic is taking over LowBrau on 6/20/25 with some very special guests!",
      ticketUrl: "https://www.tixr.com/groups/specialdeliverypresents/events/lowbrau-presents-classmatic-142370?fbclid=IwY2xjawKpsIpleHRuA2FlbQIxMABicmlkETFJRVA0TUc5V1ZVM0VGQVFtAR4eizuOucgk68BKTLVsuriAL0Ymnmc3rWNJ_F5ekGQ89MGiYcK3ZSLKZSheiw_aem_ZV43C_LXyRUgDVdxFqZt0Q"
    },
    {
      title: "Tom & Collins",
      date: "2025-06-21",
      location: "Sacramento, CA",
      venue: "LowBrau",
      image: "/images/tom-collins.jpg",
      description: "Tom & Collins at LowBrau on 6/21/25 with support from Qure and Soul7!",
      ticketUrl: "https://www.tixr.com/groups/specialdeliverypresents/events/lowbrau-presents-tom-collins-140735?fbclid=IwY2xjawKpsWJleHRuA2FlbQIxMABicmlkETFJRVA0TUc5V1ZVM0VGQVFtAR4wbdeLVReWv9mifHtK8difSHhzXGWhVwAK4kfGJCKrVYmHrB-wFiQhJI-GUA_aem_oO-E4SiLGtPYYudK9BVArQ"
    },
    {
      title: "Boogie T",
      date: "2025-07-04",
      location: "Austin, TX",
      venue: "The Far Out",
      image: "/images/boogie-t-atx-25.jpg",
      description: "BOOGIE T'S July 4th Blocka Party",
      ticketUrl: "https://www.etix.com/ticket/p/43011734/boogie-ts-july-4th-blocka-party-austin-the-far-out-lounge-stage-sd-presents?eventref=fb_oea&fbclid=IwY2xjawKpsltleHRuA2FlbQIxMABicmlkETFJRVA0TUc5V1ZVM0VGQVFtAR4wbdeLVReWv9mifHtK8difSHhzXGWhVwAK4kfGJCKrVYmHrB-wFiQhJI-GUA_aem_oO-E4SiLGtPYYudK9BVArQ"
    },
    {
      title: "Kayzo",
      date: "2025-07-25",
      location: "Dallas, TX",
      venue: "The Concourse Project",
      image: "/images/kayzo-atx-25.jpg",
      description: "",
      ticketUrl: "https://wl.seetickets.us/event/KAYZO-Unleashed-25-AUSTIN/630286?afflky=DiscoDonnie"
    },
    {
      title: "Freakazoid Robots",
      date: "2025-07-25",
      location: "Dallas, TX",
      venue: "SILO Dallas",
      image: "images/freakazoid-robots-dtx-25.jpg",
      description: "",
      ticketUrl: "https://wl.seetickets.us/event/Freakazoid-Robots-ft-Trivecta-MitiS-and-MORE-DALLAS/652647?afflky=SILO"
    },
    {
      title: "ARMNHMR",
      date: "2025-08-15",
      location: "Austin, TX",
      venue: "The Concourse Project",
      image: "/images/armnhmr-atx-25.jpg",
      description: "",
      ticketUrl: "https://wl.seetickets.us/event/ARMNHMR-AUSTIN/651286?afflky=DiscoDonnie"
    },
    {
      title: "Muzz",
      date: "2025-08-29",
      location: "Austin, TX",
      venue: "Vulcan Gas Company",
      image: "/images/muzz-atx-25.jpg",
      description: "Special Delivery Presents: Muzz @ Vulcan Gas Company on 8/29/25",
      ticketUrl: "https://www.etix.com/ticket/p/40220978/special-delivery-presentsmuzz-austin-vulcan-gas-co-sd-presents?eventref=fb_oea&fbclid=IwY2xjawKpswFleHRuA2FlbQIxMABicmlkETFJRVA0TUc5V1ZVM0VGQVFtAR68lyTFULc0aFKxj4LgWI5P_ayUojnlswfM-3zRoZ16Shi5t34rbLJ_06T8RA_aem_svIRi1keAZpnpQ0yIMJACg"
    },
    {
        title: "Galantis",
        date: "2025-08-31",
        location: "Austin, TX",
        venue: "The Concourse Project",
        image: "/images/galantis-atx-25.jpg",
        description: "Disco Presents x Special Delivery Presents x RealMusic Events present GALANTIS at The Concourse Project on 8/31/25",
        ticketUrl: "https://wl.seetickets.us/event/Galantis-at-The-Concourse-Project/645108?afflky=TheConcourseProject&fbclid=IwY2xjawKps21leHRuA2FlbQIxMABicmlkETFJRVA0TUc5V1ZVM0VGQVFtAR5-yTuM_8k0JsI5_nPAn5uxt-dnQ3M2t51uO-asj0GF_IWUe29YJR3Hi4tF3Q_aem_zdqZ1MyS9B1Kf8MAbQs_ow"
      },
      {
        title: "Reaper Noises",
        date: "2025-09-05",
        location: "San Marcos, TX",
        venue: "The Marc",
        image: "/images/reaper-noises-san-marcos-25.jpg",
        description: "",
        ticketUrl: "https://www.etix.com/ticket/p/81239088/reaperboneyard-tour-san-marcos-the-marc-sd-presents"
      },
      {
        title: "Flowdan",
        date: "2025-09-06",
        location: "Austin, TX",
        venue: "Vulcan Gas Company",
        image: "/images/flowdan-atx-25.jpg",
        description: "",
        ticketUrl: "https://www.etix.com/ticket/p/43343806/flowdan-austin-vulcan-gas-co-sd-presents"
      },
      {
        title: "Zen Selekta",
        date: "2025-09-12",
        location: "San Marcos, TX",
        venue: "The Marc",
        image: "/images/zen-selekta-san-marcos-25.jpg",
        description: "FREE RSVP: Zen Selekta at The Marc on 9/12/25",
        ticketUrl: "https://wl.seetickets.us/event/912-or-free-rsvp-zen-selekta-at-the-marc-or-san-marcos-tx/648224?afflky=TheMarc&fbclid=IwY2xjawKptQ1leHRuA2FlbQIxMABicmlkETFJRVA0TUc5V1ZVM0VGQVFtAR4wbdeLVReWv9mifHtK8difSHhzXGWhVwAK4kfGJCKrVYmHrB-wFiQhJI-GUA_aem_oO-E4SiLGtPYYudK9BVArQ"
      },
      {
        title: "Zen Selekta",
        date: "2025-09-13",
        location: "Dallas, TX",
        venue: "Deep Ellum Art Co.",
        image: "/images/zen-selekta-dtx-25.jpg",
        description: "Special Delivery Presents: Zen Selektra at Deep Ellum Art Co. on 9/13/25",
        ticketUrl: "https://www.tixr.com/groups/specialdeliverypresents/events/sdpresents-zen-selekta-dallas-tx-142009?fbclid=IwY2xjawKptoBleHRuA2FlbQIxMABicmlkETFJRVA0TUc5V1ZVM0VGQVFtAR4wbdeLVReWv9mifHtK8difSHhzXGWhVwAK4kfGJCKrVYmHrB-wFiQhJI-GUA_aem_oO-E4SiLGtPYYudK9BVArQ"
      },
      {
        title: "Getter",
        date: "2025-10-17",
        location: "San Marcos, TX",
        venue: "The Marc",
        image: "/images/getter-san-marcos-25.jpg",
        description: "",
        ticketUrl: "https://www.etix.com/ticket/p/96858894/getter-san-marcos-the-marc-sd-presents"
      },
      {
        title: "Wicked Oaks",
        date: "2025-10-25",
        location: "Austin, TX",
        venue: "Carson Creek Ranch",
        image: "/images/wicked-oaks.jpg",
        description: "Wicked Oaks Music Festival at Carson Creek Ranch on 10/25/25",
        ticketUrl: "https://wickedoaksfest.com/?fbclid=IwY2xjawKpwdJleHRuA2FlbQIxMABicmlkETF4aUVCYVZGamE0Unc0U3ZqAR4dLMpRk8u2IlG2cVHRJInHgbdCXG42GbRHvfnTLpkjIf-ZojVcb8RvEfAeBQ_aem_CIfmeISf1HfDC9lj4ERM0w"
      },
      {
        title: "Heyz",
        date: "2025-11-14",
        location: "Austin, TX",
        venue: "Kingdom",
        image: "/images/heyz-atx-25.jpg",
        description: "",
        ticketUrl: "https://www.etix.com/ticket/p/70283689/heyz-and-confused-tour-atx-austin-kingdom-night-club-sd-presents?laylo-fid=634e45a10f774fc383cbcd0d3504e87c&laylo-pid=a0a1688b-ed5a-4ffd-9dcc-1bd4ff68a4e6"
      },
      {
        title: "Bear Grillz",
        date: "2025-11-15",
        location: "Austin, TX",
        venue: "Vulcan Gas Company",
        image: "/images/bear-grillz-atx-25.jpg",
        description: "",
        ticketUrl: "https://www.etix.com/ticket/p/37845312/bear-grillz-austin-vulcan-gas-co-sd-presents"
      },
      {
        title: "Heyz",
        date: "2025-11-15",
        location: "Dallas, TX",
        venue: "Deep Elluim Art Co.",
        image: "/images/heyz-dtx-25.jpg",
        description: "",
        ticketUrl: "https://www.etix.com/ticket/p/68400655/heyz-and-confused-tour-dtx-dallas-deep-ellum-art-co-sd-presents?laylo-fid=634e45a10f774fc383cbcd0d3504e87c&laylo-pid=8e3b12e8-33d0-4862-a2cc-4fa34696d9df"
      },
  ];
  
  
  export default events;
  