// name/exposes del ModuleFederationPlugin dentro del webpack del microservice
//import 'products/ProductsIndex';
//import 'cart/CartsShow';
import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartsMount } from 'cart/CartsShow';
console.log('Container');

productsMount(
	document.querySelector('#dev-products')
);
cartsMount(document.querySelector('#CARTDEV'));
