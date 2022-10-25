var express = require('express');
var router = express.Router();

const anaSayfa = function (req, res, next) {
  res.render('anasayfa', {
    "baslik":"AnaSayfa", 
    "sayfaBaslik": {
      "siteAd": "MekanBul",
      "slogan": "Civardaki Mekanları Keşfet!"
    },
    "mekanlar": [
      {
        "ad": "Starbucks",
        "adres": "Centrum Garden AVM",
        "puan": "4",
        "imkanlar": ["Dünya Kahveleri", "Kekler", "Pastalar"],
        "mesafe": "18km"
      }
      ,
      {
        "ad": "Gloria",
        "adres": "Centrum Garden AVM",
        "puan": "2",
        "imkanlar": ["Dünya Kahveleri", "Kekler", "Pastalar"],
        "mesafe": "18km"
      }
      ,
      {
        "ad": "Ss",
        "adres": "Centrum Garden AVM",
        "puan": "3",
        "imkanlar": ["Dünya Kahveleri", "Kekler", "Pastalar"],
        "mesafe": "18km"
      }
    ]
  }
  );
}

const mekanBilgisi = function (req, res, next) {
  res.render('mekanbilgisi',
   { 
    "baslik": "Mekan Bilgisi",
    "mekanBaslik": "Starbucks",
    "mekanDetay": {
      "ad": "Starbucks",
      "adres": "Centrum Garden AVM",
      "puan:": "4",
      "imkanlar": ["Dünya Kahveleri", "Kekler", "Pastalar"],
      "koordinatlar": {
        "enlem": "37.7",
        "boylam": "30.5"
      },
      "saatler": [
        {
          "gunler": "Pazartesi-Cuma",
          "acilis": "09:00",
          "kapanis": "23:00",
          "kapali": false
        },
        {
          "gunler": "Cumartesi-Pazar",
          "acilis": "10:00",
          "kapanis": "22:00",
          "kapali": false
        }
      ],
      "yorumlar": [
        {
          "yorumYapan": "Asım Sinan Yüksel",
          "puan": "4",
          "tarih": "20 Ekim 2022",
          "yorumMetni": "Kahveler iyi."
        }
      ]

    }
   }
  );
}

const yorumEkle = function (req, res, next) {
  res.render('yorumekle', { title: 'Yorum Ekle' });
}

module.exports = {


  anaSayfa,
  mekanBilgisi,
  yorumEkle,
}