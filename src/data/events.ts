const events = [
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
      image: "/images/festivals/freakazoid-robots-dtx-25.jpg",
      description: "Freakazoid Robots coming to SILO Dallas on Fri, July 25th ft. Trivecta MitiS Reaper Noises & MORE",
      ticketUrl: "https://wl.seetickets.us/event/Freakazoid-Robots-ft-Trivecta-MitiS-and-MORE-DALLAS/652647?afflky=SILO"
    },
    {
      title: "jaenga",
      date: "2025-08-15",
      location: "Dallas, TX",
      venue: "Deep Ellum Art Co.",
      image: "/images/jaenga-dtx-25.jpg",
      description: "",
      ticketUrl: "https://www.etix.com/ticket/p/87895949/jaenga-dream-machine-tour-dtx-dallas-deep-ellum-art-co-sd-presents"
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
      title: "jaenga",
      date: "2025-08-16",
      location: "Austin, TX",
      venue: "Vulcan Gas Company",
      image: "/images/jaenga-atx-25.jpg",
      description: "",
      ticketUrl: "https://www.etix.com/ticket/p/85716283/jeanga-dream-machine-tour-atx-austin-vulcan-gas-co-sd-presents"
    },
    {
      title: "Lumasi",
      date: "2025-08-29",
      location: "Dallas, TX",
      venue: "Deep Ellum Art Co.",
      image: "/images/lumasi-dtx-25.jpg",
      description: "Lumasi's Eclipse Tour ft. Milano Fika",
      ticketUrl: ""
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
      title: "Lumasi",
      date: "2025-08-30",
      location: "Dallas, TX",
      venue: "Deep Ellum Art Co.",
      image: "/images/lumasi-dtx-25.jpg",
      description: "Lumasi's Eclipse Tour ft. Milano Fika",
      ticketUrl: ""
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
      title: "YDG",
      date: "2025-09-06",
      location: "San Marcos, TX",
      venue: "The Marc",
      image: "/images/ydg-sm-25.jpg",
      description: "You + Me Forever Tour ft. Bella Renee",
      ticketUrl: "https://www.etix.com/ticket/p/97093528/ydg-you-me-forever-tour-san-marcos-the-marc-sd-presents"
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
      title: "YDG",
      date: "2025-09-13",
      location: "Dallas, TX",
      venue: "Deep Ellum Art Co.",
      image: "/images/ydg-dtx-25.jpg",
      description: "You + Me Forever Tour ft. Bella Renee",
      ticketUrl: "https://www.etix.com/ticket/p/88651139/ydg-you-me-forever-tour-dallas-deep-ellum-art-co-sd-presents"
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
      image: "/images/festivals/wicked-oaks.jpg",
      description: "Wicked Oaks Music Festival at Carson Creek Ranch on 10/25/25",
      ticketUrl: "https://wickedoaksfest.com/?fbclid=IwY2xjawKpwdJleHRuA2FlbQIxMABicmlkETF4aUVCYVZGamE0Unc0U3ZqAR4dLMpRk8u2IlG2cVHRJInHgbdCXG42GbRHvfnTLpkjIf-ZojVcb8RvEfAeBQ_aem_CIfmeISf1HfDC9lj4ERM0w"
    },
    {
      title: "Vastive",
      date: "2025-11-07",
      location: "Dallas, TX",
      venue: "The Green Elephant",
      image: "/images/vastive-dtx-25.jpg",
      description: "",
      ticketUrl: "https://www.etix.com/ticket/p/78559813/vastive-new-levels-new-devils-tour-dallas-the-green-elephant-sd-presents?laylo-fid=634e45a10f774fc383cbcd0d3504e87c&laylo-pid=4b306d62-3410-4dbf-a72a-3a726ddcad84"
    },
    {
      title: "YDG",
      date: "2025-11-08",
      location: "Houston, TX",
      venue: "9PM Music Venue",
      image: "/images/ydg-htx-25.jpg",
      description: "You + Me Forever Tour ft. Bella Renee",
      ticketUrl: "https://www.etix.com/ticket/p/98262423/ydg-you-me-forever-tour-htx-houston-9pm-presents-houstontx-sd-presents"
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
  