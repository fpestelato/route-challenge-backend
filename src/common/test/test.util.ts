import { Delivery } from "../../deliveries/schemas/delivery.schema";

export default class TestUtil {
    static getValidDelivery(): Delivery {
        const delivery = new Delivery();
        delivery.name = 'Valid Name';
        delivery.weight = 10.47;
        delivery.publicArea = 'Rua Manoel Bandeira';
        delivery.number = 63;
        delivery.district = 'Campanário';
        delivery.complement = 'Fundos';
        delivery.city = 'Diadema';
        delivery.state = 'São Paulo';
        delivery.country = 'Brasil';
        delivery.latitude = 37.4211274197085;
        delivery.longitude = -122.0829009197085;
        return delivery;
    }
}