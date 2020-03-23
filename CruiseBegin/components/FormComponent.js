class FormComponent extends Component{
    constructor(card){
        super('card')
        this.state = {card,
            handlers: {
                "add":(event)=>{
                    event.preventDefault();
                    console.log(event);
                }
            }
        }
    }
    getHtmlTemplateElement(){
        return super.getHtmlTemplateElement('.formComponent');
    }
    render(){
        return super.render('listener')
    }

}