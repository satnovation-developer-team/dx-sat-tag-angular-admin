import { Injectable } from '@angular/core';

@Injectable()
export class CommonUrlsService {

    public _URL: any = {
        ERROR: '/error',

        LOGIN: '',
        DASHBOARD: 'dashboard',

        APPLICATION_SERVICE_CHARGE_LIST:'/application_service_charge_home',
    }

    constructor(
    ) {

    }

    get urls(): any {
        return this._URL;
    }

    get appUrl(): string {
        return '';
    }

}