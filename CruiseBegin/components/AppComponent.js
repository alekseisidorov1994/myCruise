class AppComponent extends Component{
    constructor(state){
        super('app')
        this.state = {
            cards:[],
            ...state
        }
    }
    getHtmlTemplateElement(){
        return super.getHtmlTemplateElement('.appComponent');
    }
    render(){
        return super.render('for', 'put')
    }
}