import featuredProductSlider from './featured-product-slider/scripts';
import categoryProducts from './category-products/scripts';
import FeaturedProduct from './featured-product/scripts';
import Instagram from './instagram/scripts';
import StickyHeader from './sticky-header/scripts';
import Swatches from './swatches/scripts';
import Reorder from './reorder/scripts';
import lity from 'lity';

export default function(){
	Instagram();
	StickyHeader();
	Reorder();
}

const featuredProduct = new FeaturedProduct();
featuredProduct.request();

const categoryProd = new categoryProducts();
categoryProd.setup();
categoryProd.activebtn();

featuredProductSlider();


const swatches = new Swatches();
swatches.filter();
swatches.getOptions();
