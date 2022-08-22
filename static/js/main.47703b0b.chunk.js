(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,e,i){},13:function(t,e,i){},15:function(t,e,i){"use strict";i.r(e);var n=i(7),a=i.n(n),s=i(2),r=i(3),o=i(5),c=i(4),l=i(1),u=i.n(l),m=(i(12),i(13),i(0)),d=function(t){Object(o.a)(i,t);var e=Object(c.a)(i);function i(){var t;Object(s.a)(this,i);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1,currentPosition:0,disabledLeft:!0,disabledRight:!1},t.scrollLeft=function(){var e=t.state,i=e.step,n=e.itemWidth,a=e.currentPosition,s=e.infinite,r=n*i;a+r>0?t.setState((function(t){return{currentPosition:t.currentPosition-t.currentPosition}})):t.setState((function(t){return{currentPosition:t.currentPosition+r}})),s?t.setInfinite():t.updateButtonState()},t.scrollRight=function(){var e=t.state,i=e.step,n=e.itemWidth,a=e.frameSize,s=e.currentPosition,r=e.infinite,o=(t.props.images.length-a)*n*-1,c=s+n*i*-1;c<o?t.setState((function(){return{currentPosition:o}})):t.setState({currentPosition:c}),r?t.setInfinite():t.updateButtonState()},t.setStep=function(e){t.setState({step:+e.target.value}),t.updateButtonState()},t.setFrameSize=function(e){t.setState({frameSize:+e.target.value}),t.updateButtonState()},t.setItemWidth=function(e){t.setState({itemWidth:+e.target.value}),t.updateButtonState()},t.setAnimationDuration=function(e){t.setState({animationDuration:+e.target.value})},t.setInfinite=function(){var e=t.props.images,i=t.state,n=i.frameSize,a=i.itemWidth,s=i.currentPosition,r=(e.length-n)*a*-1;s===r&&t.setState({currentPosition:0,disabledRight:!1}),0===s&&t.setState({currentPosition:r,disabledLeft:!1})},t.changeInfinite=function(){t.setState((function(t){return{infinite:!t.infinite}}))},t.updateButtonState=function(){var e=t.props.images,i=t.state,n=i.frameSize,a=i.itemWidth,s=(e.length-n)*a*-1;t.setState((function(t){return{disabledLeft:!(t.currentPosition<0),disabledRight:!(t.currentPosition>s)}}))},t}return Object(r.a)(i,[{key:"render",value:function(){var t=this.props.images,e=this.state,i=e.step,n=e.frameSize,a=e.itemWidth,s=e.animationDuration,r=e.infinite,o=e.currentPosition,c=e.disabledLeft,l=e.disabledRight,u=a*n;return Object(m.jsxs)("div",{className:"Carousel",children:[Object(m.jsx)("ul",{className:"Carousel__list",style:{width:u},children:t.map((function(e){return Object(m.jsx)("li",{className:"Carousel__image",children:Object(m.jsx)("img",{src:e,alt:"".concat(t.indexOf(e)+1),style:{width:a,transform:"translateX(".concat(o,"px)"),transition:"".concat(s,"ms")}})},e)}))}),Object(m.jsxs)("div",{className:"Carousel__buttons",children:[Object(m.jsx)("button",{type:"button",className:"Carousel__button",disabled:c,onClick:this.scrollLeft,children:"Prev"}),Object(m.jsx)("button",{type:"button",className:"Carousel__button",disabled:l,onClick:this.scrollRight,"data-cy":"next",children:"Next"})]}),Object(m.jsxs)("div",{className:"Carousel__label-container",children:[Object(m.jsxs)("label",{htmlFor:"step",className:"Carousel__label",children:["Step",Object(m.jsx)("input",{id:"step",type:"number",min:1,max:5,value:i,onChange:this.setStep})]}),Object(m.jsxs)("label",{htmlFor:"frameSize",className:"Carousel__label",children:["Frame size",Object(m.jsx)("input",{id:"frameSize",type:"number",value:n,min:1,max:5,onChange:this.setFrameSize})]}),Object(m.jsxs)("label",{htmlFor:"itemWidth",className:"Carousel__label",children:["Image width",Object(m.jsx)("input",{id:"itemWidth",type:"number",min:50,max:300,value:a,onChange:this.setItemWidth})]}),Object(m.jsxs)("label",{htmlFor:"animationDuration",className:"Carousel__label",children:["Animation duration",Object(m.jsx)("input",{id:"animationDuration",type:"number",min:300,max:3e3,value:s,onChange:this.setAnimationDuration})]}),Object(m.jsxs)("label",{htmlFor:"infinite",className:"Carousel__label",children:["Infinite",Object(m.jsx)("input",{id:"infinite",type:"checkbox",checked:r,onChange:this.changeInfinite})]})]})]})}}]),i}(u.a.Component),h=function(t){Object(o.a)(i,t);var e=Object(c.a)(i);function i(){var t;Object(s.a)(this,i);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},t}return Object(r.a)(i,[{key:"render",value:function(){var t=this.state.images;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("h1",{className:"App__title","data-cy":"title",children:["Carousel with"," ",t.length," ","images"]}),Object(m.jsx)(d,{images:t})]})}}]),i}(u.a.Component),b=h;a.a.render(Object(m.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.47703b0b.chunk.js.map