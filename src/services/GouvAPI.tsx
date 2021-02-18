import axios from 'axios';
import { API_ORGANIZATION } from '../config';



interface Organization {
    features: Array<any>
    types: any
}

export default class GouvService {

    static getOrganization(organization: string): Promise<Organization> {
        return axios
        .get(API_ORGANIZATION + organization)
        .then(response => response.data)
        .catch(error => this.handleError(error));
    }

    // static getobject(id: number): Promise<Gouv|null> {
    //     return axios
    //     .get(url)
    //     .then(response => response.json())
    //     .then(data => this.isEmpty(data) ? null : data)
    //     .catch(error => this.handleError(error));
    // }

    // static updateobject(object: object): Promise<Gouv> {
    //     return axios
    //     .update
    // }

    // static addobject(object: object): Promise<object> {
    //     return axios
    //     .post(url, {
    //     ...object,
    //     })
    //     .then(response => response.data)
    //     .catch(error => this.handleError(error))
    // }

    // static isEmpty(data: any): boolean {
    //     return Gouv.keys(data).length === 0;
    // }

    static handleError(error: Error):void {
        console.error(error)
    }

}