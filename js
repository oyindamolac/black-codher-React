'use strict'

//class ClickButton extends React.component {
  //  constructor(props)  {
   //     super(props);
     //   this.state = {
     //       clicked: true 
    //    }
   // }

    // Render how it works.
   // render(){
   //     return React.createElemnt (
  //          "button",   {
  //              style: {
  //                  backgroundcolor: "#3392e4",
  //                  color: "#fff",
 //                   border: "0",
 //                   padding: "10px 20px",
  //                  fontweight: "bold",
 //                   borderRadius: "5px",
  //                  fontSize:"1.1em"
 //               },
 //               onclick: () => this.setState({ clicked: false })
 //           },
 //           this.state.clicked ? "Button clicked" : "something else"
//       );
 //   }
//}

//const domcontainer = document.querySelector("#root");
//ReactDOm.render(React.createElemnt(ClickButtonlickedButton), domcontainer);

// EXAMPLE OF HOW CLASS WORK 
// /*class Animal {
 //   constructor(eyes, legs, mouth) {
  //      this.eyes = eyes;
  //      this.legs = legs;
    //    this.mouth = mouth;
  //  }

   // walk() {
      //  console.log("I am walking");
 //   }
// }



// class work()Create a button, with a style (color, font size and font weight) using React.createElement.

return React. createElemnt(
    "button",
    {
        style:{
            background: "purple",
            color : "brown",
            fontsize: "3.1em",
            fontweight:"light"

        },
        
        
    },
    
)