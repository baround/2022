import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import styles from './component-map.module.scss'
import PropTypes from 'prop-types';

export default function Map({ content, postData, setMapObject, pageType, mapObject }) {
  const [pinners, setAllPinner] = useState(postData);
  const googlemap = useRef(null);
  useEffect(() => {
    var allItems = [];
    if (pageType == 'itinerari') {
      postData.acf.contenuto.map((block, index) => {

        if (block.acf_fc_layout == 'attivita') {
          let slug = block.titolo.toLowerCase().split(' ').join('-');
          let marketObj = {
            location: block.indirizzo,
            slug: `#${slug}`,
            image: block.immagine,
            price: false,
            title: block.titolo
          }
          allItems.push(marketObj);
        }
      })
    } else if (pageType == 'locale') {

      let marketObj = {
        location: postData.acf.indirizzo,
        slug: `/locali/${postData.slug}`,
        image: postData.acf.immagine_di_copertina,
        price: postData.acf.fascia_di_prezzo,
        title: postData.title.rendered
      }
      allItems.push(marketObj);
    } else {
      postData.map((block, index) => {
        let marketObj = {
          location: block.acf.indirizzo,
          slug: `/locali/${block.slug}`,
          image: block.acf.immagine_di_copertina,
          price: block.acf.fascia_di_prezzo,
          title: block.title.rendered
        }
        allItems.push(marketObj);
      })
    }
    const loader = new Loader({
      apiKey: 'AIzaSyDipxxdu6s5Te5oRe0Ll9szmqxfdFLN6jA',
      version: 'weekly',
    });
    let map;
    loader.load().then(() => {
      var initialView = {
        center: {
          lat: 45.4652408,
          lng: 9.1685469,
        },
        zoom: 13,
      };
      const buttonsDisabled = {
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: true,
      };
      const google = window.google;
      map = new google.maps.Map(googlemap.current, {
        ...initialView,
        ...buttonsDisabled,
        styles: [
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e9e9e9"
              },
              {
                "lightness": 17
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              },
              {
                "lightness": 20
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 17
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 29
              },
              {
                "weight": 0.2
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 18
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 16
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              },
              {
                "lightness": 21
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dedede"
              },
              {
                "lightness": 21
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "visibility": "on"
              },
              {
                "color": "#ffffff"
              },
              {
                "lightness": 16
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "saturation": 36
              },
              {
                "color": "#333333"
              },
              {
                "lightness": 40
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f2f2f2"
              },
              {
                "lightness": 19
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#fefefe"
              },
              {
                "lightness": 20
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#fefefe"
              },
              {
                "lightness": 17
              },
              {
                "weight": 1.2
              }
            ]
          }
        ]
      });
      const myMarker = {
        url: '/images/icon-pinner-locali.png', // url
        scaledSize: new google.maps.Size(20, 34), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
      };
      var lastWindow = null;
      for (let i = 0; i < allItems.length; i++) {
        const latLng = new google.maps.LatLng(allItems[i].location.lat, allItems[i].location.lng);
        let locale = new google.maps.Marker({
          position: latLng,
          icon: myMarker,
          map: map,
        });
        let contentString = `
        <div class="baloonMap">
          <figure style="background-image: url(${allItems[i].image});">
            <a href=${allItems[i].slug}"><img src="${allItems[i].image}" /></a>
            ${(allItems[i].price) ? (
            `
                <div class="price">
                  ${allItems[i].price == 'alto' ? `<span>€€€</span>` : ``}
                  ${allItems[i].price == 'medio' ? `<span>€€</span>` : ``}
                  ${allItems[i].price == 'basso' ? `<span>€</span>` : ``}
                </div>
                `
          ) : ''
          }
          </figure>
          <div class="baloonMap__content">
            <h2><a href="${allItems[i].slug}">${allItems[i].title}</a></h2>
            <div class="address">${allItems[i].location.address}</div>
            <a class="cta" href="${allItems[i].slug}">Scopri di più</a>
          </div>
        </div>
      `;
        const infowindow = new google.maps.InfoWindow({
          content: contentString,
        });


        locale.addListener("click", () => {
          if (lastWindow) lastWindow.close();
          infowindow.open({
            anchor: locale,
            map,
            shouldFocus: true,
          });
          lastWindow = infowindow;
        });
      }
      setMapObject(map); // NOTE
    });
  }, [setMapObject]
  );

  return (
    <div id="sectionMap" className={`${styles.map__mapWrap} ${pageType}__map__mapWrap`}>
      <div className={`${styles.map__mapWrap__map} ${pageType}__map__mapWrap__map`} id="map" ref={googlemap} />
    </div>
  );
}
Map.propTypes = {
  setMapObject: PropTypes.func.isRequired,
};