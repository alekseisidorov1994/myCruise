(function fetchGetJSON(){
    fetch('./fakeData.json')
        .then(response => response.json())
        .then(response => localStorage.setItem('cards', JSON.stringify(response)))
})('./fakeData')
// <--Register directives------------------------------------------------------>
const registerDir = new DirectiveRegistry()
registerDir.registerDirective(TextDirective)
registerDir.registerDirective(PutDirective)
registerDir.registerDirective(ForDirective)
registerDir.registerDirective(IfDirective)
registerDir.registerDirective(ClassDirective)
registerDir.registerDirective(AttributeDirective)
registerDir.registerDirective(ListenerDirective)
// <--Register components------------------------------------------------------>
const registerCom = new ComponentRegistry()
registerCom.registerComponent(FormComponent)
registerCom.registerComponent(CardComponent)


const store = new Store()
store.setInitialState(JSON.parse(localStorage.getItem('cards')))

const appComponent = new AppComponent(store.state)

const app = document.querySelector('#app')

app.append(appComponent.render())

function update(){
    // app.innerHTML = '';
    app.append(appComponent.render());
}

store.addCallback(update)

