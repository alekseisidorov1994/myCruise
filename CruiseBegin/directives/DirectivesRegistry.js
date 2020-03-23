class DirectiveRegistry{
    constructor(){
        this.directives = {}
    }
    registerDirective(directive){
        this.directives[directive.name] = directive
       
    }
    getDirectiveByName(name){
       return this.directives[name]
    }
}