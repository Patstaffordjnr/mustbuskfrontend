import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { map, catchError } from 'rxjs/operators';
import { LocationService } from '../../app/maps/map-service/location.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {

   options: google.maps.MapOptions = {
    // center: {lat: 52.2922, lng: 6.9089},
    center: {lat: 52.5416592, lng: 13.4233138}, 
    zoom: 13,
    draggableCursor: 'default'
    
  };

 constructor(locationService: LocationService) {

    var optionsAfter = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos: any) {
      var crd = pos.coords;
      // console.log('Your current position is:');
      // console.log(`Latitude : ${crd.latitude}`);
      // console.log(`Longitude: ${crd.longitude}`);
      // console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err: any) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, optionsAfter);
    // Use our locationservice!
    locationService.getPosition().then(pos => {
      this.options.center.lat = pos.lat;
      this.options.center.lng = pos.lng;
    });
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      navigator.geolocation.getCurrentPosition(success => {
        /* Do some magic. */
      }, failure => {
        if (failure.message.startsWith("Only secure origins are allowed")) {
          // Secure Origin issue.
        }
      });
      (console.log(position.coords))
      return;
    })
  }

  addEvent(event: google.maps.MapMouseEvent) {

    console.log(event)
    return event;
  }
  
  createEvent() {
    document.querySelector('.overlay').classList.remove('hidden');
    const closeOverlay = function () {
      document.querySelector('.overlay').classList.add('hidden');
    };
    document.querySelector('.overlay').addEventListener('click', closeOverlay);
    document.body.style.cursor = 'copy';
    }
    // function initMap() {
    //   var coordinates = { lat: 40.785845, lng: -74.020496 };
    //   var map = new google.maps.Map(document.getElementById('map')!, {
    //       zoom: 14,
    //       center: coordinates,
    //       scrollwheel: false
    //   });
    //   var marker = new google.maps.Marker({
    //       position: coordinates,
    //       map: map,
    //       label: "5409 Madison St"
    //   });
    // }



    ngOnInit() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.options.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
      })
    }

  }

