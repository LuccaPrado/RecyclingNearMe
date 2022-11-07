import {Component, OnInit, Input} from '@angular/core';
import {PlaceList} from '../services/data.service';

@Component({
    selector: 'app-place',
    templateUrl: './place.component.html',
    styleUrls: ['./place.component.scss'],
})
export class PlaceComponent implements OnInit {
    @Input() place: PlaceList;

    constructor() {
    }

    ngOnInit() {
    }

}
