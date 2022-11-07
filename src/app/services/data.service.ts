import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface PlaceResponse {
    averageDistance: AverageDistance;
    content: PlaceList[];
}

export interface AverageDistance {
    value: number;
    metric: string;
}

export interface PlaceList {
    content: Place;
    distance: Distance;
}

export interface Place {
    id: string;
    name: string;
    address: string;
    description: string;
    lat: number;
    lon: number;
    refCategoryId: string;
    refId: any;
}

export interface Distance {
    value: number;
    metric: string;
}


@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private httpClient: HttpClient) {
    }

    public getPlaces(lat: number, lon: number, distance: number): Observable<PlaceResponse> {
        const httpOptions = {
            headers: new HttpHeaders({
                'X-RapidAPI-Host': 'geolocation-utils1.p.rapidapi.com',
                'X-RapidAPI-Key': 'My_API_KEY'
            })
        };
        // eslint-disable-next-line max-len
        return this.httpClient.get<PlaceResponse>(`https://geolocation-utils1.p.rapidapi.com/place/search/list?distance=${distance}&lon=${lon}&lat=${lat}`, httpOptions);
    }

}
