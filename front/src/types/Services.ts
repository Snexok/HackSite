export default class Service {
	id: number | null;
	title: string;
	description: string;
	price: number;

	constructor(id: number | null, title: string, description: string, price: number) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.price = price;
	}
}
