import { Col, Container, Row } from "react-bootstrap";
import "./ResourcesStyles.css";
import NavbarComponent from "../Navbar/NavbarComponent";
import { prod, dev } from "../../Data/Environment";
import React from 'react'; // Import React

declare var google: any;

export default function ResourcesComponent() {

  let apiKey = '?key=';

  if(prod.isLive === true)
  {
      apiKey += prod.apiKey;
  }else{
      apiKey += dev.apiKey;
  }

  let map: google.maps.Map;

  function initMap(position: GeolocationPosition) {
    const { Map } = google.maps;
    map = new Map(document.getElementById("map") as HTMLElement, {
      center: { lat: position.coords.latitude, lng: position.coords.longitude },
      zoom: 12,
    });

    const request = {
      location: map.getCenter(),
      radius: 10000,
      type: ["hospital"] as unknown as string[], // Cast the array to string[]
    };

    const service = new google.maps.places.PlacesService(map);

    function callback(results: any, status: any) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
      }
    }

    function createMarker(place: any) {
      const { Marker } = google.maps;

      const marker = new Marker({
        map,
        position: place.geometry.location,
      });

      google.maps.event.addListener(marker, "click", function () {
        const { InfoWindow } = google.maps;

        const infowindow = new InfoWindow({
          content: place.name,
        });

        infowindow.open(map, marker);
      });
    }

    service.nearbySearch(request, callback);
  }

  function loadScript() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js${apiKey}&libraries=places`;
    script.defer = true;
    script.onload = function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position: GeolocationPosition) {
          initMap(position);
        }, function() {
          console.log("Could not get current position");
          initMap({ coords: { latitude: 37.7749, longitude: -122.4194 } } as GeolocationPosition);
        });
      } else {
        console.log("Geolocation is not supported by this browser");
        initMap({ coords: { latitude: 37.7749, longitude: -122.4194 } } as GeolocationPosition);
      }
    };
    document.body.appendChild(script);
  }

  React.useEffect(() => { // Use React.useEffect instead of useEffect
    loadScript();
  }, []);

  return (
    <>
      <NavbarComponent />
      <Container fluid className="resCont">
        <Row className="mapBx">
          <Col className="innerText">
            <p className="topTxt">
              I’m sorry you’re feeling this way, here are some local resources
              you can use and that can help you, please don’t be afraid to reach
              out.
            </p>
            <div id="map"></div>
            <p className="topTxt">
              Here are some numbers you can call if you need someone to talk to,
              these are available 24 hours.
            </p>
            <ul>
              <li>
                <p className="bulletTxt">
                  National Suicide and Crisis Lifeline - 988
                </p>
              </li>
              <li>
                <p className="bulletTxt">
                  National Sexual Assault Hotline - (800) 656-4673
                </p>
              </li>
              <li>
                <p className="bulletTxt">
                  National Domestic Violence Hotline - (800) 799-7233
                </p>
              </li>
              <li>
                <p className="bulletTxt">
                  Childhelp National Child Abuse Hotline - (800) 422-4453
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}