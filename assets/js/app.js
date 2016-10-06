(function() {
  var app = angular.module('Store', []);

  app.controller('StoreController', function(){
    this.products = items;
  });

  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });

    
    
    /* Mockup database data stored in class array */
  var items = [
    {
      name: 'Sandisk Ultra 3X Micro SD',
      price: 500000,
      images: 'assets/img/products/sandisk3x.jpg',
      category: 'elektronik',
      bestPrice: false,
      soldOut: false
    },
    {
      name: 'Orico Mini Display Port Male',
      price: 200000,
      images: 'assets/img/products/orico-mini-display-port-male-to-dvi-female-adapter-dmp3d.jpg',
      category: 'elektronik',
      bestPrice: false,
      soldOut: false
    },
    {
      name: 'JakartaNotebook Stylus Pen',
      price: 1100,
      images: 'assets/img/products/jakartanotebook-stylus-pen-b.jpg',
      category: 'elektronik',
      bestPrice: true,
      soldOut: false
    },
    {
      name: 'EVA Penyimpan Earphone',
      price: 150000,
      images: 'assets/img/products/eva-kotak-penyimpanan-earphone-aksesoris-gadget.jpg',
      category: 'elektronik',
      bestPrice: false,
      soldOut: true
    },
    {
      name: 'Sandisk Ultra 3X Micro SD',
      price: 300000,
      images: 'assets/img/products/sandisk3x.jpg',
      category: 'elektronik',
      bestPrice: true,
      soldOut: false
    },
    {
      name: 'EVA Penyimpan Earphone',
      price: 110500,
      images: 'assets/img/products/eva-kotak-penyimpanan-earphone-aksesoris-gadget.jpg',
      category: 'elektronik',
      bestPrice: false,
      soldOut: true
    },    
    {
      name: 'JakartaNotebook Stylus Pen',
      price: 5000,
      images: 'assets/img/products/jakartanotebook-stylus-pen-b.jpg',
      category: 'elektronik',
      bestPrice: false,
      soldOut: true
    },
    {
      name: 'Orico Mini Display Port Male',
      price: 120000,
      images: 'assets/img/products/orico-mini-display-port-male-to-dvi-female-adapter-dmp3d.jpg',
      category: 'elektronik',
      bestPrice: false,
      soldOut: true
    },
    {
      name: 'Payung Transparan PVC Apollo',
      price: 120000,
      images: 'assets/img/products/payung-transparan-pvc-apollo-rain-umbrella-60c.jpg',
      category: 'fashion',
      bestPrice: false,
      soldOut: false
    },
    {
      name: 'Kacamata Hitam Polarized Magnesium',
      price: 160000,
      images: 'assets/img/products/kacamata-hitam-polarized-magnesium-sunglasses-untuk-pria-wanita.jpg',
      category: 'fashion',
      bestPrice: true,
      soldOut: false
    },
    {
      name: 'Sendal Sepatu Slip On Breathable',
      price: 500000,
      images: 'assets/img/products/sendal-sepatu-slip-on-breathable-casual-mens-sandals.jpg',
      category: 'fashion',
      bestPrice: false,
      soldOut: true
    },
    {
      name: 'Topi Baseball Snapback Breakdowns',
      price: 300000,
      images: 'assets/img/products/topi-baseball-snapback-breakdowns-leisure-sport-fashion.jpg',
      category: 'fashion',
      bestPrice: false,
      soldOut: false
    },
    {
      name: 'Sendal Sepatu Slip On Breathable',
      price: 500000,
      images: 'assets/img/products/sendal-sepatu-slip-on-breathable-casual-mens-sandals.jpg',
      category: 'fashion',
      bestPrice: false,
      soldOut: true
    },
    {
      name: 'Topi Baseball Snapback Breakdowns',
      price: 300000,
      images: 'assets/img/products/topi-baseball-snapback-breakdowns-leisure-sport-fashion.jpg',
      category: 'fashion',
      bestPrice: false,
      soldOut: false
    },
    {
      name: 'Payung Transparan PVC Apollo',
      price: 120000,
      images: 'assets/img/products/payung-transparan-pvc-apollo-rain-umbrella-60c.jpg',
      category: 'fashion',
      bestPrice: false,
      soldOut: false
    },
    {
      name: 'Kacamata Hitam Polarized Magnesium',
      price: 160000,
      images: 'assets/img/products/kacamata-hitam-polarized-magnesium-sunglasses-untuk-pria-wanita.jpg',
      category: 'fashion',
      bestPrice: true,
      soldOut: false
    },
    {
      name: 'Ninja Turtle 6 in 1 Action Figure',
      price: 500000,
      images: 'assets/img/products/ninja-turtle-6-in-1-action-figure.jpg',
      category: 'lainnya',
      bestPrice: false,
      soldOut: true
    },
    {
      name: 'Strange Color Crack Dinosaur Egg Hatch',
      price: 300000,
      images: 'assets/img/products/strange-color-crack-dinosaur-egg-hatch-toys-mainan-telur-dinosaur-1-pcs.jpg',
      category: 'lainnya',
      bestPrice: false,
      soldOut: false
    },
    {
      name: 'Buckyballs Neocube Magnetic Balls Toys',
      price: 120000,
      images: 'assets/img/products/buckyballs-neocube-magnetic-balls-toys-216pcs-3mm.jpg',
      category: 'lainnya',
      bestPrice: false,
      soldOut: false
    },
    {
      name: 'Umpan Pancing Luminous Squid',
      price: 30000,
      images: 'assets/img/products/umpan-pancing-luminous-squid-soft-bait-lure-10-pcs.jpg',
      category: 'lainnya',
      bestPrice: true,
      soldOut: false
    },
];
})();