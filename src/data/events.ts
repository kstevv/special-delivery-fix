const events = [
    {
      title: "Chromeo",
      date: "2025-06-14",
      location: "Austin, TX",
      image: "/images/chromeo-atx-25.jpg",
      description: "Chromeo DJ set at Kingdom Nightclub on Saturday, June 14th in Austin, TX.",
      ticketUrl: "https://www.etix.com/ticket/p/50981188/chromeo-austin-kingdom-nightclub-austintx"
    },
    {
      title: "Classmatic",
      date: "2025-06-20",
      location: "Sacramento, CA",
      image: "/images/classmatic.jpg",
      description: "Classmatic is taking over LowBrau on 6/20/25 with some very special guests!",
      ticketUrl: "https://www.tixr.com/groups/specialdeliverypresents/events/lowbrau-presents-classmatic-142370?fbclid=IwY2xjawKpsIpleHRuA2FlbQIxMABicmlkETFJRVA0TUc5V1ZVM0VGQVFtAR4eizuOucgk68BKTLVsuriAL0Ymnmc3rWNJ_F5ekGQ89MGiYcK3ZSLKZSheiw_aem_ZV43C_LXyRUgDVdxFqZt0Q"
    },
    {
      title: "Tom & Collins",
      date: "2025-06-21",
      location: "Sacramento, CA",
      image: "/images/tom-collins.jpg",
      description: "Tom & Collins at LowBrau on 6/21/25 with support from Qure and Soul7!",
      ticketUrl: "https://www.tixr.com/groups/specialdeliverypresents/events/lowbrau-presents-tom-collins-140735?fbclid=IwY2xjawKpsWJleHRuA2FlbQIxMABicmlkETFJRVA0TUc5V1ZVM0VGQVFtAR4wbdeLVReWv9mifHtK8difSHhzXGWhVwAK4kfGJCKrVYmHrB-wFiQhJI-GUA_aem_oO-E4SiLGtPYYudK9BVArQ"
    },
    {
      title: "Boogie T",
      date: "2025-07-04",
      location: "Austin, TX",
      image: "/images/boogie-t-atx-25.jpg",
      description: "BOOGIE T'S July 4th Blocka Party",
      ticketUrl: "https://www.etix.com/ticket/p/43011734/boogie-ts-july-4th-blocka-party-austin-the-far-out-lounge-stage-sd-presents?eventref=fb_oea&fbclid=IwY2xjawKpsltleHRuA2FlbQIxMABicmlkETFJRVA0TUc5V1ZVM0VGQVFtAR4wbdeLVReWv9mifHtK8difSHhzXGWhVwAK4kfGJCKrVYmHrB-wFiQhJI-GUA_aem_oO-E4SiLGtPYYudK9BVArQ"
    },
    {
      title: "Muzz",
      date: "2025-08-29",
      location: "Austin, TX",
      image: "/images/muzz-atx-25.jpg",
      description: "Special Delivery Presents: Muzz @ Vulcan Gas Company on 8/29/25",
      ticketUrl: "www.etix.com/ticket/p/40220978/special-delivery-presentsmuzz-austin-vulcan-gas-co-sd-presents?eventref=fb_oea&fbclid=IwY2xjawKpswFleHRuA2FlbQIxMABicmlkETFJRVA0TUc5V1ZVM0VGQVFtAR68lyTFULc0aFKxj4LgWI5P_ayUojnlswfM-3zRoZ16Shi5t34rbLJ_06T8RA_aem_svIRi1keAZpnpQ0yIMJACg"
    },
    {
        title: "Galantis",
        date: "2025-08-31",
        location: "Austin, TX",
        image: "/images/galantis-atx-25.jpg",
        description: "Disco Presents x Special Delivery Presents x RealMusic Events present GALANTIS at The Concourse Project on 8/31/25",
        ticketUrl: "https://wl.seetickets.us/event/Galantis-at-The-Concourse-Project/645108?afflky=TheConcourseProject&fbclid=IwY2xjawKps21leHRuA2FlbQIxMABicmlkETFJRVA0TUc5V1ZVM0VGQVFtAR5-yTuM_8k0JsI5_nPAn5uxt-dnQ3M2t51uO-asj0GF_IWUe29YJR3Hi4tF3Q_aem_zdqZ1MyS9B1Kf8MAbQs_ow"
      },
      {
        title: "Zen Selekta",
        date: "2025-09-12",
        location: "San Marcos, TX",
        image: "/images/zen-selekta-atx-25.jpg",
        description: "FREE RSVP: Zen Selekta at The Marc on 9/12/25",
        ticketUrl: "https://wl.seetickets.us/event/912-or-free-rsvp-zen-selekta-at-the-marc-or-san-marcos-tx/648224?afflky=TheMarc&fbclid=IwY2xjawKptQ1leHRuA2FlbQIxMABicmlkETFJRVA0TUc5V1ZVM0VGQVFtAR4wbdeLVReWv9mifHtK8difSHhzXGWhVwAK4kfGJCKrVYmHrB-wFiQhJI-GUA_aem_oO-E4SiLGtPYYudK9BVArQ"
      },
      {
        title: "Zen Selekta",
        date: "2025-09-13",
        location: "Dallas, TX",
        image: "/images/zen-selekta-dtx-25.jpg",
        description: "Special Delivery Presents: Zen Selektra at Deep Ellum Art Co. on 9/13/25",
        ticketUrl: "https://www.tixr.com/groups/specialdeliverypresents/events/sdpresents-zen-selekta-dallas-tx-142009?fbclid=IwY2xjawKptoBleHRuA2FlbQIxMABicmlkETFJRVA0TUc5V1ZVM0VGQVFtAR4wbdeLVReWv9mifHtK8difSHhzXGWhVwAK4kfGJCKrVYmHrB-wFiQhJI-GUA_aem_oO-E4SiLGtPYYudK9BVArQ"
      },
      {
        title: "Wicked Oaks",
        date: "2025-10-25",
        location: "Austin, TX",
        image: "/images/wicked-oaks.jpg",
        description: "Wicked Oaks Music Festival at Carson Creek Ranch on 10/25/25",
        ticketUrl: "https://wickedoaksfest.com/?fbclid=IwY2xjawKpwdJleHRuA2FlbQIxMABicmlkETF4aUVCYVZGamE0Unc0U3ZqAR4dLMpRk8u2IlG2cVHRJInHgbdCXG42GbRHvfnTLpkjIf-ZojVcb8RvEfAeBQ_aem_CIfmeISf1HfDC9lj4ERM0w"
      },
  ];
  
  
  export default events;
  