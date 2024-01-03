const CustomRender = (domChildren, domElement) => {
  const newElement = document.createElement(domChildren.type);

  newElement.innerHTML = domChildren.childrens;

  for (let prop in domChildren.props) {
        if(prop.childrens)continue;
        newElement.setAttribute(prop,domChildren.props[prop]);
  }
  
  domElement.appendChild(newElement);

};

const domElement = document.getElementById("root");

const domChildren = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  childrens: "Visit the google",
};

CustomRender(domChildren, domElement);
