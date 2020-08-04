import { Types } from 'mongoose';

interface IDomainUser {
    id?: string;
    domain?: string;
    name?: string;
    uniqueID?: string;
    adfsUID?: string;
    personId?: Types.ObjectId | string | IUser;
}

interface IOrganizationGroup {
    id?: string;
    name: string;
    directManagers?: IUser[] | string[];
    directMembers?: IUser[] | string[];
    createdAt: Date;
    updatedAt?: Date;
    ancestors?: string[];
    children?: IOrganizationGroup[] | string[];
    hierarchy?: string[];
    isALeaf?: boolean;
    isAlive?: boolean;
}

export interface IUser {
    _id?: string;
    id: string;
    identityCard: string;
    personalNumber?: string;
    domainUsers: IDomainUser[];
    entityType: string;
    serviceType?: string;
    firstName: string;
    lastName: string;
    currentUnit?: string;
    alive?: boolean;
    dischargeDay?: Date;
    hierarchy: string[];
    hierarchyFlat?: string;
    directGroup: string | Types.ObjectId | IOrganizationGroup;
    managedGroup?: string | Types.ObjectId | IOrganizationGroup;
    rank?: string;
    updatedAt?: Date;
    createdAt?: Date;
    job: string;
    mail?: string;
    phone?: string[];
    mobilePhone?: string[];
    address?: string;
    responsibility?: string;
    responsibilityLocation?: string | Types.ObjectId | IOrganizationGroup;
    clearance?: string;
    fullName?: string;
}