import { Injectable } from '@angular/core';
import {LoadingController} from "@ionic/angular";

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    constructor(private loadingController: LoadingController) { }

    public present() {
        this.loadingController.create({message: 'Please wait...'})
            .then((res) => {
                return res.present();
            })
            .then(r => {});
    }

    public dismiss() {
        let loadCtrl = this.loadingController.getTop()
        loadCtrl
            .then((res) => {
                res.dismiss().then(r => {})
            })
    }
}
