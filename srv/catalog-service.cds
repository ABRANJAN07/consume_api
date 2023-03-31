using {NorthWind as external} from './external/NorthWind.csn';
using {API_BUSINESS_PARTNER as db} from './external/API_BUSINESS_PARTNER.csn';

service CatalogService {

    @readonly
    entity Products as projection on external.Products {
        key ID, Name, Description, ReleaseDate, DiscontinuedDate, Rating, Price
    };

    @readonly
    entity A_AddressEmailAddress as projection on db.A_AddressEmailAddress {
        key AddressID, EmailAddress
    };

}