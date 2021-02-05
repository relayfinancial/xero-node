import { Contact } from '././contact';

export class ContactGroup {
    /**
    * The Name of the contact group. Required when creating a new contact  group
    */
    'name'?: string;
    /**
    * The Status of a contact group. To delete a contact group update the status to DELETED. Only contact groups with a status of ACTIVE are returned on GETs.
    */
    'status'?: ContactGroup.StatusEnum;
    /**
    * The Xero identifier for an contact group – specified as a string following the endpoint name. e.g. /297c2dc5-cc47-4afd-8ec8-74990b8761e9
    */
    'contactGroupID'?: string;
    /**
    * The ContactID and Name of Contacts in a contact group. Returned on GETs when the ContactGroupID is supplied in the URL.
    */
    'contacts'?: Array<Contact>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "ContactGroup.StatusEnum"
        },
        {
            "name": "contactGroupID",
            "baseName": "ContactGroupID",
            "type": "string"
        },
        {
            "name": "contacts",
            "baseName": "Contacts",
            "type": "Array<Contact>"
        }    ];

    static getAttributeTypeMap() {
        return ContactGroup.attributeTypeMap;
    }
}

export namespace ContactGroup {
    export enum StatusEnum {
        ACTIVE = <any> 'ACTIVE',
        DELETED = <any> 'DELETED'
    }
}
