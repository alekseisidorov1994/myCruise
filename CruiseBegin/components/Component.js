class Component{
    constructor(type){
        this.type = type;
    }
    getHtmlTemplateElement(selector){
        return document.querySelector(`${selector}`).content.cloneNode(true)
    }
    render(...directivesType){
       
        let template = this.getHtmlTemplateElement()
        
        directivesType.forEach(type => {
            let elements = template.querySelectorAll(`[data-${type}]`);
            let nameDirective = type[0].toUpperCase()+type.slice(1)+'Directive';
            const registeredDirectiveClass = registerDir.getDirectiveByName(nameDirective)
            elements.forEach(element =>{
                const direcvite = new  registeredDirectiveClass(element, element.dataset[type], this.state)
                direcvite.render(this.state)
                // console.log(this.state);
            })
        })
       return template
    }
   
}