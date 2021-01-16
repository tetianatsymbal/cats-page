class Product extends Component{
    constructor(productsId){
        super(productsId);
        this.productItem = this.productsList.find(".product-item:not(.disable)");
        this.selectedProductItem = this.productsList.find(".product-item.selected");
        this.buyLink = this.productsList.find(".text-bottom__buy-link");
        this.createEvents();
    }
    toggleProductSelect(event){
        event.preventDefault();
        let currentItem = $(event.currentTarget);
        currentItem.toggleClass("selected");
        this.textBottom = currentItem.find(".text-bottom");
        this.textBottomSelected = currentItem.find(".text-bottom-selected");

        if(currentItem.hasClass("selected")) {
            currentItem.mouseenter(this.setHoverToSelect.bind(this));
            currentItem.mouseleave(this.cancelHoverToSelect.bind(this));
            this.textBottom.addClass("product-item__text-bottom_display-none");
            this.textBottomSelected.addClass("product-item__text-bottom-selected_display-block");
        } 
        else {
            currentItem.unbind('mouseenter mouseleave');
            this.setDefaultProductHeader(currentItem);
            this.textBottom.removeClass("product-item__text-bottom_display-none");
            this.textBottomSelected.removeClass("product-item__text-bottom-selected_display-block");
        }
    }
    setHoverToSelect(event){
        let currentItem = $(event.currentTarget);
        let productHeader = currentItem.find(".product-header");
        let productHeaderSelectedHover = currentItem.find(".product-header-selected-hover");
        productHeader.addClass("product__product-header_display-none");
        productHeaderSelectedHover.addClass("product__product-header-selected-hover_display-block");
    }
    cancelHoverToSelect(event){
        let currentItem = $(event.currentTarget);
        this.setDefaultProductHeader(currentItem);
    }
    setDefaultProductHeader(currentItem){
        let productHeader = currentItem.find(".product-header");
        let productHeaderSelectedHover = currentItem.find(".product-header-selected-hover");
        productHeader.removeClass("product__product-header_display-none");
        productHeaderSelectedHover.removeClass("product__product-header-selected-hover_display-block");
    }
    createEvents(){
        this.productItem.click(this.toggleProductSelect.bind(this));
        this.buyLink.click(this.toggleProductSelect.bind(this));
        this.selectedProductItem.mouseenter(this.setHoverToSelect.bind(this));
        this.selectedProductItem.mouseleave(this.cancelHoverToSelect.bind(this));
    }
}
let product = new Product ("#products");