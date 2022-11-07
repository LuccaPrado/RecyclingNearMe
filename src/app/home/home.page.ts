import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {DataService, PlaceList} from '../services/data.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    myAddress: string;
    lat: number;
    lon: number;
    placeResp: PlaceList[] = [];
    distance = 3;


    constructor(private data: DataService, private ref: ChangeDetectorRef) {

    }

    ngOnInit() {
        const userLocationConfig = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        navigator.geolocation.getCurrentPosition((suc) => this.manipulateUserCoordinate(suc),
            this.errorAcquiringLocation, userLocationConfig);
    }

    manipulateUserCoordinate(pos) {
        const crd = pos.coords;
        this.lat = crd.latitude;
        this.lon = crd.longitude;
        //this.myAddress = this.data.getUserAddress(this.lat, this.lon);
        this.data.getPlaces(this.lat, this.lon, this.distance).subscribe(placeResponse => {
            this.placeResp = placeResponse.content;
        });
    }

    errorAcquiringLocation(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }


    refresh(ev) {
        setTimeout(() => {
            ev.detail.complete();
        }, 3000);
    }

    changeDistance() {
        switch (this.distance) {
            case 3:
                this.distance = 5;
                break;
            case 5:
                this.distance = 10;
                break;
            case 10:
                this.distance = 3;
                break;
        }
        this.data.getPlaces(this.lat, this.lon, this.distance).subscribe(placeResponse => {
            this.placeResp = placeResponse.content;
        });
    }
}
