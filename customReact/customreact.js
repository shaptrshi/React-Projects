function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children                                  // when there are less attributes to set
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {                                        //when there are many attributes to set
      if (prop === 'children') continue;     //its used in case of children is present inside the  props
      domElement.setAttribute(prop, reactElement.props[prop]) 
    } 

    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)