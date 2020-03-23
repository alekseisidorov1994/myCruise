class CardComponent extends Component{
    constructor(card){
        super('card')
        this.state = {
            card,
            handlers: {
                "remove":(event)=>{
                    store.removeElement(this.state.card)
                },
                "edit":(event)=>{
                    console.log(event);
                },
            }
        }
    }
    getHtmlTemplateElement(){
        return super.getHtmlTemplateElement('.cardComponent');
    }
    render(){
        return super.render('text','class', 'if', 'attribute', 'listener')
    }
}