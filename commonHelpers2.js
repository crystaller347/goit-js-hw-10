import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as o}from"./assets/vendor-77e16229.js";const m=document.querySelector(".form");m.addEventListener("submit",r=>{r.preventDefault();const e=r.currentTarget.elements.delay.value,s=r.currentTarget.elements.state.value;new Promise((t,i)=>{setTimeout(()=>{s==="fulfilled"?t(e):i(e)},e)}).then(t=>{o.success({color:"green",position:"topRight",message:`✅ Fulfilled promise in ${e}ms`})}).catch(t=>{o.error({color:"red",position:"topRight",message:`❌ Rejected promise in ${e}ms`})})});
//# sourceMappingURL=commonHelpers2.js.map
