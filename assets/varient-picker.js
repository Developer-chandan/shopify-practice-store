
class VarientPicker extends HTMLElement{
    constructor(){
    super();

    // console.log('Vairent picker connected..');
    }

    get sectionId (){
        return this.dataset.sectionId; //this returns shopify section main product
    }

    connectedCallback(){
        this.VarientPicker = this.querySelector('select[name="id"]');
        this.VarientPicker.addEventListener('change', this.handleChange.bind(this))
    }

    handleChange(event){
        const select = event.currentTarget;
        console.log('this is the even', select)
        const url = `${window.location.pathname}?variant=${select.value}&section_id=${this.sectionId}`
        console.log('This is currentTarget', url);
        fetch(url)
        .then((response => {
           return response.text()
        }))
        .then(html => {
            const newDiv =  document.createElement('div');
            newDiv.innerHTML = html;
            
            document.querySelector('.product-section').innerHTML =  newDiv.querySelector('.product-section').innerHTML;
        })
    }
}


customElements.define('varient-picker', VarientPicker);